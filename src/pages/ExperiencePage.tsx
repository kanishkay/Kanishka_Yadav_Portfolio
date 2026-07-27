import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/experienceData';

export function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-16">
      {/* Header */}
      <div className="space-y-4">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-teal-400">
          Career Experience
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Professional Experience
        </h1>
        <p className="text-[#a1a1a1] max-w-2xl text-sm sm:text-base">
          Industry developer internship and entrepreneurial AI engineering experience.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="space-y-8">
        {EXPERIENCES.map((item) => (
          <div
            key={item.id}
            className="p-6 sm:p-8 rounded-[32px] bg-[#0f0f0f] border border-white/10 space-y-4 shadow-xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-white/5 text-[#a1a1a1] border border-white/10">
                    {item.category}
                  </span>
                  {item.location && (
                    <span className="text-xs font-mono text-[#717171] flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-bold text-white mt-1">
                  {item.role}
                </h2>
                <p className="text-sm font-semibold text-blue-400">
                  {item.companyOrOrg}
                </p>
              </div>

              <div className="text-xs font-mono text-[#a1a1a1] flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-xl shrink-0 self-start sm:self-auto border border-white/5">
                <Calendar className="w-3.5 h-3.5 text-teal-400" />
                <span>{item.period}</span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-xs sm:text-sm text-[#a1a1a1] font-normal leading-relaxed">
              {item.summary}
            </p>

            {/* Responsibilities */}
            <div className="space-y-2 pt-2">
              <h3 className="text-xs font-mono font-semibold uppercase text-[#717171]">Key Contributions</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#a1a1a1]">
                {item.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {item.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-[#a1a1a1] border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
