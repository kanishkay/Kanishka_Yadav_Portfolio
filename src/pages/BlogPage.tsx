import React from 'react';
import { BookOpen, Clock } from 'lucide-react';

export function BlogPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-400">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Technical Notes</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
          Technical Writing
        </h2>
      </div>

      {/* Main Announcement Card */}
      <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4 shadow-sm text-center max-w-2xl mx-auto my-2">
        <div className="inline-flex p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/60 text-blue-400">
          <BookOpen className="w-5 h-5" />
        </div>

        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal max-w-lg mx-auto">
          I&apos;m currently documenting my engineering work. Long-form project retrospectives and technical deep dives will be published here.
        </p>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/60 border border-zinc-700/50 text-xs font-mono font-medium text-zinc-300">
          <Clock className="w-3.5 h-3.5 text-blue-400" />
          <span>In Progress</span>
        </div>
      </div>
    </div>
  );
}

