'use client';

import { MessageSquare, Cpu, BarChart2, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    color: '#a371f7',
    title: 'Describe Your Idea',
    description:
      'Write a plain-English trading hypothesis. "Momentum on large-cap stocks with VIX filtering" is enough — the Researcher agent handles the rest.',
  },
  {
    icon: Cpu,
    color: '#1f6feb',
    title: 'Agents Build & Iterate',
    description:
      'Six specialized agents research, code, risk-check, backtest on QuantConnect, analyze results, and optimize — looping until targets are met.',
  },
  {
    icon: BarChart2,
    color: '#2ea043',
    title: 'Get Your Algorithm',
    description:
      'Receive a production-ready QuantConnect Python algorithm, full backtest report, risk analysis, and performance breakdown. Ready to deploy.',
  },
];

export default function HowItWorksLab() {
  return (
    <section className="py-24 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            From Idea to Algorithm in Minutes
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            No coding required. No manual backtesting. Just describe what you want to trade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting lines (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[33%] right-[33%] h-[1px] bg-[var(--border)]"></div>

          {steps.map((step, i) => (
            <div key={step.title} className="text-center relative">
              <div
                className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center border-2 bg-[var(--background)]"
                style={{ borderColor: step.color }}
              >
                <step.icon className="h-7 w-7" style={{ color: step.color }} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
