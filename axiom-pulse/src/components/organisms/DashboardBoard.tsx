'use client';

import { memo } from 'react';
import { Token } from '@/types/token';
import { ColumnSection } from './ColumnSection';

interface DashboardBoardProps {
  tokens: Token[];
}

function DashboardBoardComponent({ tokens }: DashboardBoardProps) {
  return (
    <div className="bg-[#06070B] px-1 lg:px-[1%] xl:px-[2%]">
      {/* Unified terminal container - flexible height, scrollable columns */}
      <div className="h-[calc(92vh-120px)] lg:h-[calc(92vh-140px)] bg-[#101114] rounded-sm border border-zinc-800 overflow-hidden">
        {/* Desktop: 3-column flex with equal distribution, Mobile: vertical stack */}
        <div className="h-full flex flex-col md:flex-row gap-0">
          {/* New Pairs - flex-1 with min-width for squishing */}
          <div className="flex-1 min-w-[280px] lg:min-w-[320px] bg-[#101114] rounded-none border-r border-zinc-800 overflow-hidden">
            <ColumnSection
              title="New Pairs"
              tokens={tokens}
              category="new-pairs"
            />
          </div>

          {/* Final Stretch - flex-1 with min-width for squishing */}
          <div className="flex-1 min-w-[280px] lg:min-w-[320px] bg-[#101114] rounded-none border-r border-zinc-800 overflow-hidden">
            <ColumnSection
              title="Final Stretch"
              tokens={tokens}
              category="final-stretch"
            />
          </div>

          {/* Migrated - flex-1 with min-width for squishing */}
          <div className="flex-1 min-w-[280px] lg:min-w-[320px] bg-[#101114] rounded-none overflow-hidden">
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
