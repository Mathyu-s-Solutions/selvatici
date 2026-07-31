import type { Content } from "@/content";

export function Manifesto({ content }: { content: Content["manifesto"] }) {
  return (
    <section className="page-px py-[clamp(90px,11vw,170px)]">
      <div className="mx-auto max-w-[1180px]">
        <p data-reveal className="eyebrow mb-10 text-brown">
          {content.eyebrow}
        </p>
        <h2
          data-reveal
          className="font-display text-[clamp(38px,5.6vw,96px)] leading-[1.02] tracking-[-.005em] text-pretty text-ink"
        >
          {content.titleLead}{" "}
          <span className="text-olive">{content.titleAccent}</span>
        </h2>
        <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-10">
          {content.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              data-reveal
              className="text-[18px] leading-[1.75] text-pretty text-ink/82"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
