export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'real-estate' | 'business';
  targetAmount: number;
  raisedAmount: number;
  expectedROI: number;
  minimumInvestment: number;
  images: string[];
  location?: string;
  businessPlan: string;
  futurePlans: string[];
  riskFactors: string[];
  tokenPrice: number;
  totalTokens: number;
  soldTokens: number;
  status: 'active' | 'completed' | 'upcoming';
  endDate: string;
}

export interface Investment {
  id: string;
  projectId: string;
  userId: string;
  amount: number;
  tokens: number;
  date: string;
  status: 'pending' | 'completed' | 'cancelled';
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  totalInvested: number;
  portfolioValue: number;
  investments: Investment[];
}