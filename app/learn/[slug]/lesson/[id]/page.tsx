'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { courses, getCourseBySlug, getLessonBySlugAndId } from '@/lib/courses';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight, CheckCircle2, BookOpen, Menu, X } from 'lucide-react';
import LetterCard from '@/components/learn/LetterCard';
import VocabularyCard from '@/components/learn/VocabularyCard';
import Flashcard from '@/components/learn/Flashcard';
import QuizCard from '@/components/learn/QuizCard';
import PracticeCard from '@/components/learn/PracticeCard';
import ContentCard from '@/components/learn/ContentCard';
import StrokeAnimation from '@/components/learn/StrokeAnimation';

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const lessonId = parseInt(params.id as string);
  const course = getCourseBySlug(slug);
  const lesson = getLessonBySlugAndId(slug, lessonId);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!course || !lesson) {
      router.push('/learn');
      return;
    }

    // Load progress from localStorage
    const savedProgress = localStorage.getItem(`progress-${course.id}`);
    if (savedProgress) {
      setCompletedLessons(JSON.parse(savedProgress));
    }
  }, [course, lesson, router]);

  const markLessonComplete = () => {
    if (!course) return;
    
    if (!completedLessons.includes(lessonId)) {
      const newCompleted = [...completedLessons, lessonId];
      setCompletedLessons(newCompleted);
      localStorage.setItem(`progress-${course.id}`, JSON.stringify(newCompleted));
    }
  };

  const goToPreviousLesson = () => {
    if (lessonId > 1) {
      router.push(`/learn/${slug}/lesson/${lessonId - 1}`);
    }
  };

  const goToNextLesson = () => {
    if (course && lessonId < course.totalLessons) {
      router.push(`/learn/${slug}/lesson/${lessonId + 1}`);
    } else if (course) {
      router.push(`/learn/${slug}`);
    }
  };

  if (!course || !lesson) {
    return null;
  }

  const isLastLesson = lessonId === course.totalLessons;
  const isFirstLesson = lessonId === 1;

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
            <ChevronLeft size={16} className="text-pure-white/40" />
            <Link href="/learn" className="text-pure-white/60 hover:text-pure-white transition-colors">
              Learn
            </Link>
            <ChevronLeft size={16} className="text-pure-white/40" />
            <Link href={`/learn/${slug}`} className="text-pure-white/60 hover:text-pure-white transition-colors">
              {course.title}
            </Link>
            <ChevronLeft size={16} className="text-pure-white/40" />
            <span className="text-gold-accent">Lesson {lessonId}</span>
          </div>
        </div>
      </div>

      {/* Lesson Header */}
      <section className="py-[60px] bg-deep-navy">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px]">
          <div className="flex items-center justify-between mb-8">
            <Link
              href={`/learn/${slug}`}
              className="inline-flex items-center gap-2 text-pure-white/60 hover:text-pure-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Course</span>
            </Link>
            
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden flex items-center gap-2 text-pure-white/60 hover:text-pure-white transition-colors"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
              <span>Lessons</span>
            </button>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{course.icon}</span>
            <div>
              <h1 className="font-display-lg text-display-lg text-pure-white">
                {lesson.title}
              </h1>
              <p className="font-headline-md text-headline-md text-gold-accent">
                {course.title} • Lesson {lessonId} of {course.totalLessons}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson Content */}
      <section className="py-[80px] bg-primary">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px]">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Sidebar */}
            <div className={`${isSidebarOpen ? 'block' : 'hidden'} lg:hidden w-full mb-8`}>
              <div className="glass-card p-6 rounded-2xl space-y-2">
                {course.lessons.map((l) => (
                  <Link
                    key={l.id}
                    href={`/learn/${slug}/lesson/${l.id}`}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`block p-4 rounded-xl border transition-all duration-300 ${
                      completedLessons.includes(l.id)
                        ? 'bg-gold-accent/10 border-gold-accent/30'
                        : l.id === lessonId
                        ? 'bg-gold-accent/20 border-gold-accent/50'
                        : 'bg-surface-container-highest/5 border-white/5 hover:border-gold-accent/20'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {completedLessons.includes(l.id) ? (
                          <CheckCircle2 className="text-gold-accent" size={20} />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-white/30" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-body-md text-body-md text-pure-white truncate">
                          {l.title}
                        </p>
                        <p className="font-body-sm text-body-sm text-pure-white/60">
                          Lesson {l.id}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <div className="sticky top-24 space-y-4">
                <div className="glass-card p-6 rounded-2xl">
                  <h3 className="font-headline-md text-headline-md text-pure-white mb-4">
                    Course Progress
                  </h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-body-sm text-body-sm text-pure-white/60">
                      {completedLessons.length} of {course.totalLessons}
                    </span>
                    <span className="font-body-sm text-body-sm text-gold-accent">
                      {Math.round((completedLessons.length / course.totalLessons) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                    <div
                      className="bg-gold-accent h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(completedLessons.length / course.totalLessons) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="glass-card p-6 rounded-2xl max-h-[500px] overflow-y-auto">
                  <h3 className="font-headline-md text-headline-md text-pure-white mb-4">
                    All Lessons
                  </h3>
                  <div className="space-y-2">
                    {course.lessons.map((l) => (
                      <Link
                        key={l.id}
                        href={`/learn/${slug}/lesson/${l.id}`}
                        className={`block p-3 rounded-lg border transition-all duration-300 ${
                          completedLessons.includes(l.id)
                            ? 'bg-gold-accent/10 border-gold-accent/30'
                            : l.id === lessonId
                            ? 'bg-gold-accent/20 border-gold-accent/50'
                            : 'bg-surface-container-highest/5 border-white/5 hover:border-gold-accent/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {completedLessons.includes(l.id) ? (
                            <CheckCircle2 className="text-gold-accent flex-shrink-0" size={16} />
                          ) : (
                            <div className="w-4 h-4 rounded-full border-2 border-white/30 flex-shrink-0" />
                          )}
                          <p className="font-body-sm text-body-sm text-pure-white truncate">
                            {l.id}. {l.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-8">
              {/* Letter Card (for Urdu lessons) */}
              {lesson.letterData && (
                <LetterCard
                  letter={lesson.letterData.letter}
                  letterName={lesson.letterData.letterName}
                  pronunciation={lesson.letterData.pronunciation}
                  description={lesson.letterData.description}
                  positionForms={lesson.letterData.positionForms}
                  examples={lesson.letterData.examples}
                />
              )}

              {/* Stroke Animation (for Urdu lessons) */}
              {lesson.letterData?.strokes && (
                <StrokeAnimation
                  letter={lesson.letterData.letter}
                  strokes={lesson.letterData.strokes}
                />
              )}

              {/* Vocabulary Grid */}
              {lesson.vocabulary && lesson.vocabulary.length > 0 && (
                <div className="space-y-4">
                  <h2 className="font-headline-lg text-headline-lg text-gold-accent mb-4">
                    Vocabulary
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {lesson.vocabulary.map((item, index) => (
                      <VocabularyCard
                        key={index}
                        word={item.word}
                        translation={item.translation}
                        pronunciation={item.pronunciation}
                        example={item.example}
                        exampleTranslation={item.exampleTranslation}
                        category={item.category}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Flashcards */}
              {lesson.flashcards && lesson.flashcards.length > 0 && (
                <div className="space-y-4">
                  <h2 className="font-headline-lg text-headline-lg text-gold-accent mb-4">
                    Flashcards
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {lesson.flashcards.map((card, index) => (
                      <Flashcard
                        key={index}
                        front={card.front}
                        back={card.back}
                        frontLabel={card.frontLabel}
                        backLabel={card.backLabel}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Quiz */}
              {lesson.quiz && (
                <div className="space-y-4">
                  <h2 className="font-headline-lg text-headline-lg text-gold-accent mb-4">
                    Quick Quiz
                  </h2>
                  <QuizCard
                    question={lesson.quiz.question}
                    options={lesson.quiz.options}
                    explanation={lesson.quiz.explanation}
                  />
                </div>
              )}

              {/* Practice */}
              {lesson.practiceItems && lesson.practiceItems.length > 0 && (
                <PracticeCard
                  title="Practice Exercise"
                  items={lesson.practiceItems}
                />
              )}

              {/* Traditional Content Cards */}
              <div className="glass-card p-8 md:p-12 rounded-2xl space-y-8">
                {/* Description */}
                <ContentCard
                  title="Lesson Overview"
                  content={lesson.description}
                  defaultExpanded={true}
                />

                {/* Learning Objectives */}
                <ContentCard
                  title="Learning Objectives"
                  content={
                    <ul className="space-y-3">
                      {lesson.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gold-accent mt-2 flex-shrink-0" />
                          <p className="font-body-md text-body-md text-pure-white/80">
                            {objective}
                          </p>
                        </li>
                      ))}
                    </ul>
                  }
                />

                {/* Notes */}
                <ContentCard
                  title="Lesson Notes"
                  content={lesson.notes}
                  variant="info"
                />

                {/* Practice */}
                <ContentCard
                  title="Practice Exercises"
                  content={lesson.practice}
                  variant="highlight"
                />

                {/* Quiz Notice */}
                {!lesson.quizAvailable && !lesson.quiz && (
                  <div className="bg-gold-accent/10 border border-gold-accent/30 rounded-xl p-6">
                    <div className="flex items-center gap-3">
                      <BookOpen className="text-gold-accent" size={24} />
                      <div>
                        <p className="font-body-md text-body-md text-gold-accent font-semibold">
                          Quiz Coming Soon
                        </p>
                        <p className="font-body-sm text-body-sm text-pure-white/70">
                          Interactive quizzes will be added to test your understanding.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Mark Complete */}
                <div className="pt-6 border-t border-white/10">
                  <button
                    onClick={markLessonComplete}
                    disabled={completedLessons.includes(lessonId)}
                    className={`w-full py-4 rounded-full font-label-caps text-label-caps transition-all duration-300 ${
                      completedLessons.includes(lessonId)
                        ? 'bg-gold-accent/20 text-gold-accent cursor-default'
                        : 'bg-primary-container text-pure-white hover:bg-gold-accent hover:text-primary'
                    }`}
                  >
                    {completedLessons.includes(lessonId) ? (
                      <span className="flex items-center justify-center gap-2">
                        <CheckCircle2 size={20} />
                        Lesson Completed
                      </span>
                    ) : (
                      'Mark as Complete'
                    )}
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={goToPreviousLesson}
                  disabled={isFirstLesson}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-label-caps text-label-caps transition-all duration-300 ${
                    isFirstLesson
                      ? 'bg-surface-container-highest/5 text-pure-white/30 cursor-not-allowed'
                      : 'bg-surface-container-highest/5 text-pure-white hover:bg-gold-accent hover:text-primary'
                  }`}
                >
                  <ChevronLeft size={20} />
                  Previous Lesson
                </button>
                
                <button
                  onClick={goToNextLesson}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary-container text-pure-white font-label-caps text-label-caps hover:bg-gold-accent hover:text-primary transition-all duration-300"
                >
                  {isLastLesson ? 'Back to Course' : 'Next Lesson'}
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
