'use client';

import { memo, useMemo } from 'react';
import { EyeOff, Ban, Flag, Zap } from 'lucide-react';
import { Token } from '@/types/token';
import { TokenAvatar, AvatarBorderColor } from '@/components/atoms/TokenAvatar';
import { TokenHeader } from '@/components/molecules/TokenHeader';
import { TokenMetricsGrid } from '@/components/molecules/TokenMetricsGrid';
import { TokenFooterPills } from '@/components/molecules/TokenFooterPills';
import { ProfileHoverCard } from '@/components/molecules/ProfileHoverCard';
import { cn } from '@/lib/utils';

interface TokenCardProps {
  token: Token;
}

function getBorderColor(id: string): AvatarBorderColor {
  const colors: AvatarBorderColor[] = ['green', 'red', 'pink', 'yellow', 'blue', 'purple'];
  const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
}

function TokenCardComponent({ token }: TokenCardProps) {
  const borderColor = useMemo(() => getBorderColor(token.id), [token.id]);

  return (
    <div
      className={cn(
        'group relative cursor-pointer',
        'bg-[#101114] border-b border-zinc-700/50 overflow-hidden',
        'h-[142px] min-h-[142px] sm:h-[116px] sm:min-h-[116px] md:h-[142px] md:min-h-[142px] lg:h-[142px] lg:min-h-[142px] xl:h-[116px] xl:min-h-[116px]',
        'hover:bg-zinc-800/50 transition-colors duration-200',
        'flex flex-col w-full justify-start items-center',
        token.flashState === 'green' && 'animate-bg-pulse-green',
        token.flashState === 'red' && 'animate-bg-pulse-red'
      )}
    >
      {/* Hover: Bonding Badge - color matches profile border */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-20">
        <div className={cn(
          'px-4 py-1.5 rounded-lg shadow-lg border',
          borderColor === 'green' && 'bg-zinc-900/95 border-emerald-500/30',
          borderColor === 'red' && 'bg-zinc-900/95 border-red-500/30',
          borderColor === 'pink' && 'bg-zinc-900/95 border-pink-500/30',
          borderColor === 'yellow' && 'bg-zinc-900/95 border-yellow-500/30',
          borderColor === 'blue' && 'bg-zinc-900/95 border-blue-500/30',
          borderColor === 'purple' && 'bg-zinc-900/95 border-purple-500/30'
        )}>
          <span className={cn(
            'text-sm font-semibold whitespace-nowrap',
            borderColor === 'green' && 'text-emerald-400',
            borderColor === 'red' && 'text-red-400',
            borderColor === 'pink' && 'text-pink-400',
            borderColor === 'yellow' && 'text-yellow-400',
            borderColor === 'blue' && 'text-blue-400',
            borderColor === 'purple' && 'text-purple-400'
          )}>
            Bonding: {token.bondingCurve.toFixed(2)}%
          </span>
        </div>
      </div>

      {/* Main Row - matching reference: pt-12, pr-16, pb-2, pl-12, gap-12 */}
      <div className="w-full h-full flex flex-row gap-[12px] pl-[12px] pr-[12px] sm:pr-[16px] pt-[12px] pb-[2px] justify-start items-center">
        {/* Hover: Quick Actions - positioned at top-left like reference */}
        <div className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-0 flex flex-col" style={{ top: '6px', left: '6px' }}>
          <button className="w-[24px] h-[24px] bg-zinc-800 border border-zinc-700/50 rounded-[4px] flex items-center justify-center hover:text-blue-400 text-gray-400 mb-[2px]">
            <EyeOff className="w-[14px] h-[14px]" />
          </button>
          <button className="w-[24px] h-[24px] bg-zinc-800 border border-zinc-700/50 rounded-[4px] flex items-center justify-center hover:text-blue-400 text-gray-400 mb-[2px]">
            <Ban className="w-[12px] h-[12px]" />
          </button>
          <button className="w-[24px] h-[24px] bg-zinc-800 border border-zinc-700/50 rounded-[4px] flex items-center justify-center hover:text-blue-400 text-gray-400">
            <Flag className="w-[12px] h-[12px]" />
          </button>
        </div>

        {/* LEFT: Avatar + Contract */}
        <div className="flex flex-col items-center gap-[4px]">
          <div className="relative w-[74px] h-[74px] justify-center items-center">
            <ProfileHoverCard
              name={token.name}
              symbol={token.symbol}
              avatarUrl={token.avatarUrl}
              bannerUrl={token.bannerUrl}
              twitterHandle={token.twitterHandle}
              twitterBio={token.twitterBio}
              twitterFollowers={token.twitterFollowers}
              twitterFollowing={token.twitterFollowing}
              twitterJoinedDate={token.twitterJoinedDate}
            >
              <TokenAvatar
                src={token.avatarUrl}
                alt={token.name}
                showBadge={true}
                borderColor={borderColor}
              />
            </ProfileHoverCard>
          </div>
          <span className="text-[12px] text-gray-400 font-medium text-center max-w-[74px]">
            <button className="text-gray-400 hover:text-blue-400 transition-colors duration-[125ms] flex items-center gap-[4px]">
              <span>{token.id.slice(0, 4)}...{token.id.slice(-4)}</span>
            </button>
          </span>
        </div>

        {/* RIGHT: Content + Footer Pills - minimal gap */}
        <div className="flex-1 min-w-0 flex flex-col h-full gap-[2px] justify-start overflow-hidden">
          {/* Top section: Header + Metrics */}
          <div className="flex flex-col w-full gap-[2px] justify-start items-start min-w-0">
            <div className="flex justify-between w-full">
              <TokenHeader token={token} />
              <div className="flex-shrink-0 ml-1">
                <TokenMetricsGrid
                  price={token.price}
                  priceChange={token.priceChange}
                  marketCap={token.marketCap}
                  marketCapChange={token.marketCapChange}
                  transactions={token.transactions}
                  volume={token.volume}
                  holders={token.holders}
                  flashState={token.flashState}
                />
              </div>
            </div>
          </div>

          {/* Footer Pills - positioned at bottom */}
          <div className="relative flex items-center w-full h-[24px]">
            <TokenFooterPills
              userPercentage={token.userPercentage}
              chefPercentage={token.chefPercentage}
              bondingCurve={token.bondingCurve}
              createdAt={token.createdAt}
            />
            {/* Quick Buy Button - absolute positioned */}
            <div className="absolute right-0 bottom-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-0">
              <button className="flex items-center gap-[4px] h-[24px] px-[6px] bg-[#526FFF] hover:bg-[#6580FF] rounded-full transition-colors">
                <Zap className="w-[16px] h-[16px] text-[#090909] fill-[#090909]" />
                <span className="text-[12px] font-bold text-[#090909]">0 SOL</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const TokenCard = memo(TokenCardComponent, (prevProps, nextProps) => {
  return (
    prevProps.token.id === nextProps.token.id &&
    prevProps.token.price === nextProps.token.price &&
    prevProps.token.marketCap === nextProps.token.marketCap &&
    prevProps.token.flashState === nextProps.token.flashState
  );
});

TokenCard.displayName = 'TokenCard';
