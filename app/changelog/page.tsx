import Navbar from '../components/Navbar';
import { Tag, Calendar, GitCommit, Image as LucideImage } from 'lucide-react';
import Image from 'next/image';

export default function ChangelogPage() {
  const releases = [
    {
      version: "v1.0.0",
      date: "January 30, 2026",
      type: "Major",
      title: "Initial Public Release",
      desc: "After months of beta testing, LocalAlpha is finally 1.0. The complete local backtesting suite is ready.",
      changes: [
        "Initial release of the Tauri-based desktop application.",
        "Integrated Python sidecar for Sharpe/Sortino recalculation.",
        "Canvas-based Equity Charts (Lightweight Charts) implementation.",
        "Regex-powered Log Explorer.",
        "Auto-Watch folder support for result.json."
      ]
    },
    {
      version: "v0.9.5",
      date: "January 15, 2026",
      type: "Beta",
      title: "Performance & Dark Mode",
      desc: "Major performance improvements for large log files and a refined UI theme.",
      changes: [
        "Added virtualized scrolling for log files >500MB.",
        "Dark mode contrast adjustments for better readability.",
        "Fixed a bug where the Python sidecar would timeout on M1 Macs."
      ]
    },
    {
      version: "v0.9.0",
      date: "December 20, 2025",
      type: "Beta",
      title: "The Python Engine",
      desc: "We completely rewrote the analytics engine from Rust to Python to leverage Pandas.",
      changes: [
        "Switched metric calculation to use `quantstats` library.",
        "Added MAE/MFE Scatter plots.",
        "Initial implementation of Benchmark Overlay."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] font-sans selection:bg-[var(--primary)] selection:text-white">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
            <h1 className="text-4xl font-bold text-white mb-4">Changelog</h1>
            <p className="text-[var(--muted)]">Follow our journey as we build the ultimate local backtesting tool.</p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-[var(--border)]">
            {releases.map((release, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    
                    {/* Timeline Dot */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border)] bg-[#0d1117] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        <GitCommit className="h-5 w-5 text-[var(--primary)]" />
                    </div>

                    {/* Content Card */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#161b22]/50 border border-[var(--border)] p-6 rounded-xl hover:border-[var(--muted)] transition-colors">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-1 rounded bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-mono font-bold border border-[var(--primary)]/20">
                                    {release.version}
                                </span>
                                <span className="text-xs text-[var(--muted)] flex items-center gap-1">
                                    <Calendar className="h-3 w-3" /> {release.date}
                                </span>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{release.title}</h3>
                        <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
                            {release.desc}
                        </p>
                        <ul className="space-y-2">
                            {release.changes.map((change, j) => (
                                <li key={j} className="text-sm text-[var(--foreground)] flex items-start gap-2">
                                    <span className="text-[var(--primary)] mt-1.5 h-1 w-1 rounded-full bg-current shrink-0"></span>
                                    {change}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-12 bg-[#0d1117] z-10 relative mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="LocalAlpha" width={20} height={20} />
                <span className="text-[var(--muted)] font-mono text-sm">© 2026 LocalAlpha.io</span>
            </div>
            <p className="text-xs text-[var(--muted)] opacity-50">Not affiliated with QuantConnect Corporation.</p>
          </div>
          <div className="flex gap-8">
            <a href="/docs" className="text-sm text-[var(--muted)] hover:text-white transition-colors">Documentation</a>
            <a href="/changelog" className="text-sm text-[var(--muted)] hover:text-white transition-colors">Changelog</a>
            <a href="#" className="text-sm text-[var(--muted)] hover:text-white transition-colors">Privacy Policy</a>
            <a href="/contact" className="text-sm text-[var(--muted)] hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
