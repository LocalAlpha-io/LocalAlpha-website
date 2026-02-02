import {
  Shield,
  BarChart2,
  Zap,
  Search,
  LayoutGrid,
  CheckCircle2,
  ArrowRight,
  FileJson,
  Cpu,
  ChevronDown,
  Terminal,
  X,
  Check,
  Download,
  Sliders,
  PieChart
} from 'lucide-react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import TechStack from './components/TechStack';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[var(--background)] selection:bg-[var(--primary)] selection:text-white">

      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#30363d1a_1px,transparent_1px),linear-gradient(to_bottom,#30363d1a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)]"></div>
      </div>

      <Navbar />

      <main className="flex-grow z-10 relative">
        {/* Hero Section */}
        <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">

            {/* Spotlight Effect */}
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--primary)] opacity-[0.05] blur-[120px] rounded-full pointer-events-none"></div>

            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[var(--card)] border border-[var(--border)] mb-8 shadow-sm hover:border-[var(--muted)] transition-colors cursor-default">
              <Image src="/logo.png" alt="LocalAlpha" width={16} height={16} />
              <span className="text-xs font-mono text-[var(--muted)]">v1.0.0 Stable Release</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8">
              The Privacy-First <br className="hidden sm:block" />
              Frontend for <span className="text-[var(--primary)]">LEAN</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[var(--muted)] mb-12 leading-relaxed">
              Visualize backtests, debug logs, and analyze trade performance locally.
              <span className="text-white font-medium"> No cloud uploads. No telemetry.</span>
            </p>

            <div className="flex flex-col items-center gap-6 mb-20">
              <div className="flex flex-col sm:flex-row justify-center gap-4 w-full items-center">
                <a
                  href="https://localalpha.lemonsqueezy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ide-btn-primary flex items-center justify-center gap-2 text-base px-8 py-3.5 shadow-lg shadow-[rgba(46,160,67,0.2)] hover:scale-105 transition-transform w-full sm:w-auto h-[50px]"
                >
                  Get Started Today <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/LocalAlpha-io/localalpha-releases/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[50px] px-8 rounded-md bg-[var(--card)] border border-[var(--border)] text-white font-medium hover:bg-[#21262d] transition-all hover:border-[var(--muted)] flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <Download className="h-4 w-4" /> Download v1.0.0
                </a>
              </div>
              <p className="text-xs text-[var(--muted)] opacity-60">
                macOS, Windows & Linux • Hosted on GitHub
              </p>
            </div>
            <div className="relative mx-auto max-w-6xl rounded-xl bg-[#0d1117] shadow-2xl overflow-hidden aspect-[16/10] group animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <Image
                src="/screenshot.png"
                alt="LocalAlpha Dashboard Overview"
                fill
                className="object-contain"
                priority
              />
            </div>          </div>
        </section>

        {/* Tech Stack Trust Bar */}
        <TechStack />

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-[#161b22]/50 border-y border-[var(--border)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Workflow Integration</h2>
              <p className="text-[var(--muted)] max-w-2xl mx-auto">
                Designed to fit seamlessly into your existing local development loop.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connector Lines (Desktop) */}
              <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-[var(--border)] z-0"></div>

              {[
                {
                  icon: Terminal,
                  title: "1. Run Backtest",
                  desc: "Execute your strategy locally using the LEAN CLI. Output generates a standard JSON result."
                },
                {
                  icon: FileJson,
                  title: "2. Auto-Ingest",
                  desc: "LocalAlpha watches your output folder. As soon as the file appears, the dashboard updates."
                },
                {
                  icon: Search,
                  title: "3. Deep Dive",
                  desc: "Recalculate metrics, drill into trades, and verify log events without leaving your desktop."
                }
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-[#0d1117] border border-[var(--border)] flex items-center justify-center mb-6 shadow-xl group-hover:border-[var(--primary)] transition-colors duration-300">
                    <step.icon className="h-10 w-10 text-[var(--primary)]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-[var(--muted)] text-sm max-w-xs">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bento Grid Features */}
        <section id="features" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Institutional-Grade Analytics</h2>
              <p className="text-[var(--muted)] max-w-2xl mx-auto">
                Everything you need to audit your strategy's performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">

              {/* Feature 1: Privacy (Large) */}
              <div className="md:col-span-2 p-8 rounded-xl bg-[#161b22]/30 border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Shield className="h-32 w-32" />
                </div>
                <div className="relative z-10">
                  <Shield className="h-8 w-8 text-[var(--primary)] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">100% Local & Private</h3>
                  <p className="text-[var(--muted)] max-w-md">
                    Your strategy data never leaves your machine. LocalAlpha runs entirely offline, making it safe for proprietary institutional algorithms. No telemetry, no "cloud sync", no leaks.
                  </p>
                </div>
              </div>

              {/* Feature 2: Ingestion */}
              <div className="p-8 rounded-xl bg-[#161b22]/30 border border-[var(--border)] hover:border-[var(--secondary)] transition-all duration-300 group">
                <Zap className="h-8 w-8 text-[var(--secondary)] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">Instant Ingestion</h3>
                <p className="text-[var(--muted)] text-sm">
                  Drag & drop `result.json` or use Auto-Watch to sync instantly.
                </p>
              </div>

              {/* Feature 3: Metrics */}
              <div className="p-8 rounded-xl bg-[#161b22]/30 border border-[var(--border)] hover:border-[#db6d28] transition-all duration-300 group">
                <Cpu className="h-8 w-8 text-[#db6d28] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">Advanced Metrics</h3>
                <p className="text-[var(--muted)] text-sm">
                  Local recalculation of Sharpe, Sortino, Calmar, and PSR.
                </p>
              </div>

              {/* Feature 4: Trade X-Ray (Large) */}
              <div className="md:col-span-2 p-8 rounded-xl bg-[#161b22]/30 border border-[var(--border)] hover:border-[#a371f7] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <LayoutGrid className="h-32 w-32" />
                </div>
                <div className="relative z-10">
                  <LayoutGrid className="h-8 w-8 text-[#a371f7] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Trade X-Ray</h3>
                  <p className="text-[var(--muted)] max-w-md">
                    Drill down into every execution. Analyze Maximum Adverse Excursion (MAE) and MFE scatter plots to optimize your stop-losses and take-profit levels with surgical precision.
                  </p>
                </div>
              </div>

              {/* Feature 5: Reality Check (Large) */}
              <div className="md:col-span-2 p-8 rounded-xl bg-[#161b22]/30 border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Check className="h-32 w-32" />
                </div>
                <div className="relative z-10">
                  <Check className="h-8 w-8 text-[var(--primary)] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Reality Check</h3>
                  <p className="text-[var(--muted)] max-w-md">
                    Reconcile your backtests with live trading results. Detect slippage, latency, and execution errors by fuzzy-matching trades across two result files.
                  </p>
                </div>
              </div>

              {/* Feature 6: Log Explorer */}
              <div className="p-8 rounded-xl bg-[#161b22]/30 border border-[var(--border)] hover:border-[#db6d28] transition-all duration-300 group">
                <Search className="h-8 w-8 text-[#db6d28] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">Log Explorer</h3>
                <p className="text-[var(--muted)] text-sm">
                  Virtualized, regex-powered search for gigabyte-sized log files.
                </p>
              </div>

              {/* Feature 7: Optimization */}
              <div className="p-8 rounded-xl bg-[#161b22]/30 border border-[var(--border)] hover:border-[var(--secondary)] transition-all duration-300 group">
                <Sliders className="h-8 w-8 text-[var(--secondary)] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">Optimization</h3>
                <p className="text-[var(--muted)] text-sm">
                  Visualize parameter stability with interactive heatmaps to avoid overfitting.
                </p>
              </div>

              {/* Feature 8: Portfolio (Large) */}
              <div className="md:col-span-2 p-8 rounded-xl bg-[#161b22]/30 border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <PieChart className="h-32 w-32" />
                </div>
                <div className="relative z-10">
                  <PieChart className="h-8 w-8 text-[var(--primary)] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Portfolio Intelligence</h3>
                  <p className="text-[var(--muted)] max-w-md">
                    The "Fund Manager" view. Analyze correlations, sector exposure, and rolling beta across multiple strategies. Perform professional-grade attribution analysis locally.
                  </p>
                </div>
              </div>            </div>
          </div>
        </section>

        {/* COMPARISON SECTION */}
        <section className="py-24 bg-[#161b22]/50 border-y border-[var(--border)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Why upgrade from the CLI?</h2>
              <p className="text-[var(--muted)]">You wouldn't trade without charts. Why backtest without them?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* The Old Way */}
              <div className="p-8 rounded-xl border border-[var(--border)] bg-[#0d1117] opacity-80 hover:opacity-100 transition-opacity">
                <div className="text-sm font-mono text-[var(--muted)] mb-6 uppercase tracking-wider flex items-center gap-2">
                  <X className="h-4 w-4 text-[var(--danger)]" /> The Status Quo
                </div>
                <ul className="space-y-6">
                  {[
                    "Raw JSON output (hard to read)",
                    "No visual equity curve",
                    "Manual log parsing (grep/awk)",
                    "Zero trade analysis (MAE/MFE)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[var(--muted)]">
                      <X className="h-5 w-5 text-[var(--danger)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* The New Way */}
              <div className="p-8 rounded-xl border border-[var(--primary)] bg-[var(--primary)]/5 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 bg-[var(--primary)] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg tracking-wider">
                  RECOMMENDED
                </div>
                <div className="text-sm font-mono text-[var(--primary)] mb-6 uppercase tracking-wider flex items-center gap-2">
                  <Check className="h-4 w-4" /> LocalAlpha
                </div>
                <ul className="space-y-6">
                  {[
                    "Interactive, zoomable Charts",
                    "Advanced Metrics (Sharpe, PSR)",
                    "Visual Log Explorer & Debugger",
                    "MAE/MFE Optimization Scatterplots"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white">
                      <Check className="h-5 w-5 text-[var(--primary)] shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Simple Annual Pricing</h2>
              <p className="text-[var(--muted)]">Professional analytics for the price of a single trade.</p>
            </div>

            <div className="max-w-lg mx-auto">
              <div className="ide-card p-8 relative overflow-hidden bg-[#0d1117] shadow-2xl hover:shadow-[0_0_30px_-10px_rgba(46,160,67,0.3)] transition-shadow duration-500">
                <div className="absolute top-0 right-0 bg-[var(--primary)] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Professional License</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-extrabold text-white">$149</span>
                  <span className="text-[var(--muted)] ml-2">/ year</span>
                </div>
                <p className="text-[var(--muted)] mb-8 pb-8 border-b border-[var(--border)]">
                  The complete toolkit for the serious algorithmic trader.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    "Unlimited Backtest Ingestion",
                    "Advanced Analytics",
                    "Monte Carlo Simulation",
                    "Live Trading Monitor",
                    "Prioritized Support"
                  ].map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-[var(--foreground)]">
                      <CheckCircle2 className="h-5 w-5 text-[var(--primary)] mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://localalpha.lemonsqueezy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ide-btn-primary block w-full text-center py-4 text-lg"
                >
                  Buy Now
                </a>
                <p className="text-center text-xs text-[var(--muted)] mt-4">
                  Secure payment processed by Lemon Squeezy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-[#161b22]/50 border-y border-[var(--border)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "Is my strategy code or data ever sent to a server?", a: "No. LocalAlpha is a strictly local desktop application. It reads files from your hard drive and processes them in memory. No backtest data or strategy code is ever transmitted." },
                { q: "Does this replace the LEAN CLI?", a: "No, it complements it. You continue to run backtests with LEAN CLI as usual. LocalAlpha acts as the visualization layer for the output files." },
                { q: "What OS platforms are supported?", a: "We support macOS (Apple Silicon & Intel), Windows 10/11, and Linux (Ubuntu/Debian based)." },
                { q: "Can I use this for live trading?", a: "Yes. The Live Monitor feature allows you to tail a live deployment's result file in real-time, providing a dashboard for your running algorithms." }
              ].map((item, i) => (
                <div key={i} className="border border-[var(--border)] rounded-lg bg-[#0d1117] overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white hover:text-[var(--primary)] transition-colors">
                      {item.q}
                      <span className="transition group-open:rotate-180">
                        <ChevronDown className="h-5 w-5 text-[var(--muted)]" />
                      </span>
                    </summary>
                    <div className="text-[var(--muted)] px-6 pb-6 pt-0 text-sm leading-relaxed border-t border-[var(--border)]/50 pt-4">
                      {item.a}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[var(--primary)] opacity-5 pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to see clearly?</h2>
            <p className="text-xl text-[var(--muted)] mb-10 max-w-2xl mx-auto">
              Stop parsing JSON files. Start analyzing your edge.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://localalpha.lemonsqueezy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ide-btn-primary text-lg px-8 py-4 shadow-xl shadow-[rgba(46,160,67,0.3)] hover:scale-105 transition-transform"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-12 bg-[#0d1117] z-10 relative">
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
            <a href="/privacy" className="text-sm text-[var(--muted)] hover:text-white transition-colors">Privacy Policy</a>
            <a href="/contact" className="text-sm text-[var(--muted)] hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
