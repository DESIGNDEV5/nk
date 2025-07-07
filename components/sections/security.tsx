import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, FileCheck } from 'lucide-react';

export function Security() {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Bank-Level Encryption',
      description: '256-bit SSL encryption protects all data transmission and storage, meeting banking industry standards.'
    },
    {
      icon: Lock,
      title: 'Multi-Factor Authentication',
      description: 'Advanced authentication including biometric verification ensures only you can access your account.'
    },
    {
      icon: Eye,
      title: 'Full Transparency',
      description: 'Complete audit trails and real-time reporting provide full visibility into all transactions.'
    },
    {
      icon: FileCheck,
      title: 'Regulatory Compliance',
      description: 'Full SEC compliance with regular audits by third-party security firms and legal experts.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Your Security is Our Priority
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We employ institutional-grade security measures to protect your investments and personal information
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-emerald-100 rounded-full">
                    <feature.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Trusted by Institutional Investors</h3>
          <p className="text-lg opacity-90 mb-6">
            Our platform is used by hedge funds, family offices, and institutional investors worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm opacity-75">
            <div>SOC 2 Type II Certified</div>
            <div>ISO 27001 Compliant</div>
            <div>SEC Registered</div>
            <div>FINRA Member</div>
          </div>
        </div>
      </div>
    </section>
  );
}