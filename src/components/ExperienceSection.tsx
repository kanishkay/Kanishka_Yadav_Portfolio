import React from 'react';
import { EXPERIENCES } from '../data/experienceData';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-24 border-b border-[#DDD9D0] dark:border-[#283244]">
      <div className="space-y-12">
        {/* Section Heading */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#101A2E] dark:text-[#F3EFE6] tracking-tight">
            Professional Experience
          </h2>
        </div>

        {/* Minimal Editorial Experience Index */}
        <div className="divide-y divide-[#DDD9D0] dark:divide-[#283244]">
          {EXPERIENCES.map((exp) => (
            <article
              key={exp.id}
              className="py-10 sm:py-12 first:pt-0 last:pb-0 space-y-3.5 max-w-[680px]"
            >
              {/* Date / Period */}
              <div className="text-xs font-mono uppercase tracking-widest text-[#8D96A5] dark:text-[#727B8C]">
                {exp.period}
              </div>

              {/* Company & Role */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#101A2E] dark:text-[#F3EFE6] tracking-tight">
                  {exp.company}
                </h3>
                <p className="text-sm text-[#667085] dark:text-[#AAB0BA] font-sans">
                  {exp.role}
                  {exp.location && (
                    <span className="text-[#8D96A5] dark:text-[#727B8C]"> &middot; {exp.location}</span>
                  )}
                </p>
              </div>

              {/* Narrative Paragraph */}
              <p className="text-sm text-[#142036] dark:text-[#E2DDD3] leading-relaxed font-normal">
                {exp.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
