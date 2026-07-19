'use client';

import { useState, useEffect } from 'react';
import { Play, RotateCw } from 'lucide-react';

interface StrokeAnimationProps {
  letter: string;
  strokes: string[];
}

export default function StrokeAnimation({ letter, strokes }: StrokeAnimationProps) {
  const [currentStroke, setCurrentStroke] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentStroke((prev) => {
        if (prev >= strokes.length - 1) {
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [isPlaying, strokes.length]);

  const handlePlay = () => {
    setCurrentStroke(0);
    setIsPlaying(true);
  };

  const handleReset = () => {
    setCurrentStroke(0);
    setIsPlaying(false);
  };

  return (
    <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-gold-accent/30 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-label-caps text-label-caps text-gold-accent tracking-widest uppercase">
          Stroke Order
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePlay}
            disabled={isPlaying}
            className="w-10 h-10 rounded-full bg-gold-accent/20 flex items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-primary transition-all duration-300 disabled:opacity-50"
          >
            <Play size={18} />
          </button>
          <button
            onClick={handleReset}
            className="w-10 h-10 rounded-full bg-surface-container-highest/10 flex items-center justify-center text-pure-white/60 hover:text-gold-accent transition-all duration-300"
          >
            <RotateCw size={18} />
          </button>
        </div>
      </div>

      {/* Animation Display */}
      <div className="relative h-64 flex items-center justify-center bg-surface-container-highest/5 rounded-xl overflow-hidden">
        {/* Letter Background */}
        <div className="font-nastaliq text-9xl text-gold-accent/20 absolute inset-0 flex items-center justify-center">
          {letter}
        </div>

        {/* Animated Strokes */}
        <svg
          viewBox="0 0 200 200"
          className="w-48 h-48 relative z-10"
        >
          {strokes.map((stroke, index) => (
            <path
              key={index}
              d={stroke}
              fill="none"
              stroke={index <= currentStroke ? 'rgba(212, 175, 55, 1)' : 'rgba(212, 175, 55, 0.2)'}
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-500"
              style={{
                opacity: index <= currentStroke ? 1 : 0.2,
                filter: index === currentStroke ? 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.8))' : 'none'
              }}
            />
          ))}
        </svg>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center gap-2 mt-4">
        {strokes.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              index <= currentStroke ? 'bg-gold-accent w-8' : 'bg-white/20 w-4'
            }`}
          />
        ))}
      </div>

      <p className="text-center mt-4 font-body-sm text-body-sm text-pure-white/50">
        Stroke {currentStroke + 1} of {strokes.length}
      </p>
    </div>
  );
}
