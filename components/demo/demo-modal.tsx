"use client";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useMemo } from "react";

import type { ProjectType } from "@/lib/demo-config";
import { getLiveDemoSystem } from "@/lib/live-demo-systems";

type DemoModalProps = {
  isOpen: boolean;
  systemId: ProjectType;
  layoutId: string;
  onClose: () => void;
};

export function DemoModal({ isOpen, systemId, layoutId, onClose }: DemoModalProps) {
  const system = useMemo(() => getLiveDemoSystem(systemId), [systemId]);
  if (!isOpen) {
    return null;
  }

  return <DemoModalPanel key={`${system.id}-${isOpen}`} system={system} layoutId={layoutId} onClose={onClose} />;
}

function DemoModalPanel({
  system,
  layoutId,
  onClose,
}: {
  system: ReturnType<typeof getLiveDemoSystem>;
  layoutId: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key={`${system.id}-${layoutId}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.16 }}
        className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 p-0 md:items-center md:p-5"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 14, scale: 0.995 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={(event) => event.stopPropagation()}
          className="w-full max-h-[86vh] overflow-auto rounded-t-[28px] border border-slate-200 bg-white px-5 pb-6 pt-5 shadow-[0_20px_70px_rgba(15,23,42,0.18)] md:max-h-[90vh] md:max-w-2xl md:rounded-[30px] md:px-7 md:pb-7 md:pt-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
                {system.modalTitle}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                {system.modalDescription}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
              aria-label="Close demo preview"
            >
              <X className="h-4 w-4" strokeWidth={1.8} />
            </button>
          </div>

          <div className="mt-6 border-t border-slate-200 pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Key points</p>
            <ul className="mt-3 space-y-2.5">
              {system.keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-slate-700 md:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: system.primaryColor }} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Use cases</p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {system.useCaseTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border px-3 py-1.5 text-sm font-medium"
                  style={{
                    borderColor: `${system.primaryColor}33`,
                    backgroundColor: system.tintColor,
                    color: "#334155",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {system.actions ? (
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Simple actions</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {system.actions.map((action) => (
                  <div
                    key={action}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-700"
                  >
                    {action}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

