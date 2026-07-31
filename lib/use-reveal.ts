"use client";

import { useEffect } from "react";

const STAGGER_MS = 70;
const STAGGER_GROUP = 4;

/**
 * Reveals every `[data-reveal]` element on the page as it scrolls into view:
 * opacity 0→1 and translateY(26px)→0, staggered in groups of four.
 * The transition itself lives in globals.css; this only sets the delay and
 * flips `data-revealed`.
 */
export function useReveal(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (elements.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.setAttribute("data-revealed", ""));
      return;
    }

    elements.forEach((el, index) => {
      el.style.setProperty(
        "--reveal-delay",
        `${(index % STAGGER_GROUP) * STAGGER_MS}ms`,
      );
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [enabled]);
}
