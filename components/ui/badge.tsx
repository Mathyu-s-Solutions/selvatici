import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit items-center rounded-full px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em]",
  {
    variants: {
      variant: {
        soft: "bg-white/70 text-[color:var(--foreground)]",
        olive: "bg-[color:var(--olive)]/15 text-[color:var(--olive)]",
        inverted: "bg-white/18 text-white backdrop-blur-sm",
      },
    },
    defaultVariants: {
      variant: "soft",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge };