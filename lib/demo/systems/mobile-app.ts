import type { DemoSystemConfig } from "@/lib/demo/types";

export const mobileAppSystem: DemoSystemConfig = {
  id: "mobile-app",
  name: "Mobile App",
  subtitle: "Users, notifications, and engagement",
  accent: "from-fuchsia-400 via-purple-500 to-indigo-500",
  systemTheme: {
    primaryColor: "#818cf8",
    accentColor: "#e879f9",
    backgroundStyle: "from-slate-950 via-indigo-950/82 to-fuchsia-950/72",
    cardStyle: "glass",
    sidebarStyle: "compact",
    density: "compact",
    typographyScale: "product",
    borderRadiusSystem: "pill",
    interactionTone: "playful",
    layoutVariant: "engagement",
  },
  sidebarEyebrow: "App modules",
  moduleSectionLabel: "Growth loops",
  moduleBadgeLabel: "Screen",
  searchPlaceholder: "Search users or campaigns",
  dashboardHero: {
    eyebrow: "Product growth",
    title: "Show off users, push alerts, and retention in a smoother mobile-style workspace.",
    description: "This demo keeps the interface compact and app-like while still feeling premium.",
    highlights: ["User segments", "Push campaigns", "Retention trends"],
  },
  statLabel: "Live app metrics",
  stats: [
    { label: "Active users", value: "1,800", delta: "+140 today", tone: "violet" },
    { label: "Sessions", value: "4,200", delta: "+9% this week", tone: "blue" },
    { label: "Retention", value: "68%", delta: "Up 3 points", tone: "emerald" },
  ],
  chart: {
    type: "bar",
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    series: [52, 58, 61, 67, 72, 75],
    accent: "#d946ef",
  },
  modules: [
    {
      id: "users",
      label: "Users",
      summary: "App accounts and segments",
      columns: [
        { key: "user", label: "User" },
        { key: "segment", label: "Segment" },
        { key: "sessions", label: "Sessions" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "usr-1", cells: { user: "Ava", segment: "Power user", sessions: "42" }, status: "Active", actionLabel: "Open profile" },
        { id: "usr-2", cells: { user: "Noah", segment: "New", sessions: "7" }, status: "Pending", actionLabel: "Send onboarding" },
        { id: "usr-3", cells: { user: "Lina", segment: "Returning", sessions: "26" }, status: "Completed", actionLabel: "Tag segment" },
      ],
    },
    {
      id: "notifications",
      label: "Notifications",
      summary: "Push campaigns and delivery",
      columns: [
        { key: "campaign", label: "Campaign" },
        { key: "reach", label: "Reach" },
        { key: "opened", label: "Opened" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "not-1", cells: { campaign: "Re-engage", reach: "2,100", opened: "61%" }, status: "Active", actionLabel: "Pause" },
        { id: "not-2", cells: { campaign: "Feature launch", reach: "1,240", opened: "54%" }, status: "Review", actionLabel: "Edit copy" },
        { id: "not-3", cells: { campaign: "Weekly digest", reach: "4,200", opened: "72%" }, status: "Completed", actionLabel: "Duplicate" },
      ],
    },
    {
      id: "analytics",
      label: "Analytics",
      summary: "Trends, funnels, and retention",
      columns: [
        { key: "metric", label: "Metric" },
        { key: "value", label: "Value" },
        { key: "trend", label: "Trend" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "ana-1", cells: { metric: "Session depth", value: "3.8", trend: "+0.4" }, status: "Active", actionLabel: "Inspect" },
        { id: "ana-2", cells: { metric: "Conversion", value: "8.9%", trend: "+1.1%" }, status: "Pending", actionLabel: "Review funnel" },
        { id: "ana-3", cells: { metric: "Retention", value: "68%", trend: "+3%" }, status: "Completed", actionLabel: "Export chart" },
      ],
    },
  ],
  reports: [
    { label: "Daily active users", value: "1.8k", detail: "Consistent growth on iOS and Android" },
    { label: "Push open rate", value: "61%", detail: "Strong response to new campaigns" },
    { label: "7-day retention", value: "68%", detail: "Healthy returning user base" },
  ],
  quickActions: [
    { id: "push-campaign", label: "Push campaign", detail: "Send a notification blast" },
    { id: "feature-flag", label: "Feature flag", detail: "Enable a new app feature" },
    { id: "segment-users", label: "Segment users", detail: "Create a cohort view" },
  ],
  settings: [
    { label: "Push scheduling", detail: "Plan campaigns for user time zones and quiet hours.", enabled: true },
    { label: "Feature rollout", detail: "Release updates gradually by audience segment.", enabled: true },
    { label: "Payment retry", detail: "Retry failed in-app purchases automatically.", enabled: false },
  ],
  activity: [
    { id: "a1", message: "Push campaign reached 4,200 devices", time: "2 min ago", tone: "violet" },
    { id: "a2", message: "Retention improved after onboarding update", time: "8 min ago", tone: "blue" },
    { id: "a3", message: "New analytics cohort created for power users", time: "15 min ago", tone: "emerald" },
  ],
};

