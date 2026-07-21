"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Hybrid Clinic Aurora — Steals healthcare trust from #58 + atmospheric canvas restraint from #78. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":89,"name":"Hybrid Clinic Aurora","thesis":"Steals healthcare trust from #58 + atmospheric canvas restraint from #78.","layout":"clinic","team":"Eta Hybrid","accent":"#67e8f9","background":"#030712","light":true}}
     
    />
  );
}
