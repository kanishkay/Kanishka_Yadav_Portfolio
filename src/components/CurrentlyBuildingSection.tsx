import React from 'react';
import { ArrowRight, Github, Sparkles, Cpu, Search, Activity, Bot } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/projectsData';
import { Project } from '../types/portfolio';

interface CurrentlyBuildingSectionProps {
  onSelectProject: (project: Project) => void;
  scrollToSection: (sectionId: string) => void;
}

interface BuildingItem {
  id: string;
  title: string;
  tagline: string;
  oneSentence: string;
  techs: string[];
  icon: React.ElementType;
  githubUrl?: string;
  accentColor: string;
}

const BUILDING_ITEMS: BuildingItem[] = [
  {
    id: 'autopilot-ai',
    title: 'AutoPilot AI',
    tagline: 'Computer-use AI service advisor for auto repair shops',
    oneSentence: 'Computer-use AI service advisor using NVIDIA Nemotron and Holo to diagnose issues, source parts, and produce human-approved repair recommendations.',
    techs: ['Next.js 16', 'TypeScript', 'NVIDIA Nemotron', 'Holo Computer-Use Agent', 'Human-in-the-Loop'],
    icon: Cpu,
    githubUrl: 'https://github.com/kanishkay/computer-use',
    accentColor: 'from-teal-500/20 to-emerald-500/5',
  },
  {
    id: 'agentis-matching-platform',
    title: 'AGENTIS',
    tagline: 'Multi-agent AI platform for clinical trial matching',
    oneSentence: 'Multi-agent AI platform helping clinical coordinators identify potentially relevant clinical trials.',
    techs: ['Python', 'IBM watsonx.ai', 'ClinicalTrials.gov REST APIs', 'Multi-Agent Systems', 'Explainable AI'],
    icon: Bot,
    accentColor: 'from-blue-500/20 to-indigo-500/5',
  },
  {
    id: 'acron-repo-kb',
    title: 'Acron',
    tagline: 'AI-powered repository knowledge base and semantic search',
    oneSentence: 'Semantic repository search using embeddings, Retrieval-Augmented Generation, and Tree-sitter parsing.',
    techs: ['Python', 'Flask', 'SQLite', 'sqlite-vec', 'SentenceTransformers', 'Tree-sitter'],
    icon: Search,
    githubUrl: 'https://github.com/kanishkay/acorn',
    accentColor: 'from-purple-500/20 to-pink-500/5',
  },
  {
    id: 'contextmeter',
    title: 'ContextMeter',
    tagline: 'Observability & optimization platform for AI-agent context',
    oneSentence: 'Observability platform for optimizing AI-agent context through deterministic replay, heuristic analysis, and Gemini reasoning.',
    techs: ['TypeScript', 'Express', 'Gemini API', 'Jaccard Similarity', 'Replay Evaluation', 'Zod'],
    icon: Activity,
    githubUrl: 'https://github.com/kanishkay/ContextMeter',
    accentColor: 'from-amber-500/20 to-orange-500/5',
  },
];

export function CurrentlyBuildingSection({ onSelectProject, scrollToSection }: CurrentlyBuildingSectionProps) {
  const handleViewCaseStudy = (id: string) => {
    const proj = PROJECTS.find((p) => p.id === id);
    if (proj) {
      onSelectProject(proj);
    }
  };

  return (
    <section id="currently-building" className="space-y-8 scroll-mt-24 pt-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-teal-400">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Flagship AI Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Currently Building & Featured Systems
          </h2>
          <p className="text-[#a1a1a1] text-sm sm:text-base max-w-2xl">
            My four core engineering systems spanning multi-agent workflows, computer-use agents, semantic search, and context observability.
          </p>
        </div>

        <button
          onClick={() => scrollToSection('projects')}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-400 hover:underline"
        >
          <span>View Machine Learning Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Grid of 4 Crisp Flagship Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {BUILDING_ITEMS.map((item) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              className="group flex flex-col justify-between p-7 sm:p-8 rounded-[32px] bg-[#0f0f11] border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden shadow-xl"
            >
              {/* Subtle Ambient Gradient */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${item.accentColor} rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500`} />

              <div className="space-y-5 relative z-10">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white shadow-inner group-hover:bg-white/10 transition-colors">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-[#a1a1a1] mt-0.5">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#a1a1a1] hover:text-white hover:bg-white/10 transition-all"
                      aria-label={`${item.title} GitHub Repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Visual Architectural Preview Thumbnail */}
                <div className="p-3.5 rounded-2xl bg-[#09090b] border border-white/10 font-mono text-xs space-y-2">
                  {item.id === 'autopilot-ai' && (
                    <div className="space-y-1 text-[11px] text-[#a1a1a1]">
                      <div className="flex items-center justify-between text-[#717171] border-b border-white/5 pb-1 text-[10px]">
                        <span>AGENT_RUNTIME // HOLO-COMPUTER-USE</span>
                        <span className="text-emerald-400 font-bold">HUMAN_APPROVAL_PENDING</span>
                      </div>
                      <div className="flex items-center gap-2 text-teal-300">
                        <span className="text-[#515151]">&gt;</span>
                        <span>[1/3] OBD Diagnostic Scan &rarr; Brake Caliper Wear detected</span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-300">
                        <span className="text-[#515151]">&gt;</span>
                        <span>[2/3] Catalog API query &rarr; Found OEM replacement part</span>
                      </div>
                    </div>
                  )}

                  {item.id === 'agentis-matching-platform' && (
                    <div className="space-y-1 text-[11px] text-[#a1a1a1]">
                      <div className="flex items-center justify-between text-[#717171] border-b border-white/5 pb-1 text-[10px]">
                        <span>WATSONX_AGENT // CLINICAL_TRIALS</span>
                        <span className="text-blue-400 font-bold">MATCH_SCORE: 92%</span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-300">
                        <span className="text-[#515151]">&gt;</span>
                        <span>Patient criteria &rarr; Oncology Phase II criteria</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-300">
                        <span className="text-[#515151]">&gt;</span>
                        <span>ClinicalTrials.gov REST &rarr; 4 matching trials shortlisted</span>
                      </div>
                    </div>
                  )}

                  {item.id === 'acron-repo-kb' && (
                    <div className="space-y-1 text-[11px] text-[#a1a1a1]">
                      <div className="flex items-center justify-between text-[#717171] border-b border-white/5 pb-1 text-[10px]">
                        <span>ACRON_ENGINE // TREE-SITTER_AST</span>
                        <span className="text-purple-400 font-bold">SQLITE-VEC (0.89)</span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-300">
                        <span className="text-[#515151]">&gt;</span>
                        <span>AST Chunking &rarr; Parsed function definitions</span>
                      </div>
                      <div className="flex items-center gap-2 text-teal-300">
                        <span className="text-[#515151]">&gt;</span>
                        <span>Hybrid Query &rarr; Similarity + Keyword vector search</span>
                      </div>
                    </div>
                  )}

                  {item.id === 'contextmeter' && (
                    <div className="space-y-1 text-[11px] text-[#a1a1a1]">
                      <div className="flex items-center justify-between text-[#717171] border-b border-white/5 pb-1 text-[10px]">
                        <span>CONTEXT_OBSERVER // TRACE_EVAL</span>
                        <span className="text-amber-400 font-bold">TOKEN_REDUCTION: -42%</span>
                      </div>
                      <div className="flex items-center gap-2 text-amber-300">
                        <span className="text-[#515151]">&gt;</span>
                        <span>Jaccard Pre-filter &rarr; Pruned redundant context</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-300">
                        <span className="text-[#515151]">&gt;</span>
                        <span>Gemini Trace Replay &rarr; Evaluated prompt fidelity</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* One Sentence Description */}
                <p className="text-sm sm:text-base text-[#d4d4d8] leading-relaxed font-normal">
                  {item.oneSentence}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.techs.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-[#a1a1a1] border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                <button
                  onClick={() => handleViewCaseStudy(item.id)}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-teal-400 hover:text-teal-300 transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
