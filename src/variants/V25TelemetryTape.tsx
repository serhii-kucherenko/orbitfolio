"use client";

import { useState } from "react";
import { cv } from "@/data/cv";

/** Notion-like docs portfolio — sidebar + pages, light workspace */
export function Variant() {
  const [page, setPage] = useState<"home" | "experience" | "skills" | "projects">("home");
  const nav = [
    { id: "home" as const, label: "Home" },
    { id: "experience" as const, label: "Experience" },
    { id: "skills" as const, label: "Skills" },
    { id: "projects" as const, label: "Projects" },
  ];

  return (
    <main className="flex min-h-screen bg-[#F7F6F3] text-[#37352F]">
      <aside className="hidden w-56 shrink-0 border-r border-black/5 bg-[#F1F0EC] p-3 md:block">
        <p className="px-2 py-1 text-xs font-semibold text-black/40">Workspace</p>
        {nav.map((n) => (
          <button
            key={n.id}
            type="button"
            onClick={() => setPage(n.id)}
            className={`mt-0.5 block w-full rounded-md px-2 py-1.5 text-left text-sm ${
              page === n.id ? "bg-black/5 font-medium" : "hover:bg-black/[0.03]"
            }`}
          >
            {n.label}
          </button>
        ))}
        <div className="mt-6 px-2 text-xs text-black/40">
          <a className="block hover:underline" href={`mailto:${cv.email}`}>
            Email
          </a>
          <a className="mt-1 block hover:underline" href="/resume">
            Resume
          </a>
        </div>
      </aside>

      <div className="flex-1 px-6 py-10 sm:px-12">
        <div className="mb-6 flex flex-wrap gap-2 md:hidden">
          {nav.map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => setPage(n.id)}
              className={`rounded-md px-3 py-1 text-xs ${page === n.id ? "bg-black/10" : "bg-white"}`}
            >
              {n.label}
            </button>
          ))}
        </div>

        {page === "home" && (
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight">{cv.name}</h1>
            <p className="mt-2 text-lg text-black/60">{cv.title}</p>
            <p className="mt-6 text-base leading-7 text-black/75">{cv.summary}</p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {cv.highlights.map((h) => (
                <div key={h.label} className="rounded-md bg-white p-3 shadow-sm">
                  <p className="text-xl font-semibold">{h.value}</p>
                  <p className="text-xs text-black/45">{h.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === "experience" && (
          <div className="max-w-2xl space-y-8">
            <h1 className="text-3xl font-bold">Experience</h1>
            {cv.experience.map((job) => (
              <article key={job.company}>
                <h2 className="text-xl font-semibold">{job.role}</h2>
                <p className="text-sm text-black/55">
                  {job.company} · {job.period}
                </p>
                <p className="text-xs text-black/40">{job.place}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-black/75">
                  {job.bullets.map((b) => (
                    <li key={b.slice(0, 36)}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}

        {page === "skills" && (
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold">Skills</h1>
            {Object.entries(cv.skills).map(([group, items]) => (
              <div key={group} className="mt-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-black/45">{group}</h2>
                <p className="mt-2 text-sm leading-relaxed">{items.join(", ")}</p>
              </div>
            ))}
          </div>
        )}

        {page === "projects" && (
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold">Projects</h1>
            <ul className="mt-6 space-y-4">
              {cv.projects.map((p) => (
                <li key={p.name} className="rounded-md bg-white p-4 shadow-sm">
                  <a href={p.url} className="font-semibold text-[#2383E2]" target="_blank" rel="noreferrer">
                    {p.name}
                  </a>
                  <p className="mt-1 text-sm text-black/65">{p.blurb}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-1 text-sm">
              <a className="block text-[#2383E2]" href={cv.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="block text-[#2383E2]" href={cv.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <p className="text-black/45">{cv.phone}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
