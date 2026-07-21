"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** WebGPU Veil — translucent spatial veil parts to reveal the engineer and outcomes. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#eef3f1] text-[#122524]">
      <header className="relative min-h-screen overflow-hidden px-6 py-24 md:px-12">
        <motion.div
          aria-hidden
          className="absolute -left-[22%] -top-[12%] h-[125%] w-[74%] rounded-[50%] bg-[#9fd9d2]/75 blur-2xl"
          animate={reduce ? undefined : { x: ["-8%", "5%", "-8%"], rotate: [-4, 3, -4] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -right-[28%] top-[4%] h-[115%] w-[72%] rounded-[50%] bg-[#c5ddd8]/55 blur-3xl"
          animate={reduce ? undefined : { x: ["7%", "-4%", "7%"], rotate: [5, -2, 5] }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-between">
          <div className="flex justify-between border-b border-[#122524]/15 pb-4 text-[10px] uppercase tracking-[0.35em]">
            <span>WebGPU veil / 03</span>
            <span>{cv.location}</span>
          </div>
          <div className="py-16 text-center">
            <p className="text-sm text-[#122524]/55">The interface parts. The evidence remains.</p>
            <motion.h1
              initial={reduce ? false : { opacity: 0, letterSpacing: "0.16em" }}
              animate={{ opacity: 1, letterSpacing: "-0.05em" }}
              transition={{ duration: 1.1 }}
              className="mx-auto mt-8 max-w-5xl font-[family-name:var(--font-serif)] text-6xl leading-[0.84] sm:text-8xl lg:text-[8.5rem]"
            >
              {cv.name}
            </motion.h1>
            <p className="mx-auto mt-10 max-w-2xl text-base leading-8 text-[#122524]/70">{cv.summary}</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-6 border-t border-[#122524]/15 pt-5">
            <span className="font-[family-name:var(--font-serif)] text-xl">{cv.title}</span>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${cv.email}`}
                className="rounded-full bg-[#122524] px-6 py-3 text-sm font-semibold text-[#eef3f1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#122524]"
              >
                Reveal a conversation
              </a>
              <a
                href="/resume"
                className="rounded-full border border-[#122524]/35 px-6 py-3 text-sm font-semibold text-[#122524]/80"
              >
                Spec sheet
              </a>
              <ContactRow className="text-[#122524]/60" />
            </div>
          </div>
        </div>
      </header>

      <section className="bg-[#122524] px-6 py-20 text-[#eef3f1] md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 border border-white/15 md:grid-cols-4">
            {cv.highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="border-white/15 p-6 odd:border-r md:border-r last:md:border-r-0"
              >
                <strong className="font-[family-name:var(--font-serif)] text-4xl text-[#9fd9d2]">
                  {highlight.value}
                </strong>
                <span className="mt-2 block text-[10px] uppercase tracking-[0.25em] opacity-55">
                  {highlight.label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-20 grid gap-12 lg:grid-cols-[0.32fr_0.68fr]">
            <h2 className="font-[family-name:var(--font-serif)] text-4xl">What the veil reveals</h2>
            <ExperienceList tone="dark" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-2 md:px-12">
        <div>
          <p className="mb-8 text-[10px] uppercase tracking-[0.35em] text-[#346b68]">Production vocabulary</p>
          <SkillsCloud tone="light" />
        </div>
        <div className="border-l border-[#122524]/15 pl-8">
          <p className="mb-8 text-[10px] uppercase tracking-[0.35em] text-[#346b68]">Independent signals</p>
          <ProjectLinks tone="light" />
          <p className="mt-10 text-sm text-[#122524]/45">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>
    </main>
  );
}
