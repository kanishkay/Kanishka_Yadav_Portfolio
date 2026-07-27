import React from 'react';
import { Compass } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="space-y-6 scroll-mt-24 pt-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-teal-400">
          <Compass className="w-3.5 h-3.5" />
          <span>Background</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          About
        </h2>
      </div>

      {/* Main Concise Card */}
      <div className="p-8 sm:p-10 rounded-[32px] bg-[#0f0f11] border border-white/10 space-y-4 shadow-xl max-w-3xl">
        <p className="text-base sm:text-lg text-[#d4d4d8] leading-relaxed font-normal">
          I am an engineer focused on turning machine learning capabilities into reliable, production-ready software systems.
        </p>
        <p className="text-base sm:text-lg text-[#d4d4d8] leading-relaxed font-normal">
          Rather than treating AI as an isolated black box, I prioritize deterministic execution fallbacks, context observability, and human-in-the-loop oversight. I value clear software architecture, practical automation, and systems designed to operate safely in real-world environments.
        </p>
      </div>
    </div>
  );
}
