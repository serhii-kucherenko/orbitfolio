"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hybrid Museum Metrics — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#07111c] text-sky-50">
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-sky-300/70">Steals alcove storytelling + outcome hierarchy</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-sky-100/75">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <div className="mt-10 grid gap-3 sm:grid-cols-4">{cv.highlights.map((h) => <div key={h.label} className="rounded-2xl border border-sky-400/25 bg-sky-950/40 p-4"><p className="text-2xl font-bold text-sky-200">{h.value}</p><p className="text-[10px] uppercase text-sky-200/50">{h.label}</p></div>)}</div>
      </section>
      <section className="mx-auto grid max-w-5xl gap-4 px-6 pb-12 md:grid-cols-2">{cv.experience.map((job, i) => <motion.article key={job.company} initial={reduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-sky-400/20 bg-sky-950/30 p-6"><p className="text-xs text-sky-300/60">Alcove {i + 1} · {job.period}</p><h2 className="mt-2 text-xl font-semibold">{job.company}</h2><p className="text-sm text-white/70">{job.role}</p><ul className="mt-4 space-y-2 text-sm text-white/55">{job.bullets.map((b) => <li key={b.slice(0, 24)}>{b}</li>)}</ul></motion.article>)}</section>
      <section className="mx-auto max-w-5xl space-y-12 px-6 pb-28"><SkillsCloud /><ProjectLinks /><ContactRow className="text-sky-200/70" /></section>
    </main>
  );
}
