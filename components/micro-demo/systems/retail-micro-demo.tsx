"use client";

import { useState } from "react";
import { BarChart2, Package, Receipt, ScanLine, Tag, Truck } from "lucide-react";

const FEATURES = [
  { Icon: BarChart2, label: "Sales",        hint: "Daily reports"     },
  { Icon: Package,   label: "Inventory",    hint: "Stock levels"      },
  { Icon: Truck,     label: "Suppliers",    hint: "Order tracking"    },
  { Icon: ScanLine,  label: "POS Scanner",  hint: "Barcode checkout"  },
  { Icon: Receipt,   label: "Transactions", hint: "Payment history"   },
  { Icon: Tag,       label: "Pricing",      hint: "Update prices"     },
] as const;

type RowStatus = "low" | "ordered" | "ok";

const rows: { name: string; stock: string; initial: RowStatus }[] = [
  { name: "Rice 5kg",       stock: "8 units",  initial: "low" },
  { name: "Cooking Oil 1L", stock: "5 units",  initial: "low" },
  { name: "Sugar 2kg",      stock: "12 units", initial: "ok"  },
];

const badgeConfig: Record<RowStatus, { label: string; className: string }> = {
  low:     { label: "⚠ Low",    className: "text-amber-400 bg-amber-500/12" },
  ordered: { label: "Ordered",  className: "text-blue-400 bg-blue-500/12"   },
  ok:      { label: "✓ OK",     className: "text-emerald-400 bg-emerald-500/12" },
};

export default function RetailMicroDemo() {
  const [done, setDone] = useState(false);

  return (
    <div className="px-8 pb-8 pt-0">
      {/* Stat line */}
      <p className="py-3 text-xs text-slate-400">3 items below threshold · Updated just now</p>

      <div className="border-t border-white/8" />

      {/* Activity rows */}
      <ul>
        {rows.map((row) => {
          const status: RowStatus = done && row.initial === "low" ? "ordered" : row.initial;
          const badge = badgeConfig[status];
          return (
            <li key={row.name} className="flex items-center justify-between py-2.5">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
                <span className="truncate text-sm text-slate-300">{row.name}</span>
                <span className="shrink-0 text-xs text-slate-500">{row.stock}</span>
              </div>
              <span
                className={`ml-3 shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${badge.className}`}
                style={{ transition: "color 120ms ease, background-color 120ms ease" }}
              >
                {badge.label}
              </span>
            </li>
          );
        })}
      </ul>

      {/* Feature list */}
      <div className="py-5">
        <ul className="space-y-3.5">
          {FEATURES.map(({ Icon, label, hint }) => (
            <li key={label} className="flex items-start gap-3">
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" strokeWidth={1.6} />
              <div>
                <p className="text-sm font-medium leading-tight text-slate-200">{label}</p>
                <p className="text-xs leading-tight text-slate-500">{hint}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="border-t border-white/8 pt-4">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            disabled={done}
            onClick={() => setDone(true)}
            className="h-9 rounded-xl border border-blue-500/25 px-4 text-sm font-medium text-blue-400 hover:bg-blue-500/8 disabled:cursor-default disabled:opacity-50"
            style={{ transition: "color 120ms ease, background-color 120ms ease, opacity 120ms ease, border-color 120ms ease" }}
          >
            {done ? "✓ Reorder sent" : "Reorder flagged items"}
          </button>
          <button type="button" tabIndex={-1} className="h-9 cursor-default rounded-xl px-3 text-sm text-slate-600">
            Add new product
          </button>
          <button type="button" tabIndex={-1} className="h-9 cursor-default rounded-xl px-3 text-sm text-slate-600">
            View all stock
          </button>
        </div>
      </div>
    </div>
  );
}
