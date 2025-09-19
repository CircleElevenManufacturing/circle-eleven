import LetsWorkTogether from "@/components/lets-work-together";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      {/* HEADER */}
      <h1 className="pl-12 md:pl-20 lg:pl-44 text-4xl md:text-[48px] lg:text-6xl mt-12 mb-24 sm:max-w-2xl md:max-w-6xl max-w-full leading-12 lg:leading-16">
        Utica is an architecture firm based in Copenhagen, Denmark.
      </h1>
      <Image src="/drill.png" alt="drill" width={200} height={65} style={{ width: "100%" }} />

      {/* RECENT WORK */}
      <div className="px-16 py-20">
        <h1 className="text-5xl mb-8 pl-28">Recent Work</h1>
        <p className="max-w-3xl leading-8 pl-28 text-lg">
          Our practice spans from environmental retrofits of existing buildings to the complete planning and design of new neighborhoods and
          public spaces. While our work is aesthetically diverse, our projects are linked by a focus on enhancing human relationships
          through architecture.
        </p>

        <div className="grid grid-cols-2 mt-48 gap-10">
          {[1, 2, 3, 4].map((item) => (
            <div>
              <div className="h-96 w-full bg-neutral-500" />
              <h2>Project {item}</h2>
            </div>
          ))}
        </div>
      </div>

      <LetsWorkTogether />
    </section>
  );
}
