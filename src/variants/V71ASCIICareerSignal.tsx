"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { SmoothScroll } from "@/components/SmoothScroll";
import { cv } from "@/data/cv";

const banner = `
╔══════════════════════════════════╗
║  SIGNAL / CAREER / READABLE      ║
║  CHANNEL OPEN · HIRE READY       ║
╚══════════════════════════════════╝`.trim();

/** ASCII Career Signal — monospaced signal art with Lenis for terminal-length reading. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <SmoothScroll>
    <main className="min-h-screen bg-[#050705] text-[#b6f5a8] overflow-x-hidden">
      <header className="relative mx-auto max-w-5xl overflow-hidden px-6 pb-8 pt-24 font-[family-name:var(--font-mono)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, #6fdf5c22 3px)",
          }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-16 top-10 h-48 w-48 rounded-full bg-[#6fdf5c]/15 blur-3xl"
          animate={reduce ? undefined : { opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.pre
          aria-hidden
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative overflow-x-auto text-[10px] leading-tight text-[#6fdf5c]/75 sm:text-xs"
        >
          {banner}
        </motion.pre>
        <p className="relative mt-8 text-[10px] uppercase tracking-[0.35em] text-[#6fdf5c]/55">
          tx · founding-engineer · {cv.location} · channel open
          <motion.span
            aria-hidden
            className="ml-2 inline-block h-3 w-2 bg-[#6fdf5c]"
            animate={reduce ? undefined : { opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </p>
        <h1 className="relative mt-3 text-4xl font-bold tracking-tight text-[#d8ffcf] sm:text-6xl">{cv.name}</h1>
        <p className="relative mt-3 text-sm text-[#6fdf5c]">{cv.title}</p>
        <p className="relative mt-6 max-w-2xl text-xs leading-6 text-[#b6f5a8]/70 sm:text-sm sm:leading-7">
          {cv.summary}
        </p>
        <div className="relative mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${cv.email}`}
            className="border border-[#6fdf5c] bg-[#6fdf5c] px-4 py-2 text-xs font-bold text-[#050705] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6fdf5c]"
          >
            mailto:hire
          </a>
          <a
            href="/resume"
            className="border border-[#6fdf5c]/50 px-4 py-2 text-xs font-bold text-[#6fdf5c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6fdf5c]"
          >
            cat resume.txt
          </a>
          <ContactRow className="text-[#6fdf5c]/80" />
        </div>
        <motion.pre
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 0.15 }}
          className="relative mt-10 overflow-x-auto border border-[#6fdf5c]/25 bg-[#0c120c] p-4 text-[10px] leading-5 text-[#6fdf5c]/85 sm:text-xs"
        >
          {[
            `$ whoami`,
            cv.name,
            `$ role`,
            cv.title,
            `$ status`,
            `HIRE_READY`,
            `$ ping latency`,
            `0.2s · 85% load cut`,
            ``,
            ...cv.highlights.map((h) => `${h.label.padEnd(16, " ")} ${h.value}`),
          ].join("\n")}
        </motion.pre>
      </header>

      <section className="mx-auto max-w-5xl space-y-14 px-6 pb-28 font-[family-name:var(--font-mono)]">
        <div>
          <h2 className="mb-6 text-xs uppercase tracking-[0.3em] text-[#6fdf5c]/55"># experience</h2>
          <div className="text-[#d8ffcf]">
            <ExperienceList tone="dark" />
          </div>
        </div>
        <div className="grid gap-12 border-t border-[#6fdf5c]/15 pt-14 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xs uppercase tracking-[0.3em] text-[#6fdf5c]/55"># skills</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-xs uppercase tracking-[0.3em] text-[#6fdf5c]/55"># projects</h2>
            <ProjectLinks />
          </div>
        </div>
        <p className="text-[10px] text-[#6fdf5c]/45">
          {cv.education.degree} · {cv.education.school} · {cv.location}
        </p>
      </section>
    </main>
    </SmoothScroll>
  );
}
