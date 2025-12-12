'use client';

import { Settings, Star, TrendingUp } from 'lucide-react';

export function ToolbarRow() {
  return (
    <div className="w-full h-8 bg-[#06070B] border-b border-zinc-800/30">
      <div className="h-full flex items-center gap-0.5 px-3">
        {/* Settings/Gear Icon */}
        <button className="p-1.5 text-gray-500 hover:text-white transition-colors">
          <Settings className="w-4 h-4" />
        </button>
        
        {/* Divider */}
        <div className="w-px h-3 bg-zinc-700 mx-0.5" />
        
        {/* Star Icon */}
        <button className="p-1.5 text-gray-500 hover:text-yellow-400 transition-colors">
          <Star className="w-4 h-4" />
        </button>
        
        {/* Chart/Trending Icon */}
        <button className="p-1.5 text-gray-500 hover:text-white transition-colors">
          <TrendingUp className="w-4 h-4" />
        </button>
        
        {/* Divider */}
        <div className="w-px h-3 bg-zinc-700 mx-0.5" />
      </div>
    </div>
  );
}
