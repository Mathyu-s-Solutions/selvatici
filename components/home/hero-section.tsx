import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

import { HeroCanvas } from "@/components/hero-canvas";
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
      className="scroll-mt-24 px-6 pb-24 pt-8 lg:px-8 lg:pb-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
        <div className="space-y-8 lg:pr-6">
          <Badge variant="olive" className="bg-white/72">
            Castelgrande, Basilicata · itineranti in tutta Italia
          </Badge>

          <div className="space-y-6">
            <h1 className="font-display text-5xl leading-[0.9] tracking-tight text-balance text-foreground md:text-7xl xl:text-[5.8rem]">
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

        <div className="relative min-h-[34rem] sm:min-h-[38rem] lg:min-h-[44rem]">
          <div className="absolute inset-0 rounded-[2.7rem] bg-[radial-gradient(circle_at_top,rgba(255,176,103,0.28),transparent_40%),linear-gradient(155deg,rgba(255,250,244,0.88),rgba(239,228,209,0.74))] shadow-[0_28px_90px_-44px_rgba(51,51,51,0.45)]" />
          <div className="absolute inset-3 overflow-hidden rounded-[2.25rem] border border-white/65 bg-white/26 backdrop-blur-sm">
            <div className="absolute inset-y-0 left-0 right-[32%] overflow-hidden rounded-[1.9rem]">
              <Image
                src={siteImages.heroMain}
                alt="Laboratorio condiviso di I Selvatici"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 38vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(51,51,51,0.08),rgba(51,51,51,0.32))]" />
            </div>

            <Card className="absolute right-4 top-4 w-[36%] overflow-hidden border-white/70 bg-white/84">
              <div className="relative aspect-[4/5]">
                <Image
                  src={siteImages.heroInset}
                  alt="Dettaglio di una giornata in laboratorio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 35vw, 16vw"
                />
              </div>
              <CardContent className="pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--brown)">
                  Dove nasce il gesto
                </p>
                <p className="mt-2 text-sm leading-7 text-black/72">
                  Mani, attenzione e ascolto diventano una forma concreta di
                  comunita.
                </p>
              </CardContent>
            </Card>

            <Card className="absolute bottom-4 right-4 w-[48%] border-white/70 bg-white/84">
              <CardContent className="pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--olive)">
                  Ritmo editoriale
                </p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-black/72">
                  <div className="rounded-3xl bg-(--paper) px-4 py-3">
                    Terra, tavola, manualita e relazioni si intrecciano nello
                    stesso gesto.
                  </div>
                  <div className="rounded-3xl bg-white px-4 py-3">
                    Ogni format puo adattarsi al luogo, al pubblico e al tempo
                    disponibile.
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="absolute left-[54%] top-[32%] hidden h-40 w-40 rounded-full border border-white/50 bg-white/28 p-3 backdrop-blur-md md:block">
              <div className="h-full w-full overflow-hidden rounded-full bg-[radial-gradient(circle_at_top,rgba(255,176,103,0.3),rgba(255,250,244,0.55))]">
                <HeroCanvas />
              </div>
            </div>

            <Card className="absolute bottom-4 left-4 w-56 border-white/70 bg-(--paper)/86">
              <CardContent className="pt-5">
                <div className="flex items-center gap-2 text-(--brown)">
                  <MapPin className="size-4" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                    Da Castelgrande
                  </p>
                </div>
                <p className="mt-3 text-sm leading-7 text-black/72">
                  Un punto di partenza radicato, con la possibilita di portare
                  le esperienze in altri territori e contesti.
                </p>
              </CardContent>
            </Card>

            <Card className="absolute left-[44%] top-4 hidden w-52 border-white/70 bg-white/80 xl:block">
              <div className="grid gap-0 sm:grid-cols-[0.8fr_1fr]">
                <div className="relative min-h-28">
                  <Image
                    src={siteImages.heroDetail}
                    alt="Dettaglio delle mani al lavoro"
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--olive)">
                    Materia viva
                  </p>
                  <p className="mt-2 text-sm leading-6 text-black/70">
                    Il fare con le mani rende visibile la cura.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
