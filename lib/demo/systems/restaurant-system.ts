import type { DemoSystemConfig } from "@/lib/demo/types";

export const restaurantSystem: DemoSystemConfig = {
  id: "restaurant-system",
  name: "Restaurants / Cafes",
  subtitle: "Orders, prep, and service flow",
  accent: "from-amber-300 via-orange-400 to-rose-500",
  systemTheme: {
    primaryColor: "#fb923c",
    accentColor: "#fda4af",
    backgroundStyle: "from-stone-950 via-orange-950/80 to-rose-950/72",
    cardStyle: "solid",
    sidebarStyle: "commerce",
    density: "dense",
    typographyScale: "commercial",
    borderRadiusSystem: "rounded",
    interactionTone: "energetic",
    layoutVariant: "commerce",
  },
  sidebarEyebrow: "Service modules",
  moduleSectionLabel: "Kitchen and floor",
  moduleBadgeLabel: "Service",
  searchPlaceholder: "Search menu items or orders",
  dashboardHero: {
    eyebrow: "Restaurant service",
    title: "See the menu, orders, tables, and kitchen pace in one warm service dashboard.",
    description: "Built for cafes and restaurants that want a more appetizing, more realistic demo.",
    highlights: ["Live kitchen queue", "Table turnover", "Fast order handoff"],
    image: "/restaurant-platter.svg",
    imageAlt: "Restaurant dishes displayed on a dining table",
  },
  statLabel: "Live service metrics",
  stats: [
    { label: "Orders today", value: "124", delta: "+18 from lunch rush", tone: "orange" },
    { label: "Revenue", value: "$2,840", delta: "+11% since yesterday", tone: "violet" },
    { label: "Active tables", value: "18", delta: "6 currently in service", tone: "emerald" },
  ],
  chart: {
    type: "line",
    labels: ["11am", "12pm", "1pm", "2pm", "3pm", "4pm"],
    series: [18, 32, 41, 37, 29, 24],
    accent: "#fb7185",
  },
  modules: [
    {
      id: "menu",
      label: "Menu",
      summary: "Dishes, pricing, and availability",
      columns: [
        { key: "item", label: "Item" },
        { key: "price", label: "Price" },
        { key: "stock", label: "Stock" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "menu-1", cells: { item: "Truffle Burger", price: "$18", stock: "14" }, status: "Active", actionLabel: "Edit item" },
        { id: "menu-2", cells: { item: "Sea Salt Fries", price: "$8", stock: "32" }, status: "Pending", actionLabel: "Pause item" },
        { id: "menu-3", cells: { item: "Cold Brew", price: "$5", stock: "48" }, status: "Completed", actionLabel: "Duplicate item" },
      ],
    },
    {
      id: "orders",
      label: "Orders",
      summary: "Kitchen queue and customer orders",
      columns: [
        { key: "order", label: "Order" },
        { key: "table", label: "Table" },
        { key: "eta", label: "ETA" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "ord-1", cells: { order: "#1842", table: "12", eta: "8m" }, status: "Active", actionLabel: "Send to kitchen" },
        { id: "ord-2", cells: { order: "#1843", table: "6", eta: "4m" }, status: "Pending", actionLabel: "Mark preparing" },
        { id: "ord-3", cells: { order: "#1844", table: "18", eta: "Done" }, status: "Completed", actionLabel: "Print receipt" },
      ],
    },
    {
      id: "tables",
      label: "Tables",
      summary: "Floor occupancy and service status",
      columns: [
        { key: "table", label: "Table" },
        { key: "guest", label: "Guests" },
        { key: "course", label: "Course" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "tbl-1", cells: { table: "4", guest: "2", course: "Main" }, status: "Active", actionLabel: "Add order" },
        { id: "tbl-2", cells: { table: "9", guest: "4", course: "Dessert" }, status: "Review", actionLabel: "Check bill" },
        { id: "tbl-3", cells: { table: "18", guest: "6", course: "Closed" }, status: "Completed", actionLabel: "Clear table" },
      ],
    },
  ],
  reports: [
    { label: "Average ticket", value: "$23", detail: "Steady across lunch and dinner" },
    { label: "Table turnover", value: "2.1x", detail: "Efficient floor service" },
    { label: "Prep time", value: "12m", detail: "Kitchen remains on pace" },
  ],
  quickActions: [
    { id: "new-order", label: "New order", detail: "Push a fresh ticket" },
    { id: "close-table", label: "Close table", detail: "Finalize the current bill" },
    { id: "refresh-menu", label: "Refresh menu", detail: "Update the live menu" },
  ],
  settings: [
    { label: "Menu availability", detail: "Hide sold-out dishes across dine-in and takeaway.", enabled: true },
    { label: "Kitchen pacing", detail: "Balance prep load across rush periods.", enabled: true },
    { label: "Receipt auto-print", detail: "Print kitchen slips the moment an order is confirmed.", enabled: false },
  ],
  activity: [
    { id: "a1", message: "Kitchen received 14 new tickets", time: "2 min ago", tone: "amber" },
    { id: "a2", message: "Table 12 moved to course 2", time: "7 min ago", tone: "violet" },
    { id: "a3", message: "Revenue snapshot updated for the evening shift", time: "15 min ago", tone: "emerald" },
  ],
};

