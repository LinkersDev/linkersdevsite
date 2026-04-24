"use client";

import type { LucideIcon } from "lucide-react";

type ProductCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  activeBorder: string;
  activeGlow: string;
  isActive: boolean;
  onClick: () => void;
};

export function ProductCard({
  icon: Icon,
  title,
  description,
  accentBg,
  accentBorder,
  accentText,
  activeBorder,
  activeGlow,
  isActive,
  onClick,
}: ProductCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-200 ${
        isActive
          ? `${activeBorder} bg-white/[0.06] ${activeGlow}`
          : "border-white/[0.06] bg-white/[0.03] hover:border-white/[0.10] hover:bg-white/[0.05]"
      }`}
    >
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${accentBorder} ${accentBg} ${accentText}`}
      >
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-slate-100">{title}</p>
        <p className="mt-0.5 truncate text-xs text-slate-500">{description}</p>
      </div>

      {isActive && (
        <span className={`shrink-0 rounded-full bg-white/[0.06] px-2.5 py-1 text-[10px] font-medium ${accentText}`}>
          Active
        </span>
      )}
    </button>
  );
}
