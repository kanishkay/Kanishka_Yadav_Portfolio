import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { CurrentlyBuildingSection } from '../components/CurrentlyBuildingSection';
import { Project } from '../types/portfolio';

interface HomePageProps {
  scrollToSection: (sectionId: string) => void;
  onSelectProject: (project: Project) => void;
  onOpenAIAssistant: () => void;
}

export function HomePage({ scrollToSection, onSelectProject, onOpenAIAssistant }: HomePageProps) {
  return (
    <div className="space-y-20">
      {/* 1. Hero */}
      <HeroSection
        scrollToSection={scrollToSection}
        onOpenAIAssistant={onOpenAIAssistant}
      />

      {/* 2. Currently Building */}
      <CurrentlyBuildingSection
        onSelectProject={onSelectProject}
        scrollToSection={scrollToSection}
      />
    </div>
  );
}
