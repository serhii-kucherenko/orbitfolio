"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1a0533] text-white">
      <div
        className="absolute inset-x-0 bottom-0 h-[55vh]"
        style={{
          background:
            "linear-gradient(transparent,#ff006e33), repeating-linear-gradient(to right, transparent 0 39px, #ff006e55 39px 40px), repeating-linear-gradient(to top, transparent 0 39px, #00f5d455 39px 40px)",
          transform: "perspective(500px) rotateX(58deg)",
          transformOrigin: "bottom",
        }}
      />
      <Starfield density={100} color="#ff9eee" speed={0.12} />
      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-28 pt-28">
        <motion.h1
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-[family-name:var(--font-display)] text-5xl tracking-tight sm:text-7xl"
          style={{
            WebkitTextStroke: "1px #ff9eee",
            color: "transparent",
            textShadow: "0 0 30px #ff006e",
          }}
        >
          {cv.name}
        </motion.h1>
        <p className="mt-4 text-lg text-pink-200">{cv.title}</p>
        <p className="mt-6 max-w-xl text-sm text-white/65">{cv.summary}</p>
        <div className="mt-10 overflow-hidden rounded-xl border border-fuchsia-400/30 bg-black/40">
          <div className="flex animate-[marquee_28s_linear_infinite] gap-8 whitespace-nowrap py-2 font-[family-name:var(--font-mono)] text-xs text-fuchsia-200/80">
            {[...cv.skills.ai, ...cv.skills.backend].map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
        <section className="mt-16">
          <ExperienceList tone="dark" />
        </section>
        <section className="mt-16">
          <SkillsCloud />
          <div className="mt-10">
            <ProjectLinks />
            <ContactRow className="mt-8" />
          </div>
        </section>
      </div>
    </main>
  );
}
