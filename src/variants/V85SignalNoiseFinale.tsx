"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Signal Noise Finale — split composition: chaotic noise left, clean signal strip right */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen md:grid md:grid-cols-[0.9fr_1.1fr] overflow-x-hidden" style={{ color: "#0f172a" }}>
      <aside
        className="relative flex min-h-[40vh] flex-col justify-end overflow-hidden p-8 md:min-h-screen md:sticky md:top-0 md:p-12"
        style={{
          background: "#0b1020",
          color: "#94a3b8",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
          }}
        />
        {!reduce && (
          <motion.div
            aria-hidden
            className="absolute inset-x-0 h-1 bg-[#22d3ee]/40"
            animate={{ top: ["10%", "90%", "10%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        )}
        <div className="relative z-10">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] text-[#22d3ee]">
            noise floor
          </p>
          <p className="mt-4 max-w-xs font-[family-name:var(--font-mono)] text-xs leading-6 opacity-70">
            Everything else is interference. The right panel is the lock.
          </p>
        </div>
      </aside>

      <div className="bg-[#f1f5f9] px-6 py-16 md:px-12 md:py-24">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#0e7490]">
          Signal · locked · {cv.location}
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold leading-none sm:text-6xl">
          {cv.name}
        </h1>
        <p className="mt-3 text-[#0e7490]">{cv.title}</p>
        <p className="mt-6 max-w-xl text-sm leading-7 opacity-70">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${cv.email}`}
            className="px-5 py-2.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e7490]"
            style={{ background: "#0e7490", color: "#f1f5f9" }}
          >
            Amplify this signal
          </a>
          <a
            href="/resume"
            className="border border-[#0e7490]/50 px-5 py-2.5 text-sm text-[#0e7490] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e7490]"
          >
            Clean cut / resume
          </a>
          <ContactRow />
        </div>

        <div className="mt-12 space-y-3">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: reduce ? 0 : 0.08 * i, duration: 0.5 }}
              className="origin-left flex items-center justify-between border-l-4 py-3 pl-4"
              style={{
                borderColor: "#0e7490",
                background: `rgba(14, 116, 144, ${0.04 + i * 0.03})`,
              }}
            >
              <span className="text-xs uppercase tracking-wider opacity-50">{h.label}</span>
              <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-[#0e7490]">
                {h.value}
              </span>
            </motion.div>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="mb-8 text-3xl font-bold">Decoded career</h2>
          <ExperienceList tone="light" />
        </section>

        <section className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-bold">Bandwidth</h2>
            <SkillsCloud tone="light" />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold">Broadcasts</h2>
            <ProjectLinks tone="light" />
            <p className="mt-8 text-sm opacity-50">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </section>
      </div>
          <footer className="mx-auto max-w-5xl px-6 pb-12 text-sm leading-7 opacity-50">
        Signal/noise finale clears the channel — Lab depth floor · 118 keeps the hire path open.
      </footer>
</main>
  );
}
