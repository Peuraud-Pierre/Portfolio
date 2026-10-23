"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LayoutTemplate, Server, Wrench } from "lucide-react";
import { ABOUT } from "../_data/content";
import { SplitText } from "./SplitText";
import { cn } from "@/lib/utils";

const ICONS = { layout: LayoutTemplate, server: Server, wrench: Wrench };

// Positions des cartes sur grand écran (en escalier, comme sur le site d'origine)
const CARD_OFFSETS = ["lg:ml-[30%]", "lg:ml-[2%]", "lg:ml-[36%]"];

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-36">
      <div className="dot-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[520px] w-[520px] rounded-full bg-pinkish/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        <div className="mb-10 flex flex-col items-start font-sub sm:mb-20">
          <SplitText
            text={ABOUT.titleTop}
            className="text-4xl font-bold uppercase leading-[1.08] tracking-tight text-neutral-400 sm:text-6xl lg:text-7xl"
          />
          <SplitText
            text={ABOUT.titleBottom}
            className="text-4xl font-bold uppercase leading-[1.08] tracking-tight text-bone sm:text-6xl lg:text-7xl"
          />
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="space-y-6 font-sub text-lg leading-relaxed text-slate-200 sm:text-xl lg:col-span-6 lg:text-2xl">
            {ABOUT.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <ToolsTree />
        </div>
      </div>
    </section>
  );
};

type Path = { d: string; end: { x: number; y: number } };

const ToolsTree = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [paths, setPaths] = useState<Path[]>([]);

  // Calcule les courbes qui relient la pastille "Stack" à chaque carte
  const compute = useCallback(() => {
    const container = containerRef.current;
    const root = rootRef.current;
    if (!container || !root) return;
    const c = container.getBoundingClientRect();
    const r = root.getBoundingClientRect();
    const sx = r.left + r.width / 2 - c.left;
    const sy = r.bottom - c.top;
    setPaths(
      cardRefs.current.flatMap((card) => {
        if (!card) return [];
        const b = card.getBoundingClientRect();
        const ey = b.top - c.top;
        // Carte décalée à droite : la courbe arrive sur son coin haut-gauche par le côté
        if (b.left - c.left > sx + 20) {
          const ex = b.left - c.left;
          return [{ d: `M ${sx} ${sy} C ${sx} ${sy + 20}, ${ex - 60} ${ey}, ${ex} ${ey}`, end: { x: ex, y: ey } }];
        }
        const ex = b.left - c.left + 10;
        return [{ d: `M ${sx} ${sy} C ${sx} ${sy + 60}, ${ex} ${ey - 80}, ${ex} ${ey}`, end: { x: ex, y: ey } }];
      })
    );
  }, []);

  useIsoLayoutEffect(() => {
    compute();
    const ro = new ResizeObserver(compute);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [compute]);

  return (
    <div ref={containerRef} className="relative lg:col-span-6">
      <svg className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible lg:block" aria-hidden="true">
        {paths.map((p, i) => (
          <g key={i}>
            <motion.path
              d={p.d}
              fill="none"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth={1.5}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 + i * 0.1, ease: "easeInOut" }}
            />
            <circle cx={p.end.x} cy={p.end.y} r={4} fill="white" />
          </g>
        ))}
      </svg>

      <div className="flex flex-col gap-6 lg:gap-8">
        <div
          ref={rootRef}
          className="w-fit rounded-full border border-white/25 bg-[#0d1220] px-11 py-3.5 font-pop text-base text-white shadow-[0_0_30px_rgba(120,140,255,0.08)]"
        >
          Stack
        </div>

        {ABOUT.tools.map((tool, i) => {
          const Icon = ICONS[tool.icon];
          return (
            <motion.div
              key={tool.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              onAnimationComplete={compute}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "w-full max-w-sm rounded-2xl border border-white/10 bg-gradient-to-br from-[#2a2228]/90 via-[#16141a]/90 to-[#1a1418]/90 p-6 shadow-2xl backdrop-blur-md",
                CARD_OFFSETS[i]
              )}
            >
              <h3 className="mb-3 flex items-center gap-2.5 font-pop text-base font-semibold text-white">
                <Icon className="h-4.5 w-4.5" />
                {tool.title}
              </h3>
              <p className="font-sub text-sm leading-relaxed text-neutral-300">{tool.items}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
