import Image from "next/image";

import type { Content } from "@/content";
import { photos } from "@/lib/photos";

const VEIL =
  "linear-gradient(180deg,rgb(51 51 51 / .74) 0%,rgb(51 51 51 / .34) 34%,rgb(51 51 51 / .52) 62%,rgb(51 51 51 / .9) 100%)";
const CORNER =
  "radial-gradient(120% 70% at 8% 88%,rgb(51 51 51 / .6) 0%,rgb(51 51 51 / 0) 62%)";

export function Hero({ content }: { content: Content["hero"] }) {
  return (
    <header
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden bg-ink"
    >
      <div
        data-parallax="0.18"
        className="parallax absolute inset-x-0 top-[-12%] bottom-[-12%]"
      >
        <Image
          src={photos.hero}
          alt={content.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_42%]"
        />
      </div>
      <div className="absolute inset-0" style={{ background: VEIL }} />
      <div className="absolute inset-0" style={{ background: CORNER }} />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-end px-[clamp(18px,4vw,40px)] pt-[clamp(110px,16vh,190px)] pb-[clamp(26px,4vh,44px)]">
        <div className="mb-[clamp(20px,3vh,34px)] flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <p className="text-[clamp(10px,1.1vw,12px)] font-bold tracking-[.24em] uppercase text-paper/90">
            {content.eyebrow}
          </p>
        </div>

        <h1 className="font-display text-[clamp(46px,10.5vw,158px)] leading-[.94] tracking-[-.01em] text-balance text-paper">
          {content.titleLines[0]}
          <br />
          {content.titleLines[1]}
        </h1>

        <p className="mt-[clamp(18px,2.6vh,30px)] max-w-[640px] text-[clamp(17px,1.7vw,24px)] leading-[1.5] text-pretty text-paper/92">
          {content.lead}{" "}
          <em className="text-accent italic">{content.leadEmphasis}</em>
        </p>

        <div className="mt-[clamp(24px,3.4vh,40px)] flex flex-wrap gap-3">
          <a href="#laboratori" className="pill pill-accent">
            {content.ctaWorkshops}
          </a>
          <a href="#chef" className="pill pill-outline-paper">
            {content.ctaChef}
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-[clamp(18px,4vw,40px)] pb-[clamp(24px,4vh,40px)]">
        <div className="flex flex-wrap items-center justify-between gap-[18px] border-t border-paper/28 pt-[22px]">
          <div className="flex flex-wrap gap-[clamp(16px,3vw,44px)] text-[clamp(10px,1vw,12px)] font-semibold tracking-[.16em] uppercase text-paper/78">
            {content.claims.map((claim) => (
              <span key={claim}>{claim}</span>
            ))}
          </div>
          <a
            href="#progetto"
            className="flex items-center gap-2.5 text-[11px] font-bold tracking-[.16em] uppercase text-paper/85"
          >
            <span>{content.scroll}</span>
            <span className="bob inline-block h-[26px] w-px bg-accent" />
          </a>
        </div>
      </div>
    </header>
  );
}
