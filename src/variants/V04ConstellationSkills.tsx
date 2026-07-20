"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";

const ALL_SKILLS = Object.entries(cv.skills).flatMap(([group, items]) =>
  items.map((skill, i) => ({ skill, group, id: `${group}-${i}` })),
);

function seed(i: number) {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [selected, setSelected] = useState<string[]>([]);
  const stars = useMemo(
    () =>
      ALL_SKILLS.map((s, i) => ({
        ...s,
        x: 10 + seed(i) * 80,
        y: 8 + seed(i + 100) * 84,
        r: 2 + (seed(i + 200) * 2.5),
      })),
    [],
  );

  const toggle = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id].slice(-4)));
  };

  const lines = useMemo(() => {
    const out: { x1: number; y1: number; x2: number; y2: number }[] = [];
    for (let i = 0; i < selected.length - 1; i++) {
      const a = stars.find((s) => s.id === selected[i]);
      const b = stars.find((s) => s.id === selected[i + 1]);
      if (a && b) out.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y });
    }
    return out;
  }, [selected, stars]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050a14] text-[#e2e8f0]">
      <Starfield density={140} color="#fbbf24" speed={reduce ? 0 : 0.05} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-8">
        <header className="mb-10 max-w-xl">
          <p className="text-[10px] uppercase tracking-[0.45em] text-amber-400/80">Constellation Skills · V04</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl">{cv.name}</h1>
          <p className="mt-2 text-amber-100/70">{cv.title}</p>
          <p className="mt-4 text-sm leading-relaxed text-white/55">{cv.summary}</p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative aspect-[4/3] rounded-2xl border border-amber-500/15 bg-[#0a1220]/80">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
              {lines.map((l, i) => (
                <motion.line
                  key={i}
                  x1={l.x1}
                  y1={l.y1}
                  x2={l.x2}
                  y2={l.y2}
                  stroke="#fbbf24"
                  strokeWidth="0.3"
                  initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                />
              ))}
              {stars.map((s) => (
                <g key={s.id} className="cursor-pointer" onClick={() => toggle(s.id)}>
                  <circle
                    cx={s.x}
                    cy={s.y}
                    r={selected.includes(s.id) ? s.r + 1.5 : s.r}
                    fill={selected.includes(s.id) ? "#fde68a" : "#fbbf24"}
                    opacity={selected.includes(s.id) ? 1 : 0.65}
                  />
                  {selected.includes(s.id) && (
                    <text x={s.x} y={s.y - s.r - 2} textAnchor="middle" fontSize="2.5" fill="#fde68a">
                      {s.skill.slice(0, 12)}
                    </text>
                  )}
                </g>
              ))}
            </svg>
            <p className="absolute bottom-3 left-4 text-[10px] text-white/35">Click stars to trace skill constellations (up to 4)</p>
          </div>

          <aside className="space-y-8">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-amber-400">Experience</h2>
              <ol className="mt-4 space-y-6">
                {cv.experience.map((job) => (
                  <li key={job.company}>
                    <p className="text-[10px] text-white/40">{job.period}</p>
                    <p className="font-medium">{job.role}</p>
                    <p className="text-xs text-amber-200/60">{job.company}</p>
                    <ul className="mt-2 space-y-1 text-xs text-white/60">
                      {job.bullets.map((b) => (
                        <li key={b.slice(0, 24)}>· {b}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-widest text-amber-400">Projects</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {cv.projects.map((p) => (
                  <li key={p.name}>
                    <a href={p.url} target="_blank" rel="noreferrer" className="text-amber-300 hover:underline">
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              {cv.highlights.map((h) => (
                <span key={h.label} className="rounded border border-amber-500/20 px-2 py-1 text-[10px]">
                  {h.value} {h.label}
                </span>
              ))}
            </div>
            <p className="text-xs text-white/45">
              {cv.education.degree} — {cv.education.school}
            </p>
            <div className="flex flex-wrap gap-3 text-xs">
              <a href={`mailto:${cv.email}`}>{cv.email}</a>
              <a href={cv.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={cv.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <Link href="/goals" className="text-amber-400">
                100 Goals
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
