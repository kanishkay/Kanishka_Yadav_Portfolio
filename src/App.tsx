import React, { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>('home');

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sectionIds = ['home', 'work', 'experience', 'about', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        if (id === 'home' && window.scrollY < 200) {
          setActiveSection('home');
          break;
        }
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F5F0] dark:bg-[#0D1421] text-[#101A2E] dark:text-[#F3EFE6] font-sans selection:bg-[#B6904D]/20 selection:text-[#101A2E] dark:selection:bg-[#C2A164]/30 dark:selection:text-[#F3EFE6] transition-colors duration-200">
      {/* Editorial Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Single-Column Document Layout */}
      <main id="home" className="max-w-3xl mx-auto px-6 sm:px-8">
        {/* 1. Hero */}
        <HeroSection onNavigate={scrollToSection} />

        {/* 2. Selected Work & Additional Work */}
        <SelectedWorkSection />

        {/* 3. Professional Experience */}
        <ExperienceSection />

        {/* 4. Education */}
        <EducationSection />

        {/* 5. About */}
        <AboutSection />

        {/* 6. Contact */}
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
