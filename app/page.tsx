import LetsWorkTogether from "@/components/lets-work-together";
import Image from "next/image";

// COPIES
// IMAGES

export default function Home() {
  return (
    <section>
      {/* HEADER */}
      <h1 className="font-normal pl-10 md:pl-16 xl:pl-44 text-4xl md:text-5xl lg:text-6xl mt-16 mb-28 sm:max-w-2xl md:max-w-6xl max-w-full leading-12 lg:leading-16">
        Circle Eleven Manufacturing is a precision machining company based in St. Charles, Illinois.
      </h1>
      <Image src="/drill.png" alt="drill" width={200} height={65} style={{ width: "100%" }} />

      {/* RECENT WORK */}
      <div className="px-16 py-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-8 pl-0 md:pl-16 xl:pl-44">Recent Work</h1>
        <p className="max-w-3xl leading-8 pl-0 md:pl-16 xl:pl-44 text-lg">
          Our practice spans from environmental retrofits of existing buildings to the complete planning and design of new neighborhoods and
          public spaces. While our work is aesthetically diverse, our projects are linked by a focus on enhancing human relationships
          through architecture.
        </p>

        <div className="md:grid md:grid-cols-2 mt-48 gap-10">
          {[1, 2, 3, 4].map((item) => (
            <div className="mb-10 md:mb-0">
              <div className="h-96 w-full bg-neutral-500" />
              <h3 className="text-3xl mt-3 font-poppins font-normal">Project {item}</h3>
            </div>
          ))}
        </div>
      </div>

      <LetsWorkTogether />
    </section>
  );
}
