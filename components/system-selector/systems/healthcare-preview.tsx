"use client";

import { memo, useState } from "react";
import { CalendarDays, Clock, HeartPulse, UserCheck } from "lucide-react";

import { StatCard } from "../stat-card";
import { SYSTEM_THEME } from "../config";

const theme = SYSTEM_THEME["hospital-system"];

type ApptStatus = "checked-in" | "waiting" | "upcoming";

const APPOINTMENTS: { initials: string; name: string; sub: string; time: string; status: ApptStatus }[] = [
  { initials: "AK", name: "Ahmed K.", sub: "Follow-up",       time: "09:00", status: "checked-in" },
  { initials: "SM", name: "Sara M.",  sub: "General checkup", time: "09:30", status: "waiting"    },
  { initials: "OF", name: "Omar F.",  sub: "Vaccination",     time: "10:00", status: "upcoming"   },
  { initials: "LH", name: "Layla H.", sub: "Lab results",     time: "10:30", status: "upcoming"   },
];

const STATUS_MAP: Record<ApptStatus, { label: string; cls: string }> = {
  "checked-in": { label: "Checked in", cls: "text-emerald-400 bg-emerald-500/15" },
  waiting:      { label: "Waiting",    cls: "text-amber-400 bg-amber-500/15"     },
  upcoming:     { label: "Upcoming",   cls: "text-slate-400 bg-white/8"          },
};

function HealthcarePreview() {
  const [checkedIn, setCheckedIn] = useState(false);

  return (
    <div className="relative flex h-full min-h-[520px] overflow-hidden rounded-2xl">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0" style={{ background: theme.atmosphere }} />

      {/* Sidebar */}
      <aside className={`relative z-10 hidden w-[52px] shrink-0 flex-col items-center gap-1 border-r border-white/[0.06] py-4 lg:flex ${theme.sidebarBg}`}>
        <div className={`mb-3 flex h-8 w-8 items-center justify-center rounded-lg ${theme.accentBg}`}>
          <HeartPulse className={`h-4 w-4 ${theme.accentText}`} strokeWidth={2} />
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
            <HeartPulse className={`h-4 w-4 ${theme.accentText}`} strokeWidth={1.8} />
            <span className="text-sm font-semibold text-slate-100">Healthcare Ops</span>
            <span className="text-slate-600">/</span>
            <span className="text-xs text-slate-500">Dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded px-2 py-0.5 text-[10px] font-medium text-emerald-400" style={{ background: "rgba(16,185,129,0.12)" }}>
              ● Clinic Live
            </span>
            <div className="h-6 w-6 rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30" />
          </div>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4">
          <StatCard icon={CalendarDays} value="8"  label="Today"      accentText={theme.accentText} accentBg={theme.accentBg} />
          <StatCard icon={UserCheck}    value="3"  label="Checked in" accentText={theme.accentText} accentBg={theme.accentBg} />
          <StatCard icon={Clock}        value="2"  label="Waiting"    accentText="text-amber-400"   accentBg="bg-amber-500/10" />
          <StatCard icon={CalendarDays} value="3"  label="Upcoming"   accentText="text-slate-400"   accentBg="bg-white/[0.04]" />
        </div>

        {/* Content area */}
        <div className="flex flex-1 flex-col gap-3 overflow-hidden px-4 pb-4 sm:flex-row">
          {/* Patient list */}
          <div className="flex-1 overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02]">
            <div className="flex items-center justify-between border-b border-white/[0.05] px-4 py-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-600">Today&apos;s Appointments</p>
              <span className="text-[10px] text-slate-600">4 total</span>
            </div>
            <ul className="divide-y divide-white/[0.04]">
              {APPOINTMENTS.map((apt) => {
                const badge = STATUS_MAP[apt.status];
                return (
                  <li key={apt.name} className="flex items-center gap-3 px-4 py-2.5">
                    <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded text-[10px] font-bold ${theme.accentBg} ${theme.accentText}`}>
                      {apt.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-slate-200">{apt.name}</p>
                      <p className="text-[10px] text-slate-600">{apt.sub}</p>
                    </div>
                    <div className="flex flex-col items-end gap-0.5">
                      <span className="text-[10px] text-slate-600">{apt.time}</span>
                      <span className={`rounded px-1.5 py-0.5 text-[9px] font-medium ${badge.cls}`}>{badge.label}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Secondary panel */}
          <div className="shrink-0 sm:w-[160px]">
            <div className="flex h-full flex-col gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-600">Quick Actions</p>
              <button
                type="button"
                disabled={checkedIn}
                onClick={() => setCheckedIn(true)}
                className={`w-full rounded-lg border px-3 py-2 text-left text-xs font-medium transition-colors ${theme.accentBorder} ${theme.accentText} disabled:cursor-default disabled:opacity-50`}
                style={{ background: checkedIn ? theme.accentMuted : undefined, transition: "background 120ms" }}
              >
                {checkedIn ? "✓ Checked in" : "Check in patient"}
              </button>
              <button type="button" tabIndex={-1} className="w-full cursor-default rounded-lg px-3 py-2 text-left text-xs text-slate-600">
                New appointment
              </button>
              <button type="button" tabIndex={-1} className="w-full cursor-default rounded-lg px-3 py-2 text-left text-xs text-slate-600">
                View records
              </button>
              <div className="mt-auto rounded-lg border border-white/[0.06] p-3">
                <p className="text-[10px] text-slate-600">Next patient</p>
                <p className="mt-1 text-xs font-semibold text-slate-300">Sara M.</p>
                <p className="text-[10px] text-slate-600">09:30 · Checkup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(HealthcarePreview);
