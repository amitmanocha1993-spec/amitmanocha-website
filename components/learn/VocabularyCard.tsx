'use client';

import { useState } from 'react';
import { Volume2, ChevronDown, ChevronUp } from 'lucide-react';

interface VocabularyCardProps {
  word: string;
  translation: string;
  pronunciation?: string;
  example?: string;
  exampleTranslation?: string;
  category?: string;
  onPlayAudio?: () => void;
  showExample?: boolean;
}

export default function VocabularyCard({
  word,
  translation,
  pronunciation,
  example,
  exampleTranslation,
  category,
  onPlayAudio,
  showExample = false
}: VocabularyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="glass-card rounded-xl p-6 border border-white/10 hover:border-gold-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold-accent/10 group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          {category && (
            <span className="inline-block px-3 py-1 rounded-full bg-gold-accent/20 text-gold-accent text-xs font-label-caps text-label-caps tracking-widest uppercase mb-2">
              {category}
            </span>
          )}
          <h3 className="font-headline-lg text-headline-lg text-pure-white mb-1 group-hover:text-gold-accent transition-colors">
            {word}
          </h3>
          <p className="font-body-md text-body-md text-pure-white/80">
            {translation}
          </p>
        </div>
        {onPlayAudio && (
          <button
            onClick={onPlayAudio}
            className="w-10 h-10 rounded-full bg-gold-accent/20 flex items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-primary transition-all duration-300 flex-shrink-0 ml-4"
          >
            <Volume2 size={18} />
          </button>
        )}
      </div>

      {/* Pronunciation */}
      {pronunciation && (
        <div className="mb-4">
          <p className="font-body-sm text-body-sm text-gold-accent/80 italic">
            {pronunciation}
          </p>
        </div>
      )}

      {/* Example Section */}
      {(example || exampleTranslation) && (
        <div className="border-t border-white/10 pt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-pure-white/60 hover:text-gold-accent transition-colors text-sm"
          >
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            <span className="font-label-caps text-label-caps tracking-widest uppercase">
              Example
            </span>
          </button>
          
          {isExpanded && (
            <div className="mt-4 space-y-2 animate-in slide-in-from-top duration-300">
              {example && (
                <p className="font-body-md text-body-md text-pure-white/90 italic">
                  "{example}"
                </p>
              )}
              {exampleTranslation && (
                <p className="font-body-sm text-body-sm text-pure-white/60">
                  {exampleTranslation}
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
