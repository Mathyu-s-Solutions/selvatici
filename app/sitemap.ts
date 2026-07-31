import type { MetadataRoute } from "next";

import { defaultLocale, locales } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = Object.fromEntries(
    locales.map((lang) => [lang, `${siteConfig.url}/${lang}`]),
  );

  return locales.map((lang) => ({
    url: `${siteConfig.url}/${lang}`,
    lastModified,
    changeFrequency: "monthly",
    priority: lang === defaultLocale ? 1 : 0.8,
    alternates: {
      languages: { ...languages, "x-default": `${siteConfig.url}/${defaultLocale}` },
    },
  }));
}
