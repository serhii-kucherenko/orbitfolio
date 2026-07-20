"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";

const PLANETS = cv.experience.map((job, i) => ({
  ...job,
  orbit: 90 + i * 35,
  size: 14 - i * 1.5,
  color: ["#fbbf24", "#f97316", "#ef4444", "#eab308"][i % 4],
  period: 8 + i * 4,
}));

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [active, setActive] = useState(0);
  const job = PLANETS[active];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1c0a00] text-[#fef3c7]">
      <Starfield density={150} color="#fcd34d" speed={reduce ? 0 : 0.06} />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-[10px] uppercase tracking-[0.45em] text-amber-500">Solar Career · V27</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl">{cv.name}</h1>
          <p className="mt-2 text-amber-200/80">{cv.title}</p>
          <p className="mt-6 text-sm leading-relaxed text-amber-100/60">{cv.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {cv.highlights.map((h) => (
              <span key={h.label} className="rounded-full border border-amber-500/30 px-3 py-1 text-xs">
                {h.value} {h.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex aspect-square items-center justify-center">
          <svg viewBox="0 0 320 320" className="h-full w-full max-h-[360px]">
            <defs>
              <radialGradient id="sunCore">
                <stop offset="0%" stopColor="#fde68a" />
                <stop offset="70%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </radialGradient>
            </defs>
            {!reduce &&
              [...Array(8)].map((_, i) => (
                <motion.line
                  key={i}
                  x1="160"
                  y1="160"
                  x2={160 + Math.cos((i / 8) * Math.PI * 2) * 200}
                  y2={160 + Math.sin((i / 8) * Math.PI * 2) * 200}
                  stroke="rgba(251,191,36,0.08)"
                  strokeWidth="1"
                  animate={{ opacity: [0.05, 0.15, 0.05] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            <circle cx="160" cy="160" r="42" fill="url(#sunCore)" />
            <text x="160" y="158" textAnchor="middle" fill="#78350f" fontSize="8" fontWeight="700">
              CORE
            </text>
            <text x="160" y="170" textAnchor="middle" fill="#78350f" fontSize="6">
              {cv.name.split(" ")[0]}
            </text>
            {PLANETS.map((p, i) => (
              <motion.g
                key={p.company}
                animate={reduce ? {} : { rotate: 360 }}
                transition={{ duration: p.period, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "160px 160px" }}
              >
                <circle cx="160" cy="160" r={p.orbit} fill="none" stroke="rgba(251,191,36,0.12)" strokeWidth="0.5" />
                <g className="cursor-pointer" onClick={() => setActive(i)}>
                  <circle cx={160 + p.orbit} cy="160" r={p.size / 2} fill={p.color} opacity={active === i ? 1 : 0.7} />
                </g>
              </motion.g>
            ))}
          </svg>
        </div>

        <motion.article
          key={job.company}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:col-span-2 rounded-2xl border border-amber-500/20 bg-black/30 p-6"
        >
          <p className="text-xs text-amber-500">{job.period}</p>
          <h2 className="text-xl font-semibold">{job.role} · {job.company}</h2>
          <p className="text-sm text-amber-200/50">{job.place}</p>
          <ul className="mt-4 space-y-2 text-sm text-amber-100/70">
            {job.bullets.map((b) => (
              <li key={b.slice(0, 24)}>{b}</li>
            ))}
          </ul>
        </motion.article>

        <section className="lg:col-span-2 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-amber-500">Skills</h3>
            {Object.entries(cv.skills).map(([k, items]) => (
              <p key={k} className="mt-3 text-sm">
                <span className="text-amber-400">{k}: </span>
                {items.join(", ")}
              </p>
            ))}
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest text-amber-500">Projects & contact</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {cv.projects.map((p) => (
                <li key={p.name}>
                  <a href={p.url} target="_blank" rel="noreferrer" className="text-amber-300 hover:underline">{p.name}</a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs">{cv.education.degree} — {cv.education.school}</p>
            <div className="mt-3 flex flex-wrap gap-3 text-xs">
              <a href={`mailto:${cv.email}`}>{cv.email}</a>
              <a href={cv.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={cv.github} target="_blank" rel="noreferrer">GitHub</a>
              <Link href="/goals" className="text-amber-400">100 Goals</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
