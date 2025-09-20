import Form from "@/components/form";

export default function Contact() {
  return (
    <section className="mt-28 mb-16 lg:grid grid-cols-2 gap-36 px-5 lg:px-36">
      <div>
        <h1 className="text-5xl mb-10 font-semibold">Request a Quote</h1>
        <p className="mb-20 max-w-2xl">
          Please provide some information on your project or goals and we’ll move the conversation on from there.
        </p>

        <hr className="w-3/5 mb-16" />

        <div className="hidden lg:block">
          <p>123 Demo Street</p>
          <p className="mb-6">St. Charles, IL</p>
          <p>(555) 555-5555</p>
          <p>circleelevenmanufacturing@gmail.com</p>
        </div>
      </div>

      <Form />
    </section>
  );
}
