"use client";

import { useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

const contactLink =
  "rounded-sm underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700";

/** Founding Engineer One Pager — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-3xl px-6 py-28">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-lg text-slate-600">{cv.title} · {cv.location}</p>
        <p className="mt-6 text-sm leading-7 text-slate-600">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <a className={contactLink} href={`mailto:${cv.email}`}>
            {cv.email}
          </a>
          <a className={contactLink} href={cv.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className={contactLink} href={cv.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <Link className={contactLink} href="/resume">
            Printable resume
          </Link>
          <span>{cv.phone}</span>
        </div>
        <hr className="my-10 border-slate-200" />
        <ExperienceList tone="light" />
        <hr className="my-10 border-slate-200" />
        <SkillsCloud tone="light" />
        <hr className="my-10 border-slate-200" />
        <ProjectLinks tone="light" />
      </section>
    </main>
  );
}
