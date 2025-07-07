import { ProjectDetail } from '@/components/projects/project-detail';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { mockProjects } from '@/lib/mock-data';

export async function generateStaticParams() {
  return mockProjects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <ProjectDetail projectId={params.id} />
      <Footer />
    </div>
  );
}