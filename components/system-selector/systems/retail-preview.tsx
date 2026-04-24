"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  DollarSign,
  Package,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";

import { StatCard } from "../stat-card";
import { SYSTEM_ACCENT } from "../config";

const accent = SYSTEM_ACCENT["supermarket-system"];

const STATS: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: ShoppingBag,   value: "47",   label: "Orders today" },
  { icon: Package,       value: "312",  label: "Products"     },
  { icon: DollarSign,    value: "$4.2K",label: "Revenue"      },
  { icon: AlertTriangle, value: "8",    label: "Low stock"    },
];

type StockStatus = "low" | "ok";

const ROWS: {
  initials: string;
  name: string;
  sub: string;
  qty: string;
  status: StockStatus;
}[] = [
  { initials: "RI", name: "Rice 5kg",       sub: "Aisle 3", qty: "8 units",  status: "low" },
  { initials: "OI", name: "Cooking Oil 1L", sub: "Aisle 2", qty: "5 units",  status: "low" },
  { initials: "SU", name: "Sugar 2kg",      sub: "Aisle 4", qty: "12 units", status: "ok"  },
];

const STATUS_MAP: Record<StockStatus, { label: string; cls: string }> = {
  low: { label: "⚠ Low", cls: "text-amber-400 bg-amber-500/12"    },
  ok:  { label: "✓ OK",  cls: "text-emerald-400 bg-emerald-500/12" },
};


export default function RetailPreview() {
  const [done, setDone] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4 p-6 pb-5">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${accent.iconBorder} ${accent.iconBg} ${accent.iconText}`}
        >
          <ShoppingCart className="h-5 w-5" strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-base font-semibold text-white">Retail Ops</p>
          <p className="text-xs text-slate-500">Store overview · Today</p>
        </div>
      </div>

      <div className="border-t border-white/8" />

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3 p-6 pb-5 sm:grid-cols-4">
        {STATS.map(({ icon, value, label }) => (
          <StatCard key={label} icon={icon} value={value} label={label} />
        ))}
      </div>

      {/* Stock list — hidden on mobile */}
      <div className="hidden px-6 pb-4 md:block">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
          Low Stock Items
        </p>
        <ul className="divide-y divide-white/6 overflow-hidden rounded-2xl border border-white/6 bg-white/[0.02]">
          {ROWS.map((row) => {
            const badge = STATUS_MAP[row.status];
            return (
              <li key={row.name} className="flex items-center gap-3 px-4 py-3">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${accent.avatarBg} ${accent.avatarText}`}
                >
                  {row.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-slate-200">{row.name}</p>
                  <p className="text-xs text-slate-500">{row.sub}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs text-slate-500">{row.qty}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${badge.cls}`}>
                    {badge.label}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Action bar */}
      <div className="flex flex-wrap gap-3 border-t border-white/8 p-6">
        <button
          type="button"
          disabled={done}
          onClick={() => setDone(true)}
          className={`h-11 rounded-xl border px-5 text-sm font-medium ${accent.primaryBtnBorder} ${accent.primaryBtnText} ${accent.primaryBtnHover} disabled:cursor-default disabled:opacity-50`}
          style={{ transition: "color 120ms ease, background-color 120ms ease, opacity 120ms ease, border-color 120ms ease" }}
        >
          {done ? "✓ Reorder sent" : "Reorder flagged items"}
        </button>
        <button type="button" tabIndex={-1} className="h-11 cursor-default rounded-xl px-4 text-sm text-slate-600">
          Add product
        </button>
        <button type="button" tabIndex={-1} className="h-11 cursor-default rounded-xl px-4 text-sm text-slate-600">
          View reports
        </button>
      </div>
    </div>
  );
}
