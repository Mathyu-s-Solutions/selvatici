import Image from "next/image";

import mockBag from "@/assets/merch/mock-bag.jpg";
import mockJacket from "@/assets/merch/mock-jacket.png";
import mockTote from "@/assets/merch/mock-tote.jpg";
import type { Content } from "@/content";

const MOCKUPS = [mockTote, mockJacket, mockBag];

export function Merch({ content }: { content: Content["merch"] }) {
  return (
    <section className="bg-sage/20 page-px py-[clamp(70px,9vw,130px)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2
            data-reveal
            className="font-display text-[clamp(32px,4.2vw,68px)] leading-[1.03] text-ink"
          >
            {content.title}
          </h2>
          <p
            data-reveal
            className="max-w-[380px] text-[16px] leading-[1.7] text-ink/70"
          >
            {content.note}
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-6">
          {content.items.map((item, index) => (
            <div
              key={item.caption}
              data-reveal
              className="overflow-hidden rounded-card bg-paper"
            >
              <Image
                src={MOCKUPS[index]}
                alt={item.alt}
                sizes="(min-width: 1320px) 410px, (min-width: 700px) 33vw, 100vw"
                className="h-[300px] w-full object-cover"
              />
              <p className="px-6 py-[22px] text-[14px] tracking-[.06em] uppercase text-ink/70">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
