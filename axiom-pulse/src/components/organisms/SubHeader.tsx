'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  ChevronDown,
  HelpCircle,
  Bookmark,
  Keyboard,
  Volume2,
  Crosshair,
  Settings,
  Wallet,
  Zap,
  ListChecks,
  Search,
  Hash,
  Sun,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Display Settings Modal
function DisplaySettingsModal({ isOpen, onClose, buttonRef }: { 
    isOpen: boolean; 
    onClose: () => void;
    buttonRef: React.RefObject<HTMLButtonElement | null>;
}) {
    const [mounted, setMounted] = useState(false);
    const [position, setPosition] = useState({ top: 0, right: 0 });
    const [metricsSize, setMetricsSize] = useState<'Small' | 'Large'>('Large');
    const [quickBuySize, setQuickBuySize] = useState<'Small' | 'Large' | 'Mega' | 'Ultra'>('Small');
    const [activeTab, setActiveTab] = useState<'Layout' | 'Metrics' | 'Row' | 'Extras'>('Layout');

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (buttonRef.current && isOpen) {
            const rect = buttonRef.current.getBoundingClientRect();
            setPosition({
                top: rect.bottom + 8,
                right: window.innerWidth - rect.right,
            });
        }
    }, [buttonRef, isOpen]);

    if (!mounted || !isOpen) return null;

    const tabs: ('Layout' | 'Metrics' | 'Row' | 'Extras')[] = ['Layout', 'Metrics', 'Row', 'Extras'];
    const quickBuySizes: ('Small' | 'Large' | 'Mega' | 'Ultra')[] = ['Small', 'Large', 'Mega', 'Ultra'];

    return createPortal(
        <>
            {/* Backdrop */}
            <div className="fixed inset-0 z-[9998]" onClick={onClose} />
            {/* Modal */}
            <div
                className="fixed z-[9999] bg-[#0d0d0d] border border-zinc-800 rounded-xl w-[420px] shadow-2xl"
                style={{ top: position.top, right: position.right }}
            >
                {/* Metrics Section */}
                <div className="p-4 border-b border-zinc-800">
                    <h3 className="text-white text-base font-medium mb-3">Metrics</h3>
                    <div className="flex gap-3">
                        <button
                            onClick={() => setMetricsSize('Small')}
                            className={cn(
                                'flex-1 flex flex-col items-center justify-center py-4 rounded-lg border transition-colors',
                                metricsSize === 'Small' 
                                    ? 'border-zinc-600 bg-zinc-900' 
                                    : 'border-zinc-800 hover:border-zinc-700'
                            )}
                        >
                            <span className="text-white text-sm">MC 77K</span>
                            <span className="text-gray-400 text-xs mt-1">Small</span>
                        </button>
                        <button
                            onClick={() => setMetricsSize('Large')}
                            className={cn(
                                'flex-1 flex flex-col items-center justify-center py-4 rounded-lg border transition-colors',
                                metricsSize === 'Large' 
                                    ? 'border-zinc-600 bg-zinc-800' 
                                    : 'border-zinc-800 hover:border-zinc-700'
                            )}
                        >
                            <span className="text-white text-lg font-medium">MC 77K</span>
                            <span className="text-gray-400 text-xs mt-1">Large</span>
                        </button>
                    </div>
                </div>

                {/* Quick Buy Section */}
                <div className="p-4 border-b border-zinc-800">
                    <h3 className="text-white text-base font-medium mb-3">Quick Buy</h3>
                    <div className="flex gap-2">
                        {quickBuySizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setQuickBuySize(size)}
                                className={cn(
                                    'flex-1 flex flex-col items-center justify-center py-3 rounded-lg border transition-colors',
                                    quickBuySize === size 
                                        ? 'border-[#526FFF] bg-[#526FFF]/20' 
                                        : 'border-zinc-800 hover:border-zinc-700'
                                )}
                            >
                                <div className={cn(
                                    'flex items-center justify-center px-2 py-1 rounded text-xs font-medium mb-1',
                                    quickBuySize === size ? 'bg-[#526FFF] text-white' : 'bg-zinc-700 text-gray-400'
                                )}>
                                    ⚡7
                                </div>
                                <span className={cn(
                                    'text-xs',
                                    quickBuySize === size ? 'text-white' : 'text-gray-400'
                                )}>{size}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Theme */}
                <div className="p-4 border-b border-zinc-800">
                    <div className="flex items-center gap-2">
                        <Sun className="w-5 h-5 text-gray-400" />
                        <span className="text-white font-medium">Grey</span>
                    </div>
                </div>

                {/* Tabs */}
                <div className="p-4 border-b border-zinc-800">
                    <div className="flex gap-2">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={cn(
                                    'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                                    activeTab === tab 
                                        ? 'bg-zinc-700 text-white' 
                                        : 'text-gray-400 hover:text-white'
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Options */}
                <div className="p-4">
                    <button className="w-full flex items-center gap-3 py-3 text-white hover:bg-zinc-800/50 rounded-lg transition-colors">
                        <Search className="w-5 h-5 text-gray-400" />
                        <span className="font-medium">Show Search Bar</span>
                    </button>
                    <button className="w-full flex items-center gap-3 py-3 text-white hover:bg-zinc-800/50 rounded-lg transition-colors">
                        <Hash className="w-5 h-5 text-gray-400" />
                        <span className="font-medium">No Decimals</span>
                    </button>
                </div>
            </div>
        </>,
        document.body
    );
}

export function SubHeader() {
    const [showDisplaySettings, setShowDisplaySettings] = useState(false);
    const displayButtonRef = useRef<HTMLButtonElement>(null);
  return (
    <div className="w-full h-[48px] bg-[#06070B] mb-[8px]">
      <div className="h-full flex items-center justify-between px-[16px] lg:px-[24px]">
        {/* Left Side: Title + Chain Icons */}
        <div className="flex-1 flex items-center gap-3">
          <span className="text-white text-[20px] font-medium">Pulse</span>
          <div className="flex items-center gap-1">
            {/* Solana Button - Active */}
            <button
              type="button"
              className="relative flex items-center justify-center w-[32px] h-[32px] rounded-full transition-all duration-150 bg-zinc-700/60 scale-110"
              aria-label="Switch to Solana"
            >
              <img alt="SOL" width="20" height="20" src="/images/sol-fill.svg" />
            </button>
            {/* BNB Button - Inactive */}
            <button
              type="button"
              className="relative flex items-center justify-center w-[32px] h-[32px] rounded-full transition-all duration-150 hover:bg-zinc-700/30 opacity-60 hover:opacity-100"
              aria-label="Switch to BNB"
            >
              <img alt="BNB" width="20" height="20" src="/images/bnb-fill.svg" className="grayscale-[0.3]" />
            </button>
          </div>
        </div>

        {/* Right Side: Global Controls */}
        <div className="flex flex-row gap-4 items-center">
          {/* Help Icon */}
          <button type="button" className="flex flex-row w-[24px] h-[24px] justify-center items-center">
            <HelpCircle className="w-[20px] h-[20px] text-gray-500 hover:text-gray-400 transition-all duration-150 ease-in-out" />
          </button>

          {/* Display Button */}
          <div className="relative flex">
            <button 
              ref={displayButtonRef}
              onClick={() => setShowDisplaySettings(!showDisplaySettings)}
              className="bg-zinc-700 flex flex-row h-[32px] px-[12px] gap-[8px] justify-center items-center rounded-full hover:bg-zinc-600/80 transition-colors duration-150 ease-in-out"
            >
              <ListChecks className="w-[18px] h-[18px] text-white" />
              <span className="text-[14px] font-bold text-white whitespace-nowrap">Display</span>
              <ChevronDown className="w-[18px] h-[18px] text-white" />
            </button>
            <DisplaySettingsModal 
              isOpen={showDisplaySettings} 
              onClose={() => setShowDisplaySettings(false)} 
              buttonRef={displayButtonRef}
            />
          </div>

          {/* Bookmark Icon */}
          <button
            type="button"
            className="-mr-[5px] group flex items-center justify-center w-8 h-8 bg-[#06070B] hover:bg-zinc-700/60 transition-colors relative rounded-full"
          >
            <Bookmark className="w-[16px] h-[16px] text-gray-400 group-hover:text-white" />
          </button>

          {/* Keyboard Icon */}
          <button
            type="button"
            className="-mr-[5px] group flex items-center justify-center w-8 h-8 relative rounded-full hover:bg-zinc-700/60 bg-transparent transition-all duration-150"
          >
            <Keyboard className="w-[16px] h-[16px] text-gray-400 group-hover:text-white" />
          </button>

          {/* Volume Icon */}
          <button
            type="button"
            className="-mr-[5px] group flex items-center justify-center w-8 h-8 bg-[#06070B] hover:bg-zinc-700/60 transition-colors relative rounded-full"
          >
            <Volume2 className="w-[16px] h-[16px] text-gray-400 group-hover:text-white transition-colors duration-150 ease-in-out" />
          </button>

          {/* Crosshair + Settings Icon */}
          <button
            type="button"
            className="group flex items-center justify-center w-8 h-8 bg-[#06070B] hover:bg-zinc-700/60 transition-colors relative rounded-full"
          >
            <Crosshair className="w-[16px] h-[16px] text-gray-400 group-hover:text-white" />
            <Settings className="w-[12px] h-[12px] text-gray-400 group-hover:text-white absolute bottom-0 right-0" />
          </button>

          {/* Wallet Selector */}
          <div className="relative flex">
            <button
              type="button"
              className="flex border border-zinc-700 group flex-row p-[4px] pr-[12px] pl-[12px] h-[32px] gap-[8px] justify-center items-center hover:bg-zinc-700/35 transition-colors duration-125 cursor-pointer rounded-full"
            >
              <div className="flex flex-row gap-[4px] justify-center items-center">
                <Wallet className="w-[18px] h-[18px] text-gray-400 group-hover:text-white transition-colors duration-150 ease-in-out cursor-pointer" />
                <span className="text-[14px] text-gray-400 font-medium group-hover:text-white transition-colors duration-150 ease-in-out cursor-pointer">1</span>
              </div>
              <div className="flex flex-row gap-[4px] justify-center items-center">
                <img alt="SOL" width="16" height="16" src="/images/sol-fill.svg" />
                <span className="text-[14px] text-white font-medium">0</span>
              </div>
              <ChevronDown className="w-[18px] h-[18px] text-gray-400 group-hover:text-white transition-colors duration-150 ease-in-out cursor-pointer" />
            </button>
          </div>

          {/* Quick Buy Input - Hidden on mobile, visible on sm-lg */}
          <div className="hidden sm:block lg:hidden">
            <div className="flex flex-row h-full gap-[8px] items-center justify-start">
              <div className="overflow-hidden whitespace-nowrap border-zinc-700 font-normal border-[1px] flex flex-row min-w-[216px] h-[32px] pl-[12px] gap-[8px] justify-start items-center rounded-full hover:bg-zinc-700/35 transition-colors duration-125 cursor-pointer">
                <span className="flex text-[14px] text-gray-500 font-medium">
                  <Zap className="w-[14px] h-[14px]" />
                </span>
                <div className="flex flex-1 sm:max-w-[60px] min-w-[0px]">
                  <input
                    placeholder="0.0"
                    className="text-[14px] w-full text-white placeholder:text-gray-500 font-medium outline-none bg-transparent text-left"
                    type="text"
                    defaultValue="0"
                  />
                </div>
                <img alt="SOL" width="16" height="16" src="/images/sol-fill.svg" />
                <div className="border-zinc-700 border-l-[1px] flex h-full pr-[3px] pl-[3px] gap-[6px] justify-center items-center cursor-pointer">
                  <button type="button" className="group w-[24px] h-[24px] flex flex-row gap-[4px] rounded-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-zinc-700/60">
                    <span className="text-[13px] font-medium text-gray-400">P1</span>
                  </button>
                  <button type="button" className="group w-[24px] h-[24px] flex flex-row gap-[4px] rounded-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-zinc-700/60">
                    <span className="text-[13px] font-medium text-gray-400">P2</span>
                  </button>
                  <button type="button" className="group w-[24px] h-[24px] flex flex-row gap-[4px] rounded-r-full rounded-l-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-[#526FFF]/10">
                    <span className="text-[13px] font-medium text-[#526FFF] hover:text-[#6580FF]">P3</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
