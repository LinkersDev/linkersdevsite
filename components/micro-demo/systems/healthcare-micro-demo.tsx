"use client";

import { useState } from "react";
import { Calendar, ClipboardList, FileText, Pill, Stethoscope, UserPlus } from "lucide-react";

const FEATURES = [
  { Icon: FileText,      label: "Records",     hint: "Patient files"   },
  { Icon: Calendar,      label: "Schedule",    hint: "Appointments"    },
  { Icon: Pill,          label: "Pharmacy",    hint: "Drug requests"   },
  { Icon: ClipboardList, label: "Reports",     hint: "Clinic data"     },
  { Icon: Stethoscope,   label: "Diagnosis",   hint: "Medical notes"   },
  { Icon: UserPlus,      label: "New Patient", hint: "Quick register"  },
] as const;

type ApptStatus = "checked-in" | "waiting" | "upcoming";

const badgeConfig: Record<ApptStatus, { label: string; className: string }> = {
  "checked-in": { label: "✓ Checked in", className: "text-emerald-400 bg-emerald-500/12" },
  waiting:      { label: "⏳ Waiting",    className: "text-slate-400 bg-white/8"          },
  upcoming:     { label: "○ Upcoming",    className: "text-slate-500 bg-white/6"          },
};

export default function HealthcareMicroDemo() {
  const [done, setDone] = useState(false);

  const rows: { name: string; time: string; status: ApptStatus }[] = [
    { name: "Ahmed K.", time: "09:00", status: "checked-in"              },
    { name: "Sara M.",  time: "09:30", status: done ? "checked-in" : "waiting" },
    { name: "Omar F.",  time: "10:00", status: "upcoming"                },
  ];

  return (
    <div className="px-8 pb-8 pt-0">
      {/* Stat line */}
      <p className="py-3 text-xs text-slate-400">Today · 3 appointments · 1 checked in</p>

      <div className="border-t border-white/8" />

      {/* Activity rows */}
      <ul>
        {rows.map((row) => {
          const badge = badgeConfig[row.status];
          return (
            <li key={row.name} className="flex items-center justify-between py-2.5">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
                <span className="truncate text-sm text-slate-300">{row.name}</span>
                <span className="shrink-0 text-xs text-slate-500">{row.time}</span>
              </div>
              <span
                className={`ml-3 shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${badge.className}`}
                style={{ transition: "color 120ms ease, background-color 120ms ease, opacity 120ms ease" }}
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
            className="h-9 rounded-xl border border-emerald-500/25 px-4 text-sm font-medium text-emerald-400 hover:bg-emerald-500/8 disabled:cursor-default disabled:opacity-50"
            style={{ transition: "color 120ms ease, background-color 120ms ease, opacity 120ms ease, border-color 120ms ease" }}
          >
            {done ? "✓ Checked in" : "Check in patient"}
          </button>
          <button type="button" tabIndex={-1} className="h-9 cursor-default rounded-xl px-3 text-sm text-slate-600">
            Book appointment
          </button>
          <button type="button" tabIndex={-1} className="h-9 cursor-default rounded-xl px-3 text-sm text-slate-600">
            View records
          </button>
        </div>
      </div>
    </div>
  );
}
