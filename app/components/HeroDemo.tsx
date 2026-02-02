'use client';

import { useState, useEffect } from 'react';
import { BarChart2, FileJson } from 'lucide-react';

export default function HeroDemo() {
  const [logs, setLogs] = useState<string[]>([]);
  const [profit, setProfit] = useState(0);

  // Simulation Data
  const allLogs = [
    { text: "Algorithm initialized.", type: "INFO", color: "text-[#c9d1d9]" },
    { text: "Loading history for SPY...", type: "TRACE", color: "text-[#8b949e]" },
    { text: "Warming up indicators...", type: "TRACE", color: "text-[#8b949e]" },
    { text: "BUY SPY @ 450.20 (Filled)", type: "ORDER", color: "text-[var(--primary)]" },
    { text: "Position adjusted based on signal.", type: "INFO", color: "text-[#c9d1d9]" },
    { text: "SELL SPY @ 452.10 (Filled)", type: "ORDER", color: "text-[var(--primary)]" },
    { text: "Profit Target Reached: +$190.00", type: "INFO", color: "text-[var(--primary)]" },
  ];

  // Typing Effect
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < allLogs.length) {
        const textToAdd = allLogs[currentIndex].text;
        setLogs(prev => [...prev, textToAdd]); // Fix: Capture value synchronously
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  // Count Up Effect
  useEffect(() => {
    const target = 12450;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setProfit(target);
        clearInterval(timer);
      } else {
        setProfit(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto max-w-5xl rounded-xl border border-[var(--border)] bg-[#0d1117] shadow-2xl overflow-hidden aspect-[16/10] group animate-in fade-in slide-in-from-bottom-8 duration-1000">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-[#161b22] border-b border-[var(--border)] flex items-center px-4 justify-between">
         <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="text-xs text-[var(--muted)] font-mono bg-black/20 px-3 py-1 rounded flex items-center gap-2">
              <FileJson className="h-3 w-3" />
              backtest-result-20260130.json
            </div>
         </div>
      </div>
      
      {/* Content */}
      <div className="p-6 pt-16 h-full flex flex-col gap-6 bg-[#0d1117]">
         {/* Stats Row */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#161b22] border border-[var(--border)] p-4 rounded-lg">
                <div className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1">Net Profit</div>
                <div className="text-2xl font-mono font-bold text-[var(--primary)]">
                    +${profit.toLocaleString()}
                </div>
            </div>
            <div className="bg-[#161b22] border border-[var(--border)] p-4 rounded-lg">
                <div className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1">Sharpe Ratio</div>
                <div className="text-2xl font-mono font-bold text-white">2.45</div>
            </div>
            <div className="bg-[#161b22] border border-[var(--border)] p-4 rounded-lg">
                <div className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1">Drawdown</div>
                <div className="text-2xl font-mono font-bold text-[var(--danger)]">-4.2%</div>
            </div>
            <div className="bg-[#161b22] border border-[var(--border)] p-4 rounded-lg">
                <div className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1">Win Rate</div>
                <div className="text-2xl font-mono font-bold text-[var(--primary)]">68%</div>
            </div>
         </div>
         
         {/* Chart Placeholder */}
         <div className="flex-grow bg-[#161b22] border border-[var(--border)] rounded-lg relative overflow-hidden flex items-center justify-center group-hover:border-[var(--muted)] transition-colors">
            <div className="absolute inset-0 bg-[url('/chart-placeholder-pattern.svg')] opacity-10"></div>
            {/* Simple CSS Chart Animation */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 flex items-end px-4 gap-1 opacity-20">
                {[40, 60, 45, 70, 50, 80, 60, 90, 75, 100, 60, 40].map((h, i) => (
                    <div key={i} className="flex-1 bg-[var(--primary)] rounded-t-sm transition-all duration-1000" style={{ height: `${h}%` }}></div>
                ))}
            </div>
            <div className="text-center z-10">
              <BarChart2 className="h-16 w-16 mx-auto mb-4 text-[var(--muted)] opacity-50" />
            </div>
         </div>

         {/* Animated Terminal */}
         <div className="h-32 bg-[#161b22] border border-[var(--border)] rounded-lg p-3 font-mono text-xs text-[var(--muted)] overflow-hidden relative font-medium">
            <div className="absolute top-2 right-2 bg-[var(--primary)] text-white text-[10px] px-2 py-0.5 rounded animate-pulse">Running</div>
            <div className="flex flex-col justify-end h-full">
                {logs.map((log, i) => (
                    <p key={i} className="mb-1 truncate">
                        <span className="text-[#8b949e] mr-2">{new Date().toISOString().split('T')[1].split('.')[0]}</span>
                        <span className={log.includes("BUY") || log.includes("SELL") ? "text-[var(--primary)]" : "text-[#c9d1d9]"}>
                            {log}
                        </span>
                    </p>
                ))}
            </div>
         </div>
      </div>
    </div>
  );
}
