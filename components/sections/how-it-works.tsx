import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserPlus, Search, DollarSign, TrendingUp } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Create Account',
      description: 'Sign up in minutes with our secure registration process. Complete KYC verification to access premium investments.',
      step: '01'
    },
    {
      icon: Search,
      title: 'Browse Projects',
      description: 'Explore curated investment opportunities with detailed financial projections and risk assessments.',
      step: '02'
    },
    {
      icon: DollarSign,
      title: 'Invest Securely',
      description: 'Purchase tokens representing your share of the investment using our secure payment system.',
      step: '03'
    },
    {
      icon: TrendingUp,
      title: 'Earn Returns',
      description: 'Receive regular distributions and track your portfolio performance through our investor dashboard.',
      step: '04'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Start your investment journey in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <div className="flex justify-center mb-4 mt-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}