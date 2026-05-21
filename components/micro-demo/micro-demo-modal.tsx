"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Suspense, useEffect, useState } from "react";

import type { ProjectType } from "@/lib/demo-config";
import { getLiveDemoSystem } from "@/lib/live-demo-systems";

const RetailMicroDemo = dynamic(() => import("./systems/retail-micro-demo"), { ssr: false });
const HealthcareMicroDemo = dynamic(() => import("./systems/healthcare-micro-demo"), { ssr: false });
const EducationMicroDemo = dynamic(() => import("./systems/education-micro-demo"), { ssr: false });
const GrowthMicroDemo = dynamic(() => import("./systems/growth-micro-demo"), { ssr: false });

type Props = {
  isOpen: boolean;
  systemId: ProjectType;
  onClose: () => void;
};

const ICON_ACCENT: Record<string, string> = {
  "supermarket-system": "border-blue-500/20 bg-blue-500/10 text-blue-400",
  "hospital-system":    "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  "school-system":      "border-violet-500/20 bg-violet-500/10 text-violet-400",
  "business-website":   "border-orange-500/20 bg-orange-500/10 text-orange-400",
};

function RowSkeleton() {
  return (
    <div className="space-y-3 px-8 py-6">
      {[0, 1, 2].map((i) => (
        <div key={i} className="h-9 w-full animate-pulse rounded-xl bg-white/6" />
      ))}
    </div>
  );
}

function SystemContent({ systemId }: { systemId: ProjectType }) {
  switch (systemId) {
    case "supermarket-system": return <RetailMicroDemo />;
    case "hospital-system":    return <HealthcareMicroDemo />;
    case "school-system":      return <EducationMicroDemo />;
    case "business-website":   return <GrowthMicroDemo />;
    default:                   return <RetailMicroDemo />;
  }
}

export function MicroDemoModal({ isOpen, systemId, onClose }: Props) {
  const system = getLiveDemoSystem(systemId);
  const Icon = system.icon;
  const iconAccent = ICON_ACCENT[systemId] ?? "border-white/10 bg-white/6 text-slate-400";

  // Resolved after mount so hydration is stable
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [isOpen]);

  const panelVariants = isDesktop
    ? { initial: { x: "100%" }, animate: { x: 0 }, exit: { x: "100%" } }
    : { initial: { y: "100%" }, animate: { y: 0 },  exit: { y: "100%" } };

  const panelClass = isDesktop
    ? "absolute top-0 right-0 bottom-0 w-[45vw] min-w-[380px] overflow-y-auto border-l border-white/10 bg-slate-950 shadow-[-32px_0_80px_rgba(0,0,0,0.55)]"
    : "absolute inset-0 overflow-y-auto bg-slate-950";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="micro-demo-root"
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16 }}
        >
          {/* Backdrop — clicking outside closes */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className={panelClass}
            initial={panelVariants.initial}
            animate={panelVariants.animate}
            exit={panelVariants.exit}
            transition={{ type: "spring", damping: 32, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drag handle — mobile only */}
            <div className="flex justify-center pt-3 md:hidden">
              <div className="h-1 w-10 rounded-full bg-white/20" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-8 pb-5 pt-6 md:pt-8">
              <div className="flex items-center gap-4">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border ${iconAccent}`}>
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h2 className="text-xl font-semibold tracking-tight text-white">
                  {system.cardTitle}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition-colors duration-[120ms] hover:bg-white/8 hover:text-white"
              >
                <X className="h-4 w-4" strokeWidth={1.8} />
              </button>
            </div>

            <div className="border-t border-white/8" />

            {/* Per-system content — keyed so state resets when systemId changes */}
            <Suspense fallback={<RowSkeleton />}>
              <SystemContent key={systemId} systemId={systemId} />
            </Suspense>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
