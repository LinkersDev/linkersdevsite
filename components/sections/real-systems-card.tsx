"use client";

import { motion } from "framer-motion";

import type { ProjectCardData } from "@/lib/real-systems-data";
import { RealSystemsButton } from "./real-systems-button";

type RealSystemsCardProps = {
  project: ProjectCardData;
  index: number;
};

export function RealSystemsCard({ project, index }: RealSystemsCardProps) {
  const isFeatured = project.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      className="group flex flex-col"
    >
      <div
        className={`flex flex-1 flex-col rounded-2xl border transition duration-300 ${
          isFeatured
            ? "border-white/12 bg-white/[0.05] p-7"
            : "border-white/8 bg-white/[0.03] p-6"
        } group-hover:border-white/14 group-hover:-translate-y-0.5`}
      >
        {/* Category */}
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
          {project.category}
        </span>

        {/* Title */}
        <h3
          className={`mt-3 font-semibold tracking-tight text-white ${
            isFeatured ? "text-lg" : "text-base"
          }`}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/8 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-auto pt-6">
          <RealSystemsButton href={project.href}>
            {project.buttonText}
          </RealSystemsButton>
        </div>
      </div>
    </motion.div>
  );
}
