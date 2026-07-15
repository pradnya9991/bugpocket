import React from 'react';
import { motion } from 'framer-motion';
import { Bug, BarChart3, Settings } from 'lucide-react';

export default function Dock({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'bugs', label: 'Bugs', icon: Bug },
    { id: 'metrics', label: 'Metrics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-end gap-4 px-4 py-3 rounded-3xl backdrop-blur-2xl bg-white/40 dark:bg-[#161C2A]/40 border border-white/30 dark:border-white/10 shadow-liquid-dark/10 dark:shadow-black/40 liquid-glass-gloss">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <div key={tab.id} className="relative flex flex-col items-center group">
              {/* Active Dot Indicator */}
              {isActive && (
                <motion.div 
                  layoutId="dock-dot"
                  className="absolute -top-1.5 w-1 h-1 rounded-full bg-blue-500 dark:bg-blue-400"
                />
              )}
              
              <motion.button
                whileHover={{ scale: 1.18, y: -6 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  p-3.5 rounded-2xl relative transition-colors duration-200
                  ${isActive 
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' 
                    : 'bg-white/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-white/10'
                  }
                  border border-white/20 dark:border-white/5
                `}
              >
                <Icon size={24} strokeWidth={2} />
              </motion.button>
              
              {/* Tooltip */}
              <span className="absolute bottom-full mb-2 px-2 py-1 text-[10px] font-medium rounded-md bg-slate-900 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
                {tab.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
