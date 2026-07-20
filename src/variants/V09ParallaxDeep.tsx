"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";

const CHAPTERS = [
  { id: "intro", title: "Deep Field", z: 0.2 },
  { id: "exp", title: "Trajectory", z: 0.5 },
  { id: "skills", title: "Spectrum", z: 0.75 },
  { id: "work", title: "Signals", z: 1 },
  { id: "comms", title: "Transmission", z: 1.2 },
];

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const midY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <main ref={containerRef} className="relative bg-[#030712]" style={{ height: `${CHAPTERS.length * 120}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ y: reduce ? 0 : bgY }} className="absolute inset-0">
          <Starfield density={250} color="#1e3a5f" speed={reduce ? 0 : 0.15} />
        </motion.div>
        <motion.div
          style={{ y: reduce ? 0 : midY }}
          className="pointer-events-none absolute inset-0 opacity-40"
        >
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-indigo-900/30 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-900/20 blur-3xl" />
        </motion.div>
        <motion.div style={{ y: reduce ? 0 : fgY }} className="pointer-events-none absolute inset-0">
          <Starfield density={40} color="#93c5fd" speed={reduce ? 0 : 0.4} className="opacity-60" />
        </motion.div>

        <div className="relative z-10 h-full overflow-y-auto px-4 py-16 sm:px-8">
          <p className="fixed left-6 top-6 text-[10px] uppercase tracking-[0.4em] text-blue-400/70">Parallax Deep · V09</p>

          {CHAPTERS.map((ch, i) => (
            <Chapter key={ch.id} index={i} progress={scrollYProgress} reduce={!!reduce} title={ch.title} z={ch.z} />
          ))}
        </div>
      </div>
    </main>
  );
}

function Chapter({
  index,
  progress,
  reduce,
  title,
  z,
}: {
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduce: boolean;
  title: string;
  z: number;
}) {
  const start = index / CHAPTERS.length;
  const end = (index + 1) / CHAPTERS.length;
  const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
  const y = useTransform(progress, [start, end], [80 * z, -40 * z]);

  const content = () => {
    if (index === 0)
      return (
        <>
          <h1 className="font-[family-name:var(--font-display)] text-5xl text-white">{cv.name}</h1>
          <p className="mt-3 text-xl text-blue-200">{cv.title}</p>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/60">{cv.summary}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            {cv.highlights.map((h) => (
              <span key={h.label} className="text-sm text-blue-300">
                {h.value} {h.label}
              </span>
            ))}
          </div>
        </>
      );
    if (index === 1)
      return (
        <ol className="space-y-8">
          {cv.experience.map((job) => (
            <li key={job.company}>
              <p className="text-xs text-blue-400">{job.period}</p>
              <h3 className="text-lg font-semibold text-white">{job.role} · {job.company}</h3>
              <p className="text-xs text-white/50">{job.place}</p>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                {job.bullets.map((b) => (
                  <li key={b.slice(0, 24)}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      );
    if (index === 2)
      return (
        <div className="space-y-4">
          {Object.entries(cv.skills).map(([k, items]) => (
            <div key={k}>
              <p className="text-[10px] uppercase tracking-widest text-blue-400">{k}</p>
              <p className="mt-1 text-sm text-white/70">{items.join(" · ")}</p>
            </div>
          ))}
        </div>
      );
    if (index === 3)
      return (
        <ul className="space-y-4">
          {cv.projects.map((p) => (
            <li key={p.name}>
              <a href={p.url} target="_blank" rel="noreferrer" className="text-blue-300 hover:underline">
                {p.name}
              </a>
              <p className="text-sm text-white/55">{p.blurb}</p>
            </li>
          ))}
        </ul>
      );
    return (
      <>
        <p className="text-sm text-white/70">{cv.education.degree} — {cv.education.school}</p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <a href={`mailto:${cv.email}`} className="text-blue-300">{cv.email}</a>
          <span>{cv.phone}</span>
          <span>{cv.location}</span>
          <a href={cv.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={cv.github} target="_blank" rel="noreferrer">GitHub</a>
          <Link href="/goals" className="text-blue-400">100 Goals</Link>
        </div>
      </>
    );
  };

  if (reduce) {
    return (
      <section className="mb-24 rounded-2xl border border-blue-500/20 bg-black/50 p-8">
        <h2 className="mb-6 text-xs uppercase tracking-widest text-blue-400">{title}</h2>
        {content()}
      </section>
    );
  }

  return (
    <motion.section style={{ opacity, y }} className="mb-[40vh] min-h-[50vh] rounded-2xl border border-blue-500/15 bg-[#0a1628]/80 p-8 backdrop-blur">
      <h2 className="mb-6 text-xs uppercase tracking-widest text-blue-400">{title}</h2>
      {content()}
    </motion.section>
  );
}
