import Link from "next/link";

interface Props {
  image?: string;
  hideDescription?: boolean;
}

export default function LetsWorkTogether({ image, hideDescription }: Props) {
  return (
    <div className="bg-red-950 text-white px-10 md:px-40 py-28">
      <h1 className="text-3xl font-semibold md:text-5xl mb-8">Let’s Work Together</h1>

      {!hideDescription && (
        <p className="max-w-3xl mb-24 text-md md:text-lg">
          We’re always looking for new opportunities and are comfortable working internationally. Please get in touch and one of our project
          managers will contact you about beginning the proposal process.
        </p>
      )}

      <Link className="bg-white py-6 px-16 text-lg text-black" href="/contact">
        Contact Us
      </Link>
    </div>
  );
}
