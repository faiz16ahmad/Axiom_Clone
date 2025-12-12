'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProfileHoverCardProps {
  name: string;
  symbol: string;
  avatarUrl: string;
  bannerUrl?: string;
  twitterHandle?: string;
  twitterBio?: string;
  twitterFollowers?: number;
  twitterFollowing?: number;
  twitterJoinedDate?: string;
  children: React.ReactNode;
}

export function ProfileHoverCard({
  name,
  symbol,
  avatarUrl,
  bannerUrl,
  twitterHandle,
  twitterBio,
  twitterFollowers = 0,
  twitterFollowing = 0,
  twitterJoinedDate = 'Oct 2021',
  children,
}: ProfileHoverCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [bannerError, setBannerError] = useState(false);

  const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=100`;
  const defaultBanner = 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=150&fit=crop';

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      {/* Hover Card */}
      <div
        className={cn(
          'absolute left-0 top-full mt-2 z-50 w-72 rounded-xl overflow-hidden',
          'bg-[#15202b] border border-zinc-700/50 shadow-2xl',
          'transition-all duration-300 origin-top-left',
          isHovered 
            ? 'opacity-100 scale-100 pointer-events-auto' 
            : 'opacity-0 scale-95 pointer-events-none'
        )}
      >
        {/* Banner + Avatar Container */}
        <div className="relative">
          {/* Banner */}
          <div className="h-28 w-full relative overflow-hidden">
            <Image
              src={bannerError ? defaultBanner : (bannerUrl || defaultBanner)}
              alt="Profile banner"
              fill
              className="object-cover"
              onError={() => setBannerError(true)}
            />
          </div>
          
          {/* Avatar - positioned to overlap banner */}
          <div className="absolute left-4 bottom-0 translate-y-1/2 z-10">
            <div className="w-16 h-16 rounded-full border-4 border-[#15202b] overflow-hidden bg-zinc-800 shadow-lg">
              <Image
                src={imgError ? fallbackAvatar : avatarUrl}
                alt={name}
                width={64}
                height={64}
                className="object-cover w-full h-full"
                onError={() => setImgError(true)}
              />
            </div>
          </div>
          
          {/* X/Twitter Logo - top right of banner */}
          <div className="absolute right-4 bottom-0 translate-y-full mt-2">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
        </div>

        {/* Profile Content */}
        <div className="px-4 pb-4 pt-10">

          {/* Name & Handle */}
          <div className="mt-2">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white text-base">{name}</span>
              <span className="text-yellow-500">🪙</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <span>@{twitterHandle || symbol.toLowerCase()}</span>
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
          </div>

          {/* Bio */}
          <p className="mt-2 text-white text-sm leading-relaxed">
            {twitterBio || `${name} token on Solana 🚀`}
          </p>

          {/* Joined Date */}
          <div className="flex items-center gap-1.5 mt-3 text-gray-500 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Joined {twitterJoinedDate}</span>
          </div>

          {/* Following/Followers */}
          <div className="flex items-center gap-4 mt-3 text-sm">
            <div>
              <span className="font-bold text-white">{twitterFollowing.toLocaleString()}</span>
              <span className="text-gray-500 ml-1">Following</span>
            </div>
            <div>
              <span className="font-bold text-white">{twitterFollowers.toLocaleString()}</span>
              <span className="text-gray-500 ml-1">Followers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
