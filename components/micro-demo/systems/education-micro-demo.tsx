"use client";

import { useState } from "react";
import { Award, Bell, BookOpen, Calendar, FileText, Users } from "lucide-react";

const FEATURES = [
  { Icon: BookOpen,  label: "Grades",       hint: "Score tracking"  },
  { Icon: Bell,      label: "Notifications", hint: "Parent alerts"   },
  { Icon: Calendar,  label: "Schedule",     hint: "Exam dates"      },
  { Icon: Users,     label: "Classes",      hint: "Student groups"  },
  { Icon: FileText,  label: "Reports",      hint: "Progress records" },
  { Icon: Award,     label: "Certificates", hint: "Issue diplomas"  },
] as const;

const rows: { name: string; present: boolean }[] = [
  { name: "Lena R.",  present: true  },
  { name: "James T.", present: true  },
  { name: "Maya S.",  present: false },
];

export default function EducationMicroDemo() {
  const [done, setDone] = useState(false);

  return (
    <div className="px-8 pb-8 pt-0">
      {/* Stat line */}
      <p className="py-3 text-xs text-slate-400">Class 10A · Today · 2 present · 1 absent</p>

      <div className="border-t border-white/8" />

      {/* Activity rows — static display */}
      <ul>
        {rows.map((row) => (
          <li key={row.name} className="flex items-center justify-between py-2.5">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
              <span className="truncate text-sm text-slate-300">{row.name}</span>
            </div>
            <span
              className={`ml-3 shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                row.present
                  ? "bg-violet-500/12 text-violet-400"
                  : "bg-white/8 text-slate-400"
              }`}
            >
              {row.present ? "Present" : "Absent"}
            </span>
          </li>
        ))}
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
            className="h-9 rounded-xl border border-violet-500/25 px-4 text-sm font-medium text-violet-400 hover:bg-violet-500/8 disabled:cursor-default disabled:opacity-50"
            style={{ transition: "color 120ms ease, background-color 120ms ease, opacity 120ms ease, border-color 120ms ease" }}
          >
            {done ? "✓ Attendance saved" : "Save attendance"}
          </button>
          <button type="button" tabIndex={-1} className="h-9 cursor-default rounded-xl px-3 text-sm text-slate-600">
            Mark all present
          </button>
          <button type="button" tabIndex={-1} className="h-9 cursor-default rounded-xl px-3 text-sm text-slate-600">
            Send to admin
          </button>
        </div>
      </div>
    </div>
  );
}
