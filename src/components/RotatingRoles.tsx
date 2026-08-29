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
    }, 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <div className="inline-flex items-center h-8 sm:h-9 overflow-hidden font-mono text-lg sm:text-xl font-medium text-zinc-100">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -12, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="text-blue-400 underline decoration-blue-500/30 underline-offset-4"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

