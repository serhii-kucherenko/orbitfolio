"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";

const SLIDES = [
  { id: "brief", label: "Mission Brief", stamp: "EYES ONLY" },
  { id: "profile", label: "Asset Profile", stamp: "CONFIRMED" },
  { id: "ops", label: "Operational History", stamp: "VERIFIED" },
  { id: "cap", label: "Capabilities", stamp: "CLASS A" },
  { id: "intel", label: "Intel & Comms", stamp: "OPEN CHANNEL" },
] as const;

type SlideId = (typeof SLIDES)[number]["id"];

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [slide, setSlide] = useState<SlideId>("brief");

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0c0a09] text-[#fafaf9]">
      <Starfield density={60} color="#78716c" speed={reduce ? 0 : 0.03} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,53,15,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-12 sm:px-8">
        <div className="flex items-center justify-between border-b border-amber-900/40 pb-4">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.5em] text-amber-600">
            Mission Briefing · V05
          </p>
          <span className="rounded border border-red-800/60 px-2 py-0.5 font-[family-name:var(--font-mono)] text-[9px] text-red-400">
            {SLIDES.find((s) => s.id === slide)?.stamp}
          </span>
        </div>

        <nav className="mt-6 flex flex-wrap gap-2">
          {SLIDES.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSlide(s.id)}
              className={`px-3 py-1.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider transition ${
                slide === s.id ? "bg-amber-900/50 text-amber-200" : "text-stone-500 hover:text-amber-300"
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <motion.div
          key={slide}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 flex-1 rounded-lg border border-amber-900/30 bg-black/40 p-6 sm:p-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(120,53,15,0.04) 28px, rgba(120,53,15,0.04) 29px)",
          }}
        >
          {slide === "brief" && (
            <>
              <p className="font-[family-name:var(--font-mono)] text-xs text-amber-600">SUBJECT: {cv.name.toUpperCase()}</p>
              <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl uppercase tracking-wide">{cv.name}</h1>
              <p className="mt-2 text-lg text-amber-200/80">{cv.title}</p>
              <p className="mt-2 text-sm text-stone-400">{cv.location}</p>
              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-stone-300">{cv.summary}</p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {cv.highlights.map((h) => (
                  <div key={h.label} className="border border-amber-900/40 p-3 text-center">
                    <p className="text-xl font-bold text-amber-400">{h.value}</p>
                    <p className="text-[9px] uppercase text-stone-500">{h.label}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {slide === "profile" && (
            <>
              <h2 className="font-[family-name:var(--font-display)] text-2xl uppercase">Asset dossier</h2>
              <p className="mt-4 text-sm text-stone-400">Clearance: Full-stack · AI systems · Platform ownership</p>
              <p className="mt-6 text-sm leading-relaxed">{cv.summary}</p>
              <p className="mt-8 text-xs text-stone-500">
                Education: {cv.education.degree}, {cv.education.school}
              </p>
            </>
          )}

          {slide === "ops" && (
            <ol className="space-y-8">
              {cv.experience.map((job) => (
                <li key={job.company} className="border-l-2 border-amber-800/50 pl-4">
                  <p className="font-[family-name:var(--font-mono)] text-[10px] text-amber-600">{job.period}</p>
                  <h3 className="mt-1 text-lg font-semibold">
                    {job.role} — {job.company}
                  </h3>
                  <p className="text-xs text-stone-500">{job.place}</p>
                  <ul className="mt-3 space-y-2 text-sm text-stone-300">
                    {job.bullets.map((b) => (
                      <li key={b.slice(0, 30)}>[REPORT] {b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          )}

          {slide === "cap" && (
            <div className="space-y-6">
              {Object.entries(cv.skills).map(([k, items]) => (
                <div key={k}>
                  <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-amber-600">
                    {k}
                  </p>
                  <p className="mt-2 text-sm text-stone-300">{items.join(" · ")}</p>
                </div>
              ))}
            </div>
          )}

          {slide === "intel" && (
            <>
              <h2 className="text-lg uppercase tracking-wider">Open-source intel</h2>
              <ul className="mt-4 space-y-4">
                {cv.projects.map((p) => (
                  <li key={p.name}>
                    <a href={p.url} target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">
                      {p.name}
                    </a>
                    <p className="text-sm text-stone-400">{p.blurb}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4 text-sm">
                <a href={`mailto:${cv.email}`}>{cv.email}</a>
                <span>{cv.phone}</span>
                <a href={cv.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={cv.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <Link href="/goals" className="text-amber-500">
                  100 Goals →
                </Link>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </main>
  );
}
