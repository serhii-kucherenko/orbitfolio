"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Solar Career Instrument — Jobs become an orbital instrument before resolving into a complete readable CV. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":13,"name":"Solar Career Instrument","thesis":"Jobs become an orbital instrument before resolving into a complete readable CV.","layout":"solar","team":"Alpha WebGL","accent":"#a7f3d0","background":"#071018","light":false}}
     
    />
  );
}
