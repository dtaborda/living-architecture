"use client";

import { motion } from "framer-motion";
import { Brain, Building2, Bot, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  viewportConfig,
} from "@/lib/animations";

const differentiators = [
  {
    icon: Brain,
    title: "No enseña a programar. Enseña a PENSAR como arquitecto.",
    description:
      "Entendés los fundamentos que hacen que un sistema funcione — antes de tocar una línea de código.",
  },
  {
    icon: Building2,
    title: "Proyecto real, no toy apps",
    description:
      "Seguís el desarrollo de un sistema completo de principio a fin. Nada de TODO apps.",
  },
  {
    icon: Bot,
    title: "Agentes de IA como compañeros",
    description:
      "Entendés cómo los agentes cambian la forma de construir software — y cómo trabajar con ellos.",
  },
  {
    icon: Rocket,
    title: "De idea a deploy",
    description:
      "El flujo completo: especificación → diseño → código → testing → producción → monitoreo.",
  },
] as const;

export function DifferentSection() {
  return (
    <section
      className={cn(
        "relative px-4 md:px-8 py-24 md:py-32",
        "bg-bg-surface overflow-hidden"
      )}
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
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
          <span
            className={cn(
              "font-mono text-xs font-semibold uppercase tracking-[0.25em]",
              "text-accent-cyan mb-4 block"
            )}
          >
            Lo que nos diferencia
          </span>
          <h2
            className={cn(
              "font-display font-extrabold tracking-tight",
              "text-3xl sm:text-4xl md:text-5xl",
              "text-text-primary"
            )}
          >
            ¿Qué hace{" "}
            <span className="text-accent-cyan">diferente</span> a
            este curso?
          </h2>
        </motion.div>

        {/* Feature blocks — 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={scaleIn}
                className={cn(
                  "group relative p-8 rounded-xl",
                  "bg-bg-base/60 border border-border-default",
                  "transition-all duration-300",
                  "hover:border-accent-cyan/30 hover:shadow-[0_0_40px_rgba(0,240,255,0.05)]"
                )}
              >
                <div
                  className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center mb-6",
                    "bg-accent-cyan-dim border border-accent-cyan/10",
                    "group-hover:border-accent-cyan/20 transition-colors duration-300"
                  )}
                >
                  <Icon className="size-7 text-accent-cyan" />
                </div>

                <h3
                  className={cn(
                    "font-display font-bold text-lg md:text-xl",
                    "text-text-primary mb-3 leading-snug"
                  )}
                >
                  {item.title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
