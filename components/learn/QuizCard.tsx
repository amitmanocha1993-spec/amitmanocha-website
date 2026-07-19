'use client';

import { useState } from 'react';
import { CheckCircle2, XCircle, RotateCw } from 'lucide-react';

interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface QuizCardProps {
  question: string;
  options: QuizOption[];
  explanation?: string;
  onComplete?: (isCorrect: boolean) => void;
}

export default function QuizCard({ question, options, explanation, onComplete }: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (optionId: string) => {
    if (showResult) return;
    
    setSelectedAnswer(optionId);
    setShowResult(true);
    
    const selectedOption = options.find(opt => opt.id === optionId);
    if (selectedOption && onComplete) {
      onComplete(selectedOption.isCorrect);
    }
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const selectedOption = options.find(opt => opt.id === selectedAnswer);

  return (
    <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-gold-accent/30 transition-all duration-300">
      <div className="space-y-6">
        {/* Question */}
        <div>
          <h3 className="font-headline-lg text-headline-lg text-pure-white mb-4">
            {question}
          </h3>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {options.map((option) => {
            const isSelected = selectedAnswer === option.id;
            const showCorrect = showResult && option.isCorrect;
            const showIncorrect = showResult && isSelected && !option.isCorrect;

            return (
              <button
                key={option.id}
                onClick={() => handleAnswerSelect(option.id)}
                disabled={showResult}
                className={`w-full p-4 rounded-xl border transition-all duration-300 text-left flex items-center gap-4 ${
                  showCorrect
                    ? 'bg-green-500/20 border-green-500/50'
                    : showIncorrect
                    ? 'bg-red-500/20 border-red-500/50'
                    : isSelected
                    ? 'bg-gold-accent/20 border-gold-accent/50'
                    : 'bg-surface-container-highest/5 border-white/10 hover:border-gold-accent/30'
                } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="flex-shrink-0">
                  {showCorrect ? (
                    <CheckCircle2 className="text-green-500" size={20} />
                  ) : showIncorrect ? (
                    <XCircle className="text-red-500" size={20} />
                  ) : (
                    <div className={`w-5 h-5 rounded-full border-2 ${
                      isSelected ? 'border-gold-accent bg-gold-accent' : 'border-white/30'
                    }`} />
                  )}
                </div>
                <p className="font-body-md text-body-md text-pure-white">
                  {option.text}
                </p>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showResult && explanation && (
          <div className={`p-4 rounded-xl border animate-in slide-in-from-top duration-300 ${
            selectedOption?.isCorrect
              ? 'bg-green-500/10 border-green-500/30'
              : 'bg-red-500/10 border-red-500/30'
          }`}>
            <div className="flex items-start gap-3">
              {selectedOption?.isCorrect ? (
                <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
              ) : (
                <XCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
              )}
              <div>
                <p className="font-label-caps text-label-caps text-pure-white/80 mb-2">
                  {selectedOption?.isCorrect ? 'Correct!' : 'Incorrect'}
                </p>
                <p className="font-body-sm text-body-sm text-pure-white/70">
                  {explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Reset Button */}
        {showResult && (
          <button
            onClick={handleReset}
            className="flex items-center gap-2 text-gold-accent hover:text-gold-accent/80 transition-colors"
          >
            <RotateCw size={16} />
            <span className="font-label-caps text-label-caps tracking-widest uppercase">
              Try Again
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
