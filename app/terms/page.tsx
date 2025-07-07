import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { 
  Shield, 
  FileText, 
  AlertTriangle,
  Scale,
  DollarSign,
  Lock,
  Users,
  Globe,
  Calendar,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  XCircle
} from 'lucide-react';
import Link from 'next/link';

export default function TermsOfServicePage() {
  const lastUpdated = "January 15, 2024";

  const keyTerms = [
    {
      icon: Users,
      title: 'Eligibility',
      description: 'You must be 18+ years old, legally capable of entering contracts, and meet accredited investor requirements where applicable.'
    },
    {
      icon: Shield,
      title: 'Account Security',
      description: 'You are responsible for maintaining the confidentiality of your account credentials and all activities under your account.'
    },
    {
      icon: DollarSign,
      title: 'Investment Risks',
      description: 'All investments carry risk of loss. Past performance does not guarantee future results. Invest only what you can afford to lose.'
    },
    {
      icon: Scale,
      title: 'Regulatory Compliance',
      description: 'Our platform operates under SEC regulations. All offerings are subject to federal and state securities laws.'
    }
  ];

  const prohibitedActivities = [
    'Using the platform for any illegal or unauthorized purpose',
    'Attempting to gain unauthorized access to other user accounts',
    'Transmitting viruses, malware, or other harmful code',
    'Engaging in market manipulation or fraudulent activities',
    'Violating any applicable laws or regulations',
    'Interfering with the proper functioning of the platform',
    'Creating multiple accounts to circumvent platform limits',
    'Sharing your account credentials with third parties'
  ];

  const investmentRisks = [
    {
      title: 'Market Risk',
      description: 'Investment values may fluctuate due to market conditions, economic factors, and industry trends.'
    },
    {
      title: 'Liquidity Risk',
      description: 'Investments may not be easily convertible to cash and may have limited secondary markets.'
    },
    {
      title: 'Credit Risk',
      description: 'Risk of loss due to borrower default or deterioration in creditworthiness of investment counterparties.'
    },
    {
      title: 'Regulatory Risk',
      description: 'Changes in laws and regulations may adversely affect investment performance and platform operations.'
    },
    {
      title: 'Technology Risk',
      description: 'Platform outages, cyber attacks, or technical failures may impact your ability to access investments.'
    },
    {
      title: 'Concentration Risk',
      description: 'Lack of diversification may result in higher volatility and potential for significant losses.'
    }
  ];

  const fees = [
    {
      type: 'Platform Fee',
      description: 'Annual fee of 1.5% of invested amount for platform maintenance and services'
    },
    {
      type: 'Transaction Fee',
      description: '0.5% fee on each investment transaction to cover processing costs'
    },
    {
      type: 'Management Fee',
      description: 'Variable fee (0.5% - 2%) depending on investment type and management requirements'
    },
    {
      type: 'Early Withdrawal Fee',
      description: '2% fee for withdrawals before minimum holding period (where applicable)'
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
              <div className="p-4 bg-blue-100 rounded-full">
                <FileText className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
              These terms govern your use of the Inve investment platform. Please read them carefully 
              before using our services.
            </p>
            <div className="flex items-center justify-center space-x-2 text-slate-500">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Agreement Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Scale className="h-6 w-6" />
                  Agreement to Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and 
                  Inve, Inc. ("Inve," "we," "our," or "us") regarding your use of our investment platform 
                  and related services (collectively, the "Service").
                </p>
                <p className="text-slate-600">
                  By accessing or using our Service, you agree to be bound by these Terms and our Privacy Policy. 
                  If you disagree with any part of these terms, you may not access the Service.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <p className="text-blue-800 font-medium">
                    Important: These Terms include important information about your legal rights, remedies, 
                    and obligations. Please read them carefully.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Terms */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Key Terms & Conditions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {keyTerms.map((term, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <term.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{term.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{term.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Eligibility Requirements
            </h2>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-6">
                <p className="text-slate-600">
                  To use our Service, you must meet the following requirements:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      General Requirements
                    </h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Be at least 18 years of age</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Have legal capacity to enter into contracts</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Provide accurate and complete information</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Complete identity verification (KYC)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-blue-600" />
                      Investment Requirements
                    </h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Meet accredited investor criteria (for certain offerings)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Demonstrate financial capability</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Acknowledge investment risks</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Comply with applicable securities laws</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-amber-900 mb-1">Geographic Restrictions</h4>
                      <p className="text-amber-800 text-sm">
                        Our services are currently available only to residents of the United States. 
                        Certain states may have additional restrictions.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Risks */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Investment Risks & Disclaimers
            </h2>
            
            <Card className="border-2 border-red-200 bg-red-50 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-2">Important Risk Disclosure</h3>
                    <p className="text-red-800">
                      All investments involve risk of loss. You may lose some or all of your investment. 
                      Past performance does not guarantee future results. Only invest money you can afford to lose.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {investmentRisks.map((risk, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-red-600" />
                      {risk.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{risk.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Prohibited Activities
            </h2>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-slate-600 mb-6">
                  You agree not to engage in any of the following prohibited activities:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {prohibitedActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <XCircle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{activity}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-slate-50 p-4 rounded-lg">
                  <p className="text-slate-600 text-sm">
                    <strong>Enforcement:</strong> Violation of these terms may result in account suspension, 
                    termination, and potential legal action. We reserve the right to investigate and take 
                    appropriate action against any prohibited activities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fees and Charges */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Fees and Charges
            </h2>
            
            <Card className="border-0 shadow-lg mb-6">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <DollarSign className="h-6 w-6" />
                  Fee Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6">
                  The following fees may apply to your use of our platform:
                </p>
                <div className="space-y-4">
                  {fees.map((fee, index) => (
                    <div key={index} className="flex justify-between items-start p-4 bg-slate-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-slate-900">{fee.type}</h4>
                        <p className="text-slate-600 text-sm">{fee.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Fee Transparency:</strong> All fees are disclosed before you make any investment. 
                    Fee schedules may be updated with 30 days' notice. Current fee information is always 
                    available in your account dashboard.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Availability */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Platform Availability & Limitations
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Service Availability
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-600 text-sm">
                    We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service.
                  </p>
                  <p className="text-slate-600 text-sm">
                    Scheduled maintenance will be announced in advance when possible.
                  </p>
                  <p className="text-slate-600 text-sm">
                    Emergency maintenance may occur without prior notice.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Lock className="h-5 w-5" />
                    Service Limitations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-600 text-sm">
                    We reserve the right to modify or discontinue services with notice.
                  </p>
                  <p className="text-slate-600 text-sm">
                    Investment limits may apply based on regulatory requirements.
                  </p>
                  <p className="text-slate-600 text-sm">
                    Some features may be restricted based on your verification status.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Account Termination
            </h2>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Termination by You</h3>
                  <p className="text-slate-600">
                    You may terminate your account at any time by contacting our support team. 
                    Upon termination, you will retain ownership of your investments, but will lose 
                    access to platform features and services.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Termination by Us</h3>
                  <p className="text-slate-600 mb-3">
                    We may terminate or suspend your account immediately, without prior notice, for:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Violation of these Terms</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Fraudulent or illegal activity</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Failure to meet eligibility requirements</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Extended period of inactivity</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600">
                  <p className="text-amber-800 text-sm">
                    <strong>Effect of Termination:</strong> Upon termination, your right to use the Service 
                    will cease immediately. However, your investment holdings and related rights will remain 
                    intact according to the terms of your individual investment agreements.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Limitation of Liability
            </h2>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <p className="text-slate-600">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, INVE SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600">Loss of profits, revenue, or business opportunities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600">Loss of data or information</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600">Business interruption or system downtime</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600">Investment losses due to market conditions</span>
                  </li>
                </ul>
                <p className="text-slate-600">
                  Our total liability to you for all claims arising from or relating to the Service 
                  shall not exceed the amount of fees you have paid to us in the 12 months preceding 
                  the claim.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Governing Law & Dispute Resolution
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Scale className="h-5 w-5" />
                    Governing Law
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-600 text-sm">
                    These Terms are governed by the laws of the State of Delaware, without regard 
                    to conflict of law principles.
                  </p>
                  <p className="text-slate-600 text-sm">
                    Any legal action must be brought in the federal or state courts located in 
                    New York County, New York.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Dispute Resolution
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-600 text-sm">
                    Most disputes can be resolved through our customer support team.
                  </p>
                  <p className="text-slate-600 text-sm">
                    For unresolved disputes, binding arbitration may be required under 
                    FINRA rules for investment-related matters.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Questions About These Terms?</h2>
            <p className="text-xl text-blue-100 mb-8">
              If you have questions about these Terms of Service, please contact us:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-blue-100">legal@inve.com</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 mx-auto mb-3 text-emerald-200" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-blue-100">1-800-INVE-HELP</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-3 text-purple-200" />
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-blue-100">123 Investment Ave<br />New York, NY 10001</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-center">Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-slate-600">
                  We reserve the right to modify these Terms at any time. We will notify users of 
                  material changes by posting the updated Terms on our website and updating the 
                  "Last Updated" date.
                </p>
                <p className="text-slate-600">
                  For significant changes that affect your rights or obligations, we will provide 
                  at least 30 days' notice via email or platform notification. Your continued use 
                  of the Service after any changes constitutes acceptance of the updated Terms.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Recommendation:</strong> We encourage you to review these Terms periodically 
                    to stay informed of any updates that may affect your use of our platform.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}