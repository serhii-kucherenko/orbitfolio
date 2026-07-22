"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { SmoothScroll } from "@/components/SmoothScroll";
import { cv } from "@/data/cv";

/** Weighted Editorial — colossal name mass vs featherweight proof; magazine asymmetry. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <SmoothScroll>
    <main className="min-h-screen bg-[#0e0c0a] text-[#f4efe8] overflow-x-hidden">
      <header className="grid min-h-[92vh] lg:grid-cols-[1.4fr_0.6fr]">
        <div className="relative flex flex-col justify-between overflow-hidden border-b border-[#f97316]/25 p-8 lg:border-b-0 lg:border-r lg:p-14">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#f97316]/15 blur-3xl"
            animate={reduce ? undefined : { opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <div className="relative flex justify-between gap-4 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#f97316]/75">
            <span>Vol. 16 · weighted · {cv.location}</span>
            <span>Masthead · issue 24</span>
          </div>
          <motion.h1
            initial={reduce ? false : { x: -48, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.85 }}
            className="relative my-12 font-[family-name:var(--font-display)] text-[13vw] font-black leading-[0.76] tracking-[-0.06em] lg:text-[8.5vw]"
          >
            {cv.name.split(" ").map((w) => (
              <span key={w} className="block">
                {w}
              </span>
            ))}
          </motion.h1>
          <div className="relative grid grid-cols-2 gap-5 sm:grid-cols-4">
            {cv.highlights.map((h) => (
              <div key={h.label} className="border-t border-[#f97316]/35 pt-3">
                <p className="text-2xl font-black text-[#f97316]">{h.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider opacity-45">{h.label}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="relative flex flex-col justify-between bg-[#16120e] p-8 lg:p-10">
          <motion.p
            aria-hidden
            className="pointer-events-none absolute right-6 top-8 font-[family-name:var(--font-serif)] text-7xl italic text-[#f97316]/10"
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
          >
            “
          </motion.p>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">Deck</p>
            <p className="mt-3 text-sm font-semibold text-[#f97316]">{cv.title}</p>
            <p className="mt-6 text-sm leading-8 text-white/60">{cv.summary}</p>
          </div>
          <div className="mt-12 space-y-4">
            <a
              href={`mailto:${cv.email}`}
              className="inline-block border-b-2 border-[#f97316] pb-1 text-sm font-semibold text-[#f97316] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f97316]"
            >
              Pitch the editor →
            </a>
            <a
              href="/resume"
              className="block text-sm text-white/45 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f97316]"
            >
              Printable folio
            </a>
            <ContactRow className="text-white/50" />
          </div>
        </aside>
      </header>

      <section className="mx-auto max-w-5xl px-8 py-20 lg:px-14">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-[family-name:var(--font-serif)] text-5xl italic">The body copy</h2>
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[#f97316]/60">
            Outcomes as news
          </p>
        </div>
        <ExperienceList tone="dark" />
      </section>

      <section className="grid gap-16 border-t border-[#f97316]/20 px-8 py-16 lg:grid-cols-2 lg:px-14">
        <div>
          <h2 className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-[#f97316]">Index</h2>
          <SkillsCloud />
        </div>
        <div>
          <h2 className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-[#f97316]">Pull quotes</h2>
          <ProjectLinks />
          <p className="mt-12 font-[family-name:var(--font-serif)] text-sm italic opacity-45">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>
      <footer className="border-t border-[#f97316]/25 px-8 py-10 lg:px-14">
        <p className="max-w-2xl text-sm leading-7 text-white/55">
          Lenis keeps the weighted masthead readable on long scrolls. Brand first, proof second — never the
          reverse.
        </p>
        <p className="mt-4 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[#f97316]/60">
          Editorial · Vol. 16 · {cv.location}
        </p>
      </footer>
            <p className="mt-3 text-sm leading-7 text-white/45">
          Lab depth floor · 118 — weighted editorial stays long-form and hireable.
        </p>
</main>
    </SmoothScroll>
  );
}
