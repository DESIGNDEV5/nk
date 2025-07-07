import { RegisterForm } from '@/components/auth/register-form';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <div className="flex items-center justify-center py-12 px-4">
        <RegisterForm />
      </div>
      <Footer />
    </div>
  );
}