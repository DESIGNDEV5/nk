import Link from 'next/link';
import { Shield, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Investor</span>
            </div>
            <p className="text-slate-400">
              Secure digital investments made simple. Access premium opportunities through our regulated platform.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
              <Mail className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <div className="space-y-2">
              <Link href="/projects" className="block text-slate-400 hover:text-white">
                Investment Projects
              </Link>
              <Link href="/dashboard" className="block text-slate-400 hover:text-white">
                Investor Dashboard
              </Link>
              <Link href="/how-it-works" className="block text-slate-400 hover:text-white">
                How It Works
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-slate-400 hover:text-white">
                About Us
              </Link>
              <Link href="/security" className="block text-slate-400 hover:text-white">
                Security
              </Link>
              <Link href="/contact" className="block text-slate-400 hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-slate-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-slate-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="/disclosures" className="block text-slate-400 hover:text-white">
                Risk Disclosures
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Investor. All rights reserved. SEC Registered Investment Advisor.</p>
        </div>
      </div>
    </footer>
  );
}