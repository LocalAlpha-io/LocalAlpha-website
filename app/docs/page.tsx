import Link from 'next/link';
import { Cpu, Shield, Search, FileJson, Zap, LayoutGrid, BarChart2, Activity, PieChart, Clock, TrendingUp, Calendar, Target, Check, Sliders } from 'lucide-react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] font-sans selection:bg-[var(--primary)] selection:text-white">
      <Navbar />
      
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Sticky Sidebar */}
        <aside className="hidden md:block w-64 shrink-0 mr-12">
          <div className="sticky top-32">
            <div className="mb-8">
                <div className="text-sm font-bold text-white uppercase tracking-wider mb-3">Getting Started</div>
                <ul className="space-y-2 border-l border-[var(--border)]">
                    <li><a href="#installation" className="block pl-4 py-1 text-[var(--muted)] hover:text-white hover:border-l hover:border-[var(--primary)] -ml-px transition-all">Installation</a></li>
                    <li><a href="#architecture" className="block pl-4 py-1 text-[var(--muted)] hover:text-white hover:border-l hover:border-[var(--primary)] -ml-px transition-all">Architecture</a></li>
                </ul>
            </div>
            
            <div className="mb-8">
                <div className="text-sm font-bold text-white uppercase tracking-wider mb-3">Workflow</div>
                <ul className="space-y-2 border-l border-[var(--border)]">
                    <li><a href="#ingestion" className="block pl-4 py-1 text-[var(--muted)] hover:text-white hover:border-l hover:border-[var(--primary)] -ml-px transition-all">Ingesting Results</a></li>
                    <li><a href="#auto-watch" className="block pl-4 py-1 text-[var(--muted)] hover:text-white hover:border-l hover:border-[var(--primary)] -ml-px transition-all">Auto-Watch Mode</a></li>
                    <li><a href="#reconciliation" className="block pl-4 py-1 text-[var(--muted)] hover:text-white hover:border-l hover:border-[var(--primary)] -ml-px transition-all">Reconciliation</a></li>
                </ul>
            </div>

            <div className="mb-8">
                <div className="text-sm font-bold text-white uppercase tracking-wider mb-3">Analytics</div>
                <ul className="space-y-2 border-l border-[var(--border)]">
                    <li><a href="#metrics" className="block pl-4 py-1 text-[var(--muted)] hover:text-white hover:border-l hover:border-[var(--primary)] -ml-px transition-all">Core Metrics</a></li>
                    <li><a href="#visualizations" className="block pl-4 py-1 text-[var(--muted)] hover:text-white hover:border-l hover:border-[var(--primary)] -ml-px transition-all">Analysis Visualizations</a></li>
                    <li><a href="#monte-carlo" className="block pl-4 py-1 text-[var(--muted)] hover:text-white hover:border-l hover:border-[var(--primary)] -ml-px transition-all">Monte Carlo</a></li>
                    <li><a href="#logs" className="block pl-4 py-1 text-[var(--muted)] hover:text-white hover:border-l hover:border-[var(--primary)] -ml-px transition-all">Log Explorer</a></li>
                </ul>
            </div>

            <div className="mb-8">
                <div className="text-sm font-bold text-white uppercase tracking-wider mb-3">Advanced Tools</div>
                <ul className="space-y-2 border-l border-[var(--border)]">
                    <li><a href="#optimization" className="block pl-4 py-1 text-[var(--muted)] hover:text-white hover:border-l hover:border-[var(--primary)] -ml-px transition-all">Optimization</a></li>
                    <li><a href="#portfolio" className="block pl-4 py-1 text-[var(--muted)] hover:text-white hover:border-l hover:border-[var(--primary)] -ml-px transition-all">Portfolio & Attribution</a></li>
                </ul>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
           <h1 className="text-4xl font-bold text-white mb-6">Documentation</h1>
           <p className="text-xl text-[var(--muted)] mb-12 leading-relaxed">
             Learn how to leverage LocalAlpha to visualize, analyze, and optimize your LEAN backtests without leaving your desktop.
           </p>

           <hr className="border-[var(--border)] mb-12" />

            {/* SECTION: INSTALLATION */}
           <section id="installation" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded bg-[var(--primary)]/10 text-[var(--primary)]">
                        <Image src="/logo.png" alt="LocalAlpha" width={24} height={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Installation</h2>
                </div>
                <p className="text-[var(--muted)] mb-4">
                    LocalAlpha is a standalone binary. It includes a bundled Python environment for analytics, so you don't need to manage `pip` dependencies manually.
                </p>
                <div className="bg-[#161b22] border border-[var(--border)] rounded-lg p-4 font-mono text-sm text-[var(--foreground)] mb-4">
                    <div className="flex gap-4 border-b border-[var(--border)] pb-2 mb-2 text-[var(--muted)]">
                        <span>System Requirements</span>
                    </div>
                    <ul className="space-y-2">
                        <li>• macOS 12+ (Apple Silicon or Intel)</li>
                        <li>• Windows 10/11 (WSL2 optional)</li>
                        <li>• Linux (Debian/Ubuntu 20.04+)</li>
                        <li>• 4GB RAM minimum (8GB recommended for large logs)</li>
                    </ul>
                </div>
           </section>

           {/* SECTION: ARCHITECTURE */}
           <section id="architecture" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded bg-[#3fb950]/10 text-[#3fb950]">
                        <Shield className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Privacy-First Architecture</h2>
                </div>
                <p className="text-[var(--muted)] mb-4 leading-relaxed">
                    Unlike web-based dashboards, LocalAlpha runs 100% on your machine.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <li className="bg-[#161b22] p-4 rounded border border-[var(--border)]">
                        <strong className="text-white block mb-1">Frontend (Tauri)</strong>
                        <span className="text-sm text-[var(--muted)]">Renders charts using Rust-native webview. No browser telemetry.</span>
                    </li>
                    <li className="bg-[#161b22] p-4 rounded border border-[var(--border)]">
                        <strong className="text-white block mb-1">Analytics (Python Sidecar)</strong>
                        <span className="text-sm text-[var(--muted)]">A spawned subprocess handles number crunching using Pandas and QuantStats. It accepts inputs only from localhost.</span>
                    </li>
                </ul>
           </section>

           {/* SECTION: INGESTION */}
           <section id="ingestion" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded bg-[#d2a8ff]/10 text-[#d2a8ff]">
                        <FileJson className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Ingesting Results</h2>
                </div>
                <p className="text-[var(--muted)] mb-6">
                    LocalAlpha reads the standard `result.json` generated by the LEAN CLI.
                </p>
                <h3 className="text-lg font-bold text-white mb-3">Method 1: Drag & Drop</h3>
                <p className="text-[var(--muted)] mb-4">
                    Simply drag your `result.json` file anywhere onto the application window. The dashboard will instantly parse:
                </p>
                <ul className="list-disc list-inside text-[var(--muted)] ml-4 mb-8 space-y-1">
                    <li>Equity Curve points</li>
                    <li>Order Events</li>
                    <li>Runtime Statistics</li>
                    <li>Log messages</li>
                </ul>
           </section>

           {/* SECTION: AUTO-WATCH */}
           <section id="auto-watch" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded bg-[#e3b341]/10 text-[#e3b341]">
                        <Zap className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Auto-Watch Mode</h2>
                </div>
                <p className="text-[var(--muted)] mb-4">
                    For a seamless "Code → Backtest → Analyze" loop, configure Auto-Watch.
                </p>
                <div className="bg-[#161b22] border border-[var(--border)] rounded-lg p-6">
                    <ol className="list-decimal list-inside space-y-4 text-[var(--foreground)]">
                        <li>Open <span className="text-white font-bold">Settings</span> (Gear Icon).</li>
                        <li>Under "Watch Folder", select your LEAN CLI output directory (usually `./backtests`).</li>
                        <li>Toggle <span className="text-[var(--primary)] font-bold">Enable Auto-Watch</span>.</li>
                    </ol>
                    <div className="mt-4 p-4 bg-[#0d1117] rounded border border-[var(--border)] text-sm text-[var(--muted)]">
                        <span className="text-[var(--primary)] font-bold">Tip:</span> LocalAlpha intelligently filters files. It will ignore temporary files and only refresh when a valid `result.json` is completely written.
                    </div>
                </div>
           </section>

           {/* SECTION: RECONCILIATION */}
           <section id="reconciliation" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded bg-[#2ea043]/10 text-[#2ea043]">
                        <Check className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Reality Check (Reconciliation)</h2>
                </div>
                <p className="text-[var(--muted)] mb-4">
                    Verify that your live trading matches your backtests. This tool performs fuzzy matching between two `result.json` files (e.g., a Backtest vs. Live Trading result).
                </p>
                <div className="bg-[#161b22] border border-[var(--border)] rounded-lg p-6">
                    <h4 className="font-bold text-white mb-2">How it works</h4>
                    <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                        Upload two files. LocalAlpha will match trades based on <strong>Symbol</strong>, <strong>Quantity</strong>, and <strong>Entry Time</strong> (within a configurable tolerance window).
                    </p>
                    <ul className="text-sm text-[var(--muted)] space-y-2">
                        <li>• <strong>Slippage Analysis:</strong> Calculates the difference in execution price between simulated and live orders.</li>
                        <li>• <strong>Latency:</strong> Measures the time delay between expected entry/exit and actual execution.</li>
                        <li>• <strong>Missing Trades:</strong> Highlights orders that occurred in backtest but failed in live (or vice versa).</li>
                    </ul>
                </div>
           </section>

           {/* SECTION: METRICS */}
           <section id="metrics" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded bg-[#f0883e]/10 text-[#f0883e]">
                        <Cpu className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Core Metrics</h2>
                </div>
                <p className="text-[var(--muted)] mb-4">
                    We use the industry-standard <code className="text-[var(--primary)]">QuantStats</code> Python library to verify LEAN's summary statistics.
                </p>
                <div className="grid grid-cols-1 gap-4 mb-6">
                     <div className="p-4 border border-[var(--border)] rounded bg-[#161b22]">
                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                             Sharpe & Sortino
                        </h4>
                        <p className="text-sm text-[var(--muted)] leading-relaxed">
                            Calculated using daily returns (resampled from your equity curve). 
                            <br/>• <strong>Sharpe:</strong> Excess return per unit of total volatility.
                            <br/>• <strong>Sortino:</strong> Excess return per unit of <em>downside</em> volatility.
                        </p>
                    </div>
                    <div className="p-4 border border-[var(--border)] rounded bg-[#161b22]">
                        <h4 className="font-bold text-white mb-2">Probabilistic Sharpe Ratio (PSR)</h4>
                        <p className="text-sm text-[var(--muted)] leading-relaxed">
                            We calculate the Probabilistic Sharpe Ratio to estimate the probability that your strategy's performance is not due to luck (false discoveries), adjusting for skewness and kurtosis.
                        </p>
                    </div>
                </div>
           </section>

           {/* SECTION: VISUALIZATIONS */}
           <section id="visualizations" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded bg-[#a371f7]/10 text-[#a371f7]">
                        <BarChart2 className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Analysis Visualizations</h2>
                </div>
                <p className="text-[var(--muted)] mb-8">
                    LocalAlpha provides over 40 multidimensional visualizations to audit your strategy's DNA.
                </p>

                <div className="space-y-12">
                    {/* Sub-category: Risk & Efficiency */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Target className="h-5 w-5 text-[#a371f7]" /> Risk & Efficiency
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { name: "MAE/MFE Scatter", desc: "Optimize stop-loss and take-profit levels." },
                                { name: "Entry/Exit Efficiency", desc: "Measures quality of trade timing." },
                                { name: "MAE Distribution", desc: "Histogram of adverse price moves." },
                                { name: "Drawdown Duration", desc: "Profile of recovery times." },
                                { name: "Drawdown Depth vs Duration", desc: "Recovery effort analysis." },
                                { name: "Risk/Reward Ratio", desc: "Distribution of R:R per trade." }
                            ].map((item, i) => (
                                <div key={i} className="p-4 border border-[var(--border)] rounded bg-[#161b22]/50">
                                    <div className="text-sm font-bold text-white mb-1">{item.name}</div>
                                    <div className="text-xs text-[var(--muted)]">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sub-category: Trade Dynamics */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-[var(--primary)]" /> Trade Dynamics
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { name: "Trade P&L Distribution", desc: "Histogram of profit/loss frequency." },
                                { name: "Holding Period vs Profit", desc: "Time-to-Return relationship." },
                                { name: "Streak Analysis", desc: "Serial correlation of wins/losses." },
                                { name: "Lag Plot", desc: "Autocorrelation of trade outcomes." },
                                { name: "Trade Size vs Profit", desc: "Sizing effectiveness." },
                                { name: "Trade Returns (%)", desc: "Percentage-based return distribution." },
                                { name: "Trade Duration Histogram", desc: "Frequency of trade lengths." },
                                { name: "Consecutive Win/Loss", desc: "Runs analysis." }
                            ].map((item, i) => (
                                <div key={i} className="p-4 border border-[var(--border)] rounded bg-[#161b22]/50">
                                    <div className="text-sm font-bold text-white mb-1">{item.name}</div>
                                    <div className="text-xs text-[var(--muted)]">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sub-category: Timing & Seasonality */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-[#e3b341]" /> Timing & Seasonality
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { name: "P&L by Day/Hour", desc: "Identify your most profitable sessions." },
                                { name: "Activity Heatmap", desc: "Visual density of entries." },
                                { name: "Monthly Trade Count", desc: "Volume tracking over time." },
                                { name: "Seasonality Chart", desc: "Average return per calendar month." },
                                { name: "Profit by Day of Month", desc: "Monthly cycle analysis." },
                                { name: "Entry Time Distribution", desc: "Execution timing frequency." }
                            ].map((item, i) => (
                                <div key={i} className="p-4 border border-[var(--border)] rounded bg-[#161b22]/50">
                                    <div className="text-sm font-bold text-white mb-1">{item.name}</div>
                                    <div className="text-xs text-[var(--muted)]">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sub-category: Asset-Level Performance */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <PieChart className="h-5 w-5 text-[#d2a8ff]" /> Asset-Level Performance
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { name: "Performance by Symbol", desc: "Rank symbols by total P&L." },
                                { name: "Win Rate by Symbol", desc: "Accuracy per instrument." },
                                { name: "Profit Factor by Symbol", desc: "Risk-adjusted asset quality." },
                                { name: "Expectancy by Symbol", desc: "Expected value per trade." },
                                { name: "Cumulative P&L by Instrument", desc: "Time series decomposition." },
                                { name: "Sharpe by Symbol", desc: "Risk-adjusted performance per asset." },
                                { name: "Avg Win/Loss by Symbol", desc: "Capture ratio per instrument." }
                            ].map((item, i) => (
                                <div key={i} className="p-4 border border-[var(--border)] rounded bg-[#161b22]/50">
                                    <div className="text-sm font-bold text-white mb-1">{item.name}</div>
                                    <div className="text-xs text-[var(--muted)]">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sub-category: Stability & Rolling Stats */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Clock className="h-5 w-5 text-[var(--secondary)]" /> Stability & Rolling Stats
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { name: "Rolling Win Rate", desc: "Strategy stability over time." },
                                { name: "Rolling Profit Factor", desc: "Profitability consistency." },
                                { name: "Rolling Statistics", desc: "Sharpe and Volatility drift." },
                                { name: "Rolling Kelly Criterion", desc: "Position sizing evolution." },
                                { name: "Concurrent Positions", desc: "Risk concentration tracking." },
                                { name: "Monthly Returns Bar", desc: "Chronological performance grid." },
                                { name: "Win/Loss Evolution", desc: "Cumulative count tracking." },
                                { name: "Avg Duration Evolution", desc: "Timeframe drift monitoring." }
                            ].map((item, i) => (
                                <div key={i} className="p-4 border border-[var(--border)] rounded bg-[#161b22]/50">
                                    <div className="text-sm font-bold text-white mb-1">{item.name}</div>
                                    <div className="text-xs text-[var(--muted)]">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
           </section>

           {/* SECTION: MONTE CARLO */}
           <section id="monte-carlo" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded bg-[#2ea043]/10 text-[#2ea043]">
                        <Activity className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Monte Carlo Simulation</h2>
                </div>
                <p className="text-[var(--muted)] mb-4">
                    Stress-test your strategy by shuffling the order of your trades.
                </p>
                 <div className="bg-[#161b22] border border-[var(--border)] rounded-lg p-6">
                    <h4 className="font-bold text-white mb-2">Methodology</h4>
                    <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                        We perform <strong>1,000 simulations</strong> by randomly shuffling your realized trade P&L values (without replacement). This preserves the distribution of returns but destroys the sequence.
                    </p>
                    <ul className="text-sm text-[var(--muted)] space-y-1">
                        <li>• <strong>95th Percentile:</strong> Optimistic outcome (Lucky sequence)</li>
                        <li>• <strong>50th Percentile:</strong> Median outcome (Expected performance)</li>
                        <li>• <strong>5th Percentile:</strong> Pessimistic outcome (Unlucky sequence - "Risk of Ruin")</li>
                    </ul>
                </div>
           </section>

           {/* SECTION: LOGS */}
           <section id="logs" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded bg-[#79c0ff]/10 text-[#79c0ff]">
                        <Search className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Log Explorer</h2>
                </div>
                <p className="text-[var(--muted)] mb-4">
                    Debug complex strategies with a virtualized log viewer capable of handling gigabytes of text.
                </p>
                <div className="bg-[#161b22] border border-[var(--border)] rounded-lg p-4">
                    <h4 className="text-sm font-bold text-white mb-3">Search Syntax</h4>
                    <div className="grid gap-2 text-sm font-mono">
                        <div className="flex items-center justify-between p-2 bg-[#0d1117] rounded">
                            <span className="text-[var(--primary)]">ERROR</span>
                            <span className="text-[var(--muted)]">Finds simple text matches (case-insensitive)</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-[#0d1117] rounded">
                            <span className="text-[var(--secondary)]">Order:\s+\d+</span>
                            <span className="text-[var(--muted)]">Regex support for complex patterns</span>
                        </div>
                    </div>
                </div>
           </section>

           {/* SECTION: OPTIMIZATION */}
           <section id="optimization" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded bg-[#f0883e]/10 text-[#f0883e]">
                        <Sliders className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Strategy Optimization</h2>
                </div>
                <p className="text-[var(--muted)] mb-4">
                    Visualizing parameter stability is crucial to avoid overfitting. LocalAlpha allows you to ingest optimization CSV results and visualize them as heatmaps.
                </p>
                <div className="bg-[#161b22] border border-[var(--border)] rounded-lg p-6">
                    <h4 className="font-bold text-white mb-2">Optimization Heatmaps</h4>
                    <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                        Upload your optimization CSV file to visualize the relationship between parameters (e.g., Lookback Period, Threshold) and performance metrics (Sharpe Ratio, Net Profit).
                    </p>
                    <ul className="text-sm text-[var(--muted)] space-y-2">
                        <li>• <strong>Robustness Zones:</strong> Identify broad areas of profitability rather than single isolated peaks (which indicate overfitting).</li>
                        <li>• <strong>Parameter Sensitivity:</strong> See how sensitive your strategy is to small changes in parameter values.</li>
                    </ul>
                </div>
           </section>

           {/* SECTION: PORTFOLIO & ATTRIBUTION */}
           <section id="portfolio" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded bg-[#a371f7]/10 text-[#a371f7]">
                        <PieChart className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Portfolio & Attribution</h2>
                </div>
                <p className="text-[var(--muted)] mb-4">
                    Analyze multiple strategies simultaneously and decompose their drivers of return.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#161b22] border border-[var(--border)] rounded-lg p-6">
                        <h4 className="font-bold text-white mb-2">Portfolio Correlation</h4>
                        <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                            Upload multiple backtests to create a "Fund Manager" view.
                        </p>
                        <ul className="text-sm text-[var(--muted)] space-y-2">
                            <li>• <strong>Correlation Matrix:</strong> View Pearson correlation coefficients between strategies to assess diversification benefits.</li>
                            <li>• <strong>Combined Equity:</strong> See the weighted performance of your entire portfolio of algorithms.</li>
                        </ul>
                    </div>

                    <div className="bg-[#161b22] border border-[var(--border)] rounded-lg p-6">
                        <h4 className="font-bold text-white mb-2">Drivers of Return (Attribution)</h4>
                        <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                            Decompose your strategy's returns to understand <em>why</em> it made money.
                        </p>
                        <ul className="text-sm text-[var(--muted)] space-y-2">
                            <li>• <strong>Long/Short Attribution:</strong> Split performance by side.</li>
                            <li>• <strong>Sector Exposure:</strong> Visual breakdown of trade concentration by industry sector.</li>
                            <li>• <strong>Rolling Beta:</strong> Monitor your strategy's market sensitivity over time.</li>
                        </ul>
                    </div>
                </div>
           </section>

        </main>
      </div>

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