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
    <div className="max-w-4xl mx-auto space-y-10 pb-16">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-teal-400">
            Curriculum Vitae
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interactive Résumé
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-mono font-bold text-xs shadow-lg hover:bg-[#e1e1e1] transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Printable Resume Card */}
      <div className="p-8 sm:p-12 rounded-[32px] bg-[#0f0f0f] border border-white/10 space-y-8 shadow-2xl print:shadow-none print:border-none print:p-0 print:bg-white print:text-black">
        {/* Contact Header */}
        <div className="border-b border-white/5 print:border-black/10 pb-6 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-3xl font-extrabold text-white print:text-black">{PERSONAL_INFO.name}</h2>
              <p className="text-sm font-semibold text-teal-400 print:text-black font-mono">
                {PERSONAL_INFO.tagline}
              </p>
            </div>
            <div className="text-xs font-mono text-[#a1a1a1] print:text-black space-y-1 text-left sm:text-right">
              <p className="flex items-center sm:justify-end gap-1.5"><Mail className="w-3.5 h-3.5 text-blue-400 print:text-black" /> {PERSONAL_INFO.socials.email}</p>
              <p className="flex items-center sm:justify-end gap-1.5"><MapPin className="w-3.5 h-3.5 text-teal-400 print:text-black" /> {PERSONAL_INFO.location}</p>
              <p className="flex items-center sm:justify-end gap-1.5"><Globe className="w-3.5 h-3.5 text-emerald-400 print:text-black" /> github.com/kanishkay</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <section className="space-y-3">
          <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-teal-400 print:text-black flex items-center gap-2 border-b border-white/5 print:border-black/10 pb-1">
            <GraduationCap className="w-4 h-4" />
            <span>Education and Fellowship</span>
          </h3>
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm font-bold text-white print:text-black">
                <span>{edu.institution} &bull; {edu.degree} {edu.major ? `(${edu.major})` : ''}</span>
                <span className="text-xs font-mono font-normal text-[#717171] print:text-black">{edu.period}</span>
              </div>
              <p className="text-xs text-[#a1a1a1] print:text-black">
                <strong>Focus Areas:</strong> {edu.relevantCoursework.join(', ')}
              </p>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section className="space-y-4">
          <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-teal-400 print:text-black flex items-center gap-2 border-b border-white/5 print:border-black/10 pb-1">
            <Briefcase className="w-4 h-4" />
            <span>Experience</span>
          </h3>

          <div className="space-y-5">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="text-sm font-bold text-white print:text-black">
                    {exp.role} — <span className="text-blue-400 print:text-black">{exp.companyOrOrg}</span>
                  </span>
                  <span className="text-xs font-mono text-[#717171] print:text-black">
                    {exp.period}{exp.location ? ` | ${exp.location}` : ''}
                  </span>
                </div>
                <ul className="space-y-1 text-xs text-[#a1a1a1] print:text-black">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-1.5">
                      <span className="text-teal-400 font-bold">&bull;</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Key Projects */}
        <section className="space-y-4">
          <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-teal-400 print:text-black flex items-center gap-2 border-b border-white/5 print:border-black/10 pb-1">
            <FolderCheck className="w-4 h-4" />
            <span>Key Projects</span>
          </h3>

          <div className="space-y-4">
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className="flex items-center justify-between text-sm font-bold text-white print:text-black">
                  <span>{proj.title}</span>
                  <span className="text-xs font-mono text-[#717171] print:text-black">{proj.technologies.slice(0, 5).join(', ')}</span>
                </div>
                <p className="text-xs text-[#a1a1a1] print:text-black">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Summary */}
        <section className="space-y-2">
          <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-teal-400 print:text-black flex items-center gap-2 border-b border-white/5 print:border-black/10 pb-1">
            <Code2 className="w-4 h-4" />
            <span>Technical Skills</span>
          </h3>
          <div className="text-xs text-[#a1a1a1] print:text-black space-y-1">
            <p><strong>Languages:</strong> Python, Java, C++, SQL, R, HTML, TypeScript</p>
            <p><strong>AI & Machine Learning:</strong> TensorFlow, PyTorch, Scikit-learn, SentenceTransformers, NLTK, IBM watsonx.ai, NVIDIA Nemotron, Gemini API, RAG, Semantic search, Vector embeddings, Multi-agent systems, Computer-use agents, Explainable AI</p>
            <p><strong>Backend & Web:</strong> Flask, Express, Next.js, React, Vite, REST APIs, API integration</p>
            <p><strong>Databases & Storage:</strong> PostgreSQL, MySQL, SQLite, sqlite-vec, Flat-file JSON storage, Relational database design</p>
            <p><strong>Infrastructure & Tools:</strong> Git, GitHub, Docker, Docker Compose, Kubernetes, Ansible, Vercel, Google Cloud Run, Visual Studio Code</p>
          </div>
        </section>
      </div>
    </div>
  );
}
