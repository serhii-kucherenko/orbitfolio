"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Cinematic Flythrough — a continuous camera-like progression turns the CV into one restrained film take. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#0e0d0b] text-[#f2eadc]">
      <header className="relative flex min-h-screen items-end overflow-hidden px-6 pb-16 pt-28 md:px-12">
        <motion.div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(14,13,11,.96) 0%, rgba(14,13,11,.2) 55%), radial-gradient(circle at 72% 42%, #b46a38 0, #35231b 28%, #0e0d0b 64%)",
          }}
          animate={reduce ? undefined : { scale: [1, 1.07] }}
          transition={{ duration: 12, ease: "easeOut" }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-8 flex justify-between px-6 font-[family-name:var(--font-mono)] text-[9px] tracking-[0.3em] opacity-45 md:px-12"
        >
          <span>ROLL 04 · TAKE 01 · {cv.location}</span>
          <span>00:00:10:24</span>
        </div>
        <div className="relative z-10 max-w-5xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[#e6a56f]">A career in one take</p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-6 font-[family-name:var(--font-serif)] text-6xl leading-[0.86] sm:text-8xl lg:text-9xl"
          >
            {cv.name}
          </motion.h1>
          <div className="mt-10 grid gap-8 md:grid-cols-[0.35fr_0.65fr]">
            <p className="text-xl text-[#e6a56f]">{cv.title}</p>
            <p className="max-w-2xl text-sm leading-7 text-[#f2eadc]/65">{cv.summary}</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="bg-[#e6a56f] px-6 py-3 text-sm font-bold text-[#0e0d0b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e6a56f]"
            >
              Start the next production
            </a>
            <a
              href="/resume"
              className="border border-[#e6a56f]/50 px-6 py-3 text-sm font-bold text-[#e6a56f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e6a56f]"
            >
              Call sheet
            </a>
            <ContactRow className="items-center text-[#f2eadc]/60" />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24 md:px-12">
        <div className="mb-16 flex items-end justify-between border-b border-[#e6a56f]/25 pb-5">
          <h2 className="font-[family-name:var(--font-serif)] text-4xl">The continuous shot</h2>
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-45">2015 — 2026</span>
        </div>
        <ol className="relative border-l border-[#e6a56f]/35">
          {cv.experience.map((job, index) => (
            <motion.li
              key={job.company}
              initial={reduce ? false : { opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              className="relative grid gap-6 border-b border-white/10 py-12 pl-8 md:grid-cols-[0.35fr_0.65fr] md:pl-14"
            >
              <span className="absolute -left-3 top-12 grid h-6 w-6 place-items-center rounded-full bg-[#e6a56f] text-[10px] font-bold text-[#0e0d0b]">
                {index + 1}
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#e6a56f]">{job.period}</p>
                <h3 className="mt-3 font-[family-name:var(--font-serif)] text-2xl">{job.company}</h3>
                <p className="mt-2 text-sm opacity-50">{job.role}</p>
              </div>
              <ul className="space-y-3 text-sm leading-7 text-[#f2eadc]/70">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>— {bullet}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </section>

      <section className="bg-[#e6a56f] px-6 py-24 text-[#20150f] md:px-12">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-8 font-[family-name:var(--font-serif)] text-4xl">Credits</h2>
            <SkillsCloud tone="light" />
          </div>
          <div>
            <h2 className="mb-8 font-[family-name:var(--font-serif)] text-4xl">Selected work</h2>
            <ProjectLinks tone="light" />
          </div>
        </div>
      </section>
      <footer className="mx-auto max-w-6xl px-6 py-12 text-xs opacity-55 md:px-12">
        End title · {cv.education.degree} · {cv.education.school} · {cv.location}
      </footer>
    </main>
  );
}
