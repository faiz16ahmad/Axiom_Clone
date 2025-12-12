'use client';

import { cn } from '@/lib/utils';

interface IconProps {
  className?: string;
}

// Dev/Person icon - Blue outline
export function DevIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn('w-4 h-4', className)} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a6.5 6.5 0 0 1 13 0" strokeLinecap="round" />
    </svg>
  );
}

// Globe icon - Grid pattern
export function GlobeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn('w-4 h-4', className)} fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

// Telegram icon - Paper plane
export function TelegramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn('w-4 h-4', className)} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 2L15 22L11 13L2 9L22 2Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Search icon - Magnifying glass
export function SearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn('w-4 h-4', className)} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
    </svg>
  );
}

// Holders icon - Double person
export function HoldersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn('w-4 h-4', className)} fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <circle cx="17" cy="7" r="3" />
      <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
    </svg>
  );
}

// Buys/Thumbs up icon
export function BuysIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn('w-4 h-4', className)} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
      <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

// Trophy/Goblet icon
export function TrophyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn('w-4 h-4', className)} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

// Feather/Pen icon - Red for some tokens
export function FeatherIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn('w-4 h-4', className)} fill="currentColor">
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76zM16 8l-2 2" />
    </svg>
  );
}

// Dollar circle icon - Blue for USDC-like
export function DollarCircleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn('w-4 h-4', className)} fill="none">
      <circle cx="12" cy="12" r="10" fill="#2775CA" />
      <path d="M12 6v2m0 8v2m-3-9.5c0 1.38 1.34 2.5 3 2.5s3 1.12 3 2.5-1.34 2.5-3 2.5-3-1.12-3-2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
