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

// Profile Dropdown Component
function ProfileDropdown({ isOpen, onClose, buttonRef }: { 
  isOpen: boolean; 
  onClose: () => void; 
  buttonRef: React.RefObject<HTMLButtonElement | null>;
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
        left: rect.right - 240,
      });
    }
  }, [buttonRef, isOpen]);

  if (!mounted || !isOpen) return null;

  const menuItems = [
    { 
      label: 'Account and Security', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21c0-4.5 3-7 6.5-7s6.5 2.5 6.5 7" />
        </svg>
      )
    },
    { 
      label: 'Settings', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      )
    },
    { 
      label: 'Auto Translate', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 8l6 6M4 14h8M2 5h12M7 2v3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 14l4 8 4-8M15 18h6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      label: 'Feature Updates', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
  ];

  return createPortal(
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[9998]" onClick={onClose} />
      {/* Dropdown */}
      <div
        className="fixed z-[9999] bg-[#1a1a1a] border border-zinc-800 rounded-xl w-[240px] py-2 shadow-2xl"
        style={{ top: position.top, left: position.left }}
      >
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={onClose}
            className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-zinc-800/50 transition-colors"
          >
            {item.icon}
            <span className="text-base font-medium">{item.label}</span>
          </button>
        ))}
        
        {/* Divider */}
        <div className="my-2 border-t border-zinc-800" />
        
        {/* Log Out */}
        <button
          onClick={onClose}
          className="w-full flex items-center gap-3 px-4 py-3 text-pink-500 hover:bg-zinc-800/50 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="16,17 21,12 16,7" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="21" y1="12" x2="9" y2="12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-base font-medium">Log Out</span>
        </button>
      </div>
    </>,
    document.body
  );
}

// Deposit Modal Component
function DepositModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'Convert' | 'Deposit' | 'Buy'>('Deposit');
  const depositAddress = 'Dyj8dN4V8Rpm8iAuhdKbzrNam9ftoGdvW4iKHC6fWsrm';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  const tabs: ('Convert' | 'Deposit' | 'Buy')[] = ['Convert', 'Deposit', 'Buy'];

  return createPortal(
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[9998] bg-black/60" onClick={onClose} />
      {/* Modal */}
      <div className="fixed z-[9999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0d0d0d] border border-zinc-800 rounded-xl w-[420px] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          <h3 className="text-white text-lg font-semibold">Exchange</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="p-4">
          <div className="flex bg-zinc-900 rounded-full p-1">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors',
                  activeTab === tab 
                    ? 'bg-[#526FFF] text-white' 
                    : 'text-gray-400 hover:text-white'
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-4 pb-4">
          {/* Chain & Balance */}
          <div className="flex gap-3 mb-4">
            <div className="flex-1 flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3">
              <img src="/images/sol-fill.svg" alt="SOL" width="20" height="20" className="w-5 h-5" />
              <span className="text-white font-medium">Solana</span>
            </div>
            <div className="flex-1 flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3">
              <span className="text-gray-400 text-sm">Balance:</span>
              <span className="text-white font-medium">0 SOL</span>
            </div>
          </div>

          {/* Warning */}
          <p className="text-gray-400 text-sm mb-4">
            Only deposit Solana through the Solana network for this address.
          </p>

          {/* QR Code & Address */}
          <div className="flex gap-4 mb-4">
            {/* QR Code Placeholder */}
            <div className="w-[140px] h-[140px] bg-white rounded-lg flex items-center justify-center p-2">
              <div className="w-full h-full relative">
                {/* Simple QR pattern */}
                <div className="absolute inset-0 grid grid-cols-7 gap-[2px]">
                  {Array.from({ length: 49 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        'aspect-square rounded-sm',
                        Math.random() > 0.5 ? 'bg-black' : 'bg-white'
                      )}
                    />
                  ))}
                </div>
                {/* Center logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <img src="/images/sol-fill.svg" alt="SOL" width="20" height="20" className="w-5 h-5" />
                  </div>
                </div>
                {/* Corner markers */}
                <div className="absolute top-0 left-0 w-6 h-6 border-2 border-black rounded-sm" />
                <div className="absolute top-0 right-0 w-6 h-6 border-2 border-black rounded-sm" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-2 border-black rounded-sm" />
              </div>
            </div>

            {/* Address */}
            <div className="flex-1">
              <p className="text-[#526FFF] text-sm mb-2">Deposit Address</p>
              <p className="text-white text-sm break-all leading-relaxed">{depositAddress}</p>
              <button className="mt-3 text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="8" y="8" width="12" height="12" rx="2" />
                  <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                </svg>
              </button>
            </div>
          </div>

          {/* Onramper link */}
          <p className="text-gray-400 text-sm mb-4">
            Don&apos;t have any Solana? <a href="#" className="text-[#526FFF] hover:underline">Buy through Onramper.</a>
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-800">
          <button 
            onClick={() => navigator.clipboard.writeText(depositAddress)}
            className="w-full bg-[#526FFF] text-white font-semibold py-3 rounded-full hover:bg-[#6580FF] transition-colors"
          >
            Copy Address
          </button>
        </div>
      </div>
    </>,
    document.body
  );
}

// Wallet Dropdown Component
function WalletDropdown({ isOpen, onClose, buttonRef }: { 
  isOpen: boolean; 
  onClose: () => void; 
  buttonRef: React.RefObject<HTMLButtonElement | null>;
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
        left: rect.right - 320,
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
        className="fixed z-[9999] bg-[#1a1a1a] border border-zinc-800 rounded-xl w-[320px] shadow-2xl"
        style={{ top: position.top, left: position.left }}
      >
        {/* Header */}
        <div className="p-4 border-b border-zinc-800">
          <div className="flex items-center justify-between mb-1">
            <span className="text-gray-400 text-sm">Total Value</span>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="8" y="2" width="8" height="4" rx="1" />
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                </svg>
                <span className="text-sm">Solana</span>
              </button>
              <button className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="8" y="2" width="8" height="4" rx="1" />
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                </svg>
                <span className="text-sm">Perps</span>
              </button>
            </div>
          </div>
          <div className="text-white text-3xl font-semibold">$0</div>
        </div>

        {/* Balances */}
        <div className="p-4 border-b border-zinc-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/images/sol-fill.svg" alt="SOL" width="24" height="24" className="w-6 h-6" />
              <span className="text-white text-lg font-medium">0</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <img src="/images/usdc-perps.svg" alt="USDC" width="24" height="24" className="w-6 h-6" />
              <span className="text-white text-lg font-medium">0</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="p-4 flex gap-3">
          <button className="flex-1 bg-[#526FFF] text-black font-semibold py-3 rounded-full hover:bg-[#6580FF] transition-colors">
            Deposit
          </button>
          <button className="flex-1 bg-zinc-700 text-white font-semibold py-3 rounded-full hover:bg-zinc-600 transition-colors">
            Withdraw
          </button>
        </div>
      </div>
    </>,
    document.body
  );
}

export function Header() {
  const [selectedChain, setSelectedChain] = useState(chains[0]);
  const [showChainDropdown, setShowChainDropdown] = useState(false);
  const [showWalletDropdown, setShowWalletDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const chainButtonRef = useRef<HTMLButtonElement>(null);
  const walletButtonRef = useRef<HTMLButtonElement>(null);
  const profileButtonRef = useRef<HTMLButtonElement>(null);

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
          <button 
            onClick={() => setShowDepositModal(true)}
            className="hidden sm:flex bg-[#526FFF] h-[32px] px-[12px] flex-row justify-start items-center rounded-full hover:bg-[#6580FF]"
          >
            <span className="text-nowrap text-[#090909] text-[14px] font-bold">Deposit</span>
          </button>
          <DepositModal isOpen={showDepositModal} onClose={() => setShowDepositModal(false)} />

          {/* Star (Favorites) - hidden on mobile */}
          <button aria-label="Favorites" className="hidden sm:flex bg-zinc-800 hover:bg-zinc-700/80 flex-row w-[36px] h-[36px] gap-[8px] justify-center items-center rounded-full">
            <Star className="w-[20px] h-[20px] text-white" />
          </button>

          {/* Bell (Notifications) */}
          <button aria-label="Notifications" className="relative bg-zinc-800 hover:bg-zinc-700/80 flex flex-row w-[36px] h-[36px] gap-[8px] justify-center items-center rounded-full">
            <Bell className="w-[20px] h-[20px] text-white" />
          </button>

          {/* Wallet Section - hidden on mobile */}
          <div className="hidden xl:flex relative">
            <button 
              ref={walletButtonRef}
              onClick={() => setShowWalletDropdown(!showWalletDropdown)}
              className="w-fit min-w-max bg-zinc-800 flex flex-row h-[32px] px-[12px] py-[8px] gap-[8px] justify-center items-center rounded-full hover:bg-zinc-700/80 transition-colors"
            >
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
            <WalletDropdown 
              isOpen={showWalletDropdown} 
              onClose={() => setShowWalletDropdown(false)} 
              buttonRef={walletButtonRef}
            />
          </div>

          {/* User Settings Icon */}
          <div className="relative">
            <button 
              ref={profileButtonRef}
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              className="bg-zinc-800 flex flex-row w-[36px] h-[36px] gap-[8px] justify-center items-center rounded-full hover:bg-zinc-700/80"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[20px] h-[20px] text-white">
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21c0-4.5 3-7 6.5-7s6.5 2.5 6.5 7" />
              </svg>
            </button>
            <ProfileDropdown 
              isOpen={showProfileDropdown} 
              onClose={() => setShowProfileDropdown(false)} 
              buttonRef={profileButtonRef}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
