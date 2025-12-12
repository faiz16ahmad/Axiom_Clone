'use client';

import { useMemo } from 'react';
import { Token, TokenCategory } from '@/types/token';
import { TokenCard } from './TokenCard';
import { ColumnHeader } from '@/components/molecules/ColumnHeader';

interface ColumnSectionProps {
  title: string;
  tokens: Token[];
  category: TokenCategory;
}

export function ColumnSection({ title, tokens, category }: ColumnSectionProps) {
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

  return (
    <div className="flex flex-col h-full">
      {/* Header with Controls */}
      <ColumnHeader title={title} count={sortedTokens.length} />
      
      {/* Token List */}
      <div className="flex-1 overflow-y-auto p-1 space-y-1">
        {sortedTokens.map((token) => (
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
