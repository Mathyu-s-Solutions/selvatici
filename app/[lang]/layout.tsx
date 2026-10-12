import type { CSSProperties, ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";

import "@/app/globals.css";
import { MotionRuntime } from "@/components/motion-runtime";
import { StructuredData } from "@/components/structured-data";
import { PageLoader } from "@/components/page-loader";
import { getContent } from "@/content";
import { montserrat, seatren } from "@/lib/fonts";
import { isLocale, locales } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { isIndexable, siteConfig } from "@/lib/site-config";
import { landingShareImage } from "@/lib/workshops";

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

/** Anything outside `locales` is a 404 rather than an on-demand render. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const { meta, hero } = getContent(lang);

  return {
    metadataBase: new URL(siteConfig.url),
    applicationName: "I Selvatici",
    ...pageMetadata({
      locale: lang,
      path: "",
      title: meta.title,
      description: meta.description,
      image: landingShareImage,
      imageAlt: hero.imageAlt,
    }),
    robots: isIndexable
      ? {
          index: true,
          follow: true,
          // Full-size photo and untruncated snippet. Repeated under googleBot
          // because Next emits two tags: the generic one is what Bing reads.
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : { index: false, follow: false },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf6ec" },
    { media: "(prefers-color-scheme: dark)", color: "#333333" },
  ],
};

/** Adds the `js` hook before the body paints, so reveals never flash. */
export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const content = getContent(lang);

  return (
    <html
      lang={lang}
      // Next 16 no longer suspends `scroll-behavior: smooth` while it routes;
      // without this, opening a workshop page glides up from the cards.
      data-scroll-behavior="smooth"
      className={[
        seatren.variable,
        montserrat.variable,
        siteConfig.reduceMotion ? "reduce-motion" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ "--selv-accent": siteConfig.accentColor } as CSSProperties}
    >
      <body>
        <PageLoader
          eyebrow={content.hero.eyebrow}
          reduceMotion={siteConfig.reduceMotion}
        />
        {children}
        <StructuredData content={content} locale={lang} />
        <MotionRuntime reduceMotion={siteConfig.reduceMotion} />
        <Analytics />
      </body>
    </html>
  );
}
