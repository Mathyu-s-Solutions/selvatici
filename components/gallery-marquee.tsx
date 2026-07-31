import Image from "next/image";
import type { StaticImageData } from "next/image";

import type { Content } from "@/content";
import { galleryRowOne, galleryRowTwo } from "@/lib/photos";

type RowProps = {
  images: StaticImageData[];
  /** Fluid row height, matching the design's two band sizes. */
  height: string;
  sizes: string;
  reverse?: boolean;
};

/** Each row is duplicated once so the -50% keyframe loops seamlessly. */
function MarqueeRow({ images, height, sizes, reverse = false }: RowProps) {
  const loop = [...images, ...images];

  return (
    <div className={`marquee-row ${reverse ? "marquee-row-reverse" : ""}`}>
      {loop.map((image, index) => (
        <Image
          key={`${image.src}-${index}`}
          src={image}
          alt=""
          aria-hidden
          sizes={sizes}
          style={{ height }}
          className="w-auto rounded-[3px]"
        />
      ))}
    </div>
  );
}

export function GalleryMarquee({ content }: { content: Content["gallery"] }) {
  return (
    <section className="overflow-hidden bg-yellow/28 py-[clamp(60px,8vw,110px)]">
      <p data-reveal className="eyebrow mb-[46px] page-px text-brown">
        {content.eyebrow}
      </p>
      <div className="flex flex-col gap-[18px]">
        <MarqueeRow
          images={galleryRowOne}
          height="clamp(180px,22vw,300px)"
          sizes="(max-width: 640px) 70vw, 450px"
        />
        <MarqueeRow
          images={galleryRowTwo}
          height="clamp(140px,17vw,230px)"
          sizes="(max-width: 640px) 55vw, 350px"
          reverse
        />
      </div>
    </section>
  );
}
