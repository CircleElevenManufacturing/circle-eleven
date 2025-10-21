import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-16 px-5 md:px-40">
      <Image src="/logo.png" alt="logo" width={70} height={70} className="mb-8" />

      <div className="flex justify-between text-neutral-600">
        <div className="md:flex justify-between gap-36">
          <div>
            <p>1020 Cedar Ave. Suite 125F</p>
            <p>St. Charles, IL</p>
          </div>

          <div className="mt-5 md:mt-0">
            <p>(555) 555-5555</p>
            <p>circleelevenmanufacturing@gmail.com</p>
          </div>
        </div>

        <div className="gap-5 lg:flex hidden">
          <Image src="/poland-flag.png" alt="logo" width={30} height={30} className="mb-8 rounded-sm border-[0.5px] border-neutral-400" />
          <Image src="/ukraine-flag.jpg" alt="logo" width={30} height={30} className="mb-8 rounded-sm" />
        </div>
      </div>
    </footer>
  );
}
