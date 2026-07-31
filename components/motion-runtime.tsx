"use client";

import { useMediaQuery } from "@/lib/use-media-query";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { useParallax } from "@/lib/use-parallax";
import { useReveal } from "@/lib/use-reveal";

/** Below this width the layout is a single column and parallax is skipped. */
const TWO_COLUMN = "(min-width: 700px)";

/**
 * Drives the two document-wide motion behaviours (reveal on scroll, parallax)
 * so the sections themselves can stay server components: they only need to mark
 * elements with `data-reveal` / `data-parallax`.
 */
export function MotionRuntime({ reduceMotion }: { reduceMotion: boolean }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isTwoColumn = useMediaQuery(TWO_COLUMN);
  const enabled = !reduceMotion && !prefersReducedMotion;

  useReveal(enabled);
  // The per-element coefficients are tuned for the two-column composition;
  // stacked on a phone they only push neighbouring images into each other.
  useParallax(enabled && isTwoColumn);

  return null;
}
