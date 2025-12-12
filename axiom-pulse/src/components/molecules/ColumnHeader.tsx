'use client';

import { Zap, SlidersHorizontal } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { setActivePreset } from '@/store/slices/pulseSlice';
import { PresetType } from '@/types/token';
import { cn } from '@/lib/utils';
import { SolanaIcon } from '@/components/atoms/SolanaIcon';

interface ColumnHeaderProps {
    title: string;
    count: number;
}

export function ColumnHeader({ title, count }: ColumnHeaderProps) {
    const dispatch = useDispatch();
    const activePreset = useSelector((state: RootState) => state.pulse.activePreset);

    const presets: PresetType[] = ['P1', 'P2', 'P3'];

    const handlePresetClick = (preset: PresetType) => {
        dispatch(setActivePreset(preset));
    };

    return (
        <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800">
            {/* Left: Title */}
            <h2 className="text-sm font-semibold text-white">{title}</h2>

            {/* Right: Control Toolbar + Filter */}
            <div className="flex items-center gap-2">
                {/* Control Container */}
                <div className="flex items-center gap-2 bg-zinc-900 rounded-full px-3 py-1">
                    {/* Lightning Badge */}
                    <div className="flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 text-yellow-400" />
                        <span className="text-xs text-gray-400 tabular-nums">{count}</span>
                    </div>

                    {/* Solana Icon */}
                    <SolanaIcon size="sm" />

                    {/* Divider */}
                    <div className="w-px h-4 bg-zinc-700" />

                    {/* Preset Tabs */}
                    <div className="flex items-center gap-1">
                        {presets.map((preset) => (
                            <button
                                key={preset}
                                onClick={() => handlePresetClick(preset)}
                                className={cn(
                                    'text-xs font-medium px-1.5 py-0.5 rounded transition-colors',
                                    activePreset === preset
                                        ? 'text-blue-400'
                                        : 'text-gray-500 hover:text-gray-300'
                                )}
                            >
                                {preset}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Filter Button */}
                <button className="p-1.5 rounded-lg hover:bg-zinc-800 transition-colors">
                    <SlidersHorizontal className="w-4 h-4 text-gray-400 hover:text-white" />
                </button>
            </div>
        </div>
    );
}
