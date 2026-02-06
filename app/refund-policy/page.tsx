import Navbar from '../../components/Navbar';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] font-sans selection:bg-[var(--primary)] selection:text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-white mb-8">Refund Policy</h1>
        <div className="prose prose-invert max-w-none text-[var(--muted)]">
          <p className="mb-4">Effective Date: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-bold text-white mt-8 mb-4">30-Day Money-Back Guarantee</h2>
          <p>
            We want you to be completely satisfied with LocalAlpha. If you are not happy with the software for any reason, you may request a full refund within <strong>30 days</strong> of your initial purchase.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">How to Request a Refund</h2>
          <p>
            To initiate a refund, please contact our support team at <a href="mailto:support@localalpha.io" className="text-[var(--primary)] hover:underline">support@localalpha.io</a> with your order number or the email address used for purchase. We will process your refund request within 3-5 business days.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">License Revocation</h2>
          <p>
            Upon issuance of a refund, your license key will be deactivated, and you must uninstall and discontinue use of the LocalAlpha software.
          </p>
        </div>
      </div>
    </div>
  );
}
