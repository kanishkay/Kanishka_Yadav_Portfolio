import React, { useState } from 'react';
import { Search, Code2, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/skillsData';

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
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-400">
          <Code2 className="w-3.5 h-3.5" />
          <span>Engineering Stack</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
          Technical Skills
        </h2>
        <p className="text-zinc-400 max-w-2xl text-xs sm:text-sm leading-relaxed">
          Categorized technical stack across AI/ML frameworks, backend systems, database engines, and infrastructure. Click any skill tag to view where it is applied in my work.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-2 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
        <div className="relative w-full sm:w-80">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter skills (e.g. Docker, Python, RAG)..."
            className="w-full pl-8 pr-3 py-1.5 rounded-lg text-xs bg-zinc-950/80 border border-zinc-800 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 font-mono"
          />
        </div>

        {selectedSkill && (
          <button
            onClick={() => setSelectedSkill(null)}
            className="text-xs font-mono text-blue-400 hover:text-blue-300 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 cursor-pointer"
          >
            Clear Selected ({selectedSkill}) &times;
          </button>
        )}
      </div>

      {/* Selected Skill Banner */}
      {selectedSkill && (
        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-100 space-y-2 shadow-sm">
          <div className="flex items-center gap-1.5 text-blue-400 font-mono text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Skill Selected: {selectedSkill}</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-300">
            <span className="font-medium text-zinc-400">Demonstrated in:</span>
            {SKILL_USAGE_MAP[selectedSkill] ? (
              SKILL_USAGE_MAP[selectedSkill].map((item, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md bg-blue-500/15 border border-blue-500/30 text-blue-300 font-mono text-xs"
                >
                  {item}
                </span>
              ))
            ) : (
              <span className="text-zinc-400 italic">Applied across coursework, fellowships, and software engineering.</span>
            )}
          </div>
        </div>
      )}

      {/* Skill Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SKILL_CATEGORIES.map((cat) => {
          const filteredSkills = cat.skills.filter((skill) =>
            skill.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (filteredSkills.length === 0) return null;

          return (
            <div
              key={cat.categoryKey}
              className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-3 hover:border-zinc-700 transition-colors shadow-sm"
            >
              <div>
                <h3 className="text-base font-bold text-zinc-100 tracking-tight">{cat.title}</h3>
                <p className="text-xs text-zinc-400 mt-0.5 font-normal leading-relaxed">{cat.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {filteredSkills.map((skill, idx) => {
                  const isSelected = selectedSkill === skill;
                  const isMapped = Boolean(SKILL_USAGE_MAP[skill]);

                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedSkill(isSelected ? null : skill)}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-zinc-100 text-zinc-950 font-bold border border-white'
                          : isMapped
                          ? 'bg-zinc-800/70 text-zinc-200 border border-zinc-700/60 hover:border-zinc-500 hover:text-white'
                          : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
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

