"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Aurora Motion Ledger — Aurora bands create continuous atmosphere around a precise outcome ledger. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":35,"name":"Aurora Motion Ledger","thesis":"Aurora bands create continuous atmosphere around a precise outcome ledger.","layout":"canvas","team":"Gamma Kinetic","accent":"#5eead4","background":"#020b08","light":false}}
     
    />
  );
}
