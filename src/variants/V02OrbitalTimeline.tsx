"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";

const ORBITS = cv.experience.map((job, i) => ({
  ...job,
  radius: 72 + i * 28,
  speed: 18 + i * 6,
  angle: (i / cv.experience.length) * Math.PI * 2,
  hue: ["#38bdf8", "#22d3ee", "#2dd4bf", "#34d399"][i % 4],
}));

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [active, setActive] = useState(0);
  const job = ORBITS[active];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      <Starfield density={160} color="#7dd3fc" speed={reduce ? 0 : 0.12} />
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl gap-8 px-4 py-16 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <section className="flex flex-col justify-center">
          <p className="text-[10px] uppercase tracking-[0.45em] text-sky-400">Orbital Timeline · V02</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">{cv.name}</h1>
          <p className="mt-2 text-lg text-sky-200/80">{cv.title}</p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">{cv.summary}</p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {cv.highlights.map((h) => (
              <div key={h.label} className="rounded-lg border border-sky-500/20 bg-sky-950/40 px-3 py-2">
                <p className="font-[family-name:var(--font-display)] text-lg text-sky-300">{h.value}</p>
                <p className="text-[9px] uppercase tracking-wider text-white/40">{h.label}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="relative flex min-h-[420px] items-center justify-center">
          <svg viewBox="0 0 400 400" className="h-full w-full max-h-[480px]">
            <defs>
              <radialGradient id="coreGlow">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
              </radialGradient>
            </defs>
            {ORBITS.map((o) => (
              <circle key={o.company} cx="200" cy="200" r={o.radius} fill="none" stroke="rgba(125,211,252,0.15)" strokeWidth="1" strokeDasharray="4 6" />
            ))}
            <circle cx="200" cy="200" r="36" fill="url(#coreGlow)" />
            <text x="200" y="196" textAnchor="middle" fill="white" fontSize="9" fontWeight="600">
              {cv.name.split(" ")[0]}
            </text>
            <text x="200" y="210" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="7">
              CORE
            </text>
            {ORBITS.map((o, i) => (
                <motion.g
                  key={o.company}
                  animate={reduce ? {} : { rotate: 360 }}
                  transition={{ duration: o.speed, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "200px 200px" }}
                  className="cursor-pointer"
                  onClick={() => setActive(i)}
                >
                  <motion.circle
                    cx={200 + o.radius}
                    cy={160}
                    r={active === i ? 14 : 10}
                    fill={o.hue}
                    opacity={active === i ? 1 : 0.75}
                    animate={active === i && !reduce ? { r: [10, 14, 10] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <text x={200 + o.radius} y={182} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="6">
                    {o.company.split(" ")[0]}
                  </text>
                </motion.g>
              ))}
          </svg>
        </div>

        <motion.article
          key={job.company}
          initial={reduce ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 rounded-2xl border border-sky-500/20 bg-black/40 p-6 backdrop-blur sm:p-8"
        >
          <p className="text-xs uppercase tracking-widest text-sky-400">{job.period}</p>
          <h2 className="mt-2 text-2xl font-semibold">
            {job.role} · {job.company}
          </h2>
          <p className="mt-1 text-sm text-white/50">{job.place}</p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/80">
            {job.bullets.map((b) => (
              <li key={b.slice(0, 30)} className="pl-4 before:content-['◆'] before:absolute before:-ml-4 before:text-sky-400">
                {b}
              </li>
            ))}
          </ul>
        </motion.article>

        <section className="lg:col-span-2 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-widest text-sky-400">Skills orbit</h3>
            {Object.entries(cv.skills).map(([k, items]) => (
              <div key={k} className="mb-4">
                <p className="mb-2 text-[10px] uppercase tracking-wider text-white/40">{k}</p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((s) => (
                    <span key={s} className="rounded border border-sky-500/20 px-2 py-0.5 text-[10px] text-white/70">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-widest text-sky-400">Projects</h3>
            <ul className="space-y-3">
              {cv.projects.map((p) => (
                <li key={p.name}>
                  <a href={p.url} target="_blank" rel="noreferrer" className="text-sky-300 hover:underline">
                    {p.name}
                  </a>
                  <p className="text-xs text-white/50">{p.blurb}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-white/40">
              {cv.education.degree} — {cv.education.school}
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs">
              <a href={`mailto:${cv.email}`}>{cv.email}</a>
              <a href={cv.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={cv.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <Link href="/goals" className="text-sky-400">
                100 Goals
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
