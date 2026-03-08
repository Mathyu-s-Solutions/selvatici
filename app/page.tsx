import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ChefHat,
  Compass,
  HeartHandshake,
  House,
  Leaf,
  Map,
  MapPin,
  Phone,
  Scissors,
  School,
  Sparkles,
  SunMedium,
  Users,
  UtensilsCrossed,
} from "lucide-react";

import { HeroCanvas } from "@/components/hero-canvas";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type Service = {
  title: string;
  description: string;
  points: string[];
  context: string;
  icon: LucideIcon;
  span: string;
  featured?: boolean;
  image?: string;
};

type Audience = {
  title: string;
  description: string;
  activities: string;
  icon: LucideIcon;
};

const images = {
  hero: "/images/FOTO%20EDITATE/EH2A8670.jpg",
  atelier: "/images/FOTO%20EDITATE/EH2A8614.jpg",
  hands: "/images/FOTO%20EDITATE/EH2A8548.jpg",
  circle: "/images/FOTO%20EDITATE/EH2A8456.jpg",
  portrait: "/images/FOTO%20EDITATE/EH2A8566.jpg",
  group: "/images/FOTO%20EDITATE/EH2A8408.jpg",
};

const services: Service[] = [
  {
    title: "Laboratori di cucina",
    description:
      "Ricette tradizionali e creative, tempi lenti, profumi condivisi: la cucina diventa un gesto di benessere, ascolto e relazione.",
    points: [
      "Percorsi stagionali e educazione alimentare",
      "Collaborazione, empatia e convivialita",
      "Ricette come memoria, racconto e rituale comune",
    ],
    context: "Per scuole, famiglie, gruppi turistici e comunita.",
    icon: UtensilsCrossed,
    span: "lg:col-span-7",
    featured: true,
    image: images.group,
  },
  {
    title: "Laboratori di ortoterapia",
    description:
      "Lavorare la terra insegna pazienza, responsabilita e appartenenza. Ogni seme curato diventa una forma concreta di benessere.",
    points: [
      "Stimolazione sensoriale e riduzione dello stress",
      "Cura delle piante e rispetto dei cicli naturali",
      "Scambio intergenerazionale e relazione con il paesaggio",
    ],
    context: "Per progetti educativi, inclusivi e di benessere condiviso.",
    icon: Leaf,
    span: "lg:col-span-5",
  },
  {
    title: "Laboratori di cucito",
    description:
      "Dal materiale grezzo al capo finito: un percorso di manualita e sostenibilita che restituisce valore ai gesti lenti e ai materiali del territorio.",
    points: [
      "Dalla lana tosata al filo e alla creazione finale",
      "Creativita, precisione e autostima attraverso il fare",
      "Recupero di saperi dimenticati e riduzione degli sprechi",
    ],
    context:
      "Per chi vuole creare, imparare e trasformare la materia con consapevolezza.",
    icon: Scissors,
    span: "lg:col-span-5",
  },
  {
    title: "Chef a domicilio",
    description:
      "Un servizio privato e su misura in cui menu, materie prime e racconto dei piatti si intrecciano in un'esperienza accogliente e curata.",
    points: [
      "Menu personalizzati e ingredienti stagionali",
      "Preparazione, impiattamento e presentazione dei piatti",
      "Convivialita domestica, cura degli ospiti e riordino finale",
    ],
    context:
      "Per case, strutture ricettive, eventi privati e momenti speciali.",
    icon: ChefHat,
    span: "lg:col-span-7",
    featured: true,
    image: images.portrait,
  },
  {
    title: "Tour esperienziali",
    description:
      "Percorsi immersivi tra produttori, cucine, raccolte stagionali e degustazioni per vivere il territorio in modo autentico e condiviso.",
    points: [
      "Visite a realta agricole e produttori locali",
      "Cooking class, assaggi guidati e raccolte stagionali",
      "Itinerari tra paesaggio, biodiversita e cultura alimentare",
    ],
    context:
      "Per gruppi turistici, associazioni ed esperienze territoriali su misura.",
    icon: Map,
    span: "lg:col-span-12",
  },
];

const audiences: Audience[] = [
  {
    title: "Scuole",
    description:
      "Attivita didattiche che uniscono educazione ambientale, alimentare e apprendimento attraverso il fare.",
    activities:
      "Laboratori di cucina, orti condivisi, manualita creativa e progetti tematici.",
    icon: School,
  },
  {
    title: "Centri estivi",
    description:
      "Proposte giocose e coinvolgenti per trasformare il tempo libero in un'esperienza viva, creativa e concreta.",
    activities:
      "Attivita tematiche, esperienze outdoor, cucina e piccoli percorsi di gruppo.",
    icon: SunMedium,
  },
  {
    title: "Case di riposo",
    description:
      "Percorsi pensati per attivare memoria, manualita e relazioni, restituendo spazio alle tradizioni locali e al fare insieme.",
    activities:
      "Stimolazione cognitiva, gesti lenti, laboratori intergenerazionali e condivisione di storie.",
    icon: HeartHandshake,
  },
  {
    title: "Carceri e comunita",
    description:
      "Attivita orientate all'inclusione, alla collaborazione e allo sviluppo di competenze pratiche che restituiscono fiducia.",
    activities:
      "Percorsi di gruppo, riabilitazione attraverso il fare e manualita applicata.",
    icon: Users,
  },
  {
    title: "Gruppi turistici",
    description:
      "Esperienze territoriali per chi cerca autenticita, cucina italiana, biodiversita e incontri veri con i luoghi.",
    activities:
      "Cooking class, visite, degustazioni guidate e percorsi immersivi nel territorio.",
    icon: Compass,
  },
  {
    title: "Famiglie e comunita locali",
    description:
      "Occasioni per stare insieme, imparare con le mani e creare nuovi rituali condivisi tra generazioni diverse.",
    activities:
      "Giornate esperienziali, laboratori partecipati e momenti di benessere comunitario.",
    icon: House,
  },
];

const values = [
  {
    title: "Connessione con la terra",
    text: "Biodiversita, stagionalita e rispetto dei cicli naturali diventano il punto di partenza di ogni esperienza.",
  },
  {
    title: "Condivisione e comunita",
    text: "Si impara facendo insieme: attorno a un tavolo, in cucina o in un orto, le relazioni prendono forma concreta.",
  },
  {
    title: "Consapevolezza alimentare",
    text: "Il cibo torna a essere cultura, cura e scelta informata, non soltanto consumo veloce.",
  },
];

const benefits = [
  "Benessere psicofisico e riduzione dello stress",
  "Sviluppo di creativita, manualita e autonomia",
  "Legami sociali piu forti e partecipazione attiva",
  "Esperienze sostenibili, inclusive e radicate nel territorio",
];

const camminoPillars = [
  {
    title: "Orti condivisi",
    text: "Luoghi in cui imparare la cura, osservare i cicli naturali e coltivare appartenenza.",
  },
  {
    title: "Cucine aperte",
    text: "Spazi dove ricette, storie e tecniche passano di mano in mano e diventano cultura viva.",
  },
  {
    title: "Saperi in circolo",
    text: "Semi, ricette, pollinatori, tecniche e memoria locale come patrimonio condiviso tra territori.",
  },
  {
    title: "Comunita che cresce",
    text: "Una rete diffusa di persone, luoghi e pratiche che si riconoscono nella cura del paesaggio e delle relazioni.",
  },
];

const quickLinks = [
  ["Chi siamo", "#about"],
  ["Servizi", "#services"],
  ["Pubblici", "#audiences"],
  ["Cammino", "#cammino"],
  ["Contatti", "#contact"],
] as const;

const contactInterests = [
  "Laboratori di cucina",
  "Ortoterapia",
  "Laboratori di cucito",
  "Chef a domicilio",
  "Tour esperienziali",
  "Partnership",
];

function SectionHeading({
  eyebrow,
  title,
  description,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  inverted?: boolean;
}) {
  return (
    <div className="max-w-2xl space-y-5">
      <Badge variant={inverted ? "inverted" : "olive"}>{eyebrow}</Badge>
      <h2
        className={cn(
          "font-display text-4xl leading-none tracking-tight text-balance md:text-5xl lg:text-[3.6rem]",
          inverted ? "text-(--paper)" : "text-foreground",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "max-w-xl text-base leading-8 text-pretty md:text-lg",
          inverted ? "text-white/78" : "text-black/68",
        )}
      >
        {description}
      </p>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Card
      className={cn(
        "group relative overflow-hidden border-white/50 bg-white/78",
        service.span,
      )}
    >
      {service.image ? (
        <>
          <div className="absolute inset-0">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover opacity-26 transition duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(255,250,244,0.95),rgba(255,250,244,0.74)_48%,rgba(255,250,244,0.35))]" />
          </div>
          <div className="relative grid h-full gap-6 md:grid-cols-[minmax(0,1fr)_13rem]">
            <div className="p-8 md:pr-0">
              <div className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl bg-(--peach)/18 text-(--olive)">
                <Icon className="size-5" />
              </div>
              <h3 className="font-display text-3xl leading-tight tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-black/70">
                {service.description}
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-black/72">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 size-1.5 rounded-full bg-(--olive)" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-medium text-(--brown)">
                {service.context}
              </p>
            </div>
            <div className="hidden items-end justify-end p-8 md:flex">
              <div className="rounded-[1.75rem] border border-white/70 bg-white/72 p-4 backdrop-blur-sm">
                <Image
                  src="/images/logos/ICONA/Logo_S2-01.png"
                  alt="Simbolo I Selvatici"
                  width={72}
                  height={72}
                  className="h-auto w-18"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <CardHeader>
            <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-(--petrol)/12 text-(--olive)">
              <Icon className="size-5" />
            </div>
            <CardTitle className="text-[2rem] leading-tight">
              {service.title}
            </CardTitle>
            <CardDescription className="text-base leading-8">
              {service.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm leading-7 text-black/72">
              {service.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-(--peach)" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-medium text-(--brown)">
              {service.context}
            </p>
          </CardContent>
        </>
      )}
    </Card>
  );
}

function AudienceCard({ audience }: { audience: Audience }) {
  const Icon = audience.icon;

  return (
    <Card className="h-full border-white/45 bg-white/76">
      <CardHeader>
        <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-(--sun)/28 text-(--brown)">
          <Icon className="size-5" />
        </div>
        <CardTitle className="text-[1.75rem]">{audience.title}</CardTitle>
        <CardDescription className="text-base leading-8">
          {audience.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="rounded-3xl bg-(--sand)/66 px-4 py-4 text-sm leading-7 text-black/72">
          {audience.activities}
        </p>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-136 bg-[radial-gradient(circle_at_18%_0%,rgba(255,176,103,0.24),transparent_36%),radial-gradient(circle_at_88%_8%,rgba(142,159,147,0.2),transparent_28%)]" />

      <section
        id="home"
        className="scroll-mt-24 px-6 pb-20 pt-6 lg:px-8 lg:pb-28"
      >
        <header className="mx-auto flex max-w-7xl flex-col gap-5 rounded-4xl border border-white/55 bg-white/52 px-5 py-4 backdrop-blur-md lg:flex-row lg:items-center lg:justify-between lg:px-6">
          <a href="#home" className="flex items-center gap-4">
            <Image
              src="/images/logos/COMPLETO/Logo_BASE_DEF-01.png"
              alt="I Selvatici"
              width={176}
              height={54}
              priority
              className="h-auto w-40 sm:w-44"
            />
          </a>

          <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-black/66">
            {quickLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-3 py-2 transition hover:bg-white/70 hover:text-foreground"
              >
                {label}
              </a>
            ))}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="ml-0 lg:ml-2"
            >
              <a href="#contact">Prenota un contatto</a>
            </Button>
          </nav>
        </header>

        <div className="mx-auto mt-10 grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <Badge variant="olive">Castelgrande, Basilicata · dal 2026</Badge>

            <div className="space-y-6">
              <h1 className="font-display text-5xl leading-[0.92] tracking-tight text-balance text-foreground md:text-7xl xl:text-[5.6rem]">
                Coltiviamo legami. Cuciniamo comunita. Intrecciamo territori.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-black/72 md:text-xl md:leading-9">
                I Selvatici crea laboratori, esperienze culinarie e percorsi di
                comunita radicati nella terra, nei saperi manuali e nel
                benessere condiviso. Ogni incontro e un invito a rallentare,
                fare con le mani e tornare a stare insieme davvero.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="earth">
                <a href="#services">
                  Scopri i laboratori
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">Contattaci</a>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="border-white/55 bg-white/74">
                <CardContent className="pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--olive)">
                    Esperienze
                  </p>
                  <p className="mt-2 text-sm leading-7 text-black/72">
                    Cucina, ortoterapia, cucito, chef a domicilio e tour
                    enogastronomici.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-white/55 bg-white/74">
                <CardContent className="pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--olive)">
                    Persone
                  </p>
                  <p className="mt-2 text-sm leading-7 text-black/72">
                    Scuole, famiglie, comunita, gruppi turistici e contesti
                    educativi o sociali.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-white/55 bg-white/74">
                <CardContent className="pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--olive)">
                    Territorio
                  </p>
                  <p className="mt-2 text-sm leading-7 text-black/72">
                    Con base a Castelgrande e disponibilita operativa in
                    Basilicata e in tutta Italia.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative min-h-116 lg:min-h-152">
            <div className="absolute inset-0 rounded-[2.75rem] bg-[radial-gradient(circle_at_top,rgba(255,176,103,0.28),transparent_40%),linear-gradient(155deg,rgba(255,250,244,0.86),rgba(239,228,209,0.74))] shadow-[0_28px_90px_-44px_rgba(51,51,51,0.45)]" />
            <div className="absolute inset-3 overflow-hidden rounded-[2.2rem] border border-white/65 bg-white/28 backdrop-blur-sm">
              <Image
                src={images.hero}
                alt="Un momento condiviso in laboratorio"
                fill
                priority
                className="object-cover opacity-24 mix-blend-multiply"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0">
                <HeroCanvas />
              </div>
            </div>

            <Card className="absolute left-5 top-5 w-50 border-white/70 bg-white/80">
              <CardContent className="flex items-center gap-3 pt-5">
                <Image
                  src="/images/logos/ICONA/Logo_S2-01.png"
                  alt="Simbolo I Selvatici"
                  width={48}
                  height={48}
                  className="h-12 w-12"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--olive)">
                    Brand note
                  </p>
                  <p className="mt-1 text-sm leading-6 text-black/72">
                    Esperienze di comunita tra terra, cibo e tradizione.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute bottom-5 left-5 w-56 overflow-hidden border-white/70 bg-white/82 sm:w-68">
              <div className="relative h-40 sm:h-48">
                <Image
                  src={images.hands}
                  alt="Mani al lavoro durante un laboratorio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 224px, 272px"
                />
              </div>
              <CardContent className="pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--brown)">
                  Mani, tempo, relazione
                </p>
                <p className="mt-2 text-sm leading-7 text-black/72">
                  Ogni laboratorio parte dal gesto, passa dalla cura e arriva
                  alla condivisione.
                </p>
              </CardContent>
            </Card>

            <Card className="absolute bottom-12 right-5 hidden w-40 overflow-hidden border-white/70 bg-white/84 md:block">
              <div className="relative h-48">
                <Image
                  src={images.atelier}
                  alt="Gruppo al lavoro in cucina"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <main className="space-y-24 pb-16 lg:space-y-32 lg:pb-20">
        <section id="about" className="scroll-mt-24 px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Chi siamo"
                title="Radici lucane, visione condivisa, gesti che restano umani."
                description="I Selvatici nasce dall'incontro tra terra, cibo, tradizioni locali e desiderio di costruire esperienze autentiche. Qui il benessere non e una promessa astratta: passa dalle mani, dai materiali, dai ritmi lenti e dalle relazioni reali."
              />

              <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                <Card className="overflow-hidden border-white/50 bg-white/74">
                  <div className="relative h-72">
                    <Image
                      src={images.circle}
                      alt="Un laboratorio di cucina vissuto insieme"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 34vw"
                    />
                  </div>
                </Card>
                <Card className="border-white/50 bg-(--sand)/78">
                  <CardContent className="pt-8">
                    <p className="font-display text-3xl leading-tight text-foreground">
                      &ldquo;Il vero benessere nasce quando il singolo sta bene
                      nella comunita.&rdquo;
                    </p>
                    <p className="mt-5 text-sm leading-7 text-black/70">
                      Da Castelgrande partono percorsi che mettono insieme
                      persone, paesaggi, biodiversita e saperi locali.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid gap-4 md:grid-cols-3">
                {values.map((value) => (
                  <Card
                    key={value.title}
                    className="border-white/45 bg-white/76"
                  >
                    <CardHeader className="pb-4">
                      <CardTitle className="text-[1.8rem] leading-tight">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-7 text-black/72">
                        {value.text}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="overflow-hidden border-white/45 bg-white/78">
                <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="p-8 lg:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--brown)">
                      Perche esiste I Selvatici
                    </p>
                    <p className="mt-4 text-lg leading-9 text-black/74">
                      Esiste per ricucire il rapporto tra persone, terra e cibo.
                      Per riportare le tradizioni dentro esperienze
                      contemporanee. Per creare luoghi in cui imparare significa
                      anche rallentare, ascoltare e prendersi cura.
                    </p>
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                      {benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-3 rounded-[1.4rem] bg-(--paper) px-4 py-4 text-sm leading-7 text-black/72"
                        >
                          <Sparkles className="mt-1 size-4 shrink-0 text-(--olive)" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative min-h-72 lg:min-h-full">
                    <Image
                      src={images.portrait}
                      alt="Ritratto di uno dei momenti che definiscono I Selvatici"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(51,51,51,0.1),rgba(51,51,51,0.34))]" />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-10">
            <SectionHeading
              eyebrow="Servizi"
              title="Esperienze che si impastano, si coltivano, si cuciono e si raccontano."
              description="Ogni proposta nasce per mettere in relazione benessere, manualita, territorio e comunita. Alcune esperienze abitano la cucina, altre l'orto, altre ancora il tessuto sociale che si crea quando le persone fanno qualcosa insieme."
            />

            <div className="grid gap-5 lg:grid-cols-12">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section id="audiences" className="scroll-mt-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[3rem] border border-white/55 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(239,228,209,0.56))] px-6 py-10 shadow-[0_24px_80px_-48px_rgba(51,51,51,0.4)] lg:px-10 lg:py-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <SectionHeading
                eyebrow="Pubblici"
                title="Percorsi pensati per eta, contesti e bisogni diversi."
                description="Le attivita di I Selvatici si adattano a situazioni educative, turistiche, sociali e familiari. Cambia il contesto, ma resta la stessa intenzione: creare esperienze calde, utili e profondamente condivise."
              />

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {audiences.map((audience) => (
                  <AudienceCard key={audience.title} audience={audience} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cammino" className="scroll-mt-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-(--petrol) text-(--paper) shadow-[0_30px_90px_-38px_rgba(51,51,51,0.55)]">
            <div className="grid gap-12 px-6 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-14">
              <div className="space-y-8">
                <SectionHeading
                  eyebrow="Cammino dei Selvatici"
                  title="Un cammino che unisce territori, persone e saperi."
                  description="La visione a lungo termine e una rete diffusa di orti, cucine, ricette, biodiversita e comunita. Non un luogo unico, ma molti luoghi collegati da pratiche condivise, memoria viva e benessere collettivo."
                  inverted
                />

                <Card className="border-white/18 bg-white/10 text-white shadow-none">
                  <CardContent className="pt-8">
                    <p className="font-display text-3xl leading-tight text-balance md:text-[2.5rem]">
                      Un ecosistema di persone che si scambiano semi, ricette,
                      tecniche, storie e modi di stare al mondo piu consapevoli.
                    </p>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-white/76">
                      Il Cammino dei Selvatici immagina connessioni reali tra
                      territori diversi, dove il cibo e la manualita diventano
                      linguaggi comuni e strumenti di cura.
                    </p>
                  </CardContent>
                </Card>

                <Button asChild size="lg" variant="earth">
                  <a href="#contact">Parliamo del prossimo tratto di cammino</a>
                </Button>
              </div>

              <div className="space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  {camminoPillars.map((pillar) => (
                    <Card
                      key={pillar.title}
                      className="border-white/16 bg-white/10 text-white shadow-none"
                    >
                      <CardHeader>
                        <CardTitle className="text-[2rem] text-white">
                          {pillar.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm leading-7 text-white/76">
                          {pillar.text}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="overflow-hidden border-white/16 bg-white/8 text-white shadow-none">
                  <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                    <div className="relative min-h-72">
                      <Image
                        src={images.hero}
                        alt="Una comunita al lavoro durante un laboratorio"
                        fill
                        className="object-cover opacity-88"
                        sizes="(max-width: 768px) 100vw, 28vw"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(51,51,51,0.05),rgba(51,51,51,0.42))]" />
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
                        Un domani fatto di cucine condivise, orti connessi,
                        identita locali valorizzate e nuovi modi di riconoscersi
                        comunita attraverso la cura.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-10">
            <SectionHeading
              eyebrow="Contatti"
              title="Portiamo I Selvatici dove serve cura, relazione e manualita."
              description="Se vuoi ospitare un laboratorio, costruire un percorso su misura o organizzare un'esperienza privata, raccontaci il contesto. Ti aiutiamo a capire quale forma puo prendere l'incontro."
            />

            <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="space-y-5">
                <Card className="border-white/50 bg-white/78">
                  <CardHeader>
                    <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-(--petrol)/12 text-(--olive)">
                      <MapPin className="size-5" />
                    </div>
                    <CardTitle className="text-[2rem]">
                      Castelgrande, Basilicata
                    </CardTitle>
                    <CardDescription className="text-base leading-8">
                      Sede operativa e punto di partenza di esperienze che
                      possono muoversi in tutta Italia.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-white/50 bg-white/78">
                  <CardHeader>
                    <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-(--sun)/28 text-(--brown)">
                      <Phone className="size-5" />
                    </div>
                    <CardTitle className="text-[2rem]">
                      Parliamone direttamente
                    </CardTitle>
                    <CardDescription className="text-base leading-8">
                      Per richieste rapide, prenotazioni o collaborazioni,
                      questi sono i riferimenti attivi.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-base text-black/74">
                    <a
                      className="block rounded-[1.35rem] bg-(--paper) px-4 py-4 transition hover:bg-white"
                      href="tel:+393477930530"
                    >
                      +39 3477930530
                    </a>
                    <a
                      className="block rounded-[1.35rem] bg-(--paper) px-4 py-4 transition hover:bg-white"
                      href="tel:+393471551887"
                    >
                      +39 3471551887
                    </a>
                    <p className="rounded-[1.35rem] bg-(--paper) px-4 py-4 text-sm leading-7 text-black/68">
                      Email in aggiornamento. Intanto puoi contattarci
                      telefonicamente oppure avviare una richiesta dal modulo
                      qui accanto.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-white/55 bg-white/82">
                <CardHeader>
                  <CardTitle className="text-[2.1rem]">
                    Modulo di primo contatto
                  </CardTitle>
                  <CardDescription className="text-base leading-8">
                    Raccontaci chi sei, che tipo di esperienza immagini e per
                    quale realta stai scrivendo.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      placeholder="Nome e cognome"
                      aria-label="Nome e cognome"
                    />
                    <Input
                      placeholder="Email"
                      aria-label="Email"
                      type="email"
                    />
                    <Input
                      placeholder="Telefono"
                      aria-label="Telefono"
                      type="tel"
                    />
                    <Input
                      placeholder="Organizzazione o contesto"
                      aria-label="Organizzazione o contesto"
                    />
                  </div>

                  <select
                    aria-label="Interesse"
                    className="flex h-12 w-full rounded-full border border-black/10 bg-white/80 px-4 text-sm text-foreground outline-none transition focus-visible:border-(--petrol) focus-visible:ring-2 focus-visible:ring-(--petrol)/20"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Interesse principale
                    </option>
                    {contactInterests.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>

                  <Textarea
                    placeholder="Raccontaci il contesto, il pubblico coinvolto e il tipo di esperienza che vorresti costruire insieme."
                    aria-label="Messaggio"
                  />

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button asChild size="lg" variant="earth">
                      <a href="tel:+393477930530">Chiama per prenotare</a>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href="tel:+393471551887">Parla con il team</a>
                    </Button>
                  </div>

                  <p className="text-sm leading-7 text-black/60">
                    Questa prima versione raccoglie gia la struttura del
                    contatto. L&apos;invio via email verra collegato appena il
                    canale definitivo sara attivo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 pb-10 pt-4 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[2.5rem] border border-white/55 bg-white/64 px-6 py-8 backdrop-blur-sm lg:grid-cols-[1fr_auto] lg:items-end lg:px-8">
          <div className="space-y-4">
            <Image
              src="/images/logos/COMPLETO/Logo_BASE_DEF-01.png"
              alt="I Selvatici"
              width={176}
              height={54}
              className="h-auto w-40"
            />
            <p className="max-w-xl text-sm leading-7 text-black/68">
              Esperienze di comunita tra terra, cibo e tradizione. Da
              Castelgrande, con radici forti e una visione aperta ai territori.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-sm font-medium text-black/64">
            {quickLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-3 py-2 transition hover:bg-white/70 hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
