"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Origami Evidence Fold — CSS perspective folds separate career chapters without concealing information. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":73,"name":"Origami Evidence Fold","thesis":"CSS perspective folds separate career chapters without concealing information.","layout":"origami","team":"Zeta Experimental","accent":"#67e8f9","background":"#030712","light":false}}
     
    />
  );
}
