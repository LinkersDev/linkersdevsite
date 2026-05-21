"use client";

import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import type { SystemTheme } from "./config";

type ProductCardProps = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  theme: SystemTheme;
  isActive: boolean;
  onClick: () => void;
  thumbnail: ReactNode;
};

export function ProductCard({
  icon: Icon,
  title,
  tagline,
  theme,
  isActive,
  onClick,
  thumbnail,
}: ProductCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex w-full flex-col overflow-hidden rounded-2xl border text-left transition-all duration-200 ${
        isActive
          ? `${theme.accentBorder} bg-white/[0.07]`
          : "border-white/[0.06] bg-white/[0.03] hover:border-white/[0.12] hover:bg-white/[0.05]"
      }`}
      style={{
        boxShadow: isActive ? `0 0 32px ${theme.accentHex}18` : undefined,
      }}
    >
      {/* Atmosphere tint */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: theme.atmosphere }}
      />

      {/* Top section: icon + title + tagline */}
      <div className="relative z-10 flex items-center gap-3 p-5 pb-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${theme.accentBorder} ${theme.accentBg} ${theme.accentText}`}
        >
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-slate-100">{title}</p>
          <p className="mt-0.5 text-xs text-slate-500">{tagline}</p>
        </div>
        {isActive && (
          <span
            className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${theme.accentText}`}
            style={{ background: theme.accentMuted }}
          >
            Active
          </span>
        )}
      </div>

      {/* Mini thumbnail */}
      <div className="relative z-10 mx-4 mb-4 overflow-hidden rounded-xl border border-white/[0.06] bg-black/30">
        {thumbnail}
      </div>
    </button>
  );
}
