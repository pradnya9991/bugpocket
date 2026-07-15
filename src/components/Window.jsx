import React from 'react';
import GlassCard from './GlassCard';

export default function Window({ title, children }) {
  return (
    <GlassCard className="w-full h-full flex flex-col overflow-hidden max-w-6xl max-h-[85vh]">
      {/* Window Controls Line matching macOS windowing */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-black/5 dark:border-white/5 bg-white/20 dark:bg-black/10 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          <span className="ml-4 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase">{title}</span>
        </div>
        <div className="w-16" /> {/* Balance spacer */}
      </div>
      
      {/* Window Canvas viewport */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8">
        {children}
      </div>
    </GlassCard>
  );
}
