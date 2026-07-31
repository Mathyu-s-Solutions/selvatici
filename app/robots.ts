import type { MetadataRoute } from "next";

import { isIndexable, siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  // Preview and development deployments are closed off entirely, so they can
  // never compete with production for the same content.
  if (!isIndexable) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
