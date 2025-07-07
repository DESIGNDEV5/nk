'use client';

import { useState } from 'react';
import { mockProjects } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  MapPin, 
  TrendingUp, 
  DollarSign, 
  Calendar, 
  Users, 
  Shield,
  CheckCircle,
  AlertTriangle,
  Target
} from 'lucide-react';
import { useAuth } from '@/lib/auth-context';

interface ProjectDetailProps {
  projectId: string;
}

export function ProjectDetail({ projectId }: ProjectDetailProps) {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [isInvesting, setIsInvesting] = useState(false);
  const { user } = useAuth();

  const project = mockProjects.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Project Not Found</h1>
          <p className="text-slate-600">The project you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const progressPercentage = (project.raisedAmount / project.targetAmount) * 100;
  const daysLeft = Math.ceil((new Date(project.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  const tokensForAmount = investmentAmount ? Math.floor(Number(investmentAmount) / project.tokenPrice) : 0;

  const handleInvestment = async () => {
    if (!user) {
      alert('Please log in to invest');
      return;
    }

    const amount = Number(investmentAmount);
    if (amount < project.minimumInvestment) {
      alert(`Minimum investment is $${project.minimumInvestment.toLocaleString()}`);
      return;
    }

    setIsInvesting(true);
    
    // Simulate payment processing
    setTimeout(() => {
      alert('Investment successful! You will receive confirmation shortly.');
      setIsInvesting(false);
      setInvestmentAmount('');
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hero Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant={project.type === 'real-estate' ? 'default' : 'secondary'}>
                {project.type === 'real-estate' ? 'Real Estate' : 'Business'}
              </Badge>
              <Badge variant="outline">{project.status}</Badge>
            </div>
            
            <h1 className="text-3xl font-bold text-slate-900">{project.title}</h1>
            <p className="text-lg text-slate-600">{project.description}</p>
            
            {project.location && (
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-slate-400" />
                <span className="text-slate-600">{project.location}</span>
              </div>
            )}
          </div>

          {/* Image Gallery */}
          <div className="grid md:grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            ))}
          </div>

          {/* Project Details Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="business-plan">Business Plan</TabsTrigger>
              <TabsTrigger value="future-plans">Future Plans</TabsTrigger>
              <TabsTrigger value="risks">Risks</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Project Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-slate-600 mb-1">Target Amount</div>
                      <div className="text-2xl font-bold text-slate-900">
                        ${project.targetAmount.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 mb-1">Expected ROI</div>
                      <div className="text-2xl font-bold text-emerald-600">
                        {project.expectedROI}%
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 mb-1">Token Price</div>
                      <div className="text-2xl font-bold text-slate-900">
                        ${project.tokenPrice}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 mb-1">Total Tokens</div>
                      <div className="text-2xl font-bold text-slate-900">
                        {project.totalTokens.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="business-plan">
              <Card>
                <CardHeader>
                  <CardTitle>Business Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{project.businessPlan}</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="future-plans">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Future Plans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.futurePlans.map((plan, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{plan}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="risks">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Risk Factors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.riskFactors.map((risk, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{risk}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Investment Sidebar */}
        <div className="space-y-6">
          {/* Progress Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Investment Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Progress</span>
                  <span className="font-medium">{progressPercentage.toFixed(1)}%</span>
                </div>
                <Progress value={progressPercentage} className="h-3" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    ${project.raisedAmount.toLocaleString()}
                  </div>
                  <div className="text-sm text-slate-600">Raised</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    ${project.targetAmount.toLocaleString()}
                  </div>
                  <div className="text-sm text-slate-600">Goal</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-slate-600">
                    {daysLeft > 0 ? `${daysLeft} days left` : 'Ended'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-slate-600">
                    {Math.floor(project.soldTokens / 10)} investors
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Investment Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Make Investment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Investment Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter amount"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(e.target.value)}
                />
                <div className="text-sm text-slate-600">
                  Minimum: ${project.minimumInvestment.toLocaleString()}
                </div>
              </div>
              
              {tokensForAmount > 0 && (
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-sm font-medium text-blue-900">
                    You will receive: {tokensForAmount} tokens
                  </div>
                  <div className="text-sm text-blue-700">
                    Token price: ${project.tokenPrice}
                  </div>
                </div>
              )}
              
              <Button 
                onClick={handleInvestment}
                disabled={isInvesting || !user}
                className="w-full"
              >
                {isInvesting ? 'Processing...' : 'Invest Now'}
              </Button>
              
              {!user && (
                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    Please log in to make an investment
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Security Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security & Compliance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span className="text-sm text-slate-600">SEC Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span className="text-sm text-slate-600">Fully Audited</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span className="text-sm text-slate-600">Insured Investment</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}