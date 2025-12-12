'use client';

import { memo, useMemo } from 'react';
import { EyeOff, Ban, Flag, Zap } from 'lucide-react';
import { Token } from '@/types/token';
import { TokenAvatar, AvatarBorderColor } from '@/components/atoms/TokenAvatar';
import { TokenHeader } from '@/components/molecules/TokenHeader';
import { TokenMetricsGrid } from '@/components/molecules/TokenMetricsGrid';
import { TokenFooterPills } from '@/components/molecules/TokenFooterPills';
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
        'bg-[#101114] border-b border-zinc-800/50 rounded-none pt-3.5 pr-7 pb-2.5 pl-0',
        'hover:bg-zinc-900/50 transition-colors duration-150',
        'flex flex-col gap-1.5'
      )}
    >
      {/* Hover: Bonding Badge */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-20">
        <div className="px-3 py-1 bg-red-600 rounded-full shadow-lg">
          <span className="text-xs font-semibold text-white whitespace-nowrap">
            Bonding: {token.bondingCurve.toFixed(2)}%
          </span>
        </div>
      </div>

      {/* Main Row */}
      <div className="flex gap-3">
        {/* LEFT: Avatar + Contract */}
        <div className="flex flex-col items-center flex-shrink-0">
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
            <TokenAvatar
              src={token.avatarUrl}
              alt={token.name}
              showBadge={true}
              borderColor={borderColor}
            />
          </div>
          <span className="text-xs text-gray-400 mt-1.5 tracking-wide ml-5">
            {token.id.slice(0, 5)}...{token.id.slice(-5)}
          </span>
        </div>

        {/* RIGHT: Content + Footer Pills */}
        <div className="flex-1 min-w-0 flex flex-col gap-1">
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
