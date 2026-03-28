'use client';

import { useState } from 'react';
import { FileText, Code, BarChart2, ShieldCheck } from 'lucide-react';

const tabs = [
  { id: 'metrics', label: 'Performance', icon: BarChart2 },
  { id: 'code', label: 'Algorithm', icon: Code },
  { id: 'research', label: 'Research', icon: FileText },
  { id: 'risk', label: 'Risk Review', icon: ShieldCheck },
];

const metrics = [
  { label: 'Sharpe Ratio', value: '1.82', color: 'text-[var(--primary)]' },
  { label: 'Annual Return', value: '22.4%', color: 'text-[var(--primary)]' },
  { label: 'Max Drawdown', value: '-14.1%', color: 'text-[var(--danger)]' },
  { label: 'Win Rate', value: '61%', color: 'text-white' },
  { label: 'Profit Factor', value: '1.94', color: 'text-white' },
  { label: 'Total Trades', value: '347', color: 'text-white' },
  { label: 'Sortino Ratio', value: '2.41', color: 'text-[var(--primary)]' },
  { label: 'Calmar Ratio', value: '1.59', color: 'text-white' },
];

const codePreview = `class MomentumSectorRotation(QCAlgorithm):
    def Initialize(self):
        self.SetStartDate(2018, 1, 1)
        self.SetEndDate(2025, 12, 31)
        self.SetCash(100000)
        self.SetBenchmark("SPY")

        # Universe: Large-cap US equities
        self.UniverseSettings.Resolution = Resolution.Daily
        self.AddUniverse(self.CoarseFilter, self.FineFilter)

        # Market regime indicators
        self.spy = self.AddEquity("SPY").Symbol
        self.spy_sma200 = self.SMA(self.spy, 200)
        self.vix_sma = self.SMA("VIX", 20)

        # Risk parameters
        self.max_positions = 15
        self.stop_loss = 0.08
        self.max_drawdown = 0.20

        # Scheduled rebalancing
        self.Schedule.On(
            self.DateRules.WeekStart("SPY"),
            self.TimeRules.AfterMarketOpen("SPY", 30),
            self.Rebalance
        )
        self.SetWarmUp(timedelta(days=250))

    # ... 280 more lines of production-ready code`;

const researchPreview = `RESEARCH REPORT: Momentum + Sector Rotation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Edge Rationale:
Cross-sectional momentum in equities is one of the
most documented anomalies in finance (Jegadeesh &
Titman, 1993). Combined with sector rotation based on
relative strength, this exploits both stock-level and
sector-level momentum persistence.

Hypotheses:
1. Stocks in top momentum quintile outperform bottom
   quintile by 8-12% annually after transaction costs
2. Sector-level momentum adds 2-4% annual alpha vs
   pure stock momentum
3. VIX filtering reduces max drawdown by 30-40%
   during crisis periods

Suggested Universe:
• S&P 500 constituents (large-cap, liquid)
• Minimum $10M average daily volume
• Price > $10 (avoid penny stocks)
• Exclude REITs and Utilities (low momentum)

Key Indicators:
• 12-1 month momentum (skip most recent month)
• 50/200 day SMA crossover for trend confirmation
• 14-day RSI for overbought/oversold filtering
• 14-day ATR for volatility-adjusted position sizing`;

const riskPreview = `RISK REVIEW — APPROVED ✓
━━━━━━━━━━━━━━━━━━━━━━
Risk Score: 87/100
Rating: LOW RISK

Position Sizing:            ✓ PASS
  Equal weight 1/15 = 6.7% max per position
  Volatility-adjusted sizing via ATR

Stop Losses:                ✓ PASS
  Hard stop: -8% from entry
  Trailing stop: Below 50-day SMA
  Time stop: 10 days for dead money

Drawdown Protection:        ✓ PASS
  Circuit breaker at -20% portfolio drawdown
  Reduces to 50% exposure at -15%

Market Regime:              ✓ PASS
  SPY > 200 SMA required for new entries
  VIX > 30 reduces position sizes by 50%

Sector Concentration:       ✓ PASS
  Max 30% in any single sector
  Max 3 positions per sector

Leverage:                   ✓ PASS
  No leverage used (max 100% invested)

Issues Found: 0 Critical, 1 Medium
  [MEDIUM] Consider adding earnings blackout
  period to avoid event-driven volatility`;

export default function SampleOutput() {
  const [activeTab, setActiveTab] = useState('metrics');

  return (
    <section id="demo" className="py-24 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            What You Get
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            A complete strategy package — not just code. Research, risk analysis,
            performance metrics, and the production-ready algorithm.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex gap-1 mb-4 bg-[#161b22] rounded-lg p-1 border border-[var(--border)]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-all flex-1 justify-center ${
                  activeTab === tab.id
                    ? 'bg-[var(--card)] text-white border border-[var(--border)] shadow-sm'
                    : 'text-[var(--muted)] hover:text-white'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="rounded-xl border border-[var(--border)] bg-[#0d1117] shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="h-10 bg-[#161b22] border-b border-[var(--border)] flex items-center px-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="ml-4 text-xs font-mono text-[var(--muted)]">
                {activeTab === 'metrics' && 'report.json — Performance Metrics'}
                {activeTab === 'code' && 'main.py — QuantConnect Algorithm'}
                {activeTab === 'research' && 'research.json — Quant Research Report'}
                {activeTab === 'risk' && 'risk_review.json — Risk Assessment'}
              </span>
            </div>

            {/* Metrics Tab */}
            {activeTab === 'metrics' && (
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {metrics.map((m) => (
                    <div
                      key={m.label}
                      className="bg-[#161b22] border border-[var(--border)] p-4 rounded-lg"
                    >
                      <div className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1">
                        {m.label}
                      </div>
                      <div className={`text-2xl font-mono font-bold ${m.color}`}>
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Visual equity curve placeholder */}
                <div className="bg-[#161b22] border border-[var(--border)] rounded-lg p-6 relative overflow-hidden h-48">
                  <div className="text-xs text-[var(--muted)] uppercase tracking-wider mb-4">
                    Equity Curve (2018–2025)
                  </div>
                  <div className="absolute bottom-0 left-6 right-6 h-32 flex items-end gap-[2px]">
                    {[20, 22, 18, 25, 30, 28, 35, 32, 40, 38, 45, 42, 50, 48, 55, 52, 60, 58, 65, 55, 50, 58, 65, 70, 68, 75, 72, 80, 78, 85, 82, 88, 85, 90, 88, 92, 90, 95, 92, 100].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-[var(--primary)] rounded-t-sm opacity-40"
                          style={{ height: `${h}%` }}
                        ></div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Code Tab */}
            {activeTab === 'code' && (
              <div className="p-6">
                <pre className="font-mono text-xs text-[var(--foreground)] leading-relaxed overflow-x-auto whitespace-pre">
                  {codePreview}
                </pre>
                <div className="mt-4 pt-4 border-t border-[var(--border)] text-center">
                  <span className="text-xs text-[var(--muted)]">
                    Full algorithm: 310 lines of production-ready QuantConnect Python
                  </span>
                </div>
              </div>
            )}

            {/* Research Tab */}
            {activeTab === 'research' && (
              <div className="p-6">
                <pre className="font-mono text-xs text-[var(--foreground)] leading-relaxed overflow-x-auto whitespace-pre">
                  {researchPreview}
                </pre>
              </div>
            )}

            {/* Risk Tab */}
            {activeTab === 'risk' && (
              <div className="p-6">
                <pre className="font-mono text-xs text-[var(--foreground)] leading-relaxed overflow-x-auto whitespace-pre">
                  {riskPreview}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
