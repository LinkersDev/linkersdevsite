"use client";

import { memo, useState } from "react";
import { AlertTriangle, DollarSign, Package, ShoppingCart } from "lucide-react";

import { StatCard } from "../stat-card";
import { SYSTEM_THEME } from "../config";

const theme = SYSTEM_THEME["supermarket-system"];

type StockStatus = "low" | "critical" | "ok";

const STOCK_ROWS: { initials: string; name: string; sub: string; qty: string; status: StockStatus }[] = [
  { initials: "RI", name: "Rice 5kg",       sub: "Aisle 3", qty: "8 units",  status: "low"      },
  { initials: "OI", name: "Cooking Oil 1L", sub: "Aisle 2", qty: "3 units",  status: "critical" },
  { initials: "SU", name: "Sugar 2kg",      sub: "Aisle 4", qty: "12 units", status: "ok"       },
  { initials: "MI", name: "Milk 1L",        sub: "Fridge",  qty: "5 units",  status: "low"      },
];

const STATUS_MAP: Record<StockStatus, { label: string; cls: string }> = {
  critical: { label: "Critical", cls: "text-red-400 bg-red-500/15"       },
  low:      { label: "Low",      cls: "text-amber-400 bg-amber-500/15"   },
  ok:       { label: "OK",       cls: "text-emerald-400 bg-emerald-500/15" },
};

const RECENT_ORDERS = [
  { id: "#1042", total: "$38.40", time: "09:12" },
  { id: "#1041", total: "$12.80", time: "08:55" },
  { id: "#1040", total: "$91.00", time: "08:30" },
];

function RetailPreview() {
  const [reordered, setReordered] = useState(false);

  return (
    <div className="relative flex h-full min-h-[520px] overflow-hidden rounded-2xl">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0" style={{ background: theme.atmosphere }} />

      {/* Sidebar */}
      <aside className={`relative z-10 hidden w-[52px] shrink-0 flex-col items-center gap-1 border-r border-white/[0.06] py-4 lg:flex ${theme.sidebarBg}`}>
        <div className={`mb-3 flex h-8 w-8 items-center justify-center rounded-lg ${theme.accentBg}`}>
          <ShoppingCart className={`h-4 w-4 ${theme.accentText}`} strokeWidth={2} />
        </div>
        {theme.navItems.map((item, i) => (
          <button
            key={item.label}
            type="button"
            tabIndex={-1}
            title={item.label}
            className={`flex h-8 w-8 cursor-default items-center justify-center rounded-lg text-sm transition-colors ${
              i === 0 ? `${theme.accentBg} ${theme.accentText}` : "text-slate-600 hover:text-slate-400"
            }`}
          >
            {item.icon}
          </button>
        ))}
      </aside>

      {/* Main content */}
      <div className={`relative z-10 flex flex-1 flex-col overflow-hidden ${theme.contentBg}`}>
        {/* Topbar */}
        <div className={`flex items-center justify-between border-b border-white/[0.06] px-5 py-3 ${theme.topbarBg}`}>
          <div className="flex items-center gap-2">
            <ShoppingCart className={`h-4 w-4 ${theme.accentText}`} strokeWidth={1.8} />
            <span className="text-sm font-semibold text-slate-100">Retail Ops</span>
            <span className="text-slate-600">/</span>
            <span className="text-xs text-slate-500">Dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded px-2 py-0.5 text-[10px] font-medium text-amber-400" style={{ background: "rgba(245,158,11,0.12)" }}>
              ● Store Open
            </span>
            <div className="h-6 w-6 rounded-full bg-amber-500/20 ring-1 ring-amber-500/30" />
          </div>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4">
          <StatCard icon={ShoppingCart}  value="47"    label="Orders"    accentText={theme.accentText} accentBg={theme.accentBg} />
          <StatCard icon={DollarSign}    value="$4.2K" label="Revenue"   accentText={theme.accentText} accentBg={theme.accentBg} />
          <StatCard icon={Package}       value="312"   label="Products"  accentText="text-slate-400"   accentBg="bg-white/[0.04]" />
          <StatCard icon={AlertTriangle} value="8"     label="Low stock" accentText="text-red-400"     accentBg="bg-red-500/10" />
        </div>

        {/* Content area */}
        <div className="flex flex-1 flex-col gap-3 overflow-hidden px-4 pb-4 sm:flex-row">
          {/* Stock list */}
          <div className="flex-1 overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02]">
            <div className="flex items-center justify-between border-b border-white/[0.05] px-4 py-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-600">Stock Alerts</p>
              <button
                type="button"
                disabled={reordered}
                onClick={() => setReordered(true)}
                className={`rounded px-2 py-0.5 text-[10px] font-medium transition-colors ${theme.accentText} disabled:cursor-default disabled:opacity-60`}
                style={{ background: theme.accentMuted }}
              >
                {reordered ? "✓ Reordered" : "Reorder all"}
              </button>
            </div>
            <ul className="divide-y divide-white/[0.04]">
              {STOCK_ROWS.map((row) => {
                const badge = STATUS_MAP[row.status];
                return (
                  <li key={row.name} className="flex items-center gap-3 px-4 py-2.5">
                    <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded text-[10px] font-bold ${theme.accentBg} ${theme.accentText}`}>
                      {row.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-slate-200">{row.name}</p>
                      <p className="text-[10px] text-slate-600">{row.sub}</p>
                    </div>
                    <div className="flex flex-col items-end gap-0.5">
                      <span className="text-[10px] text-slate-600">{row.qty}</span>
                      <span className={`rounded px-1.5 py-0.5 text-[9px] font-medium ${badge.cls}`}>{badge.label}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Secondary panel: recent orders */}
          <div className="shrink-0 sm:w-[160px]">
            <div className="flex h-full flex-col gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-600">Recent Orders</p>
              {RECENT_ORDERS.map((order) => (
                <div key={order.id} className="rounded-lg border border-white/[0.05] p-2.5" style={{ background: theme.accentMuted }}>
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold ${theme.accentText}`}>{order.id}</span>
                    <span className="text-[10px] text-slate-600">{order.time}</span>
                  </div>
                  <p className="mt-0.5 text-xs font-semibold text-slate-200">{order.total}</p>
                </div>
              ))}
              <button type="button" tabIndex={-1} className="mt-auto cursor-default rounded-lg px-3 py-2 text-left text-xs text-slate-600">
                View all orders →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(RetailPreview);
