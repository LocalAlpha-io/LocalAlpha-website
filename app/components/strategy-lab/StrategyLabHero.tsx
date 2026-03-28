'use client';

import { ArrowRight, Sparkles, Cpu } from 'lucide-react';

export default function StrategyLabHero() {
  return (
    <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Spotlight Effect - Purple/Blue for AI theme */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#a371f7] opacity-[0.05] blur-[120px] rounded-full pointer-events-none"></div>

        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[var(--card)] border border-[var(--border)] mb-8 shadow-sm hover:border-[var(--muted)] transition-colors cursor-default">
          <Sparkles className="h-4 w-4 text-[#a371f7]" />
          <span className="text-xs font-mono text-[var(--muted)]">Early Access — Limited Spots</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8">
          Describe an Idea. <br className="hidden sm:block" />
          Get a <span className="text-[#a371f7]">Backtested</span> <br className="hidden sm:block" />
          Algorithm.
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[var(--muted)] mb-12 leading-relaxed">
          Six AI agents research, code, risk-check, backtest, and optimize
          your trading strategy on QuantConnect —
          <span className="text-white font-medium"> fully automated.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-6 mb-20">
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full items-center">
            <a
              href="#pricing"
              className="flex items-center justify-center gap-2 text-base px-8 py-3.5 rounded-md font-semibold text-white bg-[#a371f7] hover:bg-[#b486f8] shadow-lg shadow-[rgba(163,113,247,0.2)] hover:scale-105 transition-all w-full sm:w-auto h-[50px]"
            >
              Get Early Access <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#demo"
              className="h-[50px] px-8 rounded-md bg-[var(--card)] border border-[var(--border)] text-white font-medium hover:bg-[#21262d] transition-all hover:border-[var(--muted)] flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Cpu className="h-4 w-4" /> See Sample Output
            </a>
          </div>
        </div>

        {/* Agent Pipeline Visual */}
        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-xl border border-[var(--border)] bg-[#0d1117] shadow-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="h-10 bg-[#161b22] border-b border-[var(--border)] flex items-center px-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="ml-4 text-xs font-mono text-[var(--muted)]">quantalpha — strategy-lab</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm space-y-3">
              <div className="text-[var(--muted)]">
                <span className="text-[var(--primary)]">$</span> python main.py &quot;Momentum strategy with sector rotation on large-cap US equities&quot;
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-3">
                  <span className="text-[#a371f7] font-bold w-28 text-right">RESEARCHER</span>
                  <span className="text-[var(--border)]">│</span>
                  <span className="text-[var(--foreground)]">Analyzing idea, grounding in academic literature...</span>
                  <span className="text-[var(--primary)] ml-auto">done ✓</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[var(--secondary)] font-bold w-28 text-right">DEVELOPER</span>
                  <span className="text-[var(--border)]">│</span>
                  <span className="text-[var(--foreground)]">Writing QuantConnect algorithm v1...</span>
                  <span className="text-[var(--primary)] ml-auto">done ✓</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#db6d28] font-bold w-28 text-right">RISK MGR</span>
                  <span className="text-[var(--border)]">│</span>
                  <span className="text-[var(--foreground)]">Reviewing stop-losses, position sizing, drawdown...</span>
                  <span className="text-[var(--primary)] ml-auto">approved ✓</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#3fb950] font-bold w-28 text-right">EXECUTOR</span>
                  <span className="text-[var(--border)]">│</span>
                  <span className="text-[var(--foreground)]">Compiling &amp; running backtest on QuantConnect...</span>
                  <span className="text-[var(--primary)] ml-auto">done ✓</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[var(--danger)] font-bold w-28 text-right">ANALYST</span>
                  <span className="text-[var(--border)]">│</span>
                  <span className="text-[var(--foreground)]">Evaluating Sharpe 1.82, Annual Return 22.4%, Max DD -14.1%...</span>
                  <span className="text-[var(--primary)] ml-auto">grade: A ✓</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#e3b341] font-bold w-28 text-right">OPTIMIZER</span>
                  <span className="text-[var(--border)]">│</span>
                  <span className="text-[var(--foreground)]">Strategy meets criteria — no further optimization needed</span>
                  <span className="text-[var(--primary)] ml-auto">complete ✓</span>
                </div>
              </div>
              <div className="pt-2 border-t border-[var(--border)]">
                <span className="text-[var(--primary)] font-bold">SUCCESS</span>
                <span className="text-[var(--muted)]"> — Algorithm saved to results/run_20260328/main.py</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
