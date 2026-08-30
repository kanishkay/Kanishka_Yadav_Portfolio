import React from 'react';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 border-b border-[#DDD9D0] dark:border-[#283244]">
      <div className="space-y-8 max-w-[680px]">
        {/* Section Heading */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#101A2E] dark:text-[#F3EFE6] tracking-tight">
            About
          </h2>
        </div>

        {/* Narrative Paragraphs */}
        <div className="space-y-4 text-sm sm:text-base text-[#142036] dark:text-[#E2DDD3] leading-relaxed font-normal">
          {PERSONAL_INFO.aboutParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Direct Links */}
        <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#667085] dark:text-[#AAB0BA]">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-[#101A2E] dark:text-[#F3EFE6] hover:text-[#B6904D] dark:hover:text-[#C2A164] transition-colors underline underline-offset-4 decoration-[#DDD9D0] dark:decoration-[#283244] hover:decoration-[#B6904D]"
          >
            <span>Résumé</span>
            <ArrowUpRight className="w-3 h-3 text-[#B6904D] dark:text-[#C2A164]" />
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center gap-1 hover:text-[#101A2E] dark:hover:text-[#F3EFE6] transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <ArrowUpRight className="w-3 h-3 text-[#B6904D] dark:text-[#C2A164]" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-1 hover:text-[#101A2E] dark:hover:text-[#F3EFE6] transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <ArrowUpRight className="w-3 h-3 text-[#B6904D] dark:text-[#C2A164]" />
          </a>
        </div>
      </div>
    </section>
  );
}
