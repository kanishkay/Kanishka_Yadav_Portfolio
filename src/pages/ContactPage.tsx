import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Calendar, Send, Check, Copy, Sparkles } from 'lucide-react';
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
    <div className="max-w-4xl mx-auto space-y-12 pb-16">
      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-teal-400">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Let&apos;s build something meaningful.
        </h1>
        <p className="text-[#a1a1a1] max-w-2xl text-sm sm:text-base leading-relaxed">
          I&apos;m always interested in discussing AI systems, machine learning, software engineering, internships, and collaborative projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info Sidebar */}
        <div className="space-y-6">
          <div className="p-6 rounded-[32px] bg-[#0f0f0f] border border-white/10 space-y-4 shadow-xl">
            <h3 className="text-sm font-mono font-bold uppercase text-white">
              Direct Contact
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="space-y-1">
                <span className="text-[#717171] font-mono text-[10px] block">Email Address</span>
                <button
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-[#151515] border border-white/10 text-white font-mono text-xs hover:border-white/20 transition-colors"
                >
                  <span className="truncate mr-2">{PERSONAL_INFO.socials.email}</span>
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#717171]" />}
                </button>
              </div>

              <div className="space-y-1">
                <span className="text-[#717171] font-mono text-[10px] block">Primary Location</span>
                <p className="flex items-center gap-2 p-3 rounded-xl bg-[#151515] border border-white/10 text-white font-mono text-xs">
                  <MapPin className="w-4 h-4 text-teal-400" />
                  <span>San José, CA (Silicon Valley)</span>
                </p>
              </div>
            </div>

            {/* Social Cards */}
            <div className="pt-2 border-t border-white/5 space-y-2">
              <span className="text-[#717171] font-mono text-[10px] block">Social Profiles</span>
              <div className="flex gap-2">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#151515] border border-white/10 text-[#a1a1a1] hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#151515] border border-white/10 text-[#a1a1a1] hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#151515] border border-white/10 text-[#a1a1a1] hover:text-white transition-colors flex items-center justify-center font-mono text-xs font-bold"
                  aria-label="Instagram Profile"
                >
                  IG
                </a>
              </div>
            </div>
          </div>

          {/* Schedule Chat Card */}
          <div className="p-6 rounded-[32px] bg-[#0d0d0d] text-white border border-white/10 space-y-3 shadow-xl">
            <h4 className="text-sm font-bold flex items-center gap-2 text-teal-400">
              <Calendar className="w-4 h-4 text-teal-400" />
              <span>Schedule 15-Min Intro</span>
            </h4>
            <p className="text-xs text-[#a1a1a1] leading-relaxed">
              Recruiters and hiring teams can connect with Kanishka regarding internships or full-time new-grad alignment.
            </p>
            <a
              href={`mailto:${PERSONAL_INFO.socials.email}?subject=Intro%20Chat%20Request`}
              className="inline-block w-full py-2.5 text-center rounded-xl bg-white text-black font-mono font-bold text-xs hover:bg-[#e1e1e1] transition-colors"
            >
              Email Intro Request &rarr;
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 p-8 rounded-[32px] bg-[#0f0f0f] border border-white/10 shadow-xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-bold text-white">
                Send a Direct Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#717171]">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Hiring Manager"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#151515] border border-white/10 text-white placeholder-[#717171] focus:outline-none focus:border-white/30"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#717171]">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#151515] border border-white/10 text-white placeholder-[#717171] focus:outline-none focus:border-white/30"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-[#717171]">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Summer 2027 AI Engineering Role"
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#151515] border border-white/10 text-white placeholder-[#717171] focus:outline-none focus:border-white/30"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-[#717171]">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can Kanishka contribute to your team?"
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#151515] border border-white/10 text-white placeholder-[#717171] focus:outline-none focus:border-white/30 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-white hover:bg-[#e1e1e1] text-black font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to Kanishka</span>
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-xs sm:text-sm text-[#a1a1a1] max-w-md mx-auto">
                Thank you for reaching out, {formData.name}. Kanishka will review your message and respond to <strong className="text-teal-400">{formData.email}</strong> shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#a1a1a1] hover:text-white hover:bg-white/10 transition-colors"
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
