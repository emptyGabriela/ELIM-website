import { Moon, Sun } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/data";

export default function ServiceTimes() {
  return (
    <section id="horarios" className="bg-cream py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Únete a Nosotros" title="Horarios de Cultos" />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.period === "night" ? Moon : Sun;
            return (
              <Reveal key={`${service.day}-${i}`} delay={i * 0.1}>
                <article className="flex h-full flex-col rounded-2xl bg-navy p-8 shadow-card transition-transform duration-300 hover:-translate-y-2">
                  <Icon
                    size={24}
                    className="text-cream"
                    fill={service.period === "night" ? "currentColor" : "none"}
                    strokeWidth={service.period === "night" ? 0 : 1.5}
                  />
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-cream/70">
                    {service.day}
                  </p>
                  <p className="mt-2 font-display text-4xl font-bold text-cream">
                    {service.time}
                  </p>
                  <p className="mt-3 text-base font-semibold text-cream">
                    {service.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-cream/55">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}