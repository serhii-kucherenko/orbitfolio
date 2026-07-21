"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Column Broadsheet — A true broadsheet uses columns, rules, and folios to hold the complete CV. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":19,"name":"Column Broadsheet","thesis":"A true broadsheet uses columns, rules, and folios to hold the complete CV.","layout":"editorial","team":"Beta Editorial","accent":"#5eead4","background":"#020b08","light":true}}
     
    />
  );
}
