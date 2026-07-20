"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";

const SECTORS = [
  { id: "hero", label: "α Centauri", ra: "14h 39m", dec: "−60° 50′", section: "hero" },
  { id: "exp", label: "Vega", ra: "18h 37m", dec: "+38° 47′", section: "experience" },
  { id: "skills", label: "Polaris", ra: "02h 31m", dec: "+89° 15′", section: "skills" },
  { id: "work", label: "Sirius", ra: "06h 45m", dec: "−16° 43′", section: "projects" },
  { id: "comms", label: "Antares", ra: "16h 29m", dec: "−26° 26′", section: "contact" },
] as const;

type SectorId = (typeof SECTORS)[number]["id"];

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [active, setActive] = useState<SectorId>("hero");
  const stars = useMemo(
    () =>
      Array.from({ length: 48 }, (_, i) => ({
        x: 8 + ((i * 37) % 84),
        y: 6 + ((i * 53) % 88),
        mag: 0.4 + (i % 5) * 0.15,
      })),
    [],
  );

  const panel = SECTORS.find((s) => s.id === active)!;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050810] font-[family-name:var(--font-mono)] text-[#b8c4d4]">
      <Starfield density={80} color="#6b8aad" speed={0.02} />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(107,138,173,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(107,138,173,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl lg:grid-cols-[280px_1fr]">
        <aside className="border-b border-[#6b8aad]/20 p-6 lg:border-b-0 lg:border-r">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#6b8aad]">nav chart · v31</p>
          <p className="mt-2 text-xs text-[#6b8aad]/70">epoch J2026.0 · Vancouver LST</p>

          <svg viewBox="0 0 100 100" className="mx-auto mt-8 aspect-square w-full max-w-[220px]">
            <circle cx="50" cy="50" r="46" fill="none" stroke="#6b8aad" strokeWidth="0.3" opacity="0.4" />
            <circle cx="50" cy="50" r="32" fill="none" stroke="#6b8aad" strokeWidth="0.2" strokeDasharray="2 3" opacity="0.3" />
            <line x1="50" y1="4" x2="50" y2="96" stroke="#6b8aad" strokeWidth="0.2" opacity="0.25" />
            <line x1="4" y1="50" x2="96" y2="50" stroke="#6b8aad" strokeWidth="0.2" opacity="0.25" />
            {stars.map((s, i) => (
              <circle key={i} cx={s.x} cy={s.y} r={s.mag} fill="#c8d6e8" opacity={0.5 + s.mag * 0.3} />
            ))}
            {SECTORS.map((s, i) => {
              const angle = (i / SECTORS.length) * Math.PI * 2 - Math.PI / 2;
              const cx = 50 + Math.cos(angle) * 34;
              const cy = 50 + Math.sin(angle) * 34;
              return (
                <g key={s.id} className="cursor-pointer" onClick={() => setActive(s.id)}>
                  <circle cx={cx} cy={cy} r={active === s.id ? 3.5 : 2.2} fill={active === s.id ? "#e8f0ff" : "#6b8aad"} />
                  <text x={cx} y={cy - 5} textAnchor="middle" fontSize="3" fill="#6b8aad">
                    {s.label.slice(0, 3)}
                  </text>
                </g>
              );
            })}
          </svg>

          <nav className="mt-8 space-y-1">
            {SECTORS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(s.id)}
                className={`flex w-full items-center justify-between border px-3 py-2 text-left text-xs transition ${
                  active === s.id
                    ? "border-[#e8f0ff]/40 bg-[#6b8aad]/10 text-[#e8f0ff]"
                    : "border-transparent text-[#6b8aad]/80 hover:border-[#6b8aad]/30"
                }`}
              >
                <span>{s.label}</span>
                <span className="opacity-50">{s.ra}</span>
              </button>
            ))}
          </nav>
        </aside>

        <section className="p-6 pb-24 pt-10 lg:p-10">
          <motion.div
            key={panel.id}
            initial={reduce ? false : { opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex flex-wrap gap-4 text-[10px] uppercase tracking-[0.3em] text-[#6b8aad]">
              <span>target: {panel.label}</span>
              <span>ra {panel.ra}</span>
              <span>dec {panel.dec}</span>
            </div>

            {panel.section === "hero" && (
              <>
                <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl tracking-tight text-[#e8f0ff] sm:text-6xl">
                  {cv.name}
                </h1>
                <p className="mt-3 text-lg text-[#b8c4d4]/90">{cv.title}</p>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#b8c4d4]/70">{cv.summary}</p>
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {cv.highlights.map((h) => (
                    <div key={h.label} className="border border-[#6b8aad]/25 p-3">
                      <p className="text-xl text-[#e8f0ff]">{h.value}</p>
                      <p className="text-[10px] uppercase tracking-wider opacity-50">{h.label}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {panel.section === "experience" && (
              <>
                <h2 className="mt-4 text-sm uppercase tracking-[0.3em] text-[#6b8aad]">trajectory log</h2>
                <div className="mt-6"><ExperienceList tone="dark" /></div>
              </>
            )}

            {panel.section === "skills" && (
              <>
                <h2 className="mt-4 text-sm uppercase tracking-[0.3em] text-[#6b8aad]">instrument payload</h2>
                <div className="mt-6"><SkillsCloud tone="dark" /></div>
              </>
            )}

            {panel.section === "projects" && (
              <>
                <h2 className="mt-4 text-sm uppercase tracking-[0.3em] text-[#6b8aad]">observed signals</h2>
                <div className="mt-6"><ProjectLinks tone="dark" /></div>
              </>
            )}

            {panel.section === "contact" && (
              <>
                <h2 className="mt-4 text-sm uppercase tracking-[0.3em] text-[#6b8aad]">open channel</h2>
                <div className="mt-6"><ContactRow className="text-[#b8c4d4]" /></div>
              </>
            )}
          </motion.div>
        </section>
      </div>
    </main>
  );
}
