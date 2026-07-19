'use client';

import { useState } from 'react';
import { CheckCircle2, XCircle, RotateCw } from 'lucide-react';

interface PracticeItem {
  id: string;
  question: string;
  answer: string;
  hint?: string;
}

interface PracticeCardProps {
  title: string;
  items: PracticeItem[];
  onComplete?: (correct: number, total: number) => void;
}

export default function PracticeCard({ title, items, onComplete }: PracticeCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  const currentItem = items[currentIndex];
  const isLastItem = currentIndex === items.length - 1;

  const handleSubmit = () => {
    const correct = userAnswer.trim().toLowerCase() === currentItem.answer.trim().toLowerCase();
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (isLastItem) {
      if (onComplete) {
        onComplete(score + (isCorrect ? 1 : 0), items.length);
      }
      setCurrentIndex(0);
      setScore(0);
      setUserAnswer('');
      setShowResult(false);
    } else {
      setCurrentIndex(prev => prev + 1);
      setUserAnswer('');
      setShowResult(false);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setScore(0);
    setUserAnswer('');
    setShowResult(false);
  };

  return (
    <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-gold-accent/30 transition-all duration-300">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-headline-lg text-headline-lg text-pure-white">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <span className="font-body-sm text-body-sm text-pure-white/60">
              {currentIndex + 1} / {items.length}
            </span>
            <button
              onClick={handleReset}
              className="text-gold-accent hover:text-gold-accent/80 transition-colors"
            >
              <RotateCw size={16} />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/10 rounded-full h-2">
          <div
            className="bg-gold-accent h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
          />
        </div>

        {/* Question */}
        <div className="bg-surface-container-highest/5 rounded-xl p-6">
          <p className="font-headline-md text-headline-md text-pure-white mb-2">
            {currentItem.question}
          </p>
          {currentItem.hint && (
            <p className="font-body-sm text-body-sm text-pure-white/50 italic">
              Hint: {currentItem.hint}
            </p>
          )}
        </div>

        {/* Input */}
        {!showResult ? (
          <div className="space-y-4">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder="Type your answer..."
              className="w-full bg-surface-container-highest/10 border border-white/20 rounded-xl py-4 px-6 text-pure-white placeholder:text-pure-white/40 focus:outline-none focus:border-gold-accent/50 transition-colors"
            />
            <button
              onClick={handleSubmit}
              disabled={!userAnswer.trim()}
              className="w-full py-4 rounded-full bg-primary-container text-pure-white font-label-caps text-label-caps hover:bg-gold-accent hover:text-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Check Answer
            </button>
          </div>
        ) : (
          <div className={`p-6 rounded-xl border animate-in slide-in-from-top duration-300 ${
            isCorrect
              ? 'bg-green-500/10 border-green-500/30'
              : 'bg-red-500/10 border-red-500/30'
          }`}>
            <div className="flex items-center gap-4 mb-4">
              {isCorrect ? (
                <CheckCircle2 className="text-green-500" size={32} />
              ) : (
                <XCircle className="text-red-500" size={32} />
              )}
              <div>
                <p className="font-label-caps text-label-caps text-pure-white/80">
                  {isCorrect ? 'Correct!' : 'Incorrect'}
                </p>
                {!isCorrect && (
                  <p className="font-body-md text-body-md text-pure-white">
                    Correct answer: <span className="text-gold-accent">{currentItem.answer}</span>
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={handleNext}
              className="w-full py-4 rounded-full bg-gold-accent text-primary font-label-caps text-label-caps hover:bg-gold-accent/80 transition-all duration-300"
            >
              {isLastItem ? 'Finish Practice' : 'Next Question'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
