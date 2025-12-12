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
    <div className="flex flex-col gap-1 min-w-0 flex-1">
      {/* Row 1: Name and ticker */}
      <div className="flex items-center gap-2.5 min-w-0">
        <span className="text-lg font-bold text-white truncate max-w-[140px]">
          {token.name}
        </span>
        <span className="text-base text-gray-500 font-normal flex-shrink-0">
          {token.symbol}
        </span>
        <CopyIcon className="w-4 h-4 text-gray-500 cursor-pointer hover:text-white flex-shrink-0" />
      </div>
      
      {/* Row 2: Info row - more spread out like LUNA */}
      <div className="flex items-center gap-2.5 text-gray-500">
        {/* Green Time */}
        <LiveTimer startTime={token.createdAt} className="text-sm" />
        
        {/* Dev icon - Blue */}
        <DevIcon className="w-5 h-5 text-blue-400 cursor-pointer hover:text-blue-300" />
        
        {/* Globe icon */}
        <GlobeIcon className="w-5 h-5 cursor-pointer hover:text-white" />
        
        {/* Telegram icon */}
        <TelegramIcon className="w-5 h-5 cursor-pointer hover:text-white" />
        
        {/* Search icon */}
        <SearchIcon className="w-5 h-5 cursor-pointer hover:text-white" />
        
        {/* Holders count */}
        <div className="flex items-center gap-1.5">
          <HoldersIcon className="w-5 h-5" />
          <span className="text-sm tabular-nums">{formatCompactNumber(token.holders)}</span>
        </div>
        
        {/* Buys count */}
        <div className="flex items-center gap-1.5">
          <BuysIcon className="w-5 h-5" />
          <span className="text-sm tabular-nums">0</span>
        </div>
        
        {/* Trophy count */}
        <div className="flex items-center gap-1.5">
          <TrophyIcon className="w-5 h-5" />
          <span className="text-sm tabular-nums">0</span>
        </div>
      </div>
    </div>
  );
}
