"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  FileText,
  GraduationCap,
  TrendingUp,
  Users,
} from "lucide-react";

import { StatCard } from "../stat-card";
import { SYSTEM_ACCENT } from "../config";

const accent = SYSTEM_ACCENT["school-system"];

const STATS: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Users,      value: "124", label: "Students"   },
  { icon: BookOpen,   value: "18",  label: "Classes"    },
  { icon: TrendingUp, value: "94%", label: "Attendance" },
  { icon: FileText,   value: "6",   label: "Exams"      },
];

type AttendStatus = "present" | "absent";

const ROWS: {
  initials: string;
  name: string;
  sub: string;
  time: string;
  status: AttendStatus;
}[] = [
  { initials: "LR", name: "Lena R.",  sub: "Class 10A", time: "08:30", status: "present" },
  { initials: "JT", name: "James T.", sub: "Class 9B",  time: "09:00", status: "present" },
  { initials: "MS", name: "Maya S.",  sub: "Class 11C", time: "09:30", status: "absent"  },
];

const STATUS_MAP: Record<AttendStatus, { label: string; cls: string }> = {
  present: { label: "Present", cls: "text-violet-400 bg-violet-500/12" },
  absent:  { label: "Absent",  cls: "text-slate-400 bg-white/8"        },
};


export default function EducationPreview() {
  const [done, setDone] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4 p-6 pb-5">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${accent.iconBorder} ${accent.iconBg} ${accent.iconText}`}
        >
          <GraduationCap className="h-5 w-5" strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-base font-semibold text-white">Education Ops</p>
          <p className="text-xs text-slate-500">School overview · Today</p>
        </div>
      </div>

      <div className="border-t border-white/8" />

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3 p-6 pb-5 sm:grid-cols-4">
        {STATS.map(({ icon, value, label }) => (
          <StatCard key={label} icon={icon} value={value} label={label} />
        ))}
      </div>

      {/* Attendance list — hidden on mobile */}
      <div className="hidden px-6 pb-4 md:block">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
          Today's Attendance
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
                  <span className="text-xs text-slate-500">{row.time}</span>
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
          {done ? "✓ Attendance saved" : "Save attendance"}
        </button>
        <button type="button" tabIndex={-1} className="h-11 cursor-default rounded-xl px-4 text-sm text-slate-600">
          Update grades
        </button>
        <button type="button" tabIndex={-1} className="h-11 cursor-default rounded-xl px-4 text-sm text-slate-600">
          View schedule
        </button>
      </div>
    </div>
  );
}
