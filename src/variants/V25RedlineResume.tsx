"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Redline Resume — editor markup + proofing pass over a complete CV */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#fbfbf9] text-black">
      <div className="border-b border-red-200 bg-red-50 px-6 py-2 text-center font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] text-red-700">
        Edit pass · still in motion · hire-ready draft
      </div>
      <section className="mx-auto max-w-3xl px-6 pb-10 pt-20">
        <p className="font-[family-name:var(--font-mono)] text-xs text-red-600">REDLINE · EDIT PASS</p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 font-[family-name:var(--font-display)] text-5xl font-bold underline decoration-red-500 decoration-4 underline-offset-8"
        >
          {cv.name}
        </motion.h1>
        <p className="mt-4 text-lg">
          <span className="bg-red-100 px-1">{cv.title}</span>
          <span className="ml-2 font-[family-name:var(--font-mono)] text-xs text-red-500">← keep</span>
        </p>
        <p className="mt-6 border-l-4 border-red-500 pl-4 text-sm leading-7 text-black/70">{cv.summary}</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="rounded border border-dashed border-red-300 bg-white p-3">
              <p className="text-2xl font-bold text-red-700">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-black/45">{h.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${cv.email}`}
            className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Approve and email
          </a>
          <ContactRow className="text-red-800/80" />
        </div>
      </section>
      <section className="mx-auto max-w-3xl space-y-14 px-6 pb-28">
        <div>
          <p className="mb-6 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-red-600">
            § Experience — no cuts
          </p>
          <ExperienceList tone="light" />
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-6 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-red-600">
              § Skills
            </p>
            <SkillsCloud tone="light" />
          </div>
          <div>
            <p className="mb-6 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-red-600">
              § Projects
            </p>
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
