import Form from "@/components/form";

export default function Contact() {
  return (
    <section className="mt-28 mb-16 grid grid-cols-2 gap-36 px-36">
      <div>
        <h1 className="text-5xl mb-10">Let’s Work Together</h1>
        <p className="mb-20">
          Further case studies available upon request. Please provide some information on your project or goals and we’ll move the
          conversation on from there.
        </p>

        <hr className="w-3/5 mb-16" />

        <p>123 Demo Street</p>
        <p className="mb-6">Copenhagen, Denmark</p>

        <p>(555) 555-5555</p>
        <p>email@example.com</p>
      </div>

      <Form />
    </section>
  );
}
