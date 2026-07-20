"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

/** Blueprint Eng */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#0a1628] text-sky-100" style={{backgroundImage:"linear-gradient(rgba(56,189,248,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.07) 1px, transparent 1px)", backgroundSize:"32px 32px"}}>
      <div className="mx-auto max-w-5xl px-6 pb-28 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-sky-400">SHEET 01 / REV C / ENGINEER</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl uppercase tracking-wide">{cv.name}</h1>
        <p className="mt-3 border border-sky-400/40 px-3 py-1 inline-block text-sm">{cv.title}</p>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-sky-100/70">{cv.summary}</p>
        <div className="mt-12 grid gap-4 border border-sky-400/30 p-4 md:grid-cols-2">
          {cv.experience.map(j=>(
            <div key={j.company} className="border border-sky-400/20 p-4">
              <p className="font-[family-name:var(--font-mono)] text-[10px] text-sky-400">{j.period}</p>
              <h3 className="mt-1 text-lg">{j.company}</h3>
              <p className="text-sm text-sky-100/60">{j.role}</p>
              <p className="mt-2 text-xs text-sky-100/50">{j.bullets[0]}</p>
            </div>
          ))}
        </div>
        <div className="mt-12"><SkillsCloud /><div className="mt-8"><ProjectLinks /><ContactRow className="mt-8 text-sky-200" /></div></div>
      </div>
    </main>
  );
}
