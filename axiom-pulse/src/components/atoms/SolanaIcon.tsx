'use client';

import { cn } from '@/lib/utils';

interface SolanaIconProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function SolanaIcon({ className, size = 'sm' }: SolanaIconProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <svg
      viewBox="0 0 397 311"
      className={cn(sizeClasses[size], className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sol-grad-top" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00FFA3" />
          <stop offset="100%" stopColor="#03E1FF" />
        </linearGradient>
        <linearGradient id="sol-grad-mid" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9945FF" />
          <stop offset="100%" stopColor="#14F195" />
        </linearGradient>
        <linearGradient id="sol-grad-bot" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9945FF" />
          <stop offset="100%" stopColor="#19AFFF" />
        </linearGradient>
      </defs>
      
      {/* Top bar - teal/cyan gradient, pointing right */}
      <path
        d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z"
        fill="url(#sol-grad-top)"
      />
      
      {/* Middle bar - purple to teal gradient, pointing left */}
      <path
        d="M64.6 3.8C67 1.4 70.3 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z"
        fill="url(#sol-grad-bot)"
      />
      
      {/* Bottom bar - purple to blue gradient */}
      <path
        d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z"
        fill="url(#sol-grad-mid)"
      />
    </svg>
  );
}
