"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, ProjectLinks } from "@/components/CvBlocks";

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const amplitude = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.5]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let t = 0;
    let amp = 0.5;

    const unsub = amplitude.on("change", (v) => {
      amp = v;
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const mid = h * 0.35;
      const points = Math.floor(w / 3);

      ctx.beginPath();
      ctx.strokeStyle = "rgba(56, 189, 248, 0.8)";
      ctx.lineWidth = 2;
      for (let i = 0; i <= points; i++) {
        const x = (i / points) * w;
        const freq = 0.02 + amp * 0.03;
        const y = mid + Math.sin(i * freq + t * 0.05) * (20 + amp * 40) * Math.sin(i * 0.08);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = "rgba(52, 211, 153, 0.4)";
      ctx.lineWidth = 1;
      for (let i = 0; i <= points; i++) {
        const x = (i / points) * w;
        const y = mid + 30 + Math.sin(i * 0.04 + t * 0.03) * 15;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      if (!reduce) {
        t++;
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      unsub();
    };
  }, [amplitude, reduce]);

  return (
    <main ref={containerRef} className="relative min-h-[200vh] bg-[#040810] text-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        <Starfield density={60} color="#334155" speed={0.02} />
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />

        <div className="relative z-10 flex h-full flex-col justify-center px-6">
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.4em] text-emerald-400">
              waveform · v43
            </p>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl sm:text-6xl">{cv.name}</h1>
            <p className="mt-3 text-lg text-sky-200/80">{cv.title}</p>
            <p className="mt-4 text-sm text-white/50">Scroll to modulate signal amplitude</p>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl space-y-16 px-6 pb-24">
        <p className="text-sm leading-relaxed text-white/70">{cv.summary}</p>
        <ExperienceList tone="dark" />
        <ProjectLinks tone="dark" />
        <ContactRow />
      </div>
    </main>
  );
}
