import type { Metadata } from "next";
import Link from "next/link";
import { cv } from "@/data/cv";
import { LabChrome } from "@/components/LabChrome";
import { PrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: "Resume",
  description: `Printable resume — ${cv.name}, ${cv.title}.`,
};

export default function ResumePage() {
  return (
    <>
      <div className="print:hidden">
        <LabChrome />
      </div>
      <main className="mx-auto max-w-3xl px-6 pb-20 pt-28 text-white print:max-w-none print:bg-white print:px-0 print:pt-0 print:text-black">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <p className="text-xs uppercase tracking-[0.3em] text-teal-300/80">Printable resume</p>
          <PrintButton />
        </div>

        <header className="border-b border-white/15 pb-6 print:border-black/20">
          <h1 className="font-[family-name:var(--font-display)] text-4xl print:text-3xl">{cv.name}</h1>
          <p className="mt-2 text-lg text-teal-100/90 print:text-black">{cv.title}</p>
          <p className="mt-3 text-sm text-white/60 print:text-black/70">
            {cv.location} · {cv.email}
          </p>
          <p className="mt-1 text-sm text-white/50 print:text-black/60">
            <a href={cv.linkedin} className="underline print:no-underline">
              LinkedIn
            </a>
            {" · "}
            <a href={cv.github} className="underline print:no-underline">
              GitHub
            </a>
          </p>
        </header>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/45 print:text-black/50">
            Summary
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80 print:text-black/85">{cv.summary}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/45 print:text-black/50">
            Experience
          </h2>
          <ol className="mt-4 space-y-8">
            {cv.experience.map((job) => (
              <li key={`${job.company}-${job.period}`} className="break-inside-avoid">
                <p className="text-xs text-white/45 print:text-black/50">{job.period}</p>
                <h3 className="mt-1 text-lg font-semibold">
                  {job.role} · {job.company}
                </h3>
                <p className="text-sm text-white/50 print:text-black/60">{job.place}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/75 print:text-black/80">
                  {job.bullets.map((b) => (
                    <li key={b.slice(0, 48)}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10 break-inside-avoid">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/45 print:text-black/50">
            Skills
          </h2>
          <div className="mt-4 space-y-3 text-sm">
            {Object.entries(cv.skills).map(([group, items]) => (
              <p key={group} className="text-white/75 print:text-black/80">
                <span className="font-semibold capitalize text-teal-200 print:text-black">{group}: </span>
                {items.join(", ")}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-10 break-inside-avoid">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/45 print:text-black/50">
            Selected work
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {cv.projects.map((p) => (
              <li key={p.name} className="text-white/75 print:text-black/80">
                <span className="font-semibold text-white print:text-black">{p.name}</span> — {p.blurb}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 break-inside-avoid">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/45 print:text-black/50">
            Education
          </h2>
          <p className="mt-3 text-sm text-white/75 print:text-black/80">
            {cv.education.degree} — {cv.education.school}
          </p>
        </section>

        <p className="mt-12 text-xs text-white/40 print:hidden">
          <Link href="/" className="text-teal-300 hover:underline">
            ← Champion site
          </Link>
        </p>
      </main>
    </>
  );
}
