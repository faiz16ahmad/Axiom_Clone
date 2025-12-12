'use client';

import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type BadgeVariant = 'user' | 'chef' | 'bonding';

interface StatusBadgeProps {
  label: string;
  value: number;
  variant: BadgeVariant;
}

export function StatusBadge({ label, value, variant }: StatusBadgeProps) {
  const baseClasses = 'px-1.5 py-0.5 rounded-full text-[10px] font-medium';
  
  const variantClasses: Record<BadgeVariant, string> = {
    user: 'bg-zinc-800 text-zinc-300',
    chef: 'bg-zinc-800 text-zinc-300',
    bonding: 'bg-pulse-red/20 text-pulse-red',
  };

  const badge = (
    <span className={cn(baseClasses, variantClasses[variant])}>
      {label} {value.toFixed(0)}%
    </span>
  );

  if (variant === 'bonding') {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          {badge}
        </TooltipTrigger>
        <TooltipContent 
          side="top" 
          className="bg-pulse-red text-white border-pulse-red text-xs"
        >
          Bonding: {value.toFixed(2)}%
        </TooltipContent>
      </Tooltip>
    );
  }

  return badge;
}
