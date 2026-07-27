import React from 'react';
import { GraduationCap, Award, BookOpen, MapPin, CheckCircle2 } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export function EducationSection() {
  return (
    <section id="education" className="space-y-10 py-6">
      {/* Header */}
      <div className="space-y-4">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-teal-400">
          Academic Foundations
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Education & Fellowship
        </h2>
        <p className="text-[#a1a1a1] max-w-2xl text-sm sm:text-base">
          Academic education at San José State University and machine learning fellowship training with Break Through Tech AI.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {EDUCATION.map((edu, idx) => (
          <div
            key={idx}
            className="p-8 rounded-[32px] bg-[#0f0f0f] border border-white/10 space-y-6 shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-white/5 text-teal-400 border border-white/10">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                    <p className="text-xs font-mono text-teal-400">
                      {edu.degree} {edu.major ? `in ${edu.major}` : ''}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-[#a1a1a1] border border-white/10 shrink-0">
                  {edu.period}
                </span>
              </div>

              {edu.location && (
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#a1a1a1] pt-1">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-teal-400" />
                    {edu.location}
                  </span>
                </div>
              )}

              {/* Honors & Distinction */}
              {edu.honors && edu.honors.length > 0 && (
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono font-bold uppercase text-[#717171] flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    Honors & Distinctions
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {edu.honors.map((honor, hIdx) => (
                      <span
                        key={hIdx}
                        className="px-3 py-1 rounded-xl text-xs bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1.5"
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
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono font-bold uppercase text-[#717171] flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                    Focus Areas
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.relevantCoursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#151515] text-[#a1a1a1] border border-white/5"
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
        <div className="p-6 rounded-[32px] bg-[#0f0f0f] border border-white/10 space-y-4">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-teal-400" />
            <h3 className="text-base font-bold text-white">Certifications & Credentials</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.id} className="p-4 rounded-2xl bg-[#151515] border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                  <span className="text-xs font-mono text-teal-400">{cert.issueDate}</span>
                </div>
                <p className="text-xs text-[#717171] font-mono">{cert.issuer} {cert.academicAssociation && `(${cert.academicAssociation})`}</p>
                <p className="text-xs text-[#a1a1a1] leading-relaxed">{cert.description}</p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {cert.skills.map((s, sIdx) => (
                    <span key={sIdx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-[#a1a1a1]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
