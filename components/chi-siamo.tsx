import Image from "next/image";

import type { Content } from "@/content";
import { photos } from "@/lib/photos";

export function ChiSiamo({ content }: { content: Content["chiSiamo"] }) {
  return (
    <section id="chisiamo" className="page-px py-[clamp(80px,10vw,150px)]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(330px,100%),1fr))] items-center gap-[clamp(40px,6vw,80px)]">
        <div
          data-parallax="0.06"
          className="parallax overflow-hidden rounded-card"
        >
          <Image
            src={photos.chiSiamo}
            alt={content.imageAlt}
            sizes="(min-width: 1320px) 600px, (min-width: 760px) 45vw, 100vw"
            className="h-auto w-full"
          />
        </div>
        <div>
          <p data-reveal className="eyebrow mb-6 text-brown">
            {content.eyebrow}
          </p>
          <h2
            data-reveal
            className="mb-[30px] font-display text-[clamp(34px,4.2vw,68px)] leading-[1.05] text-ink"
          >
            {content.title}
          </h2>
          <p
            data-reveal
            className="mb-[26px] text-[18px] leading-[1.75] text-pretty text-ink/85"
          >
            {content.paragraph}
          </p>
          <div
            data-reveal
            className="flex flex-wrap gap-8 border-t border-ink/14 pt-7"
          >
            {content.founders.map((founder) => (
              <div key={founder.name}>
                <p className="font-display text-[26px] text-ink">
                  {founder.name}
                </p>
                <p className="mt-1 text-[13px] tracking-[.06em] uppercase text-ink/60">
                  {founder.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
