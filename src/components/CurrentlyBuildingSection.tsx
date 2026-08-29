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
}

const BUILDING_ITEMS: BuildingItem[] = [
  {
    id: 'autopilot-ai',
    title: 'AutoPilot AI',
    tagline: 'Computer-use AI service advisor for auto repair shops',
    oneSentence: 'Computer-use AI service advisor using NVIDIA Nemotron and Holo to diagnose issues, source parts, and produce human-approved repair recommendations.',
    techs: ['Next.js 16', 'TypeScript', 'NVIDIA Nemotron', 'Holo Agent', 'Human-in-the-Loop'],
    icon: Cpu,
    githubUrl: 'https://github.com/kanishkay/computer-use',
  },
  {
    id: 'agentis-matching-platform',
    title: 'AGENTIS',
    tagline: 'Multi-agent AI platform for clinical trial matching',
    oneSentence: 'Multi-agent AI platform helping clinical coordinators identify and filter potentially relevant clinical trials.',
    techs: ['Python', 'IBM watsonx.ai', 'ClinicalTrials.gov APIs', 'Multi-Agent', 'Explainable AI'],
    icon: Bot,
  },
  {
    id: 'acron-repo-kb',
    title: 'Acron',
    tagline: 'AI-powered repository knowledge base and semantic search',
    oneSentence: 'Semantic repository search using embeddings, Retrieval-Augmented Generation, and Tree-sitter parsing.',
    techs: ['Python', 'Flask', 'SQLite', 'sqlite-vec', 'SentenceTransformers', 'Tree-sitter'],
    icon: Search,
    githubUrl: 'https://github.com/kanishkay/acorn',
  },
  {
    id: 'contextmeter',
    title: 'ContextMeter',
    tagline: 'Observability & optimization platform for AI-agent context',
    oneSentence: 'Observability platform for optimizing AI-agent context through deterministic replay, heuristic analysis, and Gemini reasoning.',
    techs: ['TypeScript', 'Express', 'Gemini API', 'Jaccard Filter', 'Replay Eval', 'Zod'],
    icon: Activity,
    githubUrl: 'https://github.com/kanishkay/ContextMeter',
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
    <section id="currently-building" className="space-y-6 scroll-mt-24 pt-4">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-400">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Flagship Systems</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
            Currently Building & Featured Systems
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl">
            Core engineering systems across multi-agent workflows, computer-use agents, semantic search, and context observability.
          </p>
        </div>

        <button
          onClick={() => scrollToSection('projects')}
          className="inline-flex items-center gap-1 text-xs font-mono font-medium text-blue-400 hover:text-blue-300 transition-colors"
        >
          <span>All ML Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Grid of 4 Crisp Flagship Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {BUILDING_ITEMS.map((item) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={item.id}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
              className="group flex flex-col justify-between p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 relative overflow-hidden shadow-sm"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/60 text-zinc-200">
                      <IconComponent className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-zinc-400 mt-0.5">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-zinc-800/60 border border-zinc-700/60 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
                      aria-label={`${item.title} GitHub Repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Visual Architectural Preview Terminal */}
                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 font-mono text-xs space-y-1.5">
                  {item.id === 'autopilot-ai' && (
                    <div className="space-y-1 text-[11px] text-zinc-400">
                      <div className="flex items-center justify-between text-zinc-500 border-b border-zinc-800/60 pb-1 text-[10px]">
                        <span>RUNTIME // HOLO-COMPUTER-USE</span>
                        <span className="text-emerald-400 font-medium">APPROVAL_READY</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-300">
                        <span className="text-zinc-600">&gt;</span>
                        <span>[1/3] OBD Diagnostic Scan &rarr; Brake Wear detected</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-400">
                        <span className="text-zinc-600">&gt;</span>
                        <span>[2/3] Catalog API query &rarr; Found OEM replacement part</span>
                      </div>
                    </div>
                  )}

                  {item.id === 'agentis-matching-platform' && (
                    <div className="space-y-1 text-[11px] text-zinc-400">
                      <div className="flex items-center justify-between text-zinc-500 border-b border-zinc-800/60 pb-1 text-[10px]">
                        <span>WATSONX_AGENT // CLINICAL_TRIALS</span>
                        <span className="text-blue-400 font-medium">MATCH_SCORE: 92%</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-300">
                        <span className="text-zinc-600">&gt;</span>
                        <span>Patient criteria &rarr; Oncology Phase II parameters</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-400">
                        <span className="text-zinc-600">&gt;</span>
                        <span>ClinicalTrials.gov REST &rarr; 4 matching trials identified</span>
                      </div>
                    </div>
                  )}

                  {item.id === 'acron-repo-kb' && (
                    <div className="space-y-1 text-[11px] text-zinc-400">
                      <div className="flex items-center justify-between text-zinc-500 border-b border-zinc-800/60 pb-1 text-[10px]">
                        <span>ACRON_ENGINE // TREE-SITTER_AST</span>
                        <span className="text-blue-400 font-medium">SQLITE-VEC (0.89)</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-300">
                        <span className="text-zinc-600">&gt;</span>
                        <span>AST Chunking &rarr; Parsed class & function definitions</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-400">
                        <span className="text-zinc-600">&gt;</span>
                        <span>Hybrid Query &rarr; Similarity + Keyword vector search</span>
                      </div>
                    </div>
                  )}

                  {item.id === 'contextmeter' && (
                    <div className="space-y-1 text-[11px] text-zinc-400">
                      <div className="flex items-center justify-between text-zinc-500 border-b border-zinc-800/60 pb-1 text-[10px]">
                        <span>CONTEXT_OBSERVER // TRACE_EVAL</span>
                        <span className="text-emerald-400 font-medium">TOKEN_SAVINGS: -42%</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-300">
                        <span className="text-zinc-600">&gt;</span>
                        <span>Jaccard Pre-filter &rarr; Pruned duplicate history context</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-400">
                        <span className="text-zinc-600">&gt;</span>
                        <span>Gemini Trace Replay &rarr; Evaluated prompt fidelity</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* One Sentence Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {item.oneSentence}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.techs.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-zinc-800/60 text-zinc-300 border border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-5 border-t border-zinc-800/60 flex items-center justify-between">
                <button
                  onClick={() => handleViewCaseStudy(item.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-400 hover:text-blue-300 transition-colors cursor-pointer group-hover:translate-x-0.5 duration-150"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

