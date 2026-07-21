"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hybrid Holo Proof — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#030b12] text-cyan-50">
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,211,238,0.08) 3px)" }} aria-hidden />
      <section className="relative mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.35em] text-cyan-400">Steals scanline atmosphere + outcome-first evidence</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl sm:text-6xl" style={{ textShadow: "0 0 24px rgba(34,211,238,0.45)" }}>{cv.name}</h1>
        <p className="mt-3 text-cyan-200/70">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm text-cyan-50/60">{cv.summary}</p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">{cv.highlights.map((h) => <div key={h.label} className="border border-cyan-400/25 bg-cyan-950/30 p-3"><p className="text-xl font-bold text-cyan-200">{h.value}</p><p className="text-[10px] uppercase text-cyan-200/50">{h.label}</p></div>)}</div>
      </section>
      <section className="relative mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-cyan-200" /></section>
    </main>
  );
}
