import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

import { siteImages } from "./content";

export function HeroSection() {
  return (
    <section
      id="home"
      className="scroll-mt-16 px-4 pb-12 pt-4 sm:px-6 sm:pb-16 sm:pt-6 lg:px-8 lg:pb-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="space-y-6 lg:space-y-8">
          <FadeIn>
            <Badge variant="olive" className="bg-white/72">
              Castelgrande, Basilicata · itineranti in tutta Italia
            </Badge>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="font-display text-4xl leading-[0.92] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Coltiviamo legami. Cuciniamo comunita. Intrecciamo territori.
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="max-w-lg text-base leading-7 text-black/62 sm:text-lg sm:leading-8">
              Laboratori, esperienze culinarie e percorsi di comunita radicati
              nella terra, nei saperi manuali e nel benessere condiviso.
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="earth">
                <a href="#services">
                  Scopri i laboratori
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/70"
              >
                <a href="#contact">Contattaci</a>
              </Button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.12} y={32}>
          <div className="relative overflow-hidden rounded-3xl border border-white/50 shadow-[0_16px_48px_-20px_rgba(51,51,51,0.3)]">
            <div className="relative aspect-4/5 sm:aspect-3/4 lg:aspect-4/5">
              <Image
                src={siteImages.heroMain}
                alt="Laboratorio condiviso di I Selvatici"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
            </div>
            <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/30 bg-white/80 px-5 py-4 backdrop-blur-md sm:inset-x-5 sm:bottom-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--brown)">
                Esperienze vive
              </p>
              <p className="mt-1.5 text-sm leading-6 text-black/68">
                Territorio, cucina condivisa e relazioni autentiche.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
