"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Outcome First Resume — recruiter sees measured wins before any biography */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
      <section className="border-b border-slate-200 bg-[#0f172a] text-white">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] text-cyan-300">
            Outcomes first · skim in under 10s
          </p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 font-[family-name:var(--font-display)] text-4xl font-extrabold sm:text-5xl"
          >
            {cv.name}
          </motion.h1>
          <p className="mt-2 text-lg text-slate-300">{cv.title}</p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {cv.highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: reduce ? 0 : 0.06 * i }}
                className="rounded-lg border border-white/10 bg-white/5 p-4"
              >
                <p className="text-3xl font-bold text-cyan-300 md:text-4xl">{h.value}</p>
                <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">{h.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="rounded-md bg-cyan-400 px-5 py-2.5 text-sm font-bold text-[#0f172a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              Hire — email now
            </a>
            <ContactRow className="text-slate-300" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <p className="max-w-3xl text-sm leading-7 text-slate-600">{cv.summary}</p>
        <p className="mt-3 text-xs text-slate-400">{cv.location}</p>
      </section>

      <section className="mx-auto max-w-5xl space-y-16 px-6 pb-24">
        <div>
          <h2 className="mb-2 text-2xl font-bold">Where the outcomes came from</h2>
          <p className="mb-8 text-sm text-slate-500">Role → company → proof</p>
          <ExperienceList tone="light" />
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-bold">Toolkit</h2>
            <SkillsCloud tone="light" />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold">Shipped</h2>
            <ProjectLinks tone="light" />
            <p className="mt-10 text-sm text-slate-500">
              {cv.education.degree} · {cv.education.school}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
