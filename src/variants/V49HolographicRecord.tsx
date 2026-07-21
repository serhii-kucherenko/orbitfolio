"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Holographic Record — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#030b12] text-cyan-50">
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,211,238,0.08) 3px)" }} aria-hidden />
      <section className="relative mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.35em] text-cyan-400">HOLO // RECORD</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl sm:text-6xl" style={{ textShadow: "0 0 24px rgba(34,211,238,0.45)" }}>{cv.name}</h1>
        <p className="mt-3 text-cyan-200/70">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm text-cyan-50/60">{cv.summary}</p>
      </section>
      <section className="relative mx-auto max-w-4xl space-y-6 px-6 pb-12">
        {cv.experience.map((job, i) => (
          <motion.div key={job.company} initial={reduce ? false : { opacity: 0, x: i % 2 ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border border-cyan-400/30 bg-cyan-950/20 p-6 backdrop-blur-md">
            <p className="text-xs text-cyan-400/70">{job.period}</p>
            <h3 className="mt-1 text-xl">{job.role} · {job.company}</h3>
            <ul className="mt-3 space-y-1 text-sm text-cyan-50/70">{job.bullets.map((b) => <li key={b.slice(0, 24)}>{b}</li>)}</ul>
          </motion.div>
        ))}
      </section>
      <section className="relative mx-auto max-w-4xl space-y-12 px-6 pb-28"><SkillsCloud /><ProjectLinks /><ContactRow className="text-cyan-200" /></section>
    </main>
  );
}
