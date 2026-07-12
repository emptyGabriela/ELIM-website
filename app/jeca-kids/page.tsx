import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Baby,
  BookOpen,
  Facebook,
  Mail,
  MapPin,
  Music2,
  Paintbrush,
  Phone,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "JECA Kids",
  description:
    "Conoce JECA Kids, el ministerio infantil de Misión Cristiana Elim: enseñanza bíblica, música, juegos y un espacio seguro para que los niños crezcan en la fe.",
};

// Paleta tomada del logo de JECA Kids (morado, rojo, amarillo, azul, verde).
const kidsColors = ["#7C2D8E", "#E8291C", "#F5B722", "#3E86A0", "#7CB342"];

const highlights = [
  {
    title: "Enseñanza bíblica",
    description:
      "Historias y lecciones adaptadas a cada edad, para que los niños conozcan a Dios de forma clara y divertida.",
    icon: BookOpen,
  },
  {
    title: "Alabanza y música",
    description:
      "Cantos, coreografías y momentos de adoración pensados especialmente para los más pequeños.",
    icon: Music2,
  },
  {
    title: "Manualidades y juegos",
    description:
      "Actividades creativas que refuerzan cada tema y hacen que aprender sea una aventura.",
    icon: Paintbrush,
  },
  {
    title: "Un ambiente seguro",
    description:
      "Líderes capacitados y un espacio cuidado para que cada niño se sienta bienvenido y protegido.",
    icon: Sparkles,
  },
];

// Imágenes de referencia — sustituir por fotos reales del ministerio cuando estén disponibles.
const gallery = [
  {
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    alt: "Niños participando en una actividad grupal",
  },
  {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    alt: "Niños haciendo manualidades en el salón",
  },
  {
    src: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=800&q=80",
    alt: "Grupo de niños cantando y alabando",
  },
  {
    src: "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?auto=format&fit=crop&w=800&q=80",
    alt: "Maestra enseñando la Biblia a los niños",
  },
  {
    src: "https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=800&q=80",
    alt: "Niños jugando juntos en el patio",
  },
  {
    src: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=800&q=80",
    alt: "Familia sonriendo en la iglesia",
  },
];

// Videos del ministerio — reemplazar youtubeId con el ID real de cada video de YouTube
// (el ID es lo que aparece después de "v=" en la URL del video).
const videos: { title: string; youtubeId: string | null }[] = [
  { title: "Un domingo con JECA Kids", youtubeId: "M0hfW7YPw2I" },
  { title: "Alabanza infantil", youtubeId: "W7ypdEUs67A" },
];

export default function JecaKidsPage() {
  const facebook = contact.socials.find((s) => s.label === "JECA KIDS");

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="container-x flex h-16 items-center justify-between sm:h-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-gold"
          >
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative flex min-h-[85vh] items-center py-24 sm:min-h-[70vh] sm:py-0">
          <Image
            src="/kids.jpg"
            alt="Niños sonriendo en una actividad del ministerio infantil"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/70 to-navy/90" />

          {/* Franja de colores del logo */}
          <div className="absolute inset-x-0 top-0 z-10 flex h-1.5 sm:h-2">
            {kidsColors.map((color) => (
              <span
                key={color}
                className="h-full flex-1"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          <div className="container-x relative z-10 flex flex-col items-center px-6 pt-8 text-center text-white sm:pt-20">
            <div className="w-full max-w-[220px] rounded-2xl bg-white/10 p-3 backdrop-blur-sm sm:max-w-xs sm:p-4">
              <div className="relative aspect-[2284/1084] w-full">
                <Image
                  src="/logoKIDS_ORIGINAL.png"
                  alt="Logo de JECA Kids"
                  fill
                  sizes="(max-width: 640px) 220px, 320px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <span className="eyebrow mt-6 text-gold">
              Ministerio Infantil
            </span>
            <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              JECA Kids
            </h1>
            <div className="mt-5 flex gap-1.5" aria-hidden="true">
              {kidsColors.map((color) => (
                <span
                  key={color}
                  className="h-1.5 w-8 rounded-full sm:w-10"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <p className="mt-6 max-w-xl px-2 text-base text-cream/90 sm:text-lg">
              Un espacio donde los niños aprenden, juegan y descubren el amor
              de Dios de una manera divertida y segura.
            </p>
            <div className="mt-10 flex w-full justify-center px-4 sm:w-auto sm:px-0">
              {facebook && (
                <a
                  href={facebook.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full border border-white/70 px-6 py-3.5 text-center text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-navy sm:w-auto sm:max-w-none sm:px-7"
                >
                  <Facebook size={18} className="shrink-0" />
                  Síguenos en Facebook
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Información */}
        <section className="bg-cream py-16 sm:py-24">
          <div className="container-x">
            <div className="flex justify-center gap-1.5" aria-hidden="true">
              {kidsColors.map((color) => (
                <span
                  key={color}
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <SectionHeading
              eyebrow="Sobre nosotros"
              title="Fe, diversión y comunidad para los más pequeños"
              description="En JECA Kids acompañamos a los niños en cada etapa de su crecimiento espiritual, con clases dinámicas los martes, jueves y domingos durante el horario de cultos."
            />

            <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                const color = kidsColors[i % kidsColors.length];
                return (
                  <Reveal key={item.title} delay={i * 0.08}>
                    <article
                      className="flex h-full flex-col items-start gap-4 rounded-2xl border border-navy/5 border-t-4 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:p-7"
                      style={{ borderTopColor: color }}
                    >
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                        style={{ backgroundColor: color }}
                      >
                        <Icon size={22} />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-navy">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-ink/60">
                        {item.description}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Galería de fotos */}
        <section className="bg-[#ece5d2] py-16 sm:py-24">
          <div className="container-x">
            <div className="flex justify-center gap-1.5" aria-hidden="true">
              {kidsColors.map((color) => (
                <span
                  key={color}
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <SectionHeading
              eyebrow="Momentos JECA Kids"
              title="Fotos del ministerio"
              description="Un vistazo a lo que vivimos cada semana junto a los niños."
            />

            <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 md:grid-cols-3">
              {gallery.map((photo, i) => {
                const color = kidsColors[i % kidsColors.length];
                return (
                  <Reveal key={photo.src} delay={i * 0.06}>
                    <div
                      className="overflow-hidden rounded-2xl border-2 shadow-soft transition-colors duration-300"
                      style={{ borderColor: `${color}40` }}
                    >
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          loading="lazy"
                          sizes="(max-width: 768px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <span
                        className="block h-1.5 w-full"
                        style={{ backgroundColor: color }}
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Videos */}
        <section className="bg-navy py-16 sm:py-24">
          <div className="container-x">
            <div className="flex justify-center gap-1.5" aria-hidden="true">
              {kidsColors.map((color) => (
                <span
                  key={color}
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <SectionHeading
              eyebrow="Míralos en acción"
              title="Videos del ministerio"
              light
            />

            <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2">
              {videos.map((video, i) => {
                const color = kidsColors[i % kidsColors.length];
                return (
                  <Reveal key={video.title} delay={i * 0.1}>
                    <div
                      className="overflow-hidden rounded-2xl border-t-4 shadow-card"
                      style={{ borderTopColor: color }}
                    >
                      <div className="relative aspect-video w-full">
                        {video.youtubeId ? (
                          <iframe
                            className="absolute inset-0 h-full w-full"
                            src={`https://www.youtube.com/embed/${video.youtubeId}`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-navy-light text-cream/60">
                            <PlayCircle size={32} />
                            <span className="text-sm">Video próximamente</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-3 bg-navy-light px-5 py-4">
                        <PlayCircle size={20} style={{ color }} />
                        <span className="font-medium text-white">
                          {video.title}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA / Contacto */}
        <section className="bg-cream py-16 sm:py-24">
          <div className="container-x">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-14 text-center sm:px-16 sm:py-20">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full blur-2xl"
                  style={{ backgroundColor: `${kidsColors[3]}33` }}
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full blur-2xl"
                  style={{ backgroundColor: `${kidsColors[0]}33` }}
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute right-1/3 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full blur-2xl"
                  style={{ backgroundColor: `${kidsColors[2]}26` }}
                  aria-hidden="true"
                />
                <div className="relative flex flex-col items-center">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `${kidsColors[2]}26` }}
                  >
                    <Baby size={32} className="text-gold" />
                  </div>
                  <span className="eyebrow mt-4">Únete a JECA Kids</span>
                  <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
                    Tu hijo tiene un lugar aquí
                  </h2>
                  <p className="mx-auto mt-6 max-w-xl text-base text-cream/80 sm:text-lg">
                    Escríbenos y con gusto te contamos cómo inscribir a tu
                    hijo en el próximo servicio.
                  </p>

                  <div className="mt-10 flex flex-col items-center gap-4 text-cream/85 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8">
                    <div className="flex items-center gap-2 text-center sm:text-left">
                      <MapPin size={18} className="shrink-0 text-gold" />
                      <span>{contact.address}</span>
                    </div>
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 transition-colors hover:text-gold"
                    >
                      <Phone size={18} className="text-gold" />
                      {contact.phone}
                    </a>
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-2 transition-colors hover:text-gold"
                    >
                      <Mail size={18} className="text-gold" />
                      {contact.email}
                    </a>
                  </div>

                  <div className="mt-10 w-full sm:w-auto">
                    <Button
                      href="/#contacto"
                      variant="primary"
                      className="w-full sm:w-auto"
                    >
                      Planifica tu visita
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}