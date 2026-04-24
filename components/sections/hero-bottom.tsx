"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";

const categories = [
  { label: "School System", icon: "🎓", color: "from-blue-400 to-cyan-400" },
  { label: "Clinic System", icon: "🏥", color: "from-purple-400 to-pink-400" },
  { label: "Website System", icon: "🌐", color: "from-blue-400 to-indigo-400" },
  { label: "Mobile App", icon: "📱", color: "from-indigo-400 to-purple-400" },
  { label: "Automation System", icon: "⚙️", color: "from-purple-400 to-blue-400" },
];

export function HeroBottom() {
  return (
    <section className="relative z-20 -mt-10 px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <GlassCard className="flex flex-wrap items-center justify-between gap-4 p-6 sm:flex-nowrap sm:gap-8">
          {categories.map((category, index) => (
            <motion.a
              key={category.label}
              href="#systems"
              whileHover={{ y: -5, scale: 1.05 }}
              className="group flex flex-1 flex-col items-center justify-center gap-3 rounded-2xl p-4 transition-colors hover:bg-white/5"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${category.color} bg-opacity-10 shadow-lg transition-shadow group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]`}>
                <span className="text-2xl">{category.icon}</span>
              </div>
              <span className="text-center text-sm font-medium text-slate-300 group-hover:text-white">
                {category.label}
              </span>
            </motion.a>
          ))}
        </GlassCard>
      </div>
    </section>
  );
}
