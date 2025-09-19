import { NextResponse } from "next/server";

type FormDataType = {
  first: string;
  last: string;
  phone: string;
  email: string;
  subject: string;
  leadTime: string;
  message: string;
  attachments: File[];
};

async function sendEmail(payload: FormDataType) {
  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASS!, // App password if using Gmail
    },
  });

  const text = `
Name: ${payload.first} ${payload.last}
Phone: ${payload.phone}
Email: ${payload.email}
Lead Time: ${payload.leadTime || "N/A"}

Message:
${payload.message || "N/A"}
`;

  const attachments = await Promise.all(
    payload.attachments.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()),
      contentType: file.type,
    }))
  );

  await transporter.sendMail({
    from: `"Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO!,
    subject: payload.subject,
    text,
    attachments: attachments.length > 0 ? attachments : undefined,
  });
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const data: FormDataType = {
      first: formData.get("first")?.toString() || "",
      last: formData.get("last")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      subject: formData.get("subject")?.toString() || "",
      leadTime: formData.get("leadTime")?.toString() || "",
      message: formData.get("message")?.toString() || "",
      attachments: (formData.getAll("attachments") as File[]) || [],
    };

    await sendEmail(data);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Contact form submission error:", err);
    return NextResponse.json({ success: false, error: err.message || err }, { status: 500 });
  }
}
