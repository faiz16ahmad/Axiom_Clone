'use client';

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { Camera } from 'lucide-react';
import { cn } from '@/lib/utils';

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

// Enlarged Image Tooltip on Hover
function EnlargedImageTooltip({ 
  isOpen, 
  src, 
  alt, 
  buttonRef 
}: { 
  isOpen: boolean; 
  src: string; 
  alt: string;
  buttonRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (buttonRef.current && isOpen) {
      const rect = buttonRef.current.getBoundingClientRect();
      // Position to the right of the avatar
      setPosition({
        top: rect.top - 80,
        left: rect.right + 12,
      });
    }
  }, [buttonRef, isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="fixed z-[9999] bg-zinc-900 border border-zinc-700 rounded-lg p-2 shadow-2xl"
      style={{ top: position.top, left: position.left }}
    >
      <Image
        src={src}
        alt={alt}
        width={200}
        height={200}
        className="rounded-lg object-cover"
      />
    </div>,
    document.body
  );
}

export function TokenAvatar({ src, alt, showBadge = true, borderColor = 'pink' }: TokenAvatarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);

  const fallbackSrc = `https://ui-avatars.com/api/?name=${encodeURIComponent(alt)}&background=random&size=100`;
  const imageSrc = imgError ? fallbackSrc : src;

  return (
    <div
      ref={avatarRef}
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
          src={imageSrc}
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

      <EnlargedImageTooltip 
        isOpen={isHovered} 
        src={imageSrc} 
        alt={alt} 
        buttonRef={avatarRef} 
      />
    </div>
  );
}
