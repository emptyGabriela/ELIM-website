import Image from "next/image";
import { Radio } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { stations } from "@/lib/data";

export default function RadioTV() {
  return (
    <section id="radio-tv" className="relative overflow-hidden py-24">
      <Image
        src="/fondo-comunicaciones-2.jpg"
        alt=""
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy/92" />

      <div className="container-x relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal className="flex flex-col gap-4">
              <span className="eyebrow">Predicaciones en vivo</span>
              <h2 className="section-title text-white">Comunicaciones</h2>
              <p className="max-w-lg text-cream/80 leading-relaxed">
                Llevamos el mensaje de esperanza a cada hogar a través de
                nuestras estaciones de radio y televisión. Sintonízanos donde
                quiera que estés.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {stations.map((station, i) => (
                <Reveal key={station.name} delay={i * 0.07}>
                  <a
                    href={station.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full flex-col items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 p-5 text-center backdrop-blur-sm transition-colors hover:border-gold/50 hover:bg-white/10"
                  >
                    <Radio size={20} className="text-gold" />
                    <span className="font-display text-lg font-semibold text-white">
                      {station.name}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-cream/50">
                      {station.tag}
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
}