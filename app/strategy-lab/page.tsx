'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StrategyLabHero from '../components/strategy-lab/StrategyLabHero';
import HowItWorksLab from '../components/strategy-lab/HowItWorksLab';
import AgentShowcase from '../components/strategy-lab/AgentShowcase';
import SampleOutput from '../components/strategy-lab/SampleOutput';
import PricingLab from '../components/strategy-lab/PricingLab';
import FAQLab from '../components/strategy-lab/FAQLab';
import CTALab from '../components/strategy-lab/CTALab';

export default function StrategyLabPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <main>
        <StrategyLabHero />
        <HowItWorksLab />
        <AgentShowcase />
        <SampleOutput />
        <PricingLab />
        <FAQLab />
        <CTALab />
      </main>
      <Footer />
    </div>
  );
}
