"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

/** ASCII Orbit */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  const art = `
      .  *  .  ★  .
   .    SERHII    .
 *   KUCHERENKO   *
   .   ◯———◯   .
      *  .  *
`;
  return (
    <main className="min-h-screen bg-[#001405] px-4 pb-24 pt-28 font-[family-name:var(--font-mono)] text-[#3dff7a]">
      <pre className="mx-auto max-w-3xl overflow-x-auto text-[10px] leading-tight sm:text-xs">{art}</pre>
      <div className="mx-auto mt-8 max-w-3xl">
        <h1 className="text-2xl text-white sm:text-4xl">{cv.name}</h1>
        <p className="mt-2">{cv.title}</p>
        <p className="mt-6 text-sm leading-relaxed text-[#3dff7a]/80">{cv.summary}</p>
        <pre className="mt-10 whitespace-pre-wrap text-xs leading-6">{cv.experience.map(j=>`[${j.period}]\n${j.role} @ ${j.company}\n${j.bullets.map(b=>"  * "+b).join("\n")}`).join("\n\n")}</pre>
        <div className="mt-10 text-sm"><SkillsCloud /><div className="mt-8"><ProjectLinks /><ContactRow className="mt-6 text-[#3dff7a]" /></div></div>
      </div>
    </main>
  );
}
