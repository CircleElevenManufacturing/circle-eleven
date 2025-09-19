import { google } from "googleapis";
import { NextResponse } from "next/server";

type FormData = {
  first: string;
  last: string;
  phone: string;
  email: string;
  subject: string;
  leadTime: string;
  message: string;
  attachments: File[];
};

async function uploadToDrive(files: any) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/drive.file"],
  });

  const drive = google.drive({ version: "v3", auth });

  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    await drive.files.create({
      requestBody: {
        name: file.name,
        parents: [process.env.GOOGLE_DRIVE_FOLDER as string],
      },
      media: {
        mimeType: file.type,
        body: buffer,
      },
    });
  }
}

async function sendEmail(payload: FormData) {
  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const text = `
Name: ${payload.first} ${payload.last}
Phone: ${payload.phone}
Email: ${payload.email}
Lead Time: ${payload?.leadTime || "N/A"}

Message:
${payload?.message || "N/A"}
  `;

  await transporter.sendMail({
    from: `"Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: "New Contact Form Submission",
    text,
  });
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const data: FormData = {
      first: formData.get("first")?.toString() || "",
      last: formData.get("last")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      leadTime: formData.get("leadTime")?.toString() || "",
      message: formData.get("message")?.toString() || "",
      subject: formData.get("subject")?.toString() || "",
      attachments: (formData.getAll("attachments") as File[]) || [],
    };

    if (data?.attachments?.length > 0) await uploadToDrive(data.attachments);
    await sendEmail(data);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form submission error:", err);
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
