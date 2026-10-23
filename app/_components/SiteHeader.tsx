"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_ITEMS, SITE, SOCIALS } from "../_data/content";
import { GithubIcon } from "./icons/Githubicon";
import { Linkedinicons } from "./icons/Linkedinicon";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 pt-4 sm:px-8 sm:pt-8 pointer-events-none">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="side-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="glass-pill group pointer-events-auto flex items-center gap-4 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 active:scale-[0.98]"
        >
          <span className="font-pop text-lg font-bold uppercase leading-none tracking-[0.22em] text-white sm:text-2xl">
            {SITE.brand}
          </span>
          <span className="h-4 w-px bg-white/30 transition-colors group-hover:bg-white/50" />
          <span className="relative block h-3 w-6" aria-hidden="true">
            <span
              className={cn(
                "absolute left-0 top-0 h-[1.5px] w-full bg-white transition-transform duration-300",
                open && "translate-y-[5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute bottom-0 left-0 h-[1.5px] w-full bg-white transition-transform duration-300",
                open && "-translate-y-[5px] -rotate-45"
              )}
            />
          </span>
        </button>

        <div className="pointer-events-auto flex items-center gap-3 sm:gap-4">
          <SocialPill href={SOCIALS.linkedin} label="LinkedIn">
            <Linkedinicons size={20} className="text-white" />
          </SocialPill>
          <SocialPill href={SOCIALS.github} label="GitHub">
            <GithubIcon size={20} className="text-white" />
          </SocialPill>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
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
                      onClick={() => setOpen(false)}
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
    </>
  );
};

const SocialPill = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="glass-pill flex items-center justify-center rounded-full p-2.5 transition-transform hover:scale-105 sm:p-3"
  >
    {children}
  </a>
);
