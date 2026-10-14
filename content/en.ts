import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "Cooking workshops & personal chef in Basilicata | I Selvatici",
    description:
      "Cooking and vegetable gardening workshops for all ages in Castelgrande (PZ), plus a personal chef service across Italy. Book on WhatsApp.",
    brand: "I Selvatici — community experiences",
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
    lead: "Cooking and vegetable gardening workshops, plus a personal chef service.",
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
      "We promote awareness, wellbeing and healthy food choices through concrete, shared experiences: hands in the flour, hands in the soil.",
      "We were born in 2026 in Basilicata, from the meeting of Lucanian and Tuscan roots and a shared vision founded on love for the land, cooking and local traditions.",
      "We champion manual know-how, seasonality and local cultures, creating experiences that join personal wellbeing with community growth.",
    ],
  },

  progetto: {
    eyebrow: "The Project",
    title: "Manual know-how, seasonality, community",
    paragraphs: [
      "Based in Castelgrande, I Selvatici run playful, recreational workshops for every age group, dedicated to cooking and vegetable gardening.",
      "Every activity is designed to foster togetherness, pass on traditions and recover sustainable practices rooted in the territory.",
    ],
    stats: [
      { value: "2026", label: "Founded, in Basilicata" },
      { value: "3", label: "Workshops: cooking, garden, companies" },
      { value: "All Italy", label: "Available nationwide" },
    ],
    quote: "Every gesture is a handover: whoever learns today will tell the story tomorrow.",
    imageAlts: ["Hands kneading dough", "Flour on the table"],
  },

  chiSiamo: {
    eyebrow: "About us",
    title: "Two roots, one kitchen",
    paragraph:
      "Lucanian and Tuscan roots meeting around a table. We bring our travels, our encounters and our grandmothers’ memory into the kitchen, and give it back as an experience to live together.",
    founders: [
      // Not "pizzaiola": in English that is the tomato-and-oregano dish.
      { name: "Valentina Di Carlo", role: "Pizza maker & art gardener" },
      { name: "Lorenzo Staderini", role: "Chef" },
    ],
    imageAlt: "Valentina and Lorenzo in the Castelgrande kitchen",
  },

  laboratori: {
    eyebrow: "The Workshops",
    title: "Playful and recreational, for every age",
    note: "Families, groups of friends, schools and associations, companies. Every path adapts to the group and the season.",
    back: "← All workshops",
    cards: {
      cucina: {
        kicker: "01 — Cooking",
        title: "Kneading together",
        body: "Bread, fresh pasta, pizza and home recipes. You learn with your hands and eat all together.",
        cta: "Sign up →",
        imageAlt: "Children kneading pizza dough at a cooking workshop",
      },
      orticoltura: {
        kicker: "02 — Vegetable gardening",
        title: "Hands in the soil",
        body: "Sowing, tending and harvesting as a wellbeing practice. The garden’s rhythm sets the rhythm of the day.",
        cta: "Sign up →",
        imageAlt: "A trowel full of soil over a flowering bed",
      },
      // TODO(client): the card's title and copy are a proposal, to be signed off.
      aziende: {
        kicker: "03 — Companies",
        title: "Cooking as a team",
        body: "Team cooking, working lunches and dinners where you do the cooking. Every event is shaped around what your company needs.",
        cta: "Find out more →",
        imageAlt: "A group in chef’s hats at a cooking class, ingredients laid out in front",
      },
    },
    // Translated from the founders' Italian copy.
    details: {
      cucina: {
        name: "Cooking classes",
        metaTitle: "Cooking classes in Castelgrande, Basilicata | I Selvatici",
        metaDescription:
          "Hands-on cooking classes for children, couples, families and groups in Castelgrande (PZ). Ingredients, printed recipes, certificate and tasting included.",
        lead: "Bread, fresh pasta, pizza and home recipes. You learn with your hands and eat all together.",
        paragraphs: [
          "Our classes for children, couples, families or groups are a chance to get properly immersed in cooking, with an interactive method that has everyone preparing the dishes under the guidance of trained chefs.",
          "Every class includes ingredients, printed recipes, a certificate of attendance and a tasting.",
          "Each event can be tailored to what you want and need: from a fresh pasta menu to a gourmet one, from a three-hour class to courses of two days or more.",
        ],
      },
      orticoltura: {
        name: "Vegetable gardening course",
        metaTitle: "Vegetable gardening course in Basilicata | I Selvatici",
        metaDescription:
          "A vegetable gardening course for adults and children in Castelgrande (PZ): grow vegetables, learn nature’s rhythms and cook what you harvest.",
        lead: "A series of workshops dedicated to environmental sustainability, food education and active citizenship.",
        heading: "A vegetable gardening course for all ages!",
        paragraphs: [
          "A learning experience open to adults and children alike, to discover the world of the vegetable garden, learn to grow vegetables and get to know the rhythms of nature. Through practical activities and shared moments, participants will enjoy the pleasure of contact with the soil, look after the plants and find out how to turn the harvest into wholesome, tasty dishes in the kitchen. A journey that brings together nature, sustainability, creativity and good food.",
        ],
      },
      aziende: {
        name: "Team cooking for companies",
        metaTitle: "Team cooking & corporate events in Basilicata | I Selvatici",
        metaDescription:
          "Team cooking, working lunches and dinners where your team does the cooking, guided by trained chefs. Tailor-made corporate events in Castelgrande (PZ).",
        lead: "Want to put your team to the test? Or lift team spirit with something out of the ordinary? Or simply organise a different kind of working lunch or dinner, where you do the cooking?",
        paragraphs: [
          "Nothing fires people up like cooking: it draws everyone in and steers them towards a shared goal — sitting down together for lunch or dinner!",
          "Team cooking becomes an enjoyable experience that involves participants in preparing the dishes, under the guidance of trained chefs.",
          "Corporate events are fully customisable. The proposal is agreed around the needs of the company making the request.",
          "The company can also use the venue’s spaces to round off the time in the kitchen with related activities: presentations, internal briefings, meetings…",
          "The programme is progressive and practical: we will work like a real kitchen brigade, encouraging collaboration, a sense of responsibility, organisation and team spirit.",
        ],
      },
    },
  },

  chef: {
    eyebrow: "Personal Chef",
    titleLead: "Your table,",
    titleEmphasis: "our story",
    paragraphs: [
      "Culinary skills that blend influences gathered through work experience and travel with a deep respect for Italian culinary tradition.",
      "Seasonal produce, local identity and conviviality: every tasting becomes a moment of storytelling and sharing.",
      "Want to surprise your friends with a different kind of experience in your own home?",
      "We agree on a menu, bring whatever you are missing, serve your guests and leave the kitchen clean!",
      "In Basilicata and nationwide.",
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
    // The course only has months: once the first lesson has a day, add
    // `startDate` and it shows up in the structured data as an event too.
    events: [
      {
        id: "corso-cucina-2026-2027",
        // No-break spaces everywhere but after the dash: if it wraps, it wraps there.
        dateLabel: "November\u00a02026\u00a0— June\u00a02027",
        title: "Cooking course — from starters to dessert",
        subtitle: "Castelgrande (PZ) — by age: 4–6, 7–14, 15–20 and adults",
        ctaLabel: "Sign up →",
        href: "#contatti",
        status: "open",
      },
      {
        id: "orticoltura-primavera",
        dateLabel: "Date to be set",
        title: "Vegetable gardening — spring",
        subtitle: "Planning, sowing and tending the garden — for all ages",
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
