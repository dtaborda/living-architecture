"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export function Footer() {
  return (
    <footer
      className={cn(
        "relative px-4 md:px-8 py-12 md:py-16",
        "border-t border-border-default"
      )}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-5xl mx-auto flex flex-col items-center gap-6"
      >
        {/* Logo */}
        <motion.div variants={fadeInUp}>
          <span className="font-mono font-bold text-2xl tracking-tight">
            <span className="text-accent-cyan">d</span>
            <span className="text-text-primary">Taborda</span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          className={cn(
            "font-mono text-sm text-text-muted",
            "tracking-wide"
          )}
        >
          Rompé el chat. Construí el sistema.
        </motion.p>

        {/* Divider */}
        <motion.div variants={fadeInUp} className="w-16 h-px bg-border-default" />

        {/* Copyright */}
        <motion.p
          variants={fadeInUp}
          className="font-mono text-xs text-text-ghost"
        >
          &copy; 2026 dTaborda
        </motion.p>
      </motion.div>
    </footer>
  );
}
