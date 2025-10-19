import LetsWorkTogether from "@/components/lets-work-together";

export default function Home() {
  return (
    <section>
      {/* HEADER */}
      <h1 className="font-semibold px-5 md:px-16 xl:pl-24 text-4xl md:text-5xl lg:text-6xl mt-16 mb-20 sm:max-w-2xl md:max-w-6xl max-w-full leading-12 lg:leading-18">
        Circle Eleven is a precision machining company based in St. Charles, IL
      </h1>

      <img src="/cnc-prop.jpg" alt="cnc machine" className="w-full object-cover h-[30rem] lg:h-[64rem]" />

      {/* RECENT WORK */}
      <div className="px-5 md:px-16 py-20">
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-6 pl-0 md:pl-16 xl:pl-32">What We Do</h1>
        <p className="max-w-3xl leading-8 pl-0 md:pl-16 xl:pl-32 text-lg">
          We provide precision CNC machining services for custom parts and prototypes. From one-off components to small production runs, we
          deliver reliable, high-quality work built to exact specifications — proudly made in the USA.
        </p>

        <div className="md:grid md:grid-cols-2 mt-48 gap-10">
          {[1, 2, 3, 4].map((item) => (
            <div className="mb-10 md:mb-0" key={item}>
              <div className="h-96 w-full bg-neutral-500" />
              <h3 className="text-2xl md:text-3xl mt-3 font-acumin">Project {item}</h3>
            </div>
          ))}
        </div>
      </div>

      <LetsWorkTogether />
    </section>
  );
}
