"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Event Lens Portfolio — horizon lens bends the opening frame; proof stays sharp beyond it. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#06060c] text-zinc-100">
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
        <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full">
          <defs>
            <radialGradient id="eventLensGlow" cx="50%" cy="42%" r="48%">
              <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.4" />
              <stop offset="45%" stopColor="#4338ca" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#06060c" stopOpacity="0" />
            </radialGradient>
            <filter id="eventLensBend">
              <feTurbulence type="fractalNoise" baseFrequency="0.014" numOctaves="2" result="n" />
              <feDisplacementMap in="SourceGraphic" in2="n" scale={reduce ? 0 : 22} />
            </filter>
          </defs>
          <circle
            cx="50%"
            cy="40%"
            r="42%"
            fill="url(#eventLensGlow)"
            filter={reduce ? undefined : "url(#eventLensBend)"}
          />
          <circle cx="50%" cy="40%" r="18%" fill="none" stroke="rgba(196,181,253,0.35)" strokeWidth="0.4" />
        </svg>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-3xl"
        >
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.45em] text-violet-300/65">
            Event lens · frame 01
          </p>
          <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-7xl">{cv.name}</h1>
          <p className="mt-4 text-lg text-violet-100/75">{cv.title}</p>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/55">{cv.summary}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="border border-violet-300/50 px-5 py-2.5 text-sm text-violet-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
            >
              Cross the horizon
            </a>
            <ContactRow className="justify-center text-violet-200/60" />
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 border-y border-violet-400/15 bg-[#0c0c14]">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px sm:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : i * 0.05 }}
              className="bg-[#0c0c14] px-5 py-8"
            >
              <p className="text-3xl font-bold text-violet-200">{h.value}</p>
              <p className="mt-2 text-[10px] uppercase tracking-wider text-violet-200/40">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-4xl space-y-16 px-6 py-20">
        <div>
          <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl">Beyond the event horizon</h2>
          <ExperienceList tone="dark" />
        </div>
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-semibold text-violet-200/80">Instruments</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold text-violet-200/80">Signals</h2>
            <ProjectLinks />
            <p className="mt-10 text-xs text-white/35">
              {cv.education.degree} · {cv.education.school}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
