'use client';

import { memo } from 'react';
import { Token } from '@/types/token';
import { ColumnSection } from './ColumnSection';

interface DashboardBoardProps {
  tokens: Token[];
}

function DashboardBoardComponent({ tokens }: DashboardBoardProps) {
  return (
    <div className="bg-[#06070B] px-[2%]">
      {/* Unified terminal container - 70% height (reduced by 30%), scrollable columns */}
      <div className="h-[62vh] bg-[#101114] rounded-sm border border-zinc-800 overflow-hidden">
        {/* Desktop: 3-column grid with NO gaps, Mobile: vertical stack */}
        <div className="h-full flex flex-col md:grid md:grid-cols-3 gap-0">
          {/* New Pairs - with right border divider */}
          <div className="flex-1 md:flex-none bg-[#101114] rounded-none border-r border-zinc-800 overflow-hidden">
            <ColumnSection
              title="New Pairs"
              tokens={tokens}
              category="new-pairs"
            />
          </div>

          {/* Final Stretch - with right border divider */}
          <div className="flex-1 md:flex-none bg-[#101114] rounded-none border-r border-zinc-800 overflow-hidden">
            <ColumnSection
              title="Final Stretch"
              tokens={tokens}
              category="final-stretch"
            />
          </div>

          {/* Migrated - no right border (last column) */}
          <div className="flex-1 md:flex-none bg-[#101114] rounded-none overflow-hidden">
            <ColumnSection
              title="Migrated"
              tokens={tokens}
              category="migrated"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export const DashboardBoard = memo(DashboardBoardComponent);
DashboardBoard.displayName = 'DashboardBoard';
