import LetsWorkTogether from "@/components/lets-work-together";

export default function About() {
  return (
    <section className="mt-28">
      <div className="md:grid grid-cols-5 px-16 lg:px-56 mb-96">
        <h1 className="text-5xl col-span-2 lg:mb-0 mb-10">About</h1>

        <div className="space-y-5 col-span-3 text-neutral-700">
          <p>
            We think of architecture not as a single practice, but as several interlocking ones. Landscapes are inseparable from structures,
            ecology is inseparable from building requirements, and improving human relationships is the ultimate goal of any project.
            Aesthetic movements come and go, but we have found these principles to be timeless.
          </p>

          <p>
            As partners, we strive for honesty and clarity. Our first job is to understand the client’s vision and needs, not to present our
            own. We value timeliness, direct communication and prototypes over presentations, as well as the occasional face-to-face meeting
            over a drink or a meal.
          </p>

          <p>
            Over the years, we have been fortunate to collaborate with some excellent clients on some wonderful projects, but we believe it
            is still too early to weigh in on the success of the work. A building exists in time and its usefulness is directly related to
            how well it continues to perform.
          </p>

          <p>
            We are proud of our Danish home and heritage, but do not consider ourselves exponents of Danish design. National style has no
            place in architecture, where a building must first and foremost be suited to local needs.
          </p>
        </div>
      </div>

      <LetsWorkTogether hideDescription />
    </section>
  );
}
