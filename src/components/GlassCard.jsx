import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', ...props }) {
  return (
    <motion.div
      className={`
        backdrop-blur-2xl 
        bg-white/60 dark:bg-[#161C2A]/60 
        border border-white/40 dark:border-white/10 
        shadow-liquid-light dark:shadow-liquid-dark 
        liquid-glass-gloss
        rounded-2xl
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}
