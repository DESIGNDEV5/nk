'use client';

import { useAuth } from '@/lib/auth-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  DollarSign, 
  TrendingUp, 
  PieChart, 
  FileText,
  Eye,
  Plus
} from 'lucide-react';
import Link from 'next/link';

export function UserDashboard() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Access Denied</h1>
          <p className="text-slate-600 mb-4">Please log in to access your dashboard.</p>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Mock portfolio data
  const portfolioData = {
    totalInvested: 25000,
    currentValue: 28500,
    totalReturns: 3500,
    returnPercentage: 14.0,
    investments: [
      {
        id: '1',
        projectTitle: 'Luxury Downtown Apartment Complex',
        amount: 15000,
        tokens: 150,
        currentValue: 17200,
        roi: 14.7,
        status: 'active'
      },
      {
        id: '2',
        projectTitle: 'Tech Startup Acquisition',
        amount: 10000,
        tokens: 40,
        currentValue: 11300,
        roi: 13.0,
        status: 'active'
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back, {user.name}!</h1>
        <p className="text-slate-600">Here's your investment portfolio overview</p>
      </div>

      {/* Portfolio Summary */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Invested</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${portfolioData.totalInvested.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Across 2 projects</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Value</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${portfolioData.currentValue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Portfolio value</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Returns</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">
              +${portfolioData.totalReturns.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              +{portfolioData.returnPercentage}% total return
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Investments</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{portfolioData.investments.length}</div>
            <p className="text-xs text-muted-foreground">Currently invested</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Views */}
      <Tabs defaultValue="portfolio" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="portfolio">My Portfolio</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="portfolio" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Your Investments</h2>
            <Button asChild>
              <Link href="/projects">
                <Plus className="h-4 w-4 mr-2" />
                New Investment
              </Link>
            </Button>
          </div>

          <div className="grid gap-4">
            {portfolioData.investments.map((investment) => (
              <Card key={investment.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{investment.projectTitle}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline">{investment.status}</Badge>
                        <span className="text-sm text-slate-600">
                          {investment.tokens} tokens
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/projects/${investment.id}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-sm text-slate-600">Invested</div>
                      <div className="font-semibold">${investment.amount.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">Current Value</div>
                      <div className="font-semibold">${investment.currentValue.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">Returns</div>
                      <div className="font-semibold text-emerald-600">
                        +${(investment.currentValue - investment.amount).toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">ROI</div>
                      <div className="font-semibold text-emerald-600">+{investment.roi}%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Investment in Tech Startup Acquisition</p>
                    <p className="text-sm text-slate-600">$10,000 investment completed</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-600">2 days ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Dividend Payment Received</p>
                    <p className="text-sm text-slate-600">$275 from Luxury Downtown Apartment</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-600">1 week ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <h2 className="text-xl font-semibold">Investment Documents</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Investment Agreement - Luxury Downtown Apartment</p>
                    <p className="text-sm text-slate-600">Signed on Dec 15, 2023</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Tax Document - 2023</p>
                    <p className="text-sm text-slate-600">Annual investment summary</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}