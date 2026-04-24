"use client";

import { getThemeClasses } from "@/lib/demo/theme";
import type { DemoModule, DemoSystemConfig, DemoView } from "@/lib/demo/types";
import { cn } from "@/lib/utils";

type DemoSidebarProps = {
  system: DemoSystemConfig;
  activeView: DemoView;
  activeModuleId: string;
  onSelectView: (view: DemoView) => void;
  onSelectModule: (module: DemoModule) => void;
  teaser?: boolean;
};

const sidebarGroups: Array<{ id: DemoView; label: string; hint: string }> = [
  { id: "dashboard", label: "Dashboard", hint: "Overview" },
  { id: "reports", label: "Reports", hint: "Insights" },
  { id: "settings", label: "Settings", hint: "Preferences" },
];

export function DemoSidebar({
  system,
  activeView,
  activeModuleId,
  onSelectView,
  onSelectModule,
  teaser,
}: DemoSidebarProps) {
  const theme = system.systemTheme;
  const themeClasses = getThemeClasses(theme);
  const isCompactSidebar = theme.sidebarStyle === "compact" || theme.sidebarStyle === "technical";
  const navPadding = theme.density === "dense" ? "px-3 py-2.5" : "px-4 py-3";
  const visibleModules = system.modules.slice(0, 3);

  return (
    <aside className={cn("flex h-full flex-col border-r border-white/8 p-3", themeClasses.sidebarWidth, themeClasses.sidebarSurface)}>
      <div className={cn(themeClasses.panelRadius, "border border-white/8 p-4", themeClasses.surface, themeClasses.shadow)}>
        <p className={cn(themeClasses.sectionEyebrow, "text-slate-300")}>{system.sidebarEyebrow}</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-current" style={{ color: theme.primaryColor }} />
          <p className={cn("text-sm text-white", themeClasses.title)}>{system.name}</p>
        </div>
        <p className={cn("mt-2 text-xs leading-5", themeClasses.subtleText)}>{system.subtitle}</p>
      </div>

      <div className="mt-4 space-y-2">
        {sidebarGroups.map((group) => {
          const isActive = activeView === group.id;

          return (
            <button
              key={group.id}
              type="button"
              onClick={() => onSelectView(group.id)}
              className={cn(
                "flex w-full items-center justify-between border text-left transition duration-150",
                themeClasses.compactRadius,
                navPadding,
                isActive
                  ? `${themeClasses.activeChip} ${themeClasses.shadow}`
                  : "border-white/8 bg-white/[0.02] hover:border-white/14 hover:bg-white/[0.05]",
              )}
            >
              <div>
                <p className={cn(isCompactSidebar ? "text-[13px]" : "text-sm", "font-medium text-white", theme.typographyScale === "technical" ? "font-mono" : "")}>
                  {group.label}
                </p>
                <p className={cn("text-[11px] uppercase tracking-[0.24em]", themeClasses.subtleText)}>{group.hint}</p>
              </div>
              {isActive ? <span className="h-2.5 w-2.5 rounded-full bg-current" style={{ color: theme.primaryColor }} /> : null}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex-1 space-y-2 overflow-auto pr-1">
        <p className={cn("px-1", themeClasses.sectionEyebrow, "text-slate-500")}>{system.moduleSectionLabel}</p>
        {visibleModules.map((module) => {
          const isActive = activeView === "module" && activeModuleId === module.id;

          return (
            <button
              key={module.id}
              type="button"
              onClick={() => onSelectModule(module)}
              className={cn(
                "group flex w-full items-center justify-between border text-left transition duration-150",
                themeClasses.compactRadius,
                navPadding,
                isActive
                  ? `${themeClasses.activeChip} ${themeClasses.shadow}`
                  : "border-white/8 bg-white/[0.02] hover:border-white/14 hover:bg-white/[0.05]",
              )}
            >
              <div>
                <p className={cn(isCompactSidebar ? "text-[13px]" : "text-sm", "font-medium text-white", theme.typographyScale === "technical" ? "font-mono" : "")}>
                  {module.label}
                </p>
                <p className={cn("mt-1 text-xs leading-5", themeClasses.subtleText)}>{module.summary}</p>
              </div>
              <span
                className={cn(
                  "rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em]",
                  isActive ? "bg-white/12 text-white" : "bg-white/5 text-slate-400 group-hover:text-slate-200",
                )}
              >
                  {system.moduleBadgeLabel}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

