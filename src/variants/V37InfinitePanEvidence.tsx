"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Infinite Pan Evidence — moving proof strip + complete linear archive fallback. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const frames = [
    ...cv.highlights.map((h) => ({ kind: "metric" as const, ...h })),
    ...cv.experience.map((j) => ({
      kind: "role" as const,
      value: j.company.split(" ")[0],
      label: j.role,
    })),
  ];
  const strip = [...frames, ...frames];

  return (
    <main className="min-h-screen bg-[#17120c] text-[#f2e8da]">
      <header className="border-b border-[#c4a574]/30 px-6 py-20 md:px-12">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.45em] text-[#c4a574]">
          Continuum · infinite pan
        </p>
        <h1 className="mt-5 font-[family-name:var(--font-serif)] text-5xl leading-tight sm:text-7xl">{cv.name}</h1>
        <p className="mt-4 text-lg text-[#e8c99a]">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-8 text-white/65">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${cv.email}`}
            className="border border-[#c4a574] bg-[#c4a574] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#17120c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8c99a]"
          >
            Commission a frame
          </a>
          <ContactRow className="text-[#e8c99a]/80" />
        </div>
      </header>

      <section className="overflow-hidden border-b border-[#c4a574]/20 py-10" aria-label="Scrolling evidence strip">
        <p className="mb-4 px-6 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] text-[#c4a574]/70 md:px-12">
          Spatial canvas · reduced-motion uses static strip
        </p>
        <motion.div
          className="flex w-max gap-4 px-6 md:px-12"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        >
          {strip.map((frame, i) => (
            <div
              key={`${frame.label}-${i}`}
              className="w-52 shrink-0 border border-[#c4a574]/35 bg-[#221a12] p-5"
              style={{ aspectRatio: "4/3" }}
            >
              <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#c4a574]/55">
                {frame.kind === "metric" ? "METRIC" : "ROLE"} · F-{String((i % frames.length) + 1).padStart(2, "0")}
              </p>
              <p className="mt-6 text-3xl font-black text-[#e8c99a]">{frame.value}</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-white/45">{frame.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-12">
        <h2 className="mb-3 font-[family-name:var(--font-serif)] text-3xl">Linear archive</h2>
        <p className="mb-10 text-sm text-white/45">Fallback for recruiters who prefer a still frame.</p>
        <ExperienceList tone="dark" />
        <div className="mt-20 grid gap-14 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-semibold text-[#e8c99a]">Emulsions</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold text-[#e8c99a]">Prints</h2>
            <ProjectLinks />
            <p className="mt-10 text-sm text-white/45">
              {cv.education.degree} · {cv.education.school}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
