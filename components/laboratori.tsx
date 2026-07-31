import Image from "next/image";

import iconaBianca from "@/assets/brand/icona-bianca.png";
import icona from "@/assets/brand/icona.png";
import type { Content } from "@/content";
import { photos } from "@/lib/photos";

/**
 * Cards 2 and 3 are colour panels with the monogram as a watermark: no garden
 * or sewing photography exists yet. Swap in photos when the client supplies them.
 */
export function Laboratori({ content }: { content: Content["laboratori"] }) {
  const [cucina, orto, cucito] = content.cards;

  return (
    <section
      id="laboratori"
      className="bg-ink page-px py-[clamp(80px,10vw,150px)] text-paper"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-[60px] flex flex-wrap items-end justify-between gap-8">
          <div>
            <p data-reveal className="eyebrow mb-[22px] text-accent">
              {content.eyebrow}
            </p>
            <h2
              data-reveal
              className="font-display text-[clamp(36px,5vw,84px)] leading-[1.03] text-paper"
            >
              {content.title}
            </h2>
          </div>
          <p
            data-reveal
            className="max-w-[360px] text-[16px] leading-[1.7] text-paper/72"
          >
            {content.note}
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(290px,100%),1fr))] gap-7">
          <article
            data-reveal
            className="flex flex-col overflow-hidden rounded-card bg-paper text-ink"
          >
            <Image
              src={photos.laboratorio}
              alt={content.imageAlt}
              sizes="(min-width: 1320px) 410px, (min-width: 700px) 33vw, 100vw"
              className="h-[230px] w-full object-cover"
            />
            <div className="flex flex-col gap-3.5 px-7 pt-[30px] pb-[34px]">
              <p className="kicker text-brown">{cucina.kicker}</p>
              <h3 className="font-display text-[32px] leading-[1.1]">
                {cucina.title}
              </h3>
              <p className="text-[16px] leading-[1.7] text-ink/78">
                {cucina.body}
              </p>
              <a href="#contatti" className="link-cta mt-1.5">
                {cucina.cta}
              </a>
            </div>
          </article>

          <article
            data-reveal
            className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-card bg-olive px-7 pt-[30px] pb-[34px] text-paper"
          >
            <Image
              src={iconaBianca}
              alt=""
              aria-hidden
              sizes="300px"
              className="absolute top-[-40px] right-[-70px] h-auto w-[300px] opacity-[0.13]"
            />
            <div className="flex flex-col gap-3.5">
              <p className="kicker text-yellow">{orto.kicker}</p>
              <h3 className="font-display text-[32px] leading-[1.1]">
                {orto.title}
              </h3>
              <p className="text-[16px] leading-[1.7] text-paper/86">
                {orto.body}
              </p>
              <a href="#contatti" className="link-cta mt-1.5 text-yellow">
                {orto.cta}
              </a>
            </div>
          </article>

          <article
            data-reveal
            className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-card bg-accent px-7 pt-[30px] pb-[34px] text-ink"
          >
            <Image
              src={icona}
              alt=""
              aria-hidden
              sizes="300px"
              className="absolute top-[-40px] right-[-70px] h-auto w-[300px] opacity-[0.28]"
            />
            <div className="flex flex-col gap-3.5">
              <p className="kicker text-brown">{cucito.kicker}</p>
              <h3 className="font-display text-[32px] leading-[1.1]">
                {cucito.title}
              </h3>
              <p className="text-[16px] leading-[1.7] text-ink/82">
                {cucito.body}
              </p>
              <a href="#contatti" className="link-cta mt-1.5 text-ink">
                {cucito.cta}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
