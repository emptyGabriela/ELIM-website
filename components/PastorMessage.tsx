import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function PastorMessage() {
  return (
    <section id="nosotros" className="bg-cream py-24">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border border-gold/40" aria-hidden="true" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Retrato del Pastor Juan Carlos Amaya"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-3xl bg-navy p-9 text-white shadow-card md:p-12">
              <span className="eyebrow">Nuestro pastor</span>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl">
                Una carta de bienvenida
              </h2>
              <div className="mt-6 space-y-4 text-cream/85 leading-relaxed">
                <p>
                  Es una alegría darte la bienvenida a nuestra familia. Más que
                  un edificio, Misión Cristiana Elim es una comunidad de
                  personas reales que han encontrado en Dios un refugio de amor
                  y esperanza.
                </p>
                <p>
                  Aquí tienes un lugar para crecer, para ser sostenido en los
                  momentos difíciles y para descubrir el propósito que Dios tiene
                  para tu vida. Nuestras puertas siempre están abiertas para ti
                  y tu familia.
                </p>
              </div>
              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="font-display text-xl text-gold">
                  Pastor Juan Carlos Amaya
                </p>
                <p className="text-sm text-cream/60">
                  Misión Cristiana Elim
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
