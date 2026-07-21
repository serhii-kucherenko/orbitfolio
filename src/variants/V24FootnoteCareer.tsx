"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Footnote Career — Academic footnotes and marginalia expose the engineering decisions behind each result. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":24,"name":"Footnote Career","thesis":"Academic footnotes and marginalia expose the engineering decisions behind each result.","layout":"docs","team":"Beta Editorial","accent":"#fdba74","background":"#111827","light":false}}
     
    />
  );
}
