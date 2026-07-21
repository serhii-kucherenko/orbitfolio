"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Launch Sequence CV — A launch countdown becomes a direct progression from identity to shipped outcomes. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":39,"name":"Launch Sequence CV","thesis":"A launch countdown becomes a direct progression from identity to shipped outcomes.","layout":"briefing","team":"Gamma Kinetic","accent":"#7dd3fc","background":"#0b1220","light":false}}
     
    />
  );
}
