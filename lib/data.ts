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

export type Service = {
  day: string;
  time: string;
  name: string;
  description: string;
  period: "night" | "day";
};

export const services: Service[] = [
  {
    day: "Martes",
    time: "6:15 p.m.",
    name: "Culto General",
    description: "Adoración, alabanza y predicación de la Palabra",
    period: "night",
  },
  {
    day: "Jueves",
    time: "6:15 p.m.",
    name: "Culto General",
    description: "Profundizando en la Palabra de Dios juntos en comunidad",
    period: "night",
  },
  {
    day: "Domingo",
    time: "9:00 a.m.",
    name: "Culto General",
    description: "Culto de celebración con toda la familia de la iglesia",
    period: "day",
  },
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
    title: "Cena del Señor",
    description:
      "Un tiempo sagrado de comunión donde recordamos juntos el sacrificio de Cristo en un ambiente de adoración y reflexión.",
    date: "5 de julio",
    image: "/cena-del-senor-1.jpg",
    alt: "Cena del Señor en la congregación",
  },
  {
    title: "Reunión de JECA",
    description:
      "Un encuentro especial para nuestros jóvenes de JECA, un espacio de comunión, enseñanza y crecimiento en la fe.",
    date: "5 de julio",
    image: "/jeca-1.jpg",
    alt: "Jóvenes de JECA reunidos en comunión",
  },
  {
    title: "Evento de Hombres",
    description:
      "Una noche pensada para fortalecer a los hombres de la congregación con enseñanza, oración y compañerismo.",
    date: "12 de julio",
    image: "/evento-de-hombres-1.jpg",
    alt: "Hombres reunidos en el evento de hombres",
  },
  {
    title: "Reunión de Líderes",
    description:
      "Un espacio de capacitación, visión y oración para quienes sirven liderando los distintos ministerios de la iglesia.",
    date: "13 de julio",
    image: "/reunion-de-lideres-1.jpg",
    alt: "Líderes reunidos en capacitación y oración",
  },
  {
    title: "Evento Evangelístico de Mujeres",
    description:
      "Una jornada de alcance pensada para llevar un mensaje de esperanza a mujeres de nuestra comunidad.",
    date: "16 de julio",
    image: "/evento-evangelistico-de-mujeres.jpg",
    alt: "Mujeres en el evento evangelístico",
  },
  {
    title: "Labor Social con MIEPAN",
    description:
      "Una semana de servicio a la comunidad junto al ministerio MIEPAN, con el Pastor Mathew Cross, llevando ayuda y esperanza a quienes más lo necesitan.",
    date: "17 al 23 de julio",
    image: "/miepan-1.jpg",
    alt: "Labor social con el ministerio MIEPAN",
  },
  {
    title: "Ayuno de Mujeres",
    description:
      "Un tiempo dedicado de búsqueda espiritual, oración y consagración para las mujeres de la congregación.",
    date: "25 de julio",
    image: "/ayuno-de-mujeres-1.jpg",
    alt: "Mujeres orando juntas durante el ayuno",
  },
  {
    title: "Reunión de Líderes",
    description:
      "Un nuevo encuentro de formación y oración para fortalecer el liderazgo de nuestros ministerios.",
    date: "27 de julio",
    image: "/reunion-de-lideres-2.jpg",
    alt: "Segunda reunión de líderes del mes",
  },
  {
    title: "Vigilia de Mujeres",
    description:
      "Una noche de oración prolongada y adoración para cerrar el mes buscando la presencia de Dios juntas.",
    date: "31 de julio",
    image: "/vigilia-de-mujeres-1.jpg",
    alt: "Vigilia de oración de mujeres",
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
  address:
    "Bosque #2, a 300 metros de la parada de buses a Santa Rosa, Ciudad Arce, La Libertad Centro",
  phone: "+503 2245 7890",
  email: "info@iglesiaelim.org",
  socials: [
    {
      label: "Elim Ciudad Arce",
      href: "https://www.facebook.com/share/1AfJq1F4bk/",
    },
    {
      label: "Mujeres de Cambio",
      href: "https://www.facebook.com/share/1JLzJrVRKf/",
    },
    {
      label: "Juventud JECA",
      href: "https://www.facebook.com/share/18nBoXS9rG/",
    },
    {
      label: "JECA KIDS",
      href: "https://www.facebook.com/share/1CGEPEsbJ9/",
    },
    {
      label: "MIEPAN",
      href: "https://www.facebook.com/share/1E9wo4zY5e/",
    },
    {
      label: "Instagram JECA",
      href: "https://www.instagram.com/elimjecaoficial/",
    },
    {
      label: "YouTube Elim",
      href: "https://www.youtube.com/channel/UCX9E6LlDrRlFKUZCbGfWYAg",
    },
  ],
};
