import { Project } from './types';

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Luxury Downtown Apartment Complex',
    description: 'Premium 24-unit apartment complex in prime downtown location with guaranteed 12% annual returns.',
    type: 'real-estate',
    targetAmount: 2500000,
    raisedAmount: 1875000,
    expectedROI: 12,
    minimumInvestment: 1000,
    images: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    location: 'Austin, Texas',
    businessPlan: 'Acquire and renovate a 24-unit apartment complex in downtown Austin. The building will be upgraded with modern amenities and luxury finishes to command premium rents.',
    futurePlans: [
      'Complete renovation within 6 months',
      'Achieve 95% occupancy rate',
      'Refinance at lower interest rate after 2 years',
      'Potential exit via REIT conversion after 5 years'
    ],
    riskFactors: [
      'Real estate market volatility',
      'Construction delays and cost overruns',
      'Local economic conditions',
      'Interest rate changes'
    ],
    tokenPrice: 100,
    totalTokens: 25000,
    soldTokens: 18750,
    status: 'active',
    endDate: '2024-03-15'
  },
  {
    id: '2',
    title: 'Tech Startup Acquisition',
    description: 'Acquiring a profitable SaaS company with 15% expected annual returns and strong growth potential.',
    type: 'business',
    targetAmount: 5000000,
    raisedAmount: 3200000,
    expectedROI: 15,
    minimumInvestment: 2500,
    images: [
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    businessPlan: 'Acquire a established SaaS company with $2M ARR and 500+ enterprise customers. The company has shown consistent 30% year-over-year growth.',
    futurePlans: [
      'Expand sales and marketing team',
      'Develop new product features',
      'Enter international markets',
      'Potential IPO or acquisition exit in 3-5 years'
    ],
    riskFactors: [
      'Technology disruption',
      'Competition from larger players',
      'Customer concentration risk',
      'Regulatory changes'
    ],
    tokenPrice: 250,
    totalTokens: 20000,
    soldTokens: 12800,
    status: 'active',
    endDate: '2024-02-28'
  },
  {
    id: '3',
    title: 'Commercial Office Building',
    description: 'Class A office building with long-term tenants and stable 10% annual returns.',
    type: 'real-estate',
    targetAmount: 8000000,
    raisedAmount: 6400000,
    expectedROI: 10,
    minimumInvestment: 5000,
    images: [
      'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    location: 'Denver, Colorado',
    businessPlan: 'Acquire a 150,000 sq ft Class A office building with 95% occupancy and average lease term of 8 years. Tenants include Fortune 500 companies.',
    futurePlans: [
      'Upgrade building systems and amenities',
      'Implement energy efficiency improvements',
      'Renew expiring leases at market rates',
      'Potential sale to institutional investor after 7 years'
    ],
    riskFactors: [
      'Tenant default risk',
      'Changes in office demand post-COVID',
      'Property value fluctuations',
      'Major capital expenditure requirements'
    ],
    tokenPrice: 500,
    totalTokens: 16000,
    soldTokens: 12800,
    status: 'active',
    endDate: '2024-04-30'
  }
];