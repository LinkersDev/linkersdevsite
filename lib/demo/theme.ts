import type { DemoSystemTheme } from "@/lib/demo/types";
import { cn } from "@/lib/utils";

function radiusClass(borderRadiusSystem: DemoSystemTheme["borderRadiusSystem"]) {
  return {
    soft: "rounded-[28px]",
    rounded: "rounded-[22px]",
    sharp: "rounded-[14px]",
    pill: "rounded-[32px]",
    structured: "rounded-[18px]",
  }[borderRadiusSystem];
}

function panelRadiusClass(borderRadiusSystem: DemoSystemTheme["borderRadiusSystem"]) {
  return {
    soft: "rounded-[24px]",
    rounded: "rounded-[18px]",
    sharp: "rounded-[12px]",
    pill: "rounded-[24px]",
    structured: "rounded-[14px]",
  }[borderRadiusSystem];
}

function compactRadiusClass(borderRadiusSystem: DemoSystemTheme["borderRadiusSystem"]) {
  return {
    soft: "rounded-[18px]",
    rounded: "rounded-[14px]",
    sharp: "rounded-[10px]",
    pill: "rounded-full",
    structured: "rounded-[12px]",
  }[borderRadiusSystem];
}

function typographyClass(scale: DemoSystemTheme["typographyScale"]) {
  return {
    academic: "tracking-[-0.045em]",
    clinical: "tracking-[-0.03em]",
    commercial: "tracking-[-0.055em] uppercase",
    retail: "tracking-[-0.02em] uppercase",
    editorial: "tracking-[-0.05em]",
    product: "tracking-[-0.04em]",
    technical: "font-mono tracking-[-0.03em]",
  }[scale];
}

function densityClass(density: DemoSystemTheme["density"]) {
  return {
    compact: "gap-3 p-3",
    balanced: "gap-4 p-4",
    dense: "gap-3 p-3",
  }[density];
}

function sidebarWidth(style: DemoSystemTheme["sidebarStyle"]) {
  return {
    wide: "w-[310px]",
    clean: "w-[300px]",
    commerce: "w-[282px]",
    grid: "w-[276px]",
    compact: "w-[250px]",
    technical: "w-[264px]",
  }[style];
}

function surfaceClass(cardStyle: DemoSystemTheme["cardStyle"]) {
  return {
    glass: "border-white/12 bg-white/[0.06] backdrop-blur-xl",
    solid: "border-white/10 bg-slate-950/82",
    outline: "border-white/14 bg-black/15",
    flat: "border-slate-800/80 bg-slate-950/94",
    neon: "border-cyan-400/16 bg-slate-950/88",
  }[cardStyle];
}

export function getThemeClasses(theme: DemoSystemTheme) {
  const overlayTone =
    theme.interactionTone === "energetic"
      ? "bg-slate-950/76"
      : theme.interactionTone === "neon"
        ? "bg-[#050812]/80"
        : "bg-slate-950/72";

  const headingTone =
    theme.typographyScale === "technical"
      ? "font-mono uppercase"
      : theme.typographyScale === "commercial" || theme.typographyScale === "retail"
        ? "uppercase"
        : "";

  return {
    shellRadius: radiusClass(theme.borderRadiusSystem),
    panelRadius: panelRadiusClass(theme.borderRadiusSystem),
    compactRadius: compactRadiusClass(theme.borderRadiusSystem),
    title: cn("font-semibold text-white", typographyClass(theme.typographyScale), headingTone),
    sectionEyebrow:
      theme.typographyScale === "technical"
        ? "font-mono text-[11px] uppercase tracking-[0.34em]"
        : "text-[11px] font-semibold uppercase tracking-[0.34em]",
    density: densityClass(theme.density),
    sidebarWidth: sidebarWidth(theme.sidebarStyle),
    surface: surfaceClass(theme.cardStyle),
    sidebarSurface:
      theme.sidebarStyle === "technical"
        ? "border-cyan-500/12 bg-slate-950/86"
        : theme.sidebarStyle === "grid"
          ? "border-lime-200/10 bg-lime-950/10"
          : theme.sidebarStyle === "commerce"
            ? "border-orange-200/12 bg-orange-950/10"
            : theme.sidebarStyle === "clean"
              ? "border-teal-200/12 bg-emerald-950/8"
              : "border-white/10 bg-white/[0.04]",
    overlay: overlayTone,
    modalBackground: `bg-gradient-to-br ${theme.backgroundStyle}`,
    contentBackground:
      theme.cardStyle === "flat"
        ? "bg-slate-950/96"
        : theme.cardStyle === "neon"
          ? "bg-[#070b16]/92"
          : "bg-slate-950/76",
    border:
      theme.cardStyle === "outline"
        ? "border-white/14"
        : theme.cardStyle === "neon"
          ? "border-cyan-300/14"
          : "border-white/10",
    shadow:
      theme.cardStyle === "neon"
        ? "shadow-[0_18px_40px_rgba(8,145,178,0.12)]"
        : theme.cardStyle === "flat"
          ? "shadow-[0_14px_28px_rgba(15,23,42,0.22)]"
          : "shadow-[0_18px_36px_rgba(2,6,23,0.24)]",
    activeChip:
      theme.interactionTone === "energetic"
        ? "border-orange-200/24 bg-orange-400/10 text-orange-100"
        : theme.interactionTone === "precise"
          ? "border-teal-200/24 bg-teal-400/10 text-teal-100"
          : theme.interactionTone === "neon"
            ? "border-cyan-300/22 bg-cyan-400/8 text-cyan-100"
            : "border-violet-200/24 bg-violet-400/10 text-violet-100",
    subtleText:
      theme.typographyScale === "technical" ? "text-slate-400 font-mono" : "text-slate-400",
  };
}

