"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export function HeroSection() {
  return (
    <section
      id="hero"
      className={cn(
        "relative min-h-screen flex flex-col items-center justify-center",
        "px-4 md:px-8 py-24 md:py-32",
        "overflow-hidden"
      )}
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Noise overlay */}
      <div className="bg-noise absolute inset-0 pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Logo */}
        <motion.div variants={fadeInUp} className="mb-12">
          <span className="font-mono font-bold text-2xl tracking-tight">
            <span className="text-accent-cyan">d</span>
            <span className="text-text-primary">Taborda</span>
          </span>
        </motion.div>

        {/* Eyebrow */}
        <motion.div variants={fadeInUp} className="mb-6">
          <span
            className={cn(
              "inline-flex items-center gap-2",
              "font-mono text-xs font-semibold uppercase tracking-[0.25em]",
              "text-accent-cyan",
              "px-4 py-2 rounded-full",
              "border border-accent-cyan/20 bg-accent-cyan-dim"
            )}
          >
            <Sparkles className="size-3.5" />
            Programa 2026
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeInUp}
          className={cn(
            "font-display font-black tracking-tight leading-[0.95]",
            "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
            "mb-6"
          )}
        >
          <span className="text-text-primary">Arquitectura</span>
          <br />
          <span className="text-accent-cyan">Viva</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className={cn(
            "font-display font-semibold text-lg sm:text-xl md:text-2xl",
            "text-text-secondary max-w-2xl mx-auto mb-4",
            "leading-snug"
          )}
        >
          Cómo Pensar, Diseñar y Construir Software Moderno con Agentes
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className={cn(
            "text-sm sm:text-base text-text-muted max-w-xl mx-auto mb-10",
            "leading-relaxed"
          )}
        >
          De la idea a la app — Un recorrido real por dentro de un proyecto
          profesional asistido por agentes de IA.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#programa"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-3.5",
              "bg-accent-cyan text-bg-base font-semibold text-sm",
              "rounded-lg transition-all duration-300",
              "hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:scale-[1.02]",
              "active:scale-[0.98]"
            )}
          >
            Ver programa completo
            <ArrowDown className="size-4" />
          </a>
          <a
            href="https://wa.me/541165200668?text=Hola%21%20Quiero%20inscribirme%20en%20Arquitectura%20Viva"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-3.5",
              "border border-accent-hot/40 text-accent-hot font-semibold text-sm",
              "rounded-lg transition-all duration-300",
              "hover:bg-accent-hot-dim hover:border-accent-hot/60",
              "active:scale-[0.98]"
            )}
          >
            Quiero inscribirme
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-border-strong flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
