import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { events } from "@/lib/data";

export default function Events() {
  return (
    <section id="eventos" className="bg-[#ece5d2] py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Agenda"
          title="Próximos Eventos"
          description="Hay un lugar para ti en cada encuentro. Conoce lo que estamos preparando para esta temporada."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {events.map((event, i) => (
            <Reveal key={event.title} delay={i * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
