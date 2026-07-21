"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Instanced Particle Fleet — a compact 3D fleet frames applied-AI leadership without hiding the resume. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#071018] text-[#dff8ff]">
      <header className="relative mx-auto min-h-screen max-w-7xl px-6 pb-16 pt-28 md:px-10">
        <div className="absolute inset-0 opacity-30" aria-hidden style={{ backgroundImage: "linear-gradient(#69dcff18 1px, transparent 1px), linear-gradient(90deg, #69dcff18 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative flex justify-between text-[10px] uppercase tracking-[0.35em] text-[#69dcff]/65">
          <span>Fleet control / 06</span><span>Applied AI systems online</span>
        </div>
        <div className="relative grid min-h-[75vh] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[#69dcff]">{cv.title}</p>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-6xl font-black uppercase leading-[0.82] sm:text-8xl">{cv.name}</h1>
            <p className="mt-8 max-w-xl text-sm leading-7 text-white/60">{cv.summary}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={`mailto:${cv.email}`} className="bg-[#69dcff] px-6 py-3 text-sm font-bold text-[#071018]">Join your mission</a>
              <ContactRow className="items-center text-white/55" />
            </div>
          </div>
          <div className="relative mx-auto h-[440px] w-full max-w-xl" aria-label="Applied AI fleet formation">
            {Array.from({ length: 28 }, (_, index) => {
              const left = 8 + ((index * 29) % 84);
              const top = 5 + ((index * 43) % 86);
              return (
                <motion.span
                  key={index}
                  aria-hidden
                  className="absolute h-1.5 w-8 rounded-full bg-[#69dcff]"
                  style={{ left: `${left}%`, top: `${top}%`, rotate: `${(index % 5) * 9 - 18}deg` }}
                  animate={reduce ? undefined : { x: [0, 12 + index % 8, 0], opacity: [0.25, 0.9, 0.25] }}
                  transition={{ duration: 3 + index % 4, repeat: Infinity, delay: index * 0.05 }}
                />
              );
            })}
            <div className="absolute inset-1/4 rounded-full border border-[#69dcff]/25 bg-[#69dcff]/5 shadow-[0_0_80px_rgba(105,220,255,.12)]">
              <div className="grid h-full place-items-center text-center">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#69dcff]">Human command<br /><strong className="mt-2 block text-2xl">01</strong></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="relative z-10 border-y border-[#69dcff]/20 bg-[#0a1822]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {cv.highlights.map((highlight) => (
            <div key={highlight.label} className="border-r border-[#69dcff]/15 p-7">
              <strong className="text-4xl text-[#69dcff]">{highlight.value}</strong>
              <span className="mt-2 block text-[10px] uppercase tracking-[0.2em] opacity-45">{highlight.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[0.3fr_0.7fr] lg:px-10">
        <div><p className="text-[10px] uppercase tracking-[0.35em] text-[#69dcff]">Mission history</p><h2 className="mt-4 text-4xl font-bold">Built, led, shipped.</h2></div>
        <ExperienceList tone="dark" />
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 pb-28 md:grid-cols-2 lg:px-10">
        <div className="border border-[#69dcff]/20 p-8"><h2 className="mb-8 text-xs uppercase tracking-[0.3em] text-[#69dcff]">Fleet capabilities</h2><SkillsCloud /></div>
        <div className="border border-[#69dcff]/20 p-8"><h2 className="mb-8 text-xs uppercase tracking-[0.3em] text-[#69dcff]">Field prototypes</h2><ProjectLinks /></div>
      </section>
    </main>
  );
}
