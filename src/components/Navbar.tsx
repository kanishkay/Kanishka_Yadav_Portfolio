import React, { useState } from 'react';
import { Sun, Moon, Sparkles, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export type NavSectionId = 'home' | 'projects' | 'experience' | 'skills' | 'writing' | 'resume' | 'contact';

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
  { id: 'skills', label: 'Skills' },
  { id: 'writing', label: 'Writing' },
  { id: 'resume', label: 'Résumé' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ activeSection, onNavigate, theme, toggleTheme, onOpenAIAssistant }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full px-3 sm:px-4 py-3 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2.5 rounded-2xl bg-[#09090b]/80 border border-zinc-800/80 backdrop-blur-md shadow-lg shadow-black/20">
        {/* Brand / Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 group text-left focus:outline-none cursor-pointer"
        >
          <div className="w-7 h-7 rounded-lg bg-zinc-100 text-zinc-950 font-mono font-bold text-xs flex items-center justify-center transition-opacity hover:opacity-90">
            KY
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight text-zinc-100 flex items-center gap-1.5">
              Kanishka Yadav
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" title="Summer 2027 Internships" />
            </div>
            <div className="text-[11px] font-mono text-zinc-400">
              SJSU Data Science &apos;27
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/60 p-1 rounded-xl border border-zinc-800/60">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-3 py-1 text-xs font-medium rounded-lg transition-colors focus:outline-none cursor-pointer ${
                  isActive
                    ? 'text-zinc-100 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 rounded-lg bg-zinc-800 border border-zinc-700/60"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
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
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/70 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-xs font-medium transition-colors focus:outline-none cursor-pointer"
            title="Ask Kanishka's AI Assistant"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden sm:inline">AI Concierge</span>
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-zinc-300" /> : <Moon className="w-4 h-4 text-zinc-400" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden mt-2 rounded-xl bg-zinc-900 border border-zinc-800 p-3 shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-1.5">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 text-left rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-zinc-800 text-zinc-100 font-semibold'
                      : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200'
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

