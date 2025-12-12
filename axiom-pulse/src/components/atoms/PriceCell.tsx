'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { formatPrice, formatMarketCap, formatPercentage } from '@/lib/formatters';
import { FlashState } from '@/types/token';

interface PriceCellProps {
  value: number;
  change?: number;
  flashState?: FlashState;
  format?: 'currency' | 'marketCap';
}

export function PriceCell({ value, change, flashState, format = 'currency' }: PriceCellProps) {
  const [isFlashing, setIsFlashing] = useState(false);
  const [flashColor, setFlashColor] = useState<'green' | 'red' | null>(null);
  const prevValueRef = useRef(value);

  useEffect(() => {
    if (flashState && flashState !== null) {
      setFlashColor(flashState);
      setIsFlashing(true);
      
      const timer = setTimeout(() => {
        setIsFlashing(false);
        setFlashColor(null);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [flashState, value]);

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  const formattedValue = format === 'marketCap' 
    ? formatMarketCap(value) 
    : formatPrice(value);

  const changeColor = change !== undefined
    ? change >= 0 ? 'text-pulse-green' : 'text-pulse-red'
    : '';

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 transition-colors duration-100 rounded px-0.5',
        isFlashing && flashColor === 'green' && 'animate-flash-green',
        isFlashing && flashColor === 'red' && 'animate-flash-red'
      )}
    >
      <span className={cn('text-[11px] font-medium', changeColor)}>
        {formattedValue}
      </span>
      {change !== undefined && (
        <span className={cn('text-[10px]', changeColor)}>
          {formatPercentage(change)}
        </span>
      )}
    </div>
  );
}
