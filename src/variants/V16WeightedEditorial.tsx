"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Weighted Editorial — asymmetric magazine spread: colossal name mass on the left, featherweight copy and proof on the right. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#14110f] text-[#f5f0ea]">
      <header className="grid min-h-screen md:grid-cols-[1.35fr_0.65fr]">
        <div className="relative flex flex-col justify-between border-b border-[#f97316]/30 p-8 md:border-b-0 md:border-r md:p-14">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#f97316]/80">
            Vol. 16 · weighted
          </p>
          <motion.h1
            initial={reduce ? false : { x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="my-10 font-[family-name:var(--font-display)] text-[14vw] font-black leading-[0.78] tracking-[-0.06em] md:text-[9vw]"
          >
            {cv.name.split(" ").map((w) => (
              <span key={w} className="block">
                {w}
              </span>
            ))}
          </motion.h1>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {cv.highlights.map((h) => (
              <div key={h.label}>
                <p className="text-2xl font-black text-[#f97316]">{h.value}</p>
                <p className="text-[10px] uppercase tracking-wider opacity-45">{h.label}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="flex flex-col justify-between bg-[#1c1814] p-8 md:p-10">
          <div>
            <p className="text-sm font-semibold text-[#f97316]">{cv.title}</p>
            <p className="mt-6 text-sm leading-8 text-white/65">{cv.summary}</p>
          </div>
          <div className="mt-12 space-y-4">
            <a
              href={`mailto:${cv.email}`}
              className="inline-block border-b-2 border-[#f97316] pb-1 text-sm font-semibold text-[#f97316] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f97316]"
            >
              Pitch the editor →
            </a>
            <ContactRow className="text-white/55" />
          </div>
        </aside>
      </header>

      <section className="mx-auto max-w-5xl px-8 py-24 md:px-14">
        <h2 className="mb-12 font-[family-name:var(--font-serif)] text-5xl italic">The body copy</h2>
        <ExperienceList tone="dark" />
      </section>

      <section className="grid gap-16 border-t border-[#f97316]/25 px-8 py-20 md:grid-cols-2 md:px-14">
        <div>
          <h2 className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-[#f97316]">Index</h2>
          <SkillsCloud />
        </div>
        <div>
          <h2 className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-[#f97316]">Pull quotes</h2>
          <ProjectLinks />
          <p className="mt-12 font-[family-name:var(--font-serif)] text-sm italic opacity-50">
            {cv.education.degree} · {cv.education.school}
          </p>
        </div>
      </section>
    </main>
  );
}
