import type { Metadata } from "next";
import { inter, playfair } from "@/lib/fonts";
import "./globals.css";

const siteUrl = "https://mision-cristiana-elim.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Misión Cristiana Elim | Amor, esperanza y comunidad",
    template: "%s | Misión Cristiana Elim",
  },
  description:
    "Misión Cristiana Elim es un lugar donde encontrarás amor, esperanza y comunidad. Conoce nuestros horarios de cultos, eventos y ministerios.",
  keywords: [
    "iglesia cristiana",
    "Misión Cristiana Elim",
    "cultos",
    "células",
    "comunidad de fe",
    "El Salvador",
  ],
  authors: [{ name: "Misión Cristiana Elim" }],
  icons: {
    icon: "/logo-solo-elim.png",
    shortcut: "/logo-solo-elim.png",
    apple: "/logo-solo-elim.png",
  },
  openGraph: {
    type: "website",
    locale: "es_SV",
    url: siteUrl,
    siteName: "Misión Cristiana Elim",
    title: "Misión Cristiana Elim | Amor, esperanza y comunidad",
    description:
      "Un lugar donde encontrarás amor, esperanza y comunidad. Te esperamos.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Misión Cristiana Elim",
    description:
      "Un lugar donde encontrarás amor, esperanza y comunidad. Te esperamos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};