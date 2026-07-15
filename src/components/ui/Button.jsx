import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyle = "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 shadow-glossy-btn active:scale-98 relative overflow-hidden flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-500 dark:hover:bg-blue-400 border border-blue-400/20 shadow-blue-500/10",
    secondary: "bg-white/80 dark:bg-white/10 text-slate-800 dark:text-slate-200 hover:bg-white dark:hover:bg-white/15 border border-black/5 dark:border-white/10",
    danger: "bg-red-500 text-white hover:bg-red-400 border border-red-400/20"
  };

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      {children}
    </motion.button>
  );
}
