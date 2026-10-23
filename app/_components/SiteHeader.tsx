"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { SITE, SOCIALS } from "../_data/content";
import { GithubIcon } from "./icons/Githubicon";
import { Linkedinicons } from "./icons/Linkedinicon";
import { cn } from "@/lib/utils";

// Le menu (et framer-motion, qu'il est seul à utiliser) est chargé à part, après l'affichage
// de la page, pour ne pas retarder le démarrage du hero sur mobile
const SideMenu = dynamic(() => import("./SideMenu").then((m) => m.SideMenu), { ssr: false });

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

      <SideMenu open={open} onClose={() => setOpen(false)} />
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
