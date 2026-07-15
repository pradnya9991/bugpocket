import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Background from './components/Background';
import ThemeToggle from './components/ui/ThemeToggle';
import Window from './components/Window';
import Dock from './components/Dock';
import BugTracker from './views/BugTracker';
import Metrics from './views/Metrics';
import Settings from './views/Settings';
import { useLocalStorage } from './hooks/useLocalStorage';

export default function App() {
  const [activeTab, setActiveTab] = useState('bugs');
  const [bugs, setBugs] = useLocalStorage('bugpocket-data', [
    { id: 1, title: 'Memory buffer spill in fluid asset context scheduler', severity: 'High', status: 'Open', date: new Date().toLocaleDateString() },
    { id: 2, title: 'Glassmorphic panel clipping artifact inside nested viewports', severity: 'Medium', status: 'Open', date: new Date().toLocaleDateString() },
    { id: 3, title: 'Liquid rendering gradients fail styling constraints inside Firefox engine layout profiles', severity: 'Low', status: 'Resolved', date: new Date().toLocaleDateString() }
  ]);

  return (
    <ThemeProvider>
      <div className="relative w-screen h-screen flex flex-col items-center justify-center p-4 md:p-8 select-none">
        {/* Dynamic Canvas Background Elements */}
        <Background />

        {/* Global Toolbar Menu Elements */}
        <div className="absolute top-6 right-6 z-50">
          <ThemeToggle />
        </div>

        {/* Floating Desktop Canvas Windows */}
        <main className="w-full h-full flex items-center justify-center pb-16">
          {activeTab === 'bugs' && (
            <Window title="Defect Pipeline Management Engine">
              <BugTracker bugs={bugs} setBugs={setBugs} />
            </Window>
          )}

          {activeTab === 'metrics' && (
            <Window title="Telemetry Indicators Workspace">
              <Metrics bugs={bugs} />
            </Window>
          )}

          {activeTab === 'settings' && (
            <Window title="Ecosystem Environment Configurations">
              <Settings setBugs={setBugs} />
            </Window>
          )}
        </main>

        {/* Liquid Glass Bottom Navigation Dock */}
        <Dock activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </ThemeProvider>
  );
}
