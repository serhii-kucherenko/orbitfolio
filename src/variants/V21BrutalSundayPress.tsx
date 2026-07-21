"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Brutal Sunday Press — Hard rules, stamps, and unapologetic type turn the portfolio into urgent newsprint. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":21,"name":"Brutal Sunday Press","thesis":"Hard rules, stamps, and unapologetic type turn the portfolio into urgent newsprint.","layout":"brutal","team":"Beta Editorial","accent":"#a7f3d0","background":"#071018","light":false}}
     
    />
  );
}
