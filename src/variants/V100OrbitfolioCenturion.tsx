"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <main className="overflow-hidden bg-[#05080d] text-white">
      <header className="relative min-h-screen p-6 md:p-12">
        <div className="absolute inset-0 bg-[repeating-radial-gradient(ellipse_at_50%_20%,transparent_0_45px,#164e63_47px_48px)] opacity-25" />
        <nav className="relative flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/15 bg-white/5 px-6 py-4 backdrop-blur-xl"><strong>ORBITFOLIO / 100</strong><ContactRow /><a href={`mailto:${cv.email}`} className="rounded-full bg-cyan-300 px-5 py-2 font-bold text-black">Let&apos;s build</a></nav>
        <div className="relative mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 md:grid-cols-[1.6fr_1fr]">
          <div><motion.p initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="uppercase tracking-[.45em] text-cyan-300">{cv.title}</motion.p><h1 className="mt-7 text-7xl font-black uppercase leading-[.78] tracking-[-.07em] md:text-[9rem]">{cv.name}</h1><p className="mt-9 max-w-3xl text-xl leading-8 text-slate-300">{cv.summary}</p><div className="mt-9 flex flex-wrap gap-4"><a href={`mailto:${cv.email}`} className="rounded-full bg-cyan-300 px-7 py-3 font-bold text-black">Start a conversation</a><a href={cv.github} className="rounded-full border border-white/30 bg-white/5 px-7 py-3 backdrop-blur">Explore GitHub</a></div></div>
          <div className={`grid grid-cols-2 gap-4 ${reduceMotion ? "" : "[transform:perspective(800px)_rotateY(-8deg)]"}`}>{cv.highlights.map((item) => <div key={item.label} className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6 backdrop-blur-xl"><strong className="text-5xl text-cyan-200">{item.value}</strong><p className="mt-2 text-sm uppercase tracking-wider">{item.label}</p></div>)}</div>
        </div>
      </header>
      <section className="border-y border-white/10 bg-white/[.03] p-6 py-20 md:p-16"><div className="mx-auto max-w-6xl"><div className="mb-12 flex items-end justify-between"><div><p className="text-cyan-300">01 / IMPACT</p><h2 className="text-5xl font-black">Career evidence</h2></div><span className="hidden text-8xl font-black text-white/5 md:block">10+</span></div><ExperienceList tone="dark" /></div></section>
      <section className="mx-auto grid max-w-7xl gap-8 p-6 py-20 md:grid-cols-[1.1fr_.9fr] md:p-12"><div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-cyan-300/10 to-transparent p-8"><p className="text-cyan-300">02 / SYSTEMS</p><h2 className="my-7 text-4xl font-black">Full-stack capability matrix</h2><SkillsCloud /></div><div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur"><p className="text-cyan-300">03 / SHIPPED</p><h2 className="my-7 text-4xl font-black">Open project constellation</h2><ProjectLinks /></div></section>
      <footer className="border-t border-white/10 p-8 text-center"><p className="text-2xl font-bold">{cv.education.degree}</p><p className="text-slate-400">{cv.education.school} · {cv.location} · {cv.phone}</p><p className="mt-7 text-sm text-cyan-300">{cv.email} · {cv.linkedin} · {cv.github}</p></footer>
    </main>
  );
}
