import React, { useState } from 'react';
import { Github, Linkedin, Check, Copy, ArrowUp, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/5 bg-[#050505] mt-24 pt-16 pb-12 transition-colors relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Column 1: Intro */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white text-black font-mono font-bold text-xs flex items-center justify-center shadow-md">
                KY
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Kanishka Yadav
              </span>
            </div>
            <p className="text-sm text-[#a1a1a1] max-w-md leading-relaxed">
              Data Science student at San José State University. Building AI-powered applications, multi-agent workflows, semantic retrieval tools, and scalable software.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono font-medium text-emerald-400">
                Seeking Summer 2027 Internships & New Grad Opportunities
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#a1a1a1]">
              Homepage Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('projects')} className="text-[#a1a1a1] hover:text-white transition-colors">
                  Featured AI Systems
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('experience')} className="text-[#a1a1a1] hover:text-white transition-colors">
                  Experience & Roles
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="text-[#a1a1a1] hover:text-white transition-colors">
                  About & Biography
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('skills')} className="text-[#a1a1a1] hover:text-white transition-colors">
                  Technical Skill Matrix
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('education')} className="text-[#a1a1a1] hover:text-white transition-colors">
                  Education & Fellowships
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resume')} className="text-[#a1a1a1] hover:text-white transition-colors">
                  Interactive Resume
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Direct Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#a1a1a1]">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#0f0f0f] border border-white/10 text-xs font-mono text-[#a1a1a1] hover:border-white/20 transition-colors"
              >
                <span className="truncate mr-2">{PERSONAL_INFO.socials.email}</span>
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#717171]" />}
              </button>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-[#0f0f0f] border border-white/10 text-[#a1a1a1] hover:text-white hover:border-white/20 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-[#0f0f0f] border border-white/10 text-[#a1a1a1] hover:text-white hover:border-white/20 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-[#0f0f0f] border border-white/10 text-[#a1a1a1] hover:text-white hover:border-white/20 transition-colors"
                  aria-label="Instagram Profile"
                >
                  <span className="text-xs font-mono font-bold">IG</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#717171] gap-4">
          <div className="flex items-center gap-2 font-mono">
            <Code2 className="w-4 h-4 text-blue-400" />
            <span>Built with Next.js, TypeScript, and Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-4">
            <span>© 2026 Kanishka Yadav. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-[#0f0f0f] border border-white/10 hover:bg-white hover:text-black transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
