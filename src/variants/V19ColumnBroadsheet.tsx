"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { SmoothScroll } from "@/components/SmoothScroll";
import { cv } from "@/data/cv";

/** Column Broadsheet — multi-column newspaper: masthead, lead, tight body columns. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <SmoothScroll>
    <main className="min-h-screen bg-[#eceae4] text-[#111827] overflow-x-hidden">
      <header className="border-b-[3px] border-black px-4 py-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-black/20 pb-3">
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em]">
              Vancouver · Remote · {new Date().getFullYear()}
            </p>
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em]">
              Engineering edition · No. 19
            </p>
          </div>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center font-[family-name:var(--font-serif)] text-5xl font-normal leading-none tracking-tight sm:text-7xl md:text-8xl"
            style={reduce ? undefined : { letterSpacing: "-0.04em" }}
          >
            {cv.name}
          </motion.h1>
          <p className="mt-3 text-center text-sm uppercase tracking-[0.2em]">{cv.title}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${cv.email}`}
              className="bg-black px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#eceae4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Hire via letter
            </a>
            <a
              href="/resume"
              className="border border-black px-5 py-2 text-xs font-bold uppercase tracking-widest"
            >
              Morning edition PDF
            </a>
          </div>
          <ContactRow className="mt-4 justify-center text-black/60" />
        </div>
      </header>

      <section className="mx-auto max-w-6xl border-b border-black/20 px-4 py-8 md:px-10">
        <div className="grid grid-cols-2 gap-6 border-y-2 border-black py-5 md:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : i * 0.05 }}
              className="text-center"
            >
              <p className="font-[family-name:var(--font-serif)] text-3xl">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-black/50">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-10">
        <p className="mb-6 font-[family-name:var(--font-serif)] text-2xl leading-snug md:columns-2 md:gap-10 md:text-xl">
          {cv.summary}
        </p>
        <div className="mt-12 border-t-2 border-black pt-8">
          <h2 className="mb-8 font-[family-name:var(--font-serif)] text-3xl">Career dispatches</h2>
          <div className="md:columns-2 md:gap-12 [&_ol]:break-inside-avoid [&_ol]:space-y-8">
            <ExperienceList tone="light" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 border-t-[3px] border-black px-4 py-14 md:grid-cols-2 md:px-10">
        <div>
          <h2 className="mb-6 border-b border-black pb-2 font-[family-name:var(--font-serif)] text-2xl">
            Classified skills
          </h2>
          <SkillsCloud tone="light" />
        </div>
        <div>
          <h2 className="mb-6 border-b border-black pb-2 font-[family-name:var(--font-serif)] text-2xl">
            Special sections
          </h2>
          <ProjectLinks tone="light" />
          <p className="mt-10 text-sm text-black/50">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>
      <footer className="border-t-[3px] border-black px-4 py-8 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:justify-between">
          <p className="max-w-xl text-sm leading-7 text-black/55">
            Broadsheet columns reward slow reading — Lenis keeps the folio continuous without trapping scroll.
          </p>
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-black/45">
            Engineering edition · No. 19 · {cv.location}
          </p>
        </div>
      </footer>
    
      <footer className="border-t border-black/10 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-black/55">
          Broadsheet columns earn their whitespace with full proof copy.
        </p>
        <p className="mx-auto mt-3 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-black/35">
          Lab · depth floor · 115
        </p>
      </footer>
</main>
    </SmoothScroll>
  );
}
