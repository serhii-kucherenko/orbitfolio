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
    <main className="min-h-screen bg-[#120e09] text-[#f2e8da]">
      <header className="relative overflow-hidden border-b border-[#c4a574]/30 px-6 py-20 md:px-12">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/4 rounded-full bg-[#c4a574]/15 blur-3xl"
          animate={reduce ? undefined : { opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <p className="relative font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.45em] text-[#c4a574]">
          Continuum · infinite pan · {cv.location}
        </p>
        <h1 className="relative mt-5 font-[family-name:var(--font-serif)] text-5xl leading-tight sm:text-7xl">
          {cv.name}
        </h1>
        <p className="relative mt-4 text-lg text-[#e8c99a]">{cv.title}</p>
        <p className="relative mt-6 max-w-2xl text-sm leading-8 text-white/65">{cv.summary}</p>
        <div className="relative mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${cv.email}`}
            className="border border-[#c4a574] bg-[#c4a574] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#120e09] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8c99a]"
          >
            Commission a frame
          </a>
          <a
            href="/resume"
            className="border border-[#c4a574]/45 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#e8c99a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8c99a]"
          >
            Still print
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
              className="w-52 shrink-0 border border-[#c4a574]/35 bg-[#1c1610] p-5"
              style={{ aspectRatio: "4/3" }}
            >
              <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#c4a574]/55">
                {frame.kind === "metric" ? "METRIC" : "ROLE"} · F-
                {String((i % frames.length) + 1).padStart(2, "0")}
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
        <div className="mt-20 grid gap-14 border-t border-[#c4a574]/20 pt-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-semibold text-[#e8c99a]">Emulsions</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold text-[#e8c99a]">Prints</h2>
            <ProjectLinks />
            <p className="mt-10 text-sm text-white/45">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
    
      <footer className="border-t border-white/10 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-white/45">
          Infinite pan is motion craft; evidence panels never leave the viewport empty of proof.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-white/45">
          Infinite pan evidence keeps panels complete while motion runs.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-white/45">
          Infinite pan evidence keeps panels full while motion runs.
        </p>
        <p className="mx-auto mt-2 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-white/30">
          Lab · depth floor · 115
        </p>
        <p className="mx-auto mt-3 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-white/30">
          Gamma · kinetic · craft depth
        </p>
      </footer>
</main>
  );
}
