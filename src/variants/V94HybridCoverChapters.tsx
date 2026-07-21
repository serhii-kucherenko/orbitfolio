"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hybrid Cover Chapters — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#0c0a09] text-amber-50">
      <section className="px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-amber-200/60">Steals object-like covers + viewport storytelling</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold">{cv.name}</h1>
        <p className="mt-3 text-amber-100/70">{cv.title}</p>
        <p className="mt-6 max-w-xl text-sm text-white/55">{cv.summary}</p>
      </section>
      <div className="snap-x snap-mandatory flex gap-5 overflow-x-auto px-6 pb-10">{cv.experience.map((job) => <article key={job.company} className="w-[min(85vw,380px)] shrink-0 snap-center rounded-3xl border border-amber-200/20 bg-amber-950/20 p-6"><p className="text-xs text-amber-200/50">{job.period}</p><h2 className="mt-2 text-2xl font-semibold">{job.company}</h2><p className="mt-1 text-sm text-white/70">{job.role}</p><ul className="mt-4 space-y-2 text-sm text-white/55">{job.bullets.map((b) => <li key={b.slice(0, 24)}>{b}</li>)}</ul></article>)}</div>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><SkillsCloud /><ProjectLinks /><ContactRow className="text-amber-100/70" /></section>
    </main>
  );
}
