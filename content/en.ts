import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "I Selvatici — community experiences",
    description:
      "Cooking, garden-therapy and sewing workshops, plus a personal chef service in Castelgrande, Basilicata. An invitation to slow down.",
  },

  nav: {
    logoAlt: "I Selvatici",
    links: [
      { href: "#progetto", label: "The Project" },
      { href: "#laboratori", label: "Workshops" },
      { href: "#chef", label: "Personal Chef" },
      { href: "#cammino", label: "The Path" },
      { href: "#agenda", label: "Calendar" },
    ],
    cta: "Book now",
    openMenu: "Menu",
    closeMenu: "Close",
    location: "Castelgrande (PZ)",
  },

  hero: {
    eyebrow: "Castelgrande — Basilicata — since 2026",
    titleLines: ["Community", "experiences"],
    lead: "Cooking, garden-therapy and sewing workshops, plus a personal chef service.",
    leadEmphasis: "An invitation to slow down.",
    ctaWorkshops: "Discover the workshops",
    ctaChef: "Personal chef",
    claims: [
      "Workshops for every age",
      "Personal chef across Italy",
      "The Path of the Selvatici",
    ],
    scroll: "Scroll",
    imageAlt: "Children’s cooking workshop in Castelgrande",
  },

  manifesto: {
    eyebrow: "Our why",
    titleLead: "Rebuilding the bond between",
    titleAccent: "people, land and food.",
    paragraphs: [
      "We promote awareness, wellbeing and healthy food choices through concrete, shared experiences: hands in the flour, hands in the soil, hands on the thread.",
      "We were born in 2026 in Basilicata, from the meeting of Lucanian and Tuscan roots and a shared vision founded on love for the land, cooking and local traditions.",
      "We champion manual know-how, seasonality and local cultures, creating experiences that join personal wellbeing with community growth.",
    ],
  },

  progetto: {
    eyebrow: "The Project",
    title: "Manual know-how, seasonality, community",
    paragraphs: [
      "Based in Castelgrande, I Selvatici run playful, recreational workshops for every age group, dedicated to cooking, garden therapy and sewing.",
      "Every activity is designed to foster togetherness, pass on traditions and recover sustainable practices rooted in the territory.",
    ],
    stats: [
      { value: "2026", label: "Founded, in Basilicata" },
      { value: "3", label: "Workshops: cooking, garden, sewing" },
      { value: "All Italy", label: "Available nationwide" },
    ],
    quote: "Every gesture is a handover: whoever learns today will tell the story tomorrow.",
    imageAlts: ["Hands kneading dough", "Flour on the table"],
  },

  chiSiamo: {
    eyebrow: "About us",
    title: "Two roots, one kitchen",
    paragraph:
      "Lucanian and Tuscan roots meeting around a wooden table. We bring our travels, our encounters and our grandmothers’ memory into the kitchen, and give it back as an experience to live together.",
    founders: [
      { name: "Valentina Di Carlo", role: "Founder" },
      { name: "Lorenzo Staderini", role: "Founder & chef" },
    ],
    imageAlt: "The founders of I Selvatici in the Castelgrande kitchen",
  },

  laboratori: {
    eyebrow: "The Workshops",
    title: "Playful and recreational, for every age",
    note: "Families, groups of friends, schools and associations, companies. Every path adapts to the group and the season.",
    imageAlt: "Cooking workshop",
    cards: [
      {
        kicker: "01 — Cooking",
        title: "Kneading together",
        body: "Bread, fresh pasta, pizza and home recipes. You learn with your hands and eat all together.",
        cta: "Sign up →",
      },
      {
        kicker: "02 — Garden therapy",
        title: "Hands in the soil",
        body: "Sowing, tending and harvesting as a wellbeing practice. The garden’s rhythm sets the rhythm of the day.",
        cta: "Sign up →",
      },
      {
        kicker: "03 — Sewing",
        title: "Thread and patience",
        body: "Mending, embroidery and small objects: slow gestures that come in handy and teach repairing instead of replacing.",
        cta: "Sign up →",
      },
    ],
  },

  chef: {
    eyebrow: "Personal Chef",
    titleLead: "Your table,",
    titleEmphasis: "our story",
    paragraphs: [
      "Gastronomic experiences that blend influences gathered through travel and cultural encounters with a deep respect for Italian culinary tradition.",
      "Seasonal produce, local identities and conviviality: every tasting becomes a moment of storytelling and sharing. In Basilicata and nationwide.",
    ],
    ctaQuote: "Request a quote",
    ctaWhatsapp: "Message us on WhatsApp",
    imageAlts: ["Hand-rolled fresh pasta", "The chef at work"],
  },

  cammino: {
    eyebrow: "The Path of the Selvatici",
    title: "A network of gardens, kitchens and communities",
    paragraph:
      "We want to connect different territories, promoting traditions, authentic relationships and shared wellbeing. A path built one stop at a time.",
    pillars: [
      { title: "Gardens", body: "Cultivated land that becomes an open-air classroom." },
      { title: "Kitchens", body: "Tables where you learn by doing, and eat together." },
      {
        title: "Community",
        body: "People who recognise each other and come back, season after season.",
      },
    ],
    imageAlt: "The Selvatici community",
  },

  agenda: {
    title: "Upcoming dates",
    note: "Limited places — confirmed by phone or WhatsApp.",
    // TODO(client): only the first date is confirmed. The others are placeholders.
    events: [
      {
        id: "corso-cucina-2026-02-22",
        dateLabel: "Sun 22 February 2026",
        title: "Cooking class",
        subtitle: "Castelgrande (PZ) — fresh pasta, all ages",
        ctaLabel: "Sign up →",
        href: "#contatti",
        status: "open",
      },
      {
        id: "orto-terapia-primavera",
        dateLabel: "Date to be set",
        title: "Garden therapy — spring",
        subtitle: "Sowing and tending the garden, for families and groups",
        ctaLabel: "Waiting list →",
        href: "#contatti",
        status: "waitlist",
      },
      {
        id: "cena-domicilio",
        dateLabel: "On request",
        title: "Dinner at home — personal chef",
        subtitle: "In Basilicata and nationwide",
        ctaLabel: "Get a quote →",
        href: "#contatti",
        status: "onRequest",
      },
    ],
  },

  gallery: {
    eyebrow: "Gallery",
  },

  testimonianze: {
    eyebrow: "What people say",
    // TODO(client): replace with real testimonials.
    items: [
      {
        quote: "My daughter kneaded for three hours and never got bored.",
        author: "Name, Castelgrande",
      },
      {
        quote: "A dinner that felt like a story: every dish had one.",
        author: "Name, Potenza",
      },
      {
        quote: "We brought the class and they went home talking about seasonality.",
        author: "Name, teacher",
      },
    ],
  },

  merch: {
    title: "Take I Selvatici home",
    note: "Aprons, bags and packaging: our identity travels with those who join us.",
    items: [
      { caption: "Cotton tote bag", alt: "I Selvatici tote bag" },
      { caption: "Chef jacket", alt: "I Selvatici chef jacket" },
      { caption: "Takeaway packaging", alt: "I Selvatici takeaway packaging" },
    ],
  },

  contatti: {
    title: "Get in touch",
    paragraph:
      "Tell us who you are and what you would like to do: a workshop, a dinner, team building or a stop on the Path. We reply on WhatsApp or by phone.",
    whatsappLabel: "Message us on WhatsApp",
    phoneLabel: "Call us",
    // TODO(client): hours to be confirmed.
    hours: "Mon—Sat, 9:00—19:00. For groups and schools, a call works best.",
    info: [
      {
        label: "Operating base",
        lines: ["Via Marconi, 21", "85050 Castelgrande (PZ)", "Basilicata, Italy"],
      },
      {
        label: "Where we work",
        lines: ["Basilicata and the whole country, on request."],
      },
      { label: "Administration", lines: ["VAT 02208410767"] },
    ],
    footerNote: "community experiences — © 2026 I Selvatici",
  },
};
