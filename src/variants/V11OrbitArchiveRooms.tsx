"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Orbit Archive Rooms — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const rooms = [
    { id: "lobby", title: "Lobby", body: cv.summary },
    { id: "archive", title: "Archive", node: "exp" },
    { id: "workshop", title: "Workshop", node: "skills" },
    { id: "gallery", title: "Gallery", node: "projects" },
  ];
  return (
    <main className="min-h-screen bg-[#f1f5f9] text-slate-900">
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Iso rooms</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-slate-600">{cv.title}</p>
      </section>
      <section className="mx-auto grid max-w-5xl gap-4 px-6 pb-12 md:grid-cols-2">
        {rooms.map((room) => (
          <article key={room.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" style={{ transform: reduce ? undefined : "perspective(800px) rotateX(2deg)" }}>
            <h2 className="text-xl font-semibold">{room.title}</h2>
            {room.body && <p className="mt-3 text-sm leading-7 text-slate-600">{room.body}</p>}
            {room.node === "exp" && <div className="mt-4"><ExperienceList tone="light" /></div>}
            {room.node === "skills" && <div className="mt-4"><SkillsCloud tone="light" /></div>}
            {room.node === "projects" && <div className="mt-4"><ProjectLinks tone="light" /><ContactRow className="mt-6" /></div>}
          </article>
        ))}
      </section>
    
      <footer className="mx-auto max-w-6xl px-6 pb-16 text-sm opacity-55">
        {/* Education footer */}
        <p>
          {cv.education.degree} · {cv.education.school} · {cv.location}
        </p>
      </footer>
    </main>
  );
}
