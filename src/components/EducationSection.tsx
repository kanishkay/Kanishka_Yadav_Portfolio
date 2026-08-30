import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';

export function EducationSection() {
  return (
    <section id="education" className="py-16 sm:py-24 border-b border-[#DDD9D0] dark:border-[#283244]">
      <div className="space-y-10 max-w-[680px]">
        {/* Section Heading */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#101A2E] dark:text-[#F3EFE6] tracking-tight">
            Education
          </h2>
        </div>

        {/* Compact Education Entries */}
        <div className="space-y-8">
          {EDUCATION_DATA.map((edu) => (
            <article key={edu.institution} className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-medium text-[#101A2E] dark:text-[#F3EFE6] inline">
                    {edu.institution}
                  </h3>
                  <span className="text-[#DDD9D0] dark:text-[#283244] mx-2">&mdash;</span>
                  <span className="text-sm font-sans text-[#667085] dark:text-[#AAB0BA]">
                    {edu.degree}
                  </span>
                </div>
                <div className="text-xs text-[#8D96A5] dark:text-[#727B8C] shrink-0 font-sans">
                  {edu.period}
                </div>
              </div>

              {edu.details && (
                <p className="text-xs text-[#667085] dark:text-[#AAB0BA] leading-relaxed">
                  {edu.details}
                </p>
              )}

              {edu.coursework && edu.coursework.length > 0 && (
                <div className="text-xs text-[#8D96A5] dark:text-[#727B8C] pt-0.5">
                  <span className="text-[#667085] dark:text-[#AAB0BA]">Coursework: </span>
                  {edu.coursework.join(' · ')}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
