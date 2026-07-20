import Link from "next/link";
import { LabChrome } from "@/components/LabChrome";
import { SurpriseButton } from "@/components/SurpriseButton";

export default function NotFound() {
  return (
    <>
      <LabChrome />
      <main className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="nebula-glow absolute inset-0 opacity-80" />
        <div className="relative z-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.4em] text-teal-300/80">
            SIGNAL LOST
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl sm:text-8xl">404</h1>
          <p className="mt-4 max-w-md text-sm text-white/55">
            This coordinate is empty. Return to the champion orbit or browse the design lab.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="rounded-full bg-teal-300 px-5 py-2.5 text-sm font-semibold text-[#042f2e]"
            >
              Home
            </Link>
            <Link
              href="/lab"
              className="rounded-full border border-white/25 px-5 py-2.5 text-sm text-white/80"
            >
              Design lab
            </Link>
            <Link
              href="/goals"
              className="rounded-full border border-white/25 px-5 py-2.5 text-sm text-white/80"
            >
              100 Goals
            </Link>
            <SurpriseButton />
          </div>
        </div>
      </main>
    </>
  );
}
