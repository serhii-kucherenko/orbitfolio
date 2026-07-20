"use client";

import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";
import { cv } from "@/data/cv";
import { ContactRow, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const banner = useMemo(
    () => `
╔══════════════════════════════════════╗
║  ORBITFOLIO :: ASCII ORBIT     v1.0  ║
╠══════════════════════════════════════╣
║           .  ★  .                    ║
║       .  SERHII  .                   ║
║     ★  KUCHERENKO  ★                 ║
║       .   ◯———◯   .                  ║
║          *  .  *                     ║
╚══════════════════════════════════════╝
`.trim(),
    [],
  );

  const log = cv.experience
    .map(
      (j) =>
        `[${j.period}]\n${j.role} @ ${j.company}\n${j.bullets.map((b) => `  * ${b}`).join("\n")}`,
    )
    .join("\n\n");

  return (
    <main className="min-h-screen bg-[#001405] px-4 pb-24 pt-28 font-[family-name:var(--font-mono)] text-[#3dff7a]">
      <div className="mx-auto max-w-3xl">
        <pre
          className={`overflow-x-auto text-[9px] leading-tight text-[#3dff7a] sm:text-[11px] ${reduce ? "" : "animate-[pulse_4s_ease-in-out_infinite]"}`}
        >
          {banner}
        </pre>
        <h1 className="mt-8 text-2xl text-white sm:text-4xl">{cv.name}</h1>
        <p className="mt-2 text-[#7CFFB2]">{cv.title}</p>
        <p className="mt-6 text-sm leading-relaxed text-[#3dff7a]/80">{cv.summary}</p>
        <p className="mt-10 text-xs text-[#3dff7a]/50">$ cat ~/career.log</p>
        <pre className="mt-3 whitespace-pre-wrap rounded border border-[#3dff7a]/25 bg-black/40 p-4 text-xs leading-6">
          {log}
        </pre>
        <div className="mt-10 text-sm">
          <SkillsCloud />
          <div className="mt-8">
            <ProjectLinks />
            <ContactRow className="mt-6 text-[#3dff7a]" />
          </div>
        </div>
      </div>
    </main>
  );
}
