import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-white/60 dark:bg-[#1C2538]/60 border border-white/40 dark:border-white/10 shadow-liquid-light dark:shadow-liquid-dark text-slate-700 dark:text-slate-300 backdrop-blur-md"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-600" />}
    </motion.button>
  );
}
