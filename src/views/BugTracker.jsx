import React, { useState } from 'react';
import { Plus, Trash2, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import Button from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export default function BugTracker({ bugs, setBugs }) {
  const [title, setTitle] = useState('');
  const [severity, setSeverity] = useState('Medium');

  const addBug = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    const newBug = {
      id: Date.now(),
      title,
      severity,
      status: 'Open',
      date: new Date().toLocaleDateString()
    };
    
    setBugs([newBug, ...bugs]);
    setTitle('');
  };

  const deleteBug = (id) => {
    setBugs(bugs.filter(bug => bug.id !== id));
  };

  const toggleStatus = (id) => {
    setBugs(bugs.map(bug => {
      if (bug.id === id) {
        return { ...bug, status: bug.status === 'Open' ? 'Resolved' : 'Open' };
      }
      return bug;
    }));
  };

  const severityColors = {
    High: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
    Medium: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    Low: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20'
  };

  return (
    <div className="space-y-8">
      {/* Create New Bug Ribbon Form */}
      <form onSubmit={addBug} className="flex flex-col md:flex-row gap-4 items-end bg-black/5 dark:bg-white/5 p-4 rounded-2xl border border-black/5 dark:border-white/5">
        <div className="flex-1 w-full space-y-1.5">
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 px-1">Issue Overview</label>
          <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Describe the bug details..."
            className="w-full px-4 py-2.5 rounded-xl bg-white/80 dark:bg-[#1C2538]/80 border border-black/10 dark:border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
          />
        </div>
        <div className="w-full md:w-48 space-y-1.5">
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 px-1">Priority</label>
          <select 
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-white/80 dark:bg-[#1C2538]/80 border border-black/10 dark:border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white appearance-none"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <Button type="submit" className="w-full md:w-auto h-[42px] px-6">
          <Plus size={16} /> File Bug
        </Button>
      </form>

      {/* Bugs List Grid Workspace */}
      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight px-1">Active Ledger</h2>
        <div className="grid gap-3">
          <AnimatePresence mode="popLayout">
            {bugs.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 text-sm text-slate-400 dark:text-slate-500 bg-white/20 dark:bg-white/5 border border-dashed border-black/10 dark:border-white/10 rounded-2xl"
              >
                Zero tracking defects cataloged. Systems pristine.
              </motion.div>
            ) : (
              bugs.map((bug) => (
                <motion.div
                  key={bug.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-black/5 dark:border-white/5 bg-white/40 dark:bg-[#182030]/40 backdrop-blur-sm gap-4 ${bug.status === 'Resolved' ? 'opacity-60 line-through' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <button 
                      onClick={() => toggleStatus(bug.id)}
                      className={`mt-0.5 transition-colors ${bug.status === 'Resolved' ? 'text-green-500' : 'text-slate-400 hover:text-blue-500'}`}
                    >
                      <CheckCircle size={20} fill={bug.status === 'Resolved' ? 'currentColor' : 'transparent'} className={bug.status === 'Resolved' ? 'dark:text-green-400 text-green-600' : ''} />
                    </button>
                    <div>
                      <p className="text-sm font-medium leading-snug max-w-xl text-slate-900 dark:text-slate-100">{bug.title}</p>
                      <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-400 dark:text-slate-500">
                        <Clock size={12} />
                        <span>{bug.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 border-t sm:border-none pt-3 sm:pt-0 border-black/5 dark:border-white/5">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${severityColors[bug.severity]}`}>
                      {bug.severity}
                    </span>
                    <button 
                      onClick={() => deleteBug(bug.id)}
                      className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-500/10 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
