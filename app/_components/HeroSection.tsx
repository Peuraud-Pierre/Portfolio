"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HERO } from "../_data/content";
import { ParticleCanvas } from "./ParticleCanvas";

const EASE = [0.16, 1, 0.3, 1] as const;

export const HeroSection = () => {
  return (
    <section id="home" className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-black">
      <ParticleCanvas />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent md:hidden" />

      <div className="pointer-events-none relative z-10 flex h-full items-center px-6 sm:px-12">
        <div className="inline-flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          >
            <h1 className="text-shine font-display text-7xl font-bold leading-[0.85] tracking-[-0.04em] sm:text-8xl md:text-[9.5rem] lg:text-[11.5rem] xl:text-[13.5rem]">
              {HERO.headline}
            </h1>
            <p className="mt-2 translate-x-2 font-pop text-[0.64rem] uppercase leading-none tracking-[0.18em] text-white sm:translate-x-5 sm:text-sm lg:text-[0.95rem]">
              {HERO.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
            className="pointer-events-auto mt-8 translate-x-2 sm:translate-x-5"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full border border-pinkish/40 bg-white/5 px-6 py-3 font-pop text-sm shadow-[0_4px_20px_rgba(255,182,193,0.15)] backdrop-blur-xl transition-all duration-300 hover:border-pinkish/70"
            >
              <span className="bg-gradient-to-r from-white via-[#ffe4ec] to-pinkish bg-clip-text text-transparent">
                {HERO.cta}
              </span>
              <ArrowUpRight className="h-4 w-4 text-pinkish transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
