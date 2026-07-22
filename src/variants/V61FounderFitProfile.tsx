"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { SmoothScroll } from "@/components/SmoothScroll";
import { cv } from "@/data/cv";

/** Founder Fit Profile — pitch-deck clarity with Lenis for founding-role scans. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const fitChecks = [
    "Owns architecture through production",
    "Ships AI features that survive contact with users",
    "Leads small teams without losing the keyboard",
    "YC / healthcare / fintech scar tissue",
  ];

  return (
    <SmoothScroll>
    <main className="min-h-screen bg-[#070709] text-zinc-100">
      <section className="relative overflow-hidden border-b border-zinc-800">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-[#a3e635]/15 blur-3xl"
          animate={reduce ? undefined : { opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-24">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#a3e635]">
            Founder fit · {cv.location} · open to founding seats
          </p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-5 font-[family-name:var(--font-display)] text-5xl font-extrabold leading-[0.95] sm:text-7xl"
          >
            {cv.name}
          </motion.h1>
          <p className="mt-4 text-xl text-zinc-400">{cv.title}</p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400">{cv.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${cv.email}`}
              className="bg-[#a3e635] px-6 py-3 text-sm font-bold text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a3e635]"
            >
              Start a founder conversation
            </a>
            <a
              href="/resume"
              className="border border-[#a3e635]/50 px-6 py-3 text-sm font-bold text-[#a3e635] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a3e635]"
            >
              Pitch deck PDF
            </a>
            <ContactRow className="items-center text-zinc-400" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[#a3e635]">
          Fit checklist
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {fitChecks.map((item, i) => (
            <motion.li
              key={item}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.05 * i }}
              className="flex gap-3 border border-zinc-800 bg-zinc-950/80 p-4 text-sm"
            >
              <span className="font-bold text-[#a3e635]">✓</span>
              {item}
            </motion.li>
          ))}
        </ul>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="border border-zinc-800 p-4">
              <p className="text-3xl font-bold text-[#a3e635]">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-16 px-6 pb-24">
        <div>
          <h2 className="mb-8 text-2xl font-bold">Proof of founding pace</h2>
          <ExperienceList tone="dark" />
        </div>
        <div className="grid gap-12 border-t border-zinc-800 pt-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-bold">Weapons</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold">Side builds</h2>
            <ProjectLinks />
            <p className="mt-10 text-sm text-zinc-500">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
      <section data-hire-proof className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-300/80">Who</p>
            <p className="mt-2 font-semibold">{cv.name}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-300/80">What</p>
            <p className="mt-2 font-semibold">{cv.title}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-300/80">Proof</p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              0-to-1 ownership and AI delivery for a recruiter scan in under ten seconds.
            </p>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-5xl text-xs uppercase tracking-wider text-zinc-600">
          who / what / proof · founder fit 61
        </p>
      </section>
    </main>
    </SmoothScroll>
  );
}
