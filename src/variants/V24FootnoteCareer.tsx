"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { SmoothScroll } from "@/components/SmoothScroll";
import { cv } from "@/data/cv";

/** Footnote Career — academic monograph with Lenis for footnote-length reading. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const mark = "#1d4e89";

  return (
    <SmoothScroll>
    <main className="min-h-screen bg-[#f7f5f0] text-[#1c1917]">
      <header className="mx-auto max-w-3xl px-6 pb-8 pt-24 md:px-8">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[#57534e]">
          Monograph · §1 · Lenis · {cv.location}
        </p>
        <motion.h1
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 font-[family-name:var(--font-serif)] text-4xl leading-tight sm:text-6xl"
        >
          {cv.name}
          <sup className="ml-1 text-base" style={{ color: mark }}>
            1
          </sup>
        </motion.h1>
        <p className="mt-4 font-[family-name:var(--font-serif)] text-lg italic text-[#57534e]">
          {cv.title}
          <sup className="ml-1 not-italic text-sm" style={{ color: mark }}>
            2
          </sup>
        </p>
        <p className="mt-8 text-sm leading-8 text-[#292524]">
          {cv.summary}
          <sup style={{ color: mark }}>3</sup>
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${cv.email}`}
            className="border-b pb-0.5 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ borderColor: mark, color: mark, outlineColor: mark }}
          >
            Correspondence<sup className="ml-0.5">4</sup>
          </a>
          <a
            href="/resume"
            className="border-b border-[#57534e] pb-0.5 text-sm text-[#57534e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#57534e]"
          >
            Curriculum vitae<sup className="ml-0.5" style={{ color: mark }}>
              5
            </sup>
          </a>
          <ContactRow className="text-[#57534e]" />
        </div>
      </header>

      <section className="mx-auto max-w-3xl border-y border-[#d6d3d1] px-6 py-8 md:px-8">
        <ol className="space-y-2 font-[family-name:var(--font-serif)] text-xs leading-6 text-[#57534e]">
          <li>
            <span className="mr-2" style={{ color: mark }}>
              1.
            </span>
            Author affiliation: {cv.location}.
          </li>
          <li>
            <span className="mr-2" style={{ color: mark }}>
              2.
            </span>
            Role as stated on primary professional record.
          </li>
          <li>
            <span className="mr-2" style={{ color: mark }}>
              3.
            </span>
            Abstract compressed from full CV narrative.
          </li>
          <li>
            <span className="mr-2" style={{ color: mark }}>
              4.
            </span>
            Preferred contact: {cv.email}.
          </li>
          <li>
            <span className="mr-2" style={{ color: mark }}>
              5.
            </span>
            Printable resume available at /resume.
          </li>
        </ol>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-10 md:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <div key={h.label}>
              <p className="font-[family-name:var(--font-serif)] text-3xl">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-[#78716c]">
                {h.label}
                <sup className="ml-0.5" style={{ color: mark }}>
                  {i + 6}
                </sup>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-8 md:px-8">
        <h2 className="mb-8 font-[family-name:var(--font-serif)] text-2xl">§2 Empirical record</h2>
        <ExperienceList tone="light" />
      </section>

      <section className="mx-auto grid max-w-3xl gap-12 border-t border-[#d6d3d1] px-6 py-14 md:grid-cols-2 md:px-8">
        <div>
          <h2 className="mb-6 font-[family-name:var(--font-serif)] text-xl">§3 Methods</h2>
          <SkillsCloud tone="light" />
        </div>
        <div>
          <h2 className="mb-6 font-[family-name:var(--font-serif)] text-xl">§4 Related work</h2>
          <ProjectLinks tone="light" />
          <p className="mt-10 font-[family-name:var(--font-serif)] text-sm italic text-[#78716c]">
            {cv.education.degree} · {cv.education.school}
          </p>
        </div>
      </section>
    </main>
    </SmoothScroll>
  );
}
