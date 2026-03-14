import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

import { audiences } from "./content";
import { SectionHeading } from "./section-heading";

export function AudiencesSection() {
  return (
    <section id="audiences" className="scroll-mt-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <FadeIn>
          <SectionHeading
            eyebrow="Pubblici"
            title="Percorsi pensati per eta, contesti e bisogni diversi."
            description="Le attivita si adattano a situazioni educative, turistiche, sociali e familiari."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <StaggerItem key={audience.title}>
                <div className="group h-full rounded-2xl border border-white/40 bg-white/50 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/70 hover:shadow-[0_8px_28px_-12px_rgba(51,51,51,0.15)]">
                  <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-(--sun)/20 text-(--brown)">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-display text-xl leading-tight text-foreground">
                    {audience.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-black/58">
                    {audience.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
