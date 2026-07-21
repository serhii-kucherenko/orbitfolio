"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hybrid Museum Metrics — white-cube gallery: metrics as plaques, career as wall labels. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#efefe9] text-[#171717]">
      <header className="relative overflow-hidden border-b border-black/10 px-6 py-16 md:px-16 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.05),transparent_55%)]"
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left bg-black/20"
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="relative mx-auto max-w-6xl">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] text-black/40">
            Gallery 87 · Permanent collection · Room A
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight sm:text-7xl">
            {cv.name}
          </h1>
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-sm leading-7 text-black/65">{cv.summary}</p>
            <div>
              <p className="text-sm font-medium text-black/80">{cv.title}</p>
              <div className="mt-3 flex flex-wrap gap-4">
                <a
                  href={`mailto:${cv.email}`}
                  className="border-b border-current pb-0.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Request a private viewing
                </a>
                <a
                  href="/resume"
                  className="border-b border-black/30 pb-0.5 text-sm text-black/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Catalog sheet
                </a>
              </div>
              <ContactRow className="mt-3 text-black/55" />
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
        {cv.highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduce ? 0 : 0.08 * i }}
            className="group flex min-h-[230px] flex-col justify-between bg-[#efefe9] p-8 transition-colors hover:bg-white"
          >
            <p className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.3em] text-black/35">
              Acc. {String(100 + i).padStart(3, "0")}
            </p>
            <div>
              <p className="font-[family-name:var(--font-display)] text-5xl font-bold leading-none">{h.value}</p>
              <p className="mt-3 text-xs uppercase tracking-wider text-black/45">{h.label}</p>
              <div aria-hidden className="mt-5 h-px w-8 bg-black/25 transition-all group-hover:w-14" />
            </div>
          </motion.div>
        ))}
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 md:px-8">
        <h2 className="mb-2 font-[family-name:var(--font-display)] text-2xl font-bold">Wall labels</h2>
        <p className="mb-10 text-xs uppercase tracking-[0.2em] text-black/40">Provenance · alcove narrative</p>
        <ExperienceList tone="light" />
      </section>

      <section className="border-t border-black/10 bg-white px-6 py-16 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-bold">Materials</h2>
            <SkillsCloud tone="light" />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold">Related works</h2>
            <ProjectLinks tone="light" />
            <p className="mt-10 text-sm text-black/45">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
