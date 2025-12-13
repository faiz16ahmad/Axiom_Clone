'use client';

import { useMemo, memo } from 'react';
import { Token, TokenCategory } from '@/types/token';
import { TokenCard } from './TokenCard';
import { ColumnHeader } from '@/components/molecules/ColumnHeader';

interface ColumnSectionProps {
  title: string;
  tokens: Token[];
  category: TokenCategory;
}

// Limit visible tokens on mobile for performance
const MOBILE_TOKEN_LIMIT = 15;
const DESKTOP_TOKEN_LIMIT = 50;

function ColumnSectionComponent({ title, tokens, category }: ColumnSectionProps) {
  const sortedTokens = useMemo(() => {
    const filtered = tokens.filter((t) => t.category === category);
    
    switch (category) {
      case 'new-pairs':
        return filtered.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case 'final-stretch':
        return filtered.sort((a, b) => b.bondingCurve - a.bondingCurve);
      case 'migrated':
        return filtered.sort((a, b) => {
          const aTime = a.migratedAt ? new Date(a.migratedAt).getTime() : 0;
          const bTime = b.migratedAt ? new Date(b.migratedAt).getTime() : 0;
          return bTime - aTime;
        });
      default:
        return filtered;
    }
  }, [tokens, category]);

  // Limit tokens for better performance - detect mobile via window width
  const visibleTokens = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const limit = isMobile ? MOBILE_TOKEN_LIMIT : DESKTOP_TOKEN_LIMIT;
    return sortedTokens.slice(0, limit);
  }, [sortedTokens]);

  return (
    <div className="flex flex-col h-full">
      {/* Header with Controls */}
      <ColumnHeader title={title} count={sortedTokens.length} />
      
      {/* Token List - use content-visibility for better paint performance */}
      <div className="flex-1 overflow-y-auto p-1 space-y-1" style={{ contentVisibility: 'auto', overflow: 'visible auto' }}>
        {visibleTokens.map((token) => (
          <TokenCard key={token.id} token={token} />
        ))}
        
        {sortedTokens.length === 0 && (
          <div className="flex items-center justify-center h-32 text-gray-400 text-xs">
            No tokens
          </div>
        )}
      </div>
    </div>
  );
}

export const ColumnSection = memo(ColumnSectionComponent);
ColumnSection.displayName = 'ColumnSection';
