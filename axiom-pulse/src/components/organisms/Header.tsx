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
    <svg width="40" height="40" viewBox="0 -10 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <button aria-label="User settings" className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors flex flex-col items-center justify-center relative">
      {/* User icon */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-gray-300">
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21c0-4.5 3-7 6.5-7s6.5 2.5 6.5 7" />
      </svg>
      {/* Settings gear - bottom center */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-gray-400 -mt-0.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    </button>
  );
}

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-14 lg:h-16 xl:h-18 bg-[#06070B] border-b border-zinc-800/50 max-w-[1920px] mx-auto">
      <div className="h-full flex items-center justify-between px-2 lg:px-4 xl:px-6">
        {/* Left Section: Logo + Nav */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <a href="#" className="flex-shrink-0" aria-label="Axiom Home">
            <AxiomLogo />
          </a>
          <div className="relative flex-1 min-w-0 overflow-hidden">
            {/* Fade gradient on left edge */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#06070B] via-[#06070B]/80 to-transparent pointer-events-none z-10" />
            <nav className="flex items-center gap-2 lg:gap-4 xl:gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide px-4 lg:px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'text-xs lg:text-sm xl:text-base font-medium whitespace-nowrap flex-shrink-0 px-3 py-1.5 rounded-lg transition-all duration-200',
                    link.active 
                      ? 'text-[#526FFF]' 
                      : 'text-gray-400 hover:text-[#526FFF] hover:bg-[#1a2744]'
                  )}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            {/* Fade gradient on right edge */}
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#06070B] via-[#06070B]/80 to-transparent pointer-events-none z-10" />
          </div>
        </div>

        {/* Right Section - never shrink */}
        <div className="flex items-center gap-1 lg:gap-2 xl:gap-3 flex-shrink-0">
          {/* Search Icon */}
          <button aria-label="Search" className="p-2 text-white hover:text-gray-300 transition-colors rounded-2xl bg-[#06070B] border border-zinc-700">
            <Search className="w-5 h-5" />
          </button>

          {/* SOL Chip */}
          <button className="flex items-center gap-2 px-3 py-1.5 bg-[#06070B] rounded-full text-sm text-white hover:bg-zinc-900 transition-colors border-2 border-[#071F19]">
            <SolanaIcon size="md" />
            <span className="text-gray-200 font-medium">SOL</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>

          {/* Deposit Button */}
          <button className="px-4 py-1.5 bg-[#526FFF] hover:bg-[#6580FF] text-[#06070B] text-sm font-bold rounded-full transition-colors">
            Deposit
          </button>

          {/* Star (Favorites) */}
          <button aria-label="Favorites" className="p-2 text-gray-400 hover:text-yellow-400 transition-colors rounded-full bg-[#22242D]">
            <Star className="w-4 h-4" />
          </button>

          {/* Bell (Notifications) */}
          <button aria-label="Notifications" className="p-2 text-gray-400 hover:text-white transition-colors rounded-full bg-[#22242D]">
            <Bell className="w-4 h-4" />
          </button>

          {/* Combined Wallet & SOL Balance Section */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#22242D] rounded-full">
            {/* Wallet Balance */}
            <Wallet className="w-4 h-4 text-gray-400" />
            <SolanaIcon size="sm" />
            <span className="text-sm text-gray-300 font-medium">0</span>

            {/* Divider */}
            <div className="w-px h-4 bg-zinc-700" />

            {/* SOL Balance */}
            <SolanaGradientIcon size="sm" />
            <span className="text-sm text-gray-300 font-medium">0</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>

          {/* User Settings Icon */}
          <UserSettingsIcon />
        </div>
      </div>
    </header>
  );
}
