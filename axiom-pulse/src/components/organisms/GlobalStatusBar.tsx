'use client';

import {
    Settings,
    ChevronDown,
    FileText,
    Compass,
    Activity,
    BarChart3,
    Bell,
    Palette,
    Wallet,
    Layout,
    Fuel,
    Coins,
} from 'lucide-react';
// Using images from /images folder

function NotificationDot() {
    return (
        <div className="border border-[#101114] absolute -top-[1px] -right-[3px] w-[7px] h-[7px] bg-red-500 rounded-full" />
    );
}

function TwitterIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

function DiscordIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.36-.698.772-1.362 1.225-1.993a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.12-.094.246-.194.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
    );
}

function PresetIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <rect x="3" y="4" width="18" height="2" rx="1" />
            <rect x="3" y="11" width="18" height="2" rx="1" />
            <rect x="3" y="18" width="18" height="2" rx="1" />
            <circle cx="8" cy="5" r="3" fill="currentColor" stroke="#101114" strokeWidth="1" />
            <circle cx="16" cy="12" r="3" fill="currentColor" stroke="#101114" strokeWidth="1" />
            <circle cx="10" cy="19" r="3" fill="currentColor" stroke="#101114" strokeWidth="1" />
        </svg>
    );
}

function Divider({ className }: { className?: string }) {
    return <div className={`w-[1px] h-[20px] bg-zinc-700 flex-shrink-0 ${className || ''}`} />;
}

export function GlobalStatusBar() {
    return (
        <footer className="fixed bottom-0 left-0 w-full z-50 h-[35px] bg-[#101114] border-t border-zinc-800">
            <div className="flex overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-row justify-between w-full h-full px-[24px] gap-[16px] items-center min-w-0">
                {/* LEFT SECTION */}
                <div className="flex flex-row flex-shrink-0 gap-[8px] justify-start items-center">
                    {/* PRESET 1 */}
                    <button className="text-[#526FFF] bg-[#526FFF]/20 flex flex-row h-[24px] px-[8px] gap-[4px] justify-start items-center rounded-[4px] hover:bg-[#526FFF]/25 transition-colors duration-150 ease-in-out cursor-pointer">
                        <PresetIcon className="w-[16px] h-[16px]" />
                        <span className="text-[12px] font-semibold">PRESET 1</span>
                    </button>

                    {/* Wallet Selector */}
                    <button className="group/wallets border border-zinc-700 flex flex-row h-[24px] pl-[8px] pr-[5px] gap-[6px] justify-start items-center rounded-full hover:bg-zinc-700/60 transition-colors duration-125 ease-in-out cursor-pointer">
                        <div className="flex flex-row gap-[4px] justify-start items-center">
                            <Wallet className="w-[14px] h-[14px] text-gray-500 group-hover/wallets:text-gray-400 transition-colors duration-125 ease-in-out" />
                            <span className="text-[12px] group-hover/wallets:text-gray-300 font-medium text-gray-400 transition-colors duration-125 ease-in-out">1</span>
                        </div>
                        <div className="flex flex-row gap-[4px] justify-start items-center">
                            <img alt="SOL" width="14" height="14" src="/images/sol-fill.svg" />
                            <span className="text-[12px] font-medium text-gray-400">0</span>
                        </div>
                        <ChevronDown className="w-[14px] h-[14px] text-gray-400 group-hover:text-white transition-colors duration-150 ease-in-out cursor-pointer" />
                    </button>

                    <Divider />

                    {/* Settings + Nav Items */}
                    <div className="flex flex-row gap-[8px] justify-start items-center">
                        <button className="-mr-[4px] min-w-[24px] min-h-[24px] flex items-center justify-center text-gray-500 hover:text-gray-400 hover:bg-zinc-700/40 transition-colors duration-125 ease-in-out rounded-[4px]">
                            <Settings className="w-[14px] h-[14px]" />
                        </button>

                        {/* Wallet Nav */}
                        <button className="group relative flex flex-row gap-[4px] h-[24px] px-[4px] justify-start items-center rounded-[4px] cursor-pointer hover:bg-zinc-700/60">
                            <NotificationDot />
                            <Wallet className="w-[16px] h-[16px] text-gray-500 hover:text-gray-400 transition-colors group-hover:text-gray-400" />
                            <span className="text-gray-400 text-[12px] leading-[16px] font-medium text-nowrap">Wallet</span>
                        </button>

                        {/* Twitter Nav */}
                        <button className="group relative flex flex-row gap-[4px] h-[24px] px-[4px] justify-start items-center rounded-[4px] cursor-pointer hover:bg-zinc-700/60">
                            <NotificationDot />
                            <TwitterIcon className="w-[16px] h-[16px] text-gray-500 hover:text-gray-400 transition-colors group-hover:text-gray-400" />
                            <span className="text-gray-400 text-[12px] leading-[16px] font-medium text-nowrap">Twitter</span>
                        </button>

                        {/* Discover Nav */}
                        <button className="group relative flex flex-row gap-[4px] h-[24px] px-[4px] justify-start items-center rounded-[4px] cursor-pointer hover:bg-zinc-700/60">
                            <NotificationDot />
                            <Compass className="w-[16px] h-[16px] text-gray-500 hover:text-gray-400 transition-colors group-hover:text-gray-400" />
                            <span className="text-gray-400 text-[12px] leading-[16px] font-medium text-nowrap">Discover</span>
                        </button>

                        {/* Pulse Nav */}
                        <button className="group relative flex flex-row gap-[4px] h-[24px] px-[4px] justify-start items-center rounded-[4px] cursor-pointer hover:bg-zinc-700/60">
                            <NotificationDot />
                            <Activity className="w-[16px] h-[16px] text-gray-500 hover:text-gray-400 transition-colors group-hover:text-gray-400" />
                            <span className="text-gray-400 text-[12px] leading-[16px] font-medium text-nowrap">Pulse</span>
                        </button>

                        {/* PnL Nav */}
                        <button className="group relative flex flex-row gap-[4px] h-[24px] px-[4px] justify-start items-center rounded-[4px] cursor-pointer hover:bg-zinc-700/60">
                            <BarChart3 className="w-[16px] h-[16px] text-gray-500 hover:text-gray-400 transition-colors group-hover:text-gray-400" />
                            <span className="text-gray-400 text-[12px] leading-[16px] font-medium text-nowrap">PnL</span>
                        </button>
                    </div>

                    <Divider className="hidden lg:flex" />

                    {/* Platform Icons Pill */}
                    <button type="button" className="hidden lg:flex flex-row h-[24px] px-[0px] gap-[4px] justify-start items-center hover:brightness-110 transition-all duration-125 ease-in-out">
                        <div className="relative">
                            <div className="relative flex flex-row h-[20px] px-[4px] gap-[4px] justify-start items-center rounded-full opacity-30" style={{ background: 'linear-gradient(to right, rgb(83, 211, 142) 0%, rgb(231, 140, 25) 50%, rgb(75, 188, 207) 100%)', width: '40px' }}></div>
                            <div className="absolute inset-[2px] bg-[#101114] rounded-full flex gap-[0px] justify-center items-center">
                                <img alt="Pump" width="11" height="11" src="/images/pump.svg" />
                                <img alt="Bonk" width="11" height="11" src="/images/bonk.svg" />
                                <img alt="LaunchLab" width="11" height="11" src="/images/launchlab.svg" />
                            </div>
                        </div>
                    </button>

                    <Divider className="hidden lg:flex" />

                    {/* Crypto Prices */}
                    <div className="flex flex-1 flex-row w-full gap-[8px] justify-start items-center">
                        <button className="text-[#F7931A] hidden 2xl:flex flex-row flex-shrink-0 h-[24px] px-[0px] gap-[4px] justify-start items-center hover:brightness-110 transition-all duration-125 ease-in-out">
                            <img alt="BTC" width="16" height="16" src="/images/btc-fill.svg" />
                            <span className="text-[12px] font-normal">$90.6K</span>
                        </button>
                        <button className="text-[#497493] hidden 2xl:flex flex-row flex-shrink-0 h-[24px] px-[0px] gap-[2px] justify-start items-center hover:brightness-110 transition-all duration-125 ease-in-out">
                            <img alt="ETH" width="16" height="16" src="/images/eth-fill.svg" />
                            <span className="text-[12px] font-normal">$3133</span>
                        </button>
                        <button className="text-[#14F195] hidden lg:flex flex-row flex-shrink-0 h-[24px] px-[0px] gap-[4px] justify-start items-center hover:brightness-110 transition-all duration-125 ease-in-out">
                            <img alt="SOL" width="16" height="16" src="/images/sol-fill.svg" />
                            <span className="text-[12px] font-normal">$134.12</span>
                        </button>
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="flex flex-row flex-shrink-0 gap-[8px] justify-end items-center">
                    {/* Pump Price */}
                    <div className="hidden 2xl:flex">
                        <button className="-mr-[8px] group flex items-center gap-[4px] h-[24px] px-2 text-[12px] font-medium rounded hover:bg-zinc-700/40 text-gray-500 transition-colors duration-150 ease-in-out">
                            <img alt="Pump" width="14" height="14" src="/images/pump.svg" />
                            <span className="text-gray-500 text-[12px] font-normal group-hover:text-gray-400 transition-colors duration-150 ease-in-out">$55.1K</span>
                        </button>
                    </div>

                    {/* Gas */}
                    <div className="hidden 2xl:flex flex-row gap-[4px] justify-start items-center">
                        <div className="flex flex-row gap-[4px] h-[24px] min-h-[24px] justify-start items-center">
                            <Fuel className="w-[16px] h-[16px] text-gray-500" />
                            <span className="text-gray-500 text-[12px] font-normal">0.0<sub>2</sub>33</span>
                        </div>
                    </div>

                    {/* Coin */}
                    <div className="hidden 2xl:flex flex-row gap-[4px] justify-start items-center">
                        <div className="flex flex-row gap-[4px] h-[24px] min-h-[24px] justify-start items-center">
                            <Coins className="w-[16px] h-[16px] text-gray-500" />
                            <span className="text-gray-500 text-[12px] font-normal">0.003</span>
                        </div>
                    </div>

                    <Divider className="hidden 2xl:flex" />

                    {/* Connection Status */}
                    <div className="flex flex-row h-[24px] xl:px-[8px] gap-[4px] justify-start items-center rounded-[4px] text-emerald-400 xl:bg-emerald-400/20">
                        <div className="flex flex-row gap-[4px] justify-start items-center">
                            <div className="bg-emerald-400/20 w-[12px] h-[12px] rounded-full flex flex-row gap-[4px] justify-center items-center">
                                <div className="bg-emerald-400 w-[8px] h-[8px] rounded-full"></div>
                            </div>
                        </div>
                        <span className="hidden xl:flex text-[12px] font-medium">Connection is stable</span>
                    </div>

                    {/* GLOBAL Dropdown */}
                    <div className="relative flex">
                        <button className="flex items-center gap-1 px-2 h-[24px] text-[12px] font-medium rounded hover:bg-zinc-700/40 text-gray-400 transition-colors duration-150">
                            <span>GLOBAL</span>
                            <ChevronDown className="w-[14px] h-[14px]" />
                        </button>
                    </div>

                    <Divider />

                    {/* Right Icons */}
                    <div className="text-gray-400 flex flex-row gap-[8px] justify-start items-center">
                        <button className="flex items-center justify-center w-[24px] h-[24px] rounded-[4px] transition-colors duration-150 ease-in-out text-gray-400 hover:bg-zinc-700/40">
                            <Layout className="w-[16px] h-[16px]" />
                        </button>
                        <button className="text-[12px] hover:bg-zinc-700/40 flex items-center gap-1 justify-center w-[24px] h-[24px] rounded-[4px] transition-colors duration-150 ease-in-out">
                            <Bell className="w-[16px] h-[16px]" />
                        </button>
                        <button className="text-[12px] hover:bg-zinc-700/40 flex items-center gap-1 justify-center w-[24px] h-[24px] rounded-[4px] transition-colors duration-150 ease-in-out">
                            <Palette className="w-[16px] h-[16px]" />
                        </button>

                        <Divider className="hidden md:flex" />

                        {/* Social Links */}
                        <div className="hidden md:flex flex-row gap-[16px] justify-start items-center">
                            <a href="https://discord.gg/axiomtrade" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                                <DiscordIcon className="w-[16px] h-[16px]" />
                            </a>
                            <a href="https://x.com/axiomexchange" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                                <TwitterIcon className="w-[16px] h-[16px]" />
                            </a>
                        </div>

                        {/* Docs */}
                        <a href="https://docs.axiom.trade/" target="_blank" rel="noopener noreferrer" className="hidden md:flex flex-row gap-[2px] h-[24px] px-[8px] justify-start items-center rounded-[4px] hover:bg-zinc-700/40">
                            <FileText className="w-[16px] h-[16px]" />
                            <span className="hidden lg:flex text-[12px] font-normal">Docs</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
