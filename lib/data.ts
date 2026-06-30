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
    image:
      "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=900&q=80",
    alt: "Interior de un templo con luz cálida durante un servicio",
  },
  {
    title: "Reunión de JECA",
    description:
      "Un encuentro especial para nuestros jóvenes de JECA, un espacio de comunión, enseñanza y crecimiento en la fe.",
    date: "5 de julio",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80",
    alt: "Grupo de jóvenes conversando y sonriendo juntos",
  },
  {
    title: "Evento de Hombres",
    description:
      "Una noche pensada para fortalecer a los hombres de la congregación con enseñanza, oración y compañerismo.",
    date: "12 de julio",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
    alt: "Grupo de hombres reunidos conversando",
  },
  {
    title: "Reunión de Líderes",
    description:
      "Un espacio de capacitación, visión y oración para quienes sirven liderando los distintos ministerios de la iglesia.",
    date: "13 de julio",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    alt: "Grupo de personas reunidas en una sala de planificación",
  },
  {
    title: "Evento Evangelístico de Mujeres",
    description:
      "Una jornada de alcance pensada para llevar un mensaje de esperanza a mujeres de nuestra comunidad.",
    date: "16 de julio",
    image:
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=900&q=80",
    alt: "Grupo de mujeres conversando al aire libre",
  },
  {
    title: "Labor Social con MIEPAN",
    description:
      "Una semana de servicio a la comunidad junto al ministerio MIEPAN, con el Pastor Mathew Cross, llevando ayuda y esperanza a quienes más lo necesitan.",
    date: "17 al 23 de julio",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80",
    alt: "Voluntarios entregando ayuda comunitaria",
  },
  {
    title: "Ayuno de Mujeres",
    description:
      "Un tiempo dedicado de búsqueda espiritual, oración y consagración para las mujeres de la congregación.",
    date: "25 de julio",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80",
    alt: "Mujeres orando juntas en un ambiente de recogimiento",
  },
  {
    title: "Reunión de Líderes",
    description:
      "Un nuevo encuentro de formación y oración para fortalecer el liderazgo de nuestros ministerios.",
    date: "27 de julio",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
    alt: "Grupo de líderes en una reunión de trabajo",
  },
  {
    title: "Vigilia de Mujeres",
    description:
      "Una noche de oración prolongada y adoración para cerrar el mes buscando la presencia de Dios juntas.",
    date: "31 de julio",
    image:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=900&q=80",
    alt: "Velas encendidas en un ambiente de oración nocturna",
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
