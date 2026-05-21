import type { DemoSystemConfig } from "@/lib/demo/types";

export const automationSystem: DemoSystemConfig = {
  id: "automation-system",
  name: "Automation System",
  subtitle: "Workflow engine teaser",
  accent: "from-lime-400 via-cyan-500 to-blue-500",
  systemTheme: {
    primaryColor: "#67e8f9",
    accentColor: "#bef264",
    backgroundStyle: "from-[#050816] via-slate-950 to-cyan-950/70",
    cardStyle: "flat",
    sidebarStyle: "technical",
    density: "dense",
    typographyScale: "technical",
    borderRadiusSystem: "sharp",
    interactionTone: "technical",
    layoutVariant: "teaser",
  },
  sidebarEyebrow: "Workflow modules",
  moduleSectionLabel: "Automation stack",
  moduleBadgeLabel: "Node",
  searchPlaceholder: "Search flows or integrations",
  dashboardHero: {
    eyebrow: "Operations automation",
    title: "Preview workflow routing, integrations, and execution health in a technical layout.",
    description: "Still distinct and product-like, but without the heavy neon treatment.",
    highlights: ["Flow routing", "Connected apps", "Execution logs"],
  },
  statLabel: "Preview locked",
  teaser: true,
  stats: [
    { label: "Flows", value: "24", delta: "Connected to 11 apps", tone: "emerald" },
    { label: "Tasks", value: "81", delta: "Queued and waiting", tone: "violet" },
    { label: "Time saved", value: "31h", delta: "This month", tone: "blue" },
  ],
  chart: {
    type: "line",
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    series: [31, 38, 41, 45, 52, 58],
    accent: "#a3e635",
  },
  modules: [
    {
      id: "flows",
      label: "Flows",
      summary: "Workflow orchestration",
      columns: [
        { key: "flow", label: "Flow" },
        { key: "trigger", label: "Trigger" },
        { key: "steps", label: "Steps" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "flow-1", cells: { flow: "Lead routing", trigger: "New form", steps: "4" }, status: "Queued", actionLabel: "Inspect" },
        { id: "flow-2", cells: { flow: "Invoice sync", trigger: "Payment", steps: "5" }, status: "Review", actionLabel: "Unlock" },
        { id: "flow-3", cells: { flow: "Support alerts", trigger: "Ticket priority", steps: "3" }, status: "Completed", actionLabel: "Duplicate" },
      ],
    },
    {
      id: "integrations",
      label: "Integrations",
      summary: "Connected apps and triggers",
      columns: [
        { key: "app", label: "App" },
        { key: "events", label: "Events" },
        { key: "health", label: "Health" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "int-1", cells: { app: "Slack", events: "42", health: "99%" }, status: "Queued", actionLabel: "Configure" },
        { id: "int-2", cells: { app: "Notion", events: "18", health: "97%" }, status: "Review", actionLabel: "Reconnect" },
        { id: "int-3", cells: { app: "Stripe", events: "31", health: "100%" }, status: "Completed", actionLabel: "Audit logs" },
      ],
    },
    {
      id: "reports",
      label: "Reports",
      summary: "Task savings and execution history",
      columns: [
        { key: "report", label: "Report" },
        { key: "value", label: "Value" },
        { key: "period", label: "Period" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "rep-1", cells: { report: "Execution success", value: "98%", period: "7d" }, status: "Queued", actionLabel: "View logs" },
        { id: "rep-2", cells: { report: "Time saved", value: "31h", period: "30d" }, status: "Review", actionLabel: "Share" },
        { id: "rep-3", cells: { report: "Failures", value: "2", period: "30d" }, status: "Completed", actionLabel: "Inspect" },
      ],
    },
  ],
  reports: [
    { label: "Execution success", value: "98%", detail: "Stable across workflows" },
    { label: "Apps connected", value: "11", detail: "Cross-platform integrations enabled" },
    { label: "Hours saved", value: "31h", detail: "Automation reduces manual work" },
  ],
  quickActions: [
    { id: "run-flow", label: "Run flow", detail: "Queue an automation test" },
    { id: "connect-app", label: "Connect app", detail: "Link another tool" },
    { id: "view-logs", label: "View logs", detail: "Inspect execution history" },
  ],
  settings: [
    { label: "Flow approvals", detail: "Require review before a new automation goes live.", enabled: true },
    { label: "Retry policies", detail: "Re-run failed jobs with staged backoff rules.", enabled: true },
    { label: "Secret rotation", detail: "Refresh app credentials on a recurring schedule.", enabled: false },
  ],
  activity: [
    { id: "a1", message: "A new workflow was queued for approval", time: "1 min ago", tone: "lime" },
    { id: "a2", message: "Slack integration completed a sync cycle", time: "8 min ago", tone: "blue" },
    { id: "a3", message: "Reports updated with 98% execution success", time: "17 min ago", tone: "emerald" },
  ],
};

