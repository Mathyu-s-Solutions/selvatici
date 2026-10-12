import Image from "next/image";
import Link from "next/link";

import iconaBianca from "@/assets/brand/icona-bianca.png";
import icona from "@/assets/brand/icona.png";
import type { Content } from "@/content";
import type { Locale } from "@/lib/i18n";
import { photos } from "@/lib/photos";
import type { WorkshopSlug } from "@/lib/workshops";

type LaboratorioDetailProps = {
  content: Content["laboratori"];
  slug: WorkshopSlug;
  locale: Locale;
};

/**
 * Same rule as the cards on the landing: the photo where the shoot has one,
 * the card's colour panel with the monogram where it does not.
 */
const panels = {
  orticoltura: {
    className: "bg-olive",
    monogram: iconaBianca,
    monogramClassName: "opacity-[0.2]",
  },
  aziende: {
    className: "bg-accent",
    monogram: icona,
    monogramClassName: "opacity-[0.4]",
  },
} satisfies Partial<Record<WorkshopSlug, object>>;

/**
 * The page behind a workshop card. The header is ink so the transparent nav,
 * designed over the landing's hero, reads the same way here.
 */
export function LaboratorioDetail({
  content,
  slug,
  locale,
}: LaboratorioDetailProps) {
  const card = content.cards[slug];
  const detail = content.details[slug];

  return (
    <>
      <header className="bg-ink page-px pt-[clamp(120px,17vh,190px)] pb-[clamp(56px,8vw,110px)] text-paper">
        <div className="mx-auto max-w-[1280px]">
          <Link
            href={`/${locale}#laboratori`}
            className="link-cta mb-[clamp(30px,5vh,52px)] inline-block text-paper/72 hover:text-accent"
          >
            {content.back}
          </Link>
          {/* One heading for both lines: the plain name is what the page is
              about, and a search engine weighs the h1 right after the title. */}
          <h1>
            <span className="eyebrow mb-[22px] block text-accent">
              {detail.name}
            </span>{" "}
            <span className="block font-display text-[clamp(40px,7.4vw,112px)] leading-none text-balance text-paper">
              {card.title}
            </span>
          </h1>
          <p className="mt-[clamp(20px,2.8vh,32px)] max-w-[760px] text-[clamp(17px,1.7vw,22px)] leading-[1.6] text-pretty text-paper/88">
            {detail.lead}
          </p>
        </div>
      </header>

      <section className="bg-paper page-px py-[clamp(70px,9vw,130px)]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-[clamp(40px,6vw,80px)] min-[860px]:grid-cols-2">
          <div className="max-w-[640px]">
            {detail.heading && (
              <h2
                data-reveal
                className="mb-7 font-display text-[clamp(28px,3.2vw,46px)] leading-[1.1] text-balance text-ink"
              >
                {detail.heading}
              </h2>
            )}
            {detail.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                data-reveal
                className="mb-6 text-[18px] leading-[1.75] text-pretty text-ink/85 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {slug === "cucina" ? (
            <div data-reveal className="overflow-hidden rounded-card">
              <Image
                src={photos.laboratorio}
                alt={content.imageAlt}
                sizes="(min-width: 1320px) 600px, (min-width: 860px) 46vw, 100vw"
                className="h-auto w-full"
              />
            </div>
          ) : (
            // Purely decorative, so it only appears once there is a second
            // column to fill: stacked on a phone it is an empty block.
            <div
              data-reveal
              aria-hidden
              className={`relative hidden min-h-[420px] overflow-hidden rounded-card min-[860px]:block ${panels[slug].className}`}
            >
              {/* The glyph is the middle ~30% of its square, so 700px of
                  image puts a ~300px monogram in the centre of the panel. */}
              <Image
                src={panels[slug].monogram}
                alt=""
                sizes="700px"
                className={`absolute top-1/2 left-1/2 h-auto w-[700px] max-w-none -translate-x-1/2 -translate-y-1/2 ${panels[slug].monogramClassName}`}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
