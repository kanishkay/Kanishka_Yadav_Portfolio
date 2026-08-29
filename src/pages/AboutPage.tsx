import React from 'react';
import { Compass } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-400">
          <Compass className="w-3.5 h-3.5" />
          <span>Background</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
          About
        </h2>
      </div>

      {/* Main Concise Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4 shadow-sm max-w-3xl">
        <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
          I am an engineer focused on turning machine learning capabilities into reliable, production-ready software systems.
        </p>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
          Rather than treating AI as an isolated black box, I prioritize deterministic execution fallbacks, context observability, and human-in-the-loop oversight. I value clear software architecture, practical automation, and systems designed to operate safely in real-world environments.
        </p>
      </div>
    </div>
  );
}

