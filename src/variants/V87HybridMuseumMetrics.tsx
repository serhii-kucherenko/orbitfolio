"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hybrid Museum Metrics — white-cube gallery: metrics as monumental plaques, career as wall labels */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen" style={{ background: "#f7f7f5", color: "#171717" }}>
      <header className="border-b px-6 py-16 md:px-16 md:py-24" style={{ borderColor: "#17171714" }}>
        <div className="mx-auto max-w-6xl">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] opacity-40">
            Gallery 87 · Permanent collection
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight sm:text-7xl">
            {cv.name}
          </h1>
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-sm leading-7 opacity-65">{cv.summary}</p>
            <div>
              <p className="text-sm font-medium opacity-80">{cv.title}</p>
              <a
                href={`mailto:${cv.email}`}
                className="mt-3 inline-block border-b border-current pb-0.5 text-sm font-semibold"
              >
                Request a private viewing
              </a>
              <ContactRow className="mt-3 opacity-60" />
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-px bg-[#17171712] px-0 py-0 sm:grid-cols-2 lg:grid-cols-4">
        {cv.highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduce ? 0 : 0.1 * i }}
            className="flex min-h-[200px] flex-col justify-between bg-[#f7f7f5] p-8"
          >
            <p className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.3em] opacity-35">
              Acc. {String(100 + i).padStart(3, "0")}
            </p>
            <div>
              <p className="font-[family-name:var(--font-display)] text-5xl font-bold leading-none">
                {h.value}
              </p>
              <p className="mt-3 text-xs uppercase tracking-wider opacity-45">{h.label}</p>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 md:px-8">
        <h2 className="mb-2 font-[family-name:var(--font-display)] text-2xl font-bold">
          Wall labels
        </h2>
        <p className="mb-10 text-xs uppercase tracking-[0.2em] opacity-40">Provenance</p>
        <ExperienceList tone="light" />
      </section>

      <section className="border-t px-6 py-16 md:px-16" style={{ borderColor: "#17171714", background: "#fff" }}>
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-bold">Materials</h2>
            <SkillsCloud tone="light" />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold">Related works</h2>
            <ProjectLinks tone="light" />
            <p className="mt-10 text-sm opacity-45">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
