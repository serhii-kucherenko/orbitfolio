"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Docs Sidebar Engineer — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;

  const pages = ["Home", "Experience", "Skills", "Projects", "Contact"];
  return (
    <main className="min-h-screen bg-[#fbfbfa] text-slate-900 md:flex">
      <aside className="border-b border-slate-200 bg-white px-4 py-24 md:w-56 md:border-b-0 md:border-r md:py-28">
        <p className="px-2 text-[10px] uppercase tracking-[0.3em] text-slate-400">Workspace</p>
        <nav className="mt-4 space-y-1">
          {pages.map((p, i) => (
            <a key={p} href={`#${p.toLowerCase()}`} className={`block rounded-md px-3 py-2 text-sm ${i === 0 ? "bg-slate-100 font-semibold" : "text-slate-600 hover:bg-slate-50"}`}>{p}</a>
          ))}
        </nav>
      </aside>
      <div className="flex-1 px-6 py-24 md:px-12">
        <section id="home">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">{cv.name}</h1>
          <p className="mt-2 text-slate-600">{cv.title}</p>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600">{cv.summary}</p>
        </section>
        <section id="experience" className="mt-16"><h2 className="mb-8 text-xs uppercase tracking-[0.3em] text-slate-400">Experience</h2><ExperienceList tone="light" /></section>
        <section id="skills" className="mt-16"><h2 className="mb-8 text-xs uppercase tracking-[0.3em] text-slate-400">Skills</h2><SkillsCloud tone="light" /></section>
        <section id="projects" className="mt-16"><h2 className="mb-8 text-xs uppercase tracking-[0.3em] text-slate-400">Projects</h2><ProjectLinks tone="light" /></section>
        <section id="contact" className="mt-16 pb-20"><h2 className="mb-6 text-xs uppercase tracking-[0.3em] text-slate-400">Contact</h2><ContactRow /></section>
      </div>
    
      <footer className="mx-auto max-w-6xl px-6 pb-16 text-sm opacity-55">
        {/* Education footer */}
        <p>
          {cv.education.degree} · {cv.education.school} · {cv.location}
        </p>
      </footer>
    </main>
  );
}
