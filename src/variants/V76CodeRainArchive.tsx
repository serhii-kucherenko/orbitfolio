"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Code Rain Archive — terminal archive with cascading glyph atmosphere */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const rain = ["10+", "RAG", "LLM", "0→1", "SSR", "85%", "$78K", "YC", "AI", "CI", "→", "λ", "∥", "◆"];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020705] font-[family-name:var(--font-mono)] text-[#86efac]">
      {!reduce && (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
          <div className="flex h-full gap-6 px-2">
            {Array.from({ length: 12 }).map((_, col) => (
              <motion.div
                key={col}
                className="flex flex-col gap-2 text-[10px] leading-none text-emerald-400"
                animate={{ y: ["-20%", "0%"] }}
                transition={{ duration: 12 + col * 1.4, repeat: Infinity, ease: "linear" }}
              >
                {[...rain, ...rain, ...rain].map((g, i) => (
                  <span key={`${col}-${i}`}>{g}</span>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <section className="relative mx-auto max-w-5xl px-6 pb-10 pt-20">
        <p className="text-[10px] uppercase tracking-[0.4em] text-emerald-600">Code rain archive // v76</p>
        <motion.h1
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-emerald-100 sm:text-6xl"
        >
          {cv.name}
        </motion.h1>
        <p className="mt-3 text-sm text-emerald-500/80">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-xs leading-7 text-emerald-500/70">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${cv.email}`}
            className="border border-emerald-500/60 bg-emerald-950/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
          >
            &gt; mail --hire
          </a>
          <a
            href="/resume"
            className="border border-emerald-700/60 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-500"
          >
            &gt; cat resume.txt
          </a>
          <ContactRow className="text-emerald-600" />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : i * 0.05 }}
              className="border border-emerald-800/80 bg-black/50 p-3"
            >
              <p className="text-2xl font-bold text-emerald-300">{h.value}</p>
              <p className="mt-1 text-[9px] uppercase tracking-wider text-emerald-700">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl space-y-16 px-6 pb-24">
        <div className="border border-emerald-900/80 bg-black/60 p-6 md:p-8">
          <h2 className="mb-8 text-xs uppercase tracking-[0.35em] text-emerald-500">cat experience.log</h2>
          <div className="text-emerald-100/90 [&_h3]:font-[family-name:var(--font-sans)] [&_li]:font-[family-name:var(--font-sans)] [&_p]:font-[family-name:var(--font-sans)]">
            <ExperienceList tone="dark" />
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="border border-emerald-900/80 bg-black/60 p-6">
            <h2 className="mb-6 text-xs uppercase tracking-[0.35em] text-emerald-500">ls skills/</h2>
            <div className="[&_span]:rounded-none [&_span]:border-emerald-800 [&_span]:bg-emerald-950/40 [&_span]:font-[family-name:var(--font-mono)] [&_span]:text-[10px]">
              <SkillsCloud />
            </div>
          </div>
          <div className="border border-emerald-900/80 bg-black/60 p-6">
            <h2 className="mb-6 text-xs uppercase tracking-[0.35em] text-emerald-500">git remote -v</h2>
            <div className="font-[family-name:var(--font-sans)]">
              <ProjectLinks />
            </div>
            <p className="mt-10 text-[10px] text-emerald-700">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
