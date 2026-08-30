import React, { useState } from 'react';
import { ArrowUpRight, Sun, Moon, Menu, X } from 'lucide-react';
import { Theme } from '../hooks/useTheme';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  theme: Theme;
  toggleTheme: () => void;
}

export function Navbar({ activeSection, onNavigate, theme, toggleTheme }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'work', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#F7F5F0]/90 dark:bg-[#0D1421]/90 border-b border-[#DDD9D0] dark:border-[#283244] transition-colors duration-200">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        {/* Name / Brand */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-serif text-lg tracking-tight text-[#101A2E] dark:text-[#F3EFE6] group-hover:text-[#B6904D] dark:group-hover:text-[#C2A164] transition-colors font-medium">
            Kanishka Yadav
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center space-x-6 text-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors cursor-pointer tracking-wide ${
                  isActive
                    ? 'text-[#101A2E] dark:text-[#F3EFE6] font-medium'
                    : 'text-[#667085] dark:text-[#AAB0BA] hover:text-[#101A2E] dark:hover:text-[#F3EFE6]'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          {/* Canonical Résumé Direct PDF link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-[#667085] dark:text-[#AAB0BA] hover:text-[#B6904D] dark:hover:text-[#C2A164] transition-colors tracking-wide"
          >
            <span>Résumé</span>
            <ArrowUpRight className="w-3 h-3 opacity-70 text-[#B6904D] dark:text-[#C2A164]" />
          </a>

          {/* Minimal Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-[#667085] dark:text-[#AAB0BA] hover:text-[#101A2E] dark:hover:text-[#F3EFE6] transition-colors cursor-pointer p-1"
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="text-[#667085] dark:text-[#AAB0BA] hover:text-[#101A2E] dark:hover:text-[#F3EFE6] p-1"
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#667085] dark:text-[#AAB0BA] hover:text-[#101A2E] dark:hover:text-[#F3EFE6] p-1"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[#DDD9D0] dark:border-[#283244] bg-[#F7F5F0] dark:bg-[#0D1421] px-6 py-4 space-y-3 text-xs">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left py-1.5 text-[#101A2E] dark:text-[#F3EFE6] tracking-wide"
            >
              {item.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full py-1.5 text-[#667085] dark:text-[#AAB0BA] hover:text-[#B6904D] dark:hover:text-[#C2A164] border-t border-[#DDD9D0] dark:border-[#283244] pt-2"
          >
            <span>Résumé</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70 text-[#B6904D] dark:text-[#C2A164]" />
          </a>
        </div>
      )}
    </header>
  );
}
