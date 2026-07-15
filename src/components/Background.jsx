import React from 'react';
import { motion } from 'framer-motion';

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-slate-100 dark:bg-[#080B11] transition-colors duration-500">
      {/* Dynamic fluid orbs simulating Apple Liquid background */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 0.9, 1],
          x: [0, 80, -40, 0],
          y: [0, -60, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-indigo-400/30 to-purple-500/20 blur-[120px] dark:from-indigo-600/20 dark:to-purple-800/10"
      />
      <motion.div 
        animate={{
          scale: [1, 0.8, 1.1, 1],
          x: [0, -90, 60, 0],
          y: [0, 50, -70, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-teal-400/20 to-blue-500/30 blur-[100px] dark:from-teal-600/10 dark:to-blue-900/20"
      />
    </div>
  );
}
