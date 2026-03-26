"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer, scaleIn, viewportConfig } from "@/lib/animations";

const results = [
  "Leer y entender la arquitectura de cualquier proyecto moderno",
  "Explicar por qué se elige una tecnología sobre otra",
  "Comprender cómo trabajan los agentes de IA en desarrollo real",
  "Navegar un monorepo y entender qué hace cada carpeta",
  "Entender los flujos de autenticación, permisos, bases de datos, APIs",
  "Describir un flujo completo: de idea → especificación → diseño → código → deploy → monitoreo",
  "Pensar como un arquitecto de software, no solo como alguien que escribe código",
  "Hablar el lenguaje de un equipo profesional de desarrollo",
] as const;

export function ResultsSection() {
  return (
    <section
      className={cn(
        "relative px-4 md:px-8 py-24 md:py-32",
        "bg-bg-surface overflow-hidden"
      )}
    >
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
            Resultados
          </span>
          <h2
            className={cn(
              "font-display font-extrabold tracking-tight",
              "text-3xl sm:text-4xl md:text-5xl",
              "text-text-primary"
            )}
          >
            Al terminar, vas a poder...
          </h2>
        </motion.div>

        {/* Results grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {results.map((result, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className={cn(
                "group relative p-5 md:p-6 rounded-xl",
                "bg-bg-base/60 border border-border-default",
                "transition-all duration-300",
                "hover:border-accent-cyan/20 hover:bg-bg-elevated/50"
              )}
            >
              {/* Number badge */}
              <div className="flex items-start gap-4">
                <span
                  className={cn(
                    "flex-shrink-0 w-9 h-9 rounded-lg",
                    "bg-accent-cyan-dim border border-accent-cyan/10",
                    "flex items-center justify-center",
                    "font-mono font-bold text-sm text-accent-cyan",
                    "group-hover:border-accent-cyan/20 transition-colors duration-300"
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed pt-1.5">
                  {result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
