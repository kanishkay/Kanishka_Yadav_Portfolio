import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AIAssistantDrawer } from './components/AIAssistantDrawer';
import { EducationSection } from './components/EducationSection';
import { EngineeringPrinciplesSection } from './components/EngineeringPrinciplesSection';
import { GithubActivitySection } from './components/GithubActivitySection';
import { CurrentlyExploringSection } from './components/CurrentlyExploringSection';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { SkillsPage } from './pages/SkillsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { BlogPage } from './pages/BlogPage';
import { ResumePage } from './pages/ResumePage';
import { ContactPage } from './pages/ContactPage';

import { Project } from './types/portfolio';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Scroll observer to highlight active navbar item
  useEffect(() => {
    const sectionIds = [
      'home',
      'currently-building',
      'experience',
      'projects',
      'skills',
      'about',
      'education',
      'writing',
      'resume',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            if (id === 'currently-building') {
              setActiveSection('home');
            } else {
              setActiveSection(id);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-blue-500/20 selection:text-white transition-colors duration-200 relative overflow-x-hidden">
      {/* Subtle modern top lighting gradient & grid pattern */}
      <div className="absolute top-0 inset-x-0 h-[480px] bg-gradient-to-b from-blue-500/[0.05] via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenAIAssistant={() => setAiAssistantOpen(true)}
      />

      {/* Main Single-Page Sequential Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-24 pt-4 pb-20">
        {/* 1. Hero & 2. Currently Building */}
        <HomePage
          scrollToSection={scrollToSection}
          onSelectProject={setSelectedProject}
          onOpenAIAssistant={() => setAiAssistantOpen(true)}
        />

        {/* Developer Activity Feed */}
        <section id="activity" className="scroll-mt-24 pt-10 border-t border-zinc-800/60">
          <GithubActivitySection />
        </section>

        {/* 3. Professional Experience */}
        <section id="experience" className="scroll-mt-24 pt-10 border-t border-zinc-800/60">
          <ExperiencePage />
        </section>

        {/* Engineering Principles */}
        <section id="principles" className="scroll-mt-24 pt-10 border-t border-zinc-800/60">
          <EngineeringPrinciplesSection />
        </section>

        {/* 4. Machine Learning & Data Science Projects */}
        <section id="projects" className="scroll-mt-24 pt-10 border-t border-zinc-800/60">
          <ProjectsPage onSelectProject={setSelectedProject} />
        </section>

        {/* 6. Technical Skills */}
        <section id="skills" className="scroll-mt-24 pt-10 border-t border-zinc-800/60">
          <SkillsPage />
        </section>

        {/* Currently Exploring */}
        <section id="exploring" className="scroll-mt-24 pt-10 border-t border-zinc-800/60">
          <CurrentlyExploringSection />
        </section>

        {/* 7. About */}
        <section id="about" className="scroll-mt-24 pt-10 border-t border-zinc-800/60">
          <AboutPage />
        </section>

        {/* 8. Education & Fellowship */}
        <section id="education" className="scroll-mt-24 pt-10 border-t border-zinc-800/60">
          <EducationSection />
        </section>

        {/* 9. Technical Writing */}
        <section id="writing" className="scroll-mt-24 pt-10 border-t border-zinc-800/60">
          <BlogPage />
        </section>

        {/* 10. Resume Preview */}
        <section id="resume" className="scroll-mt-24 pt-10 border-t border-zinc-800/60">
          <ResumePage />
        </section>

        {/* 11. Contact Section */}
        <section id="contact" className="scroll-mt-24 pt-10 border-t border-zinc-800/60">
          <ContactPage />
        </section>
      </main>

      {/* 12. Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Project Case Study Deep-Dive Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md overflow-y-auto p-4 sm:p-6 flex justify-center items-start pt-12 sm:pt-16"
          >
            <div className="max-w-4xl w-full bg-[#121215] border border-zinc-800 rounded-2xl p-6 sm:p-8 relative shadow-2xl my-auto">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-zinc-800/60 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors focus:outline-none z-20 cursor-pointer"
                aria-label="Close case study"
              >
                <X className="w-4 h-4" />
              </button>

              <ProjectDetailPage
                project={selectedProject}
                onBack={() => setSelectedProject(null)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Assistant Drawer Modal */}
      <AIAssistantDrawer
        isOpen={aiAssistantOpen}
        onClose={() => setAiAssistantOpen(false)}
      />
    </div>
  );
}

