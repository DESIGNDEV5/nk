import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { 
  Shield, 
  Users, 
  TrendingUp, 
  Award,
  Target,
  Globe,
  Building,
  Briefcase,
  CheckCircle,
  Star,
  ArrowRight,
  Heart,
  Lightbulb,
  Zap,
  DollarSign
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    {
      icon: DollarSign,
      value: '$250M+',
      label: 'Assets Under Management',
      description: 'Total value of investments managed on our platform'
    },
    {
      icon: Users,
      value: '5,000+',
      label: 'Active Investors',
      description: 'Trusted by investors worldwide'
    },
    {
      icon: Building,
      value: '150+',
      label: 'Successful Projects',
      description: 'Completed investments with positive returns'
    },
    {
      icon: TrendingUp,
      value: '14.2%',
      label: 'Average Annual Returns',
      description: 'Historical performance across all asset classes'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize the security of your investments and personal data above all else, implementing bank-level security measures.'
    },
    {
      icon: Heart,
      title: 'Investor-Centric',
      description: 'Every decision we make is guided by what\'s best for our investors, ensuring transparency and alignment of interests.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We leverage cutting-edge technology to democratize access to institutional-grade investment opportunities.'
    },
    {
      icon: CheckCircle,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our business practices and regulatory compliance.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      experience: '15+ years in investment banking',
      background: 'Former Goldman Sachs Managing Director',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      experience: '12+ years in fintech',
      background: 'Former Google Senior Engineer',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'David Rodriguez',
      role: 'Chief Investment Officer',
      experience: '20+ years in real estate',
      background: 'Former Blackstone Principal',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Emily Watson',
      role: 'Chief Compliance Officer',
      experience: '18+ years in regulatory affairs',
      background: 'Former SEC Senior Attorney',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Investor was established with a vision to democratize institutional-grade investments'
    },
    {
      year: '2020',
      title: 'SEC Registration',
      description: 'Obtained SEC registration as an Investment Advisor and FINRA membership'
    },
    {
      year: '2021',
      title: 'First $10M Raised',
      description: 'Successfully completed our first major real estate investment project'
    },
    {
      year: '2022',
      title: 'Platform Launch',
      description: 'Launched our tokenized investment platform to retail investors'
    },
    {
      year: '2023',
      title: '$100M Milestone',
      description: 'Reached $100M in assets under management across 50+ projects'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded operations internationally and reached $250M AUM'
    }
  ];

  const certifications = [
    {
      icon: Award,
      title: 'SEC Registered',
      description: 'Investment Advisor with the Securities and Exchange Commission'
    },
    {
      icon: Shield,
      title: 'FINRA Member',
      description: 'Member of the Financial Industry Regulatory Authority'
    },
    {
      icon: CheckCircle,
      title: 'SOC 2 Certified',
      description: 'Type II certification for security and compliance'
    },
    {
      icon: Globe,
      title: 'ISO 27001',
      description: 'International standard for information security management'
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
              About Investor
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're democratizing access to institutional-grade investments through innovative 
              technology and unwavering commitment to investor success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
                <Target className="h-4 w-4" />
                <span className="font-semibold">Our Mission</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Empowering Every Investor to Build Wealth
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At Investor, we believe that everyone deserves access to the same high-quality investment 
                opportunities traditionally reserved for institutions and ultra-high-net-worth individuals. 
                Our platform combines cutting-edge technology with deep financial expertise to make 
                institutional-grade investments accessible, transparent, and secure for all investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-slate-600">
              Trusted by thousands of investors worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-blue-100 rounded-full">
                      <stat.icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <CardTitle className="text-lg">{stat.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-emerald-100 rounded-full">
                      <value.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-center">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-slate-600">
              Experienced professionals with decades of combined expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <p className="text-sm text-slate-600">{member.experience}</p>
                  <p className="text-sm text-slate-500">{member.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-slate-600">
              Key milestones in our company's growth
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                          <h3 className="text-lg font-semibold text-slate-900 mb-2">{milestone.title}</h3>
                          <p className="text-slate-600">{milestone.description}</p>
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
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-lg text-slate-600">
              Regulated and certified by leading financial authorities
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Why Investors Choose Us
              </h2>
              <p className="text-lg text-slate-600">
                What sets us apart in the investment industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <Zap className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Technology-Driven</h3>
                    <p className="text-slate-600">Our platform leverages blockchain and AI to provide transparent, efficient investment processes.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-emerald-100 rounded-lg flex-shrink-0">
                    <Users className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Expert Team</h3>
                    <p className="text-slate-600">Our leadership team brings decades of experience from top-tier financial institutions.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-100 rounded-lg flex-shrink-0">
                    <Shield className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Regulatory Compliance</h3>
                    <p className="text-slate-600">Fully regulated and compliant with SEC, FINRA, and international standards.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-amber-100 rounded-lg flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Proven Track Record</h3>
                    <p className="text-slate-600">Consistent returns across 150+ successful projects with transparent reporting.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-red-100 rounded-lg flex-shrink-0">
                    <Heart className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Investor-First Approach</h3>
                    <p className="text-slate-600">Every decision is made with investor interests as our top priority.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-indigo-100 rounded-lg flex-shrink-0">
                    <Globe className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Global Opportunities</h3>
                    <p className="text-slate-600">Access to diversified investment opportunities across multiple markets and asset classes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Investment Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of investors who trust Investor for their portfolio growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/register">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}