"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/fondo-1.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/40 to-navy/45" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-x relative z-10 flex flex-col items-center text-center text-white"
      >
        <motion.span variants={item} className="eyebrow text-gold">
          Bienvenidos a
        </motion.span>
        <motion.h1
          variants={item}
          className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl"
        >
          Misión Cristiana Elim
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg text-cream/90 md:text-xl"
        >
          Un lugar donde encontrarás amor, esperanza y comunidad.
        </motion.p>
        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="#contacto" variant="primary">
            Planifica tu visita
          </Button>
          <Button href="#horarios" variant="outline">
            Ver horarios
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/60 p-1.5">
          <motion.span
            className="h-2 w-1 rounded-full bg-white/80"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
          />
        </div>
      </motion.div>
    </section>
  );
}