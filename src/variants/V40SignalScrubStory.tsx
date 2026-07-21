"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Signal Scrub Story — A signal line appears to scrub through the career while reduced motion stays static. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":40,"name":"Signal Scrub Story","thesis":"A signal line appears to scrub through the career while reduced motion stays static.","layout":"journey","team":"Gamma Kinetic","accent":"#fdba74","background":"#111827","light":false}}
     
    />
  );
}
