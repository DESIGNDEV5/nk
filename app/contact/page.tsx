import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Send,
  Building,
  Users,
  Shield,
  HeadphonesIcon
} from 'lucide-react';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help with your investments',
      contact: 'support@investor.com',
      availability: '24/7 Response'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with our investment team',
      contact: '1-800-INVESTOR',
      availability: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: Building,
      title: 'Corporate Office',
      description: 'Visit our headquarters',
      contact: '123 Investment Ave, New York, NY 10001',
      availability: 'Mon-Fri 9AM-5PM EST'
    },
    {
      icon: HeadphonesIcon,
      title: 'Live Chat',
      description: 'Instant support for urgent matters',
      contact: 'Available on platform',
      availability: '24/7 Available'
    }
  ];

  const departments = [
    {
      icon: Users,
      title: 'Investor Relations',
      email: 'investors@investor.com',
      description: 'Portfolio questions, investment guidance, and account management'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      email: 'security@investor.com',
      description: 'Security concerns, compliance questions, and regulatory matters'
    },
    {
      icon: Building,
      title: 'Business Development',
      email: 'business@investor.com',
      description: 'Partnership opportunities and institutional inquiries'
    },
    {
      icon: MessageSquare,
      title: 'General Support',
      email: 'support@investor.com',
      description: 'Technical support, platform questions, and general assistance'
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
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our expert team is here to help you with your investment journey. 
              Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg text-slate-600">
              Choose the contact method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-blue-100 rounded-full">
                      <method.icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <p className="text-slate-600 text-sm">{method.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-900">{method.contact}</p>
                    <div className="flex items-center justify-center space-x-1">
                      <Clock className="h-4 w-4 text-slate-400" />
                      <span className="text-sm text-slate-600">{method.availability}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-slate-600">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    Contact Form
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help you?" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Department Contacts */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Department Contacts</CardTitle>
                    <p className="text-slate-600">Reach out to the right team for faster assistance</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {departments.map((dept, index) => (
                        <div key={index} className="border-l-4 border-blue-600 pl-4">
                          <div className="flex items-center gap-2 mb-1">
                            <dept.icon className="h-4 w-4 text-blue-600" />
                            <h4 className="font-semibold text-slate-900">{dept.title}</h4>
                          </div>
                          <p className="text-sm text-slate-600 mb-1">{dept.description}</p>
                          <a 
                            href={`mailto:${dept.email}`}
                            className="text-sm text-blue-600 hover:underline"
                          >
                            {dept.email}
                          </a>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Office Hours */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Office Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Saturday</span>
                        <span className="font-medium">10:00 AM - 2:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Sunday</span>
                        <span className="font-medium">Closed</span>
                      </div>
                      <div className="pt-2 border-t">
                        <p className="text-sm text-slate-600">
                          <strong>Emergency Support:</strong> Available 24/7 for critical issues
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600">
                Quick answers to common questions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">How do I start investing?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Simply create an account, complete the KYC verification process, 
                    and browse our available investment opportunities. You can start 
                    with as little as $1,000.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">What are the minimum investments?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Minimum investments vary by project, typically ranging from $1,000 
                    to $5,000. Each project page displays the specific minimum investment 
                    required.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">How secure are my investments?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We use bank-level security with 256-bit encryption, multi-factor 
                    authentication, and are fully SEC compliant. All investments are 
                    backed by real assets.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">When do I receive returns?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Returns are typically distributed quarterly, though this varies 
                    by investment type. You'll receive detailed information about 
                    distribution schedules for each investment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4">Emergency Support</h2>
            <p className="text-xl text-red-100 mb-6">
              For urgent security concerns or critical account issues
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-red-600 hover:bg-red-50">
                <a href="tel:1-800-EMERGENCY">
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency Hotline
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600">
                <a href="mailto:emergency@investor.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Emergency Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}