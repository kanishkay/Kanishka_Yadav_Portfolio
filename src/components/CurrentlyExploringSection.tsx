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
    <section id="exploring" className="space-y-6 scroll-mt-24 pt-4">
      <div className="space-y-1">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-teal-400">
          <Compass className="w-3.5 h-3.5 text-teal-400" />
          <span>Active Learning & Technical Curiosity</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Currently Exploring
        </h2>
      </div>

      <div className="p-6 sm:p-8 rounded-[24px] bg-[#0f0f11] border border-white/10 shadow-xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {EXPLORING_TOPICS.map((topic, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
              <Sparkles className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  {topic.title}
                </h3>
                <p className="text-xs text-[#a1a1a1] leading-relaxed">
                  {topic.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
