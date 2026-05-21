import type { DemoSystemConfig } from "@/lib/demo/types";

export const supermarketSystem: DemoSystemConfig = {
  id: "supermarket-system",
  name: "Supermarkets",
  subtitle: "Inventory, POS, and replenishment",
  accent: "from-emerald-400 via-cyan-500 to-blue-500",
  systemTheme: {
    primaryColor: "#a3e635",
    accentColor: "#34d399",
    backgroundStyle: "from-slate-950 via-lime-950/72 to-emerald-950/68",
    cardStyle: "outline",
    sidebarStyle: "grid",
    density: "dense",
    typographyScale: "retail",
    borderRadiusSystem: "structured",
    interactionTone: "efficient",
    layoutVariant: "inventory",
  },
  sidebarEyebrow: "Store modules",
  moduleSectionLabel: "Retail operations",
  moduleBadgeLabel: "Stock",
  searchPlaceholder: "Search inventory or suppliers",
  dashboardHero: {
    eyebrow: "Retail control",
    title: "Monitor shelves, POS lanes, and supplier deliveries from one store view.",
    description: "A supermarket layout that focuses on stock health and checkout flow instead of decorative effects.",
    highlights: ["Shelf counts", "POS lanes", "Supplier ETA"],
  },
  statLabel: "Live retail metrics",
  stats: [
    { label: "Products", value: "3,200", delta: "+80 listed this month", tone: "emerald" },
    { label: "Daily sales", value: "$5,600", delta: "+7% vs yesterday", tone: "blue" },
    { label: "Stock alerts", value: "12", delta: "4 critical items", tone: "violet" },
  ],
  chart: {
    type: "bar",
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    series: [44, 52, 49, 58, 66, 71],
    accent: "#34d399",
  },
  modules: [
    {
      id: "inventory",
      label: "Inventory",
      summary: "Stock levels and replenishment",
      columns: [
        { key: "sku", label: "SKU" },
        { key: "item", label: "Item" },
        { key: "stock", label: "Stock" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "inv-1", cells: { sku: "A-120", item: "Organic Apples", stock: "124" }, status: "Active", actionLabel: "Restock" },
        { id: "inv-2", cells: { sku: "B-411", item: "Greek Yogurt", stock: "32" }, status: "Pending", actionLabel: "Order supply" },
        { id: "inv-3", cells: { sku: "C-218", item: "Laundry Detergent", stock: "86" }, status: "Completed", actionLabel: "Audit shelf" },
      ],
    },
    {
      id: "pos",
      label: "POS",
      summary: "Daily register activity",
      columns: [
        { key: "register", label: "Register" },
        { key: "sales", label: "Sales" },
        { key: "cashier", label: "Cashier" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "pos-1", cells: { register: "Lane 1", sales: "$1,240", cashier: "Nadia" }, status: "Active", actionLabel: "View receipt" },
        { id: "pos-2", cells: { register: "Lane 2", sales: "$980", cashier: "Omar" }, status: "Pending", actionLabel: "Reconcile" },
        { id: "pos-3", cells: { register: "Lane 3", sales: "$1,420", cashier: "Sara" }, status: "Completed", actionLabel: "Export log" },
      ],
    },
    {
      id: "suppliers",
      label: "Suppliers",
      summary: "Purchase orders and deliveries",
      columns: [
        { key: "supplier", label: "Supplier" },
        { key: "delivery", label: "Delivery" },
        { key: "items", label: "Items" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "sup-1", cells: { supplier: "FreshLine", delivery: "Tomorrow", items: "18" }, status: "Active", actionLabel: "Track ETA" },
        { id: "sup-2", cells: { supplier: "CoreFoods", delivery: "Today", items: "6" }, status: "Review", actionLabel: "Approve" },
        { id: "sup-3", cells: { supplier: "ShelfPro", delivery: "Completed", items: "23" }, status: "Completed", actionLabel: "Archive" },
      ],
    },
  ],
  reports: [
    { label: "Gross sales", value: "$5.6k", detail: "Up 7% this week" },
    { label: "Shrink rate", value: "1.4%", detail: "Below target threshold" },
    { label: "On-shelf rate", value: "96%", detail: "Inventory remains healthy" },
  ],
  quickActions: [
    { id: "count-stock", label: "Count stock", detail: "Run a shelf count" },
    { id: "create-po", label: "Create PO", detail: "Order missing inventory" },
    { id: "sync-pos", label: "Sync POS", detail: "Update registers now" },
  ],
  settings: [
    { label: "Low-stock alerts", detail: "Flag shelves that need replenishment before peak hours.", enabled: true },
    { label: "Register reconciliation", detail: "Keep lane totals synced at the end of every shift.", enabled: true },
    { label: "Supplier auto-orders", detail: "Create purchase orders when par levels are missed.", enabled: false },
  ],
  activity: [
    { id: "a1", message: "Lane 1 completed 42 transactions", time: "1 min ago", tone: "emerald" },
    { id: "a2", message: "Stock alert resolved for dairy aisle", time: "9 min ago", tone: "blue" },
    { id: "a3", message: "Supplier delivery scheduled for tomorrow", time: "16 min ago", tone: "violet" },
  ],
};

