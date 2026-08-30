import React from 'react';
import { Printer, GraduationCap, Briefcase, Code2, FolderCheck, Mail, MapPin, Globe } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';
import { EXPERIENCES } from '../data/experienceData';
import { PROJECTS } from '../data/projectsData';

export function ResumePage() {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800 pb-4">
        <div>
          <span className="text-xs font-mono font-medium text-blue-400">
            Curriculum Vitae
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
            Interactive Résumé
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 text-zinc-950 font-mono font-semibold text-xs shadow hover:bg-white transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Printable Resume Card */}
      <div className="p-6 sm:p-10 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-6 shadow-sm print:shadow-none print:border-none print:p-0 print:bg-white print:text-black">
        {/* Contact Header */}
        <div className="border-b border-zinc-800 print:border-black/10 pb-5 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
            <div>
              <h3 className="text-2xl font-bold text-zinc-100 print:text-black">{PERSONAL_INFO.name}</h3>
              <p className="text-xs font-medium text-blue-400 print:text-black font-mono">
                {PERSONAL_INFO.tagline}
              </p>
            </div>
            <div className="text-xs font-mono text-zinc-400 print:text-black space-y-0.5 text-left sm:text-right">
              <p className="flex items-center sm:justify-end gap-1.5"><Mail className="w-3 h-3 text-blue-400 print:text-black" /> {PERSONAL_INFO.socials.email}</p>
              <p className="flex items-center sm:justify-end gap-1.5"><MapPin className="w-3 h-3 text-zinc-400 print:text-black" /> {PERSONAL_INFO.location}</p>
              <p className="flex items-center sm:justify-end gap-1.5"><Globe className="w-3 h-3 text-emerald-400 print:text-black" /> github.com/kanishkay</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <section className="space-y-2.5">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 print:text-black flex items-center gap-1.5 border-b border-zinc-800/80 print:border-black/10 pb-1">
            <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
            <span>Education & Fellowship</span>
          </h4>
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-zinc-200 print:text-black">
                <span>{edu.institution} &bull; {edu.degree} {edu.major ? `(${edu.major})` : ''}</span>
                <span className="text-[11px] font-mono font-normal text-zinc-500 print:text-black">{edu.period}</span>
              </div>
              <p className="text-xs text-zinc-400 print:text-black leading-relaxed">
                <span className="text-zinc-300">Focus:</span> {edu.relevantCoursework.join(', ')}
              </p>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section className="space-y-3">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 print:text-black flex items-center gap-1.5 border-b border-zinc-800/80 print:border-black/10 pb-1">
            <Briefcase className="w-3.5 h-3.5 text-blue-400" />
            <span>Experience</span>
          </h4>

          <div className="space-y-4">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="text-xs font-bold text-zinc-200 print:text-black">
                    {exp.role} — <span className="text-blue-400 print:text-black">{exp.companyOrOrg}</span>
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500 print:text-black">
                    {exp.period}{exp.location ? ` | ${exp.location}` : ''}
                  </span>
                </div>
                <ul className="space-y-1 text-xs text-zinc-400 print:text-black">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-1.5">
                      <span className="text-zinc-500 font-bold">&bull;</span>
                      <span className="leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Key Projects */}
        <section className="space-y-3">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 print:text-black flex items-center gap-1.5 border-b border-zinc-800/80 print:border-black/10 pb-1">
            <FolderCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Key Projects</span>
          </h4>

          <div className="space-y-3">
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-0.5">
                <div className="flex items-center justify-between text-xs font-bold text-zinc-200 print:text-black">
                  <span>{proj.title}</span>
                  <span className="text-[10px] font-mono text-zinc-500 print:text-black">{proj.technologies.slice(0, 5).join(', ')}</span>
                </div>
                <p className="text-xs text-zinc-400 print:text-black leading-relaxed">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Summary */}
        <section className="space-y-2">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 print:text-black flex items-center gap-1.5 border-b border-zinc-800/80 print:border-black/10 pb-1">
            <Code2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Technical Skills</span>
          </h4>
          <div className="text-xs text-zinc-400 print:text-black space-y-1 leading-relaxed">
            <p><strong className="text-zinc-200">Languages:</strong> Python, Java, C++, SQL, R, HTML, TypeScript</p>
            <p><strong className="text-zinc-200">AI & Machine Learning:</strong> TensorFlow, PyTorch, Scikit-learn, SentenceTransformers, NLTK, IBM watsonx.ai, NVIDIA Nemotron, Gemini API, RAG, Semantic search, Vector embeddings, Multi-agent systems, Computer-use agents, Explainable AI</p>
            <p><strong className="text-zinc-200">Backend & Web:</strong> Flask, Express, Next.js, React, Vite, REST APIs, API integration</p>
            <p><strong className="text-zinc-200">Databases & Storage:</strong> PostgreSQL, MySQL, SQLite, sqlite-vec, Flat-file JSON storage, Relational database design</p>
            <p><strong className="text-zinc-200">Infrastructure & Tools:</strong> Git, GitHub, Docker, Docker Compose, Kubernetes, Ansible, Google Cloud Run, Visual Studio Code</p>
          </div>
        </section>
      </div>
    </div>
  );
}
