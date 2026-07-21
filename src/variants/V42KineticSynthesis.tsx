"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Kinetic Synthesis — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-50">
      <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 pb-16 pt-28 md:grid-cols-2">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-sky-300/70">Kinetic synthesis</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
          <p className="mt-4 text-lg text-sky-100/80">{cv.title}</p>
          <p className="mt-6 text-sm leading-7 text-white/55">{cv.summary}</p>
          <ContactRow className="mt-8 text-sky-100/70" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {cv.highlights.map((h, i) => (
            <motion.div key={h.label} initial={reduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-3xl border border-sky-400/20 bg-sky-950/40 p-5">
              <p className="text-3xl font-bold text-sky-200">{h.value}</p>
              <p className="mt-2 text-[10px] uppercase tracking-wider text-sky-200/50">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /></section>
    </main>
  );
}
