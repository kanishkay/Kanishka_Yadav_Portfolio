import React from 'react';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="w-full border-t border-[#DDD9D0] dark:border-[#283244] py-12 text-[#8D96A5] dark:text-[#727B8C] transition-colors duration-200">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-baseline justify-between gap-4 text-xs font-sans">
        <div>
          <span className="text-[#101A2E] dark:text-[#F3EFE6] font-medium">{PERSONAL_INFO.name}</span>
          <span className="mx-2 text-[#DDD9D0] dark:text-[#283244]">&middot;</span>
          <span>San Jose, CA</span>
        </div>

        <div className="flex items-center gap-5">
          <button
            onClick={() => onNavigate('home')}
            className="text-[#667085] dark:text-[#AAB0BA] hover:text-[#101A2E] dark:hover:text-[#F3EFE6] transition-colors cursor-pointer"
          >
            Top
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-[#667085] dark:text-[#AAB0BA] hover:text-[#B6904D] dark:hover:text-[#C2A164] transition-colors"
          >
            <span>Résumé</span>
            <ArrowUpRight className="w-3 h-3 text-[#B6904D] dark:text-[#C2A164] opacity-80" />
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center text-[#667085] dark:text-[#AAB0BA] hover:text-[#101A2E] dark:hover:text-[#F3EFE6] transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center text-[#667085] dark:text-[#AAB0BA] hover:text-[#101A2E] dark:hover:text-[#F3EFE6] transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
