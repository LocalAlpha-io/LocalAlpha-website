import Navbar from '../../components/Navbar';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] font-sans selection:bg-[var(--primary)] selection:text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-white mb-8">Terms and Conditions</h1>
        <div className="prose prose-invert max-w-none text-[var(--muted)]">
          <p className="mb-4">Effective Date: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to LocalAlpha. These Terms and Conditions ("Terms") govern your use of the LocalAlpha desktop application and website (collectively, the "Service") operated by <strong>LocalAlpha Systems LLC</strong> ("we," "our," or "us"). By accessing or using the Service, you agree to be bound by these Terms.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">2. License Grant</h2>
          <p>
            Subject to your compliance with these Terms and payment of any applicable fees, LocalAlpha Systems LLC grants you a limited, non-exclusive, non-transferable, non-sublicensable license to download, install, and use the LocalAlpha desktop application on your personal devices for your internal business or personal purposes.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Restrictions</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reverse engineer, decompile, or disassemble the application.</li>
            <li>Distribute, sell, rent, or lease the application to third parties.</li>
            <li>Use the application to violate any applicable laws or regulations.</li>
          </ul>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Privacy</h2>
          <p>
            Your privacy is important to us. Our Privacy Policy explains how we handle your information. By using the Service, you consent to the collection and use of information as detailed in our <a href="/privacy" className="text-[var(--primary)] hover:underline">Privacy Policy</a>.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. LOCALALPHA SYSTEMS LLC DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">6. Limitation of Liability</h2>
          <p>
            IN NO EVENT SHALL LOCALALPHA SYSTEMS LLC BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">7. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at <a href="mailto:support@localalpha.io" className="text-[var(--primary)] hover:underline">support@localalpha.io</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
