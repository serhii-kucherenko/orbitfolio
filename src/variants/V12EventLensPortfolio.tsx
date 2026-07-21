"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Event Lens Portfolio — event-horizon lens bends the opening frame; proof stays legible. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#050508] text-zinc-100">
      <section className="relative flex min-h-[78vh] flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
        <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-70">
          <defs>
            <radialGradient id="lensGlow" cx="50%" cy="45%" r="45%">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.35" />
              <stop offset="55%" stopColor="#312e81" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#050508" stopOpacity="0" />
            </radialGradient>
            <filter id="bend">
              <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale={reduce ? 0 : 18} />
            </filter>
          </defs>
          <circle cx="50%" cy="42%" r="38%" fill="url(#lensGlow)" filter={reduce ? undefined : "url(#bend)"} />
        </svg>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-3xl"
        >
          <p className="text-[10px] uppercase tracking-[0.45em] text-violet-300/60">Event lens · opening frame</p>
          <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-7xl">{cv.name}</h1>
          <p className="mt-4 text-lg text-violet-100/70">{cv.title}</p>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/55">{cv.summary}</p>
          <a
            href={`mailto:${cv.email}`}
            className="mt-8 inline-block border border-violet-300/40 px-5 py-2.5 text-sm text-violet-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
          >
            Cross the horizon
          </a>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <div className="grid gap-3 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="border border-violet-400/20 bg-violet-950/20 px-4 py-5">
              <p className="text-2xl font-bold text-violet-100">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-violet-200/45">{h.label}</p>
            </div>
          ))}
        </div>
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-violet-100/65" />
        <p className="text-xs text-white/35">
          {cv.education.degree} · {cv.education.school}
        </p>
      </section>
    </main>
  );
}
