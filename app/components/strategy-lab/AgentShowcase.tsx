'use client';

import {
  Search,
  Code,
  ShieldCheck,
  Play,
  BarChart2,
  Settings2,
} from 'lucide-react';

const agents = [
  {
    icon: Search,
    name: 'Researcher',
    color: '#a371f7',
    hoverBorder: 'hover:border-[#a371f7]',
    role: 'Quant Researcher',
    description:
      'Grounds your idea in academic finance. Identifies factors, indicators, universe filters, and risk parameters based on empirical evidence.',
    outputs: ['Research report', 'Testable hypotheses', 'Indicator selection', 'Universe design'],
    span: 'md:col-span-2',
  },
  {
    icon: Code,
    name: 'Developer',
    color: '#1f6feb',
    hoverBorder: 'hover:border-[#1f6feb]',
    role: 'Strategy Developer',
    description:
      'Writes production-grade QuantConnect Python algorithms. Handles revisions from risk review and analyst feedback automatically.',
    outputs: ['Complete LEAN algorithm', 'Risk management code', 'Scheduled rebalancing'],
    span: '',
  },
  {
    icon: ShieldCheck,
    name: 'Risk Manager',
    color: '#db6d28',
    hoverBorder: 'hover:border-[#db6d28]',
    role: 'Chief Risk Officer',
    description:
      'Reviews every algorithm for position sizing, stop-losses, drawdown protection, leverage controls, and implementation risks.',
    outputs: ['Risk score', 'Issue identification', 'Parameter recommendations'],
    span: '',
  },
  {
    icon: Play,
    name: 'Executor',
    color: '#2ea043',
    hoverBorder: 'hover:border-[#2ea043]',
    role: 'Backtest Executor',
    description:
      'Manages the full QuantConnect API lifecycle — uploads code, compiles, runs backtests, and retrieves results automatically.',
    outputs: ['Compiled algorithm', 'Backtest results', 'Runtime statistics'],
    span: 'md:col-span-2',
  },
  {
    icon: BarChart2,
    name: 'Analyst',
    color: '#da3633',
    hoverBorder: 'hover:border-[#da3633]',
    role: 'Strategy Critic',
    description:
      'Evaluates backtest results with institutional rigor. Checks Sharpe, drawdown, win rate, statistical significance, and overfitting risk.',
    outputs: ['Performance grade', 'Strength/weakness analysis', 'Overfitting assessment'],
    span: 'md:col-span-2',
  },
  {
    icon: Settings2,
    name: 'Optimizer',
    color: '#e3b341',
    hoverBorder: 'hover:border-[#e3b341]',
    role: 'Strategy Optimizer',
    description:
      'Produces specific, actionable improvements — parameter changes, structural fixes, risk adjustments — then loops back for another iteration.',
    outputs: ['Parameter tuning', 'Structural improvements', 'Robustness checks'],
    span: '',
  },
];

export default function AgentShowcase() {
  return (
    <section className="py-24 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Six Agents. One Pipeline.
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            Each agent is a specialist. Together they form a complete quantitative research team
            that iterates until your strategy meets institutional-grade targets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className={`${agent.span} p-8 rounded-xl bg-[#161b22]/30 border border-[var(--border)] ${agent.hoverBorder} transition-all duration-300 relative overflow-hidden group`}
            >
              {/* Background icon */}
              {agent.span && (
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <agent.icon className="h-32 w-32" />
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <agent.icon
                  className="h-8 w-8 group-hover:scale-110 transition-transform"
                  style={{ color: agent.color }}
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{agent.name}</h3>
                  <span className="text-xs font-mono text-[var(--muted)]">{agent.role}</span>
                </div>
              </div>

              <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
                {agent.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {agent.outputs.map((output) => (
                  <span
                    key={output}
                    className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[var(--muted)]"
                  >
                    {output}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
