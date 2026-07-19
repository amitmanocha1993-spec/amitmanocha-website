'use client';

import { useState } from 'react';
import { RotateCw, Volume2 } from 'lucide-react';

interface FlashcardProps {
  front: string;
  back: string;
  frontLabel?: string;
  backLabel?: string;
  onPlayAudio?: () => void;
}

export default function Flashcard({
  front,
  back,
  frontLabel = 'Front',
  backLabel = 'Back',
  onPlayAudio
}: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full max-w-lg mx-auto perspective-1000">
      <div
        className="relative w-full h-80 cursor-pointer transition-transform duration-700 transform-style-3d"
        style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front */}
        <div
          className="absolute inset-0 backface-hidden glass-card rounded-2xl p-8 flex flex-col items-center justify-center border border-white/10 hover:border-gold-accent/30 transition-all duration-300"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <span className="absolute top-4 left-4 font-label-caps text-label-caps text-gold-accent/60 tracking-widest uppercase">
            {frontLabel}
          </span>
          <div className="text-center space-y-4">
            <p className="font-headline-lg text-headline-lg text-pure-white">
              {front}
            </p>
            {onPlayAudio && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPlayAudio();
                }}
                className="w-12 h-12 rounded-full bg-gold-accent/20 flex items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-primary transition-all duration-300"
              >
                <Volume2 size={24} />
              </button>
            )}
          </div>
          <div className="absolute bottom-4 right-4">
            <RotateCw className="text-pure-white/30" size={20} />
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden glass-card rounded-2xl p-8 flex flex-col items-center justify-center border border-gold-accent/30 bg-gold-accent/5"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <span className="absolute top-4 left-4 font-label-caps text-label-caps text-gold-accent tracking-widest uppercase">
            {backLabel}
          </span>
          <div className="text-center">
            <p className="font-headline-lg text-headline-lg text-pure-white">
              {back}
            </p>
          </div>
          <div className="absolute bottom-4 right-4">
            <RotateCw className="text-gold-accent" size={20} />
          </div>
        </div>
      </div>

      <p className="text-center mt-4 font-body-sm text-body-sm text-pure-white/50">
        Click card to flip
      </p>
    </div>
  );
}
