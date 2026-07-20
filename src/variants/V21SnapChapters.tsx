"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

/** Snap Chapters */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  const chapters = [
    { title: cv.name, body: cv.title },
    { title: "Signal", body: cv.summary },
    ...cv.experience.map(j=>({ title: j.company, body: j.bullets[0] })),
    { title: "Skills", body: Object.values(cv.skills).flat().slice(0,12).join(" · ") },
  ];
  return (
    <main className="h-[100svh] snap-y snap-mandatory overflow-y-auto bg-[#030712]">
      <Starfield density={120} color="#c4b5fd" speed={0.08} />
      {chapters.map((c,i)=>(
        <section key={c.title+i} className="relative z-10 flex h-[100svh] snap-start flex-col justify-center px-8">
          <p className="text-xs tracking-[0.35em] text-white/40">{String(i+1).padStart(2,"0")}</p>
          <h2 className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-4xl sm:text-6xl">{c.title}</h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">{c.body}</p>
          {i===chapters.length-1 && <div className="mt-10 max-w-3xl"><ProjectLinks /><ContactRow className="mt-8" /></div>}
        </section>
      ))}
    </main>
  );
}
