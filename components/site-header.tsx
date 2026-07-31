"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";

import logoBianco from "@/assets/brand/logo-bianco-trim.png";
import logoCompleto from "@/assets/brand/logo-completo-trim.png";
import { LanguageToggle } from "@/components/language-toggle";
import type { Content } from "@/content";
import type { Locale } from "@/lib/i18n";

const SOLID_AFTER = 80;
const COMPACT_BELOW = 1000;

type SiteHeaderProps = {
  content: Content["nav"];
  locale: Locale;
};

export function SiteHeader({ content, locale }: SiteHeaderProps) {
  const [solid, setSolid] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Nav background/colour state, rAF-throttled.
  useEffect(() => {
    let frame: number | null = null;
    const read = () => {
      frame = null;
      setSolid(window.scrollY > SOLID_AFTER);
    };
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(read);
    };

    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Drawer: lock the page, close on Escape, close once the layout is wide again.
  useEffect(() => {
    if (!drawerOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDrawerOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= COMPACT_BELOW) setDrawerOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [drawerOpen]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[60] flex items-center justify-between gap-5 border-b px-[clamp(18px,3vw,40px)] transition-[background-color,border-color,padding,color] duration-400 ease-[ease] ${
          solid
            ? "border-ink/12 bg-paper/94 py-[10px] text-ink backdrop-blur-[14px]"
            : "border-transparent bg-transparent py-4 text-paper"
        }`}
      >
        <a
          href="#top"
          className="relative block w-[clamp(118px,13vw,158px)] shrink-0"
          aria-label={content.logoAlt}
        >
          <Image
            src={logoBianco}
            alt={content.logoAlt}
            priority
            sizes="158px"
            className={`h-auto w-full transition-opacity duration-400 ease-[ease] ${
              solid ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src={logoCompleto}
            alt=""
            aria-hidden
            priority
            sizes="158px"
            className={`absolute inset-0 h-auto w-full transition-opacity duration-400 ease-[ease] ${
              solid ? "opacity-100" : "opacity-0"
            }`}
          />
        </a>

        <div className="hidden items-center gap-[clamp(16px,2.2vw,30px)] text-[12px] font-semibold tracking-[.1em] uppercase min-[1000px]:flex">
          {content.links.map((link) => (
            <a key={link.href} href={link.href} className="text-inherit">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-[clamp(10px,1.4vw,18px)]">
          <div className="hidden min-[1000px]:flex">
            <LanguageToggle locale={locale} />
          </div>

          <a
            href="#contatti"
            className="pill pill-accent hidden px-[22px] py-[11px] text-[12px] min-[560px]:inline-block"
          >
            {content.cta}
          </a>

          <button
            type="button"
            aria-label={drawerOpen ? content.closeMenu : content.openMenu}
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen((open) => !open)}
            className={`flex h-[46px] w-[46px] flex-col items-center justify-center gap-[5px] rounded-full transition-colors duration-400 ease-[ease] min-[1000px]:hidden ${
              solid ? "bg-ink/8 hover:bg-ink/14" : "bg-paper/14 hover:bg-paper/24"
            }`}
          >
            <span
              className={`burger-bar block h-[2px] w-5 rounded-sm bg-current ${
                drawerOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`burger-bar block h-[2px] w-5 rounded-sm bg-current ${
                drawerOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        data-open={drawerOpen ? "" : undefined}
        className="drawer fixed inset-0 z-80 flex max-h-dvh flex-col justify-between gap-[clamp(20px,4vh,36px)] overflow-y-auto bg-paper px-[clamp(18px,5vw,40px)] pt-5 pb-7"
      >
        <div
          className="drawer-item flex items-center justify-between gap-5"
          style={{ "--i": 0 } as CSSProperties}
        >
          <Image
            src={logoCompleto}
            alt={content.logoAlt}
            sizes="168px"
            className="h-auto w-[clamp(120px,32vw,168px)]"
          />
          <button
            type="button"
            aria-label={content.closeMenu}
            onClick={() => setDrawerOpen(false)}
            className="h-[46px] w-[46px] rounded-full border border-ink/20 text-[22px] leading-none text-ink transition-colors duration-300 ease-[ease] hover:bg-ink/8"
          >
            ×
          </button>
        </div>

        <div
          className="drawer-item flex flex-col gap-[2px] font-display text-[clamp(26px,5.4vh,46px)] leading-[1.2] text-ink"
          style={{ "--i": 1 } as CSSProperties}
        >
          {content.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setDrawerOpen(false)}
              className="drawer-link w-fit text-inherit hover:text-olive"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div
          className="drawer-item flex flex-col gap-[18px]"
          style={{ "--i": 2 } as CSSProperties}
        >
          <a
            href="#contatti"
            onClick={() => setDrawerOpen(false)}
            className="pill pill-accent block px-6 py-4 text-center"
          >
            {content.cta}
          </a>
          <div className="flex items-center gap-1.5 text-ink">
            <LanguageToggle locale={locale} size={13} />
            <span className="h-px flex-1 bg-ink/16" />
            <span className="text-[13px] font-medium tracking-[.12em] uppercase text-ink/60">
              {content.location}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
