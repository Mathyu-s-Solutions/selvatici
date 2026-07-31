import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import "@/app/globals.css";
import { MotionRuntime } from "@/components/motion-runtime";
import { PageLoader } from "@/components/page-loader";
import { getContent } from "@/content";
import { montserrat, seatren } from "@/lib/fonts";
import { isLocale, locales } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

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

  const { meta } = getContent(lang);

  return {
    metadataBase: new URL(siteConfig.url),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { it: "/it", en: "/en" },
    },
    openGraph: {
      type: "website",
      locale: lang === "it" ? "it_IT" : "en_GB",
      url: `/${lang}`,
      siteName: "I Selvatici",
      title: meta.title,
      description: meta.description,
    },
  };
}

/** Adds the `js` hook before the body paints, so reveals never flash. */
export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const content = getContent(lang);

  return (
    <html
      lang={lang}
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
        <MotionRuntime reduceMotion={siteConfig.reduceMotion} />
      </body>
    </html>
  );
}
