import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

import { benefits, processSteps, siteImages, values } from "./content";
import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Chi siamo"
            title="Radici lucane, visione condivisa, gesti che restano umani."
            description="I Selvatici nasce dall'incontro tra terra, cibo, tradizioni locali e desiderio di costruire esperienze autentiche. Qui il benessere non e una promessa astratta: passa dalle mani, dai materiali, dai ritmi lenti e dalle relazioni reali."
          />

          <Card className="border-white/50 bg-(--sand)/78">
            <CardContent className="pt-8">
              <p className="font-display text-3xl leading-tight text-foreground">
                &ldquo;Il vero benessere nasce quando il singolo sta bene nella
                comunita.&rdquo;
              </p>
              <p className="mt-5 text-sm leading-7 text-black/70">
                Da Castelgrande partono percorsi che mettono insieme persone,
                paesaggi, biodiversita e saperi locali, lasciando spazio a forme
                di apprendimento piu lente, tattili e condivise.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-3 sm:grid-cols-2">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <Card key={step.title} className="border-white/45 bg-white/78">
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-flex size-11 items-center justify-center rounded-2xl bg-(--petrol)/12 text-(--olive)">
                      <Icon className="size-5" />
                    </div>
                    <p className="font-display text-2xl leading-tight text-foreground">
                      {step.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-black/68">
                      {step.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="overflow-hidden border-white/45 bg-white/78 md:row-span-2">
            <div className="relative min-h-80 md:min-h-full">
              <Image
                src={siteImages.aboutMain}
                alt="Ritratto di un momento vissuto nei laboratori I Selvatici"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 32vw"
              />
            </div>
          </Card>

          <Card className="overflow-hidden border-white/45 bg-white/78">
            <div className="relative h-64">
              <Image
                src={siteImages.aboutHands}
                alt="Gesto condiviso in cucina"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 24vw"
              />
            </div>
          </Card>

          <Card className="overflow-hidden border-white/45 bg-white/78">
            <div className="relative h-64">
              <Image
                src={siteImages.aboutDetail}
                alt="Dettaglio di un laboratorio di gruppo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 24vw"
              />
            </div>
          </Card>

          <Card className="border-white/45 bg-white/78 md:col-span-2">
            <CardContent className="grid gap-8 pt-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--brown)">
                  Perche esiste I Selvatici
                </p>
                <p className="mt-4 text-lg leading-9 text-black/74">
                  Esiste per ricucire il rapporto tra persone, terra e cibo. Per
                  riportare le tradizioni dentro esperienze contemporanee. Per
                  creare luoghi in cui imparare significa anche rallentare,
                  ascoltare e prendersi cura.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="rounded-full bg-(--paper) px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-black/66"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-4xl bg-(--paper) p-5"
                  >
                    <p className="font-display text-2xl leading-tight text-foreground">
                      {value.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-black/68">
                      {value.text}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
