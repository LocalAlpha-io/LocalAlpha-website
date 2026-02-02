import Navbar from '../components/Navbar';
import { Shield, Lock, Server } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] font-sans selection:bg-[var(--primary)] selection:text-white">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-[var(--muted)]">Effective Date: January 30, 2026</p>
        </div>

        <div className="prose prose-invert max-w-none text-[var(--muted)]">
            <p className="lead text-lg text-white mb-8">
                At LocalAlpha, we believe your trading strategies are your intellectual property. 
                Our architecture is designed from the ground up to ensure <strong>zero data exfiltration</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 not-prose">
                <div className="p-6 rounded-lg bg-[#161b22] border border-[var(--border)]">
                    <Shield className="h-8 w-8 text-[var(--primary)] mb-4" />
                    <h3 className="text-white font-bold mb-2">Local-Only Execution</h3>
                    <p className="text-sm">All code analysis, backtest processing, and chart rendering happens on your machine's CPU.</p>
                </div>
                <div className="p-6 rounded-lg bg-[#161b22] border border-[var(--border)]">
                    <Lock className="h-8 w-8 text-[var(--secondary)] mb-4" />
                    <h3 className="text-white font-bold mb-2">No Cloud Uploads</h3>
                    <p className="text-sm">Your `result.json` files and strategy source code are never uploaded to our servers.</p>
                </div>
                <div className="p-6 rounded-lg bg-[#161b22] border border-[var(--border)]">
                    <Server className="h-8 w-8 text-[#db6d28] mb-4" />
                    <h3 className="text-white font-bold mb-2">Zero Telemetry</h3>
                    <p className="text-sm">We do not track your usage, trade volume, or strategy performance metrics.</p>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Data We Collect</h2>
            <p>
                We collect minimal data required for licensing and payment processing via our merchant of record, <strong>Lemon Squeezy</strong>.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Email Address:</strong> Used for license key delivery and product updates.</li>
                <li><strong>Payment Information:</strong> Handled securely by Lemon Squeezy. We do not store credit card details.</li>
                <li><strong>License Validation:</strong> When you activate the app, we verify your license key against our database. No other data is transmitted during this check.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Data We DO NOT Collect</h2>
            <p>
                To be explicitly clear, we have <strong>no technical capability</strong> to access:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Your trading algorithms or source code.</li>
                <li>Your backtest results, logs, or equity curves.</li>
                <li>Your brokerage credentials or API keys.</li>
                <li>Your live trading positions or P&L.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Application Security</h2>
            <p>
                LocalAlpha is a desktop application built with <strong>Tauri (Rust)</strong>. 
                The application operates in a strictly sandboxed environment.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Network Access:</strong> The app only makes outbound requests to verify your license and check for software updates. It does not accept inbound connections from the internet.</li>
                <li><strong>File System Access:</strong> The app only reads files you explicitly drag-and-drop or folders you configure for "Auto-Watch".</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Third-Party Services</h2>
            <p>
                We use the following third-party services:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Lemon Squeezy:</strong> For payments and license management.</li>
                <li><strong>GitHub Releases:</strong> For distributing application updates.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Contact Us</h2>
            <p>
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@localalpha.io" className="text-[var(--primary)] hover:underline">support@localalpha.io</a>.
            </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-12 bg-[#0d1117] z-10 relative mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
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
