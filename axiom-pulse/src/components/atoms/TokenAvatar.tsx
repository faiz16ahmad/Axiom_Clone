'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';

export type AvatarBorderColor = 'green' | 'red' | 'pink' | 'yellow' | 'blue' | 'purple';

interface TokenAvatarProps {
  src: string;
  alt: string;
  onClick?: () => void;
  showBadge?: boolean;
  borderColor?: AvatarBorderColor;
}

const borderColorClasses: Record<AvatarBorderColor, string> = {
  green: 'ring-emerald-500',
  red: 'ring-red-500',
  pink: 'ring-pink-500',
  yellow: 'ring-yellow-500',
  blue: 'ring-blue-500',
  purple: 'ring-purple-500',
};

export function TokenAvatar({ src, alt, showBadge = true, borderColor = 'pink' }: TokenAvatarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const fallbackSrc = `https://ui-avatars.com/api/?name=${encodeURIComponent(alt)}&background=random&size=100`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={cn(
            'relative w-[74px] h-[74px] flex-shrink-0 cursor-pointer rounded-[4px]',
            'ring-2',
            borderColorClasses[borderColor]
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-[68px] h-[68px] m-[2px] rounded-[3px] overflow-hidden bg-zinc-900">
            <Image
              src={imgError ? fallbackSrc : src}
              alt={alt}
              width={68}
              height={68}
              className="object-cover w-full h-full"
              onError={() => setImgError(true)}
              loading="lazy"
              placeholder="empty"
            />
          </div>
          
          {showBadge && (
            <div className="absolute -bottom-[4px] -right-[4px] w-[16px] h-[16px] rounded-full bg-zinc-800 border-[1px] border-zinc-900 flex items-center justify-center z-30">
              <div className="w-[10px] h-[10px] rounded-full bg-gradient-to-br from-pink-400 to-pink-600" />
            </div>
          )}
          
          <div
            className={cn(
              'absolute inset-0 rounded-[4px] bg-black/50 flex items-center justify-center transition-opacity duration-200',
              isHovered ? 'opacity-100' : 'opacity-0'
            )}
          >
            <Camera className="w-[24px] h-[24px] text-white" />
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-zinc-900 border-zinc-800">
        <div className="flex items-center justify-center p-4">
          <Image
            src={imgError ? fallbackSrc : src}
            alt={alt}
            width={256}
            height={256}
            className="rounded-lg object-cover"
            onError={() => setImgError(true)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
