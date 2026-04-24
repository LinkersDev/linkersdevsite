"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { FileText, Globe, Link2, Mail, Rocket } from "lucide-react";

import { StatCard } from "../stat-card";
import { SYSTEM_ACCENT } from "../config";

const accent = SYSTEM_ACCENT["business-website"];

const STATS: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Globe,    value: "3",  label: "Websites"       },
  { icon: Mail,     value: "6",  label: "Business emails" },
  { icon: Link2,    value: "4",  label: "Domains"         },
  { icon: FileText, value: "12", label: "Pages live"      },
];

type ServiceStatus = "active" | "pending";

const ROWS: {
  initials: string;
  name: string;
  sub: string;
  note: string;
  status: ServiceStatus;
}[] = [
  { initials: "WS", name: "Main Website",    sub: "yourstore.com",      note: "5 pages",  status: "active"  },
  { initials: "EM", name: "Business Email",  sub: "info@yourstore.com", note: "Pro inbox", status: "active"  },
  { initials: "DM", name: "New Domain",      sub: "mycompany.com",      note: "Pending",  status: "pending" },
];

const STATUS_MAP: Record<ServiceStatus, { label: string; cls: string }> = {
  active:  { label: "Active",  cls: "text-emerald-400 bg-emerald-500/12" },
  pending: { label: "Pending", cls: "text-amber-400 bg-amber-500/12"    },
};

export default function GrowthPreview() {
  const [done, setDone] = useState(false);

  const rows = ROWS.map((row) =>
    row.initials === "DM"
      ? { ...row, status: (done ? "active" : "pending") as ServiceStatus }
      : row
  );

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4 p-6 pb-5">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${accent.iconBorder} ${accent.iconBg} ${accent.iconText}`}
        >
          <Rocket className="h-5 w-5" strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-base font-semibold text-white">Growth & Services</p>
          <p className="text-xs text-slate-500">Websites · Domains · Business email</p>
        </div>
      </div>

      <div className="border-t border-white/8" />

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3 p-6 pb-5 sm:grid-cols-4">
        {STATS.map(({ icon, value, label }) => (
          <StatCard key={label} icon={icon} value={value} label={label} />
        ))}
      </div>

      {/* Services list — hidden on mobile */}
      <div className="hidden px-6 pb-4 md:block">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
          Active Services
        </p>
        <ul className="divide-y divide-white/6 overflow-hidden rounded-2xl border border-white/6 bg-white/[0.02]">
          {rows.map((row) => {
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
                  <span className="text-xs text-slate-500">{row.note}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${badge.cls}`}
                    style={{ transition: "color 120ms ease, background-color 120ms ease" }}
                  >
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
          {done ? "✓ Domain activated" : "Activate domain"}
        </button>
        <button type="button" tabIndex={-1} className="h-11 cursor-default rounded-xl px-4 text-sm text-slate-600">
          Add website
        </button>
        <button type="button" tabIndex={-1} className="h-11 cursor-default rounded-xl px-4 text-sm text-slate-600">
          Setup email
        </button>
      </div>
    </div>
  );
}
