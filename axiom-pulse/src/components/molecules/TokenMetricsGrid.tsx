'use client';

import { cn } from '@/lib/utils';
import { formatCompactNumber, formatPrice } from '@/lib/formatters';
import { FlashState } from '@/types/token';
import { SolanaIcon } from '@/components/atoms/SolanaIcon';
import { memo, useMemo } from 'react';

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

function TokenMetricsGridComponent({
  price,
  marketCap,
  transactions,
  volume,
  flashState,
}: TokenMetricsGridProps) {
  // Memoize the progress bar ratio to prevent recalculation on every render
  const { greenPercent, redPercent } = useMemo(() => {
    const green = Math.min(100, Math.max(0, 50 + (Math.random() - 0.5) * 60));
    return { greenPercent: green, redPercent: 100 - green };
  }, []);

  return (
    <div className="flex flex-col gap-[2px] items-end text-right">
      {/* Row 1: MC - Green value with smooth flash */}
      <div className="flex items-center gap-[4px] h-[18px]">
        <span className="text-[12px] text-gray-400 font-medium">MC</span>
        <span className={cn(
          'text-[16px] font-medium tabular-nums text-emerald-400 price-transition',
          flashState === 'green' && 'animate-flash-green',
          flashState === 'red' && 'animate-flash-red'
        )}>
          ${formatCompactNumber(marketCap)}
        </span>
      </div>
      
      {/* Row 2: Volume - White value */}
      <div className="flex items-center gap-[4px] h-[18px]">
        <span className="text-[12px] text-gray-400 font-medium">V</span>
        <span className="text-[16px] font-medium tabular-nums text-white">
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
        
        {/* Progress bar - Green + Red split with smooth transition */}
        <div className="w-12 h-[4px] rounded-full overflow-hidden flex flex-shrink-0">
          {/* Green portion (left) */}
          <div 
            className="h-full bg-emerald-500 transition-all duration-300" 
            style={{ width: `${greenPercent}%` }}
          />
          {/* Red portion (right) */}
          <div 
            className="h-full bg-red-500 transition-all duration-300" 
            style={{ width: `${redPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export const TokenMetricsGrid = memo(TokenMetricsGridComponent);
TokenMetricsGrid.displayName = 'TokenMetricsGrid';
