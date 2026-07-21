"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Scroll Alcove Museum — vertical gallery of stone niches; each career chapter sits in its own lit alcove. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, #1a1510 0%, #0e0b08 40%, #1a1510 100%)",
        color: "#f3e8d8",
      }}
    >
      <header className="relative mx-auto flex min-h-[88vh] max-w-5xl flex-col justify-end px-6 pb-16 pt-28 md:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-8 top-16 h-64 rounded-[50%] opacity-50 blur-3xl"
          style={{
            background: reduce
              ? "rgba(212,175,120,0.12)"
              : "radial-gradient(ellipse, rgba(212,175,120,0.28), transparent 70%)",
          }}
        />
        <p className="relative font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.45em] text-[#d4af78]/70">
          Gallery · alcove 01
        </p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mt-6 font-[family-name:var(--font-serif)] text-5xl leading-[0.95] sm:text-7xl md:text-8xl"
        >
          {cv.name}
        </motion.h1>
        <p className="relative mt-5 max-w-xl font-[family-name:var(--font-sans)] text-sm leading-7 text-[#f3e8d8]/70">
          {cv.summary}
        </p>
        <div className="relative mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${cv.email}`}
            className="border border-[#d4af78] bg-[#d4af78] px-5 py-2.5 text-sm font-semibold text-[#1a1510] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af78]"
          >
            Commission a hire
          </a>
          <p className="text-sm text-[#d4af78]">{cv.title}</p>
        </div>
        <ContactRow className="relative mt-6 text-[#f3e8d8]/60" />
      </header>

      <section className="mx-auto grid max-w-5xl grid-cols-2 gap-px border border-[#d4af78]/25 md:grid-cols-4">
        {cv.highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: reduce ? 0 : i * 0.08 }}
            className="bg-[#1a1510]/80 px-5 py-8"
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
        <div className="rounded-sm border border-[#d4af78]/20 bg-[#120e0a]/60 p-6 md:p-10">
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
            {cv.education.degree} · {cv.education.school}
          </p>
        </div>
      </section>
    </main>
  );
}
