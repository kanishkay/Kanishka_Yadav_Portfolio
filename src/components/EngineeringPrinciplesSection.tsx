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
    <div className="space-y-6">
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-400">
          <Compass className="w-3.5 h-3.5 text-blue-400" />
          <span>Core Philosophy</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
          Engineering Principles
        </h2>
        <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl">
          Guidelines that inform how I design software, architect agentic pipelines, and build AI infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PRINCIPLES.map((principle, idx) => {
          const IconComponent = principle.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
              className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col justify-between space-y-3 shadow-sm"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-zinc-800/80 border border-zinc-700/60 text-blue-400">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-zinc-500">
                    {principle.number}
                  </span>
                </div>
                <h3 className="text-base font-bold text-zinc-100 tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

