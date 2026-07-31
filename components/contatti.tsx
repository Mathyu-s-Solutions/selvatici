import Image from "next/image";

import logoBianco from "@/assets/brand/logo-bianco-trim.png";
import type { Content } from "@/content";
import { siteConfig } from "@/lib/site-config";

type ContattiProps = {
  content: Content["contatti"];
  logoAlt: string;
};

/**
 * Deliberately no email form and no newsletter: WhatsApp and phone only.
 */
export function Contatti({ content, logoAlt }: ContattiProps) {
  return (
    <section
      id="contatti"
      className="bg-olive page-px pt-[clamp(90px,11vw,160px)] text-paper"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-[clamp(40px,6vw,90px)]">
          <div>
            <h2
              data-reveal
              className="mb-7 font-display text-[clamp(38px,5.4vw,92px)] leading-[1.02] text-paper"
            >
              {content.title}
            </h2>
            <p
              data-reveal
              className="mb-10 max-w-[480px] text-[18px] leading-[1.7] text-pretty text-paper/84"
            >
              {content.paragraph}
            </p>

            <div className="flex max-w-[520px] flex-col gap-3.5">
              <a
                href={siteConfig.contact.whatsapp.href}
                className="contact-card flex items-center justify-between gap-5 rounded-card bg-accent px-[26px] py-6 text-ink"
              >
                <span className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-bold tracking-[.18em] uppercase text-ink/62">
                    {content.whatsappLabel}
                  </span>
                  <span className="font-display text-[clamp(22px,2.4vw,30px)] leading-[1.1]">
                    {siteConfig.contact.whatsapp.display}
                  </span>
                </span>
                <span aria-hidden className="text-[26px] leading-none">
                  →
                </span>
              </a>

              <a
                href={siteConfig.contact.phone.href}
                className="contact-card contact-card-outline flex items-center justify-between gap-5 rounded-card border border-paper/45 px-[26px] py-6 text-paper"
              >
                <span className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-bold tracking-[.18em] uppercase text-yellow">
                    {content.phoneLabel}
                  </span>
                  <span className="font-display text-[clamp(22px,2.4vw,30px)] leading-[1.1]">
                    {siteConfig.contact.phone.display}
                  </span>
                </span>
                <span aria-hidden className="text-[26px] leading-none">
                  →
                </span>
              </a>
            </div>

            <p
              data-reveal
              className="mt-[22px] text-[14px] leading-[1.7] text-paper/66"
            >
              {content.hours}
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(180px,100%),1fr))] content-start gap-9">
            {content.info.map((block) => (
              <div key={block.label} data-reveal>
                <p className="kicker mb-3 text-yellow">{block.label}</p>
                <p className="text-[16px] leading-[1.8] text-paper/90">
                  {block.lines.map((line, index) => (
                    <span key={line}>
                      {index > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[clamp(60px,8vw,110px)] flex flex-wrap items-center justify-between gap-6 border-t border-paper/30 py-[34px]">
          <Image
            src={logoBianco}
            alt={logoAlt}
            sizes="210px"
            className="h-auto w-[210px]"
          />
          <p className="text-[13px] tracking-[.08em] uppercase text-paper/70">
            {content.footerNote}
          </p>
        </div>
      </div>
    </section>
  );
}
