"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";

export default function HeroVisuals() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center lg:h-[600px]">
      {/* Neon Light Trails */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <svg className="absolute h-[150%] w-[150%] animate-[spin_20s_linear_infinite] opacity-50" viewBox="0 0 800 800">
          <defs>
            <linearGradient id="neon-glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
            <filter id="blur-filter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="12" />
            </filter>
          </defs>
          <ellipse cx="400" cy="400" rx="300" ry="120" fill="none" stroke="url(#neon-glow)" strokeWidth="4" filter="url(#blur-filter)" transform="rotate(-15 400 400)" />
          <ellipse cx="400" cy="400" rx="300" ry="120" fill="none" stroke="url(#neon-glow)" strokeWidth="2" transform="rotate(-15 400 400)" />
        </svg>
      </div>

      {/* Floating Cards */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-10 z-20"
      >
        <GlassCard className="flex items-center gap-3 px-4 py-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
            👥
          </div>
          <div>
            <p className="text-xs text-slate-400">Users</p>
            <p className="text-sm font-bold text-white">1,420 <span className="text-xs text-emerald-400">+12%</span></p>
          </div>
        </GlassCard>
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-20 z-20"
      >
        <GlassCard className="px-4 py-3">
          <p className="text-xs text-slate-400">Analytics</p>
          <p className="text-lg font-bold text-emerald-400">+24.8%</p>
          <div className="mt-2 flex h-8 items-end gap-1">
            {[40, 70, 45, 90, 65, 100].map((h, i) => (
              <div key={i} className="w-2 rounded-t-sm bg-emerald-400/80" style={{ height: `${h}%` }} />
            ))}
          </div>
        </GlassCard>
      </motion.div>

      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-4 z-20"
      >
        <GlassCard className="px-4 py-3">
          <p className="text-xs text-slate-400">Tasks</p>
          <p className="text-sm font-bold text-white">12 <span className="text-xs font-normal text-slate-300">In Progress</span></p>
          <div className="mt-2 h-1.5 w-24 rounded-full bg-slate-800">
            <div className="h-full w-2/3 rounded-full bg-purple-500" />
          </div>
        </GlassCard>
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 z-20"
      >
        <GlassCard className="flex items-center gap-3 px-4 py-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
            ✓
          </div>
          <div>
            <p className="text-xs text-slate-400">System Status</p>
            <p className="text-xs font-medium text-white">All Systems Operational</p>
          </div>
        </GlassCard>
      </motion.div>

      {/* 2.5D Laptop Mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateX: 10, rotateY: -10 }}
        animate={{ opacity: 1, scale: 1, rotateX: 5, rotateY: -5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[600px] perspective-[1000px]"
      >
        {/* Laptop Screen */}
        <div className="relative mx-auto aspect-[16/10] w-[90%] rounded-t-2xl border-4 border-slate-800 bg-slate-950 shadow-2xl overflow-hidden">
          {/* Dashboard UI */}
          <div className="flex h-full w-full flex-col bg-[#0a0f1c]">
            {/* Header */}
            <div className="flex h-8 items-center justify-between border-b border-white/5 px-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-blue-500" />
                <div className="h-2 w-16 rounded bg-white/20" />
              </div>
              <div className="flex gap-1.5">
                <div className="h-2 w-2 rounded-full bg-white/10" />
                <div className="h-2 w-2 rounded-full bg-white/10" />
                <div className="h-2 w-2 rounded-full bg-white/10" />
              </div>
            </div>
            {/* Body */}
            <div className="flex flex-1">
              {/* Sidebar */}
              <div className="w-16 border-r border-white/5 p-2 flex flex-col gap-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`h-4 w-full rounded ${i === 0 ? 'bg-blue-500/20' : 'bg-white/5'}`} />
                ))}
              </div>
              {/* Main Content */}
              <div className="flex-1 p-4 flex flex-col gap-4">
                <div className="h-4 w-32 rounded bg-white/20" />
                {/* Chart Area */}
                <div className="flex-1 rounded-lg border border-white/5 bg-white/5 p-3 relative overflow-hidden">
                  <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0,80 Q20,20 40,60 T80,30 T100,50 L100,100 L0,100 Z" fill="rgba(56,189,248,0.1)" />
                    <path d="M0,80 Q20,20 40,60 T80,30 T100,50" fill="none" stroke="#38bdf8" strokeWidth="2" />
                  </svg>
                </div>
                {/* Stats Row */}
                <div className="flex gap-3 h-12">
                  <div className="flex-1 rounded bg-white/5 p-2">
                    <div className="h-2 w-10 rounded bg-white/20 mb-1" />
                    <div className="h-3 w-16 rounded bg-white/40" />
                  </div>
                  <div className="flex-1 rounded bg-white/5 p-2">
                    <div className="h-2 w-10 rounded bg-white/20 mb-1" />
                    <div className="h-3 w-16 rounded bg-white/40" />
                  </div>
                  <div className="flex-1 rounded bg-white/5 p-2">
                    <div className="h-2 w-10 rounded bg-white/20 mb-1" />
                    <div className="h-3 w-16 rounded bg-white/40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Screen Glare */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none" />
        </div>
        
        {/* Laptop Base */}
        <div className="relative mx-auto h-4 w-[100%] rounded-b-xl bg-slate-800 shadow-xl">
          <div className="absolute inset-x-0 top-0 h-1 bg-slate-700" />
          <div className="absolute left-1/2 top-0 h-1 w-24 -translate-x-1/2 rounded-b bg-slate-900" />
        </div>
        {/* Glowing Base Platform */}
        <div className="absolute -bottom-8 left-1/2 h-16 w-[110%] -translate-x-1/2 rounded-[100%] bg-blue-500/20 blur-2xl" />
      </motion.div>
    </div>
  );
}
