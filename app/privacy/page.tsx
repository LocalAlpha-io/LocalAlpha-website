import Navbar from '../components/Navbar';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] font-sans selection:bg-[var(--primary)] selection:text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none text-[var(--muted)]">
          <p className="mb-4">Effective Date: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Overview</h2>
          <p>
            LocalAlpha Systems LLC ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use the LocalAlpha desktop application.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Data We Do NOT Collect</h2>
          <p>
            <strong>LocalAlpha is designed to be privacy-first.</strong> We do not collect, store, or transmit your trading strategies, backtest results, or financial data. All analysis happens locally on your machine.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Data We Collect</h2>
          <p>We only collect the following limited information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>License Verification:</strong> When you activate the software, we verify your license key against our server to ensure validity.</li>
            <li><strong>Website Analytics:</strong> We use privacy-friendly analytics (e.g., Vercel Analytics) on our marketing website to understand visitor trends. These do not track individual user behavior across the web.</li>
            <li><strong>Payment Information:</strong> Payments are processed by our Merchant of Record, Paddle (or Lemon Squeezy). We do not store your credit card details.</li>
          </ul>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Third-Party Services</h2>
          <p>
            We use trusted third-party services for specific functions:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Paddle / Lemon Squeezy:</strong> For payment processing and order fulfillment.</li>
            <li><strong>Vercel:</strong> For website hosting and analytics.</li>
          </ul>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at <a href="mailto:support@localalpha.io" className="text-[var(--primary)] hover:underline">support@localalpha.io</a>.
          </p>
        </div>
      </div>
    </div>
  );
}