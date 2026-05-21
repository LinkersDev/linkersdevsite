"use client";

import { memo, useState } from "react";
import { BookOpen, GraduationCap, TrendingUp, Users } from "lucide-react";

import { StatCard } from "../stat-card";
import { SYSTEM_THEME } from "../config";

const theme = SYSTEM_THEME["school-system"];

type AttendStatus = "present" | "late" | "absent";

const ROWS: { initials: string; name: string; sub: string; time: string; status: AttendStatus }[] = [
  { initials: "LR", name: "Lena R.",   sub: "Class 10A", time: "08:30", status: "present" },
  { initials: "JT", name: "James T.",  sub: "Class 9B",  time: "09:00", status: "present" },
  { initials: "MS", name: "Maya S.",   sub: "Class 11C", time: "09:30", status: "absent"  },
  { initials: "DN", name: "Daniel N.", sub: "Class 10A", time: "09:45", status: "late"    },
];

const STATUS_MAP: Record<AttendStatus, { label: string; cls: string }> = {
  present: { label: "Present", cls: "text-violet-400 bg-violet-500/15" },
  late:    { label: "Late",    cls: "text-amber-400 bg-amber-500/15"   },
  absent:  { label: "Absent",  cls: "text-slate-400 bg-white/8"        },
};

const UPCOMING_CLASSES = [
  { name: "Mathematics",   time: "10:00", room: "Rm 4A" },
  { name: "Literature",    time: "11:30", room: "Rm 2B" },
  { name: "Science Lab",   time: "13:00", room: "Lab 1" },
];

function EducationPreview() {
  const [saved, setSaved] = useState(false);

  return (
    <div className="relative flex h-full min-h-[520px] overflow-hidden rounded-2xl">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0" style={{ background: theme.atmosphere }} />

      {/* Sidebar */}
      <aside className={`relative z-10 hidden w-[52px] shrink-0 flex-col items-center gap-1 border-r border-white/[0.06] py-4 lg:flex ${theme.sidebarBg}`}>
        <div className={`mb-3 flex h-8 w-8 items-center justify-center rounded-xl ${theme.accentBg}`}>
          <GraduationCap className={`h-4 w-4 ${theme.accentText}`} strokeWidth={2} />
        </div>
        {theme.navItems.map((item, i) => (
          <button
            key={item.label}
            type="button"
            tabIndex={-1}
            title={item.label}
            className={`flex h-8 w-8 cursor-default items-center justify-center rounded-xl text-sm transition-colors ${
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
            <GraduationCap className={`h-4 w-4 ${theme.accentText}`} strokeWidth={1.8} />
            <span className="text-sm font-semibold text-slate-100">Education Ops</span>
            <span className="text-slate-600">/</span>
            <span className="text-xs text-slate-500">Overview</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full px-2 py-0.5 text-[10px] font-medium text-violet-400" style={{ background: "rgba(139,92,246,0.12)" }}>
              Term 2 — Active
            </span>
            <div className="h-6 w-6 rounded-full bg-violet-500/20 ring-1 ring-violet-500/30" />
          </div>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4">
          <StatCard icon={Users}      value="124" label="Students"   accentText={theme.accentText} accentBg={theme.accentBg} />
          <StatCard icon={BookOpen}   value="18"  label="Classes"    accentText={theme.accentText} accentBg={theme.accentBg} />
          <StatCard icon={TrendingUp} value="94%" label="Attendance" accentText={theme.accentText} accentBg={theme.accentBg} />
          <StatCard icon={BookOpen}   value="6"   label="Exams"      accentText="text-slate-400"   accentBg="bg-white/[0.04]" />
        </div>

        {/* Content area */}
        <div className="flex flex-1 flex-col gap-3 overflow-hidden px-4 pb-4 sm:flex-row">
          {/* Attendance list */}
          <div className="flex-1 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            <div className="flex items-center justify-between border-b border-white/[0.05] px-4 py-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-600">Today&apos;s Attendance</p>
              <button
                type="button"
                disabled={saved}
                onClick={() => setSaved(true)}
                className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium transition-colors ${theme.accentText} disabled:cursor-default disabled:opacity-60`}
                style={{ background: theme.accentMuted }}
              >
                {saved ? "✓ Saved" : "Save"}
              </button>
            </div>
            <ul className="divide-y divide-white/[0.04]">
              {ROWS.map((row) => {
                const badge = STATUS_MAP[row.status];
                return (
                  <li key={row.name} className="flex items-center gap-3 px-4 py-3">
                    <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl text-[10px] font-bold ${theme.accentBg} ${theme.accentText}`}>
                      {row.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-slate-200">{row.name}</p>
                      <p className="text-[10px] text-slate-600">{row.sub}</p>
                    </div>
                    <div className="flex flex-col items-end gap-0.5">
                      <span className="text-[10px] text-slate-600">{row.time}</span>
                      <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-medium ${badge.cls}`}>{badge.label}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Secondary panel: upcoming classes */}
          <div className="shrink-0 sm:w-[160px]">
            <div className="flex h-full flex-col gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-600">Today&apos;s Classes</p>
              {UPCOMING_CLASSES.map((cls) => (
                <div key={cls.name} className={`rounded-xl border p-2.5 ${theme.accentBorder}`} style={{ background: theme.accentMuted }}>
                  <p className={`text-[10px] font-semibold ${theme.accentText}`}>{cls.name}</p>
                  <p className="text-[10px] text-slate-500">{cls.time} · {cls.room}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(EducationPreview);
