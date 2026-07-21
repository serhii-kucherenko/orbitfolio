"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Final Edition Portfolio — closing-night newspaper: “LAST” stamp, faded ink, farewell masthead energy. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#1a1814] text-[#e8e0d4]">
      <header className="relative overflow-hidden border-b border-[#c4a574]/40 px-6 py-16 md:px-12">
        <motion.div
          aria-hidden
          initial={reduce ? false : { rotate: -12, opacity: 0 }}
          animate={{ rotate: -12, opacity: 0.9 }}
          className="pointer-events-none absolute right-8 top-10 border-4 border-[#ef4444] px-4 py-2 font-[family-name:var(--font-display)] text-3xl font-black uppercase tracking-widest text-[#ef4444] md:right-16 md:text-5xl"
        >
          Last
        </motion.div>
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#c4a574]">
          Final edition · presses stop at midnight
        </p>
        <h1 className="mt-6 max-w-4xl font-[family-name:var(--font-serif)] text-5xl leading-[0.95] sm:text-7xl">
          {cv.name}
        </h1>
        <p className="mt-4 text-lg text-[#c4a574]">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-8 text-[#e8e0d4]/70">{cv.summary}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${cv.email}`}
            className="bg-[#c4a574] px-5 py-2.5 text-sm font-bold text-[#1a1814] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4a574]"
          >
            Hold the presses — hire
          </a>
          <ContactRow className="text-[#e8e0d4]/55" />
        </div>
      </header>

      <section className="mx-auto grid max-w-5xl grid-cols-2 gap-px bg-[#c4a574]/30 md:grid-cols-4">
        {cv.highlights.map((h) => (
          <div key={h.label} className="bg-[#1a1814] px-5 py-8">
            <p className="font-[family-name:var(--font-serif)] text-3xl text-[#c4a574]">{h.value}</p>
            <p className="mt-1 text-[10px] uppercase tracking-wider opacity-45">{h.label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-12">
        <h2 className="mb-2 font-[family-name:var(--font-serif)] text-4xl italic">Obituary of ordinary careers</h2>
        <p className="mb-10 text-xs uppercase tracking-[0.25em] text-[#c4a574]/70">
          What remains in print
        </p>
        <ExperienceList tone="dark" />
      </section>

      <section className="mx-auto grid max-w-5xl gap-14 border-t border-[#c4a574]/30 px-6 py-16 md:grid-cols-2 md:px-12">
        <div>
          <h2 className="mb-6 text-xl font-semibold text-[#c4a574]">Typeset skills</h2>
          <SkillsCloud />
        </div>
        <div>
          <h2 className="mb-6 text-xl font-semibold text-[#c4a574]">Archive links</h2>
          <ProjectLinks />
          <p className="mt-12 font-[family-name:var(--font-serif)] text-sm italic opacity-50">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>
    </main>
  );
}
