"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

/** Galaxy Rail */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="relative min-h-screen bg-[#07041a] text-white">
      <Starfield density={180} color="#e9d5ff" speed={0.2} />
      <div className="relative z-10 pt-28">
        <div className="px-6">
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-6xl">{cv.name}</h1>
          <p className="mt-3 text-violet-200/70">{cv.title} — scroll sideways through the career rail</p>
          <p className="mt-6 max-w-xl text-sm text-white/55">{cv.summary}</p>
        </div>
        <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8">
          {cv.experience.map((job)=>(
            <article key={job.company} className="w-[min(85vw,420px)] shrink-0 snap-center rounded-3xl border border-fuchsia-300/20 bg-fuchsia-950/20 p-6 backdrop-blur">
              <p className="text-xs text-fuchsia-200/60">{job.period}</p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl">{job.company}</h2>
              <p className="mt-1 text-sm text-white/70">{job.role}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/60">{job.bullets.map(b=><li key={b.slice(0,20)}>{b}</li>)}</ul>
            </article>
          ))}
          <article className="w-[min(85vw,420px)] shrink-0 snap-center rounded-3xl border border-white/15 bg-white/5 p-6"><h2 className="font-[family-name:var(--font-display)] text-2xl">Skills</h2><div className="mt-4"><SkillsCloud /></div></article>
          <article className="w-[min(85vw,420px)] shrink-0 snap-center rounded-3xl border border-white/15 bg-white/5 p-6"><h2 className="font-[family-name:var(--font-display)] text-2xl">Projects</h2><div className="mt-4"><ProjectLinks /><ContactRow className="mt-8" /></div></article>
        </div>
      </div>
    </main>
  );
}
