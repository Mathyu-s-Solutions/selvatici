import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { services } from "./content";
import { SectionHeading } from "./section-heading";

function FeaturedServiceCard({
  title,
  description,
  points,
  context,
  icon: Icon,
  image,
  className,
}: {
  title: string;
  description: string;
  points: string[];
  context: string;
  icon: React.ComponentType<{ className?: string }>;
  image?: string;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden border-white/50 bg-white/82",
        className,
      )}
    >
      {image ? (
        <>
          <div className="absolute inset-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover opacity-28"
              sizes="(max-width: 1024px) 100vw, 36vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(255,250,244,0.95),rgba(255,250,244,0.82)_46%,rgba(255,250,244,0.42))]" />
          </div>
          <div className="relative p-5 sm:p-8 lg:p-10">
            <div className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl bg-(--peach)/18 text-(--olive)">
              <Icon className="size-5" />
            </div>
            <h3 className="font-display text-4xl leading-tight text-foreground">
              {title}
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-black/72">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {points.map((point) => (
                <Badge
                  key={point}
                  variant="soft"
                  className="bg-white/72 text-black/68"
                >
                  {point}
                </Badge>
              ))}
            </div>
            <p className="mt-8 text-sm font-medium text-(--brown)">{context}</p>
          </div>
        </>
      ) : null}
    </Card>
  );
}

function CompactServiceCard({
  title,
  description,
  points,
  context,
  icon: Icon,
}: {
  title: string;
  description: string;
  points: string[];
  context: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Card className="relative overflow-hidden border-white/45 bg-white/78">
      <div className="absolute -right-5 -top-5 text-(--petrol)/10">
        <Icon className="size-28" />
      </div>
      <CardHeader>
        <div className="mb-4 inline-flex size-11 items-center justify-center rounded-2xl bg-(--petrol)/12 text-(--olive)">
          <Icon className="size-5" />
        </div>
        <CardTitle className="text-2xl leading-tight">{title}</CardTitle>
        <CardDescription className="text-sm leading-7">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 text-sm leading-7 text-black/72">
          {points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-2 size-1.5 rounded-full bg-(--peach)" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm font-medium text-(--brown)">{context}</p>
      </CardContent>
    </Card>
  );
}

export function ServicesSection() {
  const [cooking, orto, cucito, chef, tour] = services;

  return (
    <section id="services" className="scroll-mt-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Servizi"
            title="Esperienze che si impastano, si coltivano, si cuciono e si raccontano."
            description="Ogni proposta nasce per mettere in relazione benessere, manualita, territorio e comunita. Cambia il formato, ma resta la stessa intenzione: lasciare qualcosa di vivo nelle persone e nei luoghi che lo ospitano."
          />

          <Card className="max-w-md border-white/50 bg-white/80">
            <CardContent className="pt-6">
              <p className="text-sm leading-7 text-black/70">
                Ogni laboratorio o esperienza puo essere adattato per durata,
                numero di partecipanti, spazio disponibile e obiettivo
                educativo, sociale o turistico.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          <FeaturedServiceCard {...cooking} className="lg:col-span-7" />

          <div className="grid gap-5 lg:col-span-5">
            <CompactServiceCard {...orto} />
            <CompactServiceCard {...cucito} />
          </div>

          <FeaturedServiceCard {...chef} className="lg:col-span-5" />

          <Card className="overflow-hidden border-white/50 bg-white/82 lg:col-span-7">
            <div className="grid gap-0 lg:grid-cols-[0.62fr_0.38fr]">
              <div className="relative min-h-80">
                <Image
                  src={
                    tour.image ??
                    cooking.image ??
                    "/images/FOTO%20EDITATE/EH2A8408.jpg"
                  }
                  alt={tour.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 34vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(51,51,51,0.05),rgba(51,51,51,0.28))]" />
              </div>

              <div className="p-8 lg:p-10">
                <div className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl bg-(--sun)/26 text-(--brown)">
                  <tour.icon className="size-5" />
                </div>
                <h3 className="font-display text-4xl leading-tight text-foreground">
                  {tour.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-black/72">
                  {tour.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-black/72">
                  {tour.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 size-1.5 rounded-full bg-(--olive)" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-medium text-(--brown)">
                  {tour.context}
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex justify-start">
          <Button asChild size="lg" variant="outline" className="bg-white/70">
            <a href="#contact">Richiedi un progetto su misura</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
