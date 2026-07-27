import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface CounterItemProps {
  key?: React.Key;
  label: string;
  value: string;
  suffix?: string;
}

export function CounterItem({ label, value, suffix = '' }: CounterItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState(0);

  // Extract numeric part
  const numericMatch = value.match(/\d+/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const nonNumericPrefix = value.startsWith('+') ? '+' : '';
  const nonNumericSuffix = value.includes('+') ? '+' : value.includes('%') ? '%' : '';

  useEffect(() => {
    if (!isInView || targetNumber === 0) return;

    let start = 0;
    const duration = 1200; // ms
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = targetNumber / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setDisplayValue(targetNumber);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, targetNumber]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col p-5 rounded-2xl bg-[#0f0f0f] border border-white/10 backdrop-blur-sm shadow-md hover:border-white/20 transition-all duration-300"
    >
      <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white italic font-mono">
        {targetNumber > 0 ? `${nonNumericPrefix}${displayValue}${nonNumericSuffix}${suffix}` : value}
      </span>
      <span className="text-[10px] sm:text-xs font-semibold text-[#a1a1a1] mt-1.5 uppercase tracking-widest">
        {label}
      </span>
    </motion.div>
  );
}
