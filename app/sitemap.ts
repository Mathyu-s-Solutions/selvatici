import type { MetadataRoute } from "next";

import { defaultLocale, locales, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import {
  landingShareImage,
  workshopPath,
  workshopShareImage,
  workshopSlugs,
} from "@/lib/workshops";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  // The landing, then one page per workshop. Default locale first, then the
  // translation, in `priority`.
  const pages = [
    { path: "", priority: [1, 0.8], image: () => landingShareImage },
    ...workshopSlugs.map((slug) => ({
      path: workshopPath(slug),
      priority: [0.7, 0.6],
      image: (lang: Locale) => workshopShareImage(lang, slug),
    })),
  ];

  return pages.flatMap(({ path, priority: [primary, secondary], image }) => {
    const languages = Object.fromEntries(
      locales.map((lang) => [lang, `${siteConfig.url}/${lang}${path}`]),
    );

    return locales.map((lang) => ({
      url: `${siteConfig.url}/${lang}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: lang === defaultLocale ? primary : secondary,
      images: [`${siteConfig.url}${image(lang)}`],
      alternates: {
        languages: {
          ...languages,
          "x-default": `${siteConfig.url}/${defaultLocale}${path}`,
        },
      },
    }));
  });
}
