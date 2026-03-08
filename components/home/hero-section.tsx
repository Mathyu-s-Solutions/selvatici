import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { heroHighlights, heroTags, siteImages } from "./content";

function HighlightCard({
  title,
  text,
  icon: Icon,
}: {
  title: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Card className="border-white/55 bg-white/76">
      <CardContent className="pt-6">
        <div className="mb-4 inline-flex size-11 items-center justify-center rounded-2xl bg-(--sun)/28 text-(--brown)">
          <Icon className="size-5" />
        </div>
        <p className="font-display text-2xl leading-tight text-foreground">
          {title}
        </p>
        <p className="mt-3 text-sm leading-7 text-black/68">{text}</p>
      </CardContent>
    </Card>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="scroll-mt-24 px-4 pb-16 pt-6 sm:px-6 sm:pb-24 sm:pt-8 lg:px-8 lg:pb-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
        <div className="space-y-8 lg:pr-6">
          <Badge variant="olive" className="bg-white/72">
            Castelgrande, Basilicata · itineranti in tutta Italia
          </Badge>

          <div className="space-y-6">
            <h1 className="font-display text-4xl leading-[0.9] tracking-tight text-balance text-foreground sm:text-5xl md:text-7xl xl:text-[5.8rem]">
              Coltiviamo legami. Cuciniamo comunita. Intrecciamo territori.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-black/72 md:text-xl md:leading-9">
              I Selvatici crea laboratori, esperienze culinarie e percorsi di
              comunita radicati nella terra, nei saperi manuali e nel benessere
              condiviso. Ogni incontro e un invito a rallentare, fare con le
              mani e tornare a stare insieme davvero.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="earth">
              <a href="#services">
                Scopri i laboratori
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/70">
              <a href="#contact">Costruiamo un progetto insieme</a>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {heroHighlights.map((highlight) => (
              <HighlightCard key={highlight.title} {...highlight} />
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {heroTags.map((tag) => (
              <Badge
                key={tag}
                variant="soft"
                className="bg-white/68 text-black/66"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(255,176,103,0.28),transparent_40%),linear-gradient(155deg,rgba(255,250,244,0.88),rgba(239,228,209,0.74))] shadow-[0_28px_90px_-44px_rgba(51,51,51,0.45)] sm:rounded-[2.7rem]" />
          <div className="relative rounded-xl border border-white/65 bg-white/28 p-3 backdrop-blur-sm sm:rounded-[2.35rem] sm:p-4">
            <Card className="overflow-hidden border-white/60 bg-white/18">
              <div className="relative min-h-72 sm:min-h-120 lg:min-h-0 lg:aspect-5/6 xl:aspect-4/5">
                <Image
                  src={siteImages.heroMain}
                  alt="Laboratorio condiviso di I Selvatici"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 34vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(51,51,51,0.04),rgba(51,51,51,0.38))]" />
                <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/35 bg-white/82 p-4 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:rounded-[1.8rem] sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-(--brown)">
                    Esperienze vive
                  </p>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-black/74 sm:text-base sm:leading-8">
                    Laboratori e incontri in cui il territorio si traduce in
                    gesti concreti, cucina condivisa e relazioni autentiche.
                  </p>
                </div>
              </div>
            </Card>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Card className="overflow-hidden border-white/60 bg-white/84">
                <div className="relative h-48">
                  <Image
                    src={siteImages.heroInset}
                    alt="Dettaglio di una giornata in laboratorio"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 18vw"
                  />
                </div>
                <CardContent className="pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--olive)">
                    Materia viva
                  </p>
                  <p className="mt-2 text-sm leading-7 text-black/72">
                    Il fare con le mani rende visibile la cura.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-white/60 bg-(--paper)/90">
                <div className="relative h-48">
                  <Image
                    src={siteImages.heroDetail}
                    alt="Dettaglio delle mani al lavoro"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 18vw"
                  />
                </div>
                <CardContent className="pt-5">
                  <div className="flex items-center gap-2 text-(--brown)">
                    <MapPin className="size-4" />
                    <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                      Da Castelgrande
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-black/72">
                    Radicati qui, portiamo esperienze in tutta Italia.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
