'use client';

import { Button } from '@/components/ui/button';
import { Shield, TrendingUp, Users, Lock } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Secure Digital
                <span className="text-blue-600"> Investments</span>
                <br />
                Made Simple
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Access premium real estate and business opportunities through our secure tokenized investment platform. 
                Start building your portfolio with institutional-grade investments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/register">Start Investing</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">$50M+</div>
                <div className="text-sm text-slate-600">Total Invested</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">12%</div>
                <div className="text-sm text-slate-600">Avg. Returns</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">2,500+</div>
                <div className="text-sm text-slate-600">Investors</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8" />
                  <h3 className="text-2xl font-bold">Why Choose Inve?</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Lock className="h-5 w-5 mt-1 text-blue-200" />
                    <div>
                      <h4 className="font-semibold">Bank-Level Security</h4>
                      <p className="text-blue-100">256-bit encryption and multi-factor authentication</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 mt-1 text-emerald-200" />
                    <div>
                      <h4 className="font-semibold">Proven Returns</h4>
                      <p className="text-blue-100">Average 12% annual returns across all projects</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 mt-1 text-purple-200" />
                    <div>
                      <h4 className="font-semibold">Expert Management</h4>
                      <p className="text-blue-100">Professional team with 20+ years experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}