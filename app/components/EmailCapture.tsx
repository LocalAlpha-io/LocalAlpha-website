'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="h-[50px] px-6 rounded-md bg-[#1f6feb]/10 border border-[#1f6feb] text-[#1f6feb] flex items-center gap-2 animate-in fade-in duration-300">
        <Check className="h-4 w-4" />
        <span className="text-sm font-medium">Check your inbox for the download link!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
      <div className="relative flex-grow">
        <input
          type="email"
          placeholder="Enter email for trial..."
          className="w-full h-[50px] px-4 rounded-md bg-[var(--card)] border border-[var(--border)] text-white placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="h-[50px] px-6 rounded-md bg-[var(--card)] border border-[var(--border)] text-white font-medium hover:bg-[#21262d] transition-all hover:border-[var(--muted)] flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Download Trial'}
      </button>
    </form>
  );
}
