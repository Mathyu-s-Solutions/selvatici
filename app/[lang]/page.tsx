import { notFound } from "next/navigation";

import { Agenda } from "@/components/agenda";
import { Cammino } from "@/components/cammino";
import { ChiSiamo } from "@/components/chi-siamo";
import { Contatti } from "@/components/contatti";
import { GalleryMarquee } from "@/components/gallery-marquee";
import { Hero } from "@/components/hero";
import { Laboratori } from "@/components/laboratori";
import { Manifesto } from "@/components/manifesto";
import { Merch } from "@/components/merch";
import { PersonalChef } from "@/components/personal-chef";
import { Progetto } from "@/components/progetto";
import { SiteHeader } from "@/components/site-header";
import { Testimonianze } from "@/components/testimonianze";
import { getContent } from "@/content";
import { isLocale } from "@/lib/i18n";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const content = getContent(lang);

  return (
    <>
      <SiteHeader content={content.nav} locale={lang} />
      <main>
        <Hero content={content.hero} />
        <Manifesto content={content.manifesto} />
        <Progetto content={content.progetto} />
        <ChiSiamo content={content.chiSiamo} />
        <Laboratori content={content.laboratori} />
        <PersonalChef content={content.chef} />
        <Cammino content={content.cammino} />
        <Agenda content={content.agenda} />
        <GalleryMarquee content={content.gallery} />
        <Testimonianze content={content.testimonianze} />
        <Merch content={content.merch} />
        <Contatti content={content.contatti} logoAlt={content.nav.logoAlt} />
      </main>
    </>
  );
}
