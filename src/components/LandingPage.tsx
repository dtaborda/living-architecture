"use client";

import {
  HeroSection,
  ProblemSection,
  DifferentSection,
  AudienceSection,
  RoadmapSection,
  ModulesSection,
  ResultsSection,
  TechStackSection,
  ObjectiveSection,
  CtaSection,
  Footer,
} from "@/components/sections";

/**
 * LandingPage — Client wrapper that composes all landing page sections.
 * Smooth scrolling is handled via CSS (scroll-behavior: smooth on html).
 */
export function LandingPage() {
  return (
    <div className="min-h-screen bg-bg-base">
      <HeroSection />
      <ProblemSection />
      <DifferentSection />
      <AudienceSection />
      <RoadmapSection />
      <ModulesSection />
      <ResultsSection />
      <TechStackSection />
      <ObjectiveSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
