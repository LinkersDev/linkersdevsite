"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense } from "react";

import type { ProjectType } from "@/lib/demo-config";
import { liveDemoSystems } from "@/lib/live-demo-systems";
import { ProductCard } from "@/components/system-selector/product-card";
import { CARD_ORDER, SYSTEM_ACCENT } from "@/components/system-selector/config";

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

type Props = {
  selectedType: ProjectType;
  onSelectType: (type: ProjectType) => void;
};

function PreviewSkeleton() {
  return (
    <div className="space-y-3 p-6">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="h-10 w-full animate-pulse rounded-xl bg-white/6" />
      ))}
    </div>
  );
}

function SystemPreviewContent({ selectedType }: { selectedType: ProjectType }) {
  switch (selectedType) {
    case "hospital-system":    return <HealthcarePreview />;
    case "school-system":      return <EducationPreview />;
    case "supermarket-system": return <RetailPreview />;
    case "business-website":   return <GrowthPreview />;
    default:                   return <HealthcarePreview />;
  }
}

export function SystemSelectorSection({ selectedType, onSelectType }: Props) {
  const orderedSystems = CARD_ORDER
    .map((id) => liveDemoSystems.find((s) => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <section id="system-selector" className="isolate px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">

          {/* ── Left panel ── */}
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 ring-1 ring-emerald-500/20">
                All-in-One Business OS
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Choose your{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                  system
                </span>
              </h2>
              <p className="text-base text-slate-400">
                Everything your business needs, in one place.
              </p>
            </div>

            {/* Product selector cards */}
            <div className="space-y-3">
              {orderedSystems.map((system) => {
                const sa = SYSTEM_ACCENT[system.id] ?? SYSTEM_ACCENT["hospital-system"];
                return (
                  <ProductCard
                    key={system.id}
                    icon={system.icon}
                    title={system.cardTitle}
                    description={system.cardBullets[0]}
                    accentBg={sa.iconBg}
                    accentBorder={sa.iconBorder}
                    accentText={sa.iconText}
                    activeBorder={sa.activeBorder}
                    activeGlow={sa.activeGlow}
                    isActive={selectedType === system.id}
                    onClick={() => onSelectType(system.id)}
                  />
                );
              })}
            </div>
          </div>

          {/* ── Right panel ── */}
          <div className="overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-b from-white/[0.04] to-transparent shadow-[0_24px_64px_rgba(0,0,0,0.35)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedType}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Suspense fallback={<PreviewSkeleton />}>
                  <SystemPreviewContent selectedType={selectedType} />
                </Suspense>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
