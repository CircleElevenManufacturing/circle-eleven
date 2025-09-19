"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="top-0 left-0 w-full bg-white/80 z-50">
      <div className="px-24 md:px-16 py-6 flex justify-between items-center">
        <Image src="/logo.png" alt="logo" width={60} height={60} />

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-lg">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:opacity-60 ${pathname === item.href ? "underline underline-offset-4" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(true)}>
          Menu button
        </button>
      </div>

      {/* Mobile Side Nav */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50 md:hidden" onClick={() => setOpen(false)}>
          <div
            className="absolute top-0 right-0 w-2/3 max-w-xs h-full bg-white shadow-xl p-6 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-semibold">Menu</span>
              <button onClick={() => setOpen(false)}>Menu button</button>
            </div>
            <nav className="flex flex-col space-y-6 text-lg uppercase">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`${pathname === item.href ? "underline underline-offset-4" : ""}`}
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
