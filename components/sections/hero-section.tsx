"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import HeroVisuals from "@/components/3d/hero-visuals";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-18 pt-14 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-6 mx-auto h-[620px] max-w-6xl rounded-full bg-[radial-gradient(circle,rgba(40,120,255,0.24),transparent_58%)] blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300"
          >
            Systems store
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            className="max-w-4xl text-5xl font-semibold tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl"
          >
            LinkersDev
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36 }}
            className="mt-5 max-w-xl text-lg leading-8 text-slate-300 sm:text-2xl"
          >
            We turn ideas into real scalable digital products
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="#system-selector">
              Start Building
            </Button>
            <Button href="#system-selector" variant="secondary">
              View Systems
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {[
              { label: "Fast Launch", icon: "🚀" },
              { label: "Scalable", icon: "📈" },
              { label: "Secure", icon: "🔒" },
              { label: "Future Ready", icon: "✨" }
            ].map((feature) => (
              <div key={feature.label} className="flex items-center gap-2">
                <span className="text-sm">{feature.icon}</span>
                <p className="text-sm font-medium text-slate-300">{feature.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.28 }}
          className="relative min-h-[500px]"
        >
          <HeroVisuals />
        </motion.div>
      </div>
    </section>
  );
}
