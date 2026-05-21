import type { ProjectType } from "@/lib/demo-config";

export type DemoView = "dashboard" | "module" | "reports" | "settings";

export type DemoStatus = "Active" | "Pending" | "Completed" | "Queued" | "Review";

export type DemoDensity = "compact" | "balanced" | "dense";

export type DemoTypographyScale = "academic" | "clinical" | "commercial" | "retail" | "editorial" | "product" | "technical";

export type DemoBorderRadiusSystem = "soft" | "rounded" | "sharp" | "pill" | "structured";

export type DemoInteractionTone = "calm" | "precise" | "energetic" | "efficient" | "playful" | "technical" | "neon";

export type DemoCardStyle = "glass" | "solid" | "outline" | "flat" | "neon";

export type DemoSidebarStyle = "wide" | "clean" | "commerce" | "grid" | "compact" | "technical";

export type DemoLayoutVariant =
  | "analytics"
  | "workflow"
  | "commerce"
  | "inventory"
  | "pipeline"
  | "engagement"
  | "teaser";

export type DemoSystemTheme = {
  primaryColor: string;
  accentColor: string;
  backgroundStyle: string;
  cardStyle: DemoCardStyle;
  sidebarStyle: DemoSidebarStyle;
  density: DemoDensity;
  typographyScale: DemoTypographyScale;
  borderRadiusSystem: DemoBorderRadiusSystem;
  interactionTone: DemoInteractionTone;
  layoutVariant: DemoLayoutVariant;
};

export type DemoStat = {
  label: string;
  value: string;
  delta: string;
  tone: "blue" | "violet" | "cyan" | "emerald" | "amber" | "lime" | "orange";
};

export type DemoChart = {
  type: "line" | "bar";
  labels: string[];
  series: number[];
  accent: string;
};

export type DemoTableColumn = {
  key: string;
  label: string;
};

export type DemoTableRow = {
  id: string;
  cells: Record<string, string | number>;
  status: DemoStatus;
  actionLabel?: string;
};

export type DemoModule = {
  id: string;
  label: string;
  summary: string;
  columns: DemoTableColumn[];
  rows: DemoTableRow[];
};

export type DemoActivity = {
  id: string;
  message: string;
  time: string;
  tone: "blue" | "violet" | "emerald" | "amber" | "cyan" | "lime" | "orange";
};

export type DemoReport = {
  label: string;
  value: string;
  detail: string;
};

export type DemoQuickAction = {
  id: string;
  label: string;
  detail: string;
};

export type DemoHeroAsset = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  image?: string;
  imageAlt?: string;
};

export type DemoSetting = {
  label: string;
  detail: string;
  enabled: boolean;
};

export type DemoSystemConfig = {
  id: ProjectType;
  name: string;
  subtitle: string;
  accent: string;
  systemTheme: DemoSystemTheme;
  sidebarEyebrow: string;
  moduleSectionLabel: string;
  moduleBadgeLabel: string;
  searchPlaceholder: string;
  dashboardHero: DemoHeroAsset;
  statLabel: string;
  stats: DemoStat[];
  chart: DemoChart;
  modules: DemoModule[];
  reports: DemoReport[];
  quickActions: DemoQuickAction[];
  settings: DemoSetting[];
  activity: DemoActivity[];
  teaser?: boolean;
};

