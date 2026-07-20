"use client";

import { useState } from "react";
import { cv } from "@/data/cv";
import { ContactRow, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

export function Variant() {
  const [rev] = useState("REV C");
  return (
    <main
      className="min-h-screen bg-[#0a1628] text-sky-100"
      style={{
        backgroundImage:
          "linear-gradient(rgba(56,189,248,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.07) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      <div className="mx-auto max-w-5xl px-6 pb-28 pt-28">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sky-400/30 pb-4 font-[family-name:var(--font-mono)] text-xs tracking-widest text-sky-400">
          <span>SHEET 01 / {rev} / ENGINEER</span>
          <span className="text-sky-500/70">SCALE 1:1 · VANCOUVER</span>
        </div>
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl uppercase tracking-wide">
          {cv.name}
        </h1>
        <p className="mt-3 inline-block border border-sky-400/40 px-3 py-1 text-sm">{cv.title}</p>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-sky-100/70">{cv.summary}</p>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="border border-sky-400/30 p-3 text-center">
              <p className="font-[family-name:var(--font-mono)] text-lg text-sky-300">{h.value}</p>
              <p className="text-[10px] uppercase tracking-wider text-sky-100/40">{h.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 font-[family-name:var(--font-mono)] text-[10px] text-sky-500">DETAIL CALL-OUTS — EXPERIENCE</p>
        <div className="mt-3 grid gap-4 border border-sky-400/30 p-4 md:grid-cols-2">
          {cv.experience.map((j, i) => (
            <div key={j.company} className="relative border border-sky-400/20 p-4">
              <span className="absolute -left-2 -top-2 bg-[#0a1628] px-1 font-[family-name:var(--font-mono)] text-[10px] text-sky-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-[family-name:var(--font-mono)] text-[10px] text-sky-400">{j.period}</p>
              <h3 className="mt-1 text-lg">{j.company}</h3>
              <p className="text-sm text-sky-100/60">{j.role}</p>
              <ul className="mt-2 space-y-1 text-xs text-sky-100/50">
                {j.bullets.map((b) => (
                  <li key={b.slice(0, 28)}>— {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <SkillsCloud />
          <div className="mt-8">
            <ProjectLinks />
            <ContactRow className="mt-8 text-sky-200" />
          </div>
        </div>
        <p className="mt-16 font-[family-name:var(--font-mono)] text-[10px] text-sky-700">
          END OF SHEET — DO NOT SCALE · {cv.email}
        </p>
      </div>
    </main>
  );
}
