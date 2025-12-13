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
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[36px] h-[36px] text-white">
      <g clipPath="url(#clip0_88_28967)">
        <path d="M24.1384 17.3876H11.8623L18.0001 7.00012L24.1384 17.3876Z" fill="currentColor" />
        <path d="M31 29.0003L5 29.0003L9.96764 20.5933L26.0324 20.5933L31 29.0003Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_88_28967">
          <rect width="26" height="22" fill="white" transform="translate(5 7)" />
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

// UserSettingsIcon removed - using inline SVG in component

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-[52px] sm:h-[64px] min-h-[48px] sm:min-h-[64px] bg-[#06070B] border-b border-zinc-800/50 max-w-[1920px] mx-auto">
      <div className="h-full flex items-center justify-between sm:justify-start px-[16px] lg:px-[24px] gap-[16px] lg:gap-[24px]">
        {/* Left Section: Logo */}
        <div className="flex flex-row flex-shrink-0 gap-0 justify-start items-center w-[36px] sm:w-[24px] 2xl:w-[130px]">
          <a href="#" className="flex-shrink-0" aria-label="Axiom Home">
            <AxiomLogo />
          </a>
        </div>
        
        {/* Nav Links - hidden on mobile */}
        <div className="relative hidden sm:flex flex-1 min-w-0">
          {/* Fade gradient on right edge */}
          <div className="absolute right-0 top-0 w-[32px] h-full z-40 bg-gradient-to-l from-[#06070B] to-transparent pointer-events-none" />
          <div className="flex overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex flex-row gap-[4px] justify-start items-center">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href}>
                  <button
                    className={cn(
                      'flex flex-row h-[32px] text-nowrap px-[8px] xl:px-[14px] justify-start items-center rounded-[4px]',
                      'hover:bg-[#526FFF]/20 hover:text-[#526FFF] transition-colors duration-[135ms]',
                      link.active ? 'text-[#526FFF]' : 'text-white'
                    )}
                  >
                    <span className="text-[14px] font-medium">{link.name}</span>
                  </button>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-[8px] sm:gap-[16px]">
          {/* Search Button - hidden on mobile */}
          <button 
            aria-label="Search" 
            className="hidden sm:flex flex-shrink-0 whitespace-nowrap border-zinc-700 font-normal border-[1px] flex-row h-[32px] px-[8px] 2xl:pl-[12px] 2xl:pr-[6px] gap-[8px] justify-center items-center rounded-full hover:bg-zinc-800/35 transition-colors duration-[125ms] cursor-pointer"
          >
            <Search className="w-[18px] h-[18px] text-white" />
            <span className="text-[12px] text-gray-400 font-medium hidden 2xl:block">Search by token or CA...</span>
            <div className="hidden 2xl:flex border-zinc-700 border-[1px] text-[12px] h-[20px] px-[8px] justify-center items-center rounded-full">
              <span className="text-white">/</span>
            </div>
          </button>

          {/* SOL Chip - hidden on mobile */}
          <div className="hidden sm:block">
            <button className="hover:brightness-125 border-[2px] flex flex-shrink-0 flex-row h-[32px] pl-[8px] pr-[6px] gap-[6px] justify-center items-center rounded-full transition-all duration-150 active:scale-[0.96]" style={{ borderColor: 'rgba(20, 241, 149, 0.1)' }}>
              <SolanaIcon size="sm" />
              <span className="text-[14px] text-white font-medium">SOL</span>
              <ChevronDown className="w-[18px] h-[18px] text-white" />
            </button>
          </div>

          {/* Deposit Button - hidden on mobile */}
          <button className="hidden sm:flex bg-[#526FFF] h-[32px] px-[12px] flex-row justify-start items-center rounded-full hover:bg-[#6580FF]">
            <span className="text-nowrap text-[#090909] text-[14px] font-bold">Deposit</span>
          </button>

          {/* Star (Favorites) - hidden on mobile */}
          <button aria-label="Favorites" className="hidden sm:flex bg-zinc-800 hover:bg-zinc-700/80 flex-row w-[32px] h-[32px] px-[12px] gap-[8px] justify-center items-center rounded-full">
            <Star className="w-[18px] h-[18px] text-white" />
          </button>

          {/* Bell (Notifications) */}
          <button aria-label="Notifications" className="relative bg-zinc-800 hover:bg-zinc-700/80 flex flex-row w-[32px] h-[32px] px-[12px] gap-[8px] justify-center items-center rounded-full">
            <Bell className="w-[18px] h-[18px] text-white" />
          </button>

          {/* Wallet Section - hidden on mobile */}
          <div className="hidden xl:flex">
            <button className="w-fit min-w-max bg-zinc-800 flex flex-row h-[32px] px-[12px] py-[8px] gap-[8px] justify-center items-center rounded-full hover:bg-zinc-700/80 transition-colors">
              <Wallet className="w-[18px] h-[18px] text-white" />
              <div className="flex flex-shrink-0 whitespace-nowrap flex-row gap-[4px] justify-start items-center">
                <SolanaIcon size="sm" />
                <span className="text-[14px] font-semibold text-white">0</span>
              </div>
              <div className="flex-shrink-0 w-[1px] h-full bg-zinc-600" />
              <div className="flex flex-shrink-0 whitespace-nowrap flex-row gap-[4px] justify-start items-center">
                <SolanaGradientIcon size="sm" />
                <span className="text-[14px] font-semibold text-white">0</span>
              </div>
              <ChevronDown className="w-[18px] h-[18px] text-white" />
            </button>
          </div>

          {/* User Settings Icon */}
          <button className="bg-zinc-800 flex flex-row w-[32px] h-[32px] px-[12px] gap-[8px] justify-center items-center rounded-full hover:bg-zinc-700/80">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[18px] h-[18px] text-white">
              <circle cx="12" cy="7" r="4" />
              <path d="M5.5 21c0-4.5 3-7 6.5-7s6.5 2.5 6.5 7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
