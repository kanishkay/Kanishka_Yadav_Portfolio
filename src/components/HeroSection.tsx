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
    <section id="home" className="relative min-h-[82vh] flex flex-col justify-center pt-6 sm:pt-10 scroll-mt-24">
      <div className="max-w-4xl space-y-6">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#a1a1a1] text-xs font-mono font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Seeking Summer 2027 Internships & 2027 New-Grad Opportunities</span>
        </motion.div>

        {/* Primary Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400">Kanishka</span>.
          </h1>

          <p className="text-2xl sm:text-4xl font-semibold text-white max-w-3xl leading-snug tracking-tight">
            Building practical AI systems with LLMs, agentic workflows, retrieval, and modern software engineering.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1 text-lg sm:text-2xl font-medium text-[#a1a1a1]">
            <span>Focusing as an aspiring</span>
            <RotatingRoles roles={PERSONAL_INFO.rolesRotating} />
          </div>
        </motion.div>

        {/* Supporting Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-xl font-normal text-[#a1a1a1] max-w-3xl leading-relaxed"
        >
          I&apos;m a Data Science student at San José State University building practical AI systems with LLMs, agentic workflows, retrieval, and scalable software engineering. My work focuses on developer tools, intelligent automation, and AI systems designed for real-world use.
        </motion.p>

        {/* Primary Calls to Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center gap-3 pt-4"
        >
          <button
            onClick={() => scrollToSection('currently-building')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-bold text-sm shadow-[0_0_25px_rgba(255,255,255,0.12)] hover:bg-[#e1e1e1] transition-all focus:outline-none cursor-pointer"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollToSection('resume')}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#111111] border border-white/10 text-white hover:border-white/30 font-medium text-sm transition-all focus:outline-none cursor-pointer"
          >
            <FileText className="w-4 h-4 text-blue-400" />
            <span>Résumé</span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#111111] border border-white/10 text-white hover:border-white/30 font-medium text-sm transition-all focus:outline-none cursor-pointer"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>Contact</span>
          </button>

          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noreferrer"
            className="p-3.5 rounded-xl bg-[#111111] border border-white/10 text-[#a1a1a1] hover:text-white hover:border-white/30 transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3.5 rounded-xl bg-[#111111] border border-white/10 text-[#a1a1a1] hover:text-white hover:border-white/30 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <button
            onClick={onOpenAIAssistant}
            className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-white font-medium text-sm transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Ask AI Assistant</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
