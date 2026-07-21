"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Healthcare Trust Sheet — calm clinical document for regulated-domain engineering */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const trustSignals = [
    { k: "Domain", v: "Healthcare / AI · multi-org clinics" },
    { k: "Pattern", v: "LLM intent + deterministic constraints" },
    { k: "Data", v: "RAG with grounded enterprise answers" },
    { k: "Bar", v: "Production reliability over demo theatre" },
  ];

  return (
    <main className="min-h-screen bg-[#f5f9f8] text-[#0c2a2a]">
      <div className="border-b border-[#b7d4d0] bg-[#e8f3f1]">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-2 px-6 py-3 text-[10px] uppercase tracking-[0.28em] text-[#2a6b66]">
          <span>Trust sheet · confidential hire packet</span>
          <span>{cv.location}</span>
        </div>
      </div>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-[family-name:var(--font-serif)] text-lg italic text-[#2a6b66]">
            Engineering you can put in front of clinicians.
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">
            {cv.name}
          </h1>
          <p className="mt-2 text-lg text-[#3d6b68]">{cv.title}</p>
          <p className="mt-6 text-sm leading-7 text-[#3d6b68]/90">{cv.summary}</p>
        </motion.div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${cv.email}`}
            className="rounded-md bg-[#0d7377] px-5 py-2.5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d7377]"
          >
            Request a conversation
          </a>
          <ContactRow className="text-[#2a6b66]" />
        </div>

        <dl className="mt-12 grid gap-px overflow-hidden rounded-lg border border-[#b7d4d0] bg-[#b7d4d0] sm:grid-cols-2">
          {trustSignals.map((row) => (
            <div key={row.k} className="bg-[#f5f9f8] p-5">
              <dt className="text-[10px] uppercase tracking-[0.25em] text-[#5a8a86]">{row.k}</dt>
              <dd className="mt-2 text-sm font-medium leading-6">{row.v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="rounded-lg border border-[#b7d4d0] bg-white p-4">
              <p className="text-2xl font-bold text-[#0d7377]">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-[#5a8a86]">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-24">
        <div>
          <h2 className="mb-8 border-b border-[#b7d4d0] pb-3 font-[family-name:var(--font-serif)] text-3xl">
            Clinical timeline
          </h2>
          <ExperienceList tone="light" />
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-2xl">Competencies</h2>
            <SkillsCloud tone="light" />
          </div>
          <div>
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-2xl">References of work</h2>
            <ProjectLinks tone="light" />
            <p className="mt-10 text-sm text-[#5a8a86]">
              {cv.education.degree} · {cv.education.school}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
