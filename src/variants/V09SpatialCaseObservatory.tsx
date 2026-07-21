"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Spatial Case Observatory — Career cases behave like observatory stations along a measured vertical route. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":9,"name":"Spatial Case Observatory","thesis":"Career cases behave like observatory stations along a measured vertical route.","layout":"chapters","team":"Alpha WebGL","accent":"#67e8f9","background":"#030712","light":false}}
     
    />
  );
}
