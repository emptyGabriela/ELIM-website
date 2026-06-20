import Image from "next/image";
import { Church } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function PastorMessage() {
  return (
    <section id="nosotros" className="bg-cream">
      <div className="grid lg:grid-cols-2">
        <Reveal className="relative h-[420px] lg:h-auto">
          <Image
             src="/pastor-message.jpg"
            alt="Pastor Juan Carlos Amaya predicando"
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 50vw"
             className="object-cover"
/>
        </Reveal>


        <Reveal
          delay={0.15}
          className="flex flex-col justify-center bg-navy px-8 py-16 text-white md:px-14 md:py-20 lg:px-16"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/40">
            <Church size={26} className="text-gold" />
          </div>

          <div className="mt-7 flex items-center gap-4">
            <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Mensaje del Pastor
            </span>
            <span className="h-px flex-1 bg-white/20" aria-hidden="true" />
          </div>

          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
            Una carta de bienvenida
          </h2>
          <p className="mt-1 font-display text-2xl italic text-gold md:text-3xl">
            con amor pastoral
          </p>

          <div className="mt-6 space-y-4 text-cream/85 leading-relaxed">
            <p>
              Querida familia, amigos y visitantes: En nombre de toda la
              congregación de Misión Cristiana Elim, les extiendo la más
              cálida bienvenida. Esta iglesia es un lugar donde Dios obra de
              manera poderosa, donde vidas son transformadas por Su gracia y
              donde todos encuentran un hogar espiritual.
            </p>
            <p>
              Si estás buscando una comunidad que te ame incondicionalmente,
              que te acompañe en los momentos difíciles y celebre contigo las
              victorias, este es tu lugar. Las puertas siempre están abiertas
              para ti. ¡Dios te trajo aquí con un propósito!
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4 border-t border-white/15 pt-6">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-gold/50">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                alt="Pastor Juan Carlos Amaya"
                fill
                loading="lazy"
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-display text-base font-semibold text-white">
                Pastor Juan Carlos Amaya
              </p>
              <p className="text-sm text-cream/60">
                Pastor — Misión Cristiana Elim
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm italic text-cream/55">
            “Porque yo sé los pensamientos que tengo acerca de vosotros…” —
            Jeremías 29:11
          </p>
        </Reveal>
      </div>
    </section>
  );
}