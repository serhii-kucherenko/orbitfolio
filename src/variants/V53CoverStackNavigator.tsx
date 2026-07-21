"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

const covers = [
  { id: "identity", title: "Identity", hue: "#1d4ed8" },
  { id: "proof", title: "Proof", hue: "#0f766e" },
  { id: "roles", title: "Roles", hue: "#9a3412" },
  { id: "craft", title: "Craft", hue: "#6b21a8" },
] as const;

/** Cover Stack Navigator — stacked section covers, complete flow below. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#111113] text-zinc-100">
      <header className="mx-auto max-w-5xl px-6 pb-8 pt-24">
        <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">Stack · navigate by cover</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-lg text-zinc-400">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400/80">{cv.summary}</p>
        <a
          href={`mailto:${cv.email}`}
          className="mt-8 inline-block rounded-sm bg-white px-5 py-2.5 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Request the full stack
        </a>
      </header>

      <section className="relative mx-auto h-[280px] max-w-5xl px-6 sm:h-[320px]">
        {covers.map((cover, i) => (
          <motion.a
            key={cover.id}
            href={`#${cover.id}`}
            initial={reduce ? false : { y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: reduce ? 0 : i * 0.1, type: "spring", stiffness: 120 }}
            className="absolute left-6 right-6 flex h-44 items-end rounded-2xl border border-white/10 px-6 pb-6 shadow-2xl sm:left-[10%] sm:right-auto sm:w-[70%]"
            style={{
              background: `linear-gradient(145deg, ${cover.hue}, #0a0a0b)`,
              top: 12 + i * 36,
              zIndex: covers.length - i,
              transform: reduce ? undefined : `rotate(${(i - 1.5) * 1.2}deg)`,
            }}
          >
            <span className="text-2xl font-semibold tracking-tight">{cover.title}</span>
          </motion.a>
        ))}
      </section>

      <section id="identity" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-16">
        <h2 className="mb-6 text-2xl font-semibold">Identity</h2>
        <div className="grid gap-3 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="border border-white/10 bg-white/[0.03] px-4 py-5">
              <p className="text-2xl font-bold">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-4xl scroll-mt-24 px-6 pb-16">
        <h2 className="mb-6 text-2xl font-semibold">Proof · roles</h2>
        <ExperienceList tone="dark" />
      </section>

      <section id="roles" className="mx-auto max-w-4xl scroll-mt-24 px-6 pb-16">
        <h2 className="mb-6 text-2xl font-semibold">Craft</h2>
        <SkillsCloud />
      </section>

      <section id="craft" className="mx-auto max-w-4xl scroll-mt-24 space-y-10 px-6 pb-28">
        <h2 className="text-2xl font-semibold">Editions</h2>
        <ProjectLinks />
        <ContactRow className="text-zinc-400" />
        <p className="text-xs text-zinc-600">
          {cv.education.degree} · {cv.education.school}
        </p>
      </section>
    </main>
  );
}
