"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export function ObjectiveSection() {
  return (
    <section
      className={cn(
        "relative px-4 md:px-8 py-28 md:py-40",
        "overflow-hidden"
      )}
    >
      {/* Large radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,240,255,0.04) 0%, transparent 70%)",
        }}
      />
      <div className="bg-noise absolute inset-0 pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Decorative quotes */}
        <motion.div
          variants={fadeInUp}
          className="mb-8"
        >
          <span className="font-display text-8xl md:text-9xl text-text-ghost/20 leading-none select-none">
            &ldquo;
          </span>
        </motion.div>

        {/* First statement */}
        <motion.p
          variants={fadeInUp}
          className={cn(
            "font-display font-extrabold tracking-tight",
            "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
            "text-text-primary mb-6",
            "leading-tight"
          )}
        >
          Este curso <span className="text-accent-hot">NO</span> enseña a
          programar.
        </motion.p>

        {/* Second statement */}
        <motion.p
          variants={fadeInUp}
          className={cn(
            "font-display font-semibold",
            "text-lg sm:text-xl md:text-2xl",
            "text-text-secondary max-w-3xl mx-auto",
            "leading-snug"
          )}
        >
          Enseña a entender{" "}
          <span className="text-accent-cyan font-bold">POR QUÉ</span> un
          sistema funciona como funciona, para que cuando empieces a programar,
          ya tengas la mentalidad de un{" "}
          <span className="text-text-primary font-bold">arquitecto</span>.
        </motion.p>

        {/* Decorative bottom line */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 flex justify-center"
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
