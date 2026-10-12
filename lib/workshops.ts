import type { Locale } from "@/lib/i18n";

/**
 * Each workshop is a card on the landing and a page of its own at
 * `/<lang>/laboratori/<slug>`. The order here is the order of the cards.
 */
export const workshopSlugs = ["cucina", "orticoltura", "aziende"] as const;

export type WorkshopSlug = (typeof workshopSlugs)[number];

export function isWorkshopSlug(value: string): value is WorkshopSlug {
  return (workshopSlugs as readonly string[]).includes(value);
}

/** A workshop page's path below the locale, e.g. `/laboratori/cucina`. */
export function workshopPath(slug: WorkshopSlug): string {
  return `/laboratori/${slug}`;
}

/** The landing's share card. Language-neutral: it carries only the wordmark. */
export const landingShareImage = "/og.jpg";

/**
 * A workshop page's share card. One per language, because the workshop's name
 * is set on it — see scripts/build-og-image.mjs, which writes these files.
 */
export function workshopShareImage(locale: Locale, slug: WorkshopSlug): string {
  return `/og/${locale}/${slug}.jpg`;
}
