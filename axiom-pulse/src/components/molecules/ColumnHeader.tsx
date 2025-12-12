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
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
            {/* Left: Title */}
            <h2 className="text-2xl font-semibold text-white">{title}</h2>

            {/* Right: Control Toolbar + Filter */}
            <div className="flex items-center gap-3">
                {/* Control Container */}
                <div className="flex items-center gap-3 bg-zinc-900 rounded-none px-4 py-1.5">
                    {/* Lightning Badge */}
                    <div className="flex items-center gap-1.5">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-gray-400 tabular-nums">{count}</span>
                    </div>

                    {/* Solana Icon */}
                    <SolanaIcon size="md" />

                    {/* Divider */}
                    <div className="w-px h-5 bg-zinc-700" />

                    {/* Preset Tabs */}
                    <div className="flex items-center gap-2">
                        {presets.map((preset) => (
                            <button
                                key={preset}
                                onClick={() => handlePresetClick(preset)}
                                className={cn(
                                    'text-sm font-medium px-2 py-1 rounded transition-colors',
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
                <button className="p-2 rounded-none hover:bg-zinc-800 transition-colors">
                    <SlidersHorizontal className="w-5 h-5 text-gray-400 hover:text-white" />
                </button>
            </div>
        </div>
    );
}
