"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { SmoothScroll } from "@/components/SmoothScroll";
import { cv } from "@/data/cv";

/** Bilingual Signal — split-channel EN / UA masthead with Lenis for dual-rail reading. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <SmoothScroll>
    <main className="min-h-screen bg-[#050d18] text-[#e8f0ff]">
      <header className="relative grid min-h-[70vh] md:grid-cols-2">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 z-10 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#7dd3fc]/50 to-transparent md:block"
          animate={reduce ? undefined : { opacity: [0.35, 0.9, 0.35] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        />
        <div className="relative flex flex-col justify-center border-b border-[#7dd3fc]/30 p-8 md:border-b-0 md:border-r md:p-12">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] text-[#7dd3fc]">
            Channel A · EN · Lenis · synced
          </p>
          <motion.h1
            initial={reduce ? false : { x: -24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="mt-6 font-[family-name:var(--font-display)] text-4xl font-bold sm:text-6xl"
          >
            {cv.name}
          </motion.h1>
          <p className="mt-4 text-[#7dd3fc]">{cv.title}</p>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/60">{cv.summary}</p>
        </div>
        <div className="relative flex flex-col justify-center bg-[#081422] p-8 md:p-12">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] text-[#fbbf24]">
            Канал Б · UA · синхрон
          </p>
          <motion.h2
            initial={reduce ? false : { x: 24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: reduce ? 0 : 0.15 }}
            className="mt-6 font-[family-name:var(--font-serif)] text-4xl italic sm:text-6xl"
          >
            Сергій Кучеренко
          </motion.h2>
          <p className="mt-4 text-[#fbbf24]">Інженер-засновник · повний стек</p>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
            Побудова продакшн-систем з AI: агенти, RAG, автоматизація — від архітектури до масштабу.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${cv.email}`}
              className="border border-[#7dd3fc] bg-[#7dd3fc] px-5 py-2.5 text-sm font-semibold text-[#050d18] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7dd3fc]"
            >
              Signal / Написати
            </a>
            <a
              href="/resume"
              className="border border-[#fbbf24]/50 px-5 py-2.5 text-sm font-semibold text-[#fbbf24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fbbf24]"
            >
              Резюме / PDF
            </a>
            <ContactRow className="text-white/55" />
          </div>
        </div>
      </header>

      <section className="grid grid-cols-2 border-y border-[#7dd3fc]/25 md:grid-cols-4">
        {cv.highlights.map((h, i) => (
          <div key={h.label} className={`px-5 py-7 ${i % 2 === 0 ? "bg-[#081422]" : ""}`}>
            <p className="text-3xl font-bold" style={{ color: i % 2 === 0 ? "#7dd3fc" : "#fbbf24" }}>
              {h.value}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-wider opacity-45">{h.label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-10">
        <h2 className="mb-10 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.35em] text-[#7dd3fc]">
          Shared timeline · спільна лінія
        </h2>
        <ExperienceList tone="dark" />
      </section>

      <section className="mx-auto grid max-w-5xl gap-14 border-t border-[#7dd3fc]/20 px-6 pb-24 pt-16 md:grid-cols-2 md:px-10">
        <div>
          <h2 className="mb-6 text-xl font-bold text-[#7dd3fc]">Skills / Навички</h2>
          <SkillsCloud />
        </div>
        <div>
          <h2 className="mb-6 text-xl font-bold text-[#fbbf24]">Projects / Проєкти</h2>
          <ProjectLinks />
          <p className="mt-10 text-sm opacity-50">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>
      <footer className="border-t border-white/15 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-white/50">
          Bilingual rhythm stays English-complete for hiring — language as cadence, not a barrier.
        </p>
        <p className="mx-auto mt-3 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[#fbbf24]/60">
          Signal · Vol. 22 · bilingual-complete · {cv.location}
        </p>
      </footer>
    
      <footer className="border-t border-white/10 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-white/45">
          Magazine gutter craft — captions and proof columns earn the whitespace.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-white/45">
          Lab floor rising — thin shells no longer pass as award craft.
        </p>
        <p className="mx-auto mt-3 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-white/30">
          Lab · depth floor · 112
        </p>
      </footer>
    </main>
    </SmoothScroll>
  );
}
