"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export function CtaSection() {
  return (
    <section
      id="inscripcion"
      className={cn(
        "relative px-4 md:px-8 py-24 md:py-32",
        "bg-bg-surface overflow-hidden"
      )}
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Radial glow — hot pink this time */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,51,102,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="bg-noise absolute inset-0 pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        {/* Eyebrow */}
        <motion.div variants={fadeInUp} className="mb-6">
          <span
            className={cn(
              "inline-flex items-center gap-2",
              "font-mono text-xs font-semibold uppercase tracking-[0.25em]",
              "text-accent-hot"
            )}
          >
            Inscripción abierta
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeInUp}
          className={cn(
            "font-display font-extrabold tracking-tight",
            "text-3xl sm:text-4xl md:text-5xl",
            "text-text-primary mb-4"
          )}
        >
          ¿Estás listo para pensar como{" "}
          <span className="text-accent-cyan">arquitecto</span>?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="text-text-secondary text-base md:text-lg mb-10"
        >
          Programa 2026 — Cupos limitados
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            href="https://wa.me/541165200668?text=Hola%21%20Quiero%20inscribirme%20en%20Arquitectura%20Viva"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group inline-flex items-center gap-2.5 px-10 py-4",
              "bg-accent-hot text-white font-bold text-base",
              "rounded-lg transition-all duration-300",
              "hover:shadow-[0_0_40px_rgba(255,51,102,0.3)] hover:scale-[1.02]",
              "active:scale-[0.98]"
            )}
          >
            Quiero inscribirme
            <ArrowRight className="size-5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
          <a
            href="https://wa.me/541165200668?text=Hola%21%20Tengo%20preguntas%20sobre%20el%20curso%20Arquitectura%20Viva"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2.5 px-8 py-4",
              "border border-accent-cyan/30 text-accent-cyan font-semibold text-sm",
              "rounded-lg transition-all duration-300",
              "hover:bg-accent-cyan-dim hover:border-accent-cyan/50",
              "active:scale-[0.98]"
            )}
          >
            <MessageCircle className="size-4" />
            Tengo preguntas
          </a>
        </motion.div>

        {/* Contact/social hint */}
        <motion.p
          variants={fadeInUp}
          className="text-text-muted text-xs font-mono"
        >
          Escribinos a{" "}
          <span className="text-text-secondary">hola@dtaborda.com</span> o por{" "}
          <span className="text-text-secondary">Instagram @dtaborda</span>
        </motion.p>
      </motion.div>
    </section>
  );
}
