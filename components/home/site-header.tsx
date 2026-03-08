import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { quickLinks, siteImages } from "./content";

export function SiteHeader() {
  return (
    <header className="sticky top-4 z-50 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-4xl border border-white/60 bg-white/58 shadow-[0_24px_60px_-40px_rgba(51,51,51,0.5)] backdrop-blur-xl">
        <div className="flex flex-col gap-3 px-4 py-3 sm:px-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#home"
              className="flex shrink-0 items-center"
              aria-label="Vai all'inizio"
            >
              <Image
                src={siteImages.logoFull}
                alt="I Selvatici"
                width={160}
                height={44}
                priority
                className="h-auto w-32 sm:w-36 lg:w-40"
              />
            </a>
            <Badge
              variant="soft"
              className="hidden bg-white/80 text-(--brown) md:inline-flex"
            >
              Esperienze itineranti
            </Badge>
          </div>

          <nav className="hidden items-center gap-1.5 text-sm font-medium text-black/64 lg:flex">
            {quickLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-3 py-2 transition hover:bg-white/78 hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="flex gap-2 overflow-x-auto pb-1 lg:hidden">
              {quickLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="whitespace-nowrap rounded-full border border-black/8 bg-white/62 px-3 py-2 text-sm font-medium text-black/64 transition hover:bg-white/82 hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </div>
            <Button asChild size="lg" variant="earth" className="h-10 px-5">
              <a href="#contact">Prenota un contatto</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
