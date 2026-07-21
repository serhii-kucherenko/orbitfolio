"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Credit Roll Career — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen overflow-hidden bg-black text-amber-50">
      <section className="flex min-h-screen items-center justify-center px-6 pt-24">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] text-amber-200/60">End credits</p>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
          <p className="mt-4 text-amber-100/70">{cv.title}</p>
        </div>
      </section>
      <motion.section className="mx-auto max-w-xl space-y-12 px-6 pb-40 text-center" animate={reduce ? undefined : { y: [40, 0] }} transition={{ duration: 1.2 }}>
        <p className="text-sm leading-7 text-white/60">{cv.summary}</p>
        {cv.experience.map((job) => (
          <div key={job.company}>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-200/50">{job.period}</p>
            <h2 className="mt-2 text-2xl font-semibold">{job.role}</h2>
            <p className="text-amber-100/60">{job.company}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/55">{job.bullets.map((b) => <li key={b.slice(0, 20)}>{b}</li>)}</ul>
          </div>
        ))}
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="justify-center text-amber-100/70" />
      </motion.section>
    </main>
  );
}
