import React from 'react';
import { ArrowRight, Github, ExternalLink, Cpu, Bot, Search, Activity, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/projectsData';
import { Project } from '../types/portfolio';

interface FeaturedAISystemsSectionProps {
  onSelectProject: (project: Project) => void;
}

export function FeaturedAISystemsSection({ onSelectProject }: FeaturedAISystemsSectionProps) {
  // Ensure strict order: AGENTIS, AutoPilot AI, Acron, ContextMeter
  const orderedFeaturedIds = [
    'agentis-matching-platform',
    'autopilot-ai',
    'acron-repo-kb',
    'contextmeter'
  ];

  const featuredProjects = orderedFeaturedIds
    .map((id) => PROJECTS.find((p) => p.id === id))
    .filter((p): p is Project => p !== undefined);

  return (
    <section id="featured-projects" className="space-y-10 scroll-mt-24 pt-6">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-teal-400">
          <Cpu className="w-3.5 h-3.5" />
          <span>Deep Engineering & Case Studies</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Featured AI Systems
        </h2>
        <p className="text-[#a1a1a1] text-sm sm:text-base max-w-3xl leading-relaxed">
          Production-oriented AI engineering case studies with multi-agent workflows, computer-use agents, semantic search, and context observability.
        </p>
      </div>

      {/* Case Studies Container */}
      <div className="space-y-12">
        {featuredProjects.map((proj, index) => {
          return (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="p-7 sm:p-10 rounded-[32px] bg-[#0f0f11] border border-white/10 space-y-8 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

              {/* Top Meta Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full">
                      Case Study 0{index + 1}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.category.map((cat, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 text-[#a1a1a1] border border-white/5">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-1">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-blue-400">
                    {proj.tagline}
                  </p>
                </div>

                {/* Primary Actions */}
                <div className="flex items-center gap-3">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-mono font-medium transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code Repository</span>
                    </a>
                  )}

                  <button
                    onClick={() => onSelectProject(proj)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black hover:bg-[#e1e1e1] font-bold text-xs shadow-lg transition-all cursor-pointer"
                  >
                    <span>Full Architecture Breakdown</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left 2 Cols: Description & Engineering Decisions */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-semibold uppercase text-[#717171]">
                      System Overview & Problem Solved
                    </h4>
                    <p className="text-sm sm:text-base text-[#d4d4d8] leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* Key Claims / Features */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-mono font-semibold uppercase text-[#717171]">
                      Verified Architectural Capabilities
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#a1a1a1]">
                      {proj.keyFeatures.slice(0, 4).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-[#151518] p-3 rounded-2xl border border-white/5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Engineering Decision Teaser */}
                  {proj.engineeringDecisions && proj.engineeringDecisions.length > 0 && (
                    <div className="p-4 rounded-2xl bg-[#141417] border border-white/5 space-y-1">
                      <span className="text-[11px] font-mono uppercase text-teal-400 font-semibold">Engineering Decision</span>
                      <p className="text-xs sm:text-sm text-[#a1a1a1]">
                        {proj.engineeringDecisions[0]}
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Col: Architecture & Metrics Summary */}
                <div className="space-y-6 bg-[#141417] p-6 rounded-2xl border border-white/5 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono uppercase text-[#717171]">Architecture Summary</span>
                      <p className="text-xs text-[#d4d4d8] leading-relaxed">
                        {proj.architectureSummary}
                      </p>
                    </div>

                    {proj.metrics && proj.metrics.length > 0 && (
                      <div className="space-y-2 pt-2 border-t border-white/5">
                        <span className="text-[11px] font-mono uppercase text-[#717171]">Key Performance Indicators</span>
                        <div className="grid grid-cols-2 gap-2">
                          {proj.metrics.map((m, idx) => (
                            <div key={idx} className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                              <span className="text-[10px] font-mono text-[#717171] block">{m.label}</span>
                              <span className="text-xs font-mono font-bold text-white">{m.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-2 pt-4 border-t border-white/5">
                    <span className="text-[11px] font-mono uppercase text-[#717171]">Stack & Infrastructure</span>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.slice(0, 6).map((tech, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/5 text-[#a1a1a1] border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
