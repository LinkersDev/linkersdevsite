"use client";

import { memo, useState } from "react";
import { FileText, Globe, Mail, Rocket, TrendingUp } from "lucide-react";

import { StatCard } from "../stat-card";
import { SYSTEM_THEME } from "../config";

const theme = SYSTEM_THEME["business-website"];

type ServiceStatus = "active" | "pending" | "setup";

const SERVICES: { initials: string; name: string; sub: string; note: string; status: ServiceStatus }[] = [
  { initials: "WS", name: "Main Website",   sub: "yourstore.com",      note: "5 pages",   status: "active"  },
  { initials: "EM", name: "Business Email", sub: "info@yourstore.com", note: "Pro inbox",  status: "active"  },
  { initials: "DM", name: "New Domain",     sub: "mycompany.com",      note: "Pending DNS", status: "pending" },
  { initials: "LP", name: "Landing Page",   sub: "yourstore.com/promo", note: "Draft",     status: "setup"   },
];

const STATUS_MAP: Record<ServiceStatus, { label: string; cls: string }> = {
  active:  { label: "Active",  cls: "text-emerald-400 bg-emerald-500/15" },
  pending: { label: "Pending", cls: "text-amber-400 bg-amber-500/15"    },
  setup:   { label: "Setup",   cls: "text-cyan-400 bg-cyan-500/15"      },
};

const ANALYTICS = [
  { label: "Page views",   value: "1.2K" },
  { label: "Leads today",  value: "14"   },
  { label: "Form submits", value: "6"    },
];

function GrowthPreview() {
  const [activated, setActivated] = useState(false);

  const services = SERVICES.map((s) =>
    s.initials === "DM"
      ? { ...s, status: (activated ? "active" : "pending") as ServiceStatus }
      : s
  );

  return (
    <div className="relative flex h-full min-h-[520px] overflow-hidden rounded-2xl">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0" style={{ background: theme.atmosphere }} />

      {/* Sidebar */}
      <aside className={`relative z-10 hidden w-[52px] shrink-0 flex-col items-center gap-1 border-r border-white/[0.06] py-4 lg:flex ${theme.sidebarBg}`}>
        <div className={`mb-3 flex h-8 w-8 items-center justify-center rounded-2xl ${theme.accentBg}`}>
          <Rocket className={`h-4 w-4 ${theme.accentText}`} strokeWidth={2} />
        </div>
        {theme.navItems.map((item, i) => (
          <button
            key={item.label}
            type="button"
            tabIndex={-1}
            title={item.label}
            className={`flex h-8 w-8 cursor-default items-center justify-center rounded-2xl text-sm transition-colors ${
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
            <Rocket className={`h-4 w-4 ${theme.accentText}`} strokeWidth={1.8} />
            <span className="text-sm font-semibold text-slate-100">Growth & Services</span>
            <span className="text-slate-600">/</span>
            <span className="text-xs text-slate-500">Overview</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full px-2 py-0.5 text-[10px] font-medium text-cyan-400" style={{ background: "rgba(6,182,212,0.12)" }}>
              3 Sites Active
            </span>
            <div className="h-6 w-6 rounded-full bg-cyan-500/20 ring-1 ring-cyan-500/30" />
          </div>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4">
          <StatCard icon={Globe}      value="3"   label="Websites" accentText={theme.accentText} accentBg={theme.accentBg} />
          <StatCard icon={Mail}       value="6"   label="Emails"   accentText={theme.accentText} accentBg={theme.accentBg} />
          <StatCard icon={TrendingUp} value="154" label="Leads"    accentText={theme.accentText} accentBg={theme.accentBg} />
          <StatCard icon={FileText}   value="12"  label="Pages"    accentText="text-slate-400"   accentBg="bg-white/[0.04]" />
        </div>

        {/* Content area */}
        <div className="flex flex-1 flex-col gap-3 overflow-hidden px-4 pb-4 sm:flex-row">
          {/* Services list */}
          <div className="flex-1 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            <div className="flex items-center justify-between border-b border-white/[0.05] px-4 py-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-600">Active Services</p>
              <button
                type="button"
                disabled={activated}
                onClick={() => setActivated(true)}
                className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium transition-colors ${theme.accentText} disabled:cursor-default disabled:opacity-60`}
                style={{ background: theme.accentMuted }}
              >
                {activated ? "✓ Domain live" : "Activate domain"}
              </button>
            </div>
            <ul className="divide-y divide-white/[0.04]">
              {services.map((svc) => {
                const badge = STATUS_MAP[svc.status];
                return (
                  <li key={svc.name} className="flex items-center gap-3 px-4 py-2.5">
                    <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-2xl text-[10px] font-bold ${theme.accentBg} ${theme.accentText}`}>
                      {svc.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-slate-200">{svc.name}</p>
                      <p className="text-[10px] text-slate-600">{svc.sub}</p>
                    </div>
                    <div className="flex flex-col items-end gap-0.5">
                      <span className="text-[10px] text-slate-600">{svc.note}</span>
                      <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-medium ${badge.cls}`} style={{ transition: "color 120ms, background 120ms" }}>{badge.label}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Secondary panel: analytics snapshot */}
          <div className="shrink-0 sm:w-[160px]">
            <div className="flex h-full flex-col gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-600">Analytics</p>
              {ANALYTICS.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/[0.05] p-2.5" style={{ background: theme.accentMuted }}>
                  <p className={`text-base font-bold ${theme.accentText}`}>{item.value}</p>
                  <p className="text-[10px] text-slate-500">{item.label}</p>
                </div>
              ))}
              <button type="button" tabIndex={-1} className="mt-auto cursor-default rounded-xl px-3 py-2 text-left text-xs text-slate-600">
                Full report →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(GrowthPreview);
