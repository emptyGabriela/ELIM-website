import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function PastorMessage() {
  return (
    <section id="nosotros" className="bg-cream py-24">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div
                className="absolute -left-4 -top-4 h-full w-full rounded-3xl border border-gold/40"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Retrato del Pastor Juan Carlos Amaya Herrera"
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
                  Bienvenido a nuestra iglesia. Aquí creemos que Dios sigue
                  transformando vidas, restaurando corazones y levantando
                  personas con propósito. Nuestra misión es compartir el
                  mensaje de Jesucristo, formar discípulos y ser una comunidad
                  donde la fe se vive con amor, servicio y esperanza.
                </p>
                <p>
                  Creemos en un Dios cercano que conoce tu historia, que
                  restaura lo que está herido y que guía cada paso de quienes
                  ponen su confianza en Él. Creemos que cada persona tiene un
                  valor especial delante de Dios y que hay un lugar para ti.
                </p>
                <p>
                  Queremos acompañarte, servirte y ayudarte a descubrir el
                  plan que Él tiene para tu vida. Esta casa está abierta para
                  recibirte, crecer juntos y caminar hacia todo lo que Dios ha
                  preparado.
                </p>
              </div>

              <p className="mt-6 font-display text-xl italic text-gold">
                Te esperamos. ¿Quieres ser parte?
              </p>

              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="font-display text-xl text-gold">
                  Pastor Juan Carlos Amaya Herrera
                </p>
                <p className="text-sm text-cream/60">Misión Cristiana Elim</p>

                <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
                  <li className="flex items-center gap-2.5">
                    <Mail size={16} className="shrink-0 text-gold" />
                    <a
                      href="mailto:jcamayah01@gmail.com"
                      className="transition-colors hover:text-gold"
                    >
                      jcamayah01@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Phone size={16} className="shrink-0 text-gold" />
                    <a
                      href="tel:+50323407324"
                      className="transition-colors hover:text-gold"
                    >
                      2340-7324
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Phone size={16} className="shrink-0 text-gold" />
                    <a
                      href="tel:+50373865373"
                      className="transition-colors hover:text-gold"
                    >
                      7386-5373{" "}
                      <span className="text-cream/50">(celular)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}