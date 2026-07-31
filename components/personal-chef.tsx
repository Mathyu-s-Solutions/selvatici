import Image from "next/image";

import type { Content } from "@/content";
import { photos } from "@/lib/photos";
import { siteConfig } from "@/lib/site-config";

export function PersonalChef({ content }: { content: Content["chef"] }) {
  return (
    <section
      id="chef"
      className="relative bg-paper page-px py-[clamp(90px,11vw,160px)]"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-center gap-[clamp(40px,6vw,80px)]">
        <div>
          <p data-reveal className="eyebrow mb-[22px] text-brown">
            {content.eyebrow}
          </p>
          <h2
            data-reveal
            className="mb-[30px] font-display text-[clamp(36px,4.8vw,80px)] leading-[1.03] text-ink"
          >
            {content.titleLead}{" "}
            <em className="text-olive italic">{content.titleEmphasis}</em>
          </h2>
          <p
            data-reveal
            className="mb-6 text-[18px] leading-[1.75] text-pretty text-ink/85"
          >
            {content.paragraphs[0]}
          </p>
          <p
            data-reveal
            className="mb-10 text-[18px] leading-[1.75] text-pretty text-ink/85"
          >
            {content.paragraphs[1]}
          </p>
          <div data-reveal className="flex flex-wrap gap-3">
            <a href="#contatti" className="pill pill-ink">
              {content.ctaQuote}
            </a>
            <a
              href={siteConfig.contact.whatsapp.href}
              className="pill pill-outline-ink"
            >
              {content.ctaWhatsapp}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 items-end gap-5">
          <div
            data-parallax="0.1"
            className="parallax overflow-hidden rounded-card"
          >
            <Image
              src={photos.chefPasta}
              alt={content.imageAlts[0]}
              sizes="(min-width: 1320px) 290px, (min-width: 700px) 22vw, 45vw"
              className="h-auto w-full"
            />
          </div>
          <div
            data-parallax="0.17"
            className="parallax overflow-hidden rounded-card"
          >
            <Image
              src={photos.chefWork}
              alt={content.imageAlts[1]}
              sizes="(min-width: 1320px) 290px, (min-width: 700px) 22vw, 45vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
