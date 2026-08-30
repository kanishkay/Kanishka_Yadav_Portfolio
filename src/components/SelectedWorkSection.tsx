import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { FEATURED_PROJECTS, ADDITIONAL_PROJECTS } from '../data/projectsData';

export function SelectedWorkSection() {
  return (
    <section id="work" className="py-12 sm:py-20 border-b border-[#DDD9D0] dark:border-[#283244]">
      <div className="space-y-10 sm:space-y-12">
        {/* Section Heading */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#101A2E] dark:text-[#F3EFE6] tracking-tight">
            Selected Work
          </h2>
        </div>

        {/* Flagship Projects — Exactly 4 */}
        <div className="divide-y divide-[#DDD9D0] dark:divide-[#283244]">
          {FEATURED_PROJECTS.map((project) => (
            <article
              key={project.number}
              className="py-10 sm:py-12 first:pt-0 last:pb-0 space-y-4 max-w-[680px]"
            >
              {/* Project Number */}
              <div className="text-xs font-mono text-[#B6904D] dark:text-[#C2A164] font-medium select-none">
                {project.number}
              </div>

              {/* Title & Descriptor */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#101A2E] dark:text-[#F3EFE6] tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-[#667085] dark:text-[#AAB0BA] font-sans">
                  {project.descriptor}
                </p>
              </div>

              {/* One Concise Paragraph */}
              <p className="text-sm text-[#142036] dark:text-[#E2DDD3] leading-relaxed font-normal">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="text-xs text-[#8D96A5] dark:text-[#727B8C] font-sans">
                {project.technologies.join(' · ')}
              </div>

              {/* Links */}
              <div className="pt-1 flex flex-wrap items-center gap-5 text-xs font-sans">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="inline-flex items-center gap-1 text-[#101A2E] dark:text-[#F3EFE6] hover:text-[#B6904D] dark:hover:text-[#C2A164] transition-colors font-medium"
                  >
                    {link.label.toLowerCase() === 'github' ? (
                      <Github className="w-3.5 h-3.5" />
                    ) : (
                      <span>{link.label}</span>
                    )}
                    <ArrowUpRight className="w-3 h-3 text-[#B6904D] dark:text-[#C2A164]" />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Additional Work — Compact ML / Data Science */}
        <div className="pt-12 border-t border-[#DDD9D0] dark:border-[#283244] max-w-[680px] space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#8D96A5] dark:text-[#727B8C]">
            Additional Work
          </h3>

          <div className="divide-y divide-[#DDD9D0] dark:divide-[#283244]">
            {ADDITIONAL_PROJECTS.map((proj) => (
              <div
                key={proj.title}
                className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-xs"
              >
                <div className="space-y-0.5">
                  <span className="text-sm font-serif text-[#101A2E] dark:text-[#F3EFE6]">
                    {proj.title}
                  </span>
                  <div className="text-[#8D96A5] dark:text-[#727B8C] font-sans">
                    {proj.technologies}
                  </div>
                </div>

                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                  className="inline-flex items-center gap-1 text-[#101A2E] dark:text-[#F3EFE6] hover:text-[#B6904D] dark:hover:text-[#C2A164] transition-colors shrink-0 font-medium font-sans"
                >
                  <Github className="w-3.5 h-3.5" />
                  <ArrowUpRight className="w-3 h-3 text-[#B6904D] dark:text-[#C2A164]" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
