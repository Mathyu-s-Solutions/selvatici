import Image from "next/image";
import Link from "next/link";

import type { Content } from "@/content";
import type { Locale } from "@/lib/i18n";
import { workshopPhotos } from "@/lib/photos";
import { workshopPath, workshopSlugs, type WorkshopSlug } from "@/lib/workshops";

type LaboratoriProps = {
  content: Content["laboratori"];
  locale: Locale;
};

/** Each card keeps its own colour under the photo: paper, olive, peach. */
const themes = {
  cucina: {
    card: "bg-paper text-ink",
    kicker: "text-brown",
    body: "text-ink/78",
    cta: "text-brown group-hover:text-olive",
  },
  orticoltura: {
    card: "bg-olive text-paper",
    kicker: "text-yellow",
    body: "text-paper/86",
    cta: "text-yellow",
  },
  aziende: {
    card: "bg-accent text-ink",
    kicker: "text-brown",
    body: "text-ink/82",
    cta: "text-ink",
  },
} satisfies Record<WorkshopSlug, Record<string, string>>;

/**
 * Each card opens the workshop's own page, which carries the description.
 *
 * The link is the title, stretched over the card with `after:inset-0`, so its
 * text says where it goes — three "Iscriviti →" anchors tell a search engine
 * and a screen reader nothing. The call to action stays as a visual cue.
 */
export function Laboratori({ content, locale }: LaboratoriProps) {
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
          {workshopSlugs.map((slug) => {
            const card = content.cards[slug];
            const theme = themes[slug];

            return (
              <article
                key={slug}
                data-reveal
                className={`group relative flex flex-col overflow-hidden rounded-card ${theme.card}`}
              >
                <Image
                  src={workshopPhotos[slug]}
                  alt={card.imageAlt}
                  sizes="(min-width: 1320px) 410px, (min-width: 700px) 33vw, 100vw"
                  className="h-[230px] w-full object-cover"
                />
                <div className="flex flex-col gap-3.5 px-7 pt-[30px] pb-[34px]">
                  <p className={`kicker ${theme.kicker}`}>{card.kicker}</p>
                  <h3 className="font-display text-[32px] leading-[1.1]">
                    <Link
                      href={`/${locale}${workshopPath(slug)}`}
                      className="text-inherit after:absolute after:inset-0"
                    >
                      {card.title}
                    </Link>
                  </h3>
                  <p className={`text-[16px] leading-[1.7] ${theme.body}`}>
                    {card.body}
                  </p>
                  <span
                    aria-hidden
                    className={`link-cta mt-1.5 transition-colors ${theme.cta}`}
                  >
                    {card.cta}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
