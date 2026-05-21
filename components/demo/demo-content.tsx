"use client";
import Image from "next/image";
import { useId, useMemo, useState, type ReactNode } from "react";

import { getThemeClasses } from "@/lib/demo/theme";
import type {
  DemoModule,
  DemoReport,
  DemoStatus,
  DemoSystemConfig,
  DemoView,
} from "@/lib/demo/types";
import { cn } from "@/lib/utils";

type DemoContentProps = {
  system: DemoSystemConfig;
  activeView: DemoView;
  activeModuleId: string;
  teaser?: boolean;
};

type ToastMessage = {
  id: string;
  title: string;
  description: string;
};

function StatusBadge({ status }: { status: string }) {
  const tone =
    status === "Active"
      ? "bg-emerald-400/15 text-emerald-300 border-emerald-400/30"
      : status === "Pending"
        ? "bg-amber-400/15 text-amber-300 border-amber-400/30"
        : status === "Queued"
          ? "bg-cyan-400/15 text-cyan-300 border-cyan-400/30"
          : status === "Review"
            ? "bg-violet-400/15 text-violet-300 border-violet-400/30"
            : "bg-slate-400/15 text-slate-200 border-slate-400/30";

  return <span className={cn("rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.28em]", tone)}>{status}</span>;
}

function toneDot(tone: DemoSystemConfig["activity"][number]["tone"]) {
  return tone === "blue"
    ? "bg-blue-400"
    : tone === "violet"
      ? "bg-violet-400"
      : tone === "emerald"
        ? "bg-emerald-400"
        : tone === "cyan"
          ? "bg-cyan-400"
          : tone === "lime"
            ? "bg-lime-400"
            : tone === "orange"
              ? "bg-orange-400"
              : "bg-amber-400";
}

function SurfaceCard({
  system,
  className,
  children,
}: {
  system: DemoSystemConfig;
  className?: string;
  children: ReactNode;
}) {
  const themeClasses = getThemeClasses(system.systemTheme);

  return (
    <div className={cn(themeClasses.panelRadius, "border p-4", themeClasses.border, themeClasses.surface, themeClasses.shadow, className)}>
      {children}
    </div>
  );
}

function ToastStack({ items }: { items: ToastMessage[] }) {
  return (
    <div className="pointer-events-none fixed right-6 top-6 z-50 flex w-full max-w-sm flex-col gap-3">
      {items.map((toast) => (
        <div
          key={toast.id}
          className="rounded-[18px] border border-white/10 bg-slate-950/90 p-4 shadow-[0_12px_24px_rgba(0,0,0,0.28)] backdrop-blur-sm"
        >
          <p className="text-sm font-semibold text-white">{toast.title}</p>
          <p className="mt-1 text-xs leading-5 text-slate-300">{toast.description}</p>
        </div>
      ))}
    </div>
  );
}

function SparkChart({ labels, series, accent, type }: DemoSystemConfig["chart"]) {
  const gradientId = useId();
  const max = Math.max(...series, 1);

  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4 shadow-[0_12px_24px_rgba(2,6,23,0.24)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">Performance</p>
          <p className="mt-2 text-sm text-slate-400">Operational trend snapshot</p>
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-300">
          {type === "line" ? "Line" : "Bar"} chart
        </span>
      </div>
      <svg viewBox="0 0 600 220" className="mt-4 h-[220px] w-full overflow-visible">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <g opacity="0.18">
          {[0, 1, 2, 3, 4].map((index) => (
            <line key={index} x1="40" x2="560" y1={180 - index * 35} y2={180 - index * 35} stroke="#94a3b8" strokeDasharray="4 8" />
          ))}
        </g>
        {type === "line" ? (
          <>
            <path
              d={`M 40 ${180 - (series[0] / max) * 130} ${series
                .map((value, index) => `L ${40 + index * 100} ${180 - (value / max) * 130}`)
                .join(" ")}`}
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={`M 40 ${180 - (series[0] / max) * 130} ${series
                .map((value, index) => `L ${40 + index * 100} ${180 - (value / max) * 130}`)
                .join(" ")} L 540 210 L 40 210 Z`}
              fill={`url(#${gradientId})`}
              opacity="0.12"
            />
          </>
        ) : (
          series.map((value, index) => {
            const height = (value / max) * 120 + 18;
            return (
              <rect
                key={labels[index] ?? index}
                x={60 + index * 85}
                y={180 - height}
                width="42"
                height={height}
                rx="14"
                fill={`url(#${gradientId})`}
              />
            );
          })
        )}
        {labels.map((label, index) => (
          <text key={label} x={70 + index * 85} y="205" fill="#94a3b8" fontSize="11" textAnchor="middle">
            {label}
          </text>
        ))}
      </svg>
    </div>
  );
}

function ActivityFeed({
  system,
  items,
}: {
  system: DemoSystemConfig;
  items: DemoSystemConfig["activity"];
}) {
  const themeClasses = getThemeClasses(system.systemTheme);

  return (
    <SurfaceCard system={system}>
      <div className="flex items-center justify-between">
        <div>
          <p className={cn(themeClasses.sectionEyebrow, "text-slate-300")}>Recent activity</p>
          <p className={cn("mt-2 text-sm", themeClasses.subtleText)}>Believable updates from the active system</p>
        </div>
        <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Updated
        </span>
      </div>
      <div className="mt-4 space-y-3">
        {items.slice(0, 5).map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-3 rounded-[18px] border border-white/8 bg-slate-950/70 p-3"
          >
            <span
              className={cn(
                "mt-1 h-2.5 w-2.5 rounded-full",
                toneDot(item.tone),
              )}
            />
            <div className="min-w-0">
              <p className="text-sm text-white">{item.message}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-500">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </SurfaceCard>
  );
}

function QuickActions({
  system,
  actions,
  onAction,
  teaser,
}: {
  system: DemoSystemConfig;
  actions: DemoSystemConfig["quickActions"];
  onAction: (action: DemoSystemConfig["quickActions"][number]) => void;
  teaser?: boolean;
}) {
  return (
    <SurfaceCard system={system}>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">Quick actions</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {actions.map((action) => (
          <button
            key={action.id}
            type="button"
            onClick={() => onAction(action)}
            className="rounded-[18px] border border-white/8 bg-slate-950/70 p-3 text-left transition duration-150 hover:border-white/16 hover:bg-slate-900/80"
          >
            <p className="text-sm font-medium text-white">{action.label}</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">{teaser ? "Locked in preview mode" : action.detail}</p>
          </button>
        ))}
      </div>
    </SurfaceCard>
  );
}

function HeroPanel({ system }: { system: DemoSystemConfig }) {
  const hero = system.dashboardHero;
  const hasImage = Boolean(hero.image);

  return (
    <SurfaceCard system={system}>
      <div className={cn("grid gap-4", hasImage ? "lg:grid-cols-[1.1fr_0.9fr]" : "grid-cols-1")}>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">{hero.eyebrow}</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">{hero.title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">{hero.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {hero.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
        {hero.image ? (
          <div className="overflow-hidden rounded-[20px] border border-white/10 bg-black/20">
            <Image
              src={hero.image}
              alt={hero.imageAlt ?? hero.title}
              width={900}
              height={640}
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}
      </div>
    </SurfaceCard>
  );
}

export function DemoContent({
  system,
  activeView,
  activeModuleId,
  teaser,
}: DemoContentProps) {
  const theme = system.systemTheme;
  const themeClasses = getThemeClasses(theme);
  const [toastItems, setToastItems] = useState<ToastMessage[]>([]);
  const [search, setSearch] = useState("");
  const [sortAscending, setSortAscending] = useState(true);
  const [moduleRows, setModuleRows] = useState<Record<string, DemoModule["rows"]>>(
    () => Object.fromEntries(system.modules.map((module) => [module.id, module.rows])),
  );

  const activeModule = useMemo(
    () => system.modules.find((module) => module.id === activeModuleId) ?? system.modules[0],
    [activeModuleId, system.modules],
  );

  const pushToast = (title: string, description: string) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    setToastItems((current) => [...current, { id, title, description }]);
    window.setTimeout(() => {
      setToastItems((current) => current.filter((item) => item.id !== id));
    }, 2800);
  };

  const updateRowStatus = (moduleId: string, rowId: string) => {
    if (teaser) {
      pushToast("Coming soon", "Automation preview stays locked.");
      return;
    }

    setModuleRows((current) => {
      const rows = current[moduleId] ?? [];
      const nextRows = rows.map((row) =>
        row.id === rowId
          ? {
              ...row,
              status: (
                row.status === "Active"
                  ? "Pending"
                  : row.status === "Pending"
                    ? "Completed"
                    : "Active"
              ) as DemoStatus,
            }
          : row,
      );
      return { ...current, [moduleId]: nextRows };
    });
    pushToast("Optimistic update", "Status changed instantly and synced in the background.");
  };

  const handleAction = (action: DemoSystemConfig["quickActions"][number]) => {
    if (teaser) {
      pushToast("Coming soon", `${action.label} is disabled in the automation teaser.`);
      return;
    }

    pushToast(action.label, action.detail);
  };

  const filteredRows = useMemo(() => {
    const rows = moduleRows[activeModule.id] ?? activeModule.rows;
    const value = search.trim().toLowerCase();
    const sorted = [...rows].sort((a, b) => {
      const aValue = String(Object.values(a.cells)[0] ?? "").toLowerCase();
      const bValue = String(Object.values(b.cells)[0] ?? "").toLowerCase();
      return sortAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    });

    if (!value) {
      return sorted;
    }

    return sorted.filter((row) =>
      Object.values(row.cells).some((cell) => String(cell).toLowerCase().includes(value)),
    );
  }, [activeModule.id, activeModule.rows, moduleRows, search, sortAscending]);

  return (
    <div className={cn("relative flex h-full flex-1 flex-col overflow-hidden border", themeClasses.shellRadius, themeClasses.border, themeClasses.contentBackground)}>
      <ToastStack items={toastItems} />

      <div className={cn("relative flex min-h-0 flex-1 flex-col", themeClasses.density)}>
        {activeView === "dashboard" ? (
          <DashboardView
            system={system}
            feedItems={system.activity}
            teaser={teaser}
            onAction={handleAction}
          />
        ) : activeView === "module" ? (
          <ModuleView
            system={system}
            module={activeModule}
            rows={filteredRows}
            search={search}
            onSearch={setSearch}
            sortAscending={sortAscending}
            onToggleSort={() => setSortAscending((current) => !current)}
            onRowAction={(row) => updateRowStatus(activeModule.id, row.id)}
            teaser={teaser}
          />
        ) : activeView === "reports" ? (
          <ReportsView system={system} teaser={teaser} onAction={handleAction} />
        ) : (
          <SettingsView system={system} teaser={teaser} onAction={handleAction} />
        )}

        {system.teaser ? (
          <div className={cn("pointer-events-none absolute inset-0 bg-slate-950/30 backdrop-blur-[4px]", themeClasses.shellRadius)} />
        ) : null}

        {system.teaser ? (
          <div className={cn("absolute inset-0 flex items-center justify-center border border-lime-300/20 bg-slate-950/30", themeClasses.shellRadius)}>
            <div className={cn("max-w-md border border-white/12 bg-slate-950/82 p-8 text-center", themeClasses.panelRadius)}>
              <div className={cn("mx-auto flex h-14 w-14 items-center justify-center border border-white/10 bg-white/5 text-xs font-bold tracking-[0.28em] text-white", themeClasses.compactRadius)}>
                LOCK
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.4em] text-lime-300">Coming Soon</p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">Automation preview is locked</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                The interface stays visible so the teaser feels alive, but interactive actions are intentionally restricted for now.
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function DashboardView({
  system,
  feedItems,
  onAction,
  teaser,
}: {
  system: DemoSystemConfig;
  feedItems: DemoSystemConfig["activity"];
  onAction: (action: DemoSystemConfig["quickActions"][number]) => void;
  teaser?: boolean;
}) {
  const theme = system.systemTheme;
  const previewRows = system.modules[0]?.rows.slice(0, 3) ?? [];

  const statsBlock = (
    <div className={cn("grid gap-3", theme.layoutVariant === "workflow" ? "grid-cols-1" : "sm:grid-cols-3")}>
      {system.stats.map((stat) => (
        <SurfaceCard key={stat.label} system={system} className="h-full">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
            <span className={cn("h-2.5 w-2.5 rounded-full", toneDot(stat.tone))} />
          </div>
          <p className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white">{stat.value}</p>
          <p className="mt-2 text-sm text-slate-400">{stat.delta}</p>
        </SurfaceCard>
      ))}
    </div>
  );

  const queueCard = (
    <SurfaceCard system={system}>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">Focus queue</p>
      <div className="mt-4 space-y-3">
        {previewRows.map((row) => (
          <div key={row.id} className="flex items-center justify-between border-b border-white/6 pb-3 last:border-b-0 last:pb-0">
            <div>
              <p className="text-sm font-medium text-white">{String(Object.values(row.cells)[0])}</p>
              <p className="mt-1 text-xs text-slate-400">{String(Object.values(row.cells)[1] ?? "")}</p>
            </div>
            <StatusBadge status={row.status} />
          </div>
        ))}
      </div>
    </SurfaceCard>
  );

  const commercePipeline = (
    <SurfaceCard system={system}>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">Pipeline snapshot</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {previewRows.map((row) => (
          <div key={row.id} className="rounded-[16px] border border-white/8 bg-black/20 p-3">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{String(Object.values(row.cells)[0])}</p>
            <p className="mt-2 text-lg font-semibold text-white">{String(Object.values(row.cells)[1] ?? "")}</p>
            <p className="mt-2"><StatusBadge status={row.status} /></p>
          </div>
        ))}
      </div>
    </SurfaceCard>
  );

  const inventoryGrid = (
    <div className="grid gap-3 sm:grid-cols-3">
      {previewRows.map((row) => (
        <SurfaceCard key={row.id} system={system}>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{String(Object.values(row.cells)[0])}</p>
          <p className="mt-3 text-xl font-semibold text-white">{String(Object.values(row.cells)[1] ?? "")}</p>
          <p className="mt-2 text-sm text-slate-400">{String(Object.values(row.cells)[2] ?? "")}</p>
          <p className="mt-3"><StatusBadge status={row.status} /></p>
        </SurfaceCard>
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        "grid min-h-0 flex-1 gap-3",
        theme.layoutVariant === "workflow"
          ? "lg:grid-cols-[0.9fr_1.1fr]"
          : theme.layoutVariant === "inventory"
            ? "lg:grid-cols-[1.05fr_0.95fr]"
            : "lg:grid-cols-[1.15fr_0.85fr]",
      )}
    >
      <div className="flex min-h-0 flex-col gap-4">
        <HeroPanel system={system} />
        {statsBlock}
        {theme.layoutVariant === "analytics" && <SparkChart {...system.chart} />}
        {theme.layoutVariant === "workflow" && queueCard}
        {(theme.layoutVariant === "commerce" || theme.layoutVariant === "pipeline") && commercePipeline}
        {theme.layoutVariant === "inventory" && inventoryGrid}
        {theme.layoutVariant === "engagement" && (
          <SurfaceCard system={system}>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">Engagement loops</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {system.quickActions.map((action) => (
                <div key={action.id} className="rounded-[16px] border border-white/8 bg-black/20 p-3">
                  <p className="text-sm font-medium text-white">{action.label}</p>
                  <p className="mt-2 text-xs text-slate-400">{action.detail}</p>
                </div>
              ))}
            </div>
          </SurfaceCard>
        )}
        <QuickActions system={system} actions={system.quickActions} onAction={onAction} teaser={teaser} />
      </div>

      <div className="flex min-h-0 flex-col gap-4">
        {theme.layoutVariant !== "analytics" && <SparkChart {...system.chart} />}
        <ActivityFeed system={system} items={feedItems} />
      </div>
    </div>
  );
}

function ModuleView({
  system,
  module,
  rows,
  search,
  onSearch,
  sortAscending,
  onToggleSort,
  onRowAction,
  teaser,
}: {
  system: DemoSystemConfig;
  module: DemoModule;
  rows: DemoModule["rows"];
  search: string;
  onSearch: (value: string) => void;
  sortAscending: boolean;
  onToggleSort: () => void;
  onRowAction: (row: DemoModule["rows"][number]) => void;
  teaser?: boolean;
}) {
  const theme = system.systemTheme;

  return (
    <div
      className={cn(
        "grid min-h-0 flex-1 gap-3",
        theme.layoutVariant === "workflow" ? "lg:grid-cols-[0.74fr_1.26fr]" : "grid-cols-1",
      )}
    >
      <SurfaceCard system={system}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">{system.name}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-white">{module.label}</h3>
            <p className="mt-2 text-sm text-slate-400">{module.summary}</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              value={search}
              onChange={(event) => onSearch(event.target.value)}
              placeholder={system.searchPlaceholder}
              className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40"
            />
            <button
              type="button"
              onClick={onToggleSort}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-white/20 hover:bg-white/10"
            >
              Sort {sortAscending ? "A-Z" : "Z-A"}
            </button>
          </div>
        </div>
      </SurfaceCard>

      {theme.layoutVariant === "workflow" ? (
        <SurfaceCard system={system} className="h-fit">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">Workflow focus</p>
          <div className="mt-4 space-y-3">
            {rows.slice(0, 4).map((row) => (
              <div key={row.id} className="border-b border-white/8 pb-3 last:border-b-0 last:pb-0">
                <p className="text-sm font-medium text-white">{String(Object.values(row.cells)[0])}</p>
                <p className="mt-1 text-xs text-slate-400">{String(Object.values(row.cells)[1] ?? "")}</p>
                <p className="mt-3"><StatusBadge status={row.status} /></p>
              </div>
            ))}
          </div>
        </SurfaceCard>
      ) : null}

      <div className={cn(theme.layoutVariant === "workflow" ? "min-h-0" : "min-h-0 flex-1")}>
        <SurfaceCard system={system} className="min-h-0 h-full overflow-auto p-0">
          <table className="min-w-full border-separate border-spacing-0">
            <thead className="sticky top-0 bg-slate-950/92">
              <tr>
                {module.columns.map((column) => (
                  <th
                    key={column.key}
                    className="border-b border-white/10 px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400"
                  >
                    {column.label}
                  </th>
                ))}
                <th className="border-b border-white/10 px-5 py-4 text-right text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-white/8 transition">
                  {module.columns.map((column) => (
                    <td key={column.key} className="border-b border-white/8 px-5 py-4 text-sm text-slate-200">
                      {column.key === "status" ? (
                        <StatusBadge status={row.status} />
                      ) : (
                        row.cells[column.key] ?? "—"
                      )}
                    </td>
                  ))}
                  <td className="border-b border-white/8 px-5 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => onRowAction(row)}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white transition duration-150 hover:border-white/20 hover:bg-white/10"
                    >
                      {row.actionLabel ?? "Open"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </SurfaceCard>
      </div>
    </div>
  );
}

function ReportsView({
  system,
  teaser,
  onAction,
}: {
  system: DemoSystemConfig;
  teaser?: boolean;
  onAction: (action: DemoSystemConfig["quickActions"][number]) => void;
}) {
  const theme = system.systemTheme;

  return (
    <div
      className={cn(
        "grid min-h-0 flex-1 gap-3",
        theme.layoutVariant === "inventory" ? "lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-[0.95fr_1.05fr]",
      )}
    >
      <div className="grid gap-4">
        {system.reports.map((report) => (
          <ReportCard key={report.label} system={system} report={report} />
        ))}
        <QuickActions system={system} actions={system.quickActions} onAction={onAction} teaser={teaser} />
      </div>
      <SparkChart {...system.chart} />
    </div>
  );
}

function ReportCard({ system, report }: { system: DemoSystemConfig; report: DemoReport }) {
  return (
    <SurfaceCard system={system}>
      <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{report.label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">{report.value}</p>
      <p className="mt-2 text-sm text-slate-400">{report.detail}</p>
    </SurfaceCard>
  );
}

function SettingsView({
  system,
  teaser,
  onAction,
}: {
  system: DemoSystemConfig;
  teaser?: boolean;
  onAction: (action: DemoSystemConfig["quickActions"][number]) => void;
}) {
  const theme = system.systemTheme;

  return (
    <div
      className={cn(
        "grid min-h-0 flex-1 gap-3",
        theme.layoutVariant === "engagement" ? "lg:grid-cols-[0.9fr_1.1fr]" : "lg:grid-cols-[1fr_1fr]",
      )}
    >
      <SurfaceCard system={system}>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">Settings</p>
        <div className="mt-5 space-y-3">
          {system.settings.map((item) => (
            <div key={item.label} className="flex items-center justify-between rounded-[18px] border border-white/8 bg-slate-950/70 px-4 py-3">
              <div>
                <p className="text-sm font-medium text-white">{item.label}</p>
                <p className="text-xs text-slate-400">{item.detail}</p>
              </div>
              <span className={cn("h-3 w-3 rounded-full", item.enabled ? "bg-emerald-400" : "bg-slate-500")} />
            </div>
          ))}
        </div>
      </SurfaceCard>
      <div className="space-y-4">
        <SurfaceCard system={system}>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">System snapshot</p>
          <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">{system.name}</p>
          <p className="mt-2 text-sm leading-7 text-slate-400">{system.subtitle}</p>
          <button
            type="button"
            onClick={() => onAction(system.quickActions[0])}
            className="mt-5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white transition duration-150 hover:border-white/20 hover:bg-white/10"
          >
            {teaser ? "Preview locked" : "Run action"}
          </button>
        </SurfaceCard>
        <SparkChart {...system.chart} />
      </div>
    </div>
  );
}

