"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Aurora Vancouver Canvas — A northern-lights canvas anchors the portfolio in Vancouver without scenic cliché. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":77,"name":"Aurora Vancouver Canvas","thesis":"A northern-lights canvas anchors the portfolio in Vancouver without scenic cliché.","layout":"canvas","team":"Zeta Experimental","accent":"#a7f3d0","background":"#071018","light":false}}
     
    />
  );
}
