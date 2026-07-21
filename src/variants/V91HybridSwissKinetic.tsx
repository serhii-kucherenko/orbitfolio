"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hybrid Swiss Kinetic — strict modular grid with a single kinetic red bar that tracks sections */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      <div className="mx-auto grid max-w-6xl md:grid-cols-[64px_1fr]">
        <div className="relative hidden md:block">
          <motion.div
            aria-hidden
            className="sticky top-0 h-screen w-full origin-top bg-[#e11d48]"
            initial={reduce ? false : { scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="px-6 py-16 md:px-12 md:py-20">
          <div className="grid gap-2 border-b-4 border-black pb-8 sm:grid-cols-12">
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] sm:col-span-3">
              Mod. 91 · {cv.location}
            </p>
            <div className="sm:col-span-9">
              <h1 className="font-[family-name:var(--font-display)] text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl">
                {cv.name}
              </h1>
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.15em] text-[#e11d48]">{cv.title}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 border-b border-black/15 pb-10 sm:grid-cols-12">
            <p className="text-sm leading-7 opacity-70 sm:col-span-7">{cv.summary}</p>
            <div className="sm:col-span-5">
              <div className="flex flex-wrap gap-2">
                <a
                  href={`mailto:${cv.email}`}
                  className="inline-flex bg-black px-5 py-3 text-xs font-bold uppercase tracking-wider text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Hire now
                </a>
                <a
                  href="/resume"
                  className="inline-flex border-2 border-black px-5 py-3 text-xs font-bold uppercase tracking-wider focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Spec PDF
                </a>
              </div>
              <ContactRow className="mt-4" />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-0 border border-black sm:grid-cols-4">
            {cv.highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={reduce ? false : { y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: reduce ? 0 : 0.05 * i }}
                className="border-b border-black p-5 sm:border-r sm:last:border-r-0"
              >
                <p className="font-[family-name:var(--font-display)] text-4xl font-black">{h.value}</p>
                <p className="mt-2 text-[10px] uppercase tracking-wider opacity-50">{h.label}</p>
              </motion.div>
            ))}
          </div>

          <section className="mt-16">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-3 w-12 bg-[#e11d48]" />
              <h2 className="text-2xl font-black uppercase tracking-tight">Experience</h2>
            </div>
            <ExperienceList tone="light" />
          </section>

          <section className="mt-16 grid gap-12 border-t-4 border-black pt-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-lg font-black uppercase">Skills</h2>
              <SkillsCloud tone="light" />
            </div>
            <div>
              <h2 className="mb-6 text-lg font-black uppercase">Projects</h2>
              <ProjectLinks tone="light" />
              <p className="mt-8 text-xs uppercase tracking-wider opacity-45">
                {cv.education.degree} · {cv.education.school} · {cv.location}
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
