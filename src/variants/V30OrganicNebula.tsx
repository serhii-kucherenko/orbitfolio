"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";

const BLOBS = [
  "M40,20 C70,0 110,10 130,40 C150,70 140,100 110,115 C80,130 50,120 35,95 C20,70 25,40 40,20",
  "M30,30 C60,10 120,15 135,50 C150,85 120,120 80,125 C40,130 15,95 20,60 C25,40 30,30 30,30",
  "M25,25 C55,5 115,20 140,55 C155,85 125,130 75,128 C35,126 10,85 18,50 C22,35 25,25 25,25",
  "M35,15 C75,-5 125,25 138,60 C148,88 115,128 70,122 C30,116 12,78 22,48 C28,32 35,15 35,15",
  "M20,35 C50,8 105,12 132,45 C152,72 128,118 82,120 C42,122 8,88 15,55 C18,42 20,35 20,35",
];

const SECTIONS = [
  { id: "hero", label: "Nucleus" },
  { id: "exp", label: "Growth rings" },
  { id: "skills", label: "Membrane" },
  { id: "work", label: "Spores" },
  { id: "contact", label: "Signal" },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [section, setSection] = useState<SectionId>("hero");
  const blobIdx = SECTIONS.findIndex((s) => s.id === section);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#031a14] text-[#d1fae5]">
      <Starfield density={70} color="#6ee7b7" speed={reduce ? 0 : 0.04} />

      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-30" viewBox="0 0 160 160" preserveAspectRatio="xMidYMid slice">
        <motion.path
          d={BLOBS[blobIdx % BLOBS.length]}
          fill="rgba(16,185,129,0.15)"
          animate={reduce ? {} : { d: BLOBS[(blobIdx + 1) % BLOBS.length] }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <motion.path
          d={BLOBS[(blobIdx + 2) % BLOBS.length]}
          fill="rgba(52,211,153,0.08)"
          animate={reduce ? {} : { d: BLOBS[(blobIdx + 3) % BLOBS.length] }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ transform: "translate(20px, 30px)" }}
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 sm:px-8">
        <p className="text-[10px] uppercase tracking-[0.45em] text-emerald-400">Organic Nebula · V30</p>

        <nav className="mt-8 flex flex-wrap gap-2">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSection(s.id)}
              className={`rounded-full px-4 py-1.5 text-xs transition ${
                section === s.id ? "bg-emerald-500/30 text-emerald-100" : "text-emerald-600 hover:text-emerald-300"
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <motion.div
          key={section}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 rounded-3xl border border-emerald-500/20 bg-[#042f1a]/60 p-8 backdrop-blur-sm"
        >
          {section === "hero" && (
            <>
              <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl">{cv.name}</h1>
              <p className="mt-3 text-lg text-emerald-200/80">{cv.title}</p>
              <p className="mt-6 text-sm leading-relaxed text-emerald-100/65">{cv.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {cv.highlights.map((h) => (
                  <span key={h.label} className="rounded-2xl bg-emerald-900/40 px-3 py-2 text-xs">
                    {h.value} {h.label}
                  </span>
                ))}
              </div>
            </>
          )}

          {section === "exp" && (
            <ol className="space-y-8">
              {cv.experience.map((job) => (
                <li key={job.company}>
                  <p className="text-[10px] text-emerald-500">{job.period}</p>
                  <h3 className="text-lg font-semibold">{job.role} · {job.company}</h3>
                  <p className="text-xs text-emerald-300/50">{job.place}</p>
                  <ul className="mt-3 space-y-2 text-sm text-emerald-100/70">
                    {job.bullets.map((b) => (
                      <li key={b.slice(0, 24)}>{b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          )}

          {section === "skills" && (
            <div className="space-y-5">
              {Object.entries(cv.skills).map(([k, items]) => (
                <div key={k}>
                  <p className="text-[10px] uppercase tracking-widest text-emerald-400">{k}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {items.map((s) => (
                      <span key={s} className="rounded-full border border-emerald-500/25 px-3 py-1 text-xs">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {section === "work" && (
            <ul className="space-y-4">
              {cv.projects.map((p) => (
                <li key={p.name}>
                  <a href={p.url} target="_blank" rel="noreferrer" className="text-emerald-300 hover:underline">
                    {p.name}
                  </a>
                  <p className="text-sm text-emerald-100/55">{p.blurb}</p>
                </li>
              ))}
              <li>
                <Link href="/goals" className="text-emerald-300 hover:underline">
                  100 Goals
                </Link>
              </li>
            </ul>
          )}

          {section === "contact" && (
            <>
              <p className="text-sm">{cv.education.degree}</p>
              <p className="text-emerald-300/60">{cv.education.school}</p>
              <div className="mt-6 space-y-2 text-sm">
                <a href={`mailto:${cv.email}`}>{cv.email}</a>
                <p>{cv.phone}</p>
                <p>{cv.location}</p>
                <div className="flex gap-4 pt-2">
                  <a href={cv.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href={cv.github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </main>
  );
}
