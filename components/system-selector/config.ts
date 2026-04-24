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
    iconBg:           "bg-blue-500/10",
    iconBorder:       "border-blue-500/25",
    iconText:         "text-blue-400",
    activeBorder:     "border-blue-500/50",
    activeGlow:       "shadow-[0_0_28px_rgba(59,130,246,0.09)]",
    primaryBtnBorder: "border-blue-500/30",
    primaryBtnText:   "text-blue-400",
    primaryBtnHover:  "hover:bg-blue-500/10",
    avatarBg:         "bg-blue-500/15",
    avatarText:       "text-blue-400",
  },
  "business-website": {
    iconBg:           "bg-orange-500/10",
    iconBorder:       "border-orange-500/25",
    iconText:         "text-orange-400",
    activeBorder:     "border-orange-500/50",
    activeGlow:       "shadow-[0_0_28px_rgba(249,115,22,0.09)]",
    primaryBtnBorder: "border-orange-500/30",
    primaryBtnText:   "text-orange-400",
    primaryBtnHover:  "hover:bg-orange-500/10",
    avatarBg:         "bg-orange-500/15",
    avatarText:       "text-orange-400",
  },
};
