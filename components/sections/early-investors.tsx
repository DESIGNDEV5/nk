import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Gift, Zap, Crown } from 'lucide-react';
import Link from 'next/link';

export function EarlyInvestors() {
  const rewards = [
    {
      icon: Star,
      title: 'Priority Access',
      description: 'First access to new investment opportunities before they go public'
    },
    {
      icon: Gift,
      title: 'Reduced Fees',
      description: 'Lifetime 50% reduction on all platform fees and transaction costs'
    },
    {
      icon: Zap,
      title: 'Bonus Tokens',
      description: 'Receive 10% bonus tokens on your first investment'
    },
    {
      icon: Crown,
      title: 'VIP Support',
      description: 'Dedicated account manager and priority customer support'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
            <Crown className="h-4 w-4" />
            <span className="font-semibold">Limited Time Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Exclusive Benefits for First 50 Investors
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join our founding investor community and unlock premium benefits that will enhance your investment journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {rewards.map((reward, index) => (
            <Card key={index} className="border-2 border-amber-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-amber-100 rounded-full">
                    <reward.icon className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <CardTitle className="text-lg">{reward.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">{reward.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <div className="text-4xl font-bold text-slate-900 mb-2">Only 23 spots left!</div>
            <div className="text-slate-600">Join now to secure your founding investor benefits</div>
          </div>
          
          <div className="mb-8">
            <div className="bg-slate-100 rounded-full h-4 mb-2">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-4 rounded-full" style={{ width: '54%' }}></div>
            </div>
            <div className="text-sm text-slate-600">27 of 50 founding investor spots claimed</div>
          </div>

          <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
            <Link href="/register">Claim Your Spot Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}