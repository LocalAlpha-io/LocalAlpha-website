import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12 bg-[#0d1117] z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="LocalAlpha" width={20} height={20} />
            <span className="text-[var(--muted)] font-mono text-sm">&copy; 2026 LocalAlpha.io</span>
          </div>
          <p className="text-xs text-[var(--muted)] opacity-50">Not affiliated with QuantConnect Corporation.</p>
        </div>
        <div className="flex flex-wrap gap-8">
          <a href="/docs" className="text-sm text-[var(--muted)] hover:text-white transition-colors">Documentation</a>
          <a href="/changelog" className="text-sm text-[var(--muted)] hover:text-white transition-colors">Changelog</a>
          <a href="/privacy" className="text-sm text-[var(--muted)] hover:text-white transition-colors">Privacy Policy</a>
          <a href="/terms" className="text-sm text-[var(--muted)] hover:text-white transition-colors">Terms & Conditions</a>
          <a href="/refund-policy" className="text-sm text-[var(--muted)] hover:text-white transition-colors">Refund Policy</a>
          <a href="/contact" className="text-sm text-[var(--muted)] hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
