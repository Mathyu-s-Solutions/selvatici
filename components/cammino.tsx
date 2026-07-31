import Image from "next/image";

import type { Content } from "@/content";
import { photos } from "@/lib/photos";

const VEIL =
  "linear-gradient(180deg,rgb(51 51 51 / .86) 0%,rgb(51 51 51 / .72) 50%,rgb(51 51 51 / .9) 100%)";

export function Cammino({ content }: { content: Content["cammino"] }) {
  return (
    <section
      id="cammino"
      className="relative overflow-hidden bg-ink text-paper"
    >
      <div
        data-parallax="0.16"
        className="parallax absolute inset-x-0 top-[-14%] bottom-[-14%]"
      >
        <Image
          src={photos.cammino}
          alt={content.imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0" style={{ background: VEIL }} />

      <div className="relative mx-auto max-w-[1180px] page-px py-[clamp(100px,13vw,190px)]">
        <p data-reveal className="eyebrow mb-6 text-accent">
          {content.eyebrow}
        </p>
        <h2
          data-reveal
          className="mb-10 max-w-[900px] font-display text-[clamp(38px,6vw,104px)] leading-[1.02] text-pretty text-paper"
        >
          {content.title}
        </h2>
        <p
          data-reveal
          className="mb-[70px] max-w-[640px] text-[19px] leading-[1.7] text-pretty text-paper/80"
        >
          {content.paragraph}
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(230px,100%),1fr))] gap-9 border-t border-paper/28 pt-10">
          {content.pillars.map((pillar) => (
            <div key={pillar.title} data-reveal>
              <p className="mb-3 font-display text-[44px] text-accent">
                {pillar.title}
              </p>
              <p className="text-[16px] leading-[1.7] text-paper/78">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
