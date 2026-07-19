'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ContentCardProps {
  title: string;
  content: string | React.ReactNode;
  icon?: React.ReactNode;
  defaultExpanded?: boolean;
  variant?: 'default' | 'highlight' | 'info';
}

export default function ContentCard({
  title,
  content,
  icon,
  defaultExpanded = false,
  variant = 'default'
}: ContentCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const variantStyles = {
    default: 'bg-surface-container-highest/5 border-white/10',
    highlight: 'bg-gold-accent/10 border-gold-accent/30',
    info: 'bg-primary-container/10 border-primary-container/30'
  };

  return (
    <div className={`glass-card rounded-xl border ${variantStyles[variant]} overflow-hidden transition-all duration-300 hover:border-gold-accent/30`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-4">
          {icon && <div className="text-gold-accent">{icon}</div>}
          <h3 className="font-headline-md text-headline-md text-pure-white">
            {title}
          </h3>
        </div>
        {isExpanded ? <ChevronUp size={20} className="text-gold-accent" /> : <ChevronDown size={20} className="text-pure-white/50" />}
      </button>
      
      {isExpanded && (
        <div className="px-6 pb-6 animate-in slide-in-from-top duration-300">
          <div className="pt-4 border-t border-white/10">
            {typeof content === 'string' ? (
              <p className="font-body-md text-body-md text-pure-white/80 leading-relaxed">
                {content}
              </p>
            ) : (
              content
            )}
          </div>
        </div>
      )}
    </div>
  );
}
