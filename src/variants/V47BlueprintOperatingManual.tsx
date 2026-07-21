"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Blueprint Operating Manual — engineering drawing sheet for a founding career */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main
      className="min-h-screen bg-[#0b1c2c] font-[family-name:var(--font-mono)] text-sky-100"
      style={{
        backgroundImage:
          "linear-gradient(rgba(56,189,248,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.08) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-24">
        <div className="flex flex-wrap items-start justify-between gap-6 border border-sky-400/30 bg-[#0b1c2c]/90 p-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-sky-400">DWG · Operating manual · Rev A</p>
            <motion.h1
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-4xl font-bold sm:text-5xl"
            >
              {cv.name}
            </motion.h1>
            <p className="mt-3 text-sky-200/80">{cv.title}</p>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-sky-100/60">{cv.summary}</p>
          </div>
          <div className="space-y-2 text-right text-[10px] uppercase tracking-wider text-sky-400/80">
            <p>Sheet 1 of 4</p>
            <p>Scale: hire-ready</p>
            <p>{cv.location}</p>
            <a
              href={`mailto:${cv.email}`}
              className="mt-4 inline-block rounded border border-sky-300 px-4 py-2 text-xs text-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
            >
              Request review
            </a>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 border border-sky-400/20 p-4 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="border border-dashed border-sky-400/25 p-3">
              <p className="text-2xl font-bold text-sky-200">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-sky-400/70">{h.label}</p>
            </div>
          ))}
        </div>
        <ContactRow className="mt-6 text-sky-200/70" />
      </section>

      <section className="mx-auto max-w-5xl space-y-6 px-6 pb-28">
        <div className="border border-sky-400/25 p-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-sky-400">01 · Assembly history</p>
          <div className="mt-8">
            <ExperienceList tone="dark" />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-sky-400/25 p-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-sky-400">02 · Part catalog</p>
            <div className="mt-8">
              <SkillsCloud />
            </div>
          </div>
          <div className="border border-sky-400/25 p-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-sky-400">03 · Reference builds</p>
            <div className="mt-8">
              <ProjectLinks />
            </div>
            <p className="mt-10 text-xs text-sky-400/60">
              {cv.education.degree} · {cv.education.school}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
