'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LiveTimerProps {
  startTime: Date;
  className?: string;
}

/**
 * Format time difference into human-readable string
 * < 60s: "Xs"
 * < 60m: "Xm"
 * < 24h: "Xh"
 * < 30d: "Xd"
 * < 12mo: "Xmo"
 * >= 12mo: "Xy"
 */
function formatTimeAgo(startTime: Date): string {
  const now = Date.now();
  const start = startTime instanceof Date ? startTime.getTime() : new Date(startTime).getTime();
  const diffSeconds = Math.floor((now - start) / 1000);

  // Seconds (< 60s)
  if (diffSeconds < 60) {
    return `${diffSeconds}s`;
  }

  // Minutes (< 60m)
  const diffMinutes = Math.floor(diffSeconds / 60);
  if (diffMinutes < 60) {
    return `${diffMinutes}m`;
  }

  // Hours (< 24h)
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) {
    return `${diffHours}h`;
  }

  // Days (< 30d)
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 30) {
    return `${diffDays}d`;
  }

  // Months (< 12mo)
  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths < 12) {
    return `${diffMonths}mo`;
  }

  // Years
  const diffYears = Math.floor(diffMonths / 12);
  return `${diffYears}y`;
}

export function LiveTimer({ startTime, className }: LiveTimerProps) {
  const [timeAgo, setTimeAgo] = useState(() => formatTimeAgo(startTime));

  useEffect(() => {
    // Initial calculation
    setTimeAgo(formatTimeAgo(startTime));

    // Update every second
    const interval = setInterval(() => {
      setTimeAgo(formatTimeAgo(startTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  return (
    <span className={cn('text-pulse-green font-medium tabular-nums', className)}>
      {timeAgo}
    </span>
  );
}
