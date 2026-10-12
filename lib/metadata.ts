import type { Metadata } from "next";

import { defaultLocale, type Locale } from "@/lib/i18n";

type PageMetadataInput = {
  locale: Locale;
  /** Path below the locale: `""` for the landing, `/laboratori/cucina` for a workshop. */
  path: string;
  title: string;
  description: string;
  /** The page's 1200×630 share card, a path under `public/`, and its alt text. */
  image: string;
  imageAlt: string;
};

/**
 * The half of the metadata that carries a page's own URL and copy. Next
 * replaces `alternates`, `openGraph` and `twitter` wholesale when a page sets
 * them, so a sub-page has to restate all of it or it would inherit the
 * landing's canonical — hence one builder for both.
 */
export function pageMetadata({
  locale,
  path,
  title,
  description,
  image: imageUrl,
  imageAlt,
}: PageMetadataInput): Metadata {
  const image = {
    url: imageUrl,
    width: 1200,
    height: 630,
    type: "image/jpeg",
    alt: imageAlt,
  };

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      // x-default points search engines at Italian when no locale matches.
      languages: {
        it: `/it${path}`,
        en: `/en${path}`,
        "x-default": `/${defaultLocale}${path}`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "it" ? "it_IT" : "en_GB",
      alternateLocale: locale === "it" ? "en_GB" : "it_IT",
      url: `/${locale}${path}`,
      siteName: "I Selvatici",
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
