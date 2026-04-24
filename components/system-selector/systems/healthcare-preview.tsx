"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Calendar,
  CalendarDays,
  Clock,
  HeartPulse,
  UserCheck,
} from "lucide-react";

import { StatCard } from "../stat-card";
import { SYSTEM_ACCENT } from "../config";

const accent = SYSTEM_ACCENT["hospital-system"];

const STATS: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: CalendarDays, value: "8", label: "Appointments" },
  { icon: UserCheck,    value: "3", label: "Checked in"   },
  { icon: Clock,        value: "2", label: "Waiting"      },
  { icon: Calendar,     value: "3", label: "Upcoming"     },
];

type ApptStatus = "checked-in" | "waiting" | "upcoming";

const APPOINTMENTS: {
  initials: string;
  name: string;
  sub: string;
  time: string;
  status: ApptStatus;
}[] = [
  { initials: "AK", name: "Ahmed K.", sub: "Follow-up",       time: "09:00", status: "checked-in" },
  { initials: "SM", name: "Sara M.",  sub: "General checkup", time: "09:30", status: "waiting"    },
  { initials: "OF", name: "Omar F.",  sub: "Vaccination",     time: "10:00", status: "upcoming"   },
];

const STATUS_MAP: Record<ApptStatus, { label: string; cls: string }> = {
  "checked-in": { label: "Checked in", cls: "text-emerald-400 bg-emerald-500/12" },
  waiting:      { label: "Waiting",    cls: "text-amber-400 bg-amber-500/12"     },
  upcoming:     { label: "Upcoming",   cls: "text-slate-400 bg-white/8"          },
};


export default function HealthcarePreview() {
  const [done, setDone] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4 p-6 pb-5">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${accent.iconBorder} ${accent.iconBg} ${accent.iconText}`}
        >
          <HeartPulse className="h-5 w-5" strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-base font-semibold text-white">Healthcare Ops</p>
          <p className="text-xs text-slate-500">Clinic overview · Today</p>
        </div>
      </div>

      <div className="border-t border-white/8" />

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3 p-6 pb-5 sm:grid-cols-4">
        {STATS.map(({ icon, value, label }) => (
          <StatCard key={label} icon={icon} value={value} label={label} />
        ))}
      </div>

      {/* Appointments list — hidden on mobile */}
      <div className="hidden px-6 pb-4 md:block">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
          Today's Appointments
        </p>
        <ul className="divide-y divide-white/6 overflow-hidden rounded-2xl border border-white/6 bg-white/[0.02]">
          {APPOINTMENTS.map((apt) => {
            const badge = STATUS_MAP[apt.status];
            return (
              <li key={apt.name} className="flex items-center gap-3 px-4 py-3">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${accent.avatarBg} ${accent.avatarText}`}
                >
                  {apt.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-slate-200">{apt.name}</p>
                  <p className="text-xs text-slate-500">{apt.sub}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs text-slate-500">{apt.time}</span>
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
          {done ? "✓ Checked in" : "Check in patient"}
        </button>
        <button type="button" tabIndex={-1} className="h-11 cursor-default rounded-xl px-4 text-sm text-slate-600">
          Book appointment
        </button>
        <button type="button" tabIndex={-1} className="h-11 cursor-default rounded-xl px-4 text-sm text-slate-600">
          View records
        </button>
      </div>
    </div>
  );
}
