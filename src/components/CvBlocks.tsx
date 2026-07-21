import Link from "next/link";
import { cv } from "@/data/cv";

const contactLink =
  "rounded-sm underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500";

export function ContactRow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-x-4 gap-y-2 text-sm ${className}`}>
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
      <span>{cv.location}</span>
    </div>
  );
}

export function ExperienceList({ tone = "light" }: { tone?: "light" | "dark" }) {
  const muted = tone === "dark" ? "text-white/55" : "text-black/55";
  const body = tone === "dark" ? "text-white/85" : "text-black/85";
  return (
    <ol className="space-y-10">
      {cv.experience.map((job) => (
        <li key={`${job.company}-${job.period}`}>
          <p className={`text-xs uppercase tracking-[0.2em] ${muted}`}>{job.period}</p>
          <h3 className={`mt-1 text-xl font-semibold ${body}`}>
            {job.role} · {job.company}
          </h3>
          <p className={`mt-1 text-sm ${muted}`}>{job.place}</p>
          <ul className={`mt-3 space-y-2 text-sm leading-relaxed ${body}`}>
            {job.bullets.map((b) => (
              <li key={b.slice(0, 40)} className="pl-4 relative before:absolute before:left-0 before:content-['▸'] before:opacity-50">
                {b}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export function SkillsCloud({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const chip =
    tone === "dark"
      ? "border-white/15 bg-white/5 text-white/85"
      : "border-black/10 bg-black/5 text-black/85";
  const groups = Object.entries(cv.skills);
  return (
    <div className="space-y-6">
      {groups.map(([key, items]) => (
        <div key={key}>
          <p className="mb-2 text-xs uppercase tracking-[0.25em] opacity-50">{key}</p>
          <div className="flex flex-wrap gap-2">
            {items.map((s) => (
              <span key={s} className={`rounded-full border px-3 py-1 text-xs ${chip}`}>
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProjectLinks({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const link = tone === "dark" ? "text-cyan-200 hover:text-white" : "text-sky-800 hover:text-black";
  return (
    <ul className="space-y-4">
      {cv.projects.map((p) => (
        <li key={p.name}>
          <a href={p.url} target="_blank" rel="noreferrer" className={`text-lg font-medium ${link}`}>
            {p.name}
          </a>
          <p className="mt-1 text-sm opacity-70">{p.blurb}</p>
        </li>
      ))}
      <li>
        <Link href="/goals" className={`text-lg font-medium ${link}`}>
          100 Goals →
        </Link>
        <p className="mt-1 text-sm opacity-70">Living list of ambitions, craft, and impact.</p>
      </li>
    </ul>
  );
}
