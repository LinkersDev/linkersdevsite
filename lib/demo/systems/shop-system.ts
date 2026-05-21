import type { DemoSystemConfig } from "@/lib/demo/types";

export const shopSystem: DemoSystemConfig = {
  id: "shop-system",
  name: "Shops",
  subtitle: "Catalog, orders, and payments",
  accent: "from-violet-400 via-fuchsia-500 to-pink-500",
  systemTheme: {
    primaryColor: "#c084fc",
    accentColor: "#fb7185",
    backgroundStyle: "from-slate-950 via-purple-950/78 to-rose-950/70",
    cardStyle: "solid",
    sidebarStyle: "commerce",
    density: "balanced",
    typographyScale: "commercial",
    borderRadiusSystem: "pill",
    interactionTone: "energetic",
    layoutVariant: "pipeline",
  },
  sidebarEyebrow: "Store modules",
  moduleSectionLabel: "Sales flow",
  moduleBadgeLabel: "Sales",
  searchPlaceholder: "Search products or orders",
  dashboardHero: {
    eyebrow: "Shop management",
    title: "Manage catalog, payments, and order flow with a stronger storefront look.",
    description: "This shop demo leans into product cards, checkout activity, and conversion-ready reporting.",
    highlights: ["Product catalog", "Order pipeline", "Payment capture"],
  },
  statLabel: "Live store metrics",
  stats: [
    { label: "Orders", value: "76", delta: "+9 today", tone: "violet" },
    { label: "Revenue", value: "$1,920", delta: "+5.8% this week", tone: "blue" },
    { label: "Customers", value: "340", delta: "61 returning", tone: "emerald" },
  ],
  chart: {
    type: "line",
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    series: [14, 18, 22, 21, 28, 31],
    accent: "#a855f7",
  },
  modules: [
    {
      id: "products",
      label: "Products",
      summary: "Catalog listings and pricing",
      columns: [
        { key: "product", label: "Product" },
        { key: "price", label: "Price" },
        { key: "stock", label: "Stock" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "prod-1", cells: { product: "Noise Cancelling Headset", price: "$129", stock: "18" }, status: "Active", actionLabel: "Edit listing" },
        { id: "prod-2", cells: { product: "Smart Lamp", price: "$44", stock: "9" }, status: "Pending", actionLabel: "Boost listing" },
        { id: "prod-3", cells: { product: "Desk Stand", price: "$29", stock: "41" }, status: "Completed", actionLabel: "Duplicate" },
      ],
    },
    {
      id: "orders",
      label: "Orders",
      summary: "Checkout flow and fulfilment",
      columns: [
        { key: "order", label: "Order" },
        { key: "customer", label: "Customer" },
        { key: "amount", label: "Amount" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "shop-o1", cells: { order: "#7421", customer: "Maya", amount: "$240" }, status: "Active", actionLabel: "Ship now" },
        { id: "shop-o2", cells: { order: "#7422", customer: "Eli", amount: "$89" }, status: "Pending", actionLabel: "Confirm" },
        { id: "shop-o3", cells: { order: "#7423", customer: "Zara", amount: "$176" }, status: "Completed", actionLabel: "Invoice" },
      ],
    },
    {
      id: "payments",
      label: "Payments",
      summary: "Captured payments and refunds",
      columns: [
        { key: "method", label: "Method" },
        { key: "amount", label: "Amount" },
        { key: "channel", label: "Channel" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "pay-1", cells: { method: "Card", amount: "$176", channel: "Web" }, status: "Active", actionLabel: "Capture" },
        { id: "pay-2", cells: { method: "Wallet", amount: "$44", channel: "Mobile" }, status: "Review", actionLabel: "Verify" },
        { id: "pay-3", cells: { method: "Card", amount: "$89", channel: "POS" }, status: "Completed", actionLabel: "Refund" },
      ],
    },
  ],
  reports: [
    { label: "Conversion", value: "5.2%", detail: "Stable with improving CTR" },
    { label: "Refunds", value: "1.1%", detail: "Low after recent audit" },
    { label: "Repeat buyers", value: "34%", detail: "Healthy returning customer base" },
  ],
  quickActions: [
    { id: "add-product", label: "Add product", detail: "Create a new listing" },
    { id: "issue-refund", label: "Issue refund", detail: "Return a completed payment" },
    { id: "promote-item", label: "Promote item", detail: "Boost a product card" },
  ],
  settings: [
    { label: "Checkout recovery", detail: "Remind customers when carts are left incomplete.", enabled: true },
    { label: "Payment review", detail: "Double-check higher-risk payments before capture.", enabled: true },
    { label: "Promo scheduling", detail: "Launch and expire offers automatically.", enabled: false },
  ],
  activity: [
    { id: "a1", message: "Order #7421 moved to shipping", time: "4 min ago", tone: "violet" },
    { id: "a2", message: "New customer account created from checkout", time: "9 min ago", tone: "blue" },
    { id: "a3", message: "Payment sync completed across 3 channels", time: "18 min ago", tone: "emerald" },
  ],
};

