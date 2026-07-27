import React from 'react';
import { BookOpen, Clock, Sparkles } from 'lucide-react';

export function BlogPage() {
  return (
    <div id="writing" className="space-y-8 scroll-mt-24 pt-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-teal-400">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Technical Writing & Notes</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Technical Writing
        </h2>
      </div>

      {/* Main Announcement Card */}
      <div className="p-8 sm:p-10 rounded-[32px] bg-[#0f0f11] border border-white/10 space-y-6 shadow-xl text-center max-w-3xl mx-auto my-4">
        <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-teal-400">
          <BookOpen className="w-6 h-6" />
        </div>

        <p className="text-base sm:text-lg text-[#d4d4d8] leading-relaxed font-normal max-w-xl mx-auto">
          I&apos;m currently documenting my engineering work. Long-form project retrospectives and technical deep dives will be published here.
        </p>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold text-teal-300">
          <Clock className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
          <span>Coming Soon</span>
        </div>
      </div>
    </div>
  );
}
