import type { Content } from "./types";

export const it: Content = {
  meta: {
    // Servizio e luogo prima del nome: nessuno cerca ancora "I Selvatici".
    // Il titolo di marca del prototipo era "I Selvatici — esperienze di comunità".
    title: "Laboratori di cucina e personal chef in Basilicata | I Selvatici",
    description:
      "Laboratori di cucina e orticoltura per tutte le età a Castelgrande (PZ), e servizio di personal chef in tutta Italia. Prenota su WhatsApp.",
    /** Nome del brand da solo, per Open Graph e dati strutturati. */
    brand: "I Selvatici — esperienze di comunità",
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
    lead: "Laboratori di cucina e orticoltura, e un servizio di personal chef.",
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
      "Promuoviamo consapevolezza, benessere e scelte alimentari sane attraverso esperienze concrete e condivise: mani nella farina, mani nella terra.",
      "Nasciamo nel 2026 in Basilicata, dall’incontro tra radici lucane e toscane e da una visione comune fondata sull’amore per la terra, la cucina e le tradizioni locali.",
      "Valorizziamo i saperi manuali, la stagionalità e le culture territoriali, per creare esperienze che uniscano benessere personale e crescita comunitaria.",
    ],
  },

  progetto: {
    eyebrow: "Il Progetto",
    title: "Saperi manuali, stagionalità, comunità",
    paragraphs: [
      "Con sede operativa a Castelgrande, I Selvatici promuovono laboratori ludico-ricreativi rivolti a tutte le fasce d’età, dedicati alla cucina e all’orticoltura.",
      "Ogni attività è pensata per favorire la socialità, la trasmissione delle tradizioni e il recupero di pratiche sostenibili legate al territorio.",
    ],
    stats: [
      { value: "2026", label: "Anno di nascita, in Basilicata" },
      { value: "3", label: "Laboratori: cucina, orto, aziende" },
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
      { name: "Valentina Di Carlo", role: "Fondatrice & giardiniere d’arte" },
      { name: "Lorenzo Staderini", role: "Fondatore & chef" },
    ],
    imageAlt: "I fondatori de I Selvatici nella cucina di Castelgrande",
  },

  laboratori: {
    eyebrow: "I Laboratori",
    title: "Ludico-ricreativi, per tutte le età",
    note: "Famiglie, gruppi di amici, scuole e associazioni, aziende. Ogni percorso si adatta al gruppo e alla stagione.",
    imageAlt: "Laboratorio di cucina",
    back: "← Tutti i laboratori",
    cards: {
      cucina: {
        kicker: "01 — Cucina",
        title: "Impastare insieme",
        body: "Pane, pasta fresca, pizza e ricette di casa. Si impara con le mani, si mangia tutti insieme.",
        cta: "Iscriviti →",
      },
      orticoltura: {
        kicker: "02 — Orticoltura",
        title: "Le mani nella terra",
        body: "Semina, cura e raccolta come pratica di benessere. Il ritmo dell’orto detta il ritmo della giornata.",
        cta: "Iscriviti →",
      },
      // TODO(cliente): titolo e testo della card sono una proposta, da validare.
      aziende: {
        kicker: "03 — Aziende",
        title: "Cucinare in squadra",
        body: "Team cooking, pranzi e cene di lavoro dove siete voi a cucinare. Ogni evento si concorda sulle esigenze dell’azienda.",
        cta: "Scopri di più →",
      },
    },
    // Testi forniti dai fondatori.
    details: {
      cucina: {
        metaTitle: "Corsi di cucina a Castelgrande, Basilicata | I Selvatici",
        metaDescription:
          "Corsi di cucina per bambini, coppie, famiglie e gruppi a Castelgrande (PZ): ingredienti, ricette stampate, attestato e degustazione inclusi.",
        lead: "Pane, pasta fresca, pizza e ricette di casa. Si impara con le mani, si mangia tutti insieme.",
        paragraphs: [
          "Le lezioni rivolte a bambini, coppie, famiglie o gruppi offrono la possibilità di vivere una profonda esperienza nella cucina con un metodo interattivo che coinvolge i corsisti nella preparazione dei piatti sotto la guida di chef preparati.",
          "I corsi includono ingredienti, ricette stampate, attestato di partecipazione e degustazione.",
          "Ogni evento può essere personalizzato secondo i desideri e le esigenze del corsista: dal menù di pasta fresca a quello gourmet, dal corso di tre ore a percorsi di due o più giorni.",
        ],
      },
      orticoltura: {
        metaTitle: "Corso di orticoltura per tutte le età in Basilicata | I Selvatici",
        metaDescription:
          "Corso di orticoltura per grandi e piccoli a Castelgrande (PZ): coltivare ortaggi, conoscere i ritmi della natura e portare il raccolto in cucina.",
        lead: "Un percorso laboratoriale dedicato alla sostenibilità ambientale, all’educazione alimentare e alla cittadinanza attiva.",
        heading: "Corso di orticoltura per tutte le età!",
        paragraphs: [
          "Un’esperienza formativa aperta a grandi e piccoli per scoprire il mondo dell’orto, imparare a coltivare ortaggi e conoscere i ritmi della natura. Attraverso attività pratiche e momenti di condivisione, i partecipanti potranno sperimentare il piacere del contatto con la terra, prendersi cura delle piante e scoprire come trasformare i prodotti raccolti in cucina, dando vita a piatti genuini e gustosi. Un percorso che unisce natura, sostenibilità, creatività e buona alimentazione.",
        ],
      },
      aziende: {
        metaTitle: "Team cooking ed eventi aziendali in Basilicata | I Selvatici",
        metaDescription:
          "Team cooking, pranzi e cene di lavoro in cui cucina il team, sotto la guida di chef preparati. Eventi aziendali su misura a Castelgrande (PZ).",
        lead: "Vuoi mettere alla prova il tuo team di lavoro? Oppure stimolare lo spirito di gruppo con un’attività diversa dal solito? O semplicemente organizzare un pranzo o cena di lavoro alternativi, dove siete voi a cucinare?",
        paragraphs: [
          "Nulla come la cucina accende gli animi, coinvolge le persone e le guida verso un obiettivo comune: il momento conviviale del pranzo o della cena!",
          "I team cooking diventano una piacevole esperienza che coinvolge i corsisti nella preparazione dei piatti, sotto la guida di chef preparati.",
          "Gli eventi per le aziende sono completamente personalizzabili. La proposta verrà concordata in funzione delle esigenze dell’azienda richiedente.",
          // TODO(cliente): "gli spazi della scuola" — confermare di quale sede si parla.
          "L’azienda può inoltre utilizzare gli spazi della scuola per integrare il percorso in cucina con altre attività correlate: presentazioni, briefing interni, riunioni…",
          "Il percorso sarà progressivo e pratico: lavoreremo come una vera brigata di cucina, favorendo collaborazione, senso di responsabilità, organizzazione e spirito di squadra.",
        ],
      },
    },
  },

  chef: {
    eyebrow: "Personal Chef",
    titleLead: "La vostra tavola,",
    titleEmphasis: "il nostro racconto",
    // Testi forniti dai fondatori; terzo e quarto uniformati al "voi" del titolo.
    paragraphs: [
      "Abilità gastronomiche che uniscono influenze apprese attraverso esperienze lavorative e viaggi con una forte valorizzazione della tradizione culinaria italiana.",
      "Prodotti stagionali, identità locale e convivialità: ogni degustazione diventa un momento di racconto e condivisione.",
      "Volete stupire i vostri amici offrendo loro un’esperienza diversa a casa vostra?",
      "Possiamo concordare un menù, portiamo quello che vi manca, serviamo i vostri ospiti e lasciamo la cucina pulita!",
      "In Basilicata e su tutto il territorio nazionale.",
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
        startDate: "2026-02-22T10:00:00+01:00",
        endDate: "2026-02-22T14:00:00+01:00",
      },
      {
        id: "orticoltura-primavera",
        dateLabel: "Data da definire",
        title: "Orticoltura — primavera",
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
