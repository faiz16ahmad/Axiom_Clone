'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Token, FlashState } from '@/types/token';
import { generateFreshNewPair, generateInitialTokens } from '@/lib/tokenGenerator';

export function useTokenSocketMock() {
  const [tokens, setTokens] = useState<Token[]>([]);
  const isInitialized = useRef(false);
  const [isReady, setIsReady] = useState(false);

  // Initialize only on client to avoid SSR hydration mismatch
  useEffect(() => {
    if (!isInitialized.current) {
      isInitialized.current = true;
      const initial = generateInitialTokens();
      console.log('Initializing tokens:', initial.length);
      setTokens(initial);
      setIsReady(true);
    }
  }, []);

  // Frequent price updates with slow visible animations
  useEffect(() => {
    if (!isReady) return;

    // Detect mobile for performance tuning
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    // Very frequent updates: 400ms desktop, 600ms mobile
    const updateInterval = isMobile ? 600 : 400;

    console.log('Starting price updates, interval:', updateInterval);

    const interval = setInterval(() => {
      setTokens((prev) => {
        if (prev.length === 0) return prev;
        
        const updated = [...prev];
        // More tokens updated each cycle: 4-8 on desktop, 3-5 on mobile
        const maxUpdates = isMobile ? 5 : 8;
        const minUpdates = isMobile ? 3 : 4;
        const updateCount = Math.min(
          Math.floor(Math.random() * (maxUpdates - minUpdates + 1)) + minUpdates,
          updated.length
        );
        
        // Track which indices we've updated to avoid duplicates
        const updatedIndices = new Set<number>();
        
        for (let i = 0; i < updateCount; i++) {
          let idx: number;
          do {
            idx = Math.floor(Math.random() * updated.length);
          } while (updatedIndices.has(idx) && updatedIndices.size < updated.length);
          
          updatedIndices.add(idx);
          
          const priceChange = (Math.random() - 0.5) * 0.03; // Larger changes for visibility
          const mcChange = (Math.random() - 0.5) * 0.03;
          const flashState: FlashState = priceChange > 0 ? 'green' : 'red';
          
          updated[idx] = {
            ...updated[idx],
            price: updated[idx].price * (1 + priceChange),
            priceChange: priceChange * 100,
            marketCap: updated[idx].marketCap * (1 + mcChange),
            marketCapChange: mcChange * 100,
            flashState,
          };
        }
        
        return updated;
      });

      // Clear flash states after slow animation completes (1.2s on desktop)
      setTimeout(() => {
        setTokens((prev) =>
          prev.map((t) => ({ ...t, flashState: null }))
        );
      }, isMobile ? 800 : 1200);
    }, updateInterval);

    return () => {
      console.log('Clearing price update interval');
      clearInterval(interval);
    };
  }, [isReady]); // Only depends on isReady flag

  // Add new token every 10 seconds - only run after initialization
  useEffect(() => {
    if (!isReady) return;

    const interval = setInterval(() => {
      setTokens((prev) => {
        // Generate fresh new pair with current timestamp (shows "0s")
        const newToken = generateFreshNewPair();
        // Prepend to list so it appears at top
        return [newToken, ...prev];
      });
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [isReady]);

  // Remove old new-pairs tokens (older than 5 minutes) every 30 seconds
  useEffect(() => {
    if (!isReady) return;

    const FIVE_MINUTES_MS = 5 * 60 * 1000;

    const interval = setInterval(() => {
      setTokens((prev) => {
        const now = Date.now();
        return prev.filter((token) => {
          // Keep all non-new-pairs tokens
          if (token.category !== 'new-pairs') return true;
          // Remove new-pairs older than 5 minutes
          const tokenAge = now - new Date(token.createdAt).getTime();
          return tokenAge < FIVE_MINUTES_MS;
        });
      });
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [isReady]);

  const getTokensByCategory = useCallback(
    (category: Token['category']) => {
      return tokens.filter((t) => t.category === category);
    },
    [tokens]
  );

  return {
    tokens,
    getTokensByCategory,
  };
}
