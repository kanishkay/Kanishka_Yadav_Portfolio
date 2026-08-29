import React from 'react';
import { Compass, Sparkles } from 'lucide-react';

const EXPLORING_TOPICS = [
  {
    title: 'AI evaluation frameworks',
    description: 'Automated test harness generation and structured benchmarking for multi-step LLM pipelines.',
  },
  {
    title: 'Agent observability',
    description: 'Tracing execution paths, token memory efficiency, and latency bottlenecks in agentic loops.',
  },
  {
    title: 'MCP-based tooling',
    description: 'Model Context Protocol standards for extensible tool discovery and secure agent context access.',
  },
  {
    title: 'Distributed AI infrastructure',
    description: 'Scaling vector retrieval, local model serving, and asynchronous background worker queues.',
  },
  {
    title: 'LLM application architecture',
    description: 'Designing resilient hybrid systems combining deterministic software rules with generative models.',
  },
];

export function CurrentlyExploringSection() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-400">
          <Compass className="w-3.5 h-3.5 text-blue-400" />
          <span>Active Learning & Research</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
          Currently Exploring
        </h2>
      </div>

      <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {EXPLORING_TOPICS.map((topic, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
              <Sparkles className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <h3 className="text-xs font-mono font-semibold text-zinc-100 uppercase tracking-wide">
                  {topic.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

