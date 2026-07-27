import React, { useState } from 'react';
import { ArrowLeft, Github, ExternalLink, Code2, Cpu, AlertTriangle, CheckCircle, Lightbulb, Compass, Copy, Check, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { Project } from '../types/portfolio';

interface ProjectDetailPageProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetailPage({ project, onBack }: ProjectDetailPageProps) {
  const [activeSnippetIdx, setActiveSnippetIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentSnippet = project.codeSnippets?.[activeSnippetIdx];

  const handleCopyCode = () => {
    if (!currentSnippet) return;
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12 py-6 pb-20">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#a1a1a1] hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Projects Overview</span>
      </button>

      {/* Hero Header */}
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {project.category.map((cat, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/5 text-[#a1a1a1] border border-white/10"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl font-light text-[#a1a1a1] max-w-3xl leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111111] border border-white/10 hover:border-white/30 text-white text-xs font-mono font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-bold hover:bg-[#e1e1e1] text-xs font-mono transition-colors shadow-md"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Application</span>
            </a>
          )}
        </div>
      </div>

      {/* Visual Asset Previews & Screenshots Section */}
      <div className="p-6 sm:p-8 rounded-[32px] bg-[#0f0f11] border border-white/10 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-teal-400">
            <Cpu className="w-4 h-4" />
            <span>Product & System Visuals</span>
          </div>
          <span className="text-[10px] font-mono text-[#717171]">UI & Workflow Previews</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2">
            <div className="text-[10px] text-teal-400 font-bold uppercase tracking-wider">01 // Hero Screenshot</div>
            <div className="h-28 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[10px] text-[#717171] text-center p-2">
              [Product Interface Preview]
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2">
            <div className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">02 // Architecture Diagram</div>
            <div className="h-28 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[10px] text-[#717171] text-center p-2">
              [Pipeline Data Flow Graph]
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2">
            <div className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">03 // Workflow Diagram</div>
            <div className="h-28 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[10px] text-[#717171] text-center p-2">
              [Agent Execution Sequence]
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2">
            <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">04 // Demo Video</div>
            <div className="h-28 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[10px] text-[#717171] text-center p-2">
              [Interactive Screencast]
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Grid */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0f0f0f] border border-white/10 shadow-md"
            >
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-teal-400 italic">
                {m.value}
              </span>
              <span className="block text-[10px] font-semibold text-[#a1a1a1] uppercase tracking-widest mt-1">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Overview & Problem Solved */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-[32px] bg-[#0f0f0f] border border-white/10 space-y-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Compass className="w-4 h-4 text-blue-400" />
            <span>Project Overview</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#a1a1a1] leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="p-6 rounded-[32px] bg-amber-500/5 border border-amber-500/20 space-y-3">
          <h3 className="text-base font-bold text-amber-300 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>Problem Solved</span>
          </h3>
          <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed">
            {project.problemSolved}
          </p>
        </div>
      </div>

      {/* Architecture Diagram Section */}
      {project.architectureDiagram && (
        <section className="p-6 sm:p-8 rounded-[32px] bg-[#0f0f0f] text-white border border-white/10 space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-teal-400 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>System Architecture & Data Flow</span>
            </h3>
            <span className="text-[10px] font-mono text-[#717171]">ASCII / Flow Diagram</span>
          </div>
          <div className="p-4 rounded-2xl bg-black border border-white/10 overflow-x-auto">
            <pre className="font-mono text-[11px] sm:text-xs leading-relaxed text-blue-300 whitespace-pre">
              {project.architectureDiagram}
            </pre>
          </div>
          <p className="text-xs text-[#a1a1a1] leading-relaxed">
            {project.architectureSummary}
          </p>
        </section>
      )}

      {/* Code Snippets Viewer */}
      {project.codeSnippets && project.codeSnippets.length > 0 && currentSnippet && (
        <section className="p-6 rounded-[32px] bg-[#0f0f0f] text-white border border-white/10 space-y-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono font-bold text-white">
                {currentSnippet.filename}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] font-mono text-white transition-colors border border-white/10"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-black border border-white/10 overflow-x-auto">
            <pre className="font-mono text-xs text-emerald-300 leading-relaxed">
              <code>{currentSnippet.code}</code>
            </pre>
          </div>

          <p className="text-xs text-[#a1a1a1] italic">
            <strong className="text-white">Implementation Note:</strong> {currentSnippet.explanation}
          </p>
        </section>
      )}

      {/* Key Features & Tech Stack */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-[32px] bg-[#0f0f0f] border border-white/10 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Key Engineering Features</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#a1a1a1]">
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-1.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-[32px] bg-[#0f0f0f] border border-white/10 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Code2 className="w-4 h-4 text-purple-400" />
            <span>Technologies & Libraries</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-white/5 text-[#a1a1a1] border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Decisions & Tradeoffs */}
      <section className="p-6 sm:p-8 rounded-[32px] bg-[#0f0f0f] border border-white/10 space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase text-teal-400 font-semibold">
            System Design Analysis
          </span>
          <h3 className="text-xl font-bold text-white">
            Engineering Decisions & Technical Tradeoffs
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase text-[#a1a1a1]">
              Key Decisions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#a1a1a1]">
              {project.engineeringDecisions.map((dec, idx) => (
                <li key={idx} className="p-3 rounded-xl bg-[#151515] border border-white/5">
                  {dec}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase text-[#a1a1a1]">
              Architectural Tradeoffs
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#a1a1a1]">
              {project.tradeoffs.map((tr, idx) => (
                <li key={idx} className="p-3 rounded-xl bg-[#151515] border border-white/5">
                  {tr}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Lessons Learned & Future Roadmap */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-[32px] bg-[#0f0f0f] border border-white/10 space-y-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            <span>Lessons Learned</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#a1a1a1]">
            {project.lessonsLearned.map((les, idx) => (
              <li key={idx}>&bull; {les}</li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-[32px] bg-[#0f0f0f] border border-white/10 space-y-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Compass className="w-4 h-4 text-teal-400" />
            <span>Future Improvements</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#a1a1a1]">
            {project.futureRoadmap.map((rm, idx) => (
              <li key={idx}>&bull; {rm}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
