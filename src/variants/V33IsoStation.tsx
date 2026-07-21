"use client";

import { useState } from "react";
import { cv } from "@/data/cv";

type Room = "lobby" | "experience" | "skills" | "projects" | "contact";

/** Isometric light rooms — not dark space station */
export function Variant() {
  const [room, setRoom] = useState<Room>("lobby");
  const rooms: { id: Room; label: string }[] = [
    { id: "lobby", label: "Lobby" },
    { id: "experience", label: "Archive" },
    { id: "skills", label: "Workshop" },
    { id: "projects", label: "Gallery" },
    { id: "contact", label: "Desk" },
  ];

  return (
    <main className="min-h-screen bg-[#E8F0F7] text-slate-800">
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-24">
        <p className="text-xs uppercase tracking-[0.3em] text-sky-700/70">Iso rooms</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-slate-600">{cv.title}</p>

        <div className="mt-10 flex flex-wrap gap-2">
          {rooms.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setRoom(r.id)}
              className={`border px-3 py-1.5 text-xs uppercase tracking-wider ${
                room === r.id
                  ? "border-sky-700 bg-sky-700 text-white"
                  : "border-sky-300 bg-white/70 text-sky-900"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        <div
          className="relative mt-12 min-h-[420px] border border-sky-200 bg-white/80 p-8"
          style={{
            boxShadow: "12px 12px 0 rgba(14,165,233,0.15)",
            transform: "perspective(900px) rotateX(2deg)",
          }}
        >
          {room === "lobby" && (
            <div>
              <h2 className="text-2xl font-semibold">Lobby</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600">{cv.summary}</p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {cv.highlights.map((h) => (
                  <div key={h.label} className="border border-sky-100 bg-sky-50/80 p-3">
                    <p className="text-xl font-semibold text-sky-900">{h.value}</p>
                    <p className="text-[10px] uppercase text-sky-700/70">{h.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {room === "experience" && (
            <div className="max-h-[520px] space-y-8 overflow-y-auto pr-2">
              <h2 className="text-2xl font-semibold">Archive</h2>
              {cv.experience.map((job) => (
                <article key={job.company}>
                  <p className="text-xs text-sky-700">{job.period}</p>
                  <h3 className="text-lg font-semibold">{job.company}</h3>
                  <p className="text-sm text-slate-600">
                    {job.role} · {job.place}
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    {job.bullets.map((b) => (
                      <li key={b.slice(0, 36)}>• {b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          )}

          {room === "skills" && (
            <div>
              <h2 className="text-2xl font-semibold">Workshop</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {Object.entries(cv.skills).map(([group, items]) => (
                  <div key={group} className="border border-sky-100 bg-sky-50/50 p-4">
                    <p className="text-xs uppercase tracking-wider text-sky-700">{group}</p>
                    <p className="mt-2 text-sm leading-relaxed">{items.join(", ")}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {room === "projects" && (
            <div>
              <h2 className="text-2xl font-semibold">Gallery</h2>
              <ul className="mt-6 space-y-4">
                {cv.projects.map((p) => (
                  <li key={p.name} className="border-b border-sky-100 pb-3">
                    <a href={p.url} className="font-semibold text-sky-800 underline" target="_blank" rel="noreferrer">
                      {p.name}
                    </a>
                    <p className="text-sm text-slate-600">{p.blurb}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {room === "contact" && (
            <div>
              <h2 className="text-2xl font-semibold">Desk</h2>
              <p className="mt-4 text-sm text-slate-600">{cv.location}</p>
              <div className="mt-6 space-y-2 text-sm">
                <a className="block underline" href={`mailto:${cv.email}`}>
                  {cv.email}
                </a>
                <a className="block underline" href={cv.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="block underline" href={cv.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="block underline" href="/resume">
                  Resume
                </a>
                <p className="pt-2 text-slate-500">{cv.phone}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
