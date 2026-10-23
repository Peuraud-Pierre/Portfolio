"use client";

import { AnimatePresence, motion } from "framer-motion";
import { NAV_ITEMS, SOCIALS } from "../_data/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export const SideMenu = ({ open, onClose }: { open: boolean; onClose: () => void }) => (
  <AnimatePresence>
    {open && (
      <>
        <motion.div
          key="backdrop"
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onClose()}
        />
        {/* Couches colorées décalées, puis le panneau (effet "staggered") */}
        {["#ffb6c1", "#1f1f22"].map((color, i) => (
          <motion.div
            key={color}
            className="fixed inset-y-0 left-0 z-40 w-full sm:w-[420px]"
            style={{ background: color }}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%", transition: { duration: 0.4, ease: EASE, delay: 0.1 * (1 - i) } }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.07 * i }}
          />
        ))}
        <motion.nav
          id="side-menu"
          key="panel"
          className="fixed inset-y-0 left-0 z-40 flex w-full flex-col justify-between bg-black px-8 pb-10 pt-32 sm:w-[420px] sm:px-12"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%", transition: { duration: 0.4, ease: EASE } }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.14 }}
        >
          <ul className="flex flex-col gap-2">
            {NAV_ITEMS.map((item, i) => (
              <li key={item.href} className="overflow-hidden">
                <motion.a
                  href={item.href}
                  onClick={() => onClose()}
                  className="group flex items-baseline gap-4 font-display text-5xl font-extrabold uppercase leading-[1.05] tracking-tight text-white transition-colors hover:text-pinkish sm:text-6xl"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.3 + i * 0.07 }}
                >
                  {item.label}
                  <span className="font-pop text-xs font-normal tracking-widest text-pinkish/70">
                    0{i + 1}
                  </span>
                </motion.a>
              </li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="mb-3 font-pop text-sm font-medium uppercase tracking-widest text-pinkish">
              Réseaux
            </h3>
            <ul className="flex gap-6 font-pop text-lg text-white">
              <li>
                <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-pinkish">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="hover:text-pinkish">
                  GitHub
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.nav>
      </>
    )}
  </AnimatePresence>
);
