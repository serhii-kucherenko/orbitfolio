"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** System Status Portfolio — A calm status surface reports who, what, proof, availability, and complete history. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":56,"name":"System Status Portfolio","thesis":"A calm status surface reports who, what, proof, availability, and complete history.","layout":"docs","team":"Delta Systems","accent":"#fdba74","background":"#111827","light":false}}
     
    />
  );
}
