"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cv } from "@/data/cv";
import { goals } from "@/data/goals";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const ring = goals.slice(0, 36);
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0c0a09] text-amber-50">
      <Starfield density={160} color="#fbbf24" speed={0.08} />
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-5xl flex-col items-center justify-center px-6 pt-28">
        <div className="relative flex h-[min(70vw,420px)] w-[min(70vw,420px)] items-center justify-center">
          {ring.map((g, i) => {
            const a = (i / ring.length) * Math.PI * 2;
            const r = 48;
            return (
              <span key={g.id} title={g.title} className="absolute h-2 w-2 rounded-full bg-amber-300" style={{ left: `${50 + Math.cos(a) * r}%`, top: `${50 + Math.sin(a) * r}%` }} />
            );
          })}
          <motion.div initial={reduce?false:{scale:0.9,opacity:0}} animate={{scale:1,opacity:1}} className="text-center">
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl">{cv.name}</h1>
            <p className="mt-3 text-amber-100/70">{cv.title}</p>
            <Link href="/goals" className="mt-6 inline-block text-sm text-amber-300 underline underline-offset-4">Explore all 100 goals →</Link>
          </motion.div>
        </div>
        <p className="mt-10 max-w-2xl text-center text-sm text-white/55">{cv.summary}</p>
      </div>
      <section className="relative z-10 mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow />
      </section>
    </main>
  );
}
