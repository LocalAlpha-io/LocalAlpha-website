import Navbar from '../components/Navbar';
import { Mail, MessageSquare, Clock, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] font-sans selection:bg-[var(--primary)] selection:text-white">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-white mb-4">Contact Support</h1>
                    <p className="text-[var(--muted)]">We're here to help you get the most out of LocalAlpha.</p>
                </div>

                <div className="max-w-2xl mx-auto space-y-8">
                    {/* Contact Info */}
                    <div className="p-6 rounded-xl bg-[#161b22] border border-[var(--border)]">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Mail className="h-5 w-5 text-[var(--primary)]" /> Email Support
                        </h3>
                        <p className="text-[var(--muted)] mb-4 leading-relaxed">
                            For licensing issues, bug reports, or enterprise inquiries, please email us directly. We aim to respond within 24 hours.
                        </p>
                        <a href="mailto:support@localalpha.io" className="text-white font-mono hover:text-[var(--primary)] transition-colors text-lg">
                            support@localalpha.io
                        </a>
                    </div>

                    <div className="p-6 rounded-xl bg-[#161b22] border border-[var(--border)]">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <MessageSquare className="h-5 w-5 text-[#a371f7]" /> Community & Feature Requests
                        </h3>
                        <p className="text-[var(--muted)] mb-4 leading-relaxed">
                            Join our GitHub Discussions to suggest new features, share workflows, or chat with other users.
                        </p>
                        <a href="https://github.com/LocalAlpha-io/localalpha-releases/issues" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white hover:text-[var(--primary)] transition-colors">
                            Visit GitHub Repository &rarr;
                        </a>
                    </div>

                    <div className="p-6 rounded-xl bg-[#161b22] border border-[var(--border)]">
                        <div className="flex items-start gap-4">
                            <Clock className="h-6 w-6 text-[var(--muted)] shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-white mb-1">Support Hours</h4>
                                <p className="text-sm text-[var(--muted)]">Monday - Friday<br />9:00 AM - 5:00 PM EST</p>
                            </div>
                        </div>
                    </div>
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
