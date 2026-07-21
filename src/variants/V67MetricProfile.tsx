"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Metric Profile — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#0b1220] text-slate-50">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/70">Metric profile</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-slate-300">{cv.title}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-4">{cv.highlights.map((h) => <div key={h.label} className="rounded-2xl border border-cyan-400/20 bg-cyan-950/40 p-5"><p className="text-3xl font-bold text-cyan-200">{h.value}</p><p className="mt-2 text-[10px] uppercase tracking-wider text-cyan-200/50">{h.label}</p></div>)}</div>
        <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-cyan-100/70" /></section>
    </main>
  );
}
