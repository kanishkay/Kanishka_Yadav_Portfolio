import React from 'react';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="space-y-8 max-w-[680px]">
        {/* Section Heading */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#101A2E] dark:text-[#F3EFE6] tracking-tight">
            Contact
          </h2>
        </div>

        <p className="text-sm sm:text-base text-[#142036] dark:text-[#E2DDD3] leading-relaxed font-normal">
          For engineering opportunities, research discussions, or project collaboration, feel free to reach out directly.
        </p>

        {/* Direct Contact Channels */}
        <div className="space-y-3.5 text-sm text-[#101A2E] dark:text-[#F3EFE6] pt-1">
          <div className="flex items-center">
            <span className="text-[#8D96A5] dark:text-[#727B8C] text-xs w-28 inline-block font-sans">Email</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[#101A2E] dark:text-[#F3EFE6] hover:text-[#B6904D] dark:hover:text-[#C2A164] underline underline-offset-4 decoration-[#DDD9D0] dark:decoration-[#283244] hover:decoration-[#B6904D] transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>

          <div className="flex items-center">
            <span className="text-[#8D96A5] dark:text-[#727B8C] text-xs w-28 inline-flex items-center gap-1.5 font-sans">
              <Linkedin className="w-3.5 h-3.5 text-[#101A2E] dark:text-[#F3EFE6]" />
            </span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-[#101A2E] dark:text-[#F3EFE6] hover:text-[#B6904D] dark:hover:text-[#C2A164] transition-colors"
            >
              <span>linkedin.com/in/kanishkayadvv</span>
              <ArrowUpRight className="w-3 h-3 text-[#B6904D] dark:text-[#C2A164] opacity-80" />
            </a>
          </div>

          <div className="flex items-center">
            <span className="text-[#8D96A5] dark:text-[#727B8C] text-xs w-28 inline-flex items-center gap-1.5 font-sans">
              <Github className="w-3.5 h-3.5 text-[#101A2E] dark:text-[#F3EFE6]" />
            </span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-[#101A2E] dark:text-[#F3EFE6] hover:text-[#B6904D] dark:hover:text-[#C2A164] transition-colors"
            >
              <span>github.com/kanishkay</span>
              <ArrowUpRight className="w-3 h-3 text-[#B6904D] dark:text-[#C2A164] opacity-80" />
            </a>
          </div>

          <div className="flex items-center">
            <span className="text-[#8D96A5] dark:text-[#727B8C] text-xs w-28 inline-block font-sans">Location</span>
            <span className="text-[#667085] dark:text-[#AAB0BA]">{PERSONAL_INFO.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
