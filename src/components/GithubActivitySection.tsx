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
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-400">
            <Activity className="w-3.5 h-3.5 text-blue-400" />
            <span>Developer Velocity</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight">
            Latest Activity
          </h2>
        </div>
        <a
          href="https://github.com/kanishkay"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-xs font-mono font-medium text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          <span>GitHub Feed</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {RECENT_REPOS.map((repo, idx) => (
          <motion.a
            key={idx}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -1 }}
            transition={{ duration: 0.15 }}
            className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors space-y-2.5 group block"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                {repo.name}
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-zinc-800/60 border border-zinc-700/50">
                <GitBranch className="w-2.5 h-2.5 text-blue-400" />
                {repo.branch}
              </span>
            </div>

            <p className="text-xs text-zinc-400 line-clamp-2 font-normal leading-relaxed">
              {repo.description}
            </p>

            <div className="pt-2 border-t border-zinc-800/60 space-y-1.5">
              <div className="flex items-start gap-1.5 text-[11px] font-mono text-zinc-400">
                <GitCommit className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1 text-zinc-300">{repo.lastCommitMessage}</span>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-0.5">
                <span>{repo.tech}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5 text-zinc-400" />
                  {repo.updatedAgo}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

