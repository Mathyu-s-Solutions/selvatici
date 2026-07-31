import type { Content } from "@/content";

export function Testimonianze({
  content,
}: {
  content: Content["testimonianze"];
}) {
  return (
    <section className="page-px py-[clamp(80px,10vw,150px)]">
      <div className="mx-auto max-w-[1180px]">
        <p data-reveal className="eyebrow mb-6 text-brown">
          {content.eyebrow}
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(270px,100%),1fr))] gap-7">
          {content.items.map((item) => (
            <blockquote
              key={item.author + item.quote}
              data-reveal
              className="rounded-card bg-sage/18 px-[30px] py-[34px]"
            >
              <p className="mb-5 font-display text-[23px] leading-[1.3] text-ink">
                {item.quote}
              </p>
              <footer className="text-[13px] tracking-[.06em] uppercase text-ink/60">
                {item.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
