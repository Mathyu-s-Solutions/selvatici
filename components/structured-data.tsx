import type { Content } from "@/content";
import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

type StructuredDataProps = {
  content: Content;
  locale: Locale;
};

/**
 * JSON-LD for the landing: a LocalBusiness with the operating base, the phone
 * and the services offered, plus an Event for every agenda entry that has a
 * confirmed date.
 *
 * Placeholder dates deliberately stay out: Google requires Event markup to
 * match reality, and inventing a start date to win a rich result is the kind of
 * thing that gets structured data ignored sitewide.
 */
export function StructuredData({ content, locale }: StructuredDataProps) {
  const base = siteConfig.url;
  const businessId = `${base}/#business`;
  const pageUrl = `${base}/${locale}`;

  const services = [
    ...content.laboratori.cards.map((card) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: `${content.laboratori.eyebrow}: ${card.title}`,
        description: card.body,
        areaServed: { "@type": "AdministrativeArea", name: "Basilicata" },
      },
    })),
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: content.chef.eyebrow,
        description: content.chef.paragraphs[0],
        areaServed: { "@type": "Country", name: "Italia" },
      },
    },
  ];

  const business = {
    "@type": "LocalBusiness",
    "@id": businessId,
    name: "I Selvatici",
    alternateName: content.meta.brand,
    url: pageUrl,
    description: content.meta.description,
    image: `${base}/og.jpg`,
    logo: `${base}/icon.png`,
    telephone: siteConfig.contact.phone.display,
    vatID: "02208410767",
    foundingDate: "2026",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Marconi, 21",
      postalCode: "85050",
      addressLocality: "Castelgrande",
      addressRegion: "PZ",
      addressCountry: "IT",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Basilicata" },
      { "@type": "Country", name: "Italia" },
    ],
    founder: content.chiSiamo.founders.map((founder) => ({
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.role,
    })),
    // TODO(client): opening hours are still the placeholder from the handoff.
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    makesOffer: services,
  };

  const events = content.agenda.events
    .filter((event) => Boolean(event.startDate))
    .map((event) => ({
      "@type": "Event",
      "@id": `${pageUrl}#${event.id}`,
      name: event.title,
      description: event.subtitle,
      startDate: event.startDate,
      ...(event.endDate ? { endDate: event.endDate } : {}),
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      inLanguage: locale,
      image: `${base}/og.jpg`,
      url: pageUrl,
      location: {
        "@type": "Place",
        name: "I Selvatici",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Via Marconi, 21",
          postalCode: "85050",
          addressLocality: "Castelgrande",
          addressRegion: "PZ",
          addressCountry: "IT",
        },
      },
      organizer: { "@id": businessId },
      performer: { "@id": businessId },
    }));

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      business,
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: pageUrl,
        name: "I Selvatici",
        description: content.meta.description,
        inLanguage: locale,
        publisher: { "@id": businessId },
      },
      ...events,
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Escaped so a future copy edit containing a tag cannot break out of the
      // script element.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
