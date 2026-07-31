export const locales = ["it", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "it";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** The locale the IT / EN toggle should point at. */
export function otherLocale(locale: Locale): Locale {
  return locale === "it" ? "en" : "it";
}
