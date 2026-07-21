"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hybrid Editorial Orbit — magazine masthead with orbiting pull-quote rings around the byline */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const rings = cv.highlights;

  return (
    <main className="min-h-screen bg-[#090e1c] text-[#e8eef8]">
      <header className="relative mx-auto max-w-6xl overflow-hidden px-6 pb-20 pt-24 md:px-10">
        <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
          <p className="font-[family-name:var(--font-serif)] text-2xl italic text-[#7dd3fc]">Orbit</p>
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] opacity-40">
            Editorial · Vol. 88 · {cv.location}
          </p>
        </div>

        <div className="relative mt-16 grid items-center gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-[family-name:var(--font-display)] text-5xl font-bold leading-[0.95] sm:text-7xl"
            >
              {cv.name}
            </motion.h1>
            <p className="mt-4 text-lg text-[#7dd3fc]">{cv.title}</p>
            <p className="mt-6 max-w-lg text-sm leading-7 opacity-70">{cv.summary}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${cv.email}`}
                className="bg-[#7dd3fc] px-5 py-2.5 text-sm font-semibold text-[#090e1c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7dd3fc]"
              >
                Pitch the editor
              </a>
              <a
                href="/resume"
                className="border border-[#7dd3fc]/40 px-5 py-2.5 text-sm font-semibold text-[#7dd3fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7dd3fc]"
              >
                Folio PDF
              </a>
              <ContactRow className="text-white/60" />
            </div>
          </div>

          <div className="relative mx-auto h-72 w-72">
            {!reduce &&
              rings.map((h, i) => (
                <motion.div
                  key={h.label}
                  className="absolute inset-0 rounded-full border border-dashed"
                  style={{
                    borderColor: `rgba(125, 211, 252, ${0.15 + i * 0.1})`,
                    margin: `${i * 18}px`,
                  }}
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 40 + i * 12, repeat: Infinity, ease: "linear" }}
                />
              ))}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              {rings.map((h) => (
                <div key={h.label} className="py-1">
                  <p className="font-[family-name:var(--font-display)] text-xl font-bold text-[#7dd3fc]">
                    {h.value}
                  </p>
                  <p className="text-[9px] uppercase tracking-wider opacity-40">{h.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="border-t border-white/10 bg-[#0e1524] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 font-[family-name:var(--font-serif)] text-3xl italic">Feature well</h2>
          <ExperienceList tone="dark" />
          <div className="mt-20 grid gap-12 border-t border-white/10 pt-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-xl font-bold">Index</h2>
              <SkillsCloud />
            </div>
            <div>
              <h2 className="mb-6 text-xl font-bold">Sidebar links</h2>
              <ProjectLinks />
              <p className="mt-10 text-sm opacity-45">
                {cv.education.degree} · {cv.education.school} · {cv.location}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
