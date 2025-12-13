'use client';

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Zap, SlidersHorizontal, X, RefreshCw } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { setActivePreset } from '@/store/slices/pulseSlice';
import { PresetType } from '@/types/token';
import { cn } from '@/lib/utils';

interface ColumnHeaderProps {
    title: string;
    count: number;
}

// Protocol definitions with colors
const protocols = [
    { name: 'Pump', color: '#22c55e', icon: '💎' },
    { name: 'Mayhem', color: '#ef4444', icon: '🎭' },
    { name: 'Bonk', color: '#f59e0b', icon: '🐕' },
    { name: 'Bags', color: '#22c55e', icon: '💰' },
    { name: 'Moonshot', color: '#ec4899', icon: '🌙' },
    { name: 'Heaven', color: '#6b7280', icon: '☁️' },
    { name: 'Daos.fun', color: '#3b82f6', icon: '🌀' },
    { name: 'Candle', color: '#f97316', icon: '🕯️' },
    { name: 'Sugar', color: '#ec4899', icon: '🍬' },
    { name: 'Believe', color: '#22c55e', icon: '✨' },
    { name: 'Jupiter Studio', color: '#06b6d4', icon: '🪐' },
    { name: 'Moonit', color: '#84cc16', icon: '🚀' },
    { name: 'Boop', color: '#06b6d4', icon: '👻' },
    { name: 'LaunchLab', color: '#6b7280', icon: '🔬' },
    { name: 'Dynamic BC', color: '#ef4444', icon: '⚡' },
    { name: 'Raydium', color: '#6b7280', icon: '☢️' },
    { name: 'Meteora AMM', color: '#6b7280', icon: '🌈' },
    { name: 'Meteora AMM V2', color: '#6b7280', icon: '🌈' },
    { name: 'Pump AMM', color: '#6b7280', icon: '💎' },
    { name: 'Orca', color: '#6b7280', icon: '🐋' },
];

type FilterTab = 'New Pairs' | 'Final Stretch' | 'Migrated';

// Preset configurations
const presetConfigs: Record<PresetType, { slippage: string; tip: string; fee: string; autoSell: string }> = {
    P1: { slippage: '15%', tip: '0.0005', fee: '0.005', autoSell: 'Off' },
    P2: { slippage: '18%', tip: '0.0008', fee: '0.008', autoSell: 'Off' },
    P3: { slippage: '20%', tip: '0.001', fee: '0.01', autoSell: 'Off' },
};

// Preset Tooltip Component using Portal
function PresetTooltip({ preset, buttonRef }: { preset: PresetType; buttonRef: React.RefObject<HTMLButtonElement | null> }) {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setPosition({
                top: rect.bottom + 8,
                left: rect.left + rect.width / 2 - 50,
            });
        }
    }, [buttonRef]);

    if (!mounted) return null;

    return createPortal(
        <div
            className="fixed z-[9999] bg-[#1a1a1a] border border-zinc-800 rounded-lg p-3 min-w-[100px] shadow-xl"
            style={{ top: position.top, left: position.left }}
        >
            <div className="flex flex-col gap-3">
                {/* Slippage */}
                <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 17l5-5-5-5M6 17l5-5-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-white text-sm font-medium">{presetConfigs[preset].slippage}</span>
                </div>
                {/* Tip/Bribe */}
                <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
                    </svg>
                    <span className="text-yellow-500 text-sm font-medium">{presetConfigs[preset].tip}</span>
                </div>
                {/* Fee */}
                <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <ellipse cx="12" cy="12" rx="8" ry="3"/>
                    </svg>
                    <span className="text-white text-sm font-medium">{presetConfigs[preset].fee}</span>
                </div>
                {/* Auto-sell */}
                <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <line x1="3" y1="3" x2="21" y2="21"/>
                    </svg>
                    <span className="text-white text-sm font-medium">{presetConfigs[preset].autoSell}</span>
                </div>
            </div>
        </div>,
        document.body
    );
}

// Preset Button Component
function PresetButton({ preset, index, total }: { preset: PresetType; index: number; total: number }) {
    const dispatch = useDispatch();
    const activePreset = useSelector((state: RootState) => state.pulse.activePreset);
    const [isHovered, setIsHovered] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
        <div className="relative">
            <button
                ref={buttonRef}
                type="button"
                onClick={() => dispatch(setActivePreset(preset))}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={cn(
                    'group w-[22px] h-[22px] flex flex-row gap-[4px] justify-center items-center transition-colors ease-in-out duration-125',
                    index === total - 1 ? 'rounded-r-full rounded-l-[4px]' : 'rounded-[4px]',
                    activePreset === preset
                        ? 'hover:bg-[#526FFF]/10'
                        : 'hover:bg-zinc-700/60'
                )}
            >
                <span className={cn(
                    'text-[12px] font-medium transition-colors ease-in-out duration-125',
                    activePreset === preset
                        ? 'text-[#526FFF] hover:text-[#6580FF]'
                        : 'text-gray-400'
                )}>
                    {preset}
                </span>
            </button>
            {isHovered && <PresetTooltip preset={preset} buttonRef={buttonRef} />}
        </div>
    );
}

// Filter Modal Component
function FilterModal({ isOpen, onClose, buttonRef }: { isOpen: boolean; onClose: () => void; buttonRef: React.RefObject<HTMLButtonElement | null> }) {
    const [mounted, setMounted] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [activeTab, setActiveTab] = useState<FilterTab>('New Pairs');
    const [selectedProtocols, setSelectedProtocols] = useState<string[]>(['Pump', 'Bags', 'Daos.fun', 'Believe', 'Boop']);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (buttonRef.current && isOpen) {
            const rect = buttonRef.current.getBoundingClientRect();
            setPosition({
                top: rect.bottom + 8,
                left: Math.max(10, rect.right - 480),
            });
        }
    }, [buttonRef, isOpen]);

    const toggleProtocol = (name: string) => {
        setSelectedProtocols(prev => 
            prev.includes(name) ? prev.filter(p => p !== name) : [...prev, name]
        );
    };

    const selectAll = () => setSelectedProtocols(protocols.map(p => p.name));
    const unselectAll = () => setSelectedProtocols([]);

    if (!mounted || !isOpen) return null;

    const tabs: FilterTab[] = ['New Pairs', 'Final Stretch', 'Migrated'];

    return createPortal(
        <>
            {/* Backdrop */}
            <div className="fixed inset-0 z-[9998]" onClick={onClose} />
            {/* Modal */}
            <div
                className="fixed z-[9999] bg-[#0d0d0d] border border-zinc-800 rounded-xl w-[480px] shadow-2xl"
                style={{ top: position.top, left: position.left }}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-zinc-800">
                    <h3 className="text-white text-lg font-semibold">Filters</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-6 px-4 pt-4 border-b border-zinc-800">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                'pb-3 text-sm font-medium transition-colors relative',
                                activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                            )}
                        >
                            {tab}
                            {activeTab === tab && (
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />
                            )}
                        </button>
                    ))}
                    <div className="ml-auto pb-3">
                        <RefreshCw className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 max-h-[400px] overflow-y-auto">
                    {/* Protocols Section */}
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-gray-400 text-sm">Protocols</span>
                        <button onClick={selectAll} className="text-white text-sm hover:text-gray-300 bg-zinc-800 px-3 py-1 rounded-lg">
                            Select All
                        </button>
                    </div>

                    {/* Protocol Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {protocols.map(protocol => {
                            const isSelected = selectedProtocols.includes(protocol.name);
                            return (
                                <button
                                    key={protocol.name}
                                    onClick={() => toggleProtocol(protocol.name)}
                                    className={cn(
                                        'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all border',
                                        isSelected
                                            ? 'border-current bg-opacity-20'
                                            : 'border-zinc-700 text-gray-500 hover:border-zinc-600'
                                    )}
                                    style={isSelected ? { color: protocol.color, borderColor: protocol.color, backgroundColor: `${protocol.color}15` } : {}}
                                >
                                    <span className="text-xs">{protocol.icon}</span>
                                    {protocol.name}
                                </button>
                            );
                        })}
                    </div>

                    {/* Quote Tokens Section */}
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-gray-400 text-sm">Quote Tokens</span>
                        <button onClick={unselectAll} className="text-white text-sm hover:text-gray-300 bg-zinc-800 px-3 py-1 rounded-lg">
                            Unselect All
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between p-4 border-t border-zinc-800">
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors">
                            Import
                        </button>
                        <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors">
                            Export
                        </button>
                    </div>
                    <button 
                        onClick={onClose}
                        className="px-6 py-2 bg-[#526FFF] text-white rounded-full text-sm font-medium hover:bg-[#6580FF] transition-colors"
                    >
                        Apply All
                    </button>
                </div>
            </div>
        </>,
        document.body
    );
}

export function ColumnHeader({ title }: ColumnHeaderProps) {
    const presets: PresetType[] = ['P1', 'P2', 'P3'];
    const [showFilter, setShowFilter] = useState(false);
    const filterButtonRef = useRef<HTMLButtonElement>(null);

    return (
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
            {/* Left: Title */}
            <h2 className="text-2xl font-semibold text-white">{title}</h2>

            {/* Right: Quick Buy + Filter */}
            <div className="flex items-center gap-[12px]">
                {/* Quick Buy Input with P1/P2/P3 */}
                <div className="hidden lg:block">
                    <div className="overflow-hidden whitespace-nowrap border-zinc-700 font-normal border-[1px] flex flex-row h-[28px] pl-[4px] gap-[6px] justify-start items-center rounded-full hover:bg-zinc-700/35 transition-colors duration-125 cursor-pointer">
                        <span className="flex text-[14px] text-gray-500 font-medium">
                            <Zap className="w-[14px] h-[14px]" />
                        </span>
                        <div className="flex flex-1 sm:max-w-[32px] min-w-[0px]">
                            <input
                                placeholder="0.0"
                                className="text-[12px] w-full text-white placeholder:text-gray-500 font-medium outline-none bg-transparent text-left"
                                type="text"
                                defaultValue="0"
                            />
                        </div>
                        <img alt="SOL" width="14" height="14" src="/images/sol-fill.svg" />
                        <div className="border-zinc-700 border-l-[1px] flex h-full pr-[2px] pl-[2px] gap-[3px] justify-center items-center cursor-pointer">
                            {presets.map((preset, index) => (
                                <PresetButton key={preset} preset={preset} index={index} total={presets.length} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Filter Button */}
                <button 
                    ref={filterButtonRef}
                    onClick={() => setShowFilter(!showFilter)}
                    className="flex flex-row p-[4px] w-[24px] h-[24px] justify-center items-center transition-opacity duration-150 ease-in-out cursor-pointer rounded-[4px] relative hover:bg-zinc-700/30"
                >
                    <SlidersHorizontal className="w-[16px] h-[16px] text-gray-400" />
                </button>
                
                <FilterModal isOpen={showFilter} onClose={() => setShowFilter(false)} buttonRef={filterButtonRef} />
            </div>
        </div>
    );
}
