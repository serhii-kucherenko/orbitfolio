"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Waveform Resume — Career milestones modulate a responsive waveform while content stays readable. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":33,"name":"Waveform Resume","thesis":"Career milestones modulate a responsive waveform while content stays readable.","layout":"waveform","team":"Gamma Kinetic","accent":"#67e8f9","background":"#030712","light":false}}
     
    />
  );
}
