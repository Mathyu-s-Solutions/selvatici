import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

import { services } from "./content";
import { SectionHeading } from "./section-heading";

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <FadeIn>
          <SectionHeading
            eyebrow="Servizi"
            title="Esperienze che si impastano, si coltivano e si raccontano."
            description="Ogni proposta nasce per mettere in relazione benessere, manualita, territorio e comunita."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <Card className="group h-full border-white/40 bg-white/55 shadow-[0_4px_20px_-10px_rgba(51,51,51,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/75 hover:shadow-[0_12px_36px_-16px_rgba(51,51,51,0.2)]">
                  {service.image && (
                    <div className="relative h-44 overflow-hidden rounded-t-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <CardContent className={service.image ? "pt-5" : "pt-8"}>
                    <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-(--petrol)/12 text-(--olive)">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-display text-xl leading-tight text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/58">
                      {service.description}
                    </p>
                    <p className="mt-4 text-xs font-medium text-(--brown)">
                      {service.context}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn>
          <div className="flex justify-center">
            <Button asChild size="lg" variant="outline" className="bg-white/70">
              <a href="#contact">Richiedi un progetto su misura</a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
