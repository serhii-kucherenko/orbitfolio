"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Issue Stack — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#1c1917] text-orange-50">
      <section className="px-6 pb-8 pt-28">
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold">{cv.name}</h1>
        <p className="mt-3 text-orange-100/70">{cv.title}</p>
        <p className="mt-6 max-w-xl text-sm text-white/55">{cv.summary}</p>
      </section>
      <div className="relative mx-auto max-w-3xl px-6 pb-12">
        {cv.experience.map((job, i) => (
          <motion.article key={job.company} initial={reduce ? false : { y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="relative mb-[-2rem] rounded-2xl border border-orange-200/20 p-6 shadow-2xl" style={{ background: i % 2 ? "#292524" : "#44403c", zIndex: cv.experience.length - i, transform: reduce ? undefined : `rotate(${(i - 1.5) * 1.5}deg)` }}>
            <p className="text-[10px] uppercase tracking-wider text-orange-200/50">Issue 0{i + 1}</p>
            <h2 className="mt-2 text-2xl font-semibold">{job.company}</h2>
            <p className="mt-1 text-sm text-white/60">{job.role} · {job.period}</p>
          </motion.article>
        ))}
      </div>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28 pt-16"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-orange-100/70" /></section>
    </main>
  );
}
