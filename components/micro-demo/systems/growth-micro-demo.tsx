"use client";

import { useState } from "react";
import { Globe, Mail, Search, Star, TrendingUp, Users } from "lucide-react";

const FEATURES = [
  { Icon: Globe,      label: "Website",   hint: "Live pages"     },
  { Icon: Mail,       label: "Email",     hint: "Pro inbox"      },
  { Icon: Search,     label: "SEO",       hint: "Page ranking"   },
  { Icon: Users,      label: "Team",      hint: "Access control" },
  { Icon: TrendingUp, label: "Analytics", hint: "Visitor data"   },
  { Icon: Star,       label: "Reviews",   hint: "Ratings feed"   },
] as const;

type TaskStatus = "done" | "pending";

const badgeConfig: Record<TaskStatus, { label: string; className: string }> = {
  done:    { label: "✓ Done",    className: "text-emerald-400 bg-emerald-500/12" },
  pending: { label: "○ Pending", className: "text-amber-400 bg-amber-500/12"    },
};

export default function GrowthMicroDemo() {
  const [done, setDone] = useState(false);

  const rows: { name: string; status: TaskStatus }[] = [
    { name: "Website live",        status: "done"                   },
    { name: "Email configured",    status: "done"                   },
    { name: "Google Reviews link", status: done ? "done" : "pending" },
  ];

  return (
    <div className="px-8 pb-8 pt-0">
      {/* Stat line */}
      <p className="py-3 text-xs text-slate-400">2 of 3 steps complete · Launch ready</p>

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
            className="h-9 rounded-xl border border-orange-500/25 px-4 text-sm font-medium text-orange-400 hover:bg-orange-500/8 disabled:cursor-default disabled:opacity-50"
            style={{ transition: "color 120ms ease, background-color 120ms ease, opacity 120ms ease, border-color 120ms ease" }}
          >
            {done ? "✓ Completed" : "Complete Google setup"}
          </button>
          <button type="button" tabIndex={-1} className="h-9 cursor-default rounded-xl px-3 text-sm text-slate-600">
            Edit website
          </button>
          <button type="button" tabIndex={-1} className="h-9 cursor-default rounded-xl px-3 text-sm text-slate-600">
            View analytics
          </button>
        </div>
      </div>
    </div>
  );
}
