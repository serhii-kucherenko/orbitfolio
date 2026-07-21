"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Mission One Take — single continuous film slate: timecode header, rolling evidence, no cuts between sections. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#070c09] text-[#d8f5e3]">
      <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#3dff9a]/25 bg-[#070c09]/95 px-4 py-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-[#3dff9a] backdrop-blur md:px-8">
        <span>REC ● MISSION / ONE TAKE</span>
        <motion.span
          animate={reduce ? {} : { opacity: [1, 0.35, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          00:10:24:17
        </motion.span>
        <span>{cv.location}</span>
      </div>

      <header className="relative mx-auto max-w-4xl px-6 pb-10 pt-20 md:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, #3dff9a 2px, #3dff9a 3px)",
          }}
        />
        <p className="font-[family-name:var(--font-mono)] text-xs text-[#3dff9a]/80">SLATE A · CONTINUOUS</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl">
          {cv.name}
        </h1>
        <p className="mt-4 text-lg text-[#3dff9a]">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${cv.email}`}
            className="bg-[#3dff9a] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[#070c09] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3dff9a]"
          >
            Cue call
          </a>
          <a
            href="/resume"
            className="border border-[#3dff9a]/50 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[#3dff9a]"
          >
            Continuity PDF
          </a>
          <ContactRow className="text-white/65" />
        </div>
      </header>

      <div className="mx-auto max-w-4xl border-y border-[#3dff9a]/20 px-6 py-8 md:px-8">
        <div className="flex gap-6 overflow-x-auto pb-1">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : i * 0.05 }}
              className="min-w-[140px] shrink-0"
            >
              <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#3dff9a]/50">
                MARK {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 text-3xl font-black">{h.value}</p>
              <p className="text-xs uppercase tracking-wider opacity-50">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-4xl space-y-16 px-6 py-16 md:px-8">
        <div>
          <h2 className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-[#3dff9a]">
            Take continuity · roles
          </h2>
          <ExperienceList tone="dark" />
        </div>
        <div className="grid gap-12 border-t border-[#3dff9a]/20 pt-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-[#3dff9a]">
              Kit list
            </h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-[#3dff9a]">
              Cutaways
            </h2>
            <ProjectLinks />
            <p className="mt-10 font-[family-name:var(--font-mono)] text-xs opacity-50">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
