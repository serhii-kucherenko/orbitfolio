"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Field Notes Vancouver — daylight journal with rain-grid evidence pages */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#eef6f3] text-emerald-950">
      <section className="mx-auto max-w-4xl px-6 pb-10 pt-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-emerald-700/70">
              Field notes · {cv.location}
            </p>
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 font-[family-name:var(--font-serif)] text-5xl sm:text-6xl"
            >
              {cv.name}
            </motion.h1>
            <p className="mt-3 text-emerald-900/75">{cv.title}</p>
          </div>
          <a
            href={`mailto:${cv.email}`}
            className="rounded-full bg-emerald-800 px-5 py-2.5 text-sm font-medium text-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
          >
            Write back
          </a>
        </div>
        <p className="mt-8 rounded-2xl border border-emerald-900/10 bg-white/70 p-6 text-sm leading-8 shadow-sm">
          {cv.summary}
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : i * 0.05 }}
              className="rounded-xl border border-emerald-900/10 bg-[#dff0ea] p-4"
            >
              <p className="text-2xl font-semibold text-emerald-900">{h.value}</p>
              <p className="mt-1 text-xs text-emerald-800/60">{h.label}</p>
            </motion.div>
          ))}
        </div>
        <ContactRow className="mt-8 text-emerald-800" />
      </section>
      <section className="border-y border-emerald-900/10 bg-white/50">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="font-[family-name:var(--font-serif)] text-3xl">Trail log</h2>
          <p className="mt-2 text-sm text-emerald-800/60">Career stops recorded in order of arrival.</p>
          <div className="mt-10">
            <ExperienceList tone="light" />
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-4xl gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="font-[family-name:var(--font-serif)] text-2xl">Kit list</h2>
          <div className="mt-6">
            <SkillsCloud tone="light" />
          </div>
        </div>
        <div>
          <h2 className="font-[family-name:var(--font-serif)] text-2xl">Specimens</h2>
          <div className="mt-6">
            <ProjectLinks tone="light" />
          </div>
          <p className="mt-10 text-sm text-emerald-800/55">
            {cv.education.degree} · {cv.education.school}
          </p>
        </div>
      </section>
    </main>
  );
}
