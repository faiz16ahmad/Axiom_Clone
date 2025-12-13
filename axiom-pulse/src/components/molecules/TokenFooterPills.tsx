'use client';

import { User, ChefHat, Target, Users, Coins } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface TokenFooterPillsProps {
  userPercentage: number;
  chefPercentage: number;
  bondingCurve: number;
  createdAt: Date;
}

interface PillProps {
  icon: React.ReactNode;
  value: string;
  iconColor: string;
  tooltip?: string;
  extra?: string;
}

function Pill({ icon, value, iconColor, tooltip, extra }: PillProps) {
  const pill = (
    <div className="flex items-center gap-[4px] h-[24px] px-[5px] rounded-full bg-zinc-900/80 border border-zinc-700/50 flex-shrink-0">
      <div className="w-[16px] h-[16px] flex items-center justify-center">
        <span className={iconColor}>{icon}</span>
      </div>
      <span className={`tabular-nums font-medium text-[12px] ${iconColor}`}>{value}</span>
      {extra && <span className="text-gray-500 text-[11px] leading-[16px] font-medium whitespace-nowrap">{extra}</span>}
    </div>
  );

  if (tooltip) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{pill}</TooltipTrigger>
        <TooltipContent side="top" className="text-xs bg-zinc-800 border-zinc-700">
          {tooltip}
        </TooltipContent>
      </Tooltip>
    );
  }

  return pill;
}

export function TokenFooterPills({
  userPercentage,
  chefPercentage,
  bondingCurve,
  createdAt,
}: TokenFooterPillsProps) {
  const timeDiff = Math.floor((Date.now() - createdAt.getTime()) / 60000);
  const timeStr = timeDiff < 60 ? `${timeDiff}m` : timeDiff < 1440 ? `${Math.floor(timeDiff / 60)}h` : `${Math.floor(timeDiff / 1440)}d`;

  const getUserColor = (val: number) => val >= 50 ? 'text-emerald-400' : val >= 20 ? 'text-yellow-400' : 'text-gray-400';
  const getChefColor = (val: number) => val >= 50 ? 'text-emerald-400' : 'text-emerald-400';
  const getBondingColor = (val: number) => val >= 80 ? 'text-emerald-400' : val >= 50 ? 'text-yellow-400' : 'text-emerald-400';

  return (
    <>
      {/* Footer pills - visible on sm and xl (compact layout) */}
      <div className="hidden sm:flex md:hidden lg:hidden xl:flex flex-row w-full h-[24px] gap-[4px] justify-start items-end">
        <Pill
          icon={<User className="w-[14px] h-[14px]" />}
          value={`${userPercentage}%`}
          iconColor={getUserColor(userPercentage)}
        />
        <Pill
          icon={<ChefHat className="w-[14px] h-[14px]" />}
          value={`${chefPercentage}%`}
          iconColor={getChefColor(chefPercentage)}
          extra={timeStr}
        />
        <Pill
          icon={<Target className="w-[14px] h-[14px]" />}
          value={`${bondingCurve}%`}
          iconColor={getBondingColor(bondingCurve)}
        />
        <Pill
          icon={<Users className="w-[14px] h-[14px]" />}
          value="0%"
          iconColor="text-emerald-400"
        />
        <Pill
          icon={<Coins className="w-[14px] h-[14px]" />}
          value="0%"
          iconColor="text-emerald-400"
        />
      </div>
      
      {/* Footer pills - visible on mobile, md, lg (expanded layout) */}
      <div className="flex sm:hidden md:flex lg:flex xl:hidden flex-row w-full h-[24px] gap-[4px] px-[12px] justify-start items-end">
        <Pill
          icon={<User className="w-[14px] h-[14px]" />}
          value={`${userPercentage}%`}
          iconColor={getUserColor(userPercentage)}
        />
        <Pill
          icon={<ChefHat className="w-[14px] h-[14px]" />}
          value={`${chefPercentage}%`}
          iconColor={getChefColor(chefPercentage)}
          extra={timeStr}
        />
        <Pill
          icon={<Target className="w-[14px] h-[14px]" />}
          value={`${bondingCurve}%`}
          iconColor={getBondingColor(bondingCurve)}
        />
        <Pill
          icon={<Users className="w-[14px] h-[14px]" />}
          value="0%"
          iconColor="text-emerald-400"
        />
        <Pill
          icon={<Coins className="w-[14px] h-[14px]" />}
          value="0%"
          iconColor="text-emerald-400"
        />
      </div>
    </>
  );
}
