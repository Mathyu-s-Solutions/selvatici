import Image from "next/image";

import { FadeIn } from "@/components/ui/fade-in";

import { siteImages, values } from "./content";
import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="space-y-8">
            <FadeIn>
              <SectionHeading
                eyebrow="Chi siamo"
                title="Radici lucane, visione condivisa, gesti che restano umani."
                description="I Selvatici nasce dall'incontro tra terra, cibo, tradizioni locali e desiderio di costruire esperienze autentiche. Il benessere passa dalle mani, dai materiali, dai ritmi lenti e dalle relazioni reali."
              />
            </FadeIn>

            <FadeIn delay={0.1}>
              <blockquote className="border-l-2 border-(--peach) pl-5">
                <p className="font-display text-2xl leading-snug text-foreground sm:text-3xl">
                  &ldquo;Il vero benessere nasce quando il singolo sta bene
                  nella comunita.&rdquo;
                </p>
                <p className="mt-4 text-sm leading-7 text-black/60">
                  Da Castelgrande partono percorsi che mettono insieme persone,
                  paesaggi, biodiversita e saperi locali.
                </p>
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid gap-5 sm:grid-cols-3">
                {values.map((value) => (
                  <div key={value.title}>
                    <p className="font-display text-lg font-semibold text-foreground">
                      {value.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-black/58">
                      {value.text}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <div className="grid grid-cols-2 gap-3">
              <div className="overflow-hidden rounded-2xl">
                <div className="relative aspect-3/4">
                  <Image
                    src={siteImages.aboutMain}
                    alt="Ritratto di un momento vissuto nei laboratori"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <div className="overflow-hidden rounded-2xl">
                  <div className="relative aspect-square">
                    <Image
                      src={siteImages.aboutHands}
                      alt="Gesto condiviso in cucina"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <div className="relative aspect-square">
                    <Image
                      src={siteImages.aboutDetail}
                      alt="Dettaglio di un laboratorio di gruppo"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
