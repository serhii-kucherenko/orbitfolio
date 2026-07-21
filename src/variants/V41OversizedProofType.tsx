"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Oversized Proof Type — poster-scale typography where metrics become the architecture */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#0a0c10]">
      <header className="border-b-4 border-[#0a0c10] px-4 py-10 md:px-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em]">
            Proof sheet · type only
          </p>
          <ContactRow className="text-[#0a0c10]/70" />
        </div>
        <motion.h1
          className="mt-8 font-[family-name:var(--font-display)] text-[14vw] font-black uppercase leading-[0.8] tracking-tighter"
          initial={reduce ? false : { letterSpacing: "0.08em", opacity: 0.4 }}
          animate={{ letterSpacing: "-0.04em", opacity: 1 }}
          transition={{ duration: reduce ? 0 : 1.1 }}
        >
          {cv.name.split(" ")[0]}
        </motion.h1>
        <p className="mt-2 font-[family-name:var(--font-display)] text-[10vw] font-black uppercase leading-[0.8] tracking-tighter text-[#1d4ed8]">
          {cv.name.split(" ").slice(1).join(" ")}
        </p>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xl font-semibold">{cv.title}</p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-black/60">{cv.summary}</p>
          </div>
          <a
            href={`mailto:${cv.email}`}
            className="bg-[#1d4ed8] px-8 py-4 text-xs font-black uppercase tracking-widest text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d4ed8]"
          >
            Hire the proof
          </a>
        </div>
      </header>

      <section className="grid border-b-4 border-[#0a0c10] sm:grid-cols-2 lg:grid-cols-4">
        {cv.highlights.map((h, i) => (
          <motion.div
            key={h.label}
            className="border-b-4 border-[#0a0c10] p-6 sm:border-b-0 sm:border-r-4 last:border-r-0"
            initial={reduce ? false : { y: 40, opacity: 0 }}
            whileInView={reduce ? undefined : { y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <p className="font-[family-name:var(--font-display)] text-6xl font-black leading-none text-[#1d4ed8] sm:text-7xl">
              {h.value}
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-black/50">{h.label}</p>
          </motion.div>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-10">
        <h2 className="mb-10 font-[family-name:var(--font-display)] text-5xl font-black uppercase">
          Evidence
        </h2>
        <ExperienceList tone="light" />
        <div className="mt-20 grid gap-14 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-black uppercase">Toolkit</h2>
            <SkillsCloud tone="light" />
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-black uppercase">Lab</h2>
            <ProjectLinks tone="light" />
            <p className="mt-10 text-sm text-black/50">
              {cv.education.degree} · {cv.education.school}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
