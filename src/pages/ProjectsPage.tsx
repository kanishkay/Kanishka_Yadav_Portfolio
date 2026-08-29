import React, { useState } from 'react';
import { Search, ArrowRight, Github, Database } from 'lucide-react';
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

  const mlProjects = PROJECTS.filter((proj) => !proj.featured);

  const filteredProjects = PROJECTS.filter((proj) => {
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
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-400">
          <Database className="w-3.5 h-3.5" />
          <span>Analytical & Statistical Modeling</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
          Machine Learning & Data Science Projects
        </h2>
        <p className="text-zinc-400 max-w-2xl text-xs sm:text-sm leading-relaxed">
          Deep neural classification pipelines, unsupervised customer segmentation, and natural language processing models.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-2 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
        {/* Category Pills */}
        <div className="flex items-center gap-1 overflow-x-auto p-0.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-zinc-800 text-zinc-100 font-semibold border border-zinc-700/60'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter by keyword..."
            className="w-full pl-8 pr-3 py-1 rounded-lg text-xs bg-zinc-950/80 border border-zinc-800 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 font-mono"
          />
        </div>
      </div>

      {/* Grid of ML Projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projectsToDisplay.map((proj) => (
          <motion.div
            key={proj.id}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.15 }}
            className="group flex flex-col justify-between rounded-2xl bg-zinc-900/40 border border-zinc-800/80 p-5 hover:border-zinc-700 transition-colors relative shadow-sm"
          >
            <div className="space-y-3">
              {/* Category Badges */}
              <div className="flex flex-wrap gap-1">
                {proj.category.map((cat, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800/60 text-zinc-400 border border-zinc-700/50"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-base font-bold text-zinc-100 group-hover:text-blue-400 transition-colors tracking-tight">
                  {proj.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-0.5">
                  {proj.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                {proj.description}
              </p>

              {/* Metrics */}
              {proj.metrics && proj.metrics.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {proj.metrics.map((m, idx) => (
                    <div key={idx} className="px-2 py-0.5 rounded-md bg-zinc-950/80 border border-zinc-800/80 text-[10px] font-mono text-zinc-200">
                      <span className="text-zinc-500">{m.label}: </span>
                      <span className="font-semibold text-zinc-100">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-1 pt-1">
                {proj.technologies.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800/40 text-zinc-400 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="pt-3 mt-4 border-t border-zinc-800/60 flex items-center justify-between">
              <button
                onClick={() => onSelectProject(proj)}
                className="inline-flex items-center gap-1 text-xs font-mono font-medium text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
              >
                <span>Details</span>
                <ArrowRight className="w-3 h-3" />
              </button>

              {proj.githubUrl && (
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1 text-zinc-400 hover:text-zinc-100 transition-colors"
                  aria-label="GitHub Repository"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

