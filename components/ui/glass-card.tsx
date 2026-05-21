import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function GlassCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-white/12 bg-white/8 shadow-[0_18px_80px_rgba(5,10,30,0.45)] backdrop-blur-2xl",
        className,
      )}
      {...props}
    />
  );
}
