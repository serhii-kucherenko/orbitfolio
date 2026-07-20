"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";

const FOCUSES = [
  { id: "hero", label: "Primary", r: 280 },
  { id: "exp", label: "Trajectory", r: 220 },
  { id: "skills", label: "Spectrum", r: 200 },
  { id: "work", label: "Signals", r: 180 },
] as const;

type FocusId = (typeof FOCUSES)[number]["id"];

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [focus, setFocus] = useState<FocusId>("hero");
  const [ring, setRing] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setRing((r) => (r + 1) % 360), 50);
    return () => clearInterval(id);
  }, [reduce]);

  const current = FOCUSES.find((f) => f.id === focus)!;

  return (
    <main ref={containerRef} className="relative min-h-screen overflow-hidden bg-[#030508] text-white">
      <Starfield density={300} color="#94a3b8" speed={0.02} />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-16">
        <p className="text-center text-xs uppercase tracking-[0.4em] text-slate-500">telescope · v39</p>

        <div className="relative mx-auto mt-10 flex aspect-square max-h-[min(80vh,640px)] w-full max-w-[640px] items-center justify-center">
          {!reduce && (
            <>
              <motion.div
                className="pointer-events-none absolute rounded-full border border-cyan-400/30"
                style={{ width: current.r * 2, height: current.r * 2 }}
                animate={{ rotate: ring }}
                transition={{ duration: 0 }}
              />
              <motion.div
                className="pointer-events-none absolute rounded-full border border-dashed border-cyan-400/20"
                style={{ width: current.r * 2 + 40, height: current.r * 2 + 40 }}
                animate={{ rotate: -ring * 0.5 }}
                transition={{ duration: 0 }}
              />
            </>
          )}

          <div
            className="relative overflow-hidden rounded-full border-2 border-cyan-400/50 bg-black/80 shadow-[0_0_80px_rgba(34,211,238,0.15)]"
            style={{ width: current.r * 2, height: current.r * 2 }}
          >
            <motion.div
              key={focus}
              initial={reduce ? false : { opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex h-full w-full flex-col items-center justify-center p-8 text-center"
            >
              {focus === "hero" && (
                <>
                  <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl">{cv.name}</h1>
                  <p className="mt-2 text-sm text-cyan-200/80">{cv.title}</p>
                  <p className="mt-4 max-w-xs text-xs leading-relaxed text-white/70">{cv.summary.slice(0, 180)}…</p>
                </>
              )}
              {focus === "exp" && (
                <div className="max-h-full overflow-y-auto text-left text-xs">
                  <ExperienceList tone="dark" />
                </div>
              )}
              {focus === "skills" && (
                <div className="max-h-full overflow-y-auto text-left text-xs">
                  <SkillsCloud tone="dark" />
                </div>
              )}
              {focus === "work" && (
                <div className="max-h-full overflow-y-auto text-left text-xs">
                  <ProjectLinks tone="dark" />
                  <ContactRow className="mt-4 justify-center" />
                </div>
              )}
            </motion.div>
          </div>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-full w-px bg-cyan-400/20" />
            <div className="absolute h-px w-full bg-cyan-400/20" />
          </div>
        </div>

        <nav className="mt-10 flex flex-wrap justify-center gap-3">
          {FOCUSES.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFocus(f.id)}
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-wider transition ${
                focus === f.id
                  ? "border-cyan-400 bg-cyan-400/10 text-cyan-200"
                  : "border-white/20 text-white/50 hover:border-white/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </nav>
      </div>
    </main>
  );
}
