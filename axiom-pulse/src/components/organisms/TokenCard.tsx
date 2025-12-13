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
        'group relative',
        'bg-[#101114] border-b border-zinc-800/50 rounded-none',
        'h-[142px] min-h-[142px] xl:h-[116px] xl:min-h-[116px]',
        'hover:bg-zinc-900/50 transition-colors duration-200',
        'flex flex-col',
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

      {/* Main Row */}
      <div className="flex gap-[12px] pl-[12px] pr-[12px] sm:pr-[16px] pt-[12px] pb-[2px]">
        {/* LEFT: Avatar + Contract */}
        <div className="flex flex-col items-center gap-[4px]">
          <div className="flex items-start gap-0">
            {/* Hover: Quick Actions */}
            <div className="flex flex-col gap-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-10">
              <button className="w-5 h-6 bg-zinc-900 border border-zinc-700 border-r-0 rounded-tl flex items-center justify-center hover:bg-zinc-800">
                <EyeOff className="w-3 h-3 text-gray-400" />
              </button>
              <button className="w-5 h-6 bg-zinc-900 border border-zinc-700 border-r-0 border-t-0 flex items-center justify-center hover:bg-zinc-800">
                <Ban className="w-3 h-3 text-gray-400" />
              </button>
              <button className="w-5 h-6 bg-zinc-900 border border-zinc-700 border-r-0 border-t-0 rounded-bl flex items-center justify-center hover:bg-zinc-800">
                <Flag className="w-3 h-3 text-gray-400" />
              </button>
            </div>
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
          <span className="text-[12px] text-gray-400 tracking-wide text-center max-w-[74px]">
            {token.id.slice(0, 4)}...{token.id.slice(-4)}
          </span>
        </div>

        {/* RIGHT: Content + Footer Pills */}
        <div className="flex-1 min-w-0 flex flex-col gap-[20px] pt-0 pb-[12px] overflow-hidden">
          {/* Top row: Header + Metrics */}
          <div className="flex justify-between">
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

          {/* Footer Pills - aligned with content, not avatar */}
          <div className="relative flex items-center">
            <TokenFooterPills
              userPercentage={token.userPercentage}
              chefPercentage={token.chefPercentage}
              bondingCurve={token.bondingCurve}
              createdAt={token.createdAt}
            />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-10">
              <button className="flex items-center gap-1 px-3 py-1 bg-blue-500 hover:bg-blue-400 rounded-full transition-colors shadow-lg">
                <Zap className="w-3.5 h-3.5 text-white fill-white" />
                <span className="text-xs font-bold text-white">0 SOL</span>
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
