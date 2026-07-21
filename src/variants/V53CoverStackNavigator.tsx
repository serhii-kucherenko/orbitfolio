"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Cover Stack Navigator — Stacked covers turn sections into objects while preserving a complete flow below. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":53,"name":"Cover Stack Navigator","thesis":"Stacked covers turn sections into objects while preserving a complete flow below.","layout":"covers","team":"Delta Systems","accent":"#a7f3d0","background":"#071018","light":false}}
     
    />
  );
}
