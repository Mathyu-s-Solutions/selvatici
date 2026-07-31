import Image from "next/image";

import type { Content } from "@/content";
import { photos } from "@/lib/photos";

export function Progetto({ content }: { content: Content["progetto"] }) {
  return (
    <section
      id="progetto"
      className="bg-sage/16 page-px py-[clamp(70px,9vw,130px)]"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-start gap-[clamp(40px,6vw,90px)]">
        <div>
          <p data-reveal className="eyebrow mb-6 text-brown">
            {content.eyebrow}
          </p>
          <h2
            data-reveal
            className="mb-8 font-display text-[clamp(34px,4.4vw,72px)] leading-[1.05] text-ink"
          >
            {content.title}
          </h2>
          {content.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              data-reveal
              className="mb-[22px] text-[18px] leading-[1.75] text-pretty text-ink/85"
            >
              {paragraph}
            </p>
          ))}
          <div
            data-reveal
            className="mt-11 grid grid-cols-[repeat(auto-fit,minmax(min(140px,100%),1fr))] gap-5 border-t border-ink/14 pt-9"
          >
            {content.stats.map((stat) => (
              <div key={stat.value}>
                <p className="font-display text-[34px] text-olive">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-[13px] leading-[1.5] text-ink/66">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div
            data-parallax="0.07"
            className="parallax overflow-hidden rounded-card"
          >
            <Image
              src={photos.progettoMain}
              alt={content.imageAlts[0]}
              sizes="(min-width: 1320px) 600px, (min-width: 700px) 45vw, 100vw"
              className="h-auto w-full"
            />
          </div>
          {/* Stacked on phones: the pull-quote is unreadable in a ~130px column. */}
          <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2">
            <div
              data-parallax="0.13"
              className="parallax overflow-hidden rounded-card"
            >
              <Image
                src={photos.progettoDetail}
                alt={content.imageAlts[1]}
                sizes="(min-width: 1320px) 290px, (min-width: 700px) 22vw, (min-width: 640px) 45vw, 100vw"
                className="h-auto w-full"
              />
            </div>
            <p className="text-[15px] leading-[1.7] text-ink/70 italic">
              {content.quote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
