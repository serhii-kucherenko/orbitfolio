"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { SmoothScroll } from "@/components/SmoothScroll";
import { cv } from "@/data/cv";

/** Aurora Vancouver Canvas — Pacific dusk sky with Lenis for long coastal reading. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <SmoothScroll>
    <main className="min-h-screen bg-[#061018] text-[#e0f2fe]">
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 10%, rgba(45, 212, 191, 0.35), transparent 55%),
              radial-gradient(ellipse 70% 45% at 80% 20%, rgba(244, 114, 182, 0.28), transparent 50%),
              radial-gradient(ellipse 60% 40% at 50% 80%, rgba(56, 189, 248, 0.18), transparent 55%),
              linear-gradient(180deg, #061018 0%, #0a1a28 50%, #061018 100%)
            `,
          }}
        />
        {!reduce && (
          <motion.div
            aria-hidden
            className="absolute -left-1/4 top-0 h-64 w-[150%] opacity-30"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(45,212,191,0.4), rgba(244,114,182,0.35), transparent)",
              filter: "blur(40px)",
            }}
            animate={{ x: ["0%", "8%", "0%"] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-24 md:pt-32">
          <p className="text-[10px] uppercase tracking-[0.4em] text-teal-300/80">
            Aurora · Vancouver canvas · Lenis
          </p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-5 font-[family-name:var(--font-display)] text-5xl font-extrabold tracking-tight sm:text-7xl"
          >
            {cv.name}
          </motion.h1>
          <p className="mt-4 text-xl text-sky-200/70">{cv.title}</p>
          <p className="mt-2 text-sm text-sky-300/50">{cv.location}</p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-sky-100/60">{cv.summary}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="bg-gradient-to-r from-teal-400 to-sky-400 px-6 py-3 text-sm font-bold text-[#042f2e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
            >
              Hire from the coast
            </a>
            <a
              href="/resume"
              className="border border-sky-300/40 px-5 py-3 text-sm text-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
            >
              Coast resume
            </a>
            <ContactRow className="text-sky-200/70" />
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.05 * i }}
              className="border-t border-teal-300/35 pt-4"
            >
              <p className="text-3xl font-bold text-teal-300">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-sky-300/50">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl space-y-16 px-6 py-16">
        <div>
          <h2 className="mb-8 text-2xl font-bold text-sky-100">Northern career lights</h2>
          <ExperienceList tone="dark" />
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-bold text-sky-100">Skills under the sky</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold text-sky-100">Coastal builds</h2>
            <ProjectLinks />
            <p className="mt-10 text-sm text-sky-300/45">
              {cv.education.degree} · {cv.education.school}
            </p>
          </div>
        </div>
      </section>
    </main>
    </SmoothScroll>
  );
}
