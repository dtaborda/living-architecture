"use client";

import { motion } from "framer-motion";
import { BookX, Brain, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  viewportConfig,
} from "@/lib/animations";

const painPoints = [
  {
    icon: BookX,
    text: "Estás cansado de tutoriales de TODO Apps que no te preparan para nada real",
  },
  {
    icon: Brain,
    text: "Aprendiste a escribir código pero no entendés por qué un sistema funciona como funciona",
  },
  {
    icon: Zap,
    text: "La IA cambió todo y nadie te enseña cómo trabajar CON ella, no contra ella",
  },
] as const;

export function ProblemSection() {
  return (
    <section
      className={cn(
        "relative px-4 md:px-8 py-24 md:py-32",
        "overflow-hidden"
      )}
    >
      {/* Noise overlay */}
      <div className="bg-noise absolute inset-0 pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="relative z-10 max-w-5xl mx-auto"
      >
        {/* Section title */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2
            className={cn(
              "font-display font-extrabold tracking-tight",
              "text-3xl sm:text-4xl md:text-5xl",
              "text-text-primary mb-4"
            )}
          >
            ¿Otro curso{" "}
            <span className="text-accent-hot italic">más</span>?
          </h2>
        </motion.div>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {painPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={i}
                variants={scaleIn}
                className={cn(
                  "group relative p-6 md:p-8 rounded-xl",
                  "bg-bg-surface border border-border-default",
                  "transition-all duration-300",
                  "hover:border-border-strong hover:bg-bg-elevated"
                )}
              >
                {/* Decorative number */}
                <span
                  className={cn(
                    "absolute top-4 right-4 font-mono font-bold text-5xl",
                    "text-text-ghost/30 select-none"
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div
                  className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center mb-5",
                    "bg-accent-hot-dim"
                  )}
                >
                  <Icon className="size-6 text-accent-hot" />
                </div>

                <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                  {point.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Closing line */}
        <motion.div variants={fadeInUp} className="text-center">
          <div
            className={cn(
              "inline-block px-6 py-4 rounded-lg",
              "border-l-2 border-accent-cyan bg-accent-cyan-dim",
              "max-w-2xl"
            )}
          >
            <p className="text-accent-cyan font-medium text-sm md:text-base">
              Este curso no es otro tutorial. Es una masterclass de pensamiento
              arquitectónico.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
