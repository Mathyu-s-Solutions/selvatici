import type { Content } from "./types";

export const it: Content = {
  meta: {
    title: "I Selvatici — esperienze di comunità",
    description:
      "Laboratori di cucina, orto terapia e cucito, e un servizio di personal chef a Castelgrande, in Basilicata. Un invito a rallentare.",
  },

  nav: {
    logoAlt: "I Selvatici",
    links: [
      { href: "#progetto", label: "Il Progetto" },
      { href: "#laboratori", label: "Laboratori" },
      { href: "#chef", label: "Personal Chef" },
      { href: "#cammino", label: "Il Cammino" },
      { href: "#agenda", label: "Appuntamenti" },
    ],
    cta: "Prenota",
    openMenu: "Menu",
    closeMenu: "Chiudi",
    location: "Castelgrande (PZ)",
  },

  hero: {
    eyebrow: "Castelgrande — Basilicata — dal 2026",
    titleLines: ["Esperienze", "di comunità"],
    lead: "Laboratori di cucina, orto terapia e cucito, e un servizio di personal chef.",
    leadEmphasis: "Un invito a rallentare.",
    ctaWorkshops: "Scopri i laboratori",
    ctaChef: "Personal chef",
    claims: [
      "Laboratori per tutte le età",
      "Personal chef in tutta Italia",
      "Il Cammino dei Selvatici",
    ],
    scroll: "Scorri",
    imageAlt: "Laboratorio di cucina per bambini a Castelgrande",
  },

  manifesto: {
    eyebrow: "Il nostro perché",
    titleLead: "Ricostruire il legame tra",
    titleAccent: "persone, terra e cibo.",
    paragraphs: [
      "Promuoviamo consapevolezza, benessere e scelte alimentari sane attraverso esperienze concrete e condivise: mani nella farina, mani nella terra, mani nel filo.",
      "Nasciamo nel 2026 in Basilicata, dall’incontro tra radici lucane e toscane e da una visione comune fondata sull’amore per la terra, la cucina e le tradizioni locali.",
      "Valorizziamo i saperi manuali, la stagionalità e le culture territoriali, per creare esperienze che uniscano benessere personale e crescita comunitaria.",
    ],
  },

  progetto: {
    eyebrow: "Il Progetto",
    title: "Saperi manuali, stagionalità, comunità",
    paragraphs: [
      "Con sede operativa a Castelgrande, I Selvatici promuovono laboratori ludico-ricreativi rivolti a tutte le fasce d’età, dedicati alla cucina, all’orto terapia e al cucito.",
      "Ogni attività è pensata per favorire la socialità, la trasmissione delle tradizioni e il recupero di pratiche sostenibili legate al territorio.",
    ],
    stats: [
      { value: "2026", label: "Anno di nascita, in Basilicata" },
      { value: "3", label: "Laboratori: cucina, orto, cucito" },
      { value: "Tutta Italia", label: "Disponibili su tutto il territorio" },
    ],
    quote: "Ogni gesto è una trasmissione: chi impara oggi racconterà domani.",
    imageAlts: ["Mani che impastano", "Farina sul tavolo"],
  },

  chiSiamo: {
    eyebrow: "Chi siamo",
    title: "Due radici, una cucina",
    paragraph:
      "Radici lucane e toscane che si incontrano attorno a un tavolo di legno. Portiamo in cucina i viaggi, gli incontri e la memoria delle nonne, e lo restituiamo a chi partecipa come esperienza da vivere insieme.",
    founders: [
      { name: "Valentina Di Carlo", role: "Fondatrice" },
      { name: "Lorenzo Staderini", role: "Fondatore & chef" },
    ],
    imageAlt: "I fondatori de I Selvatici nella cucina di Castelgrande",
  },

  laboratori: {
    eyebrow: "I Laboratori",
    title: "Ludico-ricreativi, per tutte le età",
    note: "Famiglie, gruppi di amici, scuole e associazioni, aziende. Ogni percorso si adatta al gruppo e alla stagione.",
    imageAlt: "Laboratorio di cucina",
    cards: [
      {
        kicker: "01 — Cucina",
        title: "Impastare insieme",
        body: "Pane, pasta fresca, pizza e ricette di casa. Si impara con le mani, si mangia tutti insieme.",
        cta: "Iscriviti →",
      },
      {
        kicker: "02 — Orto terapia",
        title: "Le mani nella terra",
        body: "Semina, cura e raccolta come pratica di benessere. Il ritmo dell’orto detta il ritmo della giornata.",
        cta: "Iscriviti →",
      },
      {
        kicker: "03 — Cucito",
        title: "Filo e pazienza",
        body: "Rammendo, ricamo e piccoli oggetti: gesti lenti che tornano utili e insegnano a riparare invece di sostituire.",
        cta: "Iscriviti →",
      },
    ],
  },

  chef: {
    eyebrow: "Personal Chef",
    titleLead: "La vostra tavola,",
    titleEmphasis: "il nostro racconto",
    paragraphs: [
      "Esperienze gastronomiche che uniscono influenze apprese attraverso viaggi e incontri culturali a una forte valorizzazione della tradizione culinaria italiana.",
      "Prodotti stagionali, identità locali e convivialità: ogni degustazione diventa un momento di racconto e condivisione. In Basilicata e su tutto il territorio nazionale.",
    ],
    ctaQuote: "Richiedi un preventivo",
    ctaWhatsapp: "Scrivici su WhatsApp",
    imageAlts: ["Pasta fresca tirata a mano", "Lo chef al lavoro"],
  },

  cammino: {
    eyebrow: "Il Cammino dei Selvatici",
    title: "Una rete di orti, cucine e comunità",
    paragraph:
      "Vogliamo connettere territori diversi, promuovendo tradizioni, relazioni autentiche e percorsi di benessere condiviso. Un cammino che si costruisce una tappa alla volta.",
    pillars: [
      { title: "Orti", body: "Terre coltivate che diventano aule a cielo aperto." },
      { title: "Cucine", body: "Tavoli dove si impara facendo, e si mangia insieme." },
      {
        title: "Comunità",
        body: "Persone che si riconoscono e tornano, stagione dopo stagione.",
      },
    ],
    imageAlt: "La comunità dei Selvatici",
  },

  agenda: {
    title: "Prossimi appuntamenti",
    note: "Posti limitati — si conferma per telefono o WhatsApp.",
    // TODO(cliente): solo la prima data è confermata. Le altre sono segnaposto.
    events: [
      {
        id: "corso-cucina-2026-02-22",
        dateLabel: "Dom 22 febbraio 2026",
        title: "Corso di cucina",
        subtitle: "Castelgrande (PZ) — pasta fresca, tutte le età",
        ctaLabel: "Iscriviti →",
        href: "#contatti",
        status: "open",
      },
      {
        id: "orto-terapia-primavera",
        dateLabel: "Data da definire",
        title: "Orto terapia — primavera",
        subtitle: "Semina e cura dell’orto, per famiglie e gruppi",
        ctaLabel: "Lista d’attesa →",
        href: "#contatti",
        status: "waitlist",
      },
      {
        id: "cena-domicilio",
        dateLabel: "Su richiesta",
        title: "Cena a domicilio — personal chef",
        subtitle: "In Basilicata e su tutto il territorio nazionale",
        ctaLabel: "Preventivo →",
        href: "#contatti",
        status: "onRequest",
      },
    ],
  },

  gallery: {
    eyebrow: "Galleria",
  },

  testimonianze: {
    eyebrow: "Dicono di noi",
    // TODO(cliente): sostituire con testimonianze reali.
    items: [
      {
        quote: "Mia figlia ha impastato per tre ore e non si è mai annoiata.",
        author: "Nome, Castelgrande",
      },
      {
        quote: "Una cena che sembrava un racconto: ogni piatto aveva una storia.",
        author: "Nome, Potenza",
      },
      {
        quote:
          "Abbiamo portato la classe e sono tornati a casa a parlare di stagionalità.",
        author: "Nome, insegnante",
      },
    ],
  },

  merch: {
    title: "Porta a casa i Selvatici",
    note: "Grembiuli, borse e packaging: la nostra identità viaggia con chi partecipa.",
    items: [
      { caption: "Tote bag in cotone", alt: "Tote bag I Selvatici" },
      { caption: "Giacca da chef", alt: "Giacca da chef I Selvatici" },
      { caption: "Packaging takeaway", alt: "Packaging takeaway I Selvatici" },
    ],
  },

  contatti: {
    title: "Scriviamoci",
    paragraph:
      "Raccontaci chi siete e cosa vi piacerebbe fare: laboratorio, cena, team building o una tappa del Cammino. Rispondiamo su WhatsApp o al telefono.",
    whatsappLabel: "Scrivici su WhatsApp",
    phoneLabel: "Chiamaci",
    // TODO(cliente): orari da confermare.
    hours: "Lun—Sab, 9:00—19:00. Per gruppi e scuole meglio il telefono.",
    info: [
      {
        label: "Sede operativa",
        lines: ["Via Marconi, 21", "85050 Castelgrande (PZ)", "Basilicata, Italia"],
      },
      {
        label: "Dove operiamo",
        lines: ["Basilicata e tutto il territorio nazionale, su richiesta."],
      },
      { label: "Amministrazione", lines: ["P.IVA 02208410767"] },
    ],
    footerNote: "esperienze di comunità — © 2026 I Selvatici",
  },
};
