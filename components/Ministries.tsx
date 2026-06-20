import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ministries } from "@/lib/data";

export default function Ministries() {
  return (
    <section id="ministerios" className="bg-cream py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Sirve y crece"
          title="Nuestros Ministerios"
          description="Cada persona tiene un don. Encuentra tu lugar para servir y crecer junto a otros."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry, i) => {
            const Icon = ministry.icon;
            return (
              <Reveal key={ministry.name} delay={i * 0.08}>
                <article className="group flex h-full items-start gap-5 rounded-2xl border border-navy/5 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-card">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                    <Icon size={26} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-navy">
                      {ministry.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">
                      {ministry.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
