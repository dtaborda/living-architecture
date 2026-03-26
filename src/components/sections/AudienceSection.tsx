"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

const idealProfile = [
  "Tenés entre 0 y 12 meses en tech (o estás por empezar)",
  "Sabés algo de programación (o nada), pero tenés curiosidad REAL",
  "Estás harto de aprender herramientas sin entender el panorama completo",
  "Querés hablar el lenguaje de un equipo profesional de desarrollo",
  "Te interesa el desarrollo asistido por IA y querés entender cómo cambia el juego",
] as const;

const antiProfile = [
  "No es para vos si buscás aprender a codear en 30 días",
  "No es para vos si querés copy-paste de tutoriales",
] as const;

export function AudienceSection() {
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
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Section title */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span
            className={cn(
              "font-mono text-xs font-semibold uppercase tracking-[0.25em]",
              "text-accent-cyan mb-4 block"
            )}
          >
            Perfil del alumno
          </span>
          <h2
            className={cn(
              "font-display font-extrabold tracking-tight",
              "text-3xl sm:text-4xl md:text-5xl",
              "text-text-primary"
            )}
          >
            ¿Es para <span className="text-accent-cyan">vos</span>?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Ideal profile */}
          <motion.div variants={fadeInUp}>
            <div
              className={cn(
                "p-6 md:p-8 rounded-xl",
                "bg-bg-surface border border-border-default"
              )}
            >
              <h3 className="font-display font-bold text-lg text-text-primary mb-6">
                Esto es para vos si...
              </h3>
              <ul className="space-y-4">
                {idealProfile.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex-shrink-0 w-5 h-5 rounded-full",
                        "bg-accent-cyan-dim flex items-center justify-center"
                      )}
                    >
                      <Check className="size-3 text-accent-cyan" />
                    </span>
                    <span className="text-text-secondary text-sm leading-relaxed">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Anti-profile */}
          <motion.div variants={fadeInUp}>
            <div
              className={cn(
                "p-6 md:p-8 rounded-xl",
                "bg-bg-surface border border-border-default"
              )}
            >
              <h3 className="font-display font-bold text-lg text-text-primary mb-6">
                Esto NO es para vos si...
              </h3>
              <ul className="space-y-4">
                {antiProfile.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex-shrink-0 w-5 h-5 rounded-full",
                        "bg-accent-hot-dim flex items-center justify-center"
                      )}
                    >
                      <X className="size-3 text-accent-hot" />
                    </span>
                    <span className="text-text-secondary text-sm leading-relaxed">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
