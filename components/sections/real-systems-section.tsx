"use client";

import { motion } from "framer-motion";

import { realSystemsProjects } from "@/lib/real-systems-data";
import { RealSystemsCard } from "./real-systems-card";

export function RealSystemsSection() {
  return (
    <section id="real-systems" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1320px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Real Systems
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Operational systems built for real businesses
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            From clinics and schools to restaurants and internal operations — every
            platform is designed around real workflows, teams, and daily business
            operations.
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {realSystemsProjects.map((project, index) => (
            <RealSystemsCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
