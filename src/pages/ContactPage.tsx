import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Calendar, Send, Check, Copy } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <span className="text-xs font-mono font-medium text-blue-400">
          Get in Touch
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
          Let&apos;s connect.
        </h2>
        <p className="text-zinc-400 max-w-2xl text-xs sm:text-sm leading-relaxed">
          I&apos;m always open to discussing AI systems, machine learning, software engineering roles, and collaborative technical projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Info Sidebar */}
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4 shadow-sm">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
              Direct Contact
            </h3>

            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <span className="text-zinc-500 font-mono text-[10px] block">Email Address</span>
                <button
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 text-zinc-200 font-mono text-xs hover:border-zinc-700 transition-colors cursor-pointer"
                >
                  <span className="truncate mr-2">{PERSONAL_INFO.socials.email}</span>
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-500" />}
                </button>
              </div>

              <div className="space-y-1">
                <span className="text-zinc-500 font-mono text-[10px] block">Primary Location</span>
                <p className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 text-zinc-300 font-mono text-xs">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>San José, CA (Silicon Valley)</span>
                </p>
              </div>
            </div>

            {/* Social Cards */}
            <div className="pt-2 border-t border-zinc-800/60 space-y-2">
              <span className="text-zinc-500 font-mono text-[10px] block">Social Profiles</span>
              <div className="flex gap-2">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Schedule Chat Card */}
          <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-2.5 shadow-sm">
            <h4 className="text-xs font-bold flex items-center gap-2 text-zinc-200">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Introductory Conversation</span>
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Recruiters and engineering teams can connect regarding software and AI roles.
            </p>
            <a
              href={`mailto:${PERSONAL_INFO.socials.email}?subject=Intro%20Chat%20Request`}
              className="inline-block w-full py-2 text-center rounded-xl bg-zinc-800/80 border border-zinc-700/60 text-zinc-200 font-mono font-medium text-xs hover:bg-zinc-700/80 hover:text-white transition-colors"
            >
              Email Intro Request &rarr;
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 shadow-sm">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-base font-bold text-zinc-100">
                Send a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-zinc-400">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Hiring Manager"
                    className="w-full px-3 py-2 rounded-xl text-xs bg-zinc-950/70 border border-zinc-800 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-zinc-400">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. team@company.com"
                    className="w-full px-3 py-2 rounded-xl text-xs bg-zinc-950/70 border border-zinc-800 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-zinc-400">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Software / AI Engineering Opportunity"
                  className="w-full px-3 py-2 rounded-xl text-xs bg-zinc-950/70 border border-zinc-800 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-zinc-400">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can Kanishka contribute to your engineering goals?"
                  className="w-full px-3 py-2 rounded-xl text-xs bg-zinc-950/70 border border-zinc-800 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 resize-none font-sans leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-10 text-center space-y-3"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
                <Check className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-zinc-100">Message Received</h4>
              <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out, {formData.name}. Kanishka will review and respond to <strong className="text-zinc-200">{formData.email}</strong> shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-800/80 border border-zinc-700/60 text-xs font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

