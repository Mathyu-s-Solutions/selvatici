import type { MetadataRoute } from "next";

import { defaultLocale, locales } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import { workshopPath, workshopSlugs } from "@/lib/workshops";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  // Paths below the locale: the landing, then one page per workshop.
  const paths = ["", ...workshopSlugs.map(workshopPath)];

  return paths.flatMap((path) => {
    const languages = Object.fromEntries(
      locales.map((lang) => [lang, `${siteConfig.url}/${lang}${path}`]),
    );
    // Default locale first, then the translation.
    const [primary, secondary] = path === "" ? [1, 0.8] : [0.7, 0.6];

    return locales.map((lang) => ({
      url: `${siteConfig.url}/${lang}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: lang === defaultLocale ? primary : secondary,
      alternates: {
        languages: {
          ...languages,
          "x-default": `${siteConfig.url}/${defaultLocale}${path}`,
        },
      },
    }));
  });
}
