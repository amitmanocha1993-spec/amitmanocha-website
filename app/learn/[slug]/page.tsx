'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { courses, getCourseBySlug } from '@/lib/courses';
import Link from 'next/link';
import { ArrowLeft, Search, CheckCircle2, BookOpen, ChevronRight } from 'lucide-react';

export default function CoursePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const course = getCourseBySlug(slug);
  const [searchQuery, setSearchQuery] = useState('');
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!course) {
      router.push('/learn');
      return;
    }

    // Load progress from localStorage
    const savedProgress = localStorage.getItem(`progress-${course.id}`);
    if (savedProgress) {
      setCompletedLessons(JSON.parse(savedProgress));
    }
  }, [course, router]);

  const filteredLessons = course?.lessons.filter(lesson =>
    lesson.title.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const progressPercentage = course
    ? Math.round((completedLessons.length / course.totalLessons) * 100)
    : 0;

  const markLessonComplete = (lessonId: number) => {
    if (!course) return;
    
    const newCompleted = completedLessons.includes(lessonId)
      ? completedLessons.filter(id => id !== lessonId)
      : [...completedLessons, lessonId];
    
    setCompletedLessons(newCompleted);
    localStorage.setItem(`progress-${course.id}`, JSON.stringify(newCompleted));
  };

  if (!course) {
    return null;
  }

  const lastCompletedLesson = completedLessons.length > 0 
    ? Math.max(...completedLessons) 
    : 0;
  const nextLessonId = lastCompletedLesson + 1 <= course.totalLessons 
    ? lastCompletedLesson + 1 
    : 1;

  return (
    <main className="bg-primary text-on-primary-fixed font-body-md antialiased overflow-x-hidden">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-deep-navy border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px] py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-pure-white/60 hover:text-pure-white transition-colors">
              Home
            </Link>
            <ChevronRight size={16} className="text-pure-white/40" />
            <Link href="/learn" className="text-pure-white/60 hover:text-pure-white transition-colors">
              Learn
            </Link>
            <ChevronRight size={16} className="text-pure-white/40" />
            <span className="text-gold-accent">{course.title}</span>
          </div>
        </div>
      </div>

      {/* Course Header */}
      <section className="py-[80px] bg-deep-navy">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px]">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-pure-white/60 hover:text-pure-white transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Return to Learning Academy</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-6xl">{course.icon}</span>
                <div>
                  <h1 className="font-display-lg text-display-lg text-pure-white">
                    {course.title}
                  </h1>
                  <p className="font-headline-xl text-headline-xl text-gold-accent">
                    {course.subtitle}
                  </p>
                </div>
              </div>
              <p className="font-body-lg text-body-lg text-pure-white/80 max-w-2xl">
                {course.description}
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-caps text-label-caps text-pure-white/60">
                    Progress
                  </span>
                  <span className="font-headline-md text-headline-md text-gold-accent">
                    {progressPercentage}%
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                  <div
                    className="bg-gold-accent h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-pure-white/60">
                    {completedLessons.length} of {course.totalLessons} lessons
                  </span>
                  {completedLessons.length > 0 && (
                    <Link
                      href={`/learn/${course.slug}/lesson/${nextLessonId}`}
                      className="text-gold-accent hover:text-gold-accent/80 transition-colors"
                    >
                      Continue Learning
                    </Link>
                  )}
                </div>
              </div>
              
              {completedLessons.length === 0 && (
                <Link
                  href={`/learn/${course.slug}/lesson/1`}
                  className="block w-full py-4 rounded-full bg-primary-container text-pure-white font-label-caps text-label-caps hover:bg-gold-accent hover:text-primary transition-all duration-300 text-center"
                >
                  Start Learning
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Section */}
      <section className="py-[80px] bg-primary">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px]">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden flex items-center justify-center gap-2 py-3 rounded-full bg-surface-container-highest/5 border border-white/10 mb-4"
            >
              <BookOpen size={20} />
              <span>{isSidebarOpen ? 'Hide Lessons' : 'Show Lessons'}</span>
            </button>

            {/* Sidebar */}
            <div className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block w-full lg:w-80 flex-shrink-0`}>
              <div className="sticky top-24 space-y-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-pure-white/40" size={20} />
                  <input
                    type="text"
                    placeholder="Search lessons..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-surface-container-highest/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-pure-white placeholder:text-pure-white/40 focus:outline-none focus:border-gold-accent/50 transition-colors"
                  />
                </div>

                {/* Lesson List */}
                <div className="space-y-2 max-h-[600px] overflow-y-auto">
                  {filteredLessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      href={`/learn/${course.slug}/lesson/${lesson.id}`}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`block p-4 rounded-xl border transition-all duration-300 ${
                        completedLessons.includes(lesson.id)
                          ? 'bg-gold-accent/10 border-gold-accent/30'
                          : 'bg-surface-container-highest/5 border-white/5 hover:border-gold-accent/20'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          {completedLessons.includes(lesson.id) ? (
                            <CheckCircle2 className="text-gold-accent" size={20} />
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-white/30" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-body-md text-body-md text-pure-white truncate">
                            {lesson.title}
                          </p>
                          <p className="font-body-sm text-body-sm text-pure-white/60">
                            Lesson {lesson.id}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1">
              <div className="glass-card p-8 md:p-12 rounded-2xl">
                <div className="text-center py-16">
                  <BookOpen className="mx-auto text-gold-accent mb-6" size={64} />
                  <h2 className="font-headline-xl text-headline-xl text-pure-white mb-4">
                    Select a Lesson
                  </h2>
                  <p className="font-body-lg text-body-lg text-pure-white/80 max-w-xl mx-auto mb-8">
                    Choose a lesson from the sidebar to begin learning. Your progress will be automatically saved.
                  </p>
                  {completedLessons.length > 0 ? (
                    <Link
                      href={`/learn/${course.slug}/lesson/${nextLessonId}`}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-container text-pure-white font-label-caps text-label-caps hover:bg-gold-accent hover:text-primary transition-all duration-300"
                    >
                      Continue to Lesson {nextLessonId}
                      <ChevronRight size={20} />
                    </Link>
                  ) : (
                    <Link
                      href={`/learn/${course.slug}/lesson/1`}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-container text-pure-white font-label-caps text-label-caps hover:bg-gold-accent hover:text-primary transition-all duration-300"
                    >
                      Start Lesson 1
                      <ChevronRight size={20} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
