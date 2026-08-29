import React, { useState } from 'react';
import { ArrowLeft, Github, ExternalLink, Code2, Cpu, AlertTriangle, CheckCircle, Lightbulb, Compass, Copy, Check, Terminal } from 'lucide-react';
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
    <div className="space-y-8 py-2 pb-16">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Projects</span>
      </button>

      {/* Hero Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.category.map((cat, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-zinc-800/80 text-zinc-300 border border-zinc-700/60"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            {project.title}
          </h1>
          <p className="text-sm sm:text-base font-normal text-zinc-300 max-w-3xl leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 text-xs font-mono font-medium transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-100 text-zinc-950 font-semibold hover:bg-white text-xs font-mono transition-colors shadow-sm"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Application</span>
            </a>
          )}
        </div>
      </div>

      {/* Key Metrics Grid */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 shadow-sm"
            >
              <span className="text-xl sm:text-2xl font-bold font-mono text-zinc-100">
                {m.value}
              </span>
              <span className="block text-[10px] font-mono text-zinc-400 uppercase tracking-wider mt-1">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Visual Asset Previews & Screenshots Section */}
      <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-3.5 shadow-sm">
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
          <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-blue-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>Product & System Architecture</span>
          </div>
          <span className="text-[10px] font-mono text-zinc-500">Visual Overview</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
          <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 space-y-2">
            <div className="text-[10px] text-blue-400 font-semibold uppercase tracking-wider">01 // Product Interface</div>
            <div className="h-24 rounded-lg bg-zinc-900/60 border border-zinc-800/60 flex items-center justify-center text-[10px] text-zinc-400 text-center p-2">
              Clean UI with state visualization & real-time response view
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 space-y-2">
            <div className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">02 // System Data Flow</div>
            <div className="h-24 rounded-lg bg-zinc-900/60 border border-zinc-800/60 flex items-center justify-center text-[10px] text-zinc-400 text-center p-2">
              Embedding generation &rarr; Vector search &rarr; Reranking &rarr; Generation
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 space-y-2">
            <div className="text-[10px] text-purple-400 font-semibold uppercase tracking-wider">03 // Agent Orchestration</div>
            <div className="h-24 rounded-lg bg-zinc-900/60 border border-zinc-800/60 flex items-center justify-center text-[10px] text-zinc-400 text-center p-2">
              Planner &bull; Tool Executor &bull; Evaluator &bull; Fallback Loop
            </div>
          </div>
        </div>
      </div>

      {/* Overview & Problem Solved */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-2.5">
          <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-blue-400" />
            <span>Project Overview</span>
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-2.5">
          <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span>Problem Solved</span>
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {project.problemSolved}
          </p>
        </div>
      </div>

      {/* Architecture Diagram Section */}
      {project.architectureDiagram && (
        <section className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 text-zinc-100 border border-zinc-800/80 space-y-3 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>System Architecture & Data Flow</span>
            </h3>
            <span className="text-[10px] font-mono text-zinc-500">ASCII Architecture Graph</span>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-950/90 border border-zinc-800/80 overflow-x-auto">
            <pre className="font-mono text-[11px] leading-relaxed text-zinc-300 whitespace-pre">
              {project.architectureDiagram}
            </pre>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            {project.architectureSummary}
          </p>
        </section>
      )}

      {/* Code Snippets Viewer */}
      {project.codeSnippets && project.codeSnippets.length > 0 && currentSnippet && (
        <section className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 text-zinc-100 border border-zinc-800/80 space-y-3">
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-mono font-medium text-zinc-200">
                {currentSnippet.filename}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-800/80 hover:bg-zinc-700/80 text-[11px] font-mono text-zinc-300 transition-colors border border-zinc-700/60 cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-950/90 border border-zinc-800/80 overflow-x-auto">
            <pre className="font-mono text-xs text-emerald-300/90 leading-relaxed">
              <code>{currentSnippet.code}</code>
            </pre>
          </div>

          <p className="text-xs text-zinc-400">
            <strong className="text-zinc-200">Implementation Note:</strong> {currentSnippet.explanation}
          </p>
        </section>
      )}

      {/* Key Features & Tech Stack */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
          <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Key Engineering Features</span>
          </h3>
          <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-400">
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                <span className="leading-relaxed">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
          <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-purple-400" />
            <span>Technologies & Libraries</span>
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-zinc-800/60 text-zinc-300 border border-zinc-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Decisions & Tradeoffs */}
      <section className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4">
        <div className="space-y-0.5">
          <span className="text-xs font-mono uppercase text-blue-400 font-medium">
            System Design Analysis
          </span>
          <h3 className="text-base font-bold text-zinc-100">
            Engineering Decisions & Technical Tradeoffs
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-semibold uppercase text-zinc-400">
              Key Decisions
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-400">
              {project.engineeringDecisions.map((dec, idx) => (
                <li key={idx} className="p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800/70 leading-relaxed">
                  {dec}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono font-semibold uppercase text-zinc-400">
              Architectural Tradeoffs
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-400">
              {project.tradeoffs.map((tr, idx) => (
                <li key={idx} className="p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800/70 leading-relaxed">
                  {tr}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Lessons Learned & Future Roadmap */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-2.5">
          <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-1.5">
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            <span>Lessons Learned</span>
          </h3>
          <ul className="space-y-1.5 text-xs text-zinc-400">
            {project.lessonsLearned.map((les, idx) => (
              <li key={idx} className="leading-relaxed">&bull; {les}</li>
            ))}
          </ul>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-2.5">
          <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-blue-400" />
            <span>Future Improvements</span>
          </h3>
          <ul className="space-y-1.5 text-xs text-zinc-400">
            {project.futureRoadmap.map((rm, idx) => (
              <li key={idx} className="leading-relaxed">&bull; {rm}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

