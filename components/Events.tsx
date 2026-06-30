"use client";
 
import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { events } from "@/lib/data";
 
export default function Events() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
 
  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  };
 
  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  };
 
  return (
    <section id="eventos" className="bg-[#ece5d2] py-24">
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Agenda · Julio 2026"
            title="Próximos Eventos"
            description="Hay un lugar para ti en cada encuentro. Conoce lo que estamos preparando para esta temporada."
          />
 
          <div className="hidden shrink-0 gap-3 sm:flex">
            <button
              type="button"
              aria-label="Evento anterior"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-white text-navy transition-colors hover:bg-navy hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-navy"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Evento siguiente"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-white text-navy transition-colors hover:bg-navy hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-navy"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
 
        <Reveal delay={0.1}>
          <div
            ref={trackRef}
            onScroll={updateEdges}
            className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
          >
            {events.map((event) => (
              <article
                key={`${event.title}-${event.date}`}
                data-card
                className="group flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card sm:w-[60%] md:w-[360px]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 85vw, 360px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-navy/90 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    <CalendarDays size={14} />
                    {event.date}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-semibold text-navy">
                    {event.title}
                  </h3>
                  <p className="mt-3 flex-1 text-ink/65 leading-relaxed">
                    {event.description}
                  </p>
                  <a
                    href="#contacto"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold"
                  >
                    Más información
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
 
        <div className="mt-2 flex justify-center gap-3 sm:hidden">
          <button
            type="button"
            aria-label="Evento anterior"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-white text-navy transition-colors disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Evento siguiente"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-white text-navy transition-colors disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}