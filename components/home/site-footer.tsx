import Image from "next/image";

import { contactDetails, quickLinks, siteImages } from "./content";

export function SiteFooter() {
  return (
    <footer className="px-4 pb-10 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/55 bg-white/64 px-4 py-6 backdrop-blur-sm sm:rounded-[2.5rem] sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.65fr_0.8fr]">
          <div className="space-y-4">
            <Image
              src={siteImages.logoFull}
              alt="I Selvatici"
              width={160}
              height={44}
              className="h-auto w-40"
            />
            <p className="max-w-xl text-sm leading-7 text-black/68">
              {contactDetails.footerSentence}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--olive)">
              Navigazione rapida
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {quickLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-full bg-white/72 px-3 py-2 text-sm font-medium text-black/64 transition hover:bg-white hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--brown)">
              Contatti
            </p>
            <div className="mt-4 space-y-3 text-sm text-black/68">
              <p>{contactDetails.location}</p>
              <p>{contactDetails.coverage}</p>
              {contactDetails.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="block"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
