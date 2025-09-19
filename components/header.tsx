"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { href: "/", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="top-0 left-0 w-full bg-white/80 z-50 text-neutral-600">
      <div className="xl:px-24 px-10 md:px-16 py-6 flex justify-between items-center">
        <Image src="/logo.png" className="cursor-pointer" alt="logo" width={60} height={60} onClick={() => router.replace("/")} />

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-lg">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:opacity-60 ${pathname === item.href ? "underline underline-offset-10" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <Image className="cursor-pointer" src="/menu.svg" alt="menu" width={30} height={30} />
        </button>
      </div>

      {/* Mobile Side Nav */}
      {open && (
        <div className="ease-in fixed inset-0 bg-black/40 z-50 md:hidden" onClick={() => setOpen(false)}>
          <div
            className="absolute top-0 right-0 w-full max-w-xs h-full bg-white shadow-xl p-10 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="mb-10 flex justify-end" onClick={() => setOpen(false)}>
              <Image className="cursor-pointer" src="/x.svg" alt="menu" width={30} height={30} />
            </button>

            <nav className="flex flex-col space-y-10 text-2xl text-center">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`${pathname === item.href ? "underline underline-offset-10" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
