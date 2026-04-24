"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import coverImage from "../../cover.png";
import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[38px] border border-white/10 bg-slate-950/70 p-8 shadow-[0_30px_90px_rgba(2,8,28,0.55)] sm:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.24),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.22),transparent_32%)]" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-cyan-300">
                Ready to launch
              </p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
                Get Your System
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Fast choice. Fast scope. Fast kickoff.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="#builder" className="shadow-[0_0_55px_rgba(96,165,250,0.3)]">
                  Get Your System
                </Button>
                <Button href="#builder" variant="secondary">
                  Book a Call
                </Button>
              </div>
            </div>

            <div className="relative rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
              <div className="relative mx-auto aspect-[16/9] max-w-md overflow-hidden rounded-[22px] bg-white">
                <Image src={coverImage} alt="LinkersDev cover" fill className="object-contain p-6" />
              </div>
              <div className="mt-6 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3">
                  <span>Discovery</span>
                  <span>24 hours</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3">
                  <span>Scope</span>
                  <span>48 hours</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3">
                  <span>Launch fit</span>
                  <span>Ready</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
