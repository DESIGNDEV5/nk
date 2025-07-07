import { AdminPanel } from '@/components/admin/admin-panel';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <AdminPanel />
      <Footer />
    </div>
  );
}