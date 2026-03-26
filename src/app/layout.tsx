import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arquitectura Viva | dTaborda",
  description:
    "Cómo Pensar, Diseñar y Construir Software Moderno con Agentes. De la idea a la app — Un recorrido real por dentro de un proyecto profesional asistido por agentes de IA.",
  openGraph: {
    title: "Arquitectura Viva — dTaborda | Programa 2026",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-base text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
