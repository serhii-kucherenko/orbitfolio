"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Recruiter Champion — Epsilon close: maximum clarity, solid motion, zero hidden evidence. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#0b1218] text-[#e8f4f8]">
      <header className="mx-auto max-w-6xl px-6 pb-12 pt-24 lg:px-10">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <motion.span
              initial={reduce ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-[#7dd3fc] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#0b1218]"
            >
              Founding engineer · ready
            </motion.span>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-black leading-none sm:text-7xl">
              {cv.name}
            </h1>
            <p className="mt-4 text-2xl text-[#7dd3fc]">{cv.title}</p>
          </div>
          <a
            href={`mailto:${cv.email}`}
            className="border border-[#7dd3fc] px-6 py-3 text-sm font-semibold text-[#7dd3fc] transition-colors hover:bg-[#7dd3fc] hover:text-[#0b1218] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7dd3fc]"
          >
            Start a conversation
          </a>
        </div>
        <p className="mt-10 max-w-3xl text-base leading-8 text-slate-300">{cv.summary}</p>
        <ContactRow className="mt-8 text-[#7dd3fc]/80" />
      </header>

      <section className="bg-[#7dd3fc] text-[#0b1218]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-[#0b1218]/15 sm:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : i * 0.06 }}
              className="bg-[#7dd3fc] px-6 py-10"
            >
              <p className="text-4xl font-black sm:text-5xl">{h.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider opacity-70">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="mb-12 flex items-end justify-between gap-4 border-b border-white/15 pb-4">
          <h2 className="text-3xl font-black sm:text-4xl">Full experience</h2>
          <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-slate-500">
            nothing deferred
          </span>
        </div>
        <ExperienceList tone="dark" />
        <div className="mt-20 grid gap-16 border-t border-white/15 pt-16 md:grid-cols-2">
          <div>
            <h2 className="mb-8 text-2xl font-black">Skills</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-8 text-2xl font-black">Projects</h2>
            <ProjectLinks />
            <p className="mt-12 text-sm text-slate-500">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
