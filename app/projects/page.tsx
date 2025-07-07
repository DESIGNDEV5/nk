import { ProjectList } from '@/components/projects/project-list';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';

// Force static rendering for export compatibility
export const dynamic = 'force-static';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Investment Projects</h1>
          <p className="text-lg text-slate-600">
            Discover curated real estate and business investment opportunities
          </p>
        </div>
        <ProjectList />
      </div>
      <Footer />
    </div>
  );
}