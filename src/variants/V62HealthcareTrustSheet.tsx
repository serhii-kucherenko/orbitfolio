"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Healthcare Trust Sheet — Clinical restraint and plain language make complex AI work credible and easy to scan. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":62,"name":"Healthcare Trust Sheet","thesis":"Clinical restraint and plain language make complex AI work credible and easy to scan.","layout":"clinic","team":"Epsilon Hire","accent":"#e5e7eb","background":"#050505","light":false}}
     
    />
  );
}
