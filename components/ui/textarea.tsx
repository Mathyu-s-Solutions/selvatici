import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-32 w-full rounded-3xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-black/35 focus-visible:border-(--petrol) focus-visible:ring-2 focus-visible:ring-(--petrol)/20",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
