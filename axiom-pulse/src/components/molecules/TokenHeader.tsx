'use client';

import { Token } from '@/types/token';
import { LiveTimer } from '@/components/atoms/LiveTimer';
import { CopyIcon } from '@/components/atoms/CopyIcon';
import { formatCompactNumber } from '@/lib/formatters';
import {
  DevIcon,
  GlobeIcon,
  TelegramIcon,
  SearchIcon,
  HoldersIcon,
  BuysIcon,
  TrophyIcon,
} from '@/components/atoms/TokenIcons';

interface TokenHeaderProps {
  token: Token;
}

export function TokenHeader({ token }: TokenHeaderProps) {
  return (
    <div className="flex flex-col gap-0.5 min-w-0 flex-1">
      {/* Row 1: Name and ticker */}
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-base font-bold text-white truncate max-w-[120px]">
          {token.name}
        </span>
        <span className="text-sm text-gray-500 font-normal flex-shrink-0">
          {token.symbol}
        </span>
        <CopyIcon className="w-3.5 h-3.5 text-gray-500 cursor-pointer hover:text-white flex-shrink-0" />
      </div>
      
      {/* Row 2: Info row - more spread out like LUNA */}
      <div className="flex items-center gap-2 text-gray-500">
        {/* Green Time */}
        <LiveTimer startTime={token.createdAt} className="text-xs" />
        
        {/* Dev icon - Blue */}
        <DevIcon className="w-4 h-4 text-blue-400 cursor-pointer hover:text-blue-300" />
        
        {/* Globe icon */}
        <GlobeIcon className="w-4 h-4 cursor-pointer hover:text-white" />
        
        {/* Telegram icon */}
        <TelegramIcon className="w-4 h-4 cursor-pointer hover:text-white" />
        
        {/* Search icon */}
        <SearchIcon className="w-4 h-4 cursor-pointer hover:text-white" />
        
        {/* Holders count */}
        <div className="flex items-center gap-1">
          <HoldersIcon className="w-4 h-4" />
          <span className="text-xs tabular-nums">{formatCompactNumber(token.holders)}</span>
        </div>
        
        {/* Buys count */}
        <div className="flex items-center gap-1">
          <BuysIcon className="w-4 h-4" />
          <span className="text-xs tabular-nums">0</span>
        </div>
        
        {/* Trophy count */}
        <div className="flex items-center gap-1">
          <TrophyIcon className="w-4 h-4" />
          <span className="text-xs tabular-nums">0</span>
        </div>
      </div>
    </div>
  );
}
