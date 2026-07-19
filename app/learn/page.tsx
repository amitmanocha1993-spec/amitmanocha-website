import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { courses } from '@/lib/courses';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Learn | Amit Manocha',
  description: 'Learning Academy - Learn Languages, Scripts & Creative Skills. Free beginner-friendly courses designed to help you learn step by step.',
};

export default function LearnPage() {
  return (
    <main className="bg-primary text-on-primary-fixed font-body-md antialiased overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-[120px] md:py-[160px] bg-deep-navy overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="font-display-lg text-display-lg text-pure-white leading-tight">
                Learning Academy
              </h1>
              <p className="font-headline-xl text-headline-xl text-gold-accent">
                Learn Languages, Scripts & Creative Skills.
              </p>
              <p className="font-body-lg text-body-lg text-pure-white/80 max-w-xl">
                Free beginner-friendly courses designed to help you learn step by step. No login required. Start learning today.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              {/* SVG Illustration */}
              <svg
                className="w-full max-w-md h-auto"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="200" cy="200" r="180" fill="rgba(212, 175, 55, 0.1)" />
                <circle cx="200" cy="200" r="140" fill="rgba(212, 175, 55, 0.15)" />
                <circle cx="200" cy="200" r="100" fill="rgba(212, 175, 55, 0.2)" />
                <path
                  d="M120 280 L120 120 L280 120 L280 280 Z"
                  stroke="rgba(212, 175, 55, 0.6)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M140 260 L140 140 L260 140 L260 260 Z"
                  stroke="rgba(212, 175, 55, 0.8)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M160 240 L160 160 L240 160 L240 240 Z"
                  stroke="rgba(212, 175, 55, 1)"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="200" cy="200" r="20" fill="rgba(212, 175, 55, 0.3)" />
                <path
                  d="M200 180 L200 220 M180 200 L220 200"
                  stroke="rgba(212, 175, 55, 0.8)"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid Section */}
      <section className="py-[120px] bg-primary">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px]">
          <div className="mb-16">
            <h2 className="font-headline-xl text-headline-xl text-pure-white mb-4">Available Courses</h2>
            <p className="font-body-md text-body-md text-pure-white/80 max-w-2xl">
              Explore our collection of free courses designed for beginners. Each course is structured to help you learn at your own pace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`/learn/${course.slug}`}
                className="group relative rounded-2xl overflow-hidden bg-surface-container-highest/5 border border-white/5 p-8 hover:border-gold-accent/30 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-accent/10"
              >
                <div className="space-y-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {course.icon}
                  </div>
                  <div>
                    <span className="font-label-caps text-label-caps text-gold-accent tracking-widest uppercase">
                      {course.difficulty}
                    </span>
                    <h3 className="font-headline-lg text-headline-lg text-pure-white mt-2">
                      {course.title}
                    </h3>
                    <p className="font-body-md text-body-md text-pure-white/60 mt-1">
                      {course.subtitle}
                    </p>
                  </div>
                  <p className="font-body-md text-body-md text-pure-white/80">
                    {course.description}
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <span className="font-label-caps text-label-caps text-pure-white/60">
                      {course.totalLessons} Lessons
                    </span>
                    <span className="font-label-caps text-label-caps text-gold-accent">
                      Free Forever
                    </span>
                  </div>
                  <button className="w-full py-3 rounded-full bg-primary-container text-pure-white font-label-caps text-label-caps hover:bg-gold-accent hover:text-primary transition-all duration-300">
                    Start Learning
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
