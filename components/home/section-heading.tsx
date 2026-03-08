import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  inverted?: boolean;
}) {
  return (
    <div className="max-w-2xl space-y-5">
      <Badge variant={inverted ? "inverted" : "olive"}>{eyebrow}</Badge>
      <h2
        className={cn(
          "font-display text-3xl leading-none tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-[3.6rem]",
          inverted ? "text-(--paper)" : "text-foreground",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "max-w-xl text-base leading-8 text-pretty md:text-lg",
          inverted ? "text-white/78" : "text-black/68",
        )}
      >
        {description}
      </p>
    </div>
  );
}
