"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Metric Profile — measured impact at editorial scale without reducing the career to numbers. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#f6f6f6]">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-6 px-6 pb-8 pt-24 lg:px-10">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#ff7a18]">
              Metric profile · board
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold sm:text-6xl">
              {cv.name}
            </h1>
            <p className="mt-2 text-neutral-400">{cv.title}</p>
          </div>
          <a
            href={`mailto:${cv.email}`}
            className="border-2 border-[#ff7a18] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[#ff7a18] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7a18]"
          >
            Hire
          </a>
        </div>
        <ContactRow className="mx-auto max-w-6xl px-6 pb-8 text-neutral-500 lg:px-10" />

        <div className="mx-auto grid max-w-6xl border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.07 * i }}
              className="border-white/10 px-6 py-12 sm:border-l [&:nth-child(n+3)]:border-t lg:[&:nth-child(n+3)]:border-t-0 [&:nth-child(1)]:sm:border-l-0"
            >
              <p className="font-[family-name:var(--font-display)] text-6xl font-extrabold leading-none tracking-tight text-[#ff7a18] sm:text-7xl">
                {h.value}
              </p>
              <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-neutral-500">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-10">
        <p className="max-w-3xl text-sm leading-8 text-neutral-400">{cv.summary}</p>
        <p className="mt-4 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[#ff7a18]/70">
          Numbers lead · narrative follows
        </p>
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-6 pb-28 lg:px-10">
        <div>
          <h2 className="mb-8 text-2xl font-bold">Behind the numbers</h2>
          <ExperienceList tone="dark" />
        </div>
        <div className="grid gap-14 md:grid-cols-2">
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
