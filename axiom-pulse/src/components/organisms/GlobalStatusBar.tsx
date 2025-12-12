'use client';

import {
    Settings,
    FolderOpen,
    ChevronDown,
    FileText,
    Compass,
    Activity,
    BarChart3,
    Square,
    Bell,
    Palette,
} from 'lucide-react';
import { SolanaIcon } from '@/components/atoms/SolanaIcon';

function NotificationDot() {
    return (
        <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-pink-500 rounded-full" />
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

// Custom Wallet Icon
function WalletIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
            {/* Outer wallet rectangle */}
            <rect x="2" y="4" width="18" height="16" rx="2" />
            {/* Card slot on right side */}
            <path d="M22 10V14" strokeLinecap="round" />
            {/* Inner card/pocket with rounded left side */}
            <path d="M14 10H18V14H14C12.9 14 12 13.1 12 12C12 10.9 12.9 10 14 10Z" />
            {/* Small rectangle inside pocket */}
            <rect x="15" y="11" width="2" height="2" fill="currentColor" stroke="none" />
        </svg>
    );
}

// Capsule/Pill Icon (green and white, tilted)
function CapsuleIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className}>
            <g transform="rotate(30 12 12)">
                {/* Green bottom half */}
                <ellipse cx="12" cy="12" rx="5" ry="9" fill="#10B981" />
                {/* White top half */}
                <path d="M7 12 A5 9 0 0 1 17 12 L7 12" fill="#fff" />
            </g>
        </svg>
    );
}

// Shiba Dog Icon
function ShibaIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className}>
            {/* Ears */}
            <path d="M6 8L4 3L9 6Z" fill="#F97316" />
            <path d="M18 8L20 3L15 6Z" fill="#F97316" />
            {/* Alert marks */}
            <path d="M10 2L10.5 4M12 1L12 3.5M14 2L13.5 4" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
            {/* Face */}
            <ellipse cx="12" cy="13" rx="8" ry="7" fill="#F97316" />
            {/* White face area */}
            <ellipse cx="12" cy="15" rx="5" ry="5" fill="#fff" />
            {/* Eyes */}
            <circle cx="9" cy="12" r="1" fill="#000" />
            <circle cx="15" cy="12" r="1" fill="#000" />
            {/* Nose */}
            <ellipse cx="12" cy="14" rx="1.5" ry="1" fill="#000" />
            {/* Mouth */}
            <path d="M10 16Q12 18 14 16" stroke="#000" strokeWidth="0.5" fill="none" />
        </svg>
    );
}

// Hexagon R Icon (Raydium style)
function HexagonRIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className}>
            <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#06B6D4" strokeWidth="1.5" fill="none" />
            <circle cx="18" cy="6" r="2" fill="#06B6D4" />
            <text x="12" y="15" textAnchor="middle" fill="#06B6D4" fontSize="9" fontWeight="bold" fontFamily="Arial">R</text>
        </svg>
    );
}

// Preset Icon (lines with gear)
function PresetIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            {/* Horizontal lines */}
            <rect x="1" y="3" width="13" height="2.5" rx="1" />
            <rect x="1" y="9" width="8" height="2.5" rx="1" />
            <rect x="1" y="15" width="5" height="2.5" rx="1" />
            {/* Gear cog - using standard Material Design gear icon path */}
            <g transform="translate(11, 9) scale(0.55)">
                <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
            </g>
        </svg>
    );
}

function Divider() {
    return <div className="h-5 w-[1px] bg-gray-700 mx-1 flex-shrink-0" />;
}

export function GlobalStatusBar() {
    return (
        <footer className="fixed bottom-0 left-0 w-full z-50 h-[42px] bg-black border-t border-gray-800 overflow-x-auto scrollbar-hide">
            <div className="h-full flex items-center px-4 text-xs font-medium gap-2">
                {/* PRESET 1 */}
                <button className="flex items-center gap-1.5 bg-[#151C3C] text-[#526FFF] rounded px-2 py-0.5 hover:bg-[#1a2248] transition-colors flex-shrink-0">
                    <PresetIcon className="w-5 h-5" />
                    <span className="text-sm font-semibold">PRESET 1</span>
                </button>

                {/* Layout 1=0 */}
                <div className="flex items-center gap-1 text-gray-300 rounded-full border border-[#22242D] bg-transparent px-2 py-0.5 flex-shrink-0">
                    <FolderOpen className="w-4 h-4" />
                    <span className="text-xs">1</span>
                    <SolanaIcon size="sm" />
                    <span className="text-xs">0</span>
                    <ChevronDown className="w-4 h-4" />
                </div>

                <Divider />

                {/* Settings Icon */}
                <button className="text-[#777A8C] hover:text-white transition-colors flex-shrink-0">
                    <Settings className="w-4 h-4" />
                </button>

                {/* Wallet */}
                <button className="relative flex items-center gap-1 hover:text-white transition-colors px-1 flex-shrink-0">
                    <WalletIcon className="w-4 h-4 text-[#777A8C]" />
                    <span className="text-[#C8C9D1] text-xs">Wallet</span>
                    <NotificationDot />
                </button>

                {/* Twitter */}
                <button className="flex items-center gap-1 hover:text-white transition-colors px-1 flex-shrink-0">
                    <TwitterIcon className="w-4 h-4 text-[#777A8C]" />
                    <span className="text-[#C8C9D1] text-xs">Twitter</span>
                </button>

                {/* Discover */}
                <button className="relative flex items-center gap-1 hover:text-white transition-colors px-1 flex-shrink-0">
                    <Compass className="w-4 h-4 text-[#777A8C]" />
                    <span className="text-[#C8C9D1] text-xs">Discover</span>
                    <NotificationDot />
                </button>

                {/* Pulse */}
                <button className="relative flex items-center gap-1 hover:text-white transition-colors px-1 flex-shrink-0">
                    <Activity className="w-4 h-4 text-[#777A8C]" />
                    <span className="text-[#C8C9D1] text-xs">Pulse</span>
                    <NotificationDot />
                </button>

                {/* PnL */}
                <button className="flex items-center gap-1 hover:text-white transition-colors px-1 flex-shrink-0">
                    <BarChart3 className="w-4 h-4 text-[#777A8C]" />
                    <span className="text-[#C8C9D1] text-xs">PnL</span>
                </button>

                <Divider />

                {/* Spacer */}
                {/* <div className="flex-1" /> */}

                {/* 3-Icon Pill with gradient border */}
                <div className="relative flex items-center rounded-full px-2 py-0.5 flex-shrink-0">
                    {/* Gradient border */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1E4431] via-[#473011] to-[#1E3D42] p-[1px]">
                        <div className="w-full h-full rounded-full bg-[#18181B]" />
                    </div>
                    {/* Icons */}
                    <div className="relative flex items-center gap-0">
                        <CapsuleIcon className="w-4 h-4" />
                        <ShibaIcon className="w-4 h-4" />
                        <HexagonRIcon className="w-4 h-4" />
                    </div>
                </div>

                <Divider />

                {/* Solana + Price */}
                <div className="flex items-center gap-1 flex-shrink-0">
                    <SolanaIcon size="sm" />
                    <span className="text-emerald-400 text-xs">$139.6</span>
                </div>

                {/* Connection Status */}
                <div className="flex items-center gap-1.5 bg-[#092923] rounded-md px-2 py-0.5 flex-shrink-0">
                    <div className="relative">
                        <span className="w-3 h-3 bg-[#12AF80] rounded-full block" />
                        <span className="absolute inset-0 w-3 h-3 rounded-full border border-[#0B4436]" />
                    </div>
                    <span className="text-[#12AF80] text-xs">Connected</span>
                </div>

                {/* GLOBAL */}
                <button className="flex items-center gap-1 text-[#C8C9D1] hover:text-white transition-colors px-1 flex-shrink-0">
                    <span className="text-[#F4F4F5] text-xs">GLOBAL</span>
                    <ChevronDown className="w-3 h-3" />
                </button>

                <Divider />

                {/* Right side icons */}
                <button className="text-[#F4F4F5] hover:text-white transition-colors px-0.5 flex-shrink-0">
                    <Square className="w-3.5 h-3.5" />
                </button>

                <button className="text-[#F4F4F5] hover:text-white transition-colors px-0.5 flex-shrink-0">
                    <Bell className="w-3.5 h-3.5" />
                </button>

                <button className="text-[#F4F4F5] hover:text-white transition-colors px-0.5 flex-shrink-0">
                    <Palette className="w-3.5 h-3.5" />
                </button>

                <Divider />

                {/* Discord */}
                <button className="text-[#F4F4F5] hover:text-white transition-colors px-0.5 flex-shrink-0">
                    <DiscordIcon className="w-3.5 h-3.5" />
                </button>

                {/* X/Twitter */}
                <button className="text-[#F4F4F5] hover:text-white transition-colors px-0.5 flex-shrink-0">
                    <TwitterIcon className="w-3.5 h-3.5" />
                </button>

                {/* Docs */}
                <button className="flex items-center gap-1 text-[#F4F4F5] hover:text-white transition-colors px-0.5 flex-shrink-0">
                    <FileText className="w-3.5 h-3.5" />
                    <span className="text-xs">Docs</span>
                </button>
            </div>
        </footer>
    );
}
