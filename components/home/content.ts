import type { LucideIcon } from "lucide-react";
import {
  ChefHat,
  Compass,
  HeartHandshake,
  House,
  Leaf,
  Map,
  MapPin,
  Scissors,
  School,
  Sparkles,
  SunMedium,
  Users,
  UtensilsCrossed,
} from "lucide-react";

export type Insight = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export type Service = {
  title: string;
  description: string;
  points: string[];
  context: string;
  icon: LucideIcon;
  image?: string;
  featured?: boolean;
};

export type Audience = {
  title: string;
  description: string;
  activities: string;
  icon: LucideIcon;
};

export type Pillar = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export const siteImages = {
  logoFull: "/images/logos/COMPLETO/Logo_BASE_DEF-cropped.png",
  heroMain: "/images/FOTO%20EDITATE/EH2A8670.jpg",
  heroInset: "/images/FOTO%20EDITATE/EH2A8456.jpg",
  heroDetail: "/images/FOTO%20EDITATE/EH2A8548.jpg",
  aboutMain: "/images/FOTO%20EDITATE/EH2A8566.jpg",
  aboutHands: "/images/FOTO%20EDITATE/EH2A8614.jpg",
  aboutDetail: "/images/FOTO%20EDITATE/EH2A8458.jpg",
  servicesMain: "/images/FOTO%20EDITATE/EH2A8408.jpg",
  servicesChef: "/images/FOTO%20EDITATE/EH2A8501.jpg",
  servicesTour: "/images/FOTO%20EDITATE/EH2A8487.jpg",
  audience: "/images/FOTO%20EDITATE/EH2A8439.jpg",
  camminoMain: "/images/FOTO%20EDITATE/EH2A8641.jpg",
  camminoVision: "/images/FOTO%20EDITATE/EH2A8603.jpg",
  camminoDetail: "/images/FOTO%20EDITATE/EH2A8535.jpg",
  contactMain: "/images/FOTO%20EDITATE/EH2A8482.jpg",
  contactDetail: "/images/FOTO%20EDITATE/EH2A8397.jpg",
} as const;

export const quickLinks = [
  ["Chi siamo", "#about"],
  ["Servizi", "#services"],
  ["Pubblici", "#audiences"],
  ["Cammino", "#cammino"],
  ["Contatti", "#contact"],
] as const;

export const heroHighlights: Insight[] = [
  {
    title: "Benessere condiviso",
    text: "Esperienze che rallentano, fanno stare bene e rimettono al centro la relazione.",
    icon: HeartHandshake,
  },
  {
    title: "Saperi manuali",
    text: "Cucina, orto e cucito come pratiche concrete di apprendimento e autostima.",
    icon: Scissors,
  },
  {
    title: "Territorio vivo",
    text: "Castelgrande come radice, l'Italia come orizzonte operativo per i progetti itineranti.",
    icon: MapPin,
  },
];

export const heroTags = [
  "cucina condivisa",
  "territorio",
  "manualita",
  "tradizioni locali",
  "biodiversita",
  "comunita",
];

export const processSteps: Pillar[] = [
  {
    title: "Terra",
    text: "Osservare i cicli naturali e ritrovare il ritmo giusto delle cose.",
    icon: Leaf,
  },
  {
    title: "Tavola",
    text: "Cucinare e mangiare come gesto di cura, racconto e ospitalita.",
    icon: UtensilsCrossed,
  },
  {
    title: "Mani",
    text: "Fare con precisione e pazienza per trasformare materiali e relazioni.",
    icon: Sparkles,
  },
  {
    title: "Legami",
    text: "Ogni esperienza e pensata per lasciare relazioni piu forti di prima.",
    icon: Users,
  },
];

export const values = [
  {
    title: "Terra",
    text: "Biodiversita, stagionalita e rispetto dei cicli naturali come punto di partenza.",
  },
  {
    title: "Comunita",
    text: "Si impara facendo insieme: le relazioni prendono forma concreta.",
  },
  {
    title: "Cibo",
    text: "Il cibo torna a essere cultura, cura e scelta consapevole.",
  },
] as const;

export const benefits = [
  "Benessere psicofisico e riduzione dello stress",
  "Sviluppo di creativita, manualita e autonomia",
  "Legami sociali piu forti e partecipazione attiva",
  "Esperienze sostenibili, inclusive e radicate nel territorio",
];

export const services: Service[] = [
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
    image: siteImages.servicesMain,
    featured: true,
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
  },
  {
    title: "Laboratori di cucito",
    description:
      "Dal materiale grezzo al capo finito: manualita e sostenibilita che restituiscono valore ai gesti lenti.",
    points: [
      "Dalla lana tosata al filo e alla creazione finale",
      "Creativita, precisione e autostima attraverso il fare",
      "Recupero di saperi dimenticati e riduzione degli sprechi",
    ],
    context:
      "Per chi vuole creare, imparare e trasformare la materia con consapevolezza.",
    icon: Scissors,
  },
  {
    title: "Chef a domicilio",
    description:
      "Un servizio su misura in cui menu, materie prime e racconto si intrecciano in un'esperienza curata e accogliente.",
    points: [
      "Menu personalizzati e ingredienti stagionali",
      "Preparazione, impiattamento e presentazione dei piatti",
      "Convivialita domestica, cura degli ospiti e riordino finale",
    ],
    context:
      "Per case, strutture ricettive, eventi privati e momenti speciali.",
    icon: ChefHat,
    image: siteImages.servicesChef,
    featured: true,
  },
  {
    title: "Tour esperienziali",
    description:
      "Percorsi immersivi tra produttori, cucine e degustazioni per vivere il territorio in modo autentico.",
    points: [
      "Visite a realta agricole e produttori locali",
      "Cooking class, assaggi guidati e raccolte stagionali",
      "Itinerari tra paesaggio, biodiversita e cultura alimentare",
    ],
    context:
      "Per gruppi turistici, associazioni ed esperienze territoriali su misura.",
    icon: Map,
    image: siteImages.servicesTour,
  },
];

export const audiences: Audience[] = [
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
      "Percorsi per attivare memoria, manualita e relazioni attraverso tradizioni locali e fare insieme.",
    activities:
      "Stimolazione cognitiva, gesti lenti e laboratori intergenerazionali.",
    icon: HeartHandshake,
  },
  {
    title: "Carceri e comunita",
    description:
      "Attivita orientate all'inclusione e allo sviluppo di competenze pratiche che restituiscono fiducia.",
    activities:
      "Percorsi di gruppo, riabilitazione attraverso il fare e manualita.",
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
      "Occasioni per stare insieme, imparare con le mani e creare rituali condivisi.",
    activities:
      "Giornate esperienziali, laboratori partecipati e benessere comunitario.",
    icon: House,
  },
];

export const camminoPillars: Pillar[] = [
  {
    title: "Orti condivisi",
    text: "Luoghi in cui imparare la cura, osservare i cicli naturali e coltivare appartenenza.",
    icon: Leaf,
  },
  {
    title: "Cucine aperte",
    text: "Spazi dove ricette, storie e tecniche passano di mano in mano e diventano cultura viva.",
    icon: UtensilsCrossed,
  },
  {
    title: "Saperi in circolo",
    text: "Semi, ricette, pollinatori, tecniche e memoria locale come patrimonio condiviso tra territori.",
    icon: Sparkles,
  },
  {
    title: "Comunita che cresce",
    text: "Una rete diffusa di persone, luoghi e pratiche che si riconoscono nella cura del paesaggio e delle relazioni.",
    icon: Users,
  },
];

export const contactInterests = [
  "Laboratori di cucina",
  "Ortoterapia",
  "Laboratori di cucito",
  "Chef a domicilio",
  "Tour esperienziali",
  "Partnership",
];

export const contactDetails = {
  location: "Castelgrande, Basilicata",
  coverage: "Operativi in Basilicata e disponibili in tutta Italia.",
  phones: ["+39 3477930530", "+39 3471551887"],
  footerSentence:
    "Esperienze di comunita tra terra, cibo e tradizione. Radici forti, gesti concreti, territori in relazione.",
};
