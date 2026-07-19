'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { portfolioProjects, portfolioCategories, getProjectsByCategory, type PortfolioCategory } from '@/data/portfolio';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('All Works');
  const [selectedProject, setSelectedProject] = useState<typeof portfolioProjects[0] | null>(null);

  const filteredProjects = getProjectsByCategory(selectedCategory);

  return (
    <main className="bg-background text-on-background font-body-md antialiased overflow-x-hidden">
      <Navigation />
      
      {/* Portfolio Hero */}
      <section className="relative min-h-[60vh] flex items-center mesh-gradient pt-24 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-[24px] md:px-[80px] w-full">
          <div className="text-center">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.3em] mb-4 block">Visual Narratives</span>
            <h1 className="font-display-lg-mobile md:text-display-lg text-primary mb-6">Portfolio</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              A curated collection of multidisciplinary design projects spanning branding, digital design, print design, and cricket.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-[24px] md:px-[80px] bg-surface-bright border-b border-outline-variant/10 sticky top-20 z-40 backdrop-blur-xl bg-surface-bright/90">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`font-label-caps text-label-caps px-6 py-3 rounded-full uppercase tracking-widest text-[10px] transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-low text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-[120px] px-[24px] md:px-[80px] bg-background">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl overflow-hidden shadow-ambient bg-surface-container-low cursor-pointer aspect-[3/4]"
              >
                <Image
                  src={project.imagePath}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, (max-width: 1440px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="font-label-caps text-label-caps text-secondary-fixed mb-2 uppercase tracking-widest text-[10px]">{project.category}</span>
                  <h3 className="font-headline-md text-xl text-pure-white mb-3">{project.title}</h3>
                  <div className="flex items-center text-pure-white/80 text-sm">
                    <span className="font-label-caps text-label-caps">View Project</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[120px] px-[24px] md:px-[80px] bg-surface-bright">
        <div className="max-w-[1440px] mx-auto">
          <div className="glass-card rounded-2xl p-12 md:p-16 text-center">
            <h2 className="font-headline-xl text-headline-xl text-primary mb-4">Ready to Create Something Amazing?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
              Let's collaborate to bring your vision to life through thoughtful design and creative storytelling.
            </p>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-primary text-on-primary font-body-md hover:bg-deep-navy transition-all duration-300 shadow-[0_12px_24px_rgba(0,17,58,0.15)] hover:shadow-[0_16px_32px_rgba(0,17,58,0.25)] hover:-translate-y-0.5 inline-block">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-12 right-0 text-white hover:text-secondary transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Project Info */}
            <div className="flex items-center justify-between mb-4 text-white">
              <div>
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest text-[10px]">{selectedProject.category}</span>
                <h2 className="font-headline-md text-2xl text-white">{selectedProject.title}</h2>
              </div>
              <span className="font-label-caps text-label-caps text-white/60 text-sm">
                Project {portfolioProjects.findIndex(p => p.id === selectedProject.id) + 1} of {portfolioProjects.length}
              </span>
            </div>

            {/* Image */}
            <div className="relative flex-1 bg-surface-container-low rounded-2xl overflow-hidden">
              <Image
                src={selectedProject.imagePath}
                alt={selectedProject.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={() => {
                  const currentIndex = portfolioProjects.findIndex(p => p.id === selectedProject.id);
                  const prevIndex = currentIndex > 0 ? currentIndex - 1 : portfolioProjects.length - 1;
                  setSelectedProject(portfolioProjects[prevIndex]);
                }}
                className="flex items-center gap-2 text-white hover:text-secondary transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-label-caps text-label-caps">Previous</span>
              </button>
              <button
                onClick={() => {
                  const currentIndex = portfolioProjects.findIndex(p => p.id === selectedProject.id);
                  const nextIndex = currentIndex < portfolioProjects.length - 1 ? currentIndex + 1 : 0;
                  setSelectedProject(portfolioProjects[nextIndex]);
                }}
                className="flex items-center gap-2 text-white hover:text-secondary transition-colors"
              >
                <span className="font-label-caps text-label-caps">Next</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
