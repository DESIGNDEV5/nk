import { UserDashboard } from '@/components/dashboard/user-dashboard';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <UserDashboard />
      <Footer />
    </div>
  );
}