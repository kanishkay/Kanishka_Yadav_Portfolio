import React from 'react';
import { GitCommit, GitBranch, ArrowUpRight, Clock, Activity } from 'lucide-react';
import { motion } from 'motion/react';

interface RepoActivity {
  name: string;
  description: string;
  lastCommitMessage: string;
  updatedAgo: string;
  branch: string;
  url: string;
  tech: string;
}

const RECENT_REPOS: RepoActivity[] = [
  {
    name: 'AutoPilot AI',
    description: 'Computer-use AI service advisor for auto repair shops.',
    lastCommitMessage: 'Refine human-in-the-loop repair order approval boundaries & execution fallback',
    updatedAgo: '2 days ago',
    branch: 'main',
    url: 'https://github.com/kanishkay',
    tech: 'TypeScript • Gemini API',
  },
  {
    name: 'ContextMeter',
    description: 'Context engineering and token optimization engine.',
    lastCommitMessage: 'Optimize Jaccard pre-filtering pipeline & token trace evaluation metrics',
    updatedAgo: '4 days ago',
    branch: 'main',
    url: 'https://github.com/kanishkay',
    tech: 'Python • Streamlit',
  },
  {
    name: 'Acron',
    description: 'AI-powered repository knowledge base and semantic search.',
    lastCommitMessage: 'Implement AST Tree-sitter code chunker with sqlite-vec embeddings',
    updatedAgo: '1 week ago',
    branch: 'main',
    url: 'https://github.com/kanishkay',
    tech: 'Python • sqlite-vec',
  },
];

export function GithubActivitySection() {
  return (
    <section id="activity" className="space-y-6 scroll-mt-24 pt-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-teal-400">
            <Activity className="w-3.5 h-3.5 text-teal-400" />
            <span>Developer Velocity</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Latest Engineering Activity
          </h2>
        </div>
        <a
          href="https://github.com/kanishkay"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#a1a1a1] hover:text-white transition-colors"
        >
          <span>View GitHub Feed</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {RECENT_REPOS.map((repo, idx) => (
          <motion.a
            key={idx}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2 }}
            className="p-5 rounded-2xl bg-[#0f0f11] border border-white/10 hover:border-white/20 transition-all space-y-3 group block shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-white group-hover:text-teal-400 transition-colors flex items-center gap-1.5">
                {repo.name}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#717171] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                <GitBranch className="w-3 h-3 text-blue-400" />
                {repo.branch}
              </span>
            </div>

            <p className="text-xs text-[#a1a1a1] line-clamp-2 font-normal leading-relaxed">
              {repo.description}
            </p>

            <div className="pt-2 border-t border-white/5 space-y-1.5">
              <div className="flex items-start gap-1.5 text-[11px] font-mono text-[#a1a1a1]">
                <GitCommit className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1 italic text-[#d4d4d8]">{repo.lastCommitMessage}</span>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-[#717171] pt-0.5">
                <span>{repo.tech}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-teal-400" />
                  {repo.updatedAgo}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
