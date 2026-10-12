import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Contatti } from "@/components/contatti";
import { LaboratorioDetail } from "@/components/laboratorio-detail";
import { SiteHeader } from "@/components/site-header";
import { WorkshopStructuredData } from "@/components/structured-data";
import { getContent } from "@/content";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import {
  isWorkshopSlug,
  workshopPath,
  workshopShareImage,
  workshopSlugs,
} from "@/lib/workshops";

type PageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return workshopSlugs.map((slug) => ({ slug }));
}

/** Anything outside `workshopSlugs` is a 404 rather than an on-demand render. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !isWorkshopSlug(slug)) return {};

  const { laboratori } = getContent(lang);
  const detail = laboratori.details[slug];

  return pageMetadata({
    locale: lang,
    path: workshopPath(slug),
    title: detail.metaTitle,
    description: detail.metaDescription,
    image: workshopShareImage(lang, slug),
    // The card spells out exactly these two lines over the wordmark.
    imageAlt: `I Selvatici — ${detail.name}: ${laboratori.cards[slug].title}`,
  });
}

export default async function WorkshopPage({ params }: PageProps) {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !isWorkshopSlug(slug)) notFound();

  const content = getContent(lang);

  return (
    <>
      <SiteHeader
        content={content.nav}
        locale={lang}
        path={workshopPath(slug)}
      />
      <main>
        <LaboratorioDetail
          content={content.laboratori}
          slug={slug}
          locale={lang}
        />
        <Contatti content={content.contatti} logoAlt={content.nav.logoAlt} />
      </main>
      <WorkshopStructuredData content={content} locale={lang} slug={slug} />
    </>
  );
}
