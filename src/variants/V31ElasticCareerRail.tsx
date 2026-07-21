"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Elastic Career Rail — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#12081f] text-fuchsia-50">
      <section className="px-6 pb-8 pt-28">
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-fuchsia-200/70">{cv.title} — scroll the career rail</p>
        <p className="mt-6 max-w-xl text-sm text-white/55">{cv.summary}</p>
      </section>
      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-10">
        {cv.experience.map((job, i) => (
          <motion.article key={job.company} initial={reduce ? false : { opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="w-[min(85vw,400px)] shrink-0 snap-center rounded-3xl border border-fuchsia-300/25 bg-fuchsia-950/30 p-6">
            <p className="text-xs text-fuchsia-200/60">{job.period}</p>
            <h2 className="mt-2 text-2xl font-semibold">{job.company}</h2>
            <p className="mt-1 text-sm text-white/70">{job.role}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">{job.bullets.map((b) => <li key={b.slice(0, 24)}>{b}</li>)}</ul>
          </motion.article>
        ))}
        <article className="w-[min(85vw,400px)] shrink-0 snap-center rounded-3xl border border-white/15 bg-white/5 p-6"><h2 className="text-2xl">Skills</h2><div className="mt-4"><SkillsCloud /></div></article>
        <article className="w-[min(85vw,400px)] shrink-0 snap-center rounded-3xl border border-white/15 bg-white/5 p-6"><h2 className="text-2xl">Projects</h2><div className="mt-4"><ProjectLinks /><ContactRow className="mt-8" /></div></article>
      </div>
    </main>
  );
}
