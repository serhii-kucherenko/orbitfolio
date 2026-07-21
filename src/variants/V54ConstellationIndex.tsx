"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Constellation Index — A systems-minded star index cross-references tools, roles, and open-source work. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":54,"name":"Constellation Index","thesis":"A systems-minded star index cross-references tools, roles, and open-source work.","layout":"chart","team":"Delta Systems","accent":"#e5e7eb","background":"#050505","light":false}}
     
    />
  );
}
