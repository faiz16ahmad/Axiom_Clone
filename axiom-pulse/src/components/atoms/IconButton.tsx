'use client';

import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface IconButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  tooltip?: string;
  size?: 'sm' | 'md';
  className?: string;
}

export function IconButton({ 
  icon: Icon, 
  onClick, 
  tooltip, 
  size = 'sm',
  className 
}: IconButtonProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
  };

  const button = (
    <button
      onClick={onClick}
      className={cn(
        'p-1 rounded hover:bg-zinc-800 transition-colors text-pulse-muted hover:text-zinc-300',
        className
      )}
    >
      <Icon className={sizeClasses[size]} />
    </button>
  );

  if (tooltip) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          {button}
        </TooltipTrigger>
        <TooltipContent side="top" className="text-xs">
          {tooltip}
        </TooltipContent>
      </Tooltip>
    );
  }

  return button;
}
