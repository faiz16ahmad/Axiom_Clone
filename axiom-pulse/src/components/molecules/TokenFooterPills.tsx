'use client';

import { User, ChefHat, Clock, Target, Users, Coins } from 'lucide-react';
import { cn } from '@/lib/utils';
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
}

function Pill({ icon, value, iconColor, tooltip }: PillProps) {
  const pill = (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs">
      <span className={iconColor}>{icon}</span>
      <span className="text-white tabular-nums font-medium">{value}</span>
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
    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
      <Pill
        icon={<User className="w-4 h-4" />}
        value={`${userPercentage}%`}
        iconColor={getUserColor(userPercentage)}
      />
      <Pill
        icon={<ChefHat className="w-4 h-4" />}
        value={`${chefPercentage}%`}
        iconColor={getChefColor(chefPercentage)}
      />
      <Pill
        icon={<Clock className="w-4 h-4" />}
        value={timeStr}
        iconColor="text-gray-400"
      />
      <Pill
        icon={<Target className="w-4 h-4" />}
        value={`${bondingCurve}%`}
        iconColor={getBondingColor(bondingCurve)}
      />
      <Pill
        icon={<Users className="w-4 h-4" />}
        value="0%"
        iconColor="text-red-400"
      />
      <Pill
        icon={<Coins className="w-4 h-4" />}
        value="0%"
        iconColor="text-gray-400"
      />
    </div>
  );
}
