"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

const cases = [
  {
    capability: "LLM + constraints",
    situation: "Clinic scheduling across orgs",
    result: "AI assistant with deterministic rules",
  },
  {
    capability: "Production RAG",
    situation: "Enterprise healthcare documents",
    result: "Grounded answers over private corpora",
  },
  {
    capability: "Agentic CI",
    situation: "Engineering throughput",
    result: "LLM PR automation in the pipeline",
  },
  {
    capability: "0→1 platforms",
    situation: "Fintech & travel MVPs",
    result: "Shipped products that unlocked capital",
  },
] as const;

/** Applied AI Casebook — capabilities paired with production situations. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#eef1f6] text-[#111827] overflow-x-hidden">
      <header className="mx-auto max-w-5xl px-6 pb-10 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] text-[#1e4d8c]">
          Casebook · applied AI · {cv.location}
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-serif)] text-5xl leading-none sm:text-6xl">{cv.name}</h1>
        <p className="mt-4 text-lg text-[#111827]/65">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-[#111827]/70">{cv.summary}</p>

        <div
          data-hire-proof
          className="mt-8 flex flex-wrap items-stretch gap-px border border-[#1e4d8c]/25 bg-[#1e4d8c]/25"
          aria-label="who / what / proof casebook strip"
        >
          <div className="min-w-[10rem] flex-1 bg-white px-4 py-3">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#1e4d8c]/70">Who</p>
            <p className="mt-1 text-sm font-semibold">{cv.name}</p>
          </div>
          <div className="min-w-[10rem] flex-1 bg-white px-4 py-3">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#1e4d8c]/70">What</p>
            <p className="mt-1 text-sm">Applied AI case studies · LLM · RAG · agents</p>
          </div>
          <div className="min-w-[10rem] flex-1 bg-white px-4 py-3">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#1e4d8c]/70">Proof</p>
            <p className="mt-1 text-sm">
              {cv.highlights[0]?.value} impact · {cases.length} production cases below
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${cv.email}`}
            className="inline-block border border-[#111827] bg-[#111827] px-5 py-2.5 text-sm font-medium text-[#eef1f6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111827]"
          >
            Discuss a case
          </a>
          <a
            href="/resume"
            className="inline-block border border-[#111827]/40 px-5 py-2.5 text-sm text-[#111827] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111827]"
          >
            Case dossier / resume
          </a>
          <ContactRow className="text-[#111827]/70" />
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="grid gap-4 md:grid-cols-2">
          {cases.map((c, i) => (
            <motion.article
              key={c.capability}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : i * 0.07 }}
              className="border border-[#111827]/15 bg-white p-6"
            >
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-[#1e4d8c]">
                Case {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-serif)] text-2xl">{c.capability}</h2>
              <p className="mt-4 text-sm text-[#111827]/55">
                <span className="font-semibold text-[#111827]/80">Situation:</span> {c.situation}
              </p>
              <p className="mt-2 text-sm text-[#111827]/55">
                <span className="font-semibold text-[#111827]/80">Result:</span> {c.result}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-3 px-6 py-8 sm:grid-cols-4">
        {cv.highlights.map((h) => (
          <div key={h.label} className="border border-[#111827]/12 bg-white px-4 py-5">
            <p className="text-2xl font-semibold">{h.value}</p>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-[#111827]/45">{h.label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-5xl space-y-16 px-6 py-14">
        <div>
          <h2 className="mb-6 font-[family-name:var(--font-serif)] text-3xl">Full chronology</h2>
          <ExperienceList tone="light" />
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-2xl">Toolkit</h2>
            <SkillsCloud tone="light" />
          </div>
          <div>
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-2xl">Repositories</h2>
            <ProjectLinks tone="light" />
          </div>
        </div>
        <ContactRow />
        <p className="text-xs text-[#111827]/45">
          {cv.education.degree} · {cv.education.school}
        </p>
      </section>
    </main>
  );
}
