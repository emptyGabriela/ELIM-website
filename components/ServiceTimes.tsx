import { Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/data";

export default function ServiceTimes() {
  return (
    <section id="horarios" className="bg-cream py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Únete a nosotros" title="Horarios de Cultos" />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={`${service.day}-${i}`} delay={i * 0.1}>
              <article className="group relative h-full overflow-hidden rounded-2xl bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card">
                <span
                  className="absolute right-6 top-6 font-display text-5xl font-semibold text-cream transition-colors group-hover:text-gold/30"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/5 text-navy transition-colors group-hover:bg-gold group-hover:text-navy">
                  <Clock size={22} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-navy">
                  {service.day}
                </h3>
                <p className="mt-2 text-3xl font-semibold text-gold">
                  {service.time}
                </p>
                <p className="mt-4 text-ink/60">{service.name}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
