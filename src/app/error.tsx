"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="nebula-glow absolute inset-0 opacity-80" />
      <div className="relative z-10">
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.4em] text-rose-300/80">
          TURBULENCE
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">
          Something went off course
        </h1>
        <p className="mt-4 max-w-md text-sm text-white/55">
          A page failed to render. You can retry or return to a known coordinate.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-teal-300 px-5 py-2.5 text-sm font-semibold text-[#042f2e]"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-full border border-white/25 px-5 py-2.5 text-sm text-white/80"
          >
            Home
          </Link>
          <Link
            href="/lab"
            className="rounded-full border border-white/25 px-5 py-2.5 text-sm text-white/80"
          >
            Design lab
          </Link>
        </div>
      </div>
    </main>
  );
}
