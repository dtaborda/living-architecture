# Living Architecture

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deploy](https://img.shields.io/badge/Vercel-Deploy-black?logo=vercel)](https://vercel.com/)

> Landing page for **Arquitectura Viva** — a 20-module course on thinking, designing, and building modern software with AI agents. By [dTaborda](https://github.com/dtaborda).

---

## Overview

**Arquitectura Viva** (Living Architecture) is a premium educational program by dTaborda for 2026. The course teaches how to think like a software architect — not just how to write code — covering the full lifecycle from idea to production, with AI agents as integral collaborators.

This repository contains the landing page: a dark-mode, scroll-driven marketing site built with Next.js 16, React 19, and Tailwind CSS v4. It presents the course curriculum, philosophy, tech stack, and enrollment flow across 11 carefully crafted sections.

---

## Tech Stack

| Category          | Technology                                                         |
| ----------------- | ------------------------------------------------------------------ |
| Framework         | [Next.js](https://nextjs.org/) 16.1.6                             |
| UI Library        | [React](https://react.dev/) 19.2.3                                |
| Styling           | [Tailwind CSS](https://tailwindcss.com/) v4 (via `@theme` block)  |
| Animations        | [Framer Motion](https://motion.dev/) 12.37+                       |
| Icons             | [Lucide React](https://lucide.dev/) 0.577+                        |
| Class Utilities   | [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) + [class-variance-authority](https://cva.style/) |
| Language          | [TypeScript](https://www.typescriptlang.org/) 5 (strict mode)     |
| Linting           | [ESLint](https://eslint.org/) 9 with `eslint-config-next`         |
| Package Manager   | pnpm                                                               |

---

## Architecture

### Project Structure

```
living-architecture/
├── src/
│   ├── app/
│   │   ├── globals.css           — Design tokens, @theme block, utility classes
│   │   ├── layout.tsx            — Root layout, font loading (Google Fonts), metadata
│   │   └── page.tsx              — Homepage (server component with SEO metadata)
│   ├── components/
│   │   ├── LandingPage.tsx       — Client wrapper, composes all sections
│   │   └── sections/             — All landing page sections
│   │       ├── HeroSection.tsx
│   │       ├── ProblemSection.tsx
│   │       ├── DifferentSection.tsx
│   │       ├── AudienceSection.tsx
│   │       ├── RoadmapSection.tsx
│   │       ├── ModulesSection.tsx
│   │       ├── ResultsSection.tsx
│   │       ├── TechStackSection.tsx
│   │       ├── ObjectiveSection.tsx
│   │       ├── CtaSection.tsx
│   │       ├── Footer.tsx
│   │       └── index.ts          — Barrel exports for all sections
│   └── lib/
│       ├── utils.ts              — cn() utility (clsx + tailwind-merge)
│       └── animations.ts         — Framer Motion shared variants & config
├── public/
├── package.json
├── next.config.ts
├── postcss.config.mjs            — Tailwind CSS v4 via @tailwindcss/postcss
├── tsconfig.json                 — TypeScript strict mode, path aliases (@/*)
└── eslint.config.mjs
```

### Key Architectural Decisions

- **Server/Client split**: `page.tsx` is a server component (handles metadata/SEO), while `LandingPage.tsx` is the `"use client"` boundary that composes all interactive sections.
- **Barrel exports**: All sections are re-exported through `sections/index.ts` for clean imports.
- **No `tailwind.config.ts`**: Tailwind CSS v4 uses the native `@theme` directive inside `globals.css` — all design tokens live there.
- **Path aliases**: `@/*` maps to `./src/*` via `tsconfig.json`.

---

### Design System

The visual identity follows a **cyberpunk-editorial meets luxury tech brand** aesthetic — dark-only, with sharp typographic hierarchy and controlled accent lighting.

#### Color Palette

| Token                | Value                      | Usage                     |
| -------------------- | -------------------------- | ------------------------- |
| `--color-bg-base`    | `#050508`                  | Page background           |
| `--color-bg-surface` | `#0A0A0F`                  | Card / section backgrounds|
| `--color-bg-elevated`| `#14141F`                  | Elevated surfaces         |
| `--color-accent-cyan`| `#00F0FF`                  | Primary brand accent      |
| `--color-accent-hot` | `#FF3366`                  | Secondary accent (CTA)    |
| `--color-text-primary`| `#F0F0F5`                 | Headings, primary text    |
| `--color-text-secondary`| `#8888AA`               | Body text                 |
| `--color-text-muted` | `#555577`                  | Supporting text           |

Additional module accent colors (`amber`, `blue`, `emerald`, `orange`, `violet`, etc.) are used to differentiate curriculum phases.

#### Typography

| Font              | Weight        | Usage                            |
| ----------------- | ------------- | -------------------------------- |
| **Inter**         | 400–900       | Display headings and body text   |
| **JetBrains Mono**| 400–600       | Code labels, badges, monospace   |

Fonts are loaded via Google Fonts with `preconnect` for optimal performance.

#### Visual Effects

- **Grid backgrounds** — subtle 40px grid overlay with `bg-grid` utility
- **Noise textures** — SVG-based fractal noise via `bg-noise` pseudo-element
- **Cyan glow** — radial gradients and `glow-cyan` box-shadow utility
- **Blur overlays** — semi-transparent overlays with `bg-overlay` token
- **Custom scrollbar** — styled thin scrollbar matching the dark theme
- **Focus rings** — cyan `outline` on `:focus-visible` for accessibility

All tokens are defined in the Tailwind CSS v4 `@theme` block inside `globals.css`. There is no `tailwind.config.ts`.

---

### Animation System

Animations are powered by **Framer Motion** with a centralized variant library in `src/lib/animations.ts`.

#### Shared Variants

| Variant               | Effect                                           |
| --------------------- | ------------------------------------------------ |
| `fadeInUp`            | Fade in + translate Y (40px) with expo-out easing|
| `fadeIn`              | Opacity-only reveal                              |
| `scaleIn`             | Scale from 0.9 + fade in                         |
| `slideInLeft`         | Slide from -30px left                            |
| `slideInRight`        | Slide from +30px right                           |
| `staggerContainer`    | Parent orchestrator — staggers children by 100ms |
| `staggerContainerSlow`| Slower stagger variant — 150ms per child         |

#### Configuration

- **Easing**: Expo-out curve `[0.16, 1, 0.3, 1]` for smooth deceleration
- **Scroll-triggered**: All sections use `whileInView` with `viewportConfig`:
  - `once: true` — animate only on first appearance
  - `amount: 0.2` — trigger when 20% visible
  - `margin: "-50px"` — slight offset for earlier triggering
- **Reduced motion**: Respects `prefers-reduced-motion` via CSS media query that collapses all animation durations to `0.01ms`

---

### Page Sections

The landing page is composed of 11 sections rendered sequentially:

| #  | Section           | Purpose                                                              |
| -- | ----------------- | -------------------------------------------------------------------- |
| 1  | **Hero**          | Course title ("Arquitectura Viva"), tagline, primary + secondary CTA |
| 2  | **Problem**       | Three pain points — why existing tutorials and courses fail          |
| 3  | **Different**     | What makes this course unique compared to traditional learning       |
| 4  | **Audience**      | Who this course is for — and who it is NOT for                       |
| 5  | **Roadmap**       | Five learning phases displayed as a visual timeline                  |
| 6  | **Modules**       | Complete 20-module curriculum organized in 5 phases                  |
| 7  | **Results**       | Eight concrete learning outcomes                                     |
| 8  | **Tech Stack**    | 14 technologies across 6 categories with inline SVG icons           |
| 9  | **Objective**     | Impact statement — the course's core promise                         |
| 10 | **CTA**           | Final call to action — WhatsApp enrollment link                      |
| 11 | **Footer**        | Brand logo, tagline ("Rompe el chat. Construi el sistema."), copyright |

---

## Getting Started

### Prerequisites

- **Node.js** 18.18+ (LTS recommended)
- **pnpm** (preferred package manager)

### Installation

```bash
git clone https://github.com/dtaborda/living-architecture.git
cd living-architecture
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The dev server supports hot module replacement.

### Build

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm lint
```

---

## Deployment

This project is optimized for [Vercel](https://vercel.com/):

1. **Connect** your GitHub repository to Vercel
2. **Framework** is auto-detected as Next.js
3. **No environment variables** are required
4. Deploy triggers automatically on push to `main`

Alternatively, deploy via CLI:

```bash
npx vercel
```

---

## License

MIT

---

## Author

**dTaborda** — [github.com/dtaborda](https://github.com/dtaborda)

*Rompe el chat. Construi el sistema.*
