import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface RotatingRolesProps {
  roles: string[];
}

export function RotatingRoles({ roles }: RotatingRolesProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <div className="inline-flex items-center h-10 overflow-hidden font-mono text-xl sm:text-2xl font-semibold tracking-wide text-indigo-600 dark:text-indigo-400">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-sm"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
