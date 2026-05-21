import type { DemoSystemConfig } from "@/lib/demo/types";

export const businessWebsiteSystem: DemoSystemConfig = {
  id: "business-website",
  name: "Business Website",
  subtitle: "Lead capture and booking engine",
  accent: "from-cyan-400 via-violet-500 to-purple-500",
  systemTheme: {
    primaryColor: "#22d3ee",
    accentColor: "#818cf8",
    backgroundStyle: "from-slate-950 via-cyan-950/74 to-indigo-950/68",
    cardStyle: "flat",
    sidebarStyle: "clean",
    density: "compact",
    typographyScale: "editorial",
    borderRadiusSystem: "soft",
    interactionTone: "calm",
    layoutVariant: "pipeline",
  },
  sidebarEyebrow: "Website modules",
  moduleSectionLabel: "Growth tools",
  moduleBadgeLabel: "Page",
  searchPlaceholder: "Search pages or leads",
  dashboardHero: {
    eyebrow: "Lead generation",
    title: "Present pages, bookings, and lead flow like a polished business website.",
    description: "A lighter editorial demo that feels closer to a real conversion-focused site backend.",
    highlights: ["Landing pages", "Lead capture", "Booking calendar"],
  },
  statLabel: "Live website metrics",
  stats: [
    { label: "Visitors", value: "2,300", delta: "+11% from search", tone: "blue" },
    { label: "Leads", value: "120", delta: "+18 new this week", tone: "violet" },
    { label: "Conversion", value: "5.2%", delta: "Up 0.8 points", tone: "emerald" },
  ],
  chart: {
    type: "line",
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    series: [46, 50, 58, 61, 68, 72],
    accent: "#8b5cf6",
  },
  modules: [
    {
      id: "pages",
      label: "Pages",
      summary: "Landing pages and content blocks",
      columns: [
        { key: "page", label: "Page" },
        { key: "views", label: "Views" },
        { key: "goal", label: "Goal" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "pg-1", cells: { page: "Home", views: "1,420", goal: "Demo booking" }, status: "Active", actionLabel: "Edit hero" },
        { id: "pg-2", cells: { page: "Pricing", views: "780", goal: "Lead capture" }, status: "Pending", actionLabel: "Test CTA" },
        { id: "pg-3", cells: { page: "Contact", views: "502", goal: "Contact form" }, status: "Completed", actionLabel: "Clone page" },
      ],
    },
    {
      id: "leads",
      label: "Leads",
      summary: "Captured leads and pipeline",
      columns: [
        { key: "lead", label: "Lead" },
        { key: "source", label: "Source" },
        { key: "score", label: "Score" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "ld-1", cells: { lead: "Nora", source: "Organic", score: "92" }, status: "Active", actionLabel: "Assign rep" },
        { id: "ld-2", cells: { lead: "Owen", source: "Paid search", score: "81" }, status: "Review", actionLabel: "Qualify" },
        { id: "ld-3", cells: { lead: "Priya", source: "Referral", score: "96" }, status: "Completed", actionLabel: "Archive" },
      ],
    },
    {
      id: "booking",
      label: "Booking",
      summary: "Consultation requests and calendar",
      columns: [
        { key: "request", label: "Request" },
        { key: "time", label: "Time" },
        { key: "channel", label: "Channel" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "bk-1", cells: { request: "Strategy call", time: "Tomorrow 10am", channel: "Web" }, status: "Active", actionLabel: "Confirm" },
        { id: "bk-2", cells: { request: "Discovery session", time: "Friday 2pm", channel: "Mobile" }, status: "Pending", actionLabel: "Reschedule" },
        { id: "bk-3", cells: { request: "Audit meeting", time: "Mon 11am", channel: "Email" }, status: "Completed", actionLabel: "Send recap" },
      ],
    },
  ],
  reports: [
    { label: "Lead conversion", value: "5.2%", detail: "Improving after landing page refresh" },
    { label: "Bounce rate", value: "31%", detail: "Healthy engagement across pages" },
    { label: "Average session", value: "3m 14s", detail: "Users spend more time on pricing" },
  ],
  quickActions: [
    { id: "launch-page", label: "Launch page", detail: "Publish a new landing page" },
    { id: "qualify-leads", label: "Qualify leads", detail: "Sort new contacts by score" },
    { id: "book-call", label: "Book call", detail: "Reserve a consultation slot" },
  ],
  settings: [
    { label: "Lead routing", detail: "Send high-intent leads to the right sales contact.", enabled: true },
    { label: "Booking reminders", detail: "Reduce no-shows with automated email reminders.", enabled: true },
    { label: "SEO review mode", detail: "Hold content edits for approval before publishing.", enabled: false },
  ],
  activity: [
    { id: "a1", message: "Homepage hero converted 14 new leads", time: "3 min ago", tone: "violet" },
    { id: "a2", message: "Booking form submitted from mobile view", time: "11 min ago", tone: "blue" },
    { id: "a3", message: "SEO traffic peaked at 2,300 visitors", time: "21 min ago", tone: "emerald" },
  ],
};

