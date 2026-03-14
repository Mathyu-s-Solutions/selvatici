"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import { quickLinks, siteImages } from "./content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setOpen(false);
    // Wait for menu close animation (250ms) then scroll
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <header className="sticky top-0 z-50 px-4 py-2.5 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-300 sm:rounded-3xl ${
          scrolled || open
            ? "border-white/70 bg-white/82 shadow-[0_4px_24px_-8px_rgba(51,51,51,0.12)] backdrop-blur-xl"
            : "border-white/40 bg-white/50 shadow-none backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-2 sm:px-5">
          <a
            href="#home"
            className="flex shrink-0 items-center py-1"
            aria-label="Vai all'inizio"
          >
            <Image
              src={siteImages.logoFull}
              alt="I Selvatici"
              width={160}
              height={44}
              priority
              className="h-auto w-24 sm:w-28 lg:w-36"
            />
          </a>

          <nav className="hidden items-center gap-0.5 text-sm font-medium text-black/60 lg:flex">
            {quickLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-3.5 py-2 transition hover:bg-white/70 hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="earth"
              className="hidden h-9 px-4 text-sm lg:inline-flex"
            >
              <a href="#contact">Prenota</a>
            </Button>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="inline-flex size-11 items-center justify-center rounded-full text-foreground/70 transition-colors active:bg-white/60 lg:hidden"
              aria-label={open ? "Chiudi menu" : "Apri menu"}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden lg:hidden"
            >
              <div className="border-t border-black/6 px-4 pb-4 pt-2">
                <nav className="flex flex-col gap-0.5">
                  {quickLinks.map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className="rounded-xl px-4 py-3 text-base font-medium text-black/60 transition active:bg-white/70"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
                <Button asChild variant="earth" className="mt-3 h-12 w-full text-base">
                  <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                    Prenota un contatto
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
