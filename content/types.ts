export type NavLink = {
  href: string;
  label: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Founder = {
  name: string;
  role: string;
};

export type WorkshopCard = {
  kicker: string;
  title: string;
  body: string;
  cta: string;
};

export type Pillar = {
  title: string;
  body: string;
};

/** Suggested shape for when the agenda gets wired to real data. */
export type AgendaEvent = {
  id: string;
  dateLabel: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  href: string;
  status: "open" | "waitlist" | "onRequest";
  /**
   * ISO 8601 start, set only when the date is actually confirmed. Drives the
   * Event structured data: Google requires real dates, so a placeholder must
   * stay out of the markup rather than be invented.
   */
  startDate?: string;
  /** ISO 8601 end, optional even when the start is known. */
  endDate?: string;
};

export type Testimonial = {
  quote: string;
  author: string;
};

export type MerchItem = {
  caption: string;
  alt: string;
};

export type InfoBlock = {
  label: string;
  lines: string[];
};

export type Content = {
  meta: {
    /** Search-facing title: service and place first, brand last. */
    title: string;
    description: string;
    /** The brand line on its own, for Open Graph and structured data. */
    brand: string;
  };
  nav: {
    logoAlt: string;
    links: NavLink[];
    cta: string;
    openMenu: string;
    closeMenu: string;
    location: string;
  };
  hero: {
    eyebrow: string;
    titleLines: [string, string];
    lead: string;
    leadEmphasis: string;
    ctaWorkshops: string;
    ctaChef: string;
    claims: [string, string, string];
    scroll: string;
    imageAlt: string;
  };
  manifesto: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    paragraphs: [string, string, string];
  };
  progetto: {
    eyebrow: string;
    title: string;
    paragraphs: [string, string];
    stats: [Stat, Stat, Stat];
    quote: string;
    imageAlts: [string, string];
  };
  chiSiamo: {
    eyebrow: string;
    title: string;
    paragraph: string;
    founders: [Founder, Founder];
    imageAlt: string;
  };
  laboratori: {
    eyebrow: string;
    title: string;
    note: string;
    imageAlt: string;
    cards: [WorkshopCard, WorkshopCard, WorkshopCard];
  };
  chef: {
    eyebrow: string;
    titleLead: string;
    titleEmphasis: string;
    paragraphs: [string, string];
    ctaQuote: string;
    ctaWhatsapp: string;
    imageAlts: [string, string];
  };
  cammino: {
    eyebrow: string;
    title: string;
    paragraph: string;
    pillars: [Pillar, Pillar, Pillar];
    imageAlt: string;
  };
  agenda: {
    title: string;
    note: string;
    events: AgendaEvent[];
  };
  gallery: {
    eyebrow: string;
  };
  testimonianze: {
    eyebrow: string;
    items: [Testimonial, Testimonial, Testimonial];
  };
  merch: {
    title: string;
    note: string;
    items: [MerchItem, MerchItem, MerchItem];
  };
  contatti: {
    title: string;
    paragraph: string;
    whatsappLabel: string;
    phoneLabel: string;
    hours: string;
    info: [InfoBlock, InfoBlock, InfoBlock];
    footerNote: string;
  };
};
