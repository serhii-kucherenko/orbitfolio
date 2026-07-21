"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Elastic Career Rail — horizontal stretch-rail of roles; metrics snap onto an elastic track. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#08101c] text-[#e2e8f0]">
      <header className="px-6 pb-8 pt-24 md:px-10">
        <motion.p
          animate={reduce ? {} : { letterSpacing: ["0.2em", "0.45em", "0.2em"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="font-[family-name:var(--font-mono)] text-[10px] uppercase text-[#38bdf8]"
        >
          Elastic rail · tension live · {cv.location}
        </motion.p>
        <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl font-extrabold tracking-tight sm:text-7xl">
          {cv.name}
        </h1>
        <p className="mt-3 text-[#38bdf8]">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${cv.email}`}
            className="border-2 border-[#38bdf8] bg-[#38bdf8] px-5 py-2.5 text-sm font-semibold text-[#08101c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]"
          >
            Stretch a conversation
          </a>
          <a
            href="/resume"
            className="border-2 border-[#38bdf8]/50 px-5 py-2.5 text-sm font-semibold text-[#38bdf8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]"
          >
            Tension sheet
          </a>
          <ContactRow className="text-white/55" />
        </div>
      </header>

      <section className="relative px-6 py-10 md:px-10">
        <div className="relative">
          <motion.div
            aria-hidden
            className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 bg-[#38bdf8]/40"
            animate={reduce ? {} : { scaleX: [0.92, 1.04, 0.92] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "center" }}
          />
          <div className="relative flex gap-4 overflow-x-auto pb-4">
            {cv.highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={reduce ? false : { y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: reduce ? 0 : i * 0.08 }}
                className="min-w-[160px] shrink-0 border border-[#38bdf8]/30 bg-[#0c1526] px-5 py-6"
              >
                <p className="text-3xl font-black text-[#38bdf8]">{h.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider opacity-50">{h.label}</p>
              </motion.div>
            ))}
            {cv.experience.map((job) => (
              <div
                key={job.company}
                className="min-w-[220px] shrink-0 border border-white/10 bg-[#0c1526]/80 px-5 py-6"
              >
                <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#38bdf8]/70">{job.period}</p>
                <p className="mt-2 text-sm font-semibold">{job.company}</p>
                <p className="mt-1 text-xs opacity-50">{job.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10">
        <h2 className="mb-10 text-3xl font-bold">Full tension log</h2>
        <ExperienceList tone="dark" />
      </section>

      <section className="mx-auto grid max-w-4xl gap-14 border-t border-white/10 px-6 pb-24 pt-16 md:grid-cols-2 md:px-10">
        <div>
          <h2 className="mb-6 text-xl font-bold">Elastic skills</h2>
          <SkillsCloud />
        </div>
        <div>
          <h2 className="mb-6 text-xl font-bold">Anchors</h2>
          <ProjectLinks />
          <p className="mt-10 text-sm opacity-45">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>
    </main>
  );
}
