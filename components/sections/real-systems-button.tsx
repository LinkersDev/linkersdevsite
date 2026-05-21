"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type RealSystemsButtonProps = {
  children: ReactNode;
  href: string;
  className?: string;
};

export function RealSystemsButton({
  children,
  href,
  className,
}: RealSystemsButtonProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "flex w-full items-center justify-center rounded-xl border border-white/12 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-slate-200 transition duration-200",
        "hover:border-white/18 hover:bg-white/[0.09] hover:text-white",
        className,
      )}
    >
      {children}
    </a>
  );
}
