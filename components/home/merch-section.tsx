"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { SectionHeading } from "./section-heading";

const merchItems = [
  {
    src: "/images/MOCK/tote%20bag%202%20copia.jpg",
    alt: "Tote bag Selvatici in due varianti colore",
    label: "Tote Bag",
  },
  {
    src: "/images/MOCK/akeaway%20Paper%20Bag.jpg",
    alt: "Sacchetto take-away brandizzato Selvatici",
    label: "Packaging",
  },
  {
    src: "/images/MOCK/BAG22.jpg",
    alt: "Shopper bag Selvatici in carta kraft",
    label: "Shopper Bag",
  },
  {
    src: "/images/MOCK/Chef%20jacket.png",
    alt: "Giacca da chef con logo Selvatici ricamato",
    label: "Chef Jacket",
  },
  {
    src: "/images/MOCK/4%20copia.png",
    alt: "Portachiavi Selvatici in due varianti",
    label: "Portachiavi",
  },
  {
    src: "/images/MOCK/01%20copia.jpg",
    alt: "Spilla pin Selvatici con logo S",
    label: "Pin",
  },
];

// Triple the items: [clone-end | original | clone-start] for seamless infinite loop
const loopItems = [...merchItems, ...merchItems, ...merchItems];

export function MerchSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const userInteracting = useRef(false);

  // Get the scroll width of one full set of items
  const getSetWidth = useCallback(() => {
    const el = trackRef.current;
    if (!el) return 0;
    return el.scrollWidth / 3;
  }, []);

  // Snap scroll position to the middle set when it drifts into clone zones
  const clampScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const setW = getSetWidth();
    if (setW === 0) return;

    if (el.scrollLeft < setW * 0.15) {
      // Scrolled into the first clone zone — jump forward to middle set
      el.scrollLeft += setW;
    } else if (el.scrollLeft > setW * 1.85) {
      // Scrolled into the last clone zone — jump back to middle set
      el.scrollLeft -= setW;
    }
  }, [getSetWidth]);

  // Initialize: scroll to the start of the middle set
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    // Wait a frame for layout
    requestAnimationFrame(() => {
      el.scrollLeft = getSetWidth();
    });
  }, [getSetWidth]);

  // Listen for scroll end to clamp position
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let timer: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(clampScroll, 80);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, [clampScroll]);

  // Auto-scroll
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) return;
    autoplayRef.current = setInterval(() => {
      if (userInteracting.current) return;
      const el = trackRef.current;
      if (!el) return;
      el.scrollBy({ left: 1, behavior: "instant" });
    }, 20);
  }, []);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [startAutoplay, stopAutoplay]);

  // Pause autoplay while user is interacting
  const onInteractStart = () => {
    userInteracting.current = true;
  };
  const onInteractEnd = () => {
    // Resume after a brief delay so clamp can settle
    setTimeout(() => {
      userInteracting.current = false;
    }, 2000);
  };

  const scrollBy = (direction: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = (card?.offsetWidth ?? 300) + 16;
    userInteracting.current = true;
    el.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
    setTimeout(() => {
      userInteracting.current = false;
    }, 2000);
  };

  return (
    <section className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Merchandising"
          title="L&rsquo;identita Selvatici, da portare con te."
          description="Oggetti pensati per raccontare il progetto anche fuori dai laboratori. Ogni pezzo e un frammento di identita, da indossare o regalare."
        />
      </div>

      <div
        className="relative mt-8 sm:mt-10"
        onMouseEnter={onInteractStart}
        onMouseLeave={onInteractEnd}
        onTouchStart={onInteractStart}
        onTouchEnd={onInteractEnd}
      >
        {/* Left arrow */}
        <button
          type="button"
          onClick={() => scrollBy("left")}
          aria-label="Scorri a sinistra"
          className="absolute left-2 top-1/2 z-10 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/85 text-foreground/70 shadow-lg backdrop-blur-sm transition hover:bg-white sm:inline-flex lg:left-4"
        >
          <ChevronLeft className="size-5" />
        </button>

        {/* Right arrow */}
        <button
          type="button"
          onClick={() => scrollBy("right")}
          aria-label="Scorri a destra"
          className="absolute right-2 top-1/2 z-10 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/85 text-foreground/70 shadow-lg backdrop-blur-sm transition hover:bg-white sm:inline-flex lg:right-4"
        >
          <ChevronRight className="size-5" />
        </button>

        {/* Scrollable track */}
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto px-4 pb-4 sm:px-6"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {loopItems.map((item, i) => (
            <div
              key={`${item.label}-${i}`}
              data-card
              className="w-[70vw] shrink-0 sm:w-[42vw] md:w-[32vw] lg:w-[26vw] xl:w-[20vw]"
            >
              <div className="overflow-hidden rounded-2xl border border-white/55 bg-white/78 shadow-[0_8px_30px_-16px_rgba(51,51,51,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_44px_-20px_rgba(51,51,51,0.35)] sm:rounded-3xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 70vw, (max-width: 768px) 42vw, (max-width: 1024px) 32vw, 20vw"
                  />
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-(--brown)">
                    {item.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
