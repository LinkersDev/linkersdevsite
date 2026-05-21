"use client";

import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import type { ProjectType } from "@/lib/demo-config";
import { liveDemoSystems } from "@/lib/live-demo-systems";
import { ProductCard } from "@/components/system-selector/product-card";
import { CARD_ORDER, SYSTEM_THEME, type SystemTheme } from "@/components/system-selector/config";

const HealthcarePreview = dynamic(
  () => import("@/components/system-selector/systems/healthcare-preview"),
  { ssr: false },
);
const EducationPreview = dynamic(
  () => import("@/components/system-selector/systems/education-preview"),
  { ssr: false },
);
const RetailPreview = dynamic(
  () => import("@/components/system-selector/systems/retail-preview"),
  { ssr: false },
);
const GrowthPreview = dynamic(
  () => import("@/components/system-selector/systems/growth-preview"),
  { ssr: false },
);

const PREVIEW_COMPONENTS: Record<string, React.ComponentType> = {
  "hospital-system":    HealthcarePreview,
  "school-system":      EducationPreview,
  "supermarket-system": RetailPreview,
  "business-website":   GrowthPreview,
};

type Props = {
  selectedType: ProjectType;
  onSelectType: (type: ProjectType) => void;
};

// ─── Thumbnails ───────────────────────────────────────────────────────────────

function MiniTopbar({ theme }: { theme: SystemTheme }) {
  return (
    <div className="flex h-5 items-center gap-1.5 rounded-md px-2" style={{ background: theme.accentMuted }}>
      <div className="h-1.5 w-1.5 rounded-full" style={{ background: theme.accentHex }} />
      <div className="h-1 w-14 rounded-full bg-white/15" />
      <div className="ml-auto h-1 w-6 rounded-full bg-white/10" />
    </div>
  );
}

function HealthcareThumbnail({ theme }: { theme: SystemTheme }) {
  return (
    <div className="relative h-[72px] overflow-hidden p-2.5">
      <div className="absolute inset-0" style={{ background: theme.atmosphere, opacity: 0.8 }} />
      <div className="relative space-y-1.5">
        <MiniTopbar theme={theme} />
        {(["Checked in", "Waiting", "Upcoming"] as const).map((s, i) => (
          <div key={s} className="flex items-center gap-1.5">
            <div className="h-3 w-3 shrink-0 rounded" style={{ background: i === 0 ? "rgba(16,185,129,0.25)" : i === 1 ? "rgba(245,158,11,0.2)" : "rgba(255,255,255,0.06)" }} />
            <div className="h-1 rounded-full bg-white/10" style={{ width: `${58 - i * 8}%` }} />
            <div className="ml-auto h-2 w-12 rounded" style={{ background: i === 0 ? "rgba(16,185,129,0.2)" : i === 1 ? "rgba(245,158,11,0.15)" : "rgba(255,255,255,0.05)" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function EducationThumbnail({ theme }: { theme: SystemTheme }) {
  return (
    <div className="relative h-[72px] overflow-hidden p-2.5">
      <div className="absolute inset-0" style={{ background: theme.atmosphere, opacity: 0.8 }} />
      <div className="relative space-y-1.5">
        <MiniTopbar theme={theme} />
        <div className="grid grid-cols-4 gap-1">
          {["P","P","A","P","P","L","P","P"].map((s, i) => (
            <div key={i} className="flex h-5 items-center justify-center rounded text-[8px] font-bold" style={{
              background: s === "P" ? "rgba(139,92,246,0.2)" : s === "A" ? "rgba(255,255,255,0.05)" : "rgba(245,158,11,0.15)",
              color: s === "P" ? "#8b5cf6" : s === "A" ? "#64748b" : "#f59e0b",
            }}>
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RetailThumbnail({ theme }: { theme: SystemTheme }) {
  const bars = [{ w: 25, c: "#f59e0b" }, { w: 15, c: "#ef4444" }, { w: 60, c: "#10b981" }];
  return (
    <div className="relative h-[72px] overflow-hidden p-2.5">
      <div className="absolute inset-0" style={{ background: theme.atmosphere, opacity: 0.8 }} />
      <div className="relative space-y-1.5">
        <MiniTopbar theme={theme} />
        {bars.map((bar, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="h-3 w-3 shrink-0 rounded" style={{ background: theme.accentMuted }} />
            <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-white/8">
              <div className="absolute inset-y-0 left-0 rounded-full opacity-70" style={{ width: `${bar.w}%`, background: bar.c }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GrowthThumbnail({ theme }: { theme: SystemTheme }) {
  const stats = [{ v: "3", l: "Sites" }, { v: "154", l: "Leads" }, { v: "12", l: "Pages" }];
  return (
    <div className="relative h-[72px] overflow-hidden p-2.5">
      <div className="absolute inset-0" style={{ background: theme.atmosphere, opacity: 0.8 }} />
      <div className="relative space-y-1.5">
        <MiniTopbar theme={theme} />
        <div className="grid grid-cols-3 gap-1.5">
          {stats.map((item, i) => (
            <div key={item.l} className="rounded p-1.5" style={{ background: i < 2 ? theme.accentMuted : "rgba(255,255,255,0.04)" }}>
              <p className="text-[9px] font-bold" style={{ color: i < 2 ? theme.accentHex : "#64748b" }}>{item.v}</p>
              <p className="text-[7px] text-slate-600">{item.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const THUMBNAIL_MAP: Record<string, React.ComponentType<{ theme: SystemTheme }>> = {
  "hospital-system":    HealthcareThumbnail,
  "school-system":      EducationThumbnail,
  "supermarket-system": RetailThumbnail,
  "business-website":   GrowthThumbnail,
};

// ─── Skeleton ─────────────────────────────────────────────────────────────────

function PreviewSkeleton() {
  return (
    <div className="min-h-[520px] space-y-3 p-6">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="h-12 w-full animate-pulse rounded-xl bg-white/[0.04]" />
      ))}
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function SystemSelectorSection({ selectedType, onSelectType }: Props) {
  const [phase, setPhase] = useState<"grid" | "expanded">("grid");
  const [expandedType, setExpandedType] = useState<ProjectType>(selectedType);
  const [mountedSystems, setMountedSystems] = useState<Set<ProjectType>>(() => new Set<ProjectType>());

  useEffect(() => {
    if (typeof window === "undefined") return;
    let idleHandle: number | undefined;
    let timeoutHandle: ReturnType<typeof setTimeout> | undefined;

    const schedulePreload = () => {
      void import("@/components/system-selector/systems/healthcare-preview");
      void import("@/components/system-selector/systems/education-preview");
      void import("@/components/system-selector/systems/retail-preview");
      void import("@/components/system-selector/systems/growth-preview");
      setMountedSystems(new Set<ProjectType>(CARD_ORDER));
    };

    if ("requestIdleCallback" in window) {
      idleHandle = window.requestIdleCallback(schedulePreload);
    } else {
      timeoutHandle = setTimeout(schedulePreload, 300);
    }

    return () => {
      if (idleHandle !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle !== undefined) clearTimeout(timeoutHandle);
    };
  }, []);

  function handleSelectSystem(id: ProjectType) {
    onSelectType(id);
    setExpandedType(id);
    setMountedSystems((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    setPhase("expanded");
  }

  const orderedSystems = CARD_ORDER
    .map((id) => liveDemoSystems.find((s) => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const activeTheme = SYSTEM_THEME[expandedType] ?? SYSTEM_THEME["hospital-system"];

  return (
    <section id="system-selector" className="isolate px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1320px]">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <span className="inline-flex items-center rounded-full bg-white/[0.05] px-3 py-1 text-xs font-medium text-slate-400 ring-1 ring-white/[0.08]">
            All-in-One Business OS
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Choose your{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              system
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Each system is a completely different digital environment, built for a specific industry.
          </p>
        </motion.div>

        {/* Phase container */}
        <AnimatePresence mode="wait">
          {phase === "grid" ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {orderedSystems.map((system) => {
                const theme = SYSTEM_THEME[system.id] ?? SYSTEM_THEME["hospital-system"];
                const ThumbnailComp = THUMBNAIL_MAP[system.id];
                return (
                  <ProductCard
                    key={system.id}
                    icon={system.icon}
                    title={system.cardTitle}
                    tagline={theme.tagline}
                    theme={theme}
                    isActive={selectedType === system.id}
                    onClick={() => handleSelectSystem(system.id)}
                    thumbnail={ThumbnailComp ? <ThumbnailComp theme={theme} /> : null}
                  />
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              {/* Back button + active system badge */}
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setPhase("grid")}
                  className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm text-slate-400 transition-colors hover:border-white/[0.14] hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                  All systems
                </button>
                <span
                  className={`rounded-xl px-3 py-2 text-sm font-medium ${activeTheme.accentText}`}
                  style={{ background: activeTheme.accentMuted }}
                >
                  {liveDemoSystems.find((s) => s.id === expandedType)?.cardTitle}
                </span>
                <span className={`text-xs opacity-50 ${activeTheme.accentText}`}>
                  {activeTheme.tagline}
                </span>
              </div>

              {/* Preview container — all mounted systems, CSS show/hide */}
              <div className="relative overflow-hidden rounded-3xl border border-white/[0.08]" style={{ minHeight: 520 }}>
                {CARD_ORDER.map((id) => {
                  const Preview = PREVIEW_COMPONENTS[id];
                  const isActive = id === expandedType;
                  return (
                    <div
                      key={id}
                      aria-hidden={!isActive}
                      className={isActive
                        ? "relative z-10 transition-opacity duration-[120ms]"
                        : "pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-[120ms]"
                      }
                    >
                      {mountedSystems.has(id) && Preview && (
                        <Suspense fallback={<PreviewSkeleton />}>
                          <Preview />
                        </Suspense>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* System switcher pills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {orderedSystems.map((system) => {
                  const theme = SYSTEM_THEME[system.id] ?? SYSTEM_THEME["hospital-system"];
                  const isActive = system.id === expandedType;
                  return (
                    <button
                      key={system.id}
                      type="button"
                      onClick={() => handleSelectSystem(system.id)}
                      className={`rounded-xl border px-4 py-2 text-xs font-medium transition-all duration-150 ${
                        isActive
                          ? `${theme.accentBorder} ${theme.accentText}`
                          : "border-white/[0.06] text-slate-500 hover:border-white/[0.12] hover:text-slate-300"
                      }`}
                      style={isActive ? { background: theme.accentMuted } : undefined}
                    >
                      {system.cardTitle}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
