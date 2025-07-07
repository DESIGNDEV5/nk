'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  Building,
  Plus,
  Edit,
  Eye,
  Trash2
} from 'lucide-react';
import Link from 'next/link';

export function AdminPanel() {
  const { user } = useAuth();
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    type: 'real-estate',
    targetAmount: '',
    expectedROI: '',
    minimumInvestment: '',
    location: '',
    businessPlan: ''
  });

  if (!user || user.role !== 'admin') {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Access Denied</h1>
          <p className="text-slate-600 mb-4">You need admin privileges to access this page.</p>
          <Button asChild>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Mock admin data
  const adminData = {
    totalInvestments: 15750000,
    totalInvestors: 2543,
    activeProjects: 8,
    completedProjects: 12,
    pendingInvestments: 45,
    monthlyRevenue: 125000
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Project created successfully!');
    setNewProject({
      title: '',
      description: '',
      type: 'real-estate',
      targetAmount: '',
      expectedROI: '',
      minimumInvestment: '',
      location: '',
      businessPlan: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Dashboard</h1>
        <p className="text-slate-600">Manage your investment platform</p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Investments</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${adminData.totalInvestments.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Investors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{adminData.totalInvestors.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{adminData.activeProjects}</div>
            <p className="text-xs text-muted-foreground">{adminData.completedProjects} completed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${adminData.monthlyRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Admin Tabs */}
      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="create">Create Project</TabsTrigger>
          <TabsTrigger value="investors">Investors</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Manage Projects</h2>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Button>
          </div>

          <div className="space-y-4">
            {[
              { id: 1, title: 'Luxury Downtown Apartment Complex', status: 'active', raised: 1875000, target: 2500000 },
              { id: 2, title: 'Tech Startup Acquisition', status: 'active', raised: 3200000, target: 5000000 },
              { id: 3, title: 'Commercial Office Building', status: 'active', raised: 6400000, target: 8000000 }
            ].map((project) => (
              <Card key={project.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline">{project.status}</Badge>
                        <span className="text-sm text-slate-600">
                          ${project.raised.toLocaleString()} / ${project.target.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="create" className="space-y-4">
          <h2 className="text-xl font-semibold">Create New Project</h2>
          
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleCreateProject} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Project Title</Label>
                    <Input
                      id="title"
                      value={newProject.title}
                      onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                      placeholder="Enter project title"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="type">Project Type</Label>
                    <Select value={newProject.type} onValueChange={(value) => setNewProject({...newProject, type: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="real-estate">Real Estate</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newProject.description}
                    onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                    placeholder="Enter project description"
                    rows={3}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="targetAmount">Target Amount ($)</Label>
                    <Input
                      id="targetAmount"
                      type="number"
                      value={newProject.targetAmount}
                      onChange={(e) => setNewProject({...newProject, targetAmount: e.target.value})}
                      placeholder="0"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="expectedROI">Expected ROI (%)</Label>
                    <Input
                      id="expectedROI"
                      type="number"
                      value={newProject.expectedROI}
                      onChange={(e) => setNewProject({...newProject, expectedROI: e.target.value})}
                      placeholder="0"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="minimumInvestment">Minimum Investment ($)</Label>
                    <Input
                      id="minimumInvestment"
                      type="number"
                      value={newProject.minimumInvestment}
                      onChange={(e) => setNewProject({...newProject, minimumInvestment: e.target.value})}
                      placeholder="0"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location (Optional)</Label>
                  <Input
                    id="location"
                    value={newProject.location}
                    onChange={(e) => setNewProject({...newProject, location: e.target.value})}
                    placeholder="City, State"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessPlan">Business Plan</Label>
                  <Textarea
                    id="businessPlan"
                    value={newProject.businessPlan}
                    onChange={(e) => setNewProject({...newProject, businessPlan: e.target.value})}
                    placeholder="Describe the business plan and strategy"
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Create Project
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="investors" className="space-y-4">
          <h2 className="text-xl font-semibold">Investor Management</h2>
          
          <div className="space-y-4">
            {[
              { name: 'John Smith', email: 'john@example.com', totalInvested: 45000, projects: 3 },
              { name: 'Sarah Johnson', email: 'sarah@example.com', totalInvested: 32000, projects: 2 },
              { name: 'Mike Davis', email: 'mike@example.com', totalInvested: 67000, projects: 5 }
            ].map((investor, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{investor.name}</h3>
                      <p className="text-sm text-slate-600">{investor.email}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">${investor.totalInvested.toLocaleString()}</div>
                      <div className="text-sm text-slate-600">{investor.projects} projects</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          <h2 className="text-xl font-semibold">Recent Transactions</h2>
          
          <div className="space-y-4">
            {[
              { investor: 'John Smith', project: 'Luxury Downtown Apartment', amount: 15000, date: '2024-01-15' },
              { investor: 'Sarah Johnson', project: 'Tech Startup Acquisition', amount: 12000, date: '2024-01-14' },
              { investor: 'Mike Davis', project: 'Commercial Office Building', amount: 25000, date: '2024-01-13' }
            ].map((transaction, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{transaction.investor}</h3>
                      <p className="text-sm text-slate-600">{transaction.project}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">${transaction.amount.toLocaleString()}</div>
                      <div className="text-sm text-slate-600">{transaction.date}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}