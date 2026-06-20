import type { LucideIcon } from "lucide-react";
import {
  Baby,
  Flame,
  HeartHandshake,
  Music,
  Users,
  UserRound,
} from "lucide-react";

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Células", href: "#ministerios" },
  { label: "Eventos", href: "#eventos" },
  { label: "Predicaciones", href: "#radio-tv" },
  { label: "Contacto", href: "#contacto" },
];

export type Service = { day: string; time: string; name: string };

export const services: Service[] = [
  { day: "Martes", time: "6:15 p.m.", name: "Culto General" },
  { day: "Jueves", time: "6:15 p.m.", name: "Culto General" },
  { day: "Domingo", time: "9:00 a.m.", name: "Culto General" },
];

export type ChurchEvent = {
  title: string;
  description: string;
  date: string;
  image: string;
  alt: string;
};

export const events: ChurchEvent[] = [
  {
    title: "AgroElim",
    description:
      "Feria comunitaria con productos locales, alimentos y un espacio para servir a las familias de nuestra ciudad.",
    date: "15 de marzo",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=80",
    alt: "Mercado al aire libre con frutas y verduras frescas",
  },
  {
    title: "Mujeres en Acción",
    description:
      "Un encuentro de inspiración, oración y compañerismo pensado para fortalecer a cada mujer de la congregación.",
    date: "5 de abril",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80",
    alt: "Grupo de mujeres conversando y sonriendo juntas",
  },
  {
    title: "Aniversario 35",
    description:
      "Celebramos 35 años de fidelidad de Dios con una noche especial de adoración, testimonios y gratitud.",
    date: "20 de mayo",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80",
    alt: "Celebración con luces y personas reunidas",
  },
];

export type Station = { name: string; tag: string };

export const stations: Station[] = [
  { name: "540 AM", tag: "Radio" },
  { name: "100.5 FM", tag: "Radio" },
  { name: "Elim TV", tag: "Televisión" },
  { name: "ID FM", tag: "Radio" },
  { name: "Restauración", tag: "Podcast" },
  { name: "Gospel TV", tag: "Televisión" },
];

export type Ministry = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export const ministries: Ministry[] = [
  {
    name: "Infantil",
    description: "Enseñanza bíblica creativa para los más pequeños.",
    icon: Baby,
  },
  {
    name: "Juvenil",
    description: "Un espacio donde los jóvenes crecen y sirven juntos.",
    icon: Flame,
  },
  {
    name: "Mujeres",
    description: "Comunidad, oración y propósito para cada mujer.",
    icon: UserRound,
  },
  {
    name: "Hombres",
    description: "Hombres formados con integridad y fe firme.",
    icon: Users,
  },
  {
    name: "Adoración",
    description: "Música y alabanza que acercan los corazones a Dios.",
    icon: Music,
  },
  {
    name: "Células",
    description: "Grupos pequeños que se reúnen en los hogares.",
    icon: HeartHandshake,
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "María Hernández",
    role: "Miembro desde 2019",
    quote:
      "Llegué buscando respuestas y encontré una familia. Hoy mi hogar está restaurado y mi fe es más firme que nunca.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Carlos Rivera",
    role: "Líder de célula",
    quote:
      "Servir en la iglesia transformó mi propósito. Aprendí que mi vida cobra sentido cuando ayudo a otros a crecer.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Andrea Gómez",
    role: "Ministerio de jóvenes",
    quote:
      "Encontré amigos que se volvieron hermanos. Aquí descubrí mis dones y un lugar para desarrollarlos.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80",
  },
];

export const contact = {
  address: "Av. Principal 456",
  phone: "+503 2245 7890",
  email: "info@iglesiaelim.org",
  socials: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "WhatsApp", href: "https://wa.me/50322457890" },
  ],
};
