import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { 
  Shield, 
  Lock, 
  Eye, 
  FileText,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  Database,
  Globe,
  AlertTriangle
} from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 15, 2024";

  const dataTypes = [
    {
      icon: Users,
      title: 'Personal Information',
      description: 'Name, email address, phone number, date of birth, and government-issued ID for KYC verification'
    },
    {
      icon: Lock,
      title: 'Financial Information',
      description: 'Bank account details, investment history, income verification, and accredited investor status'
    },
    {
      icon: Globe,
      title: 'Technical Information',
      description: 'IP address, browser type, device information, and usage analytics for platform optimization'
    },
    {
      icon: Eye,
      title: 'Transaction Data',
      description: 'Investment transactions, payment history, and portfolio performance data'
    }
  ];

  const dataUse = [
    'Verify your identity and comply with KYC/AML regulations',
    'Process investment transactions and manage your portfolio',
    'Provide customer support and respond to your inquiries',
    'Send important account notifications and investment updates',
    'Improve our platform security and prevent fraudulent activities',
    'Comply with legal and regulatory requirements',
    'Analyze platform usage to enhance user experience'
  ];

  const dataSharing = [
    {
      title: 'Service Providers',
      description: 'We share data with trusted third-party service providers who help us operate our platform, including payment processors, KYC verification services, and cloud hosting providers.'
    },
    {
      title: 'Regulatory Authorities',
      description: 'We may share information with regulatory bodies, law enforcement, or government agencies when required by law or to comply with legal obligations.'
    },
    {
      title: 'Business Transfers',
      description: 'In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity, subject to the same privacy protections.'
    },
    {
      title: 'Legal Requirements',
      description: 'We may disclose information when we believe it is necessary to protect our rights, your safety, or the safety of others, or to comply with legal processes.'
    }
  ];

  const userRights = [
    {
      title: 'Access Your Data',
      description: 'Request a copy of the personal information we hold about you'
    },
    {
      title: 'Correct Information',
      description: 'Update or correct any inaccurate personal information'
    },
    {
      title: 'Delete Data',
      description: 'Request deletion of your personal information (subject to legal retention requirements)'
    },
    {
      title: 'Data Portability',
      description: 'Receive your data in a structured, machine-readable format'
    },
    {
      title: 'Restrict Processing',
      description: 'Limit how we use your personal information in certain circumstances'
    },
    {
      title: 'Withdraw Consent',
      description: 'Withdraw consent for data processing where consent is the legal basis'
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
                <Shield className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
              Your privacy is fundamental to our mission. This policy explains how we collect, 
              use, and protect your personal information when you use our investment platform.
            </p>
            <div className="flex items-center justify-center space-x-2 text-slate-500">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <FileText className="h-6 w-6" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Inve ("we," "our," or "us") is committed to protecting your privacy and ensuring the security 
                  of your personal information. As a regulated investment platform, we collect and process 
                  personal data in accordance with applicable privacy laws, including the General Data Protection 
                  Regulation (GDPR), California Consumer Privacy Act (CCPA), and other relevant regulations.
                </p>
                <p className="text-slate-600">
                  This Privacy Policy describes how we collect, use, disclose, and safeguard your information 
                  when you visit our website, use our mobile application, or engage with our investment services. 
                  By using our platform, you consent to the data practices described in this policy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Information We Collect
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {dataTypes.map((type, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <type.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{type.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Additional Information Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Directly from you:</strong> Information you provide when registering, investing, or contacting us</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Automatically:</strong> Technical data collected through cookies and similar technologies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Third parties:</strong> Information from KYC providers, credit agencies, and public databases</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Public sources:</strong> Information from publicly available databases and records</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              How We Use Your Information
            </h2>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-slate-600 mb-6">
                  We use your personal information for the following purposes:
                </p>
                <ul className="space-y-3">
                  {dataUse.map((use, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">{use}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Information Sharing */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              How We Share Information
            </h2>
            
            <div className="space-y-6">
              {dataSharing.map((sharing, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">{sharing.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{sharing.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-2 border-amber-200 bg-amber-50 mt-8">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">Important Note</h3>
                    <p className="text-amber-800">
                      We do not sell, rent, or trade your personal information to third parties for their 
                      marketing purposes. Any sharing is strictly limited to the purposes outlined above 
                      and is subject to appropriate data protection agreements.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Data Security
            </h2>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Lock className="h-6 w-6" />
                  Security Measures
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  We implement industry-leading security measures to protect your personal information:
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-slate-600">256-bit SSL encryption</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-slate-600">Multi-factor authentication</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-slate-600">Regular security audits</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-slate-600">SOC 2 Type II compliance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-slate-600">Data encryption at rest</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-slate-600">Access controls and monitoring</span>
                  </li>
                </ul>
                <p className="text-slate-600 mt-4">
                  Despite our security measures, no method of transmission over the internet or electronic 
                  storage is 100% secure. We cannot guarantee absolute security but are committed to 
                  protecting your information using industry best practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Your Privacy Rights
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {userRights.map((right, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">{right.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{right.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 shadow-lg mt-8">
              <CardHeader>
                <CardTitle className="text-xl">How to Exercise Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  To exercise any of these rights, please contact us using the information provided below. 
                  We will respond to your request within 30 days (or as required by applicable law).
                </p>
                <p className="text-slate-600">
                  Please note that certain rights may be subject to limitations based on legal requirements, 
                  such as our obligation to retain records for regulatory compliance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Data Retention
            </h2>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Database className="h-6 w-6" />
                  Retention Periods
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  We retain your personal information for as long as necessary to fulfill the purposes 
                  outlined in this privacy policy, unless a longer retention period is required by law:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600">
                      <strong>Account Information:</strong> Retained for the duration of your account plus 7 years after closure for regulatory compliance
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600">
                      <strong>Transaction Records:</strong> Retained for 7 years after the transaction date as required by financial regulations
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600">
                      <strong>KYC Documentation:</strong> Retained for 5 years after account closure or relationship termination
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600">
                      <strong>Marketing Data:</strong> Retained until you withdraw consent or for 3 years of inactivity
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cookies and Tracking */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Cookies and Tracking Technologies
            </h2>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <p className="text-slate-600">
                  We use cookies and similar tracking technologies to enhance your experience on our platform:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Essential Cookies</h4>
                    <p className="text-slate-600 text-sm">
                      Required for basic platform functionality, security, and user authentication.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Analytics Cookies</h4>
                    <p className="text-slate-600 text-sm">
                      Help us understand how users interact with our platform to improve performance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Functional Cookies</h4>
                    <p className="text-slate-600 text-sm">
                      Remember your preferences and settings to enhance your user experience.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Marketing Cookies</h4>
                    <p className="text-slate-600 text-sm">
                      Used to deliver relevant advertisements and measure campaign effectiveness.
                    </p>
                  </div>
                </div>
                <p className="text-slate-600">
                  You can control cookie settings through your browser preferences. However, disabling 
                  certain cookies may affect platform functionality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <p className="text-xl text-blue-100 mb-8">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-blue-100">privacy@inve.com</p>
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
                <CardTitle className="text-xl text-center">Policy Updates</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-slate-600">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, 
                  technology, legal requirements, or other factors. We will notify you of any material 
                  changes by posting the updated policy on our website and updating the "Last Updated" date.
                </p>
                <p className="text-slate-600">
                  For significant changes, we may also send you a direct notification via email or through 
                  our platform. Your continued use of our services after any changes constitutes acceptance 
                  of the updated Privacy Policy.
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