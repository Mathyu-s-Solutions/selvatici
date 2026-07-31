"use client";

import { useEffect } from "react";

const OFFSCREEN_MARGIN = 200;

/**
 * Translates every `[data-parallax]` wrapper against the scroll: the value of
 * the attribute is the coefficient `k`, applied to the element's distance from
 * the middle of the viewport. rAF-throttled, skipped while off screen.
 */
export function useParallax(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    ).map((el) => ({
      el,
      k: Number.parseFloat(el.dataset.parallax ?? "") || 0.1,
    }));
    if (items.length === 0) return;

    let frame: number | null = null;

    const paint = () => {
      frame = null;
      const viewportHeight = window.innerHeight;
      for (const { el, k } of items) {
        const rect = el.getBoundingClientRect();
        if (
          rect.bottom < -OFFSCREEN_MARGIN ||
          rect.top > viewportHeight + OFFSCREEN_MARGIN
        ) {
          continue;
        }
        const middle = rect.top + rect.height / 2 - viewportHeight / 2;
        el.style.transform = `translate3d(0,${(-middle * k).toFixed(2)}px,0)`;
      }
    };

    const schedule = () => {
      if (frame === null) frame = requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      for (const { el } of items) el.style.transform = "";
    };
  }, [enabled]);
}
