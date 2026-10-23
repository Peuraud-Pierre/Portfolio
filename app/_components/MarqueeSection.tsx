"use client";

import { useEffect, useRef } from "react";
import { MARQUEE } from "../_data/content";

export const MarqueeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const items = [...MARQUEE.items, ...MARQUEE.items];

  // Le bandeau avance avec le scroll : sa position cible dépend de la progression de la
  // section dans l'écran, et la position affichée la rattrape avec de l'inertie.
  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let frame = 0;
    let current = 0;
    let target = 0;
    let visible = false;
    let last = performance.now();
    let distance = 0;
    let top = 0;
    let height = 0;
    let viewport = window.innerHeight;

    const measure = () => {
      distance = track.scrollWidth - window.innerWidth + 250;
      top = section.offsetTop;
      height = section.offsetHeight;
      viewport = window.innerHeight;
    };
    const updateTarget = () => {
      const progress = (window.scrollY + viewport - top) / (height + viewport);
      target = -Math.max(0, Math.min(1, progress)) * distance;
    };
    const onScroll = () => visible && updateTarget();
    const onResize = () => {
      measure();
      updateTarget();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) {
          onResize();
          last = performance.now();
        }
      },
      { rootMargin: "100px 0px" }
    );
    observer.observe(section);

    const tick = (now: number) => {
      // Lissage indépendant du nombre d'images par seconde
      const dt = Math.min(now - last, 40) / 16.667;
      last = now;
      if (visible) {
        current += (target - current) * (1 - 0.91 ** dt);
        track.style.transform = `translate3d(${current}px, 0, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    onResize();
    current = target;
    frame = requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative select-none overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-28 bg-gradient-to-r from-black via-black/90 to-transparent sm:w-52" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-28 bg-gradient-to-l from-black via-black/90 to-transparent sm:w-52" />
      <div className="py-4">
        <div ref={trackRef} className="flex w-max transform-gpu items-center gap-6 px-8 will-change-transform sm:gap-8 sm:px-16">
          {items.map((item, i) => (
            <a
              key={`${item.steamId}-${i}`}
              href={`https://store.steampowered.com/app/${item.steamId}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden={i >= MARQUEE.items.length}
              tabIndex={i >= MARQUEE.items.length ? -1 : undefined}
              className="relative aspect-[16/10] w-64 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#161616] shadow-xl transition-colors duration-300 hover:border-white/30 sm:w-72 md:w-80"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://cdn.akamai.steamstatic.com/steam/apps/${item.steamId}/capsule_616x353.jpg`}
                alt={item.title}
                className="pointer-events-none h-full w-full object-cover grayscale transition duration-500 hover:grayscale-0"
              />
            </a>
          ))}
        </div>
      </div>
      <p className="mt-12 px-4 text-center font-sub text-xs font-bold uppercase tracking-[0.22em] text-bone sm:text-sm">
        {MARQUEE.caption}
      </p>
    </section>
  );
};
