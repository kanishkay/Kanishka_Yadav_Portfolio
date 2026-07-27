import React, { useState } from 'react';
import { Sun, Moon, Sparkles, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export type NavSectionId = 'home' | 'experience' | 'projects' | 'about' | 'skills' | 'education' | 'writing' | 'resume' | 'contact';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onOpenAIAssistant: () => void;
}

const NAV_ITEMS: { id: NavSectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'writing', label: 'Writing' },
  { id: 'resume', label: 'Résumé' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ activeSection, onNavigate, theme, toggleTheme, onOpenAIAssistant }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full px-3 sm:px-4 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2.5 rounded-full bg-[#0a0a0c]/85 border border-white/10 backdrop-blur-md shadow-xl shadow-black/40">
        {/* Brand / Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 group text-left focus:outline-none cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-white text-black font-mono font-bold text-xs flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
            KY
          </div>
          <div>
            <div className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              Kanishka Yadav
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Seeking Summer 2027 Internships" />
            </div>
            <div className="text-[10px] font-mono text-[#a1a1a1]">
              SJSU Data Science &apos;27
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-0.5 bg-[#111113]/90 p-1 rounded-full border border-white/10">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none cursor-pointer ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-[#a1a1a1] hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/15"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Actions & AI Assistant Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenAIAssistant}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium transition-all duration-200 focus:outline-none cursor-pointer group"
            title="Ask Kanishka's AI Assistant questions"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400 group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">AI Concierge</span>
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-[#a1a1a1] hover:text-white hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-300" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-[#a1a1a1] hover:text-white hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-2 rounded-2xl bg-[#0f0f11]/95 border border-white/10 backdrop-blur-xl p-4 shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-3 gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 text-center rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-white text-black font-bold'
                      : 'text-[#a1a1a1] hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
