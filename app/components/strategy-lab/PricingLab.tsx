'use client';

import { CheckCircle2, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Explorer',
    price: '25',
    unit: 'per run',
    badge: null,
    description: 'Try it out. Pay only when you use it.',
    features: [
      'Single strategy generation',
      'Up to 3 optimization iterations',
      'Full research report',
      'Risk analysis',
      'QuantConnect-ready algorithm',
    ],
    cta: 'Buy a Single Run',
    ctaStyle:
      'bg-[var(--card)] border border-[var(--border)] text-white hover:bg-[#21262d] hover:border-[var(--muted)]',
    glowStyle: '',
  },
  {
    name: 'Pro',
    price: '99',
    unit: '/ month',
    badge: 'POPULAR',
    description: 'For active strategy developers who iterate often.',
    features: [
      'Up to 10 runs per month',
      'Up to 5 optimization iterations per run',
      'Priority execution queue',
      'Full research + risk + analysis reports',
      'Run history & comparison dashboard',
      'Email support',
    ],
    cta: 'Start Pro Plan',
    ctaStyle:
      'bg-[#a371f7] text-white hover:bg-[#b486f8] shadow-lg shadow-[rgba(163,113,247,0.2)]',
    glowStyle: 'hover:shadow-[0_0_30px_-10px_rgba(163,113,247,0.3)]',
  },
  {
    name: 'Fund',
    price: '299',
    unit: '/ month',
    badge: null,
    description: 'For teams and serious allocators running multiple strategies.',
    features: [
      'Unlimited runs',
      'Up to 10 optimization iterations per run',
      'Fastest execution priority',
      'Multi-strategy portfolio analysis',
      'API access for automation',
      'Dedicated support channel',
    ],
    cta: 'Contact Us',
    ctaStyle:
      'bg-[var(--card)] border border-[var(--border)] text-white hover:bg-[#21262d] hover:border-[var(--muted)]',
    glowStyle: '',
  },
];

export default function PricingLab() {
  return (
    <section id="pricing" className="py-24 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            Start with a single run to see the quality. Scale up when you&apos;re ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`ide-card p-8 relative overflow-hidden bg-[#0d1117] transition-shadow duration-500 ${plan.glowStyle}`}
            >
              {plan.badge && (
                <div className="absolute top-0 right-0 bg-[#a371f7] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>

              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-extrabold text-white">${plan.price}</span>
                <span className="text-[var(--muted)] ml-2">{plan.unit}</span>
              </div>

              <p className="text-[var(--muted)] text-sm mb-8 pb-8 border-b border-[var(--border)]">
                {plan.description}
              </p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start text-sm text-[var(--foreground)]">
                    <CheckCircle2 className="h-5 w-5 text-[var(--primary)] mr-3 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block w-full text-center py-3.5 rounded-md font-semibold transition-all ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[var(--muted)] mt-8">
          All plans include QuantConnect cloud backtesting. You provide your own QC account.
          <br />
          Secure payment processed by Polar. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
