"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Founder Fit Profile — A focused profile emphasizes 0-to-1 ownership, AI delivery, and team leadership. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":61,"name":"Founder Fit Profile","thesis":"A focused profile emphasizes 0-to-1 ownership, AI delivery, and team leadership.","layout":"split","team":"Epsilon Hire","accent":"#a7f3d0","background":"#071018","light":false}}
     
    />
  );
}
