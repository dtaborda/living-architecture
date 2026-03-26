import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Arquitectura Viva — dTaborda | Programa 2026",
  description:
    "Cómo Pensar, Diseñar y Construir Software Moderno con Agentes. De la idea a la app — Un recorrido real por dentro de un proyecto profesional asistido por agentes de IA.",
  openGraph: {
    title: "Arquitectura Viva — dTaborda",
    description:
      "20 módulos. Un proyecto real. Cero relleno. Aprendé a pensar como un arquitecto de software.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arquitectura Viva — dTaborda",
    description:
      "20 módulos. Un proyecto real. Cero relleno. Aprendé a pensar como un arquitecto de software.",
  },
};

export default function HomePage() {
  return <LandingPage />;
}
