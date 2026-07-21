"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Snap Impact Chapters — viewport chapters: identity, outcomes, roles, skills, work. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const snap = reduce ? "" : "snap-y snap-mandatory scroll-smooth";

  return (
    <main className={`h-screen overflow-y-auto bg-[#12151a] text-[#f4f0e8] ${snap}`}>
      <section className="grid min-h-screen snap-start place-items-center bg-[#e8a54b] px-8 py-24 text-[#12151a]">
        <div className="max-w-4xl">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.45em]">Chapter 00 · Identity</p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 font-[family-name:var(--font-display)] text-6xl font-black leading-[0.9] sm:text-8xl"
          >
            {cv.name}
          </motion.h1>
          <p className="mt-6 text-xl font-medium">{cv.title}</p>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[#12151a]/75">{cv.summary}</p>
          <a
            href={`mailto:${cv.email}`}
            className="mt-10 inline-block bg-[#12151a] px-6 py-3 text-sm font-bold text-[#e8a54b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#12151a]"
          >
            Email to hire
          </a>
          <ContactRow className="mt-8 text-[#12151a]/70" />
        </div>
      </section>

      <section className="min-h-screen snap-start px-8 py-24">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#e8a54b]/70">
          Chapter 01 · Impact
        </p>
        <h2 className="mt-4 text-5xl font-black">Measured outcomes</h2>
        <div className="mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="rounded-2xl border border-white/12 bg-white/[0.03] p-6">
              <p className="text-4xl font-black text-[#e8a54b]">{h.value}</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-white/45">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="min-h-screen snap-start px-8 py-24">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#e8a54b]/70">
          Chapter 02 · Career
        </p>
        <h2 className="mt-4 mb-12 text-5xl font-black">Roles</h2>
        <div className="mx-auto max-w-4xl">
          <ExperienceList tone="dark" />
        </div>
      </section>

      <section className="min-h-screen snap-start bg-[#e8edf2] px-8 py-24 text-[#12151a]">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#12151a]/45">
          Chapter 03 · Systems
        </p>
        <h2 className="mt-4 mb-12 text-5xl font-black">Skills</h2>
        <SkillsCloud tone="light" />
      </section>

      <section className="min-h-screen snap-start px-8 py-24">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#e8a54b]/70">
          Chapter 04 · Lab
        </p>
        <h2 className="mt-4 mb-12 text-5xl font-black">Projects</h2>
        <ProjectLinks />
        <footer className="mt-20 border-t border-white/15 pt-6 text-sm text-white/45">
          {cv.education.degree} · {cv.education.school} · {cv.location}
        </footer>
      </section>
    </main>
  );
}
