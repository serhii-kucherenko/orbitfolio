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
    <main className="min-h-screen bg-[#faf8f3] text-[#1a1814]">
      <header className="mx-auto max-w-5xl px-6 pb-10 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] text-[#8b6914]">
          Casebook · applied AI
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-serif)] text-5xl leading-none sm:text-6xl">{cv.name}</h1>
        <p className="mt-4 text-lg text-[#1a1814]/65">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-[#1a1814]/70">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${cv.email}`}
            className="inline-block border border-[#1a1814] bg-[#1a1814] px-5 py-2.5 text-sm font-medium text-[#faf8f3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1814]"
          >
            Discuss a case
          </a>
          <a
            href="/resume"
            className="inline-block border border-[#1a1814]/40 px-5 py-2.5 text-sm text-[#1a1814] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1814]"
          >
            Case dossier / resume
          </a>
          <ContactRow className="text-[#1a1814]/70" />
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
              className="border border-[#1a1814]/15 bg-white p-6 shadow-[4px_4px_0_#1a1814]/12]"
            >
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-[#8b6914]">
                Case {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-serif)] text-2xl">{c.capability}</h2>
              <p className="mt-4 text-sm text-[#1a1814]/55">
                <span className="font-semibold text-[#1a1814]/80">Situation:</span> {c.situation}
              </p>
              <p className="mt-2 text-sm text-[#1a1814]/55">
                <span className="font-semibold text-[#1a1814]/80">Result:</span> {c.result}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-3 px-6 py-8 sm:grid-cols-4">
        {cv.highlights.map((h) => (
          <div key={h.label} className="border border-[#1a1814]/12 bg-[#f0ebe0] px-4 py-5">
            <p className="text-2xl font-semibold">{h.value}</p>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-[#1a1814]/45">{h.label}</p>
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
        <p className="text-xs text-[#1a1814]/45">
          {cv.education.degree} · {cv.education.school}
        </p>
      </section>
    </main>
  );
}
