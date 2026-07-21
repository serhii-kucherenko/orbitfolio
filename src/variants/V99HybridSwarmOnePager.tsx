"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hybrid Swarm One Pager — steals agent energy + one-page hire clarity */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const focus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300";

  return (
    <main className="relative overflow-hidden bg-[#06100d] text-white">
      <div aria-hidden className="absolute inset-0">
        {Array.from({ length: 22 }, (_, i) => (
          <motion.span
            key={i}
            className="absolute size-1.5 bg-emerald-300"
            style={{
              left: `${(i * 37) % 97}%`,
              top: `${(i * 61) % 91}%`,
            }}
            animate={reduce ? undefined : { opacity: [0.15, 0.95, 0.15], y: [0, -6, 0] }}
            transition={{ duration: 2.4 + (i % 5) * 0.3, repeat: Infinity, delay: i * 0.08 }}
          />
        ))}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(#10b98122 1px, transparent 1px), linear-gradient(90deg, #10b98122 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl p-6 md:p-12">
        <header className="grid gap-10 border-b border-emerald-300/20 py-16 md:grid-cols-[2fr_1fr]">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] text-emerald-300">
              Swarm · one page · {cv.location}
            </p>
            <p className="mt-3 text-emerald-200/80">{cv.title}</p>
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 font-[family-name:var(--font-display)] text-6xl font-black tracking-tight sm:text-7xl"
            >
              {cv.name}
            </motion.h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">{cv.summary}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`mailto:${cv.email}`}
                className={`bg-emerald-300 px-5 py-2.5 text-sm font-bold text-black ${focus}`}
              >
                Start hiring thread
              </a>
              <Link href="/resume" className={`border border-emerald-300/40 px-5 py-2.5 text-sm ${focus}`}>
                Printable resume
              </Link>
            </div>
            <ContactRow className="mt-7" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            {cv.highlights.map((item) => (
              <div key={item.label} className="border-l border-emerald-300/40 pl-4">
                <strong className="block text-4xl text-emerald-300">{item.value}</strong>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-emerald-100/50">{item.label}</p>
              </div>
            ))}
          </div>
        </header>
        <section className="py-16">
          <h2 className="mb-10 font-[family-name:var(--font-display)] text-4xl font-black">
            One-page evidence stream
          </h2>
          <ExperienceList tone="dark" />
        </section>
        <section className="grid gap-12 border-t border-emerald-300/20 py-16 md:grid-cols-2">
          <div>
            <h2 className="mb-8 text-3xl font-black">Agent toolset</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-8 text-3xl font-black">Deployed experiments</h2>
            <ProjectLinks />
            <p className="mt-12 text-slate-400">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
