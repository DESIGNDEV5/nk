'use client';

import { Project } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { MapPin, TrendingUp, DollarSign, Calendar } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const progressPercentage = (project.raisedAmount / project.targetAmount) * 100;
  const daysLeft = Math.ceil((new Date(project.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge variant={project.type === 'real-estate' ? 'default' : 'secondary'}>
            {project.type === 'real-estate' ? 'Real Estate' : 'Business'}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="bg-white/90">
            {project.status}
          </Badge>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <p className="text-slate-600 text-sm line-clamp-2">{project.description}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-emerald-600" />
            <span className="text-sm font-medium">{project.expectedROI}% ROI</span>
          </div>
          {project.location && (
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4 text-slate-400" />
              <span className="text-sm text-slate-600">{project.location}</span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Progress</span>
            <span className="font-medium">{progressPercentage.toFixed(1)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">
              ${project.raisedAmount.toLocaleString()} raised
            </span>
            <span className="text-slate-600">
              ${project.targetAmount.toLocaleString()} goal
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4 text-slate-400" />
            <span className="text-sm text-slate-600">
              Min. ${project.minimumInvestment.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-slate-400" />
            <span className="text-sm text-slate-600">
              {daysLeft > 0 ? `${daysLeft} days left` : 'Ended'}
            </span>
          </div>
        </div>

        <Button asChild className="w-full">
          <Link href={`/projects/${project.id}`}>
            View Details
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}