import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Security } from '@/components/sections/security';
import { EarlyInvestors } from '@/components/sections/early-investors';
import { Footer } from '@/components/sections/footer';
import { Header } from '@/components/sections/header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Security />
      <EarlyInvestors />
      <Footer />
    </div>
  );
}