"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Dual Narrative Console — split product vs engineering story on a dual-pane operator desk */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const productLens = [
    "Clinic scheduling that compounds across orgs",
    "Grounded answers over enterprise healthcare data",
    "Agents that ship inside the CI pipeline",
  ];
  const engLens = [
    "LLM intent + deterministic constraints",
    "Ingestion → embeddings → retrieval → cite",
    "Roadmap ownership for a team of four",
  ];

  return (
    <main className="min-h-screen bg-[#0a0e14] text-[#e8edf5]">
      <header className="border-b border-[#1e2a3a] bg-[#0d1219] px-4 py-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#7dd3c0]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <span>Dual narrative console · live</span>
          <span className="text-[#64748b]">{cv.location}</span>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 pb-8 pt-16 md:px-6 md:pt-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight sm:text-6xl">
            {cv.name}
          </h1>
          <p className="mt-3 text-lg text-[#94a3b8]">{cv.title}</p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#94a3b8]">{cv.summary}</p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="bg-[#7dd3c0] px-5 py-2.5 text-sm font-bold text-[#042f2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7dd3c0]"
            >
              Open hire channel
            </a>
            <a
              href="/resume"
              className="border border-[#7dd3c0]/50 px-5 py-2.5 text-sm text-[#7dd3c0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7dd3c0]"
            >
              Console dump / resume
            </a>
            <ContactRow className="text-[#7dd3c0]/70" />
          </div>
        </motion.div>

        <div className="mt-10 grid gap-3 sm:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.08 * i }}
              className="border border-[#1e2a3a] bg-[#0d1219] p-4"
            >
              <p className="font-[family-name:var(--font-mono)] text-2xl font-bold text-[#fbbf24]">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#64748b]">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-px bg-[#1e2a3a] px-4 md:grid-cols-2 md:px-6">
        <div className="bg-[#0a0e14] p-6 md:p-8">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[#7dd3c0]">
            Pane A · product narrative
          </p>
          <ul className="mt-6 space-y-4">
            {productLens.map((line) => (
              <li key={line} className="border-l-2 border-[#7dd3c0] pl-4 text-sm leading-6 text-[#cbd5e1]">
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#0a0e14] p-6 md:p-8">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[#fbbf24]">
            Pane B · engineering narrative
          </p>
          <ul className="mt-6 space-y-4">
            {engLens.map((line) => (
              <li key={line} className="border-l-2 border-[#fbbf24] pl-4 text-sm leading-6 text-[#cbd5e1]">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-4 py-16 md:px-6">
        <div>
          <h2 className="mb-8 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.35em] text-[#7dd3c0]">
            Timeline feed
          </h2>
          <ExperienceList tone="dark" />
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.35em] text-[#7dd3c0]">
              Stack
            </h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.35em] text-[#7dd3c0]">
              Artifacts
            </h2>
            <ProjectLinks />
            <p className="mt-10 text-sm text-[#64748b]">
              {cv.education.degree} · {cv.education.school}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
