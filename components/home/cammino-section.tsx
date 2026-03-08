import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { camminoPillars, siteImages } from "./content";
import { SectionHeading } from "./section-heading";

export function CamminoSection() {
  return (
    <section id="cammino" className="scroll-mt-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-(--petrol) text-(--paper) shadow-[0_30px_90px_-38px_rgba(51,51,51,0.55)] sm:rounded-[3rem]">
        <div className="grid items-start gap-8 px-4 py-8 sm:gap-12 sm:px-6 sm:py-12 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:py-14">
          <div className="space-y-8 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Cammino dei Selvatici"
              title="Un cammino che unisce territori, persone e saperi."
              description="La visione a lungo termine e una rete diffusa di orti, cucine, ricette, biodiversita e comunita. Non un luogo unico, ma molti luoghi collegati da pratiche condivise, memoria viva e benessere collettivo."
              inverted
            />

            <Card className="border-white/18 bg-white/10 text-white shadow-none">
              <CardContent className="grid gap-8 pt-8 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--sun)">
                    Oggi
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/76">
                    Laboratori, esperienze culinarie e incontri che costruiscono
                    relazione tra persone, cibo e territorio.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--sun)">
                    Domani
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/76">
                    Una rete attiva di orti, cucine, ricette e memoria locale,
                    capace di mettere in circolo pratiche di cura e conoscenza.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Button asChild size="lg" variant="earth">
              <a href="#contact">Parliamo del prossimo tratto di cammino</a>
            </Button>
          </div>

          <div className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              {camminoPillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <Card
                    key={pillar.title}
                    className="border-white/16 bg-white/10 text-white shadow-none"
                  >
                    <CardHeader>
                      <div className="mb-4 inline-flex size-11 items-center justify-center rounded-2xl bg-white/12 text-(--sun)">
                        <Icon className="size-5" />
                      </div>
                      <CardTitle className="text-2xl text-white">
                        {pillar.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-7 text-white/76">
                        {pillar.text}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="overflow-hidden border-white/16 bg-white/8 text-white shadow-none">
              <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-80">
                  <Image
                    src={siteImages.camminoMain}
                    alt="Una comunita al lavoro durante un laboratorio"
                    fill
                    className="object-cover opacity-90"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(51,51,51,0.05),rgba(51,51,51,0.4))]" />
                </div>
                <div className="p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--sun)">
                    Visione in divenire
                  </p>
                  <p className="mt-4 font-display text-3xl leading-tight text-white">
                    Dalle esperienze di oggi a una rete viva di territori in
                    ascolto reciproco.
                  </p>
                  <p className="mt-5 text-sm leading-7 text-white/76">
                    Un domani fatto di cucine condivise, orti connessi, identita
                    locali valorizzate e nuovi modi di riconoscersi comunita
                    attraverso la cura.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-white/12 px-4 py-4 text-sm leading-7 text-white/76">
                      Scambio di ricette, semi, tecniche e memoria locale.
                    </div>
                    <div className="rounded-3xl bg-white/12 px-4 py-4 text-sm leading-7 text-white/76">
                      Connessioni tra persone, paesaggi, biodiversita e
                      ospitalita.
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="overflow-hidden border-white/16 bg-white/8 text-white shadow-none">
                <div className="relative h-full min-h-52">
                  <Image
                    src={siteImages.camminoDetail}
                    alt="Dettaglio di un momento condiviso"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 22vw"
                  />
                </div>
              </Card>
              <Card className="border-white/16 bg-white/10 text-white shadow-none">
                <CardContent className="pt-8">
                  <p className="font-display text-3xl leading-tight text-white">
                    Un cammino distribuito, concreto, praticabile.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/76">
                    Non un manifesto astratto, ma una somma di luoghi reali e
                    relazioni attive che possono crescere nel tempo, tratto dopo
                    tratto.
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
