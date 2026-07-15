import React from 'react';
import { ShieldCheck, Flame, Layers } from 'lucide-react';

export default function Metrics({ bugs }) {
  const openCount = bugs.filter(b => b.status === 'Open').length;
  const resolvedCount = bugs.filter(b => b.status === 'Resolved').length;
  const totalCount = bugs.length;
  const highPriorityCount = bugs.filter(b => b.status === 'Open' && b.severity === 'High').length;

  const cards = [
    { title: 'Open Defects', count: openCount, sub: 'Needs immediate review', icon: Layers, color: 'text-blue-500 bg-blue-500/10 border-blue-500/20' },
    { title: 'Critical Hotspots', count: highPriorityCount, sub: 'High Priority items Active', icon: Flame, color: 'text-red-500 bg-red-500/10 border-red-500/20' },
    { title: 'Resolved Cycles', count: resolvedCount, sub: `Out of ${totalCount} total issues`, icon: ShieldCheck, color: 'text-green-500 bg-green-500/10 border-green-500/20' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold tracking-tight">System Telemetry</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Aggregated execution diagnostics across operational files.</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div key={i} className="p-5 rounded-2xl bg-white/40 dark:bg-[#182030]/40 border border-black/5 dark:border-white/5 flex flex-col justify-between h-40">
              <div className="flex justify-between items-start">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{card.title}</span>
                <span className={`p-2 rounded-xl border ${card.color}`}><Icon size={18} /></span>
              </div>
              <div>
                <div className="text-3xl font-bold tracking-tight">{card.count}</div>
                <div className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">{card.sub}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-4">
        <h3 className="text-sm font-semibold tracking-wide uppercase text-slate-400 dark:text-slate-500">System Stability Index</h3>
        <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden relative border border-black/5 dark:border-white/10">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 transition-all duration-500"
            style={{ width: `${totalCount === 0 ? 100 : (resolvedCount / totalCount) * 100}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
          <span>Stability Rating: {totalCount === 0 ? 100 : Math.round((resolvedCount / totalCount) * 100)}%</span>
          <span>{resolvedCount} of {totalCount} closed</span>
        </div>
      </div>
    </div>
  );
}
