import { Metadata } from 'next';
import { getCourseBySlug } from '@/lib/courses';

interface CourseLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CourseLayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  
  if (!course) {
    return {
      title: 'Course Not Found | Amit Manocha',
      description: 'The requested course could not be found.',
    };
  }

  return {
    title: `${course.title} | Learn | Amit Manocha`,
    description: course.description,
  };
}

export default async function CourseLayout({ children, params }: CourseLayoutProps) {
  const { slug } = await params;
  return <>{children}</>;
}
