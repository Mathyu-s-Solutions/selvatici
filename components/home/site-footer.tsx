import Image from "next/image";

import { contactDetails, quickLinks, siteImages } from "./content";

export function SiteFooter() {
  return (
    <footer className="px-4 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/40 bg-white/50 px-5 py-6 backdrop-blur-sm sm:rounded-3xl sm:px-8 sm:py-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.6fr_0.8fr]">
          <div className="space-y-3">
            <Image
              src={siteImages.logoFull}
              alt="I Selvatici"
              width={160}
              height={44}
              className="h-auto w-36"
            />
            <p className="max-w-md text-sm leading-6 text-black/55">
              {contactDetails.footerSentence}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--olive)">
              Navigazione
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {quickLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-full bg-white/55 px-3.5 py-2 text-sm font-medium text-black/58 transition active:bg-white hover:bg-white hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--brown)">
              Contatti
            </p>
            <div className="mt-3 space-y-1 text-sm text-black/58">
              <p className="py-1">{contactDetails.location}</p>
              <p className="py-1">{contactDetails.coverage}</p>
              {contactDetails.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="block rounded-lg py-2 font-medium transition active:bg-white/60 hover:text-foreground"
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
