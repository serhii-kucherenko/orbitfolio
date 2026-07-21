"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Metric Profile — oversized scoreboard where numbers own the first viewport */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#111111] text-[#f5f5f5]">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 pt-16 md:pt-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] text-[#f97316]">
                Metric profile
              </p>
              <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold sm:text-5xl">
                {cv.name}
              </h1>
              <p className="mt-2 text-neutral-400">{cv.title}</p>
            </div>
            <a
              href={`mailto:${cv.email}`}
              className="rounded-none border-2 border-[#f97316] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[#f97316] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f97316]"
            >
              Hire
            </a>
          </div>
          <ContactRow className="mt-6 text-neutral-400" />
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.08 * i, duration: 0.45 }}
              className={`border-white/10 px-6 py-10 ${i > 0 ? "sm:border-l" : ""} ${i >= 2 ? "lg:border-t-0 border-t" : "border-t sm:border-t-0"}`}
            >
              <p className="font-[family-name:var(--font-display)] text-6xl font-extrabold leading-none tracking-tight text-[#f97316] sm:text-7xl">
                {h.value}
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.25em] text-neutral-500">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="max-w-3xl text-sm leading-7 text-neutral-400">{cv.summary}</p>
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-6 pb-24">
        <div>
          <h2 className="mb-8 text-2xl font-bold">Behind the numbers</h2>
          <ExperienceList tone="dark" />
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-bold">Skills</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold">Projects</h2>
            <ProjectLinks />
            <p className="mt-10 text-sm text-neutral-500">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
