/**
 * Format a number with K, M, B suffixes
 */
export function formatCompactNumber(value: number): string {
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(1)}B`;
  }
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)}M`;
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1)}K`;
  }
  return value.toFixed(0);
}

/**
 * Format a price value with appropriate decimal places
 */
export function formatPrice(value: number): string {
  if (value < 0.0001) {
    return `$${value.toFixed(8)}`;
  }
  if (value < 0.01) {
    return `$${value.toFixed(6)}`;
  }
  if (value < 1) {
    return `$${value.toFixed(4)}`;
  }
  if (value < 1000) {
    return `$${value.toFixed(2)}`;
  }
  return `$${formatCompactNumber(value)}`;
}

/**
 * Format market cap with $ prefix and compact notation
 */
export function formatMarketCap(value: number): string {
  return `$${formatCompactNumber(value)}`;
}

/**
 * Format percentage change with + or - prefix
 */
export function formatPercentage(value: number): string {
  const prefix = value >= 0 ? '+' : '';
  return `${prefix}${value.toFixed(2)}%`;
}

/**
 * Format relative time with full unit progression:
 * < 60s: "Xs"
 * < 60m: "Xm"
 * < 24h: "Xh"
 * < 30d: "Xd"
 * < 12mo: "Xmo"
 * >= 12mo: "Xy"
 */
export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);

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
