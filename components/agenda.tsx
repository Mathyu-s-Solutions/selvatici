import type { Content } from "@/content";

export function Agenda({ content }: { content: Content["agenda"] }) {
  return (
    <section id="agenda" className="page-px py-[clamp(80px,10vw,150px)]">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-[50px] flex flex-wrap items-end justify-between gap-6">
          <h2
            data-reveal
            className="font-display text-[clamp(34px,4.6vw,76px)] leading-[1.03] text-ink"
          >
            {content.title}
          </h2>
          <p data-reveal className="text-[14px] leading-[1.6] text-ink/60">
            {content.note}
          </p>
        </div>

        <div className="flex flex-col border-t border-ink/16">
          {content.events.map((event) => (
            <div
              key={event.id}
              data-reveal
              className="agenda-row grid grid-cols-1 items-center gap-3 border-b border-ink/16 py-[26px] pr-1 sm:grid-cols-[minmax(150px,220px)_1fr_auto] sm:gap-6"
            >
              <p className="text-[13px] font-bold tracking-[.08em] uppercase text-brown">
                {event.dateLabel}
              </p>
              <div>
                <p className="font-display text-[clamp(22px,2.4vw,34px)] leading-[1.15] text-ink">
                  {event.title}
                </p>
                <p className="mt-1.5 text-[15px] text-ink/66">
                  {event.subtitle}
                </p>
              </div>
              <a href={event.href} className="link-cta whitespace-nowrap">
                {event.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
