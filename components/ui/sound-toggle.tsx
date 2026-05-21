"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type SoundToggleProps = {
  enabled: boolean;
  onToggle: () => void;
};

export function SoundToggle({ enabled, onToggle }: SoundToggleProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={onToggle}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] backdrop-blur-xl transition",
        enabled
          ? "border-cyan-300/40 bg-cyan-300/12 text-cyan-100"
          : "border-white/10 bg-white/6 text-slate-300",
      )}
    >
      <span className={cn("h-2 w-2 rounded-full", enabled ? "bg-cyan-300" : "bg-slate-500")} />
      {enabled ? "Sound On" : "Sound Off"}
    </motion.button>
  );
}
