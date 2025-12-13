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
import { Crown } from 'lucide-react';

interface TokenHeaderProps {
  token: Token;
}

export function TokenHeader({ token }: TokenHeaderProps) {
  return (
    <div className="flex flex-col w-full gap-[2px] min-w-0">
      {/* Row 1: Name and description */}
      <div className="flex flex-row min-h-[18px] w-full gap-[4px] justify-between items-start min-w-0">
        <div className="overflow-hidden" style={{ minWidth: '150px' }}>
          <div className="flex flex-row gap-[4px] justify-start items-center">
            <div className="min-w-0 whitespace-nowrap overflow-hidden truncate text-white text-[16px] font-medium tracking-[-0.02em]" style={{ maxWidth: '120px' }}>
              {token.name}
            </div>
            <div className="min-w-0 flex-1 overflow-hidden">
              <button className="flex flex-row gap-[4px] justify-start items-center text-gray-400 hover:text-blue-400 transition-colors duration-[125ms] min-w-0 overflow-hidden">
                <div className="min-w-0 whitespace-nowrap overflow-hidden truncate text-inherit text-[16px] lg:text-[14px] xl:text-[16px] text-left font-medium tracking-[-0.02em]">
                  {token.symbol}
                </div>
                <CopyIcon className="w-[14px] h-[14px] text-inherit flex-shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Row 2: Time + Social icons + Stats */}
      <div className="flex flex-row w-full h-[18px] gap-[12px] lg:gap-[8px] xl:gap-[12px] justify-start items-center">
        {/* Time badge */}
        <div className="flex items-center gap-[8px]">
          <LiveTimer startTime={token.createdAt} className="text-[14px] font-medium text-emerald-400" />
        </div>
        
        {/* Social icons */}
        <div className="flex flex-row flex-shrink-0 gap-[8px] justify-start items-center">
          <DevIcon className="w-[16px] h-[16px] text-blue-400 cursor-pointer hover:text-blue-300 transition-colors duration-[125ms]" />
          <GlobeIcon className="w-[16px] h-[16px] text-gray-400 cursor-pointer hover:text-blue-400 transition-colors duration-[125ms]" />
          <SearchIcon className="w-[16px] h-[16px] text-gray-400 cursor-pointer hover:text-blue-400 transition-colors duration-[125ms]" />
        </div>
        
        {/* Stats - visible on sm and xl */}
        <div className="hidden sm:flex md:hidden lg:hidden xl:flex flex-row flex-1 h-[18px] gap-[8px] justify-start items-center">
          {/* Holders */}
          <div className="flex flex-row gap-[2px] h-[16px] justify-start items-center">
            <HoldersIcon className="w-[16px] h-[16px] text-gray-400" />
            <span className="text-[12px] font-medium text-white">{formatCompactNumber(token.holders)}</span>
          </div>
          
          {/* Pro Traders */}
          <div className="flex flex-row gap-[2px] h-[16px] justify-center items-center flex-shrink-0">
            <BuysIcon className="w-[16px] h-[16px] text-gray-400" />
            <span className="text-white text-[12px] font-medium">0</span>
          </div>
          
          {/* Trophy */}
          <div className="flex flex-row gap-[2px] h-[16px] justify-center items-center flex-shrink-0">
            <TrophyIcon className="w-[16px] h-[16px] text-gray-400" />
            <span className="text-white text-[12px] font-medium">0</span>
          </div>
          
          {/* Crown */}
          <div className="flex flex-row gap-[2px] h-[16px] justify-start items-center cursor-pointer">
            <Crown className="w-[16px] h-[16px] text-yellow-400" />
            <span className="text-white text-[12px] font-medium">0/1</span>
          </div>
        </div>
      </div>
      
      {/* Stats row for mobile/md/lg - separate row */}
      <div className="flex sm:hidden md:flex lg:flex xl:hidden flex-row flex-1 h-[18px] gap-[8px] justify-start items-center pt-[3px]">
        <div className="flex flex-row gap-[2px] h-[16px] justify-start items-center">
          <HoldersIcon className="w-[16px] h-[16px] text-gray-400" />
          <span className="text-[12px] font-medium text-white">{formatCompactNumber(token.holders)}</span>
        </div>
        <div className="flex flex-row gap-[2px] h-[16px] justify-center items-center flex-shrink-0">
          <BuysIcon className="w-[16px] h-[16px] text-gray-400" />
          <span className="text-white text-[12px] font-medium">0</span>
        </div>
        <div className="flex flex-row gap-[2px] h-[16px] justify-center items-center flex-shrink-0">
          <TrophyIcon className="w-[16px] h-[16px] text-gray-400" />
          <span className="text-white text-[12px] font-medium">0</span>
        </div>
        <div className="flex flex-row gap-[2px] h-[16px] justify-start items-center cursor-pointer">
          <Crown className="w-[16px] h-[16px] text-yellow-400" />
          <span className="text-white text-[12px] font-medium">0/1</span>
        </div>
      </div>
    </div>
  );
}
