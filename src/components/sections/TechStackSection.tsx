"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";

/* ─────────────────────────────────────────────
   Tech data — grouped by category
   ───────────────────────────────────────────── */

interface Tech {
  name: string;
  color: string;
  icon: React.ReactNode;
}

interface TechCategory {
  label: string;
  techs: Tech[];
}

const categories: TechCategory[] = [
  {
    label: "Frontend",
    techs: [
      {
        name: "Next.js",
        color: "#FFFFFF",
        icon: (
          <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
            <circle cx="16" cy="16" r="14" fill="currentColor" />
            <path
              d="M13 11v10l8-10"
              stroke="#050508"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        ),
      },
      {
        name: "React",
        color: "#61DAFB",
        icon: (
          <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
            <circle cx="16" cy="16" r="2.5" fill="currentColor" />
            <ellipse
              cx="16"
              cy="16"
              rx="11"
              ry="4.2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <ellipse
              cx="16"
              cy="16"
              rx="11"
              ry="4.2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              transform="rotate(60 16 16)"
            />
            <ellipse
              cx="16"
              cy="16"
              rx="11"
              ry="4.2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              transform="rotate(120 16 16)"
            />
          </svg>
        ),
      },
      {
        name: "TypeScript",
        color: "#3178C6",
        icon: (
          <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
            <rect
              x="3"
              y="3"
              width="26"
              height="26"
              rx="4"
              fill="currentColor"
            />
            <text
              x="16"
              y="22"
              textAnchor="middle"
              fill="#050508"
              fontSize="14"
              fontWeight="700"
              fontFamily="Inter, sans-serif"
            >
              TS
            </text>
          </svg>
        ),
      },
      {
        name: "Tailwind CSS",
        color: "#06B6D4",
        icon: (
          <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
            <path
              d="M9 16c1.5-5 4.5-7 9-7 6 0 7 4.5 4.5 7-1.5 1.5-4.5 2-4.5 4.5C18 23 21 25.5 27 25.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 16c1.5-5 4.5-7 9-7 6 0 7 4.5 4.5 7-1.5 1.5-4.5 2-4.5 4.5C14 23 17 25.5 23 25.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.4"
            />
          </svg>
        ),
      },
    ],
  },
  {
    label: "Backend & Pagos",
    techs: [
      {
        name: "Supabase",
        color: "#3FCF8E",
        icon: (
          <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
            <path
              d="M18 27c-.4.9-1.8.5-1.8-.5V18h9.5c1.3 0 2 1.5 1.2 2.5L18 27Z"
              fill="currentColor"
              opacity="0.6"
            />
            <path
              d="M14 5c.4-.9 1.8-.5 1.8.5V14H6.3c-1.3 0-2-1.5-1.2-2.5L14 5Z"
              fill="currentColor"
            />
          </svg>
        ),
      },
      {
        name: "PostgreSQL",
        color: "#4169E1",
        icon: (
          <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
            <ellipse
              cx="16"
              cy="10"
              rx="9"
              ry="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M7 10v12c0 2.2 4 4 9 4s9-1.8 9-4V10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M7 16c0 2.2 4 4 9 4s9-1.8 9-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        ),
      },
      {
        name: "Stripe",
        color: "#635BFF",
        icon: (
          <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
            <rect
              x="4"
              y="4"
              width="24"
              height="24"
              rx="5"
              fill="currentColor"
            />
            <path
              d="M16 10c-2.5 0-4 1-4 2.8 0 3.5 7 2.5 7 5.5 0 2-1.8 3.2-4.5 3.2-2 0-3.5-.6-4.5-1.2"
              fill="none"
              stroke="#050508"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ),
      },
    ],
  },
  {
    label: "Auth",
    techs: [
      {
        name: "Clerk",
        color: "#6C47FF",
        icon: (
          <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
            <circle
              cx="16"
              cy="12"
              r="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <circle cx="24" cy="10" r="2" fill="currentColor" opacity="0.5" />
          </svg>
        ),
      },
      {
        name: "Kinde",
        color: "#6851FF",
        icon: (
          <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
            <rect
              x="6"
              y="6"
              width="20"
              height="20"
              rx="5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M13 12v8M13 16l5-4M13 16l5 4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
    ],
  },
  {
    label: "Deploy & Código",
    techs: [
      {
        name: "Vercel",
        color: "#FFFFFF",
        icon: (
          <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
            <path d="M16 6L28 26H4L16 6Z" fill="currentColor" />
          </svg>
        ),
      },
      {
        name: "GitHub",
        color: "#FFFFFF",
        icon: (
          <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 4C9.4 4 4 9.4 4 16c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.8 2.7 1.3 3.3 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C24.6 25.8 28 21.3 28 16c0-6.6-5.4-12-12-12Z"
              fill="currentColor"
            />
          </svg>
        ),
      },
    ],
  },
  {
    label: "Inteligencia Artificial",
    techs: [
      {
        name: "OpenAI",
        color: "#10A37F",
        icon: (
          <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
            <path
              d="M16 6c-2 0-3.5 1.2-4 3-.8-.5-2-.5-3 .2-1.5 1-1.8 3-.8 4.5-.8.5-1.5 1.5-1.5 2.8 0 2 1.2 3.5 3 4 -.5.8-.5 2 .2 3 1 1.5 3 1.8 4.5.8.5.8 1.5 1.5 2.8 1.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M16 26c2 0 3.5-1.2 4-3 .8.5 2 .5 3-.2 1.5-1 1.8-3 .8-4.5.8-.5 1.5-1.5 1.5-2.8 0-2-1.2-3.5-3-4 .5-.8.5-2-.2-3-1-1.5-3-1.8-4.5-.8-.5-.8-1.5-1.5-2.8-1.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        ),
      },
      {
        name: "Claude",
        color: "#D4A574",
        icon: (
          <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
            <circle
              cx="16"
              cy="16"
              r="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M12 14c0-1 .5-2 1.5-2.5M16 11c1.5 0 3 .5 3.5 2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="13" cy="15" r="1.2" fill="currentColor" />
            <circle cx="19" cy="15" r="1.2" fill="currentColor" />
            <path
              d="M12.5 19c1 1.5 3 2 5 1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        ),
      },
    ],
  },
  {
    label: "Monitoreo",
    techs: [
      {
        name: "Sentry",
        color: "#362D59",
        icon: (
          <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
            <path
              d="M18.5 6L9 23h4.5M18.5 6c-1.5 2.5-3 5.5-2 8.5.5 1.5 2 3 3.5 4M18.5 6l5 9"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="23" cy="23" r="2" fill="currentColor" />
          </svg>
        ),
      },
    ],
  },
];

/* ─────────────────────────────────────────────
   Component
   ───────────────────────────────────────────── */

export function TechStackSection() {
  return (
    <section
      className={cn(
        "relative px-4 md:px-8 py-24 md:py-32",
        "overflow-hidden"
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
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Section header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span
            className={cn(
              "font-mono text-xs font-semibold uppercase tracking-[0.25em]",
              "text-accent-cyan mb-4 block"
            )}
          >
            El Stack
          </span>
          <h2
            className={cn(
              "font-display font-extrabold tracking-tight",
              "text-3xl sm:text-4xl md:text-5xl",
              "text-text-primary mb-4"
            )}
          >
            Las tecnologías que vas a{" "}
            <span className="text-accent-cyan">dominar</span>
          </h2>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">
            No solo las vas a conocer — vas a entender{" "}
            <span className="font-semibold text-text-primary">POR QUÉ</span> se
            eligen y{" "}
            <span className="font-semibold text-text-primary">CÓMO</span> se
            conectan.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((category) => (
            <motion.div key={category.label} variants={fadeInUp}>
              {/* Category label */}
              <p
                className={cn(
                  "font-mono text-xs font-semibold uppercase tracking-[0.2em]",
                  "text-text-muted mb-5 pl-1"
                )}
              >
                {category.label}
              </p>

              {/* Tech cards grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
                {category.techs.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={scaleIn}
                    className={cn(
                      "group relative flex flex-col items-center gap-3",
                      "p-5 md:p-6 rounded-xl",
                      "bg-bg-surface/80 border border-border-default",
                      "transition-all duration-300",
                      "hover:border-border-strong hover:scale-[1.03]"
                    )}
                    style={
                      {
                        "--tech-color": tech.color,
                      } as React.CSSProperties
                    }
                  >
                    {/* Subtle glow on hover */}
                    <div
                      className={cn(
                        "absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300",
                        "group-hover:opacity-100 pointer-events-none"
                      )}
                      style={{
                        boxShadow: `inset 0 1px 0 0 ${tech.color}20, 0 0 20px ${tech.color}08`,
                      }}
                    />

                    {/* Left accent bar */}
                    <div
                      className={cn(
                        "absolute left-0 top-3 bottom-3 w-[2px] rounded-full",
                        "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      )}
                      style={{ backgroundColor: tech.color }}
                    />

                    {/* Icon */}
                    <span
                      className="transition-colors duration-300 text-text-muted group-hover:text-[var(--tech-color)]"
                    >
                      {tech.icon}
                    </span>

                    {/* Name */}
                    <span
                      className={cn(
                        "font-mono text-xs font-medium text-text-secondary",
                        "group-hover:text-text-primary transition-colors duration-300"
                      )}
                    >
                      {tech.name}
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
