'use client';

import { ArrowRight } from 'lucide-react';

export default function CTALab() {
  return (
    <section className="py-24 border-t border-[var(--border)] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#a371f7]/5 to-transparent pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Stop writing algorithms manually.
        </h2>
        <p className="text-lg text-[var(--muted)] mb-10 leading-relaxed">
          Describe your edge. Let six AI agents do the heavy lifting.
          <br />
          Research. Code. Risk-check. Backtest. Analyze. Optimize. Repeat.
        </p>

        <a
          href="#pricing"
          className="inline-flex items-center justify-center gap-2 text-base px-10 py-4 rounded-md font-semibold text-white bg-[#a371f7] hover:bg-[#b486f8] shadow-lg shadow-[rgba(163,113,247,0.25)] hover:scale-105 transition-all"
        >
          Get Started <ArrowRight className="h-4 w-4" />
        </a>

        <p className="text-xs text-[var(--muted)] mt-6">
          Try a single run for $25. No subscription required.
        </p>
      </div>
    </section>
  );
}
