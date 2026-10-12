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
