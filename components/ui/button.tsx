"use client";

import { motion } from "framer-motion";
import type { MouseEventHandler, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const baseClassName =
  "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold tracking-[0.18em] uppercase transition duration-300";

export function Button({
  children,
  className,
  href,
  icon,
  onClick,
  variant = "primary",
  type = "button",
  disabled,
}: ButtonProps) {
  const variantClassName = {
    primary:
      "border-transparent bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(139,92,246,0.7)]",
    secondary:
      "border-white/15 bg-white/10 text-white backdrop-blur-xl hover:border-cyan-300/40 hover:bg-white/14",
    ghost: "border-transparent bg-transparent text-slate-200 hover:text-white",
  }[variant];

  const content = (
    <>
      <span>{children}</span>
      {icon}
    </>
  );

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        onClick={onClick}
        className={cn(baseClassName, variantClassName, className)}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(baseClassName, variantClassName, className)}
    >
      {content}
    </motion.button>
  );
}
