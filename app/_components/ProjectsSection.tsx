"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "./icons/Githubicon";
import { PROJECTS, PROJECTS_INTRO, type Project } from "../_data/content";
import { SectionTitle } from "./SectionTitle";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export const ProjectsSection = () => {
  return (
    <section id="projects" className="px-4 py-28 sm:px-8">
      <SectionTitle title={PROJECTS_INTRO.title} subtitle={PROJECTS_INTRO.subtitle} />
      <div className="mx-auto mt-20 flex max-w-[1120px] flex-col gap-14">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const reversed = index % 2 === 1;
  const total = String(PROJECTS.length).padStart(2, "0");
  return (
    <motion.article
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: EASE }}
      className={cn(
        "project-card relative grid grid-cols-1 items-center gap-10 rounded-[2rem] border border-white/10 p-6 sm:p-10 md:grid-cols-2 md:gap-14 md:p-14 lg:min-h-[530px]",
        project.featured && "border-pinkish/40 shadow-[0_0_80px_-20px_rgba(255,182,193,0.35)] lg:min-h-[600px]"
      )}
    >
      {project.featured && (
        <span className="absolute -top-3.5 left-6 inline-flex items-center gap-1.5 rounded-full border border-pinkish/50 bg-black px-3.5 py-1.5 font-pop text-[11px] font-medium uppercase tracking-[0.18em] text-pinkish sm:left-14">
          <Star className="h-3 w-3 fill-pinkish" />
          Projet phare
        </span>
      )}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 45 : -45 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        className={cn("flex min-w-0 flex-col", reversed && "md:order-2")}
      >
        <div className="mb-5 flex flex-wrap items-center justify-between gap-x-2.5 gap-y-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-pop text-xs font-medium uppercase text-black shadow-[0_0_24px_rgba(255,255,255,0.35)] transition-transform hover:scale-105"
          >
            <GithubIcon size={14} />
            Code source
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          {project.downloadUrl && (
            <a
              href={project.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-auto inline-flex items-center gap-2 rounded-full border border-pinkish/50 px-4 py-2 font-pop text-xs font-medium uppercase text-pinkish transition-colors hover:bg-pinkish hover:text-black"
            >
              <Download className="h-3.5 w-3.5" />
              Télécharger
            </a>
          )}
          <span className="font-pop text-xs tracking-[0.15em] text-neutral-400">
            {String(index + 1).padStart(2, "0")} / {total}
          </span>
        </div>
        <h3
          className={cn(
            "font-sub text-4xl font-bold leading-tight text-white sm:text-5xl",
            project.featured && "bg-gradient-to-r from-white via-[#ffe4ec] to-pinkish bg-clip-text text-transparent sm:text-6xl"
          )}
        >
          {project.title}
        </h3>
        <p className="mt-6 font-sans text-[15px] leading-relaxed text-neutral-300">{project.description}</p>
        {project.features && (
          <ul className="mt-5 flex flex-col gap-2 font-sans text-sm leading-relaxed text-neutral-300">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-2.5">
                <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-pinkish" />
                {feature}
              </li>
            ))}
          </ul>
        )}
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 font-sub text-xs font-bold tracking-wider text-white"
            >
              {tag}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.a
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group block min-w-0 rounded-2xl border border-white/20 bg-[#1a1a1c] p-3 shadow-2xl",
          reversed && "md:order-1"
        )}
      >
        <div className="flex gap-1.5 rounded-t-xl bg-[#252527] px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="aspect-[16/9] overflow-hidden rounded-b-xl bg-[#0e0e10]">
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          ) : (
            <Preview project={project} />
          )}
        </div>
      </motion.a>
    </motion.article>
  );
};

// Aperçu stylisé utilisé tant qu'aucune capture d'écran n'est fournie
const Preview = ({ project }: { project: Project }) => {
  const { kind, lines } = project.preview;

  if (kind === "vinyl") return <VinylPreview caption={lines} />;

  // Tableau de bord : menu des modules à gauche, indicateurs et graphique à droite
  if (kind === "console") {
    return (
      <div className="flex h-full">
        <div className="flex w-[26%] flex-col gap-1.5 border-r border-white/10 p-3">
          <span className="mb-1 font-display text-[10px] font-extrabold uppercase tracking-wider text-white sm:text-xs">
            La Console
          </span>
          {lines.map((l, i) => (
            <span
              key={l}
              className={cn(
                "rounded px-1.5 py-0.5 font-pop text-[8px] sm:text-[10px]",
                i === 0 ? "bg-pinkish/20 text-pinkish" : "text-neutral-400"
              )}
            >
              {l}
            </span>
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-2.5 p-3">
          <div className="grid grid-cols-3 gap-2">
            {["Clients", "Devis", "Conteneurs"].map((k, i) => (
              <div key={k} className="rounded-md border border-white/10 bg-white/5 p-2">
                <span className="block font-pop text-[7px] uppercase text-neutral-500 sm:text-[9px]">{k}</span>
                <span className="font-display text-xs font-bold text-white sm:text-base">{[248, 37, 12][i]}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-1 items-end gap-1.5 rounded-md border border-white/10 bg-white/[0.03] p-2">
            {[40, 65, 50, 80, 60, 90, 70, 85, 55, 75].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-pink-300/40 to-teal-300/40"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (kind === "web") {
    return (
      <div className="flex h-full flex-col p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-display text-sm font-extrabold text-white">{project.title}</span>
          <div className="flex gap-3 font-pop text-[9px] text-neutral-400">
            {lines.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </div>
        <div className="grid flex-1 grid-cols-4 gap-2">
          {[60, 85, 45, 70, 90, 50, 75, 55].map((h, i) => (
            <div
              key={i}
              className="rounded-md bg-gradient-to-br from-pink-300/30 via-white/5 to-teal-300/20"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <pre
      className={cn(
        "h-full overflow-hidden p-5 font-mono text-[11px] leading-relaxed sm:text-xs",
        kind === "terminal" ? "text-emerald-300" : "text-neutral-300"
      )}
    >
      {lines.map((line, i) => (
        <div key={i}>
          {kind === "code" ? (
            <>
              <span className="mr-4 select-none text-neutral-600">{i + 1}</span>
              <span className={line.includes("fn ") || line.includes("for ") ? "text-pink-300" : undefined}>{line}</span>
            </>
          ) : (
            line
          )}
        </div>
      ))}
    </pre>
  );
};

// Platine animée : le disque tourne à 33⅓ tours/min (1,8 s par tour) sous le bras de lecture
const VinylPreview = ({ caption }: { caption: string[] }) => (
  <div className="relative flex h-full items-center bg-[radial-gradient(120%_90%_at_30%_20%,#4a2a33,#140c10_70%)] px-[6%]">
    <div className="relative aspect-square h-[86%]">
      <div className="vinyl-disc absolute inset-0 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
        <div className="absolute inset-[31%] rounded-full bg-[conic-gradient(from_200deg,#ffb6c1,#f472b6,#2dd4bf,#ffe4ec,#ffb6c1)]">
          <div className="absolute inset-[42%] rounded-full bg-[#140c10]" />
        </div>
      </div>
      {/* Reflet fixe : il ne tourne pas avec le disque */}
      <div className="pointer-events-none absolute inset-0 rounded-full bg-[conic-gradient(from_30deg,transparent_0deg,rgba(255,255,255,0.12)_25deg,transparent_60deg,transparent_180deg,rgba(255,255,255,0.08)_210deg,transparent_240deg)]" />
    </div>

    {/* Bras de lecture */}
    <div className="vinyl-arm absolute right-[30%] top-[8%] h-[70%] w-[6%] origin-top">
      <span className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-[#2a2a2e] shadow-lg" />
      <span className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-neutral-300 to-neutral-500" />
      <span className="absolute bottom-0 left-1/2 h-4 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-sm bg-neutral-800 ring-1 ring-white/20" />
    </div>

    <div className="ml-auto flex flex-col items-end gap-1 text-right">
      <span className="font-pop text-[10px] uppercase tracking-[0.2em] text-pinkish/80">{caption[0]}</span>
      <span className="font-display text-sm font-bold text-white sm:text-base">{caption[1]}</span>
      <div className="mt-2 flex items-end gap-[3px]" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className="vinyl-eq w-[3px] rounded-full bg-pinkish" style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
      </div>
    </div>
  </div>
);
