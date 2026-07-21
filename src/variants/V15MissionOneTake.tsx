"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Mission One-Take — A mission-film composition closes Alpha with atmosphere plus immediate hire clarity. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":15,"name":"Mission One-Take","thesis":"A mission-film composition closes Alpha with atmosphere plus immediate hire clarity.","layout":"briefing","team":"Alpha WebGL","accent":"#7dd3fc","background":"#0b1220","light":false}}
     
    />
  );
}
