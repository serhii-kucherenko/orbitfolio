"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Void Whisper — near-silent deep space with sparse luminous type */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#010102] text-[#d4d4d8]">
      <section className="relative mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center px-6 py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 12% 28%, #fff, transparent), radial-gradient(1px 1px at 78% 18%, #fff, transparent), radial-gradient(1.5px 1.5px at 42% 62%, #a1a1aa, transparent), radial-gradient(1px 1px at 88% 72%, #fff, transparent)",
          }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/3 size-72 -translate-x-1/2 rounded-full bg-white/[0.035] blur-3xl"
          animate={reduce ? undefined : { opacity: [0.35, 0.75, 0.35] }}
          transition={reduce ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <p className="relative font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.5em] text-zinc-600">
          Void whisper · {cv.location}
        </p>
        <motion.h1
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative mt-8 font-[family-name:var(--font-serif)] text-5xl font-normal tracking-tight text-zinc-100 sm:text-7xl"
        >
          {cv.name}
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ delay: reduce ? 0 : 0.4, duration: 1 }}
          className="relative mt-4 text-sm tracking-wide text-zinc-400"
        >
          {cv.title}
        </motion.p>
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={{ delay: reduce ? 0 : 0.7, duration: 1 }}
          className="relative mt-10 max-w-md text-sm leading-8 text-zinc-500"
        >
          {cv.summary}
        </motion.p>
        <div className="relative mt-12 flex flex-wrap items-center gap-6">
          <a
            href={`mailto:${cv.email}`}
            className="border-b border-zinc-500 pb-0.5 text-sm text-zinc-300 transition-colors hover:border-zinc-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-400"
          >
            Whisper back — hire
          </a>
          <a
            href="/resume"
            className="text-sm text-zinc-500 underline-offset-4 hover:text-zinc-300 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-400"
          >
            Quiet print
          </a>
          <ContactRow className="text-zinc-600" />
        </div>
      </section>

      <section className="mx-auto max-w-4xl border-t border-white/[0.06] px-6 py-16">
        <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : i * 0.08 }}
            >
              <p className="font-[family-name:var(--font-serif)] text-3xl text-zinc-200">{h.value}</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-zinc-600">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-20 px-6 pb-28">
        <div>
          <h2 className="mb-10 font-[family-name:var(--font-serif)] text-2xl text-zinc-300">Echoes of work</h2>
          <ExperienceList tone="dark" />
        </div>
        <div className="grid gap-16 border-t border-white/[0.06] pt-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-xl text-zinc-300">Quiet skills</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-xl text-zinc-300">Signals</h2>
            <ProjectLinks />
            <p className="mt-10 text-sm text-zinc-600">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
