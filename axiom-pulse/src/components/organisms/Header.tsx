'use client';

import { Search, Star, Bell, Wallet, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SolanaIcon } from '@/components/atoms/SolanaIcon';

const navLinks = [
  { name: 'Discover', href: '#', active: false },
  { name: 'Pulse', href: '#', active: true },
  { name: 'Trackers', href: '#', active: false },
  { name: 'Perpetuals', href: '#', active: false },
  { name: 'Yield', href: '#', active: false },
  { name: 'Vision', href: '#', active: false },
  { name: 'Portfolio', href: '#', active: false },
  { name: 'Rewards', href: '#', active: false },
];

function AxiomLogo() {
  return (
    <svg width="60" height="60" viewBox="0 -10 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="100" fill="#090909"/>
      <g clipPath="url(#clip0_axiom)">
        <path d="M130.227 83.8819H69.791L100.008 31L130.227 83.8819Z" fill="#FCFCFC"/>
        <path d="M164 143.003H36L60.4561 100.203L139.544 100.203L164 143.003Z" fill="#FCFCFC"/>
      </g>
      <defs>
        <clipPath id="clip0_axiom">
          <rect width="128" height="112" fill="white" transform="translate(36 31)"/>
        </clipPath>
      </defs>
    </svg>
  );
}

// BnbIcon available for future use
// function BnbIcon({ className }: { className?: string }) { ... }

function SolanaGradientIcon({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClass = size === 'sm' ? 'w-6 h-6' : size === 'lg' ? 'w-8 h-8' : 'w-7 h-7';
  return (
    <div className={cn(sizeClass, 'rounded-full bg-gradient-to-br from-[#9945FF] to-[#14F195]')} />
  );
}

function UserSettingsIcon() {
  return (
    <button className="w-14 h-14 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors flex flex-col items-center justify-center relative">
      {/* User icon */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-gray-300">
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21c0-4.5 3-7 6.5-7s6.5 2.5 6.5 7" />
      </svg>
      {/* Settings gear - bottom center */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-gray-400 -mt-1">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    </button>
  );
}

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-24 bg-[#06070B] border-b border-zinc-800/50 overflow-x-auto scrollbar-hide">
      <div className="h-full flex items-center justify-between px-8 min-w-max">
        {/* Left Section: Logo + Nav */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <a href="#" className="flex-shrink-0">
            <AxiomLogo />
          </a>
          {/* Spacer to prevent nav from hitting right section */}
          <div className="min-w-[16px]" />
          <div className="relative flex-shrink-0">
            {/* Fade gradient on left edge */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#06070B] via-[#06070B]/80 to-transparent pointer-events-none z-10" />
            <nav className="flex items-center gap-10 overflow-x-auto whitespace-nowrap scrollbar-hide px-16 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'text-2xl font-medium transition-colors whitespace-nowrap flex-shrink-0',
                    link.active ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                  )}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            {/* Fade gradient on right edge */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#06070B] via-[#06070B]/80 to-transparent pointer-events-none z-10" />
          </div>
        </div>

        {/* Spacer */}
        <div className="min-w-[24px] flex-shrink-0" />

        {/* Right Section - never shrink */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {/* Search Icon */}
          <button className="p-3 text-white hover:text-gray-300 transition-colors rounded-3xl bg-[#06070B] border border-zinc-700">
            <Search className="w-7 h-7" />
          </button>

          {/* SOL Chip */}
          <button className="flex items-center gap-3 px-5 py-2.5 bg-[#06070B] rounded-full text-base text-white hover:bg-zinc-900 transition-colors border-[3px] border-[#071F19]">
            <SolanaIcon size="lg" />
            <span className="text-gray-200 font-medium">SOL</span>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </button>

          {/* Deposit Button */}
          <button className="px-6 py-2.5 bg-[#526FFF] hover:bg-[#6580FF] text-[#06070B] text-lg font-bold rounded-full transition-colors">
            Deposit
          </button>

          {/* Star (Favorites) */}
          <button className="p-3 text-gray-400 hover:text-yellow-400 transition-colors rounded-full bg-[#22242D]">
            <Star className="w-6 h-6" />
          </button>

          {/* Bell (Notifications) */}
          <button className="p-3 text-gray-400 hover:text-white transition-colors rounded-full bg-[#22242D]">
            <Bell className="w-6 h-6" />
          </button>

          {/* Combined Wallet & SOL Balance Section */}
          <div className="flex items-center gap-3 px-4 py-2.5 bg-[#22242D] rounded-full">
            {/* Wallet Balance */}
            <Wallet className="w-6 h-6 text-gray-400" />
            <SolanaIcon size="lg" />
            <span className="text-base text-gray-300 font-medium">0</span>

            {/* Divider */}
            <div className="w-px h-6 bg-zinc-700" />

            {/* SOL Balance */}
            <SolanaGradientIcon size="sm" />
            <span className="text-base text-gray-300 font-medium">0</span>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>

          {/* User Settings Icon */}
          <UserSettingsIcon />
        </div>
      </div>
    </header>
  );
}
