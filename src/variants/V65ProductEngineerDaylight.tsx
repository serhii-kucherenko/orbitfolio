"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { useGsapReveal } from "@/components/useGsapReveal";
import { cv } from "@/data/cv";

const results = [
  {
    choice: "AI scheduling assistant",
    result: "Automated clinic scheduling across healthcare orgs with LLM intent + hard constraints.",
  },
  {
    choice: "Production RAG",
    result: "Grounded answers over enterprise healthcare documents with ingestion and search.",
  },
  {
    choice: "Perf rewrite",
    result: "Cut first-page load 85% (1.4s → 0.2s), improving retention and conversion.",
  },
  {
    choice: "Cloud redesign",
    result: "Delivered $78K/yr infrastructure savings while speeding delivery.",
  },
] as const;

/** Product Engineer Daylight — bright product page; GSAP reveals the product chapters. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const chaptersRef = useRef<HTMLElement>(null);
  useGsapReveal(chaptersRef, reduce);

  return (
    <main className="min-h-screen bg-[#eef6ff] text-[#0b1f38]">
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#bfdbfe_0%,_transparent_55%)]"
        />
        <div className="relative mx-auto max-w-5xl px-6 pb-10 pt-24 md:pt-28">
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-sky-700"
          >
            Product engineer · daylight studio · {cv.location}
          </motion.p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-extrabold tracking-tight sm:text-6xl">
            {cv.name}
          </h1>
          <p className="mt-3 text-xl text-sky-900/70">{cv.title}</p>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-sky-900/65">{cv.summary}</p>

          <div
            data-hire-proof
            className="mt-8 grid gap-3 rounded-lg border border-sky-300 bg-white/80 p-4 backdrop-blur sm:grid-cols-3"
            aria-label="10-second who / what / proof"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-sky-600">Who</p>
              <p className="mt-2 text-sm font-bold text-[#0b1f38]">{cv.name}</p>
              <p className="text-xs text-sky-800/60">{cv.location}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-sky-600">What</p>
              <p className="mt-2 text-sm leading-6 text-sky-950/75">
                Product engineer · architecture → customer outcomes · applied AI
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-sky-600">Proof</p>
              <p className="mt-2 text-sm leading-6 text-sky-950/75">
                {results[2].result.split(",")[0]} · {results[3].result.split(",")[0]}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="bg-sky-600 px-6 py-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Let’s build together
            </a>
            <a
              href="/resume"
              className="border border-sky-600/40 px-5 py-3 text-sm text-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Daylight resume
            </a>
            <ContactRow className="text-sky-800" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6">
        <div className="grid gap-3 sm:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.05 * i }}
              className="border border-sky-200 bg-white p-5"
            >
              <p className="text-3xl font-bold text-sky-700">{h.value}</p>
              <p className="mt-1 text-xs text-sky-900/50">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-5xl px-6">
        <h2 className="mb-4 text-2xl font-bold">Architecture → customer result</h2>
        <p className="mb-6 text-sm text-sky-900/55">
          Every technical choice below maps to a measurable product or business outcome.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          {results.map((r) => (
            <article key={r.choice} className="border border-sky-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">{r.choice}</p>
              <p className="mt-3 text-sm leading-6 text-sky-950/75">{r.result}</p>
            </article>
          ))}
        </div>
      </section>

      <section ref={chaptersRef} className="mx-auto mt-12 max-w-5xl px-6 pb-6">
        <div data-gsap className="border border-sky-200 bg-white p-8 md:p-12">
          <h2 className="mb-8 text-2xl font-bold">Product chapters</h2>
          <ExperienceList tone="light" />
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-6 py-12 md:grid-cols-2">
        <div data-gsap className="border border-sky-200 bg-white p-8">
          <h2 className="mb-6 text-xl font-bold">Craft stack</h2>
          <SkillsCloud tone="light" />
        </div>
        <div className="border border-sky-200 bg-white p-8">
          <h2 className="mb-6 text-xl font-bold">Labs & repos</h2>
          <ProjectLinks tone="light" />
          <p className="mt-10 text-sm text-sky-900/50">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>
    </main>
  );
}
