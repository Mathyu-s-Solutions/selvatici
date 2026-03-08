"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { quickLinks, siteImages } from "./content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/60 bg-white/58 shadow-[0_24px_60px_-40px_rgba(51,51,51,0.5)] backdrop-blur-xl sm:rounded-4xl">
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
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
              className="h-auto w-28 sm:w-32 lg:w-40"
            />
          </a>

          <Badge
            variant="soft"
            className="hidden bg-white/80 text-(--brown) md:inline-flex lg:hidden"
          >
            Esperienze itineranti
          </Badge>

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

          <div className="flex items-center gap-3">
            <Button
              asChild
              size="lg"
              variant="earth"
              className="hidden h-10 px-5 lg:inline-flex"
            >
              <a href="#contact">Prenota un contatto</a>
            </Button>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="inline-flex size-10 items-center justify-center rounded-full text-foreground/70 transition hover:bg-white/60 lg:hidden"
              aria-label={open ? "Chiudi menu" : "Apri menu"}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-black/6 px-4 pb-4 pt-3 lg:hidden">
            <nav className="flex flex-col gap-1">
              {quickLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-2.5 text-sm font-medium text-black/64 transition hover:bg-white/78 hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </nav>
            <Button asChild size="lg" variant="earth" className="mt-3 w-full">
              <a href="#contact" onClick={() => setOpen(false)}>
                Prenota un contatto
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
