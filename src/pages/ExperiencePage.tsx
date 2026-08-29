import React from 'react';
import { Calendar, MapPin, CheckCircle2, Briefcase } from 'lucide-react';
import { EXPERIENCES } from '../data/experienceData';

export function ExperiencePage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-400">
          <Briefcase className="w-3.5 h-3.5 text-blue-400" />
          <span>Track Record</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
          Professional Experience
        </h2>
        <p className="text-zinc-400 max-w-2xl text-xs sm:text-sm">
          Industry developer internship and entrepreneurial AI engineering experience.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="space-y-4">
        {EXPERIENCES.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors space-y-4 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-zinc-800/60 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/60">
                    {item.category}
                  </span>
                  {item.location && (
                    <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-500" />
                      {item.location}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-zinc-100 mt-2 tracking-tight">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-blue-400">
                  {item.companyOrOrg}
                </p>
              </div>

              <div className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 bg-zinc-800/60 px-2.5 py-1 rounded-lg shrink-0 self-start sm:self-auto border border-zinc-700/50">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                <span>{item.period}</span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
              {item.summary}
            </p>

            {/* Responsibilities */}
            <div className="space-y-2 pt-1">
              <h4 className="text-xs font-mono font-medium text-zinc-400 uppercase tracking-wider">
                Key Highlights
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
                {item.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {item.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-zinc-800/60 text-zinc-300 border border-zinc-700/50"
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

