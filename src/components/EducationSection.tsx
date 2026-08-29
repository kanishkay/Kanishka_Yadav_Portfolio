import React from 'react';
import { GraduationCap, Award, BookOpen, MapPin, CheckCircle2 } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export function EducationSection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-400">
          <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
          <span>Academic Foundations</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
          Education & Fellowship
        </h2>
        <p className="text-zinc-400 max-w-2xl text-xs sm:text-sm leading-relaxed">
          Academic education at San José State University and machine learning fellowship training with Break Through Tech AI.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {EDUCATION.map((edu, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4 shadow-sm relative overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition-colors"
          >
            <div className="space-y-3.5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-800/80 text-blue-400 border border-zinc-700/60">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-100">{edu.institution}</h3>
                    <p className="text-xs font-mono text-blue-400">
                      {edu.degree} {edu.major ? `in ${edu.major}` : ''}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-zinc-800/60 text-zinc-400 border border-zinc-700/50 shrink-0">
                  {edu.period}
                </span>
              </div>

              {edu.location && (
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 pt-0.5">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-zinc-500" />
                    {edu.location}
                  </span>
                </div>
              )}

              {/* Honors & Distinction */}
              {edu.honors && edu.honors.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-mono font-medium text-zinc-400 flex items-center gap-1.5 uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    Honors & Distinctions
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.honors.map((honor, hIdx) => (
                      <span
                        key={hIdx}
                        className="px-2.5 py-0.5 rounded-md text-xs bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>{honor}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Relevant Coursework */}
              {edu.relevantCoursework && edu.relevantCoursework.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-mono font-medium text-zinc-400 flex items-center gap-1.5 uppercase tracking-wider">
                    <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                    Focus Areas
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {edu.relevantCoursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2 py-0.5 rounded text-xs font-mono bg-zinc-950/80 text-zinc-400 border border-zinc-800"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Banner */}
      {CERTIFICATIONS && CERTIFICATIONS.length > 0 && (
        <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-3 shadow-sm">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-400" />
            <h3 className="text-sm font-bold text-zinc-100">Certifications & Credentials</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.id} className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-zinc-100">{cert.title}</h4>
                  <span className="text-[11px] font-mono text-blue-400">{cert.issueDate}</span>
                </div>
                <p className="text-[11px] text-zinc-500 font-mono">{cert.issuer} {cert.academicAssociation && `(${cert.academicAssociation})`}</p>
                <p className="text-xs text-zinc-400 leading-relaxed">{cert.description}</p>
                <div className="flex flex-wrap gap-1 pt-0.5">
                  {cert.skills.map((s, sIdx) => (
                    <span key={sIdx} className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-zinc-800/60 text-zinc-400">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

