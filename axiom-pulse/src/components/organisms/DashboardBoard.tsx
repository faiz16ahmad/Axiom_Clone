'use client';

import { memo } from 'react';
import { Token } from '@/types/token';
import { ColumnSection } from './ColumnSection';

interface DashboardBoardProps {
  tokens: Token[];
}

function DashboardBoardComponent({ tokens }: DashboardBoardProps) {
  return (
    <div className="h-screen bg-black p-2">
      {/* Desktop: 3-column grid, Mobile: vertical stack */}
      <div className="h-full flex flex-col md:grid md:grid-cols-3 gap-1">
        <div className="flex-1 md:flex-none bg-[#09090b] rounded-lg border border-zinc-800 overflow-hidden">
          <ColumnSection 
            title="New Pairs" 
            tokens={tokens} 
            category="new-pairs" 
          />
        </div>
        
        <div className="flex-1 md:flex-none bg-[#09090b] rounded-lg border border-zinc-800 overflow-hidden">
          <ColumnSection 
            title="Final Stretch" 
            tokens={tokens} 
            category="final-stretch" 
          />
        </div>
        
        <div className="flex-1 md:flex-none bg-[#09090b] rounded-lg border border-zinc-800 overflow-hidden">
          <ColumnSection 
            title="Migrated" 
            tokens={tokens} 
            category="migrated" 
          />
        </div>
      </div>
    </div>
  );
}

export const DashboardBoard = memo(DashboardBoardComponent);
DashboardBoard.displayName = 'DashboardBoard';
