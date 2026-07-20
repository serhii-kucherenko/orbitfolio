"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      setCursor({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white">
      <Starfield density={22} color="#f8fafc" speed={0.012} interactive={false} />
      {!reduce && (
        <div
          className="pointer-events-none fixed z-20 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_24px_#fff]"
          style={{ left: `${cursor.x}%`, top: `${cursor.y}%` }}
          aria-hidden
        />
      )}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-8 pt-24">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 0.35 }}
          className="text-[10px] uppercase tracking-[0.5em]"
        >
          void
        </motion.p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          className="mt-8 font-[family-name:var(--font-serif)] text-5xl font-normal tracking-tight sm:text-7xl"
        >
          {cv.name}
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="mt-10 text-sm text-white/35"
        >
          {cv.title}
        </motion.p>
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1.2 }}
          className="mt-14 max-w-md text-sm leading-9 text-white/50"
        >
          {cv.summary}
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-16 flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.25em] text-white/25"
        >
          {cv.highlights.slice(0, 3).map((h) => (
            <span key={h.label}>
              <span className="text-white/45">{h.value}</span> {h.label}
            </span>
          ))}
        </motion.div>
      </div>
      <section className="relative z-10 mx-auto max-w-2xl space-y-24 px-8 pb-32">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-white/40" />
      </section>
    </main>
  );
}
