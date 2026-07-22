"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { useGsapReveal } from "@/components/useGsapReveal";
import { cv } from "@/data/cv";

/** Origami Evidence Fold — CSS perspective folds; GSAP reveals the folded timeline. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const foldRef = useRef<HTMLElement>(null);
  useGsapReveal(foldRef, reduce);

  return (
    <main
      className="min-h-screen bg-[#e0ebe4] text-[#14201a]"
      style={{ perspective: reduce ? undefined : 1200 }}
    >
      <section className="mx-auto max-w-5xl px-6 pb-6 pt-24">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] text-teal-800/55">
          Origami · evidence folds · GSAP · {cv.location}
        </p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, rotateX: -10 }}
          animate={{ opacity: 1, rotateX: 0 }}
          className="mt-3 font-[family-name:var(--font-display)] text-5xl font-extrabold tracking-tight sm:text-6xl"
        >
          {cv.name}
        </motion.h1>
        <p className="mt-3 text-lg text-emerald-950/55">{cv.title}</p>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-emerald-950/55">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${cv.email}`}
            className="bg-[#0f766e] px-5 py-2.5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f766e]"
          >
            Unfold a hire chat
          </a>
          <a
            href="/resume"
            className="border border-[#0f766e]/40 px-5 py-2.5 text-sm font-semibold text-[#0f766e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f766e]"
          >
            Flat fold PDF
          </a>
          <ContactRow className="text-emerald-900/65" />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {cv.highlights.map((h, i) => {
            const folds = [
              "bg-[#0f766e] text-white shadow-[4px_4px_0_0_#99f6e4]",
              "bg-white text-[#14201a] shadow-[4px_4px_0_0_#86efac] ring-1 ring-emerald-200",
              "bg-[#9f1239] text-white shadow-[4px_4px_0_0_#fecdd3]",
              "bg-[#d9f99d] text-[#14201a] shadow-[4px_4px_0_0_#65a30d]",
            ];
            return (
              <motion.div
                key={h.label}
                initial={reduce ? false : { opacity: 0, y: 16, rotateY: i % 2 === 0 ? -8 : 8 }}
                whileInView={{ opacity: 1, y: 0, rotateY: reduce ? 0 : i % 2 === 0 ? -4 : 4 }}
                viewport={{ once: true }}
                transition={{ delay: reduce ? 0 : 0.05 * i }}
                className={`p-6 ${folds[i % folds.length]} ${reduce ? "" : "transition-transform hover:[transform:rotateY(0deg)]"}`}
              >
                <p className="font-[family-name:var(--font-display)] text-4xl font-bold">{h.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] opacity-70">{h.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section ref={foldRef} className="mx-auto mt-12 max-w-5xl px-6">
        <div
          data-gsap
          className="border border-emerald-200 bg-white p-6 md:p-10"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 92%, 96% 100%, 0 100%)",
            transform: reduce ? undefined : "rotateX(2deg)",
          }}
        >
          <h2 className="mb-8 text-2xl font-bold">Folded timeline</h2>
          <ExperienceList tone="light" />
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-6 py-14 md:grid-cols-2">
        <div className="border border-emerald-200 bg-white p-6 shadow-[3px_3px_0_0_#99f6e4]">
          <h2 className="mb-6 text-xl font-bold">Paper skills</h2>
          <SkillsCloud tone="light" />
        </div>
        <div className="border border-emerald-200 bg-white p-6 shadow-[3px_3px_0_0_#86efac]">
          <h2 className="mb-6 text-xl font-bold">Creased projects</h2>
          <ProjectLinks tone="light" />
          <p className="mt-10 text-sm text-emerald-950/45">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>

      <footer className="border-t border-emerald-900/15 px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl text-sm leading-7 text-emerald-950/50">
            Folds are decoration — every crease still opens to a hire path, not a puzzle.
          </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-black/55">
          Origami folds open to proof — never a puzzle for recruiters.
        </p>
        <p className="mx-auto mt-2 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-black/35">
          Lab · depth floor · 115
        </p>
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-teal-800/45">
            Zeta · origami · proof first
          </p>
        </div>
      </footer>
    </main>
  );
}
