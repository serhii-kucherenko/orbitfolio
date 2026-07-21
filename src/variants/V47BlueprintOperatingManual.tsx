"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Blueprint Operating Manual — Engineering schematics organize architecture, leadership, skills, and shipped work. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":47,"name":"Blueprint Operating Manual","thesis":"Engineering schematics organize architecture, leadership, skills, and shipped work.","layout":"blueprint","team":"Delta Systems","accent":"#7dd3fc","background":"#0b1220","light":false}}
     
    />
  );
}
