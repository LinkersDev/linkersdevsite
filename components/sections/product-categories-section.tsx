"use client";

import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  Mail,
  PackageCheck,
  Pill,
  ScanLine,
  School,
  Stethoscope,
  Store,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import type { ProjectType } from "@/lib/demo-config";
import { liveDemoSystems } from "@/lib/live-demo-systems";

type ProductCategoriesSectionProps = {
  selectedType: ProjectType;
  onSelectType: (type: ProjectType) => void;
  onOpenDemo: (type: ProjectType) => void;
};

const cardOrder: ProjectType[] = [
  "school-system",
  "hospital-system",
  "business-website",
  "supermarket-system",
];

const bulletIcons: Record<ProjectType, [LucideIcon, LucideIcon, LucideIcon]> = {
  "school-system": [School, GraduationCap, Building2],
  "hospital-system": [Stethoscope, Building2, Pill],
  "business-website": [TrendingUp, Mail, Building2],
  "supermarket-system": [PackageCheck, ScanLine, Store],
  "shop-system": [PackageCheck, ScanLine, Store],
  "restaurant-system": [Store, ScanLine, PackageCheck],
  "mobile-app": [TrendingUp, Mail, Building2],
  "automation-system": [TrendingUp, Building2, Mail],
};

export function ProductCategoriesSection({
  onSelectType,
  onOpenDemo,
}: ProductCategoriesSectionProps) {
  const orderedCards = cardOrder
    .map((id) => liveDemoSystems.find((card) => card.id === id))
    .filter((card): card is NonNullable<typeof card> => Boolean(card));

  return (
    <section id="systems" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10 rounded-[36px] border border-white/10 bg-slate-950/40 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.25)] sm:p-8 lg:p-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            Choose your system
          </h2>
          <p className="text-base leading-7 text-slate-300 sm:text-lg">
            Explore real product demos in seconds
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {orderedCards.map((card) => {
            const Icon = card.icon;
            const [BulletIconA, BulletIconB, BulletIconC] = bulletIcons[card.id];
            const bulletIconSet = [BulletIconA, BulletIconB, BulletIconC];

            return (
              <motion.button
                key={card.id}
                type="button"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.995 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                onClick={() => {
                  onSelectType(card.id);
                  onOpenDemo(card.id);
                }}
                className={`group flex min-h-[260px] flex-col rounded-[30px] border border-white/10 bg-slate-900/55 p-8 text-left shadow-[0_10px_30px_rgba(2,6,23,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(2,6,23,0.35)] ${card.cardAccentBorder}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${card.cardAccentBorder} ${card.cardAccentBg} ${card.cardAccentText}`}>
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                    {card.cardTitle}
                  </h3>
                </div>

                <div className="mt-8 space-y-5">
                  <ul className="space-y-2.5">
                    {card.cardBullets.map((bullet, index) => {
                      const BulletIcon = bulletIconSet[index];
                      return (
                        <li key={bullet} className="flex items-center gap-2.5 text-sm text-slate-300">
                          <BulletIcon className="h-4 w-4 text-slate-500" strokeWidth={1.8} />
                          <span>{bullet}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="mt-auto pt-8">
                  <span className="inline-flex items-center text-sm font-medium text-slate-400 transition-colors group-hover:text-white">
                    Explore live system →
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
