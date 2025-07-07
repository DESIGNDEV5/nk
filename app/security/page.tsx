import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { 
  Shield, 
  Lock, 
  Eye, 
  FileCheck, 
  Server,
  Key,
  UserCheck,
  AlertTriangle,
  CheckCircle,
  Globe,
  Database,
  Smartphone,
  CreditCard,
  Building,
  Award
} from 'lucide-react';
import Link from 'next/link';

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Bank-Level Encryption',
      description: '256-bit SSL encryption protects all data transmission and storage, meeting banking industry standards.',
      details: [
        'End-to-end encryption for all communications',
        'Advanced encryption standard (AES-256)',
        'Perfect forward secrecy implementation',
        'Regular security audits and penetration testing'
      ]
    },
    {
      icon: Lock,
      title: 'Multi-Factor Authentication',
      description: 'Advanced authentication including biometric verification ensures only you can access your account.',
      details: [
        'SMS and email verification codes',
        'Authenticator app integration (Google, Authy)',
        'Biometric authentication support',
        'Hardware security key compatibility'
      ]
    },
    {
      icon: Eye,
      title: 'Complete Transparency',
      description: 'Full audit trails and real-time reporting provide complete visibility into all transactions.',
      details: [
        'Immutable transaction records',
        'Real-time activity monitoring',
        'Comprehensive audit logs',
        'Transparent fee structure'
      ]
    },
    {
      icon: FileCheck,
      title: 'Regulatory Compliance',
      description: 'Full SEC compliance with regular audits by third-party security firms and legal experts.',
      details: [
        'SEC Regulation D compliance',
        'Anti-money laundering (AML) procedures',
        'Know Your Customer (KYC) verification',
        'Regular compliance audits'
      ]
    }
  ];

  const dataProtection = [
    {
      icon: Database,
      title: 'Data Storage Security',
      description: 'Your personal and financial data is protected with enterprise-grade security measures.',
      features: [
        'Encrypted data at rest and in transit',
        'Geographically distributed backups',
        'Zero-knowledge architecture',
        'GDPR and CCPA compliance'
      ]
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Our platform runs on secure, monitored infrastructure with 99.9% uptime guarantee.',
      features: [
        'AWS enterprise-grade hosting',
        '24/7 security monitoring',
        'DDoS protection and mitigation',
        'Automated threat detection'
      ]
    },
    {
      icon: CreditCard,
      title: 'Payment Security',
      description: 'All financial transactions are processed through PCI DSS compliant payment processors.',
      features: [
        'PCI DSS Level 1 compliance',
        'Tokenized payment processing',
        'Fraud detection algorithms',
        'Secure payment gateway integration'
      ]
    }
  ];

  const certifications = [
    {
      icon: Award,
      title: 'SOC 2 Type II',
      description: 'Certified for security, availability, and confidentiality controls'
    },
    {
      icon: Shield,
      title: 'ISO 27001',
      description: 'International standard for information security management'
    },
    {
      icon: Building,
      title: 'SEC Registered',
      description: 'Registered Investment Advisor with the Securities and Exchange Commission'
    },
    {
      icon: FileCheck,
      title: 'FINRA Member',
      description: 'Member of the Financial Industry Regulatory Authority'
    }
  ];

  const securityPractices = [
    {
      title: 'Regular Security Audits',
      description: 'Quarterly penetration testing and security assessments by independent third parties'
    },
    {
      title: 'Employee Background Checks',
      description: 'Comprehensive background verification for all team members with access to sensitive data'
    },
    {
      title: 'Incident Response Plan',
      description: '24/7 security operations center with immediate incident response capabilities'
    },
    {
      title: 'Data Minimization',
      description: 'We collect and store only the minimum data necessary for platform operations'
    },
    {
      title: 'Regular Updates',
      description: 'Continuous security updates and patches to maintain the highest protection standards'
    },
    {
      title: 'Insurance Coverage',
      description: 'Comprehensive cyber liability insurance covering potential security incidents'
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
              <div className="p-4 bg-emerald-100 rounded-full">
                <Shield className="h-12 w-12 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Your Security is Our Priority
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We employ institutional-grade security measures to protect your investments, 
              personal information, and ensure the integrity of every transaction on our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Core Security Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Enterprise-Grade Security Features
            </h2>
            <p className="text-lg text-slate-600">
              Multi-layered security architecture protecting every aspect of your investment journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-emerald-100 rounded-lg">
                      <feature.icon className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-slate-600 mt-2">{feature.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
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

      {/* Data Protection */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Comprehensive Data Protection
            </h2>
            <p className="text-lg text-slate-600">
              Your data is protected at every level with industry-leading security protocols
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {dataProtection.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-blue-100 rounded-full">
                      <item.icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <p className="text-slate-600">{item.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Industry Certifications & Compliance
            </h2>
            <p className="text-lg text-slate-600">
              Certified and audited by leading security and regulatory organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-2 border-emerald-200 text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-emerald-100 rounded-full">
                      <cert.icon className="h-8 w-8 text-emerald-600" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{cert.title}</h3>
                  <p className="text-sm text-slate-600">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Security Practices
            </h2>
            <p className="text-lg text-slate-600">
              Continuous improvement and monitoring to maintain the highest security standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityPractices.map((practice, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">{practice.title}</h3>
                      <p className="text-sm text-slate-600">{practice.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Alert */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-amber-200 bg-white">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-amber-100 rounded-full">
                  <AlertTriangle className="h-8 w-8 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Security Best Practices for Investors
                  </h3>
                  <p className="text-slate-600 mb-4">
                    While we provide enterprise-grade security, here are some best practices to keep your account secure:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span>Use a strong, unique password</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span>Enable two-factor authentication</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span>Never share your login credentials</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span>Log out from shared devices</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span>Monitor your account regularly</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span>Report suspicious activity immediately</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Security Team */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions About Security?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Our security team is available 24/7 to address any concerns or questions about platform security
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
              <Link href="mailto:security@investsecure.com">
                Contact Security Team
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-emerald-600">
              <Link href="/register">Start Investing Securely</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}