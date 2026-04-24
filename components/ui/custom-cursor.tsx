"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

type CustomCursorProps = {
  isActive: boolean;
};

export function CustomCursor({ isActive }: CustomCursorProps) {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.3 });
  const smoothY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.3 });

  useEffect(() => {
    const updatePointer = (event: PointerEvent) => {
      x.set(event.clientX - 16);
      y.set(event.clientY - 16);
    };

    window.addEventListener("pointermove", updatePointer);

    return () => window.removeEventListener("pointermove", updatePointer);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      style={{ x: smoothX, y: smoothY }}
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-8 w-8 rounded-full border border-cyan-300/70 bg-cyan-300/12 shadow-[0_0_35px_rgba(79,209,255,0.35)] mix-blend-screen md:block"
      animate={{ scale: isActive ? 1.8 : 1, opacity: isActive ? 0.85 : 0.55 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    />
  );
}
