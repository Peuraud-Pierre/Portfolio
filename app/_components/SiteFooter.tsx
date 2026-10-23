import { Code } from "lucide-react";
import { NAV_ITEMS, PROJECTS, SITE, SOCIALS } from "../_data/content";
import { GithubIcon } from "./icons/Githubicon";
import { Linkedinicons } from "./icons/Linkedinicon";

const headingClass = "mb-5 font-pop text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400";
const linkClass = "flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white";

export const SiteFooter = () => {
  return (
    <footer className="px-4 pb-10 pt-10 sm:px-20 sm:pt-20">
      <div className="mx-auto max-w-[1280px] rounded-t-[2.5rem] border-t border-white/10 bg-[radial-gradient(50%_80px_at_50%_0%,rgba(255,255,255,0.06),transparent)] px-2 pt-14 sm:px-6 sm:pt-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-3xl font-extrabold tracking-tight text-white">{SITE.brand}</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">{SITE.tagline}</p>
            <p className="mt-8 text-xs text-slate-500">
              © {new Date().getFullYear()} {SITE.name}. Tous droits réservés.
            </p>
          </div>
          <div>
            <h4 className={headingClass}>Navigation</h4>
            <ul className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-last col-span-2 md:order-none md:col-span-1">
            <h4 className={headingClass}>Projets</h4>
            <ul className="flex flex-col gap-4">
              {PROJECTS.map((p) => (
                <li key={p.title}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    <Code className="h-3.5 w-3.5" />
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={headingClass}>Réseaux</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  <GithubIcon size={14} /> GitHub
                </a>
              </li>
              <li>
                <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  <Linkedinicons size={14} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>{SITE.role} • Diplômé de Zone01 Rouen Normandie</p>
          <p className="flex items-center gap-2 text-slate-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Ouvert aux opportunités
          </p>
        </div>
      </div>
    </footer>
  );
};
