"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  fadeInUp,
  staggerContainer,
  staggerContainerSlow,
  viewportConfig,
} from "@/lib/animations";

interface Module {
  number: number;
  title: string;
}

interface Phase {
  name: string;
  color: string;
  modules: Module[];
}

const phases: Phase[] = [
  {
    name: "FASE 1 — FUNDAMENTOS",
    color: "#F59E0B",
    modules: [
      { number: 1, title: "¿Qué es un proyecto de software moderno?" },
      { number: 2, title: "Arquitectura: las capas de un edificio digital" },
      { number: 3, title: "Los agentes de IA: tu equipo invisible" },
      { number: 4, title: "El contexto: por qué la IA sin contexto es inútil" },
    ],
  },
  {
    name: "FASE 2 — ANATOMÍA",
    color: "#3B82F6",
    modules: [
      { number: 5, title: "El monorepo: una ciudad organizada" },
      { number: 6, title: "La base de datos: la memoria del sistema" },
      { number: 7, title: "Autenticación y permisos: quién puede hacer qué" },
      { number: 8, title: "El frontend: lo que el usuario ve y toca" },
      {
        number: 9,
        title:
          "La comunicación: APIs, acciones y cómo viajan los datos",
      },
    ],
  },
  {
    name: "FASE 3 — DECISIONES",
    color: "#10B981",
    modules: [
      { number: 10, title: "Elegir tecnologías: por qué esto y no otra cosa" },
      { number: 11, title: "Patrones de arquitectura: las reglas del juego" },
      { number: 12, title: 'Diseño UI/UX: no es solo "que se vea lindo"' },
      { number: 13, title: "Multi-tenancy: cuando un sistema sirve a muchos" },
    ],
  },
  {
    name: "FASE 4 — FLUJO DE TRABAJO",
    color: "#8B5CF6",
    modules: [
      {
        number: 14,
        title: "SDD: de la idea al código sin perder el rumbo",
      },
      {
        number: 15,
        title: "Documentación: el código se olvida, los docs quedan",
      },
      {
        number: 16,
        title: "Testing: cómo saber que algo funciona (sin rezar)",
      },
      { number: 17, title: "Deploy y monitoreo: tu app en el mundo real" },
    ],
  },
  {
    name: "FASE 5 — EVOLUCIÓN",
    color: "#EC4899",
    modules: [
      {
        number: 18,
        title: "Integraciones: cuando tu sistema habla con otros",
      },
      {
        number: 19,
        title: "Internacionalización: tu app habla varios idiomas",
      },
      {
        number: 20,
        title: 'Evolución y mantenimiento: el software nunca "termina"',
      },
    ],
  },
];

export function ModulesSection() {
  return (
    <section
      className={cn(
        "relative px-4 md:px-8 py-24 md:py-32",
        "overflow-hidden"
      )}
    >
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
            Programa completo
          </span>
          <h2
            className={cn(
              "font-display font-extrabold tracking-tight",
              "text-3xl sm:text-4xl md:text-5xl",
              "text-text-primary mb-4"
            )}
          >
            20 módulos. Un proyecto real.{" "}
            <span className="text-accent-hot">Cero relleno.</span>
          </h2>
        </motion.div>

        {/* Phases */}
        <div className="space-y-10">
          {phases.map((phase) => (
            <motion.div
              key={phase.name}
              variants={staggerContainerSlow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Phase header */}
              <motion.div variants={fadeInUp} className="mb-4">
                <h3
                  className={cn(
                    "font-mono text-xs font-semibold uppercase tracking-[0.2em]",
                    "pb-3 border-b border-border-default"
                  )}
                  style={{ color: phase.color }}
                >
                  {phase.name}
                </h3>
              </motion.div>

              {/* Module list */}
              <div className="space-y-1">
                {phase.modules.map((mod) => (
                  <motion.div
                    key={mod.number}
                    variants={fadeInUp}
                    className={cn(
                      "group flex items-center gap-4 px-4 py-3 rounded-lg",
                      "transition-all duration-200",
                      "hover:bg-bg-surface"
                    )}
                  >
                    {/* Module number */}
                    <span
                      className={cn(
                        "font-mono font-bold text-sm w-8 text-right shrink-0",
                        "transition-colors duration-200"
                      )}
                      style={{ color: `${phase.color}80` }}
                    >
                      {String(mod.number).padStart(2, "0")}
                    </span>

                    {/* Dot */}
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0 opacity-40 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ backgroundColor: phase.color }}
                    />

                    {/* Module title */}
                    <span
                      className={cn(
                        "text-text-secondary text-sm md:text-base",
                        "group-hover:text-text-primary transition-colors duration-200"
                      )}
                    >
                      {mod.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
