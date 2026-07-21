"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Clinic SaaS Engineer — healthcare-product calm: trust, outcomes, founding delivery. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#f4f7f5] text-[#1c2b24]">
      <header className="relative overflow-hidden border-b border-[#c5d4cb] bg-gradient-to-br from-[#e8f0eb] via-[#f4f7f5] to-[#dde8e2] px-6 pb-14 pt-28">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#9bb8a8]/35 blur-3xl"
          animate={reduce ? undefined : { opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="relative mx-auto max-w-5xl">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#4a6b5c]">Clinical product · founding engineer</p>
          <h1 className="mt-4 font-[family-name:var(--font-serif)] text-4xl tracking-tight sm:text-6xl">{cv.name}</h1>
          <p className="mt-3 text-lg text-[#3d564a]">{cv.title}</p>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#1c2b24]/70">{cv.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${cv.email}`}
              className="rounded-md bg-[#1c2b24] px-5 py-2.5 text-sm font-medium text-[#f4f7f5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c2b24]"
            >
              Schedule a conversation
            </a>
            <a
              href={cv.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-[#8aa897] px-5 py-2.5 text-sm text-[#2f4a3d]"
            >
              LinkedIn
            </a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-4">
            {cv.highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduce ? 0 : i * 0.05 }}
                className="rounded-xl border border-[#c5d4cb] bg-white/80 px-4 py-5 shadow-sm"
              >
                <p className="text-2xl font-semibold text-[#2f4a3d]">{h.value}</p>
                <p className="mt-1 text-xs text-[#4a6b5c]/80">{h.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl space-y-16 px-6 py-16">
        <div>
          <h2 className="mb-6 font-[family-name:var(--font-serif)] text-2xl">Trust record</h2>
          <ExperienceList tone="light" />
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-2xl">Capabilities</h2>
            <SkillsCloud tone="light" />
          </div>
          <div>
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-2xl">Open work</h2>
            <ProjectLinks tone="light" />
          </div>
        </div>
        <ContactRow className="text-[#3d564a]" />
        <p className="text-xs text-[#4a6b5c]/70">
          {cv.education.degree} · {cv.education.school} · {cv.location}
        </p>
      </section>
    </main>
  );
}
