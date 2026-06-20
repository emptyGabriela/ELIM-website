"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const active = testimonials[index];

  return (
    <section className="bg-[#ece5d2] py-24">
      <div className="container-x flex flex-col items-center text-center">
        <span className="eyebrow">Testimonios</span>
        <h2 className="mt-4 section-title">Historias de transformación</h2>

        <div className="relative mt-14 w-full max-w-3xl">
          <div className="min-h-[320px] overflow-hidden rounded-3xl bg-white p-8 shadow-card md:p-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center"
              >
                <Quote size={40} className="text-gold" aria-hidden="true" />
                <blockquote className="mt-6 max-w-xl font-display text-xl leading-relaxed text-navy md:text-2xl">
                  “{active.quote}”
                </blockquote>
                <div className="mt-8 flex flex-col items-center gap-3">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-gold/50">
                    <Image
                      src={active.image}
                      alt={`Foto de ${active.name}`}
                      fill
                      loading="lazy"
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">{active.name}</p>
                    <p className="text-sm text-ink/55">{active.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Testimonio anterior"
              onClick={() => paginate(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-white text-navy transition-colors hover:bg-navy hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Testimonios">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Ir al testimonio de ${t.name}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-gold" : "w-2.5 bg-navy/20"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Testimonio siguiente"
              onClick={() => paginate(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-white text-navy transition-colors hover:bg-navy hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
