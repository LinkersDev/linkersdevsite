import type { ProjectType } from "@/lib/demo-config";

export const CARD_ORDER: ProjectType[] = [
  "hospital-system",
  "school-system",
  "supermarket-system",
  "business-website",
];

export type SystemAccent = {
  iconBg: string;
  iconBorder: string;
  iconText: string;
  activeBorder: string;
  activeGlow: string;
  primaryBtnBorder: string;
  primaryBtnText: string;
  primaryBtnHover: string;
  avatarBg: string;
  avatarText: string;
};

export const SYSTEM_ACCENT: Record<string, SystemAccent> = {
  "hospital-system": {
    iconBg:           "bg-emerald-500/10",
    iconBorder:       "border-emerald-500/25",
    iconText:         "text-emerald-400",
    activeBorder:     "border-emerald-500/50",
    activeGlow:       "shadow-[0_0_28px_rgba(34,197,94,0.09)]",
    primaryBtnBorder: "border-emerald-500/30",
    primaryBtnText:   "text-emerald-400",
    primaryBtnHover:  "hover:bg-emerald-500/10",
    avatarBg:         "bg-emerald-500/15",
    avatarText:       "text-emerald-400",
  },
  "school-system": {
    iconBg:           "bg-violet-500/10",
    iconBorder:       "border-violet-500/25",
    iconText:         "text-violet-400",
    activeBorder:     "border-violet-500/50",
    activeGlow:       "shadow-[0_0_28px_rgba(99,102,241,0.09)]",
    primaryBtnBorder: "border-violet-500/30",
    primaryBtnText:   "text-violet-400",
    primaryBtnHover:  "hover:bg-violet-500/10",
    avatarBg:         "bg-violet-500/15",
    avatarText:       "text-violet-400",
  },
  "supermarket-system": {
    iconBg:           "bg-amber-500/10",
    iconBorder:       "border-amber-500/25",
    iconText:         "text-amber-400",
    activeBorder:     "border-amber-500/50",
    activeGlow:       "shadow-[0_0_28px_rgba(245,158,11,0.09)]",
    primaryBtnBorder: "border-amber-500/30",
    primaryBtnText:   "text-amber-400",
    primaryBtnHover:  "hover:bg-amber-500/10",
    avatarBg:         "bg-amber-500/15",
    avatarText:       "text-amber-400",
  },
  "business-website": {
    iconBg:           "bg-cyan-500/10",
    iconBorder:       "border-cyan-500/25",
    iconText:         "text-cyan-400",
    activeBorder:     "border-cyan-500/50",
    activeGlow:       "shadow-[0_0_28px_rgba(6,182,212,0.09)]",
    primaryBtnBorder: "border-cyan-500/30",
    primaryBtnText:   "text-cyan-400",
    primaryBtnHover:  "hover:bg-cyan-500/10",
    avatarBg:         "bg-cyan-500/15",
    avatarText:       "text-cyan-400",
  },
};

export type SystemTheme = {
  accent: string;
  accentHex: string;
  accentMuted: string;
  accentText: string;
  accentBorder: string;
  accentBg: string;
  sidebarBg: string;
  topbarBg: string;
  contentBg: string;
  atmosphere: string;
  cardGlow: string;
  tagline: string;
  mood: string;
  density: "compact" | "spacious";
  radiusStyle: "sharp" | "rounded" | "pill";
  navItems: { label: string; icon: string }[];
};

export const SYSTEM_THEME: Record<string, SystemTheme> = {
  "hospital-system": {
    accent:       "emerald",
    accentHex:    "#10b981",
    accentMuted:  "rgba(16,185,129,0.12)",
    accentText:   "text-emerald-400",
    accentBorder: "border-emerald-500/25",
    accentBg:     "bg-emerald-500/10",
    sidebarBg:    "bg-[#050f0b]",
    topbarBg:     "bg-[#060e0c]/90",
    contentBg:    "bg-[#030b08]",
    atmosphere:   "radial-gradient(ellipse 70% 50% at 20% 10%, rgba(16,185,129,0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(20,184,166,0.05) 0%, transparent 60%)",
    cardGlow:     "shadow-[0_0_40px_rgba(16,185,129,0.06)]",
    tagline:      "Clinical. Precise. Reliable.",
    mood:         "clinical",
    density:      "compact",
    radiusStyle:  "sharp",
    navItems: [
      { label: "Dashboard",    icon: "◫" },
      { label: "Patients",     icon: "♡" },
      { label: "Appointments", icon: "◷" },
      { label: "Records",      icon: "☰" },
      { label: "Staff",        icon: "◎" },
    ],
  },
  "school-system": {
    accent:       "violet",
    accentHex:    "#8b5cf6",
    accentMuted:  "rgba(139,92,246,0.12)",
    accentText:   "text-violet-400",
    accentBorder: "border-violet-500/25",
    accentBg:     "bg-violet-500/10",
    sidebarBg:    "bg-[#080610]",
    topbarBg:     "bg-[#090712]/90",
    contentBg:    "bg-[#060410]",
    atmosphere:   "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 85% 90%, rgba(99,102,241,0.06) 0%, transparent 60%)",
    cardGlow:     "shadow-[0_0_40px_rgba(139,92,246,0.06)]",
    tagline:      "Structured. Calm. Academic.",
    mood:         "academic",
    density:      "spacious",
    radiusStyle:  "rounded",
    navItems: [
      { label: "Overview",   icon: "◫" },
      { label: "Students",   icon: "◎" },
      { label: "Classes",    icon: "▦" },
      { label: "Attendance", icon: "◷" },
      { label: "Grades",     icon: "◈" },
    ],
  },
  "supermarket-system": {
    accent:       "amber",
    accentHex:    "#f59e0b",
    accentMuted:  "rgba(245,158,11,0.12)",
    accentText:   "text-amber-400",
    accentBorder: "border-amber-500/25",
    accentBg:     "bg-amber-500/10",
    sidebarBg:    "bg-[#100900]",
    topbarBg:     "bg-[#0e0800]/90",
    contentBg:    "bg-[#0a0600]",
    atmosphere:   "radial-gradient(ellipse 60% 50% at 85% 15%, rgba(245,158,11,0.08) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(251,146,60,0.06) 0%, transparent 60%)",
    cardGlow:     "shadow-[0_0_40px_rgba(245,158,11,0.06)]",
    tagline:      "Fast. Bold. Commerce-ready.",
    mood:         "commerce",
    density:      "compact",
    radiusStyle:  "rounded",
    navItems: [
      { label: "Dashboard",  icon: "◫" },
      { label: "Inventory",  icon: "▦" },
      { label: "Orders",     icon: "◈" },
      { label: "Products",   icon: "☰" },
      { label: "Reports",    icon: "◷" },
    ],
  },
  "business-website": {
    accent:       "cyan",
    accentHex:    "#06b6d4",
    accentMuted:  "rgba(6,182,212,0.12)",
    accentText:   "text-cyan-400",
    accentBorder: "border-cyan-500/25",
    accentBg:     "bg-cyan-500/10",
    sidebarBg:    "bg-[#020810]",
    topbarBg:     "bg-[#030a12]/90",
    contentBg:    "bg-[#020609]",
    atmosphere:   "radial-gradient(ellipse 70% 50% at 15% 20%, rgba(6,182,212,0.07) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(99,102,241,0.06) 0%, transparent 60%)",
    cardGlow:     "shadow-[0_0_40px_rgba(6,182,212,0.06)]",
    tagline:      "Modern. Digital. Growth-first.",
    mood:         "tech",
    density:      "spacious",
    radiusStyle:  "pill",
    navItems: [
      { label: "Overview",  icon: "◫" },
      { label: "Websites",  icon: "◎" },
      { label: "Domains",   icon: "◈" },
      { label: "Emails",    icon: "☰" },
      { label: "Analytics", icon: "◷" },
    ],
  },
};
