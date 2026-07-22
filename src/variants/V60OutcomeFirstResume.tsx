"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { useGsapReveal } from "@/components/useGsapReveal";
import { cv } from "@/data/cv";

const outcomes = [
  {
    value: "85%",
    label: "First-page load cut",
    proof: "1.4s → 0.2s on a live product surface at SPD Technology.",
  },
  {
    value: "$78K/yr",
    label: "Infra saved",
    proof: "Cloud optimization and architecture redesign at Windmill / WEF work.",
  },
  {
    value: "Multi-org",
    label: "AI scheduling shipped",
    proof: "LLM intent + deterministic constraints across healthcare organizations.",
  },
  {
    value: "2–6",
    label: "Engineers led",
    proof: "Roadmap, standards, and delivery from pilot to production scale.",
  },
] as const;

/** Outcome First Resume — four production outcomes lead; GSAP reveals the evidence trail. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const evidenceRef = useRef<HTMLElement>(null);
  useGsapReveal(evidenceRef, reduce);

  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#0b1220] overflow-x-hidden">
      <section className="bg-[#0b1220] text-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] text-cyan-300">
            Outcomes first · 10-second recruiter scan · GSAP · {cv.location}
          </p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <div>
              <motion.h1
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-[family-name:var(--font-display)] text-4xl font-extrabold sm:text-5xl"
              >
                {cv.name}
              </motion.h1>
              <p className="mt-2 text-lg text-slate-300">{cv.title}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${cv.email}`}
                className="bg-cyan-400 px-5 py-2.5 text-sm font-bold text-[#0b1220] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                Hire — email now
              </a>
              <a
                href="/resume"
                className="border border-cyan-300/40 px-5 py-2.5 text-sm text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                Full resume
              </a>
            </div>
          </div>

          <div
            data-hire-proof
            className="mt-10 grid gap-3 border border-cyan-400/25 bg-white/[0.04] p-4 sm:grid-cols-3"
            aria-label="who / what / proof"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-300/70">Who</p>
              <p className="mt-2 text-sm font-semibold text-white">{cv.name}</p>
              <p className="mt-1 text-xs text-slate-400">{cv.title}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-300/70">What</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Founding full-stack · applied AI · production ownership end-to-end
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-300/70">Proof</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {outcomes[0].value} {outcomes[0].label.toLowerCase()} · {outcomes[2].value}{" "}
                {outcomes[2].label.toLowerCase()}
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {outcomes.map((o, i) => (
              <motion.article
                key={o.label}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduce ? 0 : 0.06 * i }}
                className="border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="text-3xl font-bold text-cyan-300 sm:text-4xl">{o.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-400">{o.label}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{o.proof}</p>
              </motion.article>
            ))}
          </div>
          <ContactRow className="mt-8 text-slate-400" />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <p className="max-w-3xl text-sm leading-7 text-slate-600">{cv.summary}</p>
        <p className="mt-3 text-xs text-slate-400">{cv.location}</p>
      </section>

      <section ref={evidenceRef} className="mx-auto max-w-5xl space-y-16 px-6 pb-24">
        <div data-gsap>
          <h2 className="mb-2 text-2xl font-bold">Where the outcomes came from</h2>
          <p className="mb-8 text-sm text-slate-500">Role → company → proof</p>
          <ExperienceList tone="light" />
        </div>
        <div data-gsap className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-bold">Toolkit</h2>
            <SkillsCloud tone="light" />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold">Shipped</h2>
            <ProjectLinks tone="light" />
            <p className="mt-10 text-sm text-slate-500">
              {cv.education.degree} · {cv.education.school}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
