"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Final Edition Portfolio — closing editorial: newspaper authority + recruiter-speed nav. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#12100c] text-[#e8e0d4]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#c4a574]/30 px-6 py-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[#c4a574]/70 md:px-12">
        <span>Final edition</span>
        <a
          href="#record"
          className="hover:text-[#c4a574] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4a574]"
        >
          Record
        </a>
        <a
          href="#skills"
          className="hover:text-[#c4a574] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4a574]"
        >
          Skills
        </a>
        <a
          href="#archive"
          className="hover:text-[#c4a574] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4a574]"
        >
          Archive
        </a>
        <a
          href="/resume"
          className="hover:text-[#c4a574] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4a574]"
        >
          PDF
        </a>
        <a
          href={`mailto:${cv.email}`}
          className="hover:text-[#c4a574] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4a574]"
        >
          Hire desk
        </a>
      </div>

      <header className="relative overflow-hidden border-b border-[#c4a574]/40 px-6 py-16 md:px-12">
        <motion.div
          aria-hidden
          initial={reduce ? false : { rotate: -14, opacity: 0, scale: 0.9 }}
          animate={{ rotate: -12, opacity: 0.95, scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="pointer-events-none absolute right-6 top-8 border-4 border-[#ef4444] px-4 py-2 font-[family-name:var(--font-display)] text-3xl font-black uppercase tracking-widest text-[#ef4444] md:right-14 md:text-5xl"
        >
          Last
        </motion.div>
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#c4a574]">
          Presses stop at midnight · {cv.location}
        </p>
        <h1 className="mt-6 max-w-4xl font-[family-name:var(--font-serif)] text-5xl leading-[0.95] sm:text-7xl">
          {cv.name}
        </h1>
        <p className="mt-4 text-lg text-[#c4a574]">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-8 text-[#e8e0d4]/70">{cv.summary}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${cv.email}`}
            className="bg-[#c4a574] px-5 py-2.5 text-sm font-bold text-[#12100c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4a574]"
          >
            Hold the presses — hire
          </a>
          <a
            href="/resume"
            className="border border-[#c4a574]/50 px-5 py-2.5 text-sm font-bold text-[#c4a574] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4a574]"
          >
            Print edition
          </a>
          <ContactRow className="text-[#e8e0d4]/55" />
        </div>
      </header>

      <section className="mx-auto grid max-w-5xl grid-cols-2 gap-px bg-[#c4a574]/30 md:grid-cols-4">
        {cv.highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: reduce ? 0 : i * 0.05 }}
            className="bg-[#12100c] px-5 py-8"
          >
            <p className="font-[family-name:var(--font-serif)] text-3xl text-[#c4a574]">{h.value}</p>
            <p className="mt-1 text-[10px] uppercase tracking-wider opacity-45">{h.label}</p>
          </motion.div>
        ))}
      </section>

      <section id="record" className="mx-auto max-w-5xl scroll-mt-8 px-6 py-20 md:px-12">
        <h2 className="mb-2 font-[family-name:var(--font-serif)] text-4xl italic">What remains in print</h2>
        <p className="mb-10 text-xs uppercase tracking-[0.25em] text-[#c4a574]/70">Career copy · uncut</p>
        <ExperienceList tone="dark" />
      </section>

      <section className="mx-auto grid max-w-5xl gap-14 border-t border-[#c4a574]/30 px-6 py-16 md:grid-cols-2 md:px-12">
        <div id="skills" className="scroll-mt-8">
          <h2 className="mb-6 text-xl font-semibold text-[#c4a574]">Typeset skills</h2>
          <SkillsCloud />
        </div>
        <div id="archive" className="scroll-mt-8">
          <h2 className="mb-6 text-xl font-semibold text-[#c4a574]">Archive links</h2>
          <ProjectLinks />
          <p className="mt-12 font-[family-name:var(--font-serif)] text-sm italic opacity-50">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>
    </main>
  );
}
