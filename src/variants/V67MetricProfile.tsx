"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Metric Profile — measured impact at editorial scale without reducing the career to numbers. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#f3f3f3]">
      <header className="relative overflow-hidden border-b border-white/10">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#ff7a18]/20 blur-3xl"
          animate={reduce ? undefined : { opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <div className="relative mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-8 px-6 pb-10 pt-24 lg:px-10">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#ff7a18]">
              Metric profile · board
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold sm:text-6xl">
              {cv.name}
            </h1>
            <p className="mt-2 text-neutral-400">{cv.title}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${cv.email}`}
              className="border-2 border-[#ff7a18] bg-[#ff7a18] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[#0c0c0c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7a18]"
            >
              Hire
            </a>
            <a
              href="/resume"
              className="border-2 border-white/25 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Print
            </a>
          </div>
        </div>
        <ContactRow className="relative mx-auto max-w-6xl px-6 pb-8 text-neutral-500 lg:px-10" />

        <div className="relative mx-auto grid max-w-6xl border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.08 * i }}
              className="group border-white/10 px-6 py-14 sm:border-l [&:nth-child(n+3)]:border-t lg:[&:nth-child(n+3)]:border-t-0 [&:nth-child(1)]:sm:border-l-0"
            >
              <p className="font-[family-name:var(--font-display)] text-6xl font-extrabold leading-none tracking-tight text-[#ff7a18] transition-transform duration-300 group-hover:scale-[1.03] sm:text-7xl">
                {h.value}
              </p>
              <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-neutral-500">{h.label}</p>
              <div
                aria-hidden
                className="mt-6 h-px w-10 origin-left bg-[#ff7a18]/70 transition-all duration-300 group-hover:w-16"
              />
            </motion.div>
          ))}
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[1.4fr_0.8fr] lg:px-10">
        <p className="max-w-3xl text-sm leading-8 text-neutral-400">{cv.summary}</p>
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase leading-6 tracking-[0.3em] text-[#ff7a18]/75">
          Numbers lead
          <br />
          narrative follows
          <br />
          evidence stays open
        </p>
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-6 pb-28 lg:px-10">
        <div>
          <h2 className="mb-8 text-2xl font-bold">Behind the numbers</h2>
          <ExperienceList tone="dark" />
        </div>
        <div className="grid gap-14 border-t border-white/10 pt-16 md:grid-cols-2">
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
