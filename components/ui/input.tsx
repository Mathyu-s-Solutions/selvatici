import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-full border border-black/10 bg-white/80 px-4 text-sm text-[color:var(--foreground)] outline-none transition placeholder:text-black/35 focus-visible:border-[color:var(--petrol)] focus-visible:ring-2 focus-visible:ring-[color:var(--petrol)]/20",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
