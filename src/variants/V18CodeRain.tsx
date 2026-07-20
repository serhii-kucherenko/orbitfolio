"use client";

import { useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { cv } from "@/data/cv";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLCanvasElement>(null);
  const lexicon = useMemo(
    () => [...cv.skills.ai, ...cv.skills.backend, ...cv.skills.frontend, cv.name, "RAG", "agents"].join(""),
    [],
  );

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let w = 0;
    let h = 0;
    let raf = 0;
    const cols: number[] = [];
    const resize = () => {
      w = c.width = c.clientWidth;
      h = c.height = c.clientHeight;
      const n = Math.floor(w / 14);
      cols.length = n;
      for (let i = 0; i < n; i++) cols[i] = Math.random() * h;
    };
    const draw = () => {
      ctx.fillStyle = "rgba(2,11,6,0.12)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = "12px monospace";
      cols.forEach((y, i) => {
        const ch = lexicon[(i + Math.floor(y / 14)) % lexicon.length] || "0";
        const bright = y % 40 < 14;
        ctx.fillStyle = bright ? "#bbf7d0" : "#4ade80";
        ctx.fillText(ch, i * 14, y);
        cols[i] = y > h + Math.random() * 80 ? 0 : y + (reduce ? 0 : 10);
      });
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reduce, lexicon]);

  return (
    <main className="relative min-h-screen bg-[#020b06] text-green-100">
      <div className="pointer-events-none absolute inset-4 z-20 rounded-2xl border-2 border-green-700/40 shadow-[inset_0_0_60px_rgba(0,0,0,0.65)]" />
      <canvas ref={ref} className="absolute inset-0 h-full w-full opacity-50" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-28 pt-28">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-green-500/80">
          <span>CRT // NODE-01</span>
          <span className="text-green-400">uplink ok · {cv.location}</span>
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-5xl text-green-300 drop-shadow-[0_0_12px_rgba(74,222,128,0.45)]">
          {cv.name}
        </h1>
        <p className="mt-3 text-green-200/70">{cv.title}</p>
        <p className="mt-6 text-sm text-green-100/60">{cv.summary}</p>
        <div className="mt-8 grid grid-cols-2 gap-3 font-[family-name:var(--font-mono)] text-[11px] text-green-300/80 sm:grid-cols-4">
          {cv.highlights.slice(0, 4).map((h) => (
            <div key={h.label} className="rounded border border-green-500/25 bg-black/50 px-3 py-2">
              <p className="text-lg text-green-200">{h.value}</p>
              <p className="mt-1 text-green-600">{h.label}</p>
            </div>
          ))}
        </div>
        <section className="mt-14 rounded-2xl border border-green-500/20 bg-black/60 p-6 backdrop-blur">
          <ExperienceList tone="dark" />
        </section>
        <section className="mt-10">
          <SkillsCloud />
          <div className="mt-8">
            <ProjectLinks />
            <ContactRow className="mt-8 text-green-200" />
          </div>
        </section>
      </div>
    </main>
  );
}
