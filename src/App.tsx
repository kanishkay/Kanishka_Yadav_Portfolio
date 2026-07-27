import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';
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
import { PROJECTS } from './data/projectsData';

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
    <div className="min-h-screen bg-[#050505] text-[#ededed] font-sans selection:bg-blue-500/30 selection:text-white transition-colors duration-300 relative overflow-x-hidden">
      {/* Background Ambient Glow Effects */}
      <div className="fixed top-[-100px] right-[-100px] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-100px] left-[-100px] w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Animated Particle Background Canvas */}
      <ParticleBackground theme={theme} />

      {/* Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenAIAssistant={() => setAiAssistantOpen(true)}
      />

      {/* Main Single-Page Sequential Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 space-y-28 pt-4 pb-16">
        {/* 1. Hero & 2. Currently Building */}
        <HomePage
          scrollToSection={scrollToSection}
          onSelectProject={setSelectedProject}
          onOpenAIAssistant={() => setAiAssistantOpen(true)}
        />

        {/* Developer Activity Feed */}
        <section id="activity" className="scroll-mt-24 pt-6 border-t border-white/5">
          <GithubActivitySection />
        </section>

        {/* 3. Professional Experience */}
        <section id="experience" className="scroll-mt-24 pt-10 border-t border-white/5">
          <ExperiencePage />
        </section>

        {/* Engineering Principles */}
        <section id="principles" className="scroll-mt-24 pt-10 border-t border-white/5">
          <EngineeringPrinciplesSection />
        </section>

        {/* 4. Machine Learning & Data Science Projects */}
        <section id="projects" className="scroll-mt-24 pt-10 border-t border-white/5">
          <ProjectsPage onSelectProject={setSelectedProject} />
        </section>

        {/* 6. Technical Skills */}
        <section id="skills" className="scroll-mt-24 pt-10 border-t border-white/5">
          <SkillsPage />
        </section>

        {/* Currently Exploring */}
        <section id="exploring" className="scroll-mt-24 pt-10 border-t border-white/5">
          <CurrentlyExploringSection />
        </section>

        {/* 7. About */}
        <section id="about" className="scroll-mt-24 pt-10 border-t border-white/5">
          <AboutPage />
        </section>

        {/* 8. Education & Fellowship */}
        <section id="education" className="scroll-mt-24 pt-10 border-t border-white/5">
          <EducationSection />
        </section>

        {/* 9. Technical Writing */}
        <section id="writing" className="scroll-mt-24 pt-10 border-t border-white/5">
          <BlogPage />
        </section>

        {/* 10. Resume Preview */}
        <section id="resume" className="scroll-mt-24 pt-10 border-t border-white/5">
          <ResumePage />
        </section>

        {/* 11. Contact Section */}
        <section id="contact" className="scroll-mt-24 pt-10 border-t border-white/5">
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
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl overflow-y-auto p-4 sm:p-8 flex justify-center items-start pt-12 sm:pt-16"
          >
            <div className="max-w-5xl w-full bg-[#0a0a0c] border border-white/10 rounded-[32px] p-6 sm:p-10 relative shadow-2xl my-auto">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none z-20 cursor-pointer"
                aria-label="Close case study"
              >
                <X className="w-5 h-5" />
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
