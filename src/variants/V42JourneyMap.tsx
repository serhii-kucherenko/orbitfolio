"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";

const STOPS = [
  { city: "Kyiv", country: "Ukraine", year: "2015–2020", role: "Founding Engineer", detail: cv.education.school, x: 82, y: 38 },
  { city: "Geneva", country: "Switzerland", year: "2020–2022", role: cv.experience[2].company, detail: "World Economic Forum", x: 48, y: 42 },
  { city: "Italy", country: "Remote", year: "2022–2024", role: cv.experience[1].company, detail: "85% load cut", x: 52, y: 48 },
  { city: "San Francisco", country: "USA", year: "2024–2026", role: cv.experience[0].company, detail: "YC · Healthcare AI", x: 18, y: 45 },
  { city: "Vancouver", country: "Canada", year: "Now", role: cv.title, detail: cv.location, x: 16, y: 32 },
];

export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a1628] text-[#e2e8f0]">
      <Starfield density={100} color="#38bdf8" speed={0.04} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-20">
        <p className="text-xs uppercase tracking-[0.4em] text-sky-400">journey map · v42</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-sky-200/80">{cv.title}</p>

        <div className="relative mx-auto mt-16 aspect-[16/9] max-w-4xl rounded-2xl border border-sky-400/20 bg-[#0d1f35]/80 p-4 backdrop-blur">
          <svg viewBox="0 0 100 60" className="h-full w-full">
            <defs>
              <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="50%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
            <motion.path
              d={`M ${STOPS.map((s) => `${s.x} ${s.y}`).join(" L ")}`}
              fill="none"
              stroke="url(#pathGrad)"
              strokeWidth="0.4"
              strokeDasharray="1 1"
              initial={reduce ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />
            {STOPS.map((stop, i) => (
              <g key={stop.city}>
                <motion.circle
                  cx={stop.x}
                  cy={stop.y}
                  r={i === STOPS.length - 1 ? 1.8 : 1.2}
                  fill={i === STOPS.length - 1 ? "#34d399" : "#38bdf8"}
                  initial={reduce ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                />
                <text x={stop.x} y={stop.y - 3} textAnchor="middle" fontSize="2.5" fill="#94a3b8">
                  {stop.city}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {STOPS.map((stop, i) => (
            <motion.div
              key={stop.city}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-sky-400/15 bg-sky-950/40 p-4"
            >
              <p className="text-[10px] uppercase tracking-wider text-sky-400">{stop.year}</p>
              <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg">{stop.city}</h3>
              <p className="text-xs text-sky-200/60">{stop.country}</p>
              <p className="mt-2 text-sm font-medium">{stop.role}</p>
              <p className="mt-1 text-xs text-white/50">{stop.detail}</p>
            </motion.div>
          ))}
        </div>

        <section className="mt-16 grid gap-12 lg:grid-cols-2">
          <SkillsCloud tone="dark" />
          <div>
            <ProjectLinks tone="dark" />
            <ContactRow className="mt-8" />
          </div>
        </section>
      </div>
    </main>
  );
}
