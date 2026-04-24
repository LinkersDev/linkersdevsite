"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import coverImage from "../../logo.png";
import { navItems } from "@/lib/site-content";
import { Button } from "@/components/ui/button";
import { SoundToggle } from "@/components/ui/sound-toggle";

type NavbarProps = {
  soundEnabled: boolean;
  onToggleSound: () => void;
};

export function Navbar({ soundEnabled, onToggleSound }: NavbarProps) {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-40 mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8"
    >
      <div className="rounded-full border border-white/12 bg-slate-950/55 px-4 py-3 shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-4">
          <a href="#hero" className="flex items-center gap-3">
            <div className="relative h-8 w-8">
              <Image src={coverImage} alt="LinkersDev Logo" fill className="object-contain" priority />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">LinkersDev</span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <SoundToggle enabled={soundEnabled} onToggle={onToggleSound} />
            </div>
            <Button href="#final-cta" className="hidden sm:inline-flex">
              Start Building
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
