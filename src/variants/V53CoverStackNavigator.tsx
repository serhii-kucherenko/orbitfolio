"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

const covers = [
  { id: "identity", title: "Identity", hue: "#1d4ed8", blurb: "Who & where" },
  { id: "proof", title: "Proof", hue: "#0f766e", blurb: "Roles & outcomes" },
  { id: "roles", title: "Craft", hue: "#9a3412", blurb: "Skills stack" },
  { id: "craft", title: "Editions", hue: "#0e7490", blurb: "Open work" },
] as const;

/** Cover Stack Navigator — stacked covers as objects; complete flow below. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#0c0c0e] text-zinc-100">
      <header className="mx-auto max-w-5xl px-6 pb-6 pt-24">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-zinc-500">
          Stack · navigate by cover · {cv.location}
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-lg text-zinc-400">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400/80">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${cv.email}`}
            className="bg-white px-5 py-2.5 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Request the full stack
          </a>
          <a
            href="/resume"
            className="border border-white/30 px-5 py-2.5 text-sm font-semibold text-zinc-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Cover PDF
          </a>
          <ContactRow className="text-zinc-500" />
        </div>
      </header>

      <section className="relative mx-auto h-[300px] max-w-5xl px-6 sm:h-[340px]">
        {covers.map((cover, i) => (
          <motion.a
            key={cover.id}
            href={`#${cover.id}`}
            initial={reduce ? false : { y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: reduce ? 0 : i * 0.1, type: "spring", stiffness: 120 }}
            className="absolute left-6 right-6 flex h-44 flex-col justify-end border border-white/10 px-6 pb-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-[10%] sm:right-auto sm:w-[70%]"
            style={{
              background: `linear-gradient(145deg, ${cover.hue}, #0a0a0b)`,
              top: 10 + i * 38,
              zIndex: covers.length - i,
              transform: reduce ? undefined : `rotate(${(i - 1.5) * 1.2}deg)`,
            }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">{cover.blurb}</span>
            <span className="mt-1 text-2xl font-semibold tracking-tight">{cover.title}</span>
          </motion.a>
        ))}
      </section>

      <section id="identity" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-16">
        <h2 className="mb-6 text-2xl font-semibold">Identity</h2>
        <div className="grid gap-6 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="border-t border-white/20 pt-4">
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
        <p className="text-xs text-zinc-600">
          {cv.education.degree} · {cv.education.school} · {cv.location}
        </p>
        <p className="mt-8 max-w-xl text-sm leading-7 text-zinc-500">
          Covers are navigation objects — each stack face lands on a complete hire section below.
        </p>
        <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600">
          Identity, proof, craft, editions — four covers, one continuous hire path. No dead ends.
        </p>
        <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600">
          Stack chrome stays secondary to the email CTA and the experience rail under each cover.
        </p>
        <p className="mt-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-zinc-600">
          Delta · cover stack · systems navigator
        </p>
      </section>
    
      <footer className="border-t border-white/10 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-white/45">
          Cover stack navigation lands on complete hire sections.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-white/45">
          Lab floor rising — thin shells no longer pass as award craft.
        </p>
        <p className="mx-auto mt-3 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-white/30">
          Lab · depth floor · 112
        </p>
      </footer>
</main>
  );
}
