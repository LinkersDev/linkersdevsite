"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import logoImage from "../../logo.png";

type LoadingScreenProps = {
  isVisible: boolean;
  progress: number;
};

export function LoadingScreen({ isVisible, progress }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[90] flex items-center justify-center overflow-hidden bg-[#02050d]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(40,120,255,0.25),transparent_40%),radial-gradient(circle_at_bottom,rgba(130,70,255,0.22),transparent_35%)]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 flex w-[min(420px,85vw)] flex-col items-center gap-7 rounded-[32px] border border-white/10 bg-white/6 p-10 text-center backdrop-blur-2xl"
          >
            <motion.div
              animate={{ rotate: [0, 6, -4, 0], y: [0, -6, 0] }}
              transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="relative h-24 w-24"
            >
              <Image src={logoImage} alt="LinkersDev logo" fill className="object-contain" priority />
            </motion.div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-cyan-300">
                Loading product systems
              </p>
              <h1 className="text-3xl font-semibold tracking-[-0.05em] text-white">LinkersDev</h1>
            </div>
            <div className="w-full space-y-3">
              <div className="h-2 overflow-hidden rounded-full bg-white/8">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500"
                  animate={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-slate-400">
                <span>Preview online</span>
                <span>{progress}%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
