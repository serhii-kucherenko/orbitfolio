"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { FallbackGlow, SceneAlcove, WebGLStage } from "@/components/webgl/AwardWebGL";
import { cv } from "@/data/cv";

/** Scroll Alcove Museum — vertical gallery of stone niches; each career chapter sits in its own lit alcove. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const accent = "#d4af78";

  return (
    <main
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, #17130e 0%, #0c0907 40%, #17130e 100%)",
        color: "#f3e8d8",
      }}
    >
      <header className="relative mx-auto grid min-h-[88vh] max-w-6xl items-end gap-10 px-6 pb-16 pt-28 md:grid-cols-[1.05fr_0.95fr] md:px-10">
        <div className="relative z-10">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.45em] text-[#d4af78]/70">
            Gallery · alcove 01 · {cv.location}
          </p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-6 font-[family-name:var(--font-serif)] text-5xl leading-[0.95] sm:text-7xl md:text-8xl"
          >
            {cv.name}
          </motion.h1>
          <p className="mt-5 max-w-xl font-[family-name:var(--font-sans)] text-sm leading-7 text-[#f3e8d8]/70">
            {cv.summary}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="border border-[#d4af78] bg-[#d4af78] px-5 py-2.5 text-sm font-semibold text-[#17130e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af78]"
            >
              Commission a hire
            </a>
            <a
              href="/resume"
              className="border border-[#d4af78]/50 px-5 py-2.5 text-sm font-semibold text-[#d4af78] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af78]"
            >
              Catalog sheet
            </a>
            <p className="text-sm text-[#d4af78]">{cv.title}</p>
          </div>
          <ContactRow className="mt-6 text-[#f3e8d8]/60" />
        </div>
        <WebGLStage
          accent={accent}
          reduce={reduce}
          label="Three.js museum alcoves orbiting a lit core"
          className="relative h-[min(52vh,420px)] w-full overflow-hidden rounded-sm border border-[#d4af78]/25 bg-[#100c08]"
          fallback={<FallbackGlow accent={accent} />}
        >
          <SceneAlcove accent={accent} />
        </WebGLStage>
      </header>

      <section className="mx-auto grid max-w-5xl grid-cols-2 gap-px border border-[#d4af78]/25 md:grid-cols-4">
        {cv.highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: reduce ? 0 : i * 0.08 }}
            className="bg-[#17130e]/80 px-5 py-8"
            style={{ boxShadow: "inset 0 0 40px rgba(212,175,120,0.06)" }}
          >
            <p className="font-[family-name:var(--font-serif)] text-3xl text-[#d4af78]">{h.value}</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] opacity-50">{h.label}</p>
          </motion.div>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 md:px-10">
        <div className="mb-12 flex items-end justify-between gap-4 border-b border-[#d4af78]/30 pb-4">
          <h2 className="font-[family-name:var(--font-serif)] text-4xl">Permanent collection</h2>
          <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest opacity-45">
            alcoves 02–05
          </span>
        </div>
        <div className="rounded-sm border border-[#d4af78]/20 bg-[#100c08]/60 p-6 md:p-10">
          <ExperienceList tone="dark" />
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-16 px-6 pb-28 md:grid-cols-[1.1fr_0.9fr] md:px-10">
        <div>
          <h2 className="mb-8 font-[family-name:var(--font-serif)] text-3xl">Materials</h2>
          <SkillsCloud />
        </div>
        <div>
          <h2 className="mb-8 font-[family-name:var(--font-serif)] text-3xl">Loans & editions</h2>
          <ProjectLinks />
          <p className="mt-12 border-t border-[#d4af78]/25 pt-6 font-[family-name:var(--font-serif)] text-sm italic opacity-60">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>
    </main>
  );
}
