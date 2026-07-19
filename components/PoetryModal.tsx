'use client';

import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Poetry {
  id: string;
  title: string;
  category: 'Nazm' | 'Ghazal' | 'Rubai' | 'Couplet';
  urdu: string;
  roman?: string;
  translation?: string;
}

interface PoetryModalProps {
  poetry: Poetry | null;
  isOpen: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function PoetryModal({
  poetry,
  isOpen,
  onClose,
  onPrevious,
  onNext,
  isFirst,
  isLast,
}: PoetryModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !poetry) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300" />
      
      {/* Modal Content */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-deep-navy rounded-2xl border border-gold-accent/20 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 md:p-8 border-b border-gold-accent/10">
          <div>
            <span className="font-label-caps text-label-caps text-gold-accent tracking-widest uppercase">
              {poetry.category}
            </span>
            <h2 className="font-headline-xl text-headline-xl text-pure-white mt-2">
              {poetry.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-gold-accent/30 flex items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-primary transition-all duration-300"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-180px)] space-y-8">
          {/* Urdu Text */}
          {poetry.urdu && (
            <div className="space-y-4">
              <h3 className="font-label-caps text-label-caps text-gold-accent/70 tracking-widest uppercase">
                Urdu
              </h3>
              <div
                className="font-nastaleeq text-2xl md:text-4xl text-gold-accent leading-[2.5] md:leading-[2.2] tracking-wide whitespace-pre-line"
                dir="rtl"
                style={{ textShadow: '0 0 10px rgba(212, 175, 55, 0.2)' }}
              >
                {poetry.urdu}
              </div>
            </div>
          )}

          {/* Roman Transliteration */}
          {poetry.roman && (
            <div className="space-y-4">
              <h3 className="font-label-caps text-label-caps text-gold-accent/70 tracking-widest uppercase">
                Roman Transliteration
              </h3>
              <p className="font-headline-md text-headline-md italic text-pure-white/90 leading-relaxed whitespace-pre-line">
                {poetry.roman}
              </p>
            </div>
          )}

          {/* English Translation */}
          {poetry.translation && (
            <div className="space-y-4">
              <h3 className="font-label-caps text-label-caps text-gold-accent/70 tracking-widest uppercase">
                English Translation
              </h3>
              <p className="font-body-lg text-body-lg text-pure-white/80 leading-relaxed whitespace-pre-line">
                {poetry.translation}
              </p>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between p-6 md:p-8 border-t border-gold-accent/10">
          <button
            onClick={onPrevious}
            disabled={isFirst}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-gold-accent/30 text-gold-accent hover:bg-gold-accent hover:text-primary transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
            <span className="font-label-caps text-label-caps">Previous</span>
          </button>
          <button
            onClick={onNext}
            disabled={isLast}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-gold-accent/30 text-gold-accent hover:bg-gold-accent hover:text-primary transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <span className="font-label-caps text-label-caps">Next</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
