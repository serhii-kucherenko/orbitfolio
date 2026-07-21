"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Paper Fold Terminal — Terminal language appears on folded paper planes rather than a conventional console. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":80,"name":"Paper Fold Terminal","thesis":"Terminal language appears on folded paper planes rather than a conventional console.","layout":"origami","team":"Zeta Experimental","accent":"#fdba74","background":"#111827","light":false}}
     
    />
  );
}
