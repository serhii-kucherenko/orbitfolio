"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

const trust = [
  {
    title: "Clinic scheduling AI",
    detail: "LLM intent extraction plus deterministic constraints across healthcare orgs.",
  },
  {
    title: "Enterprise RAG",
    detail: "Document ingestion, semantic search, and grounded answers on private corpora.",
  },
  {
    title: "Founding delivery",
    detail: "Roadmap ownership, engineering standards, and a team of 4 from pilot to multi-org.",
  },
] as const;

const proofStrip = [
  { label: "Who", value: `${cv.name} · founding engineer · ${cv.location}` },
  { label: "What", value: "Clinical SaaS · applied AI · multi-org healthcare delivery" },
  { label: "Proof", value: `${cv.highlights[0]?.value} ${cv.highlights[0]?.label} · YC healthcare AI` },
] as const;

/** Clinic SaaS Engineer — healthcare-product calm: trust, outcomes, founding delivery. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#f3f7f4] text-[#1c2b24]">
      <header className="relative overflow-hidden border-b border-[#c5d4cb] bg-gradient-to-br from-[#e8f0eb] via-[#f3f7f4] to-[#dde8e2] px-6 pb-14 pt-28">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#9bb8a8]/35 blur-3xl"
          animate={reduce ? undefined : { opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="relative mx-auto max-w-5xl">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#4a6b5c]">
            Clinical product · founding engineer · {cv.location}
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-serif)] text-4xl tracking-tight sm:text-6xl">{cv.name}</h1>
          <p className="mt-3 text-lg text-[#3d564a]">{cv.title}</p>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#1c2b24]/70">{cv.summary}</p>

          <div
            data-hire-proof
            className="mt-8 grid gap-px overflow-hidden border border-[#8aa897] bg-[#8aa897] sm:grid-cols-3"
            aria-label="10-second hire proof — who / what / proof"
          >
            {proofStrip.map((row, i) => (
              <motion.div
                key={row.label}
                initial={reduce ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduce ? 0 : 0.08 * i }}
                className="bg-white/90 px-4 py-4"
              >
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#4a6b5c]">
                  {row.label} · 10-second scan
                </p>
                <p className="mt-2 text-sm font-medium leading-6 text-[#1c2b24]">{row.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${cv.email}`}
              className="bg-[#1c2b24] px-5 py-2.5 text-sm font-medium text-[#f3f7f4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c2b24]"
            >
              Schedule a conversation
            </a>
            <a
              href="/resume"
              className="border border-[#8aa897] px-5 py-2.5 text-sm text-[#2f4a3d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c2b24]"
            >
              Clinical resume
            </a>
            <a
              href={cv.linkedin}
              target="_blank"
              rel="noreferrer"
              className="border border-[#8aa897] px-5 py-2.5 text-sm text-[#2f4a3d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c2b24]"
            >
              LinkedIn
            </a>
          </div>
          <ContactRow className="mt-6 text-[#3d564a]" />
          <div className="mt-10 grid gap-3 sm:grid-cols-4">
            {cv.highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduce ? 0 : i * 0.05 }}
                className="border border-[#c5d4cb] bg-white/85 px-4 py-5"
              >
                <p className="text-2xl font-semibold text-[#2f4a3d]">{h.value}</p>
                <p className="mt-1 text-xs text-[#4a6b5c]/80">{h.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="mb-2 font-[family-name:var(--font-serif)] text-2xl">Trust outcomes</h2>
        <p className="mb-6 text-sm text-[#4a6b5c]/80">
          Regulated-domain engineering: ship AI that clinicians and ops teams can rely on.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {trust.map((t) => (
            <article key={t.title} className="border border-[#c5d4cb] bg-white p-5">
              <h3 className="font-semibold text-[#2f4a3d]">{t.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#1c2b24]/65">{t.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-16 px-6 pb-24">
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
        <p className="text-xs text-[#4a6b5c]/70">
          {cv.education.degree} · {cv.education.school} · {cv.location}
        </p>
      </section>
    </main>
  );
}
