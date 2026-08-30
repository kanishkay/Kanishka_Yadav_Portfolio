import React from 'react';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('work');
    } else {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('contact');
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-8 sm:pt-12 pb-8 sm:pb-10 border-b border-[#DDD9D0] dark:border-[#283244]">
      <div className="space-y-5 max-w-[680px] mx-auto text-center">
        {/* Name & Academic Affiliation */}
        <div className="space-y-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#101A2E] dark:text-[#F3EFE6] tracking-tight leading-[1.15]">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-sm text-[#667085] dark:text-[#AAB0BA] font-sans tracking-wide">
            Data Science @ San José State University
          </p>
        </div>

        {/* Primary Actions & Subtle Contact Link */}
        <div className="pt-1 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleScrollToWork}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#101A2E] hover:bg-[#1B2940] text-[#F7F5F0] dark:bg-[#F3EFE6] dark:hover:bg-white dark:text-[#101A2E] text-xs font-medium rounded-sm transition-colors cursor-pointer"
          >
            <span>View Selected Work</span>
            <span className="text-[11px] leading-none text-[#C5AA76] dark:text-[#B6904D]">↓</span>
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-4 py-2 border border-[#DDD9D0] hover:border-[#B6904D] dark:border-[#283244] dark:hover:border-[#C2A164] bg-transparent hover:bg-[#FCFBF8] dark:hover:bg-[#121C2C] text-[#101A2E] dark:text-[#F3EFE6] text-xs font-medium rounded-sm transition-colors"
          >
            <span>Résumé</span>
            <ArrowUpRight className="w-3 h-3 text-[#B6904D] dark:text-[#C2A164] opacity-80" />
          </a>

          <button
            onClick={handleScrollToContact}
            className="text-xs text-[#667085] dark:text-[#AAB0BA] hover:text-[#101A2E] dark:hover:text-[#F3EFE6] underline underline-offset-4 decoration-[#DDD9D0] dark:decoration-[#283244] hover:decoration-[#B6904D] dark:hover:decoration-[#C2A164] transition-colors cursor-pointer ml-1"
          >
            Contact
          </button>
        </div>

        {/* Direct Location & Profile Channels */}
        <div className="pt-2 text-xs text-[#667085] dark:text-[#AAB0BA] flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-sans">
          <span>{PERSONAL_INFO.location}</span>
          <span className="text-[#DDD9D0] dark:text-[#283244]">&middot;</span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-[#667085] dark:text-[#AAB0BA] hover:text-[#101A2E] dark:hover:text-[#F3EFE6] transition-colors underline underline-offset-4 decoration-[#DDD9D0] dark:decoration-[#283244] hover:decoration-[#B6904D]"
          >
            Email
          </a>
          <span className="text-[#DDD9D0] dark:text-[#283244]">&middot;</span>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-[#667085] dark:text-[#AAB0BA] hover:text-[#101A2E] dark:hover:text-[#F3EFE6] transition-colors inline-flex items-center"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <span className="text-[#DDD9D0] dark:text-[#283244]">&middot;</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-[#667085] dark:text-[#AAB0BA] hover:text-[#101A2E] dark:hover:text-[#F3EFE6] transition-colors inline-flex items-center"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
