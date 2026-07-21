"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Agent Chat Profile — conversation UI that answers with full career proof */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#eef3f6] p-4 text-[#17212b] md:p-10">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white shadow-xl">
        <header className="flex items-center gap-4 border-b p-5">
          <div className="grid size-12 place-items-center rounded-full bg-[#0b6b58] font-bold text-white">
            SK
          </div>
          <div>
            <h1 className="font-bold">{cv.name}</h1>
            <p className="text-sm text-[#0b6b58]">
              {reduceMotion ? "profile ready" : "agent is composing…"}
            </p>
          </div>
          <a
            href={`mailto:${cv.email}`}
            className="ml-auto rounded-full bg-[#0b6b58] px-4 py-2 text-xs font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b6b58]"
          >
            Message
          </a>
        </header>
        <div className="space-y-8 p-6 md:p-10">
          <div className="max-w-xl rounded-2xl rounded-tl-none bg-[#dfe9ed] p-5">
            Who is the engineer behind this profile?
          </div>
          <div className="ml-auto max-w-3xl rounded-2xl rounded-tr-none bg-[#d8f3e9] p-6">
            <h2 className="text-4xl font-black">{cv.title}</h2>
            <p className="mt-4 leading-7">{cv.summary}</p>
            <ContactRow className="mt-6" />
          </div>
          <div className="max-w-xl rounded-2xl rounded-tl-none bg-[#dfe9ed] p-5">
            What outcomes can I cite in the first ten seconds?
          </div>
          <div className="ml-auto grid max-w-3xl grid-cols-2 gap-3">
            {cv.highlights.map((h) => (
              <div key={h.label} className="rounded-2xl border bg-white p-4">
                <p className="text-2xl font-black text-[#0b6b58]">{h.value}</p>
                <p className="text-xs text-slate-500">{h.label}</p>
              </div>
            ))}
          </div>
          <div className="max-w-xl rounded-2xl rounded-tl-none bg-[#dfe9ed] p-5">
            Show the complete work history.
          </div>
          <div className="ml-auto max-w-4xl rounded-2xl rounded-tr-none border p-6">
            <ExperienceList tone="light" />
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-[#17212b] p-6 text-white">
              <p className="mb-6 text-sm text-emerald-300">Capabilities response</p>
              <SkillsCloud />
            </div>
            <div className="rounded-2xl border p-6">
              <p className="mb-6 text-sm text-[#0b6b58]">Project response</p>
              <ProjectLinks tone="light" />
            </div>
          </div>
          <footer className="text-center text-sm text-slate-500">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </footer>
        </div>
      </div>
    </main>
  );
}
