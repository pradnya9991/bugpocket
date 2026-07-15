import React from 'react';
import { HardDrive, RotateCcw } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Settings({ setBugs }) {
  const wipeData = () => {
    if(window.confirm("Are you sure you want to flush all bug telemetry data? This cannot be undone.")) {
      setBugs([]);
    }
  };

  return (
    <div className="space-y-8 max-w-xl">
      <div>
        <h2 className="text-xl font-bold tracking-tight">App Configuration</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Control storage profiles and ecosystem runtime configurations.</p>
      </div>

      <div className="divide-y divide-black/5 dark:divide-white/5">
        <div className="py-4 flex items-center justify-between">
          <div className="space-y-0.5">
            <h3 className="text-sm font-semibold">Data Schema Purge</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500">Clear database registers and reset backups to default values.</p>
          </div>
          <Button variant="danger" onClick={wipeData} className="!py-2 text-xs">
            <RotateCcw size={14} /> Wipe Data
          </Button>
        </div>

        <div className="py-4 flex items-center justify-between">
          <div className="space-y-0.5">
            <h3 className="text-sm font-semibold">Local Storage Mirroring</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500">Data is instantly saved natively via localized system keys.</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl">
            <HardDrive size={14} /> Encrypted / Active
          </div>
        </div>
      </div>
    </div>
  );
}
