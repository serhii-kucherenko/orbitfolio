"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** ASCII Career Signal — terminal aesthetic with full hire surface */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#050b08] p-4 font-mono text-[#80ff9e] md:p-10">
      <div className="mx-auto max-w-6xl border border-[#80ff9e]/40 p-5 md:p-10">
        <pre className="overflow-hidden text-xs opacity-60">{`+--------------------------------------------------+
| ORBITFOLIO :: CAREER SIGNAL 071 :: ONLINE       |
+--------------------------------------------------+`}</pre>
        <header className="py-12">
          <p>&gt; ROLE: {cv.title}</p>
          <h1 className="my-7 text-5xl font-bold uppercase md:text-8xl">{cv.name}</h1>
          <p className="max-w-4xl leading-7">&gt; {cv.summary}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`mailto:${cv.email}`}
              className="border border-[#80ff9e] px-4 py-2 text-xs uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80ff9e]"
            >
              open mail://hire
            </a>
            <ContactRow />
          </div>
          <p className="mt-5">{reduceMotion ? "[STATIC MODE]" : "[SIGNAL ACTIVE _]"}</p>
        </header>
        <section className="grid grid-cols-2 gap-3 border-t border-dashed border-[#80ff9e]/40 py-10 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="border border-[#80ff9e]/25 p-3">
              <p className="text-2xl font-bold">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase opacity-60">{h.label}</p>
            </div>
          ))}
        </section>
        <section className="border-t border-dashed border-[#80ff9e]/40 py-12">
          <h2 className="mb-8 text-2xl">/EXPERIENCE --ALL</h2>
          <ExperienceList tone="dark" />
        </section>
        <div className="grid gap-12 border-t border-dashed border-[#80ff9e]/40 py-12 md:grid-cols-2">
          <section>
            <h2 className="mb-8 text-2xl">/SKILLS --GROUPED</h2>
            <SkillsCloud />
          </section>
          <section>
            <h2 className="mb-8 text-2xl">/PROJECTS --LINKS</h2>
            <ProjectLinks />
          </section>
        </div>
        <footer className="border-t border-dashed border-[#80ff9e]/40 pt-8">
          &gt; EDUCATION: {cv.education.degree} @ {cv.education.school}
          <br />
          &gt; LOCATION: {cv.location}
        </footer>
      </div>
    </main>
  );
}
