"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <Link
          href="#inicio"
          className={`font-display text-lg font-semibold tracking-tight transition-colors md:text-xl ${
            scrolled ? "text-navy" : "text-white"
          }`}
        >
          <Link href="#inicio" className="flex items-center">
  <Image
    src={scrolled ? "/logo-elim.png" : "/logo-elim-2.png"}
    alt="Misión Cristiana Elim"
    width={scrolled ? 180 : 220}
    height={scrolled ? 56 : 70}
    priority
    className={`w-auto transition-all duration-300 ${
      scrolled ? "h-10 md:h-12" : "h-14 md:h-16"
    }`}
  />
</Link>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  scrolled ? "text-ink/80" : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contacto"
          className="hidden rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-navy shadow-soft transition-all hover:-translate-y-0.5 hover:bg-[#c79f56] lg:inline-flex">
          Planifica tu visita
          
        </Link>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${scrolled ? "text-navy" : "text-white"}`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-cream/95 backdrop-blur-md lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-navy/5 hover:text-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-navy"
                >
                  Planifica tu visita
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
