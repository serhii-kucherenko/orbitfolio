"use client";

import { useEffect, useRef } from "react";

type Props = {
  density?: number;
  speed?: number;
  color?: string;
  className?: string;
  interactive?: boolean;
};

export function Starfield({
  density = 180,
  speed = 0.15,
  color = "#c8d6ff",
  className = "",
  interactive = true,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let mx = 0.5;
    let my = 0.5;
    const stars = Array.from({ length: density }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random() * 0.9 + 0.1,
      tw: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e: PointerEvent) => {
      if (!interactive) return;
      mx = e.clientX / window.innerWidth;
      my = e.clientY / window.innerHeight;
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const driftX = (mx - 0.5) * 24;
      const driftY = (my - 0.5) * 18;
      for (const s of stars) {
        const x = s.x * w + driftX * s.z;
        const y = s.y * h + driftY * s.z + (reduce ? 0 : (t * speed * s.z) % h);
        const yy = ((y % h) + h) % h;
        const r = s.z * 1.6;
        const a = 0.35 + s.z * 0.55 + (reduce ? 0 : Math.sin(t * 0.002 + s.tw) * 0.15);
        ctx.fillStyle = color;
        ctx.globalAlpha = Math.max(0.15, Math.min(1, a));
        ctx.beginPath();
        ctx.arc(x, yy, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    draw(0);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, [color, density, interactive, speed]);

  return (
    <canvas
      ref={ref}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden
    />
  );
}
