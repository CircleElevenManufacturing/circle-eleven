import LetsWorkTogether from "@/components/lets-work-together";

export default function About() {
  return (
    <section className="mt-28">
      <div className="md:grid grid-cols-5 px-5 lg:px-56 mb-96">
        <h1 className="font-semibold text-3xl xl:text-5xl col-span-2 lg:mb-0 mb-10">About</h1>

        <div className="space-y-5 col-span-3 text-neutral-700">
          <p>
            Every project, whether it’s a prototype, a small production run, or a one-off part, is a chance to turn an idea into something
            solid that works exactly as it should.
          </p>

          <p>
            We’ve been in the manufacturing world since 2017, working in all kinds of shops — from job shops to precision mold and die work,
            and later tool rooms focused on repair and R&D. Along the way, we learned what matters most: attention to detail, pride in the
            craft, and doing things right the first time.
          </p>

          <p>
            We started this business to create a shop built around those same values — honesty, precision, and reliability. We believe in
            keeping things simple: clear communication, quick turnarounds, and consistent quality.
          </p>

          <p>
            We specialize in metal business cards, small metal parts (up to 4” x 4” x 4”), hobby and DIY components, prototypes, small-lot
            manufacturing under 100 pieces, and one-off custom jobs.
          </p>
        </div>
      </div>

      <LetsWorkTogether hideDescription />
    </section>
  );
}
