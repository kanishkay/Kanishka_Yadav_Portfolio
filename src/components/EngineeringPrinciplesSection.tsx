import React from 'react';
import { ShieldCheck, UserCheck, Database, Eye, Wrench, Compass } from 'lucide-react';
import { motion } from 'motion/react';

interface Principle {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const PRINCIPLES: Principle[] = [
  {
    number: '01',
    title: 'Build deterministic AI systems',
    description: 'Reliable software should continue working predictably even when external model services fail or degrade.',
    icon: ShieldCheck,
  },
  {
    number: '02',
    title: 'Humans stay in the loop',
    description: 'High-impact AI should enhance and assist domain human decisions—never execute unverified actions autonomously.',
    icon: UserCheck,
  },
  {
    number: '03',
    title: 'Retrieval before memorization',
    description: 'Effective AI applications begin with structured, high-precision context retrieval rather than raw parametric knowledge.',
    icon: Database,
  },
  {
    number: '04',
    title: 'Observe everything',
    description: 'Rigorous evaluation, trace replay, and continuous debugging are as crucial as initial inference quality.',
    icon: Eye,
  },
  {
    number: '05',
    title: 'Build useful software',
    description: 'Technology is meant to eliminate operational drag and solve tangible real-world problems for users.',
    icon: Wrench,
  },
];

export function EngineeringPrinciplesSection() {
  return (
    <section id="principles" className="space-y-8 scroll-mt-24 pt-6">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-teal-400">
          <Compass className="w-3.5 h-3.5 text-teal-400" />
          <span>Core Philosophy</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Engineering Principles
        </h2>
        <p className="text-[#a1a1a1] text-sm sm:text-base max-w-2xl">
          Guidelines that inform how I design software, architect agentic pipelines, and build AI infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PRINCIPLES.map((principle, idx) => {
          const IconComponent = principle.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              className="p-6 rounded-[24px] bg-[#0f0f11] border border-white/10 hover:border-white/20 transition-all shadow-xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-teal-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#515151]">
                    {principle.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1a1] leading-relaxed font-normal">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
