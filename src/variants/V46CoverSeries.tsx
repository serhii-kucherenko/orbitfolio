"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";

const COVERS = [
  {
    id: "profile",
    masthead: "ORBIT",
    headline: cv.name,
    deck: cv.title,
    body: cv.summary,
    accent: "#0ea5e9",
  },
  {
    id: "metrics",
    masthead: "IMPACT",
    headline: "By the numbers",
    deck: cv.highlights.map((h) => `${h.value} ${h.label}`).join(" · "),
    body: cv.experience[0]?.bullets[0] ?? "",
    accent: "#14b8a6",
  },
  {
    id: "skills",
    masthead: "STACK",
    headline: "Full spectrum",
    deck: Object.keys(cv.skills).join(" / "),
    body: Object.values(cv.skills).flat().slice(0, 12).join(" · "),
    accent: "#f59e0b",
  },
  {
    id: "projects",
    masthead: "LAB",
    headline: "Open source",
    deck: cv.projects.map((p) => p.name).join(" · "),
    body: cv.projects[0]?.blurb ?? "",
    accent: "#ec4899",
  },
  {
    id: "contact",
    masthead: "SIGNAL",
    headline: "Open channel",
    deck: cv.location,
    body: `${cv.email} · ${cv.phone}`,
    accent: "#22c55e",
  },
] as const;

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [idx, setIdx] = useState(0);
  const cover = COVERS[idx];

  const next = () => setIdx((i) => (i + 1) % COVERS.length);
  const prev = () => setIdx((i) => (i - 1 + COVERS.length) % COVERS.length);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <Starfield density={60} color="#737373" speed={reduce ? 0 : 0.03} />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-4 py-16">
        <p className="mb-8 text-[10px] uppercase tracking-[0.45em] text-neutral-500">Cover Series · V46</p>

        <div className="relative h-[520px] w-full max-w-[340px]">
          <AnimatePresence mode="popLayout">
            <motion.article
              key={cover.id}
              initial={reduce ? false : { rotateY: -90, opacity: 0, z: -100 }}
              animate={{ rotateY: 0, opacity: 1, z: 0 }}
              exit={reduce ? {} : { rotateY: 90, opacity: 0, z: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col rounded-sm shadow-2xl"
              style={{
                background: `linear-gradient(160deg, ${cover.accent}22 0%, #171717 45%, #0a0a0a 100%)`,
                borderTop: `4px solid ${cover.accent}`,
                transformStyle: "preserve-3d",
              }}
            >
              <header className="flex items-center justify-between px-6 pt-6">
                <span className="font-[family-name:var(--font-display)] text-xs tracking-[0.3em]" style={{ color: cover.accent }}>
                  {cover.masthead}
                </span>
                <span className="text-[10px] text-neutral-500">
                  {idx + 1}/{COVERS.length}
                </span>
              </header>
              <div className="flex flex-1 flex-col justify-end px-6 pb-8">
                <h1 className="font-[family-name:var(--font-display)] text-3xl leading-tight">{cover.headline}</h1>
                <p className="mt-3 text-sm text-neutral-400">{cover.deck}</p>
                <p className="mt-6 text-xs leading-relaxed text-neutral-500">{cover.body}</p>
              </div>
            </motion.article>
          </AnimatePresence>

          {[1, 2].map((offset) => {
            const c = COVERS[(idx + offset) % COVERS.length];
            return (
              <div
                key={offset}
                className="pointer-events-none absolute inset-x-0 rounded-sm bg-neutral-900"
                style={{
                  top: offset * 8,
                  bottom: -offset * 8,
                  zIndex: -offset,
                  opacity: 0.5 - offset * 0.15,
                  borderTop: `2px solid ${c.accent}44`,
                }}
              />
            );
          })}
        </div>

        <div className="mt-8 flex gap-4">
          <button type="button" onClick={prev} className="rounded border border-neutral-700 px-4 py-2 text-xs hover:bg-neutral-900">
            ← Prev
          </button>
          <button type="button" onClick={next} className="rounded border border-neutral-700 px-4 py-2 text-xs hover:bg-neutral-900">
            Next →
          </button>
        </div>

        <section className="mt-16 w-full max-w-2xl space-y-10 text-sm text-neutral-400">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-neutral-500">Full experience</h2>
            <ol className="mt-4 space-y-6">
              {cv.experience.map((job) => (
                <li key={job.company}>
                  <p className="text-[10px]">{job.period}</p>
                  <p className="text-white">{job.role} · {job.company}</p>
                  <ul className="mt-1 space-y-1 text-xs">
                    {job.bullets.map((b) => (
                      <li key={b.slice(0, 20)}>{b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-widest text-neutral-500">Skills & projects</h2>
            {Object.entries(cv.skills).map(([k, items]) => (
              <p key={k} className="mt-2 text-xs">
                {k}: {items.join(", ")}
              </p>
            ))}
            <ul className="mt-4 space-y-2">
              {cv.projects.map((p) => (
                <li key={p.name}>
                  <a href={p.url} target="_blank" rel="noreferrer" className="text-neutral-300 hover:underline">{p.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <footer className="text-xs">
            <p>{cv.education.degree} — {cv.education.school}</p>
            <div className="mt-2 flex flex-wrap gap-3">
              <a href={`mailto:${cv.email}`}>{cv.email}</a>
              <a href={cv.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={cv.github} target="_blank" rel="noreferrer">GitHub</a>
              <Link href="/goals">100 Goals</Link>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
