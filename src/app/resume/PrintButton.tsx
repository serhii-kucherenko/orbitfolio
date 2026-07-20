"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full bg-teal-300 px-4 py-2 text-sm font-semibold text-[#042f2e]"
    >
      Print / Save PDF
    </button>
  );
}
