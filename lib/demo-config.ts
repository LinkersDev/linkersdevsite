export type ProjectType =
  | "school-system"
  | "hospital-system"
  | "restaurant-system"
  | "supermarket-system"
  | "shop-system"
  | "business-website"
  | "mobile-app"
  | "automation-system";

export type FeatureKey =
  | "students"
  | "attendance"
  | "dashboard"
  | "patients"
  | "booking"
  | "reports"
  | "menu"
  | "orders"
  | "inventory"
  | "catalog"
  | "website-pages"
  | "mobile-ui"
  | "payments"
  | "notifications"
  | "staff-roles"
  | "automation-flows"
  | "integrations";

type FeatureDefinition = {
  id: FeatureKey;
  label: string;
  icon: string;
  summary: string;
  weeks: number;
};

type CategoryDefinition = {
  id: ProjectType;
  label: string;
  icon: string;
  badge: string;
  teaser: string;
  accent: string;
  cardGradient: string;
  cardBorder: string;
  rowTone: string;
  baseTimeline: number;
  availableFeatures: FeatureKey[];
  defaultFeatures: FeatureKey[];
  previewTitle: string;
  previewStats: Array<{ label: string; value: string }>;
  liveRows: string[];
};

const featureCatalog: Record<FeatureKey, FeatureDefinition> = {
  students: { id: "students", label: "Students", icon: "👥", summary: "Profiles", weeks: 1 },
  attendance: { id: "attendance", label: "Attendance", icon: "🕒", summary: "Tracking", weeks: 1 },
  dashboard: { id: "dashboard", label: "Dashboard", icon: "📊", summary: "Overview", weeks: 1 },
  patients: { id: "patients", label: "Patients", icon: "🩺", summary: "Records", weeks: 1 },
  booking: { id: "booking", label: "Booking", icon: "📅", summary: "Appointments", weeks: 1 },
  reports: { id: "reports", label: "Reports", icon: "🧾", summary: "Analytics", weeks: 1 },
  menu: { id: "menu", label: "Menu", icon: "🍽️", summary: "Items", weeks: 1 },
  orders: { id: "orders", label: "Orders", icon: "🛒", summary: "Checkout", weeks: 1 },
  inventory: { id: "inventory", label: "Inventory", icon: "📦", summary: "Stock", weeks: 1 },
  catalog: { id: "catalog", label: "Catalog", icon: "🏷️", summary: "Products", weeks: 1 },
  "website-pages": { id: "website-pages", label: "Pages", icon: "🌐", summary: "Landing", weeks: 1 },
  "mobile-ui": { id: "mobile-ui", label: "Mobile UI", icon: "📱", summary: "Screens", weeks: 2 },
  payments: { id: "payments", label: "Payments", icon: "💳", summary: "Billing", weeks: 1 },
  notifications: { id: "notifications", label: "Alerts", icon: "🔔", summary: "Updates", weeks: 1 },
  "staff-roles": { id: "staff-roles", label: "Roles", icon: "🛡️", summary: "Access", weeks: 1 },
  "automation-flows": { id: "automation-flows", label: "Flows", icon: "⚙️", summary: "Automation", weeks: 2 },
  integrations: { id: "integrations", label: "Apps", icon: "🔌", summary: "Connect", weeks: 1 },
};

export const projectTypes: CategoryDefinition[] = [
  {
    id: "school-system",
    label: "School System",
    icon: "🏫",
    badge: "EDU",
    teaser: "Students, attendance, classes, and parent communication.",
    accent: "from-cyan-300 to-blue-500",
    cardGradient: "from-sky-950 via-blue-950 to-indigo-950",
    cardBorder: "border-sky-200/12",
    rowTone: "bg-sky-400/10 text-sky-100",
    baseTimeline: 3,
    availableFeatures: ["students", "attendance", "dashboard", "notifications", "staff-roles", "reports"],
    defaultFeatures: ["students", "attendance", "dashboard"],
    previewTitle: "Campus control",
    previewStats: [
      { label: "Students", value: "1.4k" },
      { label: "Attendance", value: "96%" },
      { label: "Classes", value: "42" },
    ],
    liveRows: ["Student intake", "Attendance check-ins", "Class timetable", "Parent updates"],
  },
  {
    id: "hospital-system",
    label: "Hospital / Clinic",
    icon: "🏥",
    badge: "MED",
    teaser: "Patients, appointments, doctors, and care reports.",
    accent: "from-sky-300 to-indigo-500",
    cardGradient: "from-teal-950 via-cyan-950 to-slate-950",
    cardBorder: "border-teal-200/12",
    rowTone: "bg-teal-400/10 text-teal-100",
    baseTimeline: 4,
    availableFeatures: ["patients", "booking", "reports", "dashboard", "notifications", "staff-roles"],
    defaultFeatures: ["patients", "booking", "reports"],
    previewTitle: "Clinic flow",
    previewStats: [
      { label: "Patients", value: "420" },
      { label: "Bookings", value: "98" },
      { label: "Doctors", value: "12" },
    ],
    liveRows: ["Reception queue", "Appointment desk", "Patient records", "Doctor schedule"],
  },
  {
    id: "restaurant-system",
    label: "Restaurants / Cafes",
    icon: "🍽️",
    badge: "FNB",
    teaser: "Menu, kitchen orders, tables, and stock control.",
    accent: "from-orange-300 to-rose-500",
    cardGradient: "from-amber-950 via-orange-950 to-rose-950",
    cardBorder: "border-orange-200/12",
    rowTone: "bg-orange-400/10 text-orange-100",
    baseTimeline: 3,
    availableFeatures: ["menu", "orders", "inventory", "payments", "dashboard", "notifications"],
    defaultFeatures: ["menu", "orders", "inventory"],
    previewTitle: "Service speed",
    previewStats: [
      { label: "Orders", value: "286" },
      { label: "Tables", value: "34" },
      { label: "Prep", value: "12m" },
    ],
    liveRows: ["Chef specials", "Kitchen queue", "Dining tables", "Stock alerts"],
  },
  {
    id: "supermarket-system",
    label: "Supermarkets",
    icon: "🛍️",
    badge: "RTL",
    teaser: "Inventory, POS lanes, suppliers, and retail reports.",
    accent: "from-emerald-300 to-cyan-500",
    cardGradient: "from-lime-950 via-emerald-950 to-teal-950",
    cardBorder: "border-lime-200/12",
    rowTone: "bg-lime-400/10 text-lime-100",
    baseTimeline: 4,
    availableFeatures: ["inventory", "payments", "reports", "dashboard", "catalog", "staff-roles"],
    defaultFeatures: ["inventory", "payments", "reports"],
    previewTitle: "Retail pulse",
    previewStats: [
      { label: "SKUs", value: "8.2k" },
      { label: "Sales", value: "1.8k" },
      { label: "Alerts", value: "12" },
    ],
    liveRows: ["POS lanes", "Shelf counts", "Supplier alerts", "Sales reports"],
  },
  {
    id: "shop-system",
    label: "Shops",
    icon: "🏬",
    badge: "SHP",
    teaser: "Catalog, customer orders, checkout, and payments.",
    accent: "from-violet-300 to-fuchsia-500",
    cardGradient: "from-purple-950 via-fuchsia-950 to-rose-950",
    cardBorder: "border-fuchsia-200/12",
    rowTone: "bg-fuchsia-400/10 text-fuchsia-100",
    baseTimeline: 3,
    availableFeatures: ["catalog", "orders", "payments", "dashboard", "notifications", "integrations"],
    defaultFeatures: ["catalog", "orders", "payments"],
    previewTitle: "Storefront flow",
    previewStats: [
      { label: "Items", value: "480" },
      { label: "Orders", value: "76" },
      { label: "Alerts", value: "8" },
    ],
    liveRows: ["Product catalog", "Checkout flow", "Order updates", "Store analytics"],
  },
  {
    id: "business-website",
    label: "Business Website",
    icon: "🌐",
    badge: "WEB",
    teaser: "Pages, forms, leads, and booking requests.",
    accent: "from-cyan-300 to-violet-500",
    cardGradient: "from-slate-900 via-cyan-950 to-indigo-950",
    cardBorder: "border-cyan-200/12",
    rowTone: "bg-cyan-400/10 text-cyan-100",
    baseTimeline: 2,
    availableFeatures: ["website-pages", "booking", "notifications", "integrations", "reports"],
    defaultFeatures: ["website-pages", "booking", "notifications"],
    previewTitle: "Lead machine",
    previewStats: [
      { label: "Pages", value: "12" },
      { label: "Leads", value: "154" },
      { label: "Forms", value: "6" },
    ],
    liveRows: ["Hero landing", "Lead capture", "Booking page", "Analytics feed"],
  },
  {
    id: "mobile-app",
    label: "Mobile App",
    icon: "📱",
    badge: "APP",
    teaser: "Screens, push alerts, retention, and payments.",
    accent: "from-fuchsia-300 to-purple-500",
    cardGradient: "from-indigo-950 via-violet-950 to-fuchsia-950",
    cardBorder: "border-violet-200/12",
    rowTone: "bg-violet-400/10 text-violet-100",
    baseTimeline: 5,
    availableFeatures: ["mobile-ui", "notifications", "payments", "dashboard", "integrations"],
    defaultFeatures: ["mobile-ui", "notifications", "payments"],
    previewTitle: "App shell",
    previewStats: [
      { label: "Screens", value: "18" },
      { label: "Users", value: "9.4k" },
      { label: "Sessions", value: "32m" },
    ],
    liveRows: ["Onboarding", "Home feed", "Push alerts", "Payments"],
  },
  {
    id: "automation-system",
    label: "Automation System",
    icon: "⚙️",
    badge: "AUTO",
    teaser: "Flows, connected apps, triggers, and execution logs.",
    accent: "from-lime-300 to-cyan-500",
    cardGradient: "from-slate-950 via-cyan-950 to-slate-900",
    cardBorder: "border-cyan-200/12",
    rowTone: "bg-cyan-400/10 text-cyan-100",
    baseTimeline: 3,
    availableFeatures: ["automation-flows", "integrations", "reports", "dashboard", "notifications"],
    defaultFeatures: ["automation-flows", "integrations", "reports"],
    previewTitle: "Ops engine",
    previewStats: [
      { label: "Flows", value: "24" },
      { label: "Apps", value: "11" },
      { label: "Time saved", value: "31h" },
    ],
    liveRows: ["Trigger intake", "Task routing", "App sync", "Reports"],
  },
];

export function getProjectType(projectType: ProjectType) {
  return projectTypes.find((item) => item.id === projectType) ?? projectTypes[0];
}

export function getFeature(feature: FeatureKey) {
  return featureCatalog[feature];
}

export function getAvailableFeatures(projectType: ProjectType) {
  return getProjectType(projectType).availableFeatures.map((feature) => featureCatalog[feature]);
}

export function normalizeFeatures(projectType: ProjectType, features: FeatureKey[]) {
  const allowed = new Set(getProjectType(projectType).availableFeatures);
  const safe = features.filter((feature) => allowed.has(feature));
  return safe.length > 0 ? safe : getProjectType(projectType).defaultFeatures;
}

export function calculateEstimate(projectType: ProjectType, features: FeatureKey[]) {
  const typeConfig = getProjectType(projectType);
  const selectedKeys = normalizeFeatures(projectType, features);
  const selected = selectedKeys.map((feature) => featureCatalog[feature]);
  const totalWeeks =
    typeConfig.baseTimeline +
    selected.reduce((total, feature) => total + feature.weeks, 0);
  const complexity = Math.min(100, 36 + selected.length * 12 + typeConfig.baseTimeline * 5);

  return {
    totalWeeks,
    complexity,
    selected,
    preview: {
      accent: typeConfig.accent,
      title: typeConfig.previewTitle,
      teaser: typeConfig.teaser,
      stats: typeConfig.previewStats,
      rows: typeConfig.liveRows,
      badge: typeConfig.badge,
    },
  };
}

export function getAssistantResponse(projectType: ProjectType, features: FeatureKey[]) {
  const typeConfig = getProjectType(projectType);
  const estimate = calculateEstimate(projectType, features);
  const moduleSummary = estimate.selected
    .slice(0, 3)
    .map((feature) => feature.label)
    .join(" • ");

  return {
    title: typeConfig.label,
    timeline: `${estimate.totalWeeks} weeks`,
    features: moduleSummary || typeConfig.teaser,
    suggestion: `Start with ${typeConfig.previewTitle.toLowerCase()}.`,
  };
}
