'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Do I need to know how to code?',
    a: 'No. You describe your trading idea in plain English — "momentum on large-cap tech stocks with volatility filtering" is enough. The AI agents handle all the research, coding, and testing. You receive a ready-to-deploy QuantConnect algorithm.',
  },
  {
    q: 'Do I need a QuantConnect account?',
    a: 'Yes. You need a free QuantConnect account so our Executor agent can compile and backtest your algorithm on their cloud infrastructure. We use your QC API credentials (stored securely) to run backtests on your behalf.',
  },
  {
    q: 'How long does a run take?',
    a: 'Typically 5–15 minutes depending on the complexity of the strategy and how many optimization iterations are needed. Simple strategies with good initial research may converge in one iteration. Complex multi-factor strategies may need 3–5 iterations.',
  },
  {
    q: 'What if the strategy doesn\'t meet the target metrics?',
    a: 'The pipeline automatically iterates — the Analyst identifies weaknesses, the Optimizer suggests fixes, and the Developer rewrites the algorithm. If after maximum iterations the strategy still doesn\'t meet targets, you get the best version along with a detailed analysis of why the concept may not work as hypothesized.',
  },
  {
    q: 'Can I customize the target criteria?',
    a: 'Yes. By default we target Sharpe > 1.5, Annual Return > 15%, and Max Drawdown < -25%. Pro and Fund plans let you configure custom targets including minimum trade count, maximum turnover, and sector constraints.',
  },
  {
    q: 'Is this financial advice?',
    a: 'No. AI Strategy Lab is a research and development tool. Generated algorithms are for educational and research purposes only. Past backtest performance does not guarantee future results. Always perform your own due diligence before trading with real capital.',
  },
];

export default function FAQLab() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 border-t border-[var(--border)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-lg bg-[#161b22]/50 border border-[var(--border)] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[#161b22] transition-colors"
              >
                <span className="text-sm font-medium text-white pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-[var(--muted)] flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-sm text-[var(--muted)] leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
