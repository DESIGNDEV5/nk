import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { 
  AlertTriangle, 
  TrendingDown, 
  DollarSign,
  Building,
  Briefcase,
  Globe,
  Shield,
  Clock,
  Users,
  FileText,
  Scale,
  Calendar,
  Mail,
  Phone,
  MapPin,
  XCircle,
  Info,
  Target,
  Zap
} from 'lucide-react';
import Link from 'next/link';

export default function RiskDisclosuresPage() {
  const lastUpdated = "January 15, 2024";

  const generalRisks = [
    {
      icon: TrendingDown,
      title: 'Market Risk',
      description: 'Investment values may fluctuate significantly due to market conditions, economic factors, and industry trends.',
      details: [
        'Economic downturns can negatively impact all investments',
        'Interest rate changes affect investment valuations',
        'Inflation can erode real returns over time',
        'Market volatility can cause substantial short-term losses'
      ]
    },
    {
      icon: DollarSign,
      title: 'Liquidity Risk',
      description: 'Investments may not be easily convertible to cash and may have limited or no secondary markets.',
      details: [
        'No guarantee of ability to sell investments when desired',
        'Limited secondary market for tokenized securities',
        'Early withdrawal may result in significant penalties',
        'Market conditions may prevent timely liquidation'
      ]
    },
    {
      icon: Users,
      title: 'Credit Risk',
      description: 'Risk of loss due to borrower default or deterioration in creditworthiness of investment counterparties.',
      details: [
        'Borrowers may default on loan obligations',
        'Credit ratings can change unexpectedly',
        'Economic stress can increase default rates',
        'Recovery rates may be lower than anticipated'
      ]
    },
    {
      icon: Scale,
      title: 'Regulatory Risk',
      description: 'Changes in laws and regulations may adversely affect investment performance and platform operations.',
      details: [
        'Securities laws may change affecting investment structure',
        'Tax regulations could impact investment returns',
        'New compliance requirements may increase costs',
        'Regulatory actions could restrict platform operations'
      ]
    }
  ];

  const specificRisks = [
    {
      icon: Building,
      title: 'Real Estate Investment Risks',
      risks: [
        'Property values may decline due to local market conditions',
        'Vacancy rates may be higher than projected',
        'Maintenance and repair costs may exceed estimates',
        'Natural disasters or environmental issues may damage properties',
        'Changes in zoning laws or property taxes may affect profitability',
        'Interest rate increases may reduce property values',
        'Economic downturns may reduce rental demand'
      ]
    },
    {
      icon: Briefcase,
      title: 'Business Investment Risks',
      risks: [
        'Business operations may not perform as expected',
        'Management teams may make poor strategic decisions',
        'Competition may erode market share and profitability',
        'Technology disruption may make business models obsolete',
        'Key personnel may leave the organization',
        'Supply chain disruptions may impact operations',
        'Customer concentration may create dependency risks'
      ]
    },
    {
      icon: Zap,
      title: 'Technology and Platform Risks',
      risks: [
        'Cyber attacks may compromise platform security',
        'System outages may prevent access to investments',
        'Technology failures may result in transaction errors',
        'Data breaches may expose personal information',
        'Software bugs may affect platform functionality',
        'Third-party service failures may disrupt operations',
        'Blockchain or token technology may have vulnerabilities'
      ]
    }
  ];

  const investmentConsiderations = [
    {
      title: 'Suitability',
      description: 'These investments are suitable only for investors who can afford to lose their entire investment and do not need liquidity.',
      icon: Target
    },
    {
      title: 'Diversification',
      description: 'Concentration in a limited number of investments increases risk. Diversification across asset classes is recommended.',
      icon: Globe
    },
    {
      title: 'Time Horizon',
      description: 'These are long-term investments. Short-term investors should consider other investment options.',
      icon: Clock
    },
    {
      title: 'Professional Advice',
      description: 'Consult with financial, tax, and legal advisors before making investment decisions.',
      icon: Users
    }
  ];

  const performanceDisclosures = [
    'Past performance is not indicative of future results',
    'Projected returns are estimates and may not be achieved',
    'All investments carry the risk of total loss',
    'Returns may be subject to taxes that reduce net performance',
    'Fees and expenses will reduce overall returns',
    'Market conditions may prevent achieving projected returns',
    'Economic factors beyond our control may impact performance'
  ];

  const conflictsOfInterest = [
    {
      title: 'Management Fees',
      description: 'We receive management fees that may create incentives to recommend certain investments over others.'
    },
    {
      title: 'Related Party Transactions',
      description: 'Some investments may involve entities related to our management team or affiliates.'
    },
    {
      title: 'Investment Selection',
      description: 'We may have financial interests in the success of investments offered on our platform.'
    },
    {
      title: 'Service Providers',
      description: 'We may receive compensation from third-party service providers used in investment transactions.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-red-100 rounded-full">
                <AlertTriangle className="h-12 w-12 text-red-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Risk Disclosures
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
              Important information about the risks associated with investments offered through our platform. 
              Please read carefully before making any investment decisions.
            </p>
            <div className="flex items-center justify-center space-x-2 text-slate-500">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-red-200 bg-red-50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-8 w-8 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-red-900 mb-4">Important Risk Warning</h2>
                    <div className="space-y-3 text-red-800">
                      <p className="font-semibold">
                        ALL INVESTMENTS INVOLVE SUBSTANTIAL RISK OF LOSS
                      </p>
                      <p>
                        You may lose some or all of your investment. Past performance does not guarantee 
                        future results. These investments are speculative and suitable only for investors 
                        who can afford to lose their entire investment.
                      </p>
                      <p>
                        Before investing, carefully consider your financial situation, investment objectives, 
                        and risk tolerance. Consult with qualified financial, tax, and legal advisors.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* General Investment Risks */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              General Investment Risks
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {generalRisks.map((risk, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-red-100 rounded-lg">
                        <risk.icon className="h-6 w-6 text-red-600" />
                      </div>
                      <CardTitle className="text-lg">{risk.title}</CardTitle>
                    </div>
                    <p className="text-slate-600 mt-2">{risk.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {risk.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specific Investment Risks */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Specific Investment Risks
            </h2>
            
            <div className="space-y-8">
              {specificRisks.map((category, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <div className="p-2 bg-amber-100 rounded-lg">
                        <category.icon className="h-6 w-6 text-amber-600" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {category.risks.map((risk, riskIndex) => (
                        <div key={riskIndex} className="flex items-start space-x-2">
                          <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{risk}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Considerations */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Important Investment Considerations
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {investmentConsiderations.map((consideration, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <consideration.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{consideration.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{consideration.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Disclaimers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Performance Disclaimers
            </h2>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <TrendingDown className="h-6 w-6" />
                  Performance Warnings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {performanceDisclosures.map((disclosure, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Info className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{disclosure}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600">
                  <p className="text-amber-800 text-sm">
                    <strong>Important:</strong> Projected returns shown on our platform are estimates based on 
                    current market conditions and assumptions that may not prove accurate. Actual returns may 
                    be significantly different from projections.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conflicts of Interest */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Conflicts of Interest
            </h2>
            
            <Card className="border-0 shadow-lg mb-6">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Scale className="h-6 w-6" />
                  Potential Conflicts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6">
                  The following situations may create conflicts between our interests and yours:
                </p>
                <div className="space-y-4">
                  {conflictsOfInterest.map((conflict, index) => (
                    <div key={index} className="border-l-4 border-amber-600 pl-4">
                      <h4 className="font-semibold text-slate-900 mb-1">{conflict.title}</h4>
                      <p className="text-slate-600 text-sm">{conflict.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Our Commitment</h3>
                    <p className="text-blue-800 text-sm">
                      We are committed to managing conflicts of interest fairly and transparently. 
                      All material conflicts are disclosed, and we have policies in place to ensure 
                      that client interests are prioritized in our decision-making processes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regulatory Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Regulatory Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    SEC Registration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-600 text-sm">
                    Inve is registered as an Investment Advisor with the Securities and Exchange Commission.
                  </p>
                  <p className="text-slate-600 text-sm">
                    Registration does not imply a certain level of skill or training or endorsement by the SEC.
                  </p>
                  <p className="text-slate-600 text-sm">
                    Our Form ADV is available upon request and contains important information about our services.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    FINRA Membership
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-600 text-sm">
                    Our broker-dealer affiliate is a member of the Financial Industry Regulatory Authority.
                  </p>
                  <p className="text-slate-600 text-sm">
                    Securities transactions are subject to FINRA rules and investor protections.
                  </p>
                  <p className="text-slate-600 text-sm">
                    Disputes may be subject to FINRA arbitration procedures.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg mt-6">
              <CardHeader>
                <CardTitle className="text-xl">Additional Disclosures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  <strong>SIPC Protection:</strong> Securities in your account are protected by the Securities 
                  Investor Protection Corporation (SIPC) up to $500,000 (including $250,000 for cash claims).
                </p>
                <p className="text-slate-600">
                  <strong>State Registration:</strong> We may also be registered or notice-filed in various 
                  states where we conduct business. State registration requirements vary by jurisdiction.
                </p>
                <p className="text-slate-600">
                  <strong>International Investors:</strong> Our services are currently available only to 
                  U.S. residents. International investors should consult local regulations before investing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Questions About Investment Risks?</h2>
            <p className="text-xl text-red-100 mb-8">
              Our investment team is available to discuss risks and answer your questions
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 mx-auto mb-3 text-red-200" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-red-100">risks@inve.com</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 mx-auto mb-3 text-orange-200" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-red-100">1-800-INVE-RISK</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-3 text-yellow-200" />
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-red-100">123 Investment Ave<br />New York, NY 10001</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final Warning */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-red-200 bg-red-50">
              <CardContent className="p-8 text-center">
                <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-900 mb-4">Final Risk Warning</h3>
                <p className="text-red-800 mb-4">
                  By proceeding with any investment, you acknowledge that you have read, understood, 
                  and accepted all risks outlined in this disclosure document.
                </p>
                <p className="text-red-800 text-sm">
                  <strong>Remember:</strong> Never invest more than you can afford to lose. 
                  These investments are speculative and carry substantial risk of total loss.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}