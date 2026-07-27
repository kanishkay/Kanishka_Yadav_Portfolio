import React, { useState } from 'react';
import { Search, Code2, Cpu, Database, Layers, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/skillsData';
import { PROJECTS } from '../data/projectsData';

// Mapping of skill names to where they are demonstrated
const SKILL_USAGE_MAP: Record<string, string[]> = {
  'Python': ['AGENTIS', 'Acron', 'LendingClub Loan Default', 'Credit Card Customer Segmentation', 'YouTube Spam Detection'],
  'TypeScript': ['AutoPilot AI', 'ContextMeter'],
  'Java': ['Data Structures & Algorithms', 'SAP America Internship'],
  'C++': ['Data Structures & Algorithms', 'Computer Systems'],
  'SQL': ['SAP America Internship', 'DBMS Coursework', 'Acron'],
  'Docker': ['SAP America Internship', 'AutoPilot AI', 'ContextMeter'],
  'Docker Compose': ['AutoPilot AI'],
  'Kubernetes': ['SAP America Internship'],
  'Ansible': ['SAP America Internship'],
  'TensorFlow': ['LendingClub Loan Default Prediction'],
  'PyTorch': ['Break Through Tech AI Fellowship'],
  'Scikit-learn': ['LendingClub Loan Default', 'Credit Card Segmentation', 'YouTube Spam Detection'],
  'SentenceTransformers': ['Acron — AI-Powered Repository Knowledge Base'],
  'Tree-sitter': ['Acron — AI-Powered Repository Knowledge Base'],
  'IBM watsonx.ai': ['AGENTIS Clinical Trial Matching Platform'],
  'NVIDIA Nemotron': ['AutoPilot AI Service Advisor'],
  'Gemini API': ['ContextMeter Observability Platform'],
  'Flask': ['Acron'],
  'Express': ['ContextMeter'],
  'Next.js': ['AutoPilot AI'],
  'React': ['AutoPilot AI', 'ContextMeter'],
  'SQLite': ['Acron'],
  'sqlite-vec': ['Acron'],
  'PostgreSQL': ['SAP America Internship'],
  'MySQL': ['Database Management Systems'],
  'Retrieval-Augmented Generation': ['Acron'],
  'Multi-agent systems': ['AGENTIS'],
  'Computer-use agents': ['AutoPilot AI'],
  'Context engineering': ['ContextMeter'],
  'Human-in-the-loop AI': ['AutoPilot AI'],
  'Explainable AI': ['AGENTIS'],
  'Vector embeddings': ['Acron'],
  'NLTK': ['YouTube Spam Detection NLP'],
  'Vercel': ['ContextMeter'],
  'Google Cloud Run': ['ContextMeter'],
};

export function SkillsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <div className="space-y-8 scroll-mt-24 pt-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-teal-400">
          <Code2 className="w-3.5 h-3.5" />
          <span>Engineering Stack</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Technical Skills
        </h2>
        <p className="text-[#a1a1a1] max-w-2xl text-sm sm:text-base leading-relaxed">
          Categorized technical stack across AI/ML frameworks, backend systems, database engines, and infrastructure. Click any skill tag to view where it is applied in my work.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-2 rounded-2xl bg-[#0f0f11] border border-white/10 shadow-lg">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter skills (e.g. Docker, Python, RAG)..."
            className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-[#151515] border border-white/10 text-white placeholder-[#717171] focus:outline-none focus:border-white/30"
          />
        </div>

        {selectedSkill && (
          <button
            onClick={() => setSelectedSkill(null)}
            className="text-xs font-mono text-teal-400 hover:underline px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/20"
          >
            Clear Selected Skill ({selectedSkill}) &times;
          </button>
        )}
      </div>

      {/* Selected Skill Banner */}
      {selectedSkill && (
        <div className="p-5 rounded-2xl bg-[#141418] border border-teal-500/30 text-white space-y-2 shadow-xl animate-fadeIn">
          <div className="flex items-center gap-2 text-teal-400 font-mono text-xs font-bold uppercase">
            <CheckCircle2 className="w-4 h-4" />
            <span>Skill Selected: {selectedSkill}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#d4d4d8]">
            <span className="font-semibold text-white">Demonstrated in:</span>
            {SKILL_USAGE_MAP[selectedSkill] ? (
              SKILL_USAGE_MAP[selectedSkill].map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-300 font-mono text-xs font-medium"
                >
                  {item}
                </span>
              ))
            ) : (
              <span className="text-[#a1a1a1] italic">Applied across coursework, fellowships, and software engineering.</span>
            )}
          </div>
        </div>
      )}

      {/* Skill Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((cat) => {
          const filteredSkills = cat.skills.filter((skill) =>
            skill.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (filteredSkills.length === 0) return null;

          return (
            <div
              key={cat.categoryKey}
              className="p-5 sm:p-6 rounded-[24px] bg-[#0f0f11] border border-white/10 space-y-3 shadow-xl hover:border-white/20 transition-colors"
            >
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">{cat.title}</h3>
                <p className="text-xs text-[#a1a1a1] mt-0.5 font-normal leading-relaxed">{cat.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {filteredSkills.map((skill, idx) => {
                  const isSelected = selectedSkill === skill;
                  const isMapped = Boolean(SKILL_USAGE_MAP[skill]);

                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedSkill(isSelected ? null : skill)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-teal-400 text-black font-bold shadow-lg scale-105'
                          : isMapped
                          ? 'bg-[#18181c] text-white border border-white/10 hover:border-teal-500/50 hover:text-teal-300'
                          : 'bg-[#151515] text-[#a1a1a1] border border-white/5 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {skill}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
