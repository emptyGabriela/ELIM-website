import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section className="bg-cream pb-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy px-8 py-16 text-center md:px-16 md:py-20">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/15 blur-2xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-navy-light/60 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative">
              <span className="eyebrow">Da el primer paso</span>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
                Te esperamos
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-cream/80">
                No importa de dónde vengas ni cómo te sientas hoy. Hay un lugar
                preparado para ti en nuestra familia. Ven tal como eres.
              </p>
              <div className="mt-10 flex justify-center">
                <Button href="#contacto" variant="primary">
                  Planifica tu visita
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
