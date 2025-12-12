'use client';

import { cn } from '@/lib/utils';
import { formatCompactNumber, formatPrice } from '@/lib/formatters';
import { FlashState } from '@/types/token';
import { SolanaIcon } from '@/components/atoms/SolanaIcon';

interface TokenMetricsGridProps {
  price: number;
  priceChange: number;
  marketCap: number;
  marketCapChange: number;
  transactions: number;
  volume: number;
  holders: number;
  flashState?: FlashState;
}

export function TokenMetricsGrid({
  price,
  marketCap,
  transactions,
  volume,
  flashState,
}: TokenMetricsGridProps) {
  // Calculate green/red ratio for progress bar (simulated buy/sell ratio)
  const greenPercent = Math.min(100, Math.max(0, 50 + (Math.random() - 0.5) * 60));
  const redPercent = 100 - greenPercent;

  return (
    <div className="flex flex-col gap-0.5 items-end text-right">
      {/* Row 1: MC - Green value */}
      <div className="flex items-center gap-1.5">
        <span className="text-xs text-gray-400">MC</span>
        <span className={cn(
          'text-base font-semibold tabular-nums text-pulse-green',
          flashState === 'green' && 'animate-flash-green',
          flashState === 'red' && 'animate-flash-red'
        )}>
          ${formatCompactNumber(marketCap)}
        </span>
      </div>
      
      {/* Row 2: Volume - Blue/Indigo value */}
      <div className="flex items-center gap-1.5">
        <span className="text-xs text-gray-400">V</span>
        <span className="text-base font-bold tabular-nums text-indigo-400">
          ${formatCompactNumber(volume)}
        </span>
      </div>
      
      {/* Row 3: F + Solana + Price + TX + Progress Bar */}
      <div className="flex items-center justify-end gap-2 text-xs whitespace-nowrap">
        {/* F label */}
        <span className="text-gray-400">F</span>
        
        {/* Solana Icon */}
        <SolanaIcon size="sm" className="w-4 h-4" />
        
        {/* Price value - white */}
        <span className="text-white tabular-nums">
          {formatPrice(price).replace('$', '')}
        </span>
        
        {/* TX label + value */}
        <span className="text-gray-400">TX</span>
        <span className="text-white tabular-nums">
          {formatCompactNumber(transactions)}
        </span>
        
        {/* Progress bar - Green + Red split */}
        <div className="w-12 h-2 rounded-full overflow-hidden flex flex-shrink-0">
          {/* Green portion (left) */}
          <div 
            className="h-full bg-emerald-500" 
            style={{ width: `${greenPercent}%` }}
          />
          {/* Red portion (right) */}
          <div 
            className="h-full bg-red-500" 
            style={{ width: `${redPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
