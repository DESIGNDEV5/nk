import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { 
  UserPlus, 
  Search, 
  DollarSign, 
  TrendingUp, 
  FileCheck, 
  Shield,
  Clock,
  Users,
  Building,
  Briefcase,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function HowItWorksPage() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Create Your Account',
      description: 'Sign up in minutes with our secure registration process. Complete KYC verification to access premium investments.',
      details: [
        'Secure email verification',
        'Identity verification (KYC/AML)',
        'Accredited investor status confirmation',
        'Bank account linking for investments'
      ],
      step: '01'
    },
    {
      icon: Search,
      title: 'Explore Investment Opportunities',
      description: 'Browse our curated selection of real estate and business investments with detailed financial projections.',
      details: [
        'Detailed project analysis and due diligence reports',
        'Financial projections and ROI calculations',
        'Risk assessment and mitigation strategies',
        'Market analysis and competitive positioning'
      ],
      step: '02'
    },
    {
      icon: DollarSign,
      title: 'Make Your Investment',
      description: 'Purchase security tokens representing your ownership stake using our secure payment system.',
      details: [
        'Secure payment processing via bank transfer or wire',
        'Instant token issuance upon payment confirmation',
        'Legal documentation and investment agreements',
        'Blockchain-based ownership verification'
      ],
      step: '03'
    },
    {
      icon: TrendingUp,
      title: 'Track Performance & Earn Returns',
      description: 'Monitor your investments and receive regular distributions through our investor dashboard.',
      details: [
        'Real-time portfolio performance tracking',
        'Quarterly distribution payments',
        'Regular project updates and reports',
        'Tax documentation and reporting'
      ],
      step: '04'
    }
  ];

  const investmentTypes = [
    {
      icon: Building,
      title: 'Real Estate Investments',
      description: 'Commercial and residential properties with stable returns',
      features: [
        'Prime location properties',
        'Professional property management',
        'Regular rental income distributions',
        'Potential appreciation upside'
      ]
    },
    {
      icon: Briefcase,
      title: 'Business Acquisitions',
      description: 'Profitable businesses and growth-stage companies',
      features: [
        'Established revenue streams',
        'Experienced management teams',
        'Growth expansion opportunities',
        'Strategic exit planning'
      ]
    }
  ];

  const timeline = [
    {
      phase: 'Due Diligence',
      duration: '2-4 weeks',
      description: 'Comprehensive analysis of investment opportunity'
    },
    {
      phase: 'Token Offering',
      duration: '4-8 weeks',
      description: 'Public offering period for investor participation'
    },
    {
      phase: 'Acquisition/Development',
      duration: '3-12 months',
      description: 'Property acquisition or business integration'
    },
    {
      phase: 'Operations & Returns',
      duration: '3-7 years',
      description: 'Active management and regular distributions'
    },
    {
      phase: 'Exit Strategy',
      duration: '6-12 months',
      description: 'Strategic exit and final distribution to investors'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              How Inve Works
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our platform simplifies institutional-grade investing through a transparent, 
              secure, and regulated process designed for both novice and experienced investors.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Your Investment Journey
            </h2>
            <p className="text-lg text-slate-600">
              Four simple steps to start building your investment portfolio
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <step.icon className="h-6 w-6 text-blue-600" />
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                      </div>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Types */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Investment Opportunities
            </h2>
            <p className="text-lg text-slate-600">
              Diversify your portfolio across multiple asset classes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {investmentTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <type.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <p className="text-slate-600">{type.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Investment Timeline
            </h2>
            <p className="text-lg text-slate-600">
              Understanding the complete investment lifecycle
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            <div className="space-y-12">
              {timeline.map((phase, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-medium text-blue-600">{phase.duration}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{phase.phase}</h3>
                        <p className="text-slate-600">{phase.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Investing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of investors who trust Inve for their portfolio growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/register">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}