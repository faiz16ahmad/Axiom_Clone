'use client';

import { User, Globe, Search } from 'lucide-react';
import { IconButton } from '@/components/atoms/IconButton';
import { formatRelativeTime } from '@/lib/formatters';

interface SocialActionBarProps {
  createdAt: Date;
  onUserClick?: () => void;
  onGlobeClick?: () => void;
  onSearchClick?: () => void;
}

export function SocialActionBar({
  createdAt,
  onUserClick,
  onGlobeClick,
  onSearchClick,
}: SocialActionBarProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[10px] text-pulse-muted tabular-nums">
        {formatRelativeTime(createdAt)}
      </span>
      
      <div className="flex items-center gap-0.5">
        <IconButton icon={User} onClick={onUserClick} tooltip="View Profile" size="sm" />
        <IconButton icon={Globe} onClick={onGlobeClick} tooltip="Website" size="sm" />
        <IconButton icon={Search} onClick={onSearchClick} tooltip="Search" size="sm" />
      </div>
    </div>
  );
}
