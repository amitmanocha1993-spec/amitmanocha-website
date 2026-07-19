'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Volume2 } from 'lucide-react';

interface LetterCardProps {
  letter: string;
  letterName: string;
  pronunciation: string;
  description?: string;
  positionForms?: {
    beginning: string;
    middle: string;
    end: string;
    isolated: string;
  };
  examples?: {
    word: string;
    meaning: string;
  }[];
  onPlayAudio?: () => void;
}

export default function LetterCard({
  letter,
  letterName,
  pronunciation,
  description,
  positionForms,
  examples,
  onPlayAudio
}: LetterCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-gold-accent/30 transition-all duration-300">
      {/* Main Letter Display */}
      <div className="p-8 md:p-12 text-center bg-gradient-to-br from-deep-navy to-primary">
        <div className="relative inline-block mb-6">
          <div className="font-nastaliq text-8xl md:text-9xl text-gold-accent animate-in fade-in duration-700" style={{ textShadow: '0 0 30px rgba(212, 175, 55, 0.3)' }}>
            {letter}
          </div>
          {onPlayAudio && (
            <button
              onClick={onPlayAudio}
              className="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gold-accent/20 flex items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-primary transition-all duration-300"
            >
              <Volume2 size={20} />
            </button>
          )}
        </div>
        
        <div className="space-y-2">
          <h3 className="font-headline-lg text-headline-lg text-pure-white">
            {letterName}
          </h3>
          <p className="font-body-lg text-body-lg text-gold-accent/80 italic">
            {pronunciation}
          </p>
        </div>
      </div>

      {/* Description */}
      {description && (
        <div className="p-6 border-t border-white/10">
          <p className="font-body-md text-body-md text-pure-white/80 text-center">
            {description}
          </p>
        </div>
      )}

      {/* Position Forms */}
      {positionForms && (
        <div className="p-6 border-t border-white/10">
          <h4 className="font-label-caps text-label-caps text-gold-accent tracking-widest uppercase mb-4 text-center">
            Position Forms
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-card p-4 rounded-xl text-center hover:bg-gold-accent/10 transition-colors">
              <p className="font-body-sm text-body-sm text-pure-white/60 mb-2">Beginning</p>
              <p className="font-nastaliq text-3xl text-gold-accent">{positionForms.beginning}</p>
            </div>
            <div className="glass-card p-4 rounded-xl text-center hover:bg-gold-accent/10 transition-colors">
              <p className="font-body-sm text-body-sm text-pure-white/60 mb-2">Middle</p>
              <p className="font-nastaliq text-3xl text-gold-accent">{positionForms.middle}</p>
            </div>
            <div className="glass-card p-4 rounded-xl text-center hover:bg-gold-accent/10 transition-colors">
              <p className="font-body-sm text-body-sm text-pure-white/60 mb-2">End</p>
              <p className="font-nastaliq text-3xl text-gold-accent">{positionForms.end}</p>
            </div>
            <div className="glass-card p-4 rounded-xl text-center hover:bg-gold-accent/10 transition-colors">
              <p className="font-body-sm text-body-sm text-pure-white/60 mb-2">Isolated</p>
              <p className="font-nastaliq text-3xl text-gold-accent">{positionForms.isolated}</p>
            </div>
          </div>
        </div>
      )}

      {/* Examples */}
      {examples && examples.length > 0 && (
        <div className="p-6 border-t border-white/10">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-center gap-2 text-gold-accent hover:text-gold-accent/80 transition-colors mb-4"
          >
            <span className="font-label-caps text-label-caps tracking-widest uppercase">
              Example Words
            </span>
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          
          {isExpanded && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in slide-in-from-top duration-300">
              {examples.map((example, index) => (
                <div key={index} className="glass-card p-4 rounded-xl hover:bg-gold-accent/10 transition-colors">
                  <p className="font-nastaliq text-2xl text-gold-accent mb-2" dir="rtl">
                    {example.word}
                  </p>
                  <p className="font-body-sm text-body-sm text-pure-white/60">
                    {example.meaning}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
