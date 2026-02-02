import { X, Check } from 'lucide-react';

export default function ComparisonTable() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Why upgrade from the CLI?</h2>
        <p className="text-[var(--muted)]">You wouldn't trade without charts. Why backtest without them?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* The Old Way */}
        <div className="p-8 rounded-xl border border-[var(--border)] bg-[#161b22]/30 opacity-70 hover:opacity-100 transition-opacity">
          <div className="text-sm font-mono text-[var(--muted)] mb-4 uppercase tracking-wider">The Status Quo</div>
          <h3 className="text-xl font-bold text-white mb-6">Standard LEAN CLI</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-[var(--muted)]">
              <X className="h-5 w-5 text-[var(--danger)] shrink-0" />
              <span>Raw JSON output (hard to read)</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--muted)]">
              <X className="h-5 w-5 text-[var(--danger)] shrink-0" />
              <span>No visual equity curve</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--muted)]">
              <X className="h-5 w-5 text-[var(--danger)] shrink-0" />
              <span>Manual log parsing (grep/awk)</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--muted)]">
              <X className="h-5 w-5 text-[var(--danger)] shrink-0" />
              <span>Zero trade analysis (MAE/MFE)</span>
            </li>
          </ul>
        </div>

        {/* The New Way */}
        <div className="p-8 rounded-xl border border-[var(--primary)] bg-[var(--primary)]/5 relative overflow-hidden">
           <div className="absolute top-0 right-0 bg-[var(--primary)] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              RECOMMENDED
            </div>
          <div className="text-sm font-mono text-[var(--primary)] mb-4 uppercase tracking-wider">The Upgrade</div>
          <h3 className="text-xl font-bold text-white mb-6">LocalAlpha</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-white">
              <Check className="h-5 w-5 text-[var(--primary)] shrink-0" />
              <span>Interactive, zoomable Charts</span>
            </li>
            <li className="flex items-start gap-3 text-white">
              <Check className="h-5 w-5 text-[var(--primary)] shrink-0" />
              <span>Advanced Metrics (Sharpe, PSR)</span>
            </li>
            <li className="flex items-start gap-3 text-white">
              <Check className="h-5 w-5 text-[var(--primary)] shrink-0" />
              <span>Visual Log Explorer & Debugger</span>
            </li>
            <li className="flex items-start gap-3 text-white">
              <Check className="h-5 w-5 text-[var(--primary)] shrink-0" />
              <span>MAE/MFE Optimization Scatterplots</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
