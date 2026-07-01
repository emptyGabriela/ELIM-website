import Image from "next/image";
import { Church, Mail, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function PastorMessage() {
  return (
    <section id="nosotros" className="bg-cream">
      <div className="grid lg:grid-cols-2">
        <Reveal className="relative h-[420px] lg:h-auto">
          <Image
             src="/pastor-message-3.jpg"
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
              Bienvenido a nuestra iglesia. Aquí creemos que Dios sigue
              transformando vidas, restaurando corazones y levantando
              personas con propósito. Nuestra misión es compartir el mensaje
              de Jesucristo, formar discípulos y ser una comunidad donde la fe
              se vive con amor, servicio y esperanza. Te invitamos a ser
              parte de esta historia que Dios está escribiendo.
            </p>
            <p>
              Creemos en un Dios cercano que conoce tu historia, que restaura
              lo que está herido y que guía cada paso de quienes ponen su
              confianza en Él. Creemos que cada persona tiene un valor
              especial delante de Dios y que hay un lugar para ti. Queremos
              acompañarte, servirte y ayudarte a descubrir el plan que Él
              tiene para tu vida. Esta casa está abierta para recibirte,
              crecer juntos y caminar hacia todo lo que Dios ha preparado. Te
              esperamos. ¿Quieres ser parte?
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4 border-t border-white/15 pt-6">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-gold/50">
              <Image
                  src="/pastor-message-2.png"
                  alt="Pastor Juan Carlos Amaya"
                  fill
                  loading="lazy"
                  sizes="48px"
                  className="object-cover"
              />
            </div>
            <div>
              <p className="font-display text-base font-semibold text-white">
                Pastor Juan Carlos Amaya Herrera
              </p>
              <p className="text-sm text-cream/60">
                Pastor — Misión Cristiana Elim
              </p>
              <div className="mt-2 flex flex-col gap-1 text-xs text-cream/60 sm:flex-row sm:items-center sm:gap-4">
                <a
                  href="mailto:jcamayah01@gmail.com"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-gold"
                >
                  <Mail size={13} />
                  jcamayah01@gmail.com
                </a>
                <a
                  href="tel:+50323407324"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-gold"
                >
                  <Phone size={13} />
                  2340-7324
                </a>
                <a
                  href="tel:+50373865373"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-gold"
                >
                  <Phone size={13} />
                  7386-5373
                </a>
              </div>
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