'use client';

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Search, Star, Bell, Wallet, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
// Using images from /images folder

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
    <img src="/images/axiom_logo.svg" alt="Axiom" width="36" height="36" className="w-[36px] h-[36px]" />
  );
}

// Chain options
const chains = [
  { name: 'Solana', symbol: 'SOL', icon: '/images/sol-fill.svg', color: '#14F195' },
  { name: 'BNB', symbol: 'BNB', icon: '/images/bnb-fill.svg', color: '#F3BA2F' },
];

// Chain Dropdown Component
function ChainDropdown({ isOpen, onClose, buttonRef, onSelect, selectedChain }: { 
  isOpen: boolean; 
  onClose: () => void; 
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  onSelect: (chain: typeof chains[0]) => void;
  selectedChain: typeof chains[0];
}) {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (buttonRef.current && isOpen) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 8,
        left: rect.left,
      });
    }
  }, [buttonRef, isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[9998]" onClick={onClose} />
      {/* Dropdown */}
      <div
        className="fixed z-[9999] bg-[#1a1a1a] border border-zinc-800 rounded-xl p-2 min-w-[180px] shadow-2xl"
        style={{ top: position.top, left: position.left }}
      >
        {chains.map((chain) => (
          <button
            key={chain.symbol}
            onClick={() => {
              onSelect(chain);
              onClose();
            }}
            className={cn(
              'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
              selectedChain.symbol === chain.symbol 
                ? 'bg-zinc-800' 
                : 'hover:bg-zinc-800/50'
            )}
          >
            <img src={chain.icon} alt={chain.name} width="28" height="28" className="w-7 h-7" />
            <span className="text-white text-base font-medium">{chain.name}</span>
          </button>
        ))}
      </div>
    </>,
    document.body
  );
}

export function Header() {
  const [selectedChain, setSelectedChain] = useState(chains[0]);
  const [showChainDropdown, setShowChainDropdown] = useState(false);
  const chainButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-[52px] sm:h-[64px] min-h-[48px] sm:min-h-[64px] bg-[#06070B] border-b border-[#262626] max-w-[1920px] mx-auto">
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

          {/* Chain Selector Chip - hidden on mobile */}
          <div className="hidden sm:block relative">
            <button 
              ref={chainButtonRef}
              onClick={() => setShowChainDropdown(!showChainDropdown)}
              className="hover:brightness-125 border-[2px] flex flex-shrink-0 flex-row h-[32px] pl-[8px] pr-[6px] gap-[6px] justify-center items-center rounded-full transition-all duration-150 active:scale-[0.96]" 
              style={{ borderColor: `${selectedChain.color}20` }}
            >
              <img src={selectedChain.icon} alt={selectedChain.symbol} width="20" height="20" className="w-[20px] h-[20px]" />
              <span className="text-[14px] text-white font-medium">{selectedChain.symbol}</span>
              <ChevronDown className="w-[18px] h-[18px] text-white" />
            </button>
            <ChainDropdown 
              isOpen={showChainDropdown} 
              onClose={() => setShowChainDropdown(false)} 
              buttonRef={chainButtonRef}
              onSelect={setSelectedChain}
              selectedChain={selectedChain}
            />
          </div>

          {/* Deposit Button - hidden on mobile */}
          <button className="hidden sm:flex bg-[#526FFF] h-[32px] px-[12px] flex-row justify-start items-center rounded-full hover:bg-[#6580FF]">
            <span className="text-nowrap text-[#090909] text-[14px] font-bold">Deposit</span>
          </button>

          {/* Star (Favorites) - hidden on mobile */}
          <button aria-label="Favorites" className="hidden sm:flex bg-zinc-800 hover:bg-zinc-700/80 flex-row w-[36px] h-[36px] gap-[8px] justify-center items-center rounded-full">
            <Star className="w-[20px] h-[20px] text-white" />
          </button>

          {/* Bell (Notifications) */}
          <button aria-label="Notifications" className="relative bg-zinc-800 hover:bg-zinc-700/80 flex flex-row w-[36px] h-[36px] gap-[8px] justify-center items-center rounded-full">
            <Bell className="w-[20px] h-[20px] text-white" />
          </button>

          {/* Wallet Section - hidden on mobile */}
          <div className="hidden xl:flex">
            <button className="w-fit min-w-max bg-zinc-800 flex flex-row h-[32px] px-[12px] py-[8px] gap-[8px] justify-center items-center rounded-full hover:bg-zinc-700/80 transition-colors">
              <Wallet className="w-[18px] h-[18px] text-white" />
              <div className="flex flex-shrink-0 whitespace-nowrap flex-row gap-[4px] justify-start items-center">
                <img src="/images/sol-fill.svg" alt="SOL" width="18" height="18" className="w-[18px] h-[18px]" />
                <span className="text-[14px] font-semibold text-white">0</span>
              </div>
              <div className="flex-shrink-0 w-[1px] h-full bg-zinc-600" />
              <div className="flex flex-shrink-0 whitespace-nowrap flex-row gap-[4px] justify-start items-center">
                <img src="/images/usdc-perps.svg" alt="USDC" width="18" height="18" className="w-[18px] h-[18px]" />
                <span className="text-[14px] font-semibold text-white">0</span>
              </div>
              <ChevronDown className="w-[18px] h-[18px] text-white" />
            </button>
          </div>

          {/* User Settings Icon */}
          <button className="bg-zinc-800 flex flex-row w-[36px] h-[36px] gap-[8px] justify-center items-center rounded-full hover:bg-zinc-700/80">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[20px] h-[20px] text-white">
              <circle cx="12" cy="7" r="4" />
              <path d="M5.5 21c0-4.5 3-7 6.5-7s6.5 2.5 6.5 7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
