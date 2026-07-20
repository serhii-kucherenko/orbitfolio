"use client";

import { cv } from "@/data/cv";
import { ContactRow, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

export function Variant() {
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
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-sky-400">
          SHEET 01 / REV C / ENGINEER
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl uppercase tracking-wide">
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
        <div className="mt-12 grid gap-4 border border-sky-400/30 p-4 md:grid-cols-2">
          {cv.experience.map((j) => (
            <div key={j.company} className="border border-sky-400/20 p-4">
              <p className="font-[family-name:var(--font-mono)] text-[10px] text-sky-400">{j.period}</p>
              <h3 className="mt-1 text-lg">{j.company}</h3>
              <p className="text-sm text-sky-100/60">{j.role}</p>
              <p className="mt-2 text-xs text-sky-100/50">{j.bullets[0]}</p>
              {j.bullets[1] && <p className="mt-1 text-xs text-sky-100/40">{j.bullets[1]}</p>}
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
      </div>
    </main>
  );
}
