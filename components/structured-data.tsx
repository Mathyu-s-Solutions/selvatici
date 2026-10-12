import { JsonLd } from "@/components/json-ld";
import type { Content } from "@/content";
import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import {
  workshopPath,
  workshopShareImage,
  workshopSlugs,
  type WorkshopSlug,
} from "@/lib/workshops";

/** Stable ids, so the nodes of the two graphs below can point at each other. */
const businessId = `${siteConfig.url}/#business`;
const websiteId = `${siteConfig.url}/#website`;

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
  const pageUrl = `${base}/${locale}`;

  const services = [
    ...workshopSlugs.map((slug) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: content.laboratori.details[slug].name,
        description: content.laboratori.cards[slug].body,
        url: `${pageUrl}${workshopPath(slug)}`,
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

  return (
    <JsonLd
      graph={[
        business,
        {
          "@type": "WebSite",
          "@id": websiteId,
          url: pageUrl,
          name: "I Selvatici",
          description: content.meta.description,
          inLanguage: locale,
          publisher: { "@id": businessId },
        },
        ...events,
      ]}
    />
  );
}

type WorkshopStructuredDataProps = StructuredDataProps & {
  slug: WorkshopSlug;
};

/**
 * JSON-LD for a workshop page, on top of the site-wide graph the layout emits:
 * the page itself, its breadcrumb — which Google shows in place of the raw URL
 * — and the workshop as a Service provided by the business.
 */
export function WorkshopStructuredData({
  content,
  locale,
  slug,
}: WorkshopStructuredDataProps) {
  const homeUrl = `${siteConfig.url}/${locale}`;
  const url = `${homeUrl}${workshopPath(slug)}`;
  const image = `${siteConfig.url}${workshopShareImage(locale, slug)}`;
  const card = content.laboratori.cards[slug];
  const detail = content.laboratori.details[slug];

  return (
    <JsonLd
      graph={[
        {
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          url,
          name: detail.metaTitle,
          description: detail.metaDescription,
          inLanguage: locale,
          isPartOf: { "@id": websiteId },
          about: { "@id": `${url}#service` },
          breadcrumb: { "@id": `${url}#breadcrumb` },
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: image,
            width: 1200,
            height: 630,
          },
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${url}#breadcrumb`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "I Selvatici",
              item: homeUrl,
            },
            { "@type": "ListItem", position: 2, name: detail.name, item: url },
          ],
        },
        {
          "@type": "Service",
          "@id": `${url}#service`,
          name: detail.name,
          alternateName: card.title,
          description: detail.metaDescription,
          url,
          image,
          provider: { "@id": businessId },
          areaServed: { "@type": "AdministrativeArea", name: "Basilicata" },
        },
      ]}
    />
  );
}
