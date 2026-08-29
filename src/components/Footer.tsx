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
    <footer className="w-full border-t border-zinc-800/80 bg-[#09090b] mt-20 pt-12 pb-10 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-zinc-800/80">
          {/* Column 1: Intro */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-zinc-100 text-zinc-950 font-mono font-bold text-xs flex items-center justify-center shadow-sm">
                KY
              </div>
              <span className="text-base font-bold tracking-tight text-zinc-100">
                Kanishka Yadav
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed font-normal">
              Data Science student at San José State University. Building AI-powered applications, multi-agent workflows, semantic retrieval tools, and scalable software.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono font-medium text-emerald-400">
                Seeking Summer 2027 Internships & New Grad Roles
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={() => onNavigate('projects')} className="text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer">
                  Featured AI Systems
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('experience')} className="text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer">
                  Experience & Roles
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer">
                  About & Biography
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('skills')} className="text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer">
                  Technical Skill Matrix
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('education')} className="text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer">
                  Education & Fellowships
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resume')} className="text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer">
                  Interactive Resume
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Direct Connect */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs font-mono text-zinc-300 hover:border-zinc-700 transition-colors cursor-pointer"
              >
                <span className="truncate mr-2">{PERSONAL_INFO.socials.email}</span>
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-500" />}
              </button>

              <div className="flex items-center gap-2 pt-0.5">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-3 font-mono">
          <div className="flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Built with React, TypeScript, and Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-3">
            <span>© 2026 Kanishka Yadav</span>
            <button
              onClick={scrollToTop}
              className="p-1 rounded-md bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:text-zinc-200 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

