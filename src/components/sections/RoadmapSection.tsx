"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  fadeInUp,
  staggerContainer,
  slideInLeft,
  viewportConfig,
} from "@/lib/animations";

const phases = [
  {
    number: 1,
    name: "FUNDAMENTOS",
    modules: "Módulos 1-4",
    color: "#F59E0B",
    question: "¿Qué ES un proyecto de software moderno?",
    description:
      "Qué es software, qué es arquitectura, qué piezas hay, qué rol juegan los agentes",
  },
  {
    number: 2,
    name: "ANATOMÍA",
    modules: "Módulos 5-9",
    color: "#3B82F6",
    question: "¿Cómo se VE por dentro?",
    description:
      "Monorepo, capas, base de datos, autenticación, permisos, frontend",
  },
  {
    number: 3,
    name: "DECISIONES",
    modules: "Módulos 10-13",
    color: "#10B981",
    question: "¿Por qué se ELIGE esto y no otra cosa?",
    description: "Stack tecnológico, patrones, tradeoffs, convenciones",
  },
  {
    number: 4,
    name: "FLUJO DE TRABAJO",
    modules: "Módulos 14-17",
    color: "#8B5CF6",
    question: "¿Cómo se TRABAJA de verdad?",
    description: "SDD, documentación, testing, deploy, monitoreo",
  },
  {
    number: 5,
    name: "EVOLUCIÓN",
    modules: "Módulos 18-20",
    color: "#EC4899",
    question: "¿Cómo se MANTIENE y crece?",
    description: "Mantenimiento, escalabilidad, visión de futuro",
  },
] as const;

export function RoadmapSection() {
  return (
    <section
      id="programa"
      className={cn(
        "relative px-4 md:px-8 py-24 md:py-32",
        "bg-bg-surface overflow-hidden"
      )}
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-15" />
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
            Roadmap
          </span>
          <h2
            className={cn(
              "font-display font-extrabold tracking-tight",
              "text-3xl sm:text-4xl md:text-5xl",
              "text-text-primary mb-4"
            )}
          >
            El recorrido
          </h2>
          <p className="text-text-secondary text-base md:text-lg">
            5 fases, 20 módulos, un sistema completo
          </p>
        </motion.div>

        {/* Phases timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-border-default" />

          <div className="space-y-6">
            {phases.map((phase) => (
              <motion.div
                key={phase.number}
                variants={slideInLeft}
                className="relative"
              >
                {/* Phase card */}
                <div
                  className={cn(
                    "md:ml-20 p-6 md:p-8 rounded-xl",
                    "bg-bg-base/80 border border-border-default",
                    "transition-all duration-300",
                    "hover:border-opacity-60"
                  )}
                  style={{
                    "--phase-color": phase.color,
                    borderColor: `${phase.color}20`,
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${phase.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${phase.color}20`;
                  }}
                >
                  {/* Timeline dot (desktop) */}
                  <div
                    className={cn(
                      "hidden md:flex absolute left-[22px] top-8",
                      "w-[14px] h-[14px] rounded-full border-2",
                      "items-center justify-center"
                    )}
                    style={{
                      borderColor: phase.color,
                      backgroundColor: `${phase.color}20`,
                    }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: phase.color }}
                    />
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Phase badge */}
                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className={cn(
                          "font-mono font-bold text-3xl md:text-4xl leading-none"
                        )}
                        style={{ color: phase.color }}
                      >
                        {String(phase.number).padStart(2, "0")}
                      </span>
                      <div>
                        <span
                          className="font-mono text-xs font-semibold uppercase tracking-widest block"
                          style={{ color: phase.color }}
                        >
                          {phase.name}
                        </span>
                        <span className="font-mono text-[11px] text-text-muted">
                          {phase.modules}
                        </span>
                      </div>
                    </div>

                    {/* Phase content */}
                    <div className="flex-1">
                      <h3
                        className={cn(
                          "font-display font-bold text-lg md:text-xl",
                          "text-text-primary mb-2"
                        )}
                      >
                        {phase.question}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
