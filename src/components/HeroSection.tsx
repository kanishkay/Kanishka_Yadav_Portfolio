import React from 'react';
import { ArrowRight, FileText, Mail, Github, Linkedin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { RotatingRoles } from './RotatingRoles';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
  onOpenAIAssistant: () => void;
}

export function HeroSection({ scrollToSection, onOpenAIAssistant }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-[75vh] flex flex-col justify-center pt-8 sm:pt-14 scroll-mt-24">
      <div className="max-w-3xl space-y-6">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-xs font-mono font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Seeking Summer 2027 Internships & 2027 New-Grad Opportunities</span>
        </motion.div>

        {/* Primary Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.2 }}
          className="space-y-3"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-100 tracking-tight leading-[1.1]">
            Hi, I&apos;m Kanishka.
          </h1>

          <p className="text-xl sm:text-3xl font-semibold text-zinc-200 leading-snug tracking-tight">
            Building practical AI systems with LLMs, agentic workflows, retrieval, and modern software engineering.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1 text-base sm:text-xl font-medium text-zinc-400">
            <span>Aspiring</span>
            <RotatingRoles roles={PERSONAL_INFO.rolesRotating} />
          </div>
        </motion.div>

        {/* Supporting Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.2 }}
          className="text-sm sm:text-base font-normal text-zinc-400 max-w-2xl leading-relaxed"
        >
          I&apos;m a Data Science student at San José State University building practical AI systems with LLMs, agentic workflows, retrieval, and scalable software engineering. My work focuses on developer tools, intelligent automation, and AI systems designed for real-world use.
        </motion.p>

        {/* Primary Calls to Action */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.2 }}
          className="flex flex-wrap items-center gap-2.5 pt-2"
        >
          <button
            onClick={() => scrollToSection('currently-building')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-white transition-colors focus:outline-none cursor-pointer"
          >
            <span>Explore Work</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => scrollToSection('resume')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 text-zinc-200 font-medium text-xs sm:text-sm transition-colors focus:outline-none cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-zinc-400" />
            <span>Résumé</span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 text-zinc-200 font-medium text-xs sm:text-sm transition-colors focus:outline-none cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-zinc-400" />
            <span>Contact</span>
          </button>

          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenAIAssistant}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/15 text-blue-300 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Ask AI</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

