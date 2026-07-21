"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Code Rain Archive — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020403] font-[family-name:var(--font-mono)] text-[#7CFFB2]">
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
        {Array.from({ length: 20 }, (_, i) => (
          <motion.span key={i} className="absolute text-[10px] leading-3" style={{ left: `${i * 5}%`, top: "-10%" }} animate={reduce ? undefined : { y: ["0vh", "110vh"] }} transition={{ duration: 6 + (i % 5), repeat: Infinity, ease: "linear", delay: i * 0.2 }}>
            {["01", "AI", "RAG", "<>", "fn"][i % 5]}
          </motion.span>
        ))}
      </div>
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-xs opacity-70">$ archive --resume</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-white sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-lg text-[#9AE6B4]">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7">{cv.summary}</p>
      </section>
      <section className="relative z-10 mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-[#9AE6B4]" /></section>
    </main>
  );
}
