"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cv } from "@/data/cv";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

const STAR = "·.:+*";

function makeField(seed: number, cols: number, rows: number) {
  let s = seed;
  const rand = () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
  const lines: string[] = [];
  for (let y = 0; y < rows; y++) {
    let row = "";
    for (let x = 0; x < cols; x++) {
      const n = rand();
      row += n > 0.92 ? STAR[Math.floor(rand() * STAR.length)] : " ";
    }
    lines.push(row);
  }
  return lines.join("\n");
}

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [seed, setSeed] = useState(42);
  const field = useMemo(() => makeField(seed, 72, 18), [seed]);
  const manifesto = useMemo(
    () =>
      [
        `> mission: ${cv.title}`,
        `> location: ${cv.location}`,
        `> uplink: ${cv.email}`,
        ...cv.highlights.map((h) => `> signal: ${h.value} — ${h.label}`),
      ].join("\n"),
    [],
  );

  return (
    <main className="min-h-screen bg-black text-green-400">
      <div className="mx-auto max-w-5xl px-4 pb-28 pt-24 font-[family-name:var(--font-mono)] text-xs sm:text-sm">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-green-500/30 pb-4">
          <div>
            <p className="text-green-600">ASCII ORBIT // VT100</p>
            <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl text-green-300 sm:text-5xl">
              {cv.name.toUpperCase()}
            </h1>
          </div>
          <button
            type="button"
            onClick={() => setSeed((n) => n + 17)}
            className="rounded border border-green-500/40 px-3 py-1.5 text-[11px] text-green-300 hover:bg-green-950"
          >
            reseed starfield
          </button>
        </div>

        <motion.pre
          key={seed}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 overflow-x-auto whitespace-pre leading-[1.15] text-green-500/70"
        >
          {field}
        </motion.pre>

        <pre className="mt-8 whitespace-pre-wrap border border-green-500/25 bg-green-950/20 p-4 text-green-200/90">
          {manifesto}
        </pre>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-green-100/70">{cv.summary}</p>

        <section className="mt-14 space-y-3">
          <p className="text-green-600">:: EXPERIENCE DUMP</p>
          <div className="border border-green-500/20 bg-black/60 p-4 text-green-100/80">
            <ExperienceList tone="dark" />
          </div>
        </section>

        <section className="mt-12 space-y-3">
          <p className="text-green-600">:: SKILL CONSTELLATION</p>
          <SkillsCloud />
        </section>

        <section className="mt-12 space-y-3">
          <p className="text-green-600">:: EXTERNAL LINKS</p>
          <ProjectLinks />
          <ContactRow className="mt-6 text-green-300" />
        </section>

        <p className="mt-16 text-[10px] text-green-700">EOF — transmission ends · press reseed for new noise</p>
      </div>
    </main>
  );
}
