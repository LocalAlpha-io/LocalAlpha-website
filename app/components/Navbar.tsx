'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-[var(--border)] bg-[var(--background)]/80 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="LocalAlpha Logo" width={32} height={32} className="rounded-sm" />
            <span className="font-bold text-lg tracking-tight text-white font-mono">LocalAlpha</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-sm font-medium text-[var(--muted)] hover:text-white transition-colors">Features</Link>
            <Link href="/#how-it-works" className="text-sm font-medium text-[var(--muted)] hover:text-white transition-colors">How It Works</Link>
            <Link href="/#pricing" className="text-sm font-medium text-[var(--muted)] hover:text-white transition-colors">Pricing</Link>
            <Link href="/#faq" className="text-sm font-medium text-[var(--muted)] hover:text-white transition-colors">FAQ</Link>
            <Link href="/docs" className="text-sm font-medium text-[var(--muted)] hover:text-white transition-colors">Docs</Link>
            <Link href="/contact" className="text-sm font-medium text-[var(--muted)] hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://buy.polar.sh/polar_cl_mztBp23NMdan6CLI4XkTpvsziS5cwumD5uLex1Dphxv"
              target="_blank"
              rel="noopener noreferrer"
              className="ide-btn-primary text-sm shadow-[0_0_15px_-3px_var(--primary)] hover:shadow-[0_0_20px_-3px_var(--primary)] transition-shadow duration-300"
            >
              Buy License
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--muted)] hover:text-white p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1117] border-b border-[var(--border)] absolute top-16 left-0 right-0 p-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            <Link href="/#features" onClick={() => setIsOpen(false)} className="text-sm font-medium text-[var(--muted)] hover:text-white py-2 block border-b border-[var(--border)]/50">Features</Link>
            <Link href="/#how-it-works" onClick={() => setIsOpen(false)} className="text-sm font-medium text-[var(--muted)] hover:text-white py-2 block border-b border-[var(--border)]/50">How It Works</Link>
            <Link href="/#pricing" onClick={() => setIsOpen(false)} className="text-sm font-medium text-[var(--muted)] hover:text-white py-2 block border-b border-[var(--border)]/50">Pricing</Link>
            <Link href="/#faq" onClick={() => setIsOpen(false)} className="text-sm font-medium text-[var(--muted)] hover:text-white py-2 block border-b border-[var(--border)]/50">FAQ</Link>
            <Link href="/docs" onClick={() => setIsOpen(false)} className="text-sm font-medium text-[var(--muted)] hover:text-white py-2 block border-b border-[var(--border)]/50">Docs</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-sm font-medium text-[var(--muted)] hover:text-white py-2 block">Contact</Link>
            <a
              href="https://buy.polar.sh/polar_cl_mztBp23NMdan6CLI4XkTpvsziS5cwumD5uLex1Dphxv"
              target="_blank"
              rel="noopener noreferrer"
              className="ide-btn-primary text-sm text-center py-3 mt-2"
            >
              Buy License
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
