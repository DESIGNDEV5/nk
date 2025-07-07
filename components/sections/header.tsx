'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield, User, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900">Investor</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/projects" className="text-slate-600 hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link href="/how-it-works" className="text-slate-600 hover:text-blue-600 transition-colors">
              How It Works
            </Link>
            <Link href="/security" className="text-slate-600 hover:text-blue-600 transition-colors">
              Security
            </Link>
            {user && (
              <Link href="/dashboard" className="text-slate-600 hover:text-blue-600 transition-colors">
                Dashboard
              </Link>
            )}
            {user?.role === 'admin' && (
              <Link href="/admin" className="text-slate-600 hover:text-blue-600 transition-colors">
                Admin
              </Link>
            )}
          </nav>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  {user.role === 'admin' && (
                    <DropdownMenuItem asChild>
                      <Link href="/admin">Admin Panel</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Get Started</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/projects" className="block px-3 py-2 text-slate-600 hover:text-blue-600">
                Projects
              </Link>
              <Link href="/how-it-works" className="block px-3 py-2 text-slate-600 hover:text-blue-600">
                How It Works
              </Link>
              <Link href="/security" className="block px-3 py-2 text-slate-600 hover:text-blue-600">
                Security
              </Link>
              {user && (
                <Link href="/dashboard" className="block px-3 py-2 text-slate-600 hover:text-blue-600">
                  Dashboard
                </Link>
              )}
              {user?.role === 'admin' && (
                <Link href="/admin" className="block px-3 py-2 text-slate-600 hover:text-blue-600">
                  Admin
                </Link>
              )}
              <div className="pt-4 border-t">
                {user ? (
                  <div className="space-y-2">
                    <div className="px-3 py-2 text-sm text-slate-600">
                      Signed in as {user.name}
                    </div>
                    <Button variant="ghost" onClick={logout} className="w-full justify-start">
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Button variant="ghost" asChild className="w-full justify-start">
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild className="w-full">
                      <Link href="/register">Get Started</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}