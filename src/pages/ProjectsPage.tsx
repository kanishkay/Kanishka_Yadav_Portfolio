import React, { useState } from 'react';
import { Search, ArrowRight, Github, ExternalLink, Layers, Database, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/projectsData';
import { Project, ProjectCategory } from '../types/portfolio';

interface ProjectsPageProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES: ProjectCategory[] = ['All', 'Machine Learning', 'Data Science', 'AI', 'Backend'];

export function ProjectsPage({ onSelectProject }: ProjectsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter for classical ML & Data Science projects or filtered results
  const mlProjects = PROJECTS.filter((proj) => !proj.featured);

  const filteredProjects = PROJECTS.filter((proj) => {
    // Show non-featured projects by default unless searching/filtering
    const isTargetType = selectedCategory !== 'All' || searchQuery !== '' ? true : !proj.featured;
    const matchesCategory =
      selectedCategory === 'All' || proj.category.includes(selectedCategory);
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return isTargetType && matchesCategory && matchesSearch;
  });

  const projectsToDisplay = filteredProjects.length > 0 ? filteredProjects : mlProjects;

  return (
    <div className="space-y-8 scroll-mt-24 pt-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-teal-400">
          <Database className="w-3.5 h-3.5" />
          <span>Analytical & Statistical Modeling</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Machine Learning & Data Science Projects
        </h2>
        <p className="text-[#a1a1a1] max-w-2xl text-sm sm:text-base leading-relaxed">
          Deep neural classification pipelines, unsupervised customer segmentation, and natural language processing models.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-2 rounded-2xl bg-[#0f0f11] border border-white/10 shadow-lg">
        {/* Category Pills */}
        <div className="flex items-center gap-1 overflow-x-auto p-1 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-[#a1a1a1] hover:bg-white/5 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tech, title, or keywords..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs bg-[#151515] border border-white/10 text-white placeholder-[#717171] focus:outline-none focus:border-white/30"
          />
        </div>
      </div>

      {/* Grid of ML Projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectsToDisplay.map((proj) => (
          <motion.div
            key={proj.id}
            whileHover={{ y: -4 }}
            className="group flex flex-col justify-between rounded-[28px] bg-[#0f0f11] border border-white/10 p-6 shadow-xl hover:border-white/20 transition-all duration-300 relative overflow-hidden"
          >
            <div className="space-y-4">
              {/* Category Badges */}
              <div className="flex flex-wrap gap-1.5">
                {proj.category.map((cat, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 text-[#a1a1a1] border border-white/5"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs font-mono text-[#a1a1a1] mt-1">
                  {proj.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#a1a1a1] line-clamp-3 leading-relaxed">
                {proj.description}
              </p>

              {/* Metrics */}
              {proj.metrics && proj.metrics.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {proj.metrics.map((m, idx) => (
                    <div key={idx} className="px-2.5 py-1 rounded-lg bg-black/50 border border-white/5 text-[11px] font-mono text-white">
                      <span className="text-[#717171]">{m.label}: </span>
                      <span className="font-bold">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {proj.technologies.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-[#a1a1a1] border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
              <button
                onClick={() => onSelectProject(proj)}
                className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-teal-400 hover:underline cursor-pointer"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {proj.githubUrl && (
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 text-[#717171] hover:text-white transition-colors"
                  aria-label="GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
