"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Oversized Proof Type — metrics and name trade scale on a disciplined vertical sheet. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [first, ...rest] = cv.name.split(" ");
  const accent = "#0f766e";

  return (
    <main className="min-h-screen bg-[#eef0f4] text-[#0a0c10]">
      <header className="border-b-4 border-[#0a0c10] px-4 py-10 md:px-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em]">
            Proof sheet · type only · {cv.location}
          </p>
          <ContactRow className="text-[#0a0c10]/65" />
        </div>
        <motion.h1
          className="mt-8 font-[family-name:var(--font-display)] text-[13vw] font-black uppercase leading-[0.78] tracking-tighter"
          initial={reduce ? false : { letterSpacing: "0.08em", opacity: 0.35 }}
          animate={{ letterSpacing: "-0.045em", opacity: 1 }}
          transition={{ duration: reduce ? 0 : 1 }}
        >
          {first}
        </motion.h1>
        <p
          className="mt-1 font-[family-name:var(--font-display)] text-[9vw] font-black uppercase leading-[0.8] tracking-tighter"
          style={{ color: accent }}
        >
          {rest.join(" ")}
        </p>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xl font-semibold">{cv.title}</p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-black/60">{cv.summary}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/resume"
              className="border-4 border-[#0a0c10] px-8 py-4 text-xs font-black uppercase tracking-widest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a0c10]"
            >
              Print sheet
            </a>
            <a
              href={`mailto:${cv.email}`}
              className="px-8 py-4 text-xs font-black uppercase tracking-widest text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ background: accent, outlineColor: accent }}
            >
              Hire the proof
            </a>
          </div>
        </div>
      </header>

      <section className="grid border-b-4 border-[#0a0c10] sm:grid-cols-2 lg:grid-cols-4">
        {cv.highlights.map((h, i) => (
          <motion.div
            key={h.label}
            className="border-b-4 border-[#0a0c10] p-6 last:border-b-0 sm:border-b-0 sm:border-r-4 sm:last:border-r-0"
            initial={reduce ? false : { y: 36, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: reduce ? 0 : i * 0.07 }}
          >
            <p
              className="font-[family-name:var(--font-display)] text-6xl font-black leading-none sm:text-7xl"
              style={{ color: accent }}
            >
              {h.value}
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-black/45">{h.label}</p>
          </motion.div>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-[family-name:var(--font-display)] text-5xl font-black uppercase">Evidence</h2>
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-black/40">
            Name ↔ metrics trade scale
          </p>
        </div>
        <ExperienceList tone="light" />
        <div className="mt-20 grid gap-14 border-t-4 border-[#0a0c10] pt-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-black uppercase">Toolkit</h2>
            <SkillsCloud tone="light" />
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-black uppercase">Lab</h2>
            <ProjectLinks tone="light" />
            <p className="mt-10 text-sm text-black/45">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
    
      <footer className="border-t border-black/10 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-[#0a0c10]/55">
          Oversized type is a hero signal; the resume body must survive the scale.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-[#0a0c10]/45">
          Scale for impact, keep the email and experience rail at human size.
        </p>
        <p className="mx-auto mt-3 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[#0a0c10]/35">
          Gamma · kinetic · craft depth
        </p>
      </footer>
        <p className="mx-auto mt-2 max-w-5xl text-sm leading-7 text-[#0a0c10]/40">
          Lab depth floor · 118 — oversized type cannot thin the hire path.
        </p>
</main>
  );
}
