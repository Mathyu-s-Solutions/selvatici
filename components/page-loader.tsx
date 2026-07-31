"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import logoCompleto from "@/assets/brand/logo-completo-trim.png";

/** A deliberate brand beat, even when everything is already cached. */
const MIN_MS = 450;
/** Never hold the page hostage, however slow the network is. */
const MAX_MS = 2000;

/**
 * Lives in module scope on purpose: it survives the client-side navigation the
 * IT / EN toggle performs (so the veil never plays twice) and resets on a real
 * page load. Anything stored on <html> instead would be wiped when React
 * re-renders that element with the new `lang`.
 */
let dismissed = false;

type PageLoaderProps = {
  /** Reused from the hero, so it is already localised. */
  eyebrow: string;
  reduceMotion: boolean;
};

/**
 * The markup is server-rendered and shown by CSS (gated on the `js` class), so
 * it covers the very first paint without waiting for this bundle. GSAP only
 * drives the progress rule and the exit choreography, and dismissal is a
 * `data-loaded` attribute on <html> rather than React state — which is what
 * keeps it from flashing again when the IT / EN toggle remounts the layout.
 */
export function PageLoader({ eyebrow, reduceMotion }: PageLoaderProps) {
  const root = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLSpanElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const veil = root.current;
    if (!veil) return;

    const dismiss = () => {
      dismissed = true;
      veil.setAttribute("data-done", "");
    };

    // Already played earlier in this document's life: nothing to do.
    if (dismissed) {
      dismiss();
      return;
    }

    if (
      reduceMotion ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      dismiss();
      return;
    }

    const timers: number[] = [];
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(window.setTimeout(resolve, ms));
      });

    // The rule decelerates towards 85%: honest about not knowing the total, and
    // far enough along that finishing early doesn't read as a jump.
    const progress = gsap.to(fill.current, {
      scaleX: 0.85,
      duration: 1,
      ease: "power2.out",
    });

    const heroImage = document.querySelector<HTMLImageElement>("img[data-hero]");
    const heroReady =
      !heroImage || heroImage.complete
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            heroImage.addEventListener("load", () => resolve(), { once: true });
            heroImage.addEventListener("error", () => resolve(), { once: true });
          });

    const ready = Promise.all([
      document.fonts.ready,
      heroReady,
      wait(MIN_MS),
    ]);

    let exit: ReturnType<typeof gsap.timeline> | undefined;
    let cancelled = false;

    Promise.race([ready, wait(MAX_MS)]).then(() => {
      if (cancelled) return;
      progress.kill();
      exit = gsap
        .timeline({ onComplete: dismiss })
        .to(fill.current, { scaleX: 1, duration: 0.22, ease: "power2.out" })
        .to(
          content.current,
          { autoAlpha: 0, y: -10, duration: 0.4, ease: "power2.inOut" },
          "+=0.05",
        )
        .to(root.current, { autoAlpha: 0, duration: 0.45 }, "-=0.25");
    });

    return () => {
      cancelled = true;
      timers.forEach(window.clearTimeout);
      progress.kill();
      exit?.kill();
    };
  }, [reduceMotion]);

  return (
    <div
      ref={root}
      className="loader"
      // Rendered already-dismissed after a locale switch, so it cannot flash
      // between React's render and the effect below.
      data-done={dismissed ? "" : undefined}
      aria-hidden
    >
      <div ref={content} className="flex flex-col items-center gap-7">
        <Image
          src={logoCompleto}
          alt=""
          priority
          sizes="220px"
          className="h-auto w-[clamp(150px,34vw,220px)]"
        />
        <div className="flex flex-col items-center gap-4">
          <span className="loader-track">
            <span ref={fill} className="loader-fill" />
          </span>
          <p className="text-[clamp(9px,1.1vw,11px)] font-bold tracking-[.24em] uppercase text-ink/45">
            {eyebrow}
          </p>
        </div>
      </div>
    </div>
  );
}
