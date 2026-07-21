"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hybrid Warp Recruiter — steals warp depth + recruiter-speed CTAs */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const focus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300";

  return (
    <main className="overflow-hidden bg-[#02070c] text-white [perspective:900px]">
      <header className="relative grid min-h-screen place-items-center p-8 text-center">
        <div
          className="absolute inset-0 bg-[repeating-radial-gradient(ellipse_at_center,transparent_0_28px,#1e6b89_30px_31px)] opacity-30"
          aria-hidden
        />
        <div
          className={`relative max-w-5xl ${reduce ? "" : "[transform:translateZ(70px)] transition-transform duration-700 hover:[transform:translateZ(100px)]"}`}
        >
          <p className="uppercase tracking-[0.5em] text-cyan-300">{cv.title}</p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="my-8 text-7xl font-black md:text-9xl"
          >
            {cv.name}
          </motion.h1>
          <p className="mx-auto max-w-3xl text-xl text-slate-300">{cv.summary}</p>
          <ContactRow className="mt-8 justify-center" />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className={`rounded-full bg-cyan-300 px-6 py-3 font-bold text-black ${focus}`}
            >
              Recruit me
            </a>
            <a
              href={cv.github}
              target="_blank"
              rel="noreferrer"
              className={`rounded-full border px-6 py-3 ${focus}`}
            >
              View code
            </a>
            <Link href="/resume" className={`rounded-full border px-6 py-3 ${focus}`}>
              Printable resume
            </Link>
          </div>
        </div>
      </header>
      <section className="mx-auto max-w-6xl p-8 py-20">
        <div className="grid gap-5 md:grid-cols-4">
          {cv.highlights.map((item) => (
            <div key={item.label} className="rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-6">
              <strong className="text-4xl text-cyan-300">{item.value}</strong>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
        <h2 className="my-14 text-4xl font-black">Experience trajectory</h2>
        <ExperienceList tone="dark" />
      </section>
      <section className="grid gap-12 border-t border-white/10 p-8 md:grid-cols-2 md:p-16">
        <div>
          <h2 className="mb-8 text-3xl font-black">Capability stack</h2>
          <SkillsCloud />
        </div>
        <div>
          <h2 className="mb-8 text-3xl font-black">Shipped work</h2>
          <ProjectLinks />
          <p className="mt-12 text-slate-400">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>
    </main>
  );
}
