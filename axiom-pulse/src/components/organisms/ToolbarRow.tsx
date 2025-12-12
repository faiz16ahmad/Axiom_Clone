'use client';

import { Settings, Star, TrendingUp } from 'lucide-react';

export function ToolbarRow() {
  return (
    <div className="w-full h-10 bg-[#06070B] border-b border-zinc-800/30">
      <div className="h-full flex items-center gap-1 px-4">
        {/* Settings/Gear Icon */}
        <button className="p-2 text-gray-500 hover:text-white transition-colors">
          <Settings className="w-5 h-5" />
        </button>
        
        {/* Divider */}
        <div className="w-px h-4 bg-zinc-700 mx-1" />
        
        {/* Star Icon */}
        <button className="p-2 text-gray-500 hover:text-yellow-400 transition-colors">
          <Star className="w-5 h-5" />
        </button>
        
        {/* Chart/Trending Icon */}
        <button className="p-2 text-gray-500 hover:text-white transition-colors">
          <TrendingUp className="w-5 h-5" />
        </button>
        
        {/* Divider */}
        <div className="w-px h-4 bg-zinc-700 mx-1" />
      </div>
    </div>
  );
}
