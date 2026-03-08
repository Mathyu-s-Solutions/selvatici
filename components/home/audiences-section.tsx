import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { audiences, siteImages } from "./content";
import { SectionHeading } from "./section-heading";

function AudienceCard({
  title,
  description,
  activities,
  icon: Icon,
}: {
  title: string;
  description: string;
  activities: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Card className="h-full border-white/45 bg-white/78 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-38px_rgba(51,51,51,0.42)]">
      <CardHeader>
        <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-(--sun)/28 text-(--brown)">
          <Icon className="size-5" />
        </div>
        <CardTitle className="text-[1.85rem] leading-tight">{title}</CardTitle>
        <CardDescription className="text-base leading-8">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="rounded-3xl bg-(--sand)/66 px-4 py-4 text-sm leading-7 text-black/72">
          {activities}
        </p>
      </CardContent>
    </Card>
  );
}

export function AudiencesSection() {
  return (
    <section id="audiences" className="scroll-mt-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[3rem] border border-white/55 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(239,228,209,0.56))] px-6 py-10 shadow-[0_24px_80px_-48px_rgba(51,51,51,0.4)] lg:px-10 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Pubblici"
              title="Percorsi pensati per eta, contesti e bisogni diversi."
              description="Le attivita di I Selvatici si adattano a situazioni educative, turistiche, sociali e familiari. Cambia il contesto, ma resta la stessa intenzione: creare esperienze calde, utili e profondamente condivise."
            />

            <Card className="overflow-hidden border-white/50 bg-white/78">
              <div className="relative h-72">
                <Image
                  src={siteImages.audience}
                  alt="Partecipanti durante un laboratorio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 28vw"
                />
              </div>
              <CardContent className="pt-6">
                <p className="text-sm leading-7 text-black/70">
                  Scuole, famiglie, centri estivi, contesti sociali, gruppi
                  turistici e realta educative possono ospitare percorsi su
                  misura, progettati per l&apos;eta, il tempo e il livello di
                  coinvolgimento desiderato.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {audiences.map((audience) => (
              <AudienceCard key={audience.title} {...audience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
