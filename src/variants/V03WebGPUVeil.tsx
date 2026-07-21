"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** WebGPU Veil — a translucent spatial veil parts to reveal the engineer and production outcomes. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#f4f1ed] text-[#172b2b]">
      <header className="relative min-h-screen overflow-hidden px-6 py-28 md:px-12">
        <motion.div
          aria-hidden
          className="absolute -left-[20%] -top-[10%] h-[120%] w-[72%] rounded-[50%] bg-[#b8e4df]/75 blur-2xl"
          initial={false}
          animate={reduce ? undefined : { x: ["-8%", "4%", "-8%"], rotate: [-4, 3, -4] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -right-[25%] top-[5%] h-[110%] w-[70%] rounded-[50%] bg-[#decae7]/65 blur-3xl"
          initial={false}
          animate={reduce ? undefined : { x: ["7%", "-3%", "7%"], rotate: [5, -2, 5] }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-between">
          <div className="flex justify-between border-b border-[#172b2b]/20 pb-4 text-[10px] uppercase tracking-[0.35em]">
            <span>WebGPU veil / 03</span>
            <span>{cv.location}</span>
          </div>
          <div className="py-20 text-center">
            <p className="text-sm text-[#172b2b]/60">The interface parts. The evidence remains.</p>
            <motion.h1
              initial={reduce ? false : { opacity: 0, letterSpacing: "0.18em" }}
              animate={{ opacity: 1, letterSpacing: "-0.06em" }}
              transition={{ duration: 1.2 }}
              className="mx-auto mt-8 max-w-5xl font-[family-name:var(--font-serif)] text-6xl leading-[0.84] sm:text-8xl lg:text-[9rem]"
            >
              {cv.name}
            </motion.h1>
            <p className="mx-auto mt-10 max-w-2xl text-base leading-8 text-[#172b2b]/70">{cv.summary}</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-6 border-t border-[#172b2b]/20 pt-5">
            <span className="font-[family-name:var(--font-serif)] text-xl">{cv.title}</span>
            <a href={`mailto:${cv.email}`} className="rounded-full border border-[#172b2b] px-6 py-3 text-sm font-semibold">
              Reveal a conversation
            </a>
          </div>
        </div>
      </header>

      <section className="bg-[#172b2b] px-6 py-24 text-[#f4f1ed] md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 border border-white/15 md:grid-cols-4">
            {cv.highlights.map((highlight) => (
              <div key={highlight.label} className="border-white/15 p-6 odd:border-r md:border-r">
                <strong className="font-[family-name:var(--font-serif)] text-4xl text-[#b8e4df]">{highlight.value}</strong>
                <span className="mt-2 block text-[10px] uppercase tracking-[0.25em] opacity-55">{highlight.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-24 grid gap-14 lg:grid-cols-[0.3fr_0.7fr]">
            <h2 className="font-[family-name:var(--font-serif)] text-4xl">What the veil reveals</h2>
            <ExperienceList tone="dark" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-2 md:px-12">
        <div>
          <p className="mb-8 text-[10px] uppercase tracking-[0.35em] text-[#346b68]">Production vocabulary</p>
          <SkillsCloud tone="light" />
        </div>
        <div className="border-l border-[#172b2b]/20 pl-8">
          <p className="mb-8 text-[10px] uppercase tracking-[0.35em] text-[#346b68]">Independent signals</p>
          <ProjectLinks tone="light" />
          <ContactRow className="mt-12 border-t border-[#172b2b]/20 pt-6 text-[#172b2b]/65" />
        </div>
      </section>
    </main>
  );
}
