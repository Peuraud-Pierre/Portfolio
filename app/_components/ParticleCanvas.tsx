"use client";

import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; ox: number; oy: number; vx: number; vy: number; color: number };

type Props = {
  // Image PNG à fond transparent (ou noir) à transformer en particules. Si elle est absente,
  // un visuel de remplacement est dessiné.
  src?: string;
  maxParticles?: number;
  mouseRadius?: number;
  repelForce?: number;
  returnSpeed?: number;
  damping?: number;
};

const isLittleEndian = new Uint8Array(new Uint32Array([0x12345678]).buffer)[0] === 0x78;
const pack = (r: number, g: number, b: number) =>
  isLittleEndian ? (255 << 24) | (b << 16) | (g << 8) | r : (r << 24) | (g << 16) | (b << 8) | 255;

// Visuel de secours : une planète éclairée avec un anneau, placée à droite comme le sujet
// du site d'origine. Les zones sombres disparaissent au moment de l'échantillonnage.
const drawFallback = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
  const r = Math.min(w * 0.2, h * 0.33);
  const cx = w > 768 ? w * 0.66 : w * 0.6;
  const cy = h * 0.5;

  const ring = (front: boolean) => {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(-0.38);
    ctx.scale(1, 0.24);
    ctx.lineWidth = r * 0.5;
    const grad = ctx.createLinearGradient(-r * 2, 0, r * 2, 0);
    grad.addColorStop(0, "#2dd4bf");
    grad.addColorStop(0.5, "#e7e5e4");
    grad.addColorStop(1, "#f472b6");
    ctx.strokeStyle = grad;
    ctx.beginPath();
    ctx.arc(0, 0, r * 1.6, front ? 0 : Math.PI, front ? Math.PI : Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  };

  ring(false);
  const sphere = ctx.createRadialGradient(cx - r * 0.45, cy - r * 0.5, r * 0.05, cx, cy, r);
  sphere.addColorStop(0, "#ffffff");
  sphere.addColorStop(0.35, "#ffd1dc");
  sphere.addColorStop(0.75, "#9f5f7a");
  sphere.addColorStop(1, "#2a1520");
  ctx.fillStyle = sphere;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ring(true);

  // Poussière d'étoiles autour
  for (let i = 0; i < 350; i++) {
    const a = Math.random() * Math.PI * 2;
    const d = r * (1.1 + Math.random() * 1.6);
    ctx.fillStyle = `rgba(255,255,255,${0.3 + Math.random() * 0.6})`;
    ctx.fillRect(cx + Math.cos(a) * d * 1.3, cy + Math.sin(a) * d * 0.8, 3, 3);
  }
};

export const ParticleCanvas = ({
  src = `${process.env.NEXT_PUBLIC_BASE_PATH}/hero-subject.png`,
  maxParticles = 32000,
  mouseRadius = 95,
  repelForce = 26,
  returnSpeed = 0.048,
  damping = 0.942,
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let image: HTMLImageElement | null = null;
    let buffer: ImageData | null = null;
    let pixels: Uint32Array | null = null;
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 };

    const sample = () => {
      const off = document.createElement("canvas");
      off.width = width;
      off.height = height;
      const octx = off.getContext("2d", { willReadFrequently: true });
      if (!octx) return;

      if (image) {
        const ratio = Math.min((width * 0.84) / image.width, (height * 0.84) / image.height);
        const dw = image.width * ratio;
        const dh = image.height * ratio;
        octx.drawImage(image, (width - dw) / 2 + (width > 1024 ? 90 : 40), (height - dh) / 2, dw, dh);
      } else {
        drawFallback(octx, width, height);
      }

      const data = octx.getImageData(0, 0, width, height).data;
      const visible = (i: number) =>
        data[i + 3] > 15 && !(data[i] < 45 && data[i + 1] < 45 && data[i + 2] < 45);

      let count = 0;
      for (let i = 0; i < data.length; i += 4) if (visible(i)) count++;
      // Au moins 4 px entre deux points pour garder l'effet "trame de points"
      const step = Math.max(4, Math.floor(Math.sqrt(count / maxParticles)));

      const next: Particle[] = [];
      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const i = (y * width + x) * 4;
          if (!visible(i)) continue;
          next.push({ x, y, ox: x, oy: y, vx: 0, vy: 0, color: pack(data[i], data[i + 1], data[i + 2]) });
        }
      }
      particles = next;
    };

    const resize = () => {
      width = canvas.width = canvas.clientWidth;
      height = canvas.height = canvas.clientHeight;
      buffer = ctx.createImageData(width, height);
      pixels = new Uint32Array(buffer.data.buffer);
      sample();
    };

    const tick = () => {
      frame = requestAnimationFrame(tick);
      if (!buffer || !pixels || window.scrollY > height * 1.05) return;

      mouse.x += (mouse.tx - mouse.x) * 0.32;
      mouse.y += (mouse.ty - mouse.y) * 0.32;
      const r2 = mouseRadius * mouseRadius;
      pixels.fill(0);

      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < r2 && d2 > 0.01) {
          const d = Math.sqrt(d2);
          const force = (1 - d / mouseRadius) * repelForce;
          p.vx += (dx / d) * force * 0.1;
          p.vy += (dy / d) * force * 0.1;
        }
        p.vx = (p.vx + (p.ox - p.x) * returnSpeed) * damping;
        p.vy = (p.vy + (p.oy - p.y) * returnSpeed) * damping;
        p.x += p.vx;
        p.y += p.vy;

        const px = p.x | 0;
        const py = p.y | 0;
        if (px < 0 || py < 0 || px >= width - 1 || py >= height - 1) continue;
        const idx = py * width + px;
        pixels[idx] = pixels[idx + 1] = pixels[idx + width] = pixels[idx + width + 1] = p.color;
      }
      ctx.putImageData(buffer, 0, 0);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.tx = e.clientX - rect.left;
      mouse.ty = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.tx = mouse.ty = -9999;
    };

    const start = () => {
      resize();
      frame = requestAnimationFrame(tick);
    };

    const img = new Image();
    img.onload = () => {
      image = img;
      start();
    };
    img.onerror = start;
    img.src = src;

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [src, maxParticles, mouseRadius, repelForce, returnSpeed, damping]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
};
