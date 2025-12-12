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

  const fallbackSrc = `https://ui-avatars.com/api/?name=${encodeURIComponent(alt)}&background=random&size=80`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={cn(
            'relative w-[80px] h-[80px] flex-shrink-0 cursor-pointer rounded-lg',
            'ring-2',
            borderColorClasses[borderColor]
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-full h-full rounded-lg overflow-hidden bg-zinc-900">
            <Image
              src={imgError ? fallbackSrc : src}
              alt={alt}
              width={80}
              height={80}
              className="object-cover w-full h-full"
              onError={() => setImgError(true)}
            />
          </div>
          
          {showBadge && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-pink-400 to-pink-600" />
            </div>
          )}
          
          <div
            className={cn(
              'absolute inset-0 rounded-lg bg-black/60 flex items-center justify-center transition-opacity duration-200',
              isHovered ? 'opacity-100' : 'opacity-0'
            )}
          >
            <Camera className="w-4 h-4 text-white" />
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
