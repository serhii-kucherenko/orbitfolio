"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Ten Second Proof — one glance: identity, specialty, seniority, measurable impact. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#eef3ed] text-[#0c1f18]">
      <header className="mx-auto grid max-w-6xl gap-10 px-6 pb-10 pt-24 lg:grid-cols-[1.35fr_0.85fr] lg:px-10">
        <div>
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#1f6b52]">
            00:00 → 00:10 · hire scan · {cv.location}
          </p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 font-[family-name:var(--font-display)] text-5xl font-black leading-[0.92] sm:text-7xl"
          >
            {cv.name}
          </motion.h1>
          <p className="mt-4 text-xl font-medium text-[#1f6b52]">{cv.title}</p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#0c1f18]/70">{cv.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${cv.email}`}
              className="bg-[#0c1f18] px-5 py-2.5 text-sm font-semibold text-[#eef3ed] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0c1f18]"
            >
              Hire in one email
            </a>
            <a
              href="/resume"
              className="border border-[#0c1f18] px-5 py-2.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0c1f18]"
            >
              Ten-second PDF
            </a>
            <ContactRow className="items-center text-[#1f6b52]" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 self-start">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: reduce ? 0 : 0.05 * i }}
              className="flex min-h-[7.5rem] flex-col justify-between bg-[#0c1f18] p-5 text-[#eef3ed]"
            >
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-[#7dcaa8]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div>
                <p className="text-3xl font-black sm:text-4xl">{h.value}</p>
                <p className="mt-1 text-xs text-[#eef3ed]/55">{h.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </header>

      <section className="border-y border-[#0c1f18]/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 sm:grid-cols-3 lg:px-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#1f6b52]/70">Specialty</p>
            <p className="mt-2 text-sm font-semibold">Applied AI · LLM systems · RAG · agents</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#1f6b52]/70">Seniority</p>
            <p className="mt-2 text-sm font-semibold">Founding / lead · 10+ years shipping</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#1f6b52]/70">Location</p>
            <p className="mt-2 text-sm font-semibold">{cv.location}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#0c1f18] px-6 py-16 text-[#eef3ed] lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 font-[family-name:var(--font-display)] text-4xl font-bold">Proof ledger</h2>
          <ExperienceList tone="dark" />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-14 px-6 py-16 md:grid-cols-2 lg:px-10">
        <div>
          <h2 className="mb-8 text-2xl font-bold">Toolkit</h2>
          <SkillsCloud tone="light" />
        </div>
        <div>
          <h2 className="mb-8 text-2xl font-bold">Open work</h2>
          <ProjectLinks tone="light" />
          <p className="mt-12 border-t border-[#0c1f18]/15 pt-5 text-sm text-[#0c1f18]/55">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>
      <section data-hire-proof className="border-t border-[#0c1f18]/15 bg-white px-6 py-10 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1f6b52]">Who</p>
            <p className="mt-2 font-semibold">{cv.name}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1f6b52]">What</p>
            <p className="mt-2 font-semibold">{cv.title}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1f6b52]">Proof</p>
            <p className="mt-2 text-sm leading-6 opacity-70">
              Ten-second hire scan: identity, specialty, seniority, and measurable impact in one composition.
            </p>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-6xl text-xs uppercase tracking-wider opacity-45">
          who / what / proof · cell 59
        </p>
      </section>
    </main>
  );
}
