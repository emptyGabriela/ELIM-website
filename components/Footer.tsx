import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, ministries, navItems } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-navy text-cream/80">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Columna 1: Logo + descripción */}
          <div>
            <p className="font-display text-xl font-semibold text-white">
              Misión Cristiana <span className="text-gold">Elim</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Una comunidad de fe donde encontrarás amor, esperanza y un lugar
              para crecer junto a tu familia.
            </p>
            <div className="mt-6 flex gap-3">
              {contact.socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 items-center justify-center rounded-full border border-white/15 px-4 text-xs font-medium transition-colors hover:border-gold hover:text-gold"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Navegación
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Ministerios */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Ministerios
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {ministries.map((ministry) => (
                <li key={ministry.name}>
                  <Link
                    href="#ministerios"
                    className="transition-colors hover:text-gold"
                  >
                    {ministry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Contacto
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-gold" />
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-gold"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-gold" />
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-cream/50">
          © {year} Misión Cristiana Elim. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
