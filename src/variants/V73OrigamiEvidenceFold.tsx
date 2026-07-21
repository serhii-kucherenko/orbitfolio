"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Origami Evidence Fold — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#f1f5f9] text-slate-900">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Origami folds</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-slate-600">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600">{cv.summary}</p>
      </section>
      <section className="mx-auto grid max-w-4xl gap-6 px-6 pb-12 md:grid-cols-2">
        {cv.experience.map((job, i) => (
          <motion.article key={job.company} initial={reduce ? false : { rotateY: -18, opacity: 0 }} whileInView={{ rotateY: 0, opacity: 1 }} viewport={{ once: true }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" style={{ transformOrigin: i % 2 ? "right center" : "left center" }}>
            <p className="text-xs text-slate-400">{job.period}</p>
            <h2 className="mt-2 text-xl font-semibold">{job.company}</h2>
            <p className="text-sm text-slate-500">{job.role}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">{job.bullets.map((b) => <li key={b.slice(0, 24)}>{b}</li>)}</ul>
          </motion.article>
        ))}
      </section>
      <section className="mx-auto max-w-4xl space-y-12 px-6 pb-28"><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );
}
