"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Origami Evidence Fold — CSS perspective folds for chapters without hiding proof. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#eef3f0] text-[#14201a]" style={{ perspective: reduce ? undefined : 1200 }}>
      <section className="mx-auto max-w-5xl px-6 pb-6 pt-24">
        <p className="text-[10px] uppercase tracking-[0.35em] text-teal-800/55">Origami · evidence folds</p>
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
            className="rounded-lg bg-[#0f766e] px-5 py-2.5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f766e]"
          >
            Unfold a hire chat
          </a>
          <ContactRow className="text-emerald-900/65" />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {cv.highlights.map((h, i) => {
            const folds = [
              "bg-[#0f766e] text-white shadow-[8px_8px_0_0_#99f6e4]",
              "bg-white text-[#14201a] shadow-[8px_8px_0_0_#86efac] ring-1 ring-emerald-200",
              "bg-[#be123c] text-white shadow-[8px_8px_0_0_#fecdd3]",
              "bg-[#d9f99d] text-[#14201a] shadow-[8px_8px_0_0_#65a30d]",
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

      <section className="mx-auto mt-12 max-w-5xl px-6">
        <div
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
        <div className="border border-emerald-200 bg-white p-6 shadow-[6px_6px_0_0_#99f6e4]">
          <h2 className="mb-6 text-xl font-bold">Paper skills</h2>
          <SkillsCloud tone="light" />
        </div>
        <div className="border border-emerald-200 bg-white p-6 shadow-[6px_6px_0_0_#86efac]">
          <h2 className="mb-6 text-xl font-bold">Creased projects</h2>
          <ProjectLinks tone="light" />
          <p className="mt-10 text-sm text-emerald-950/45">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>
    </main>
  );
}
