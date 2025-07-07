import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Briefcase, DollarSign, Shield, TrendingUp, Users } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Building,
      title: 'Real Estate Opportunities',
      description: 'Access premium commercial and residential properties with institutional-grade due diligence.'
    },
    {
      icon: Briefcase,
      title: 'Business Investments',
      description: 'Invest in profitable businesses and startups with proven track records and growth potential.'
    },
    {
      icon: DollarSign,
      title: 'Low Minimum Investment',
      description: 'Start investing with as little as $1,000 and build your portfolio over time.'
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'All investments are SEC-compliant and fully regulated for investor protection.'
    },
    {
      icon: TrendingUp,
      title: 'Transparent Returns',
      description: 'Clear ROI projections and regular performance updates on all your investments.'
    },
    {
      icon: Users,
      title: 'Community of Investors',
      description: 'Join a network of sophisticated investors and share insights and opportunities.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why Institutional Investors Choose Us
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with traditional investment expertise 
            to deliver exceptional returns while maintaining the highest security standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}