'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Token, FlashState } from '@/types/token';
import { generateFreshNewPair, generateInitialTokens } from '@/lib/tokenGenerator';

export function useTokenSocketMock() {
  const [tokens, setTokens] = useState<Token[]>([]);
  const isInitialized = useRef(false);

  // Initialize only on client to avoid SSR hydration mismatch
  useEffect(() => {
    if (!isInitialized.current) {
      isInitialized.current = true;
      const initial = generateInitialTokens();
      console.log('Initializing tokens:', initial.length);
      setTokens(initial);
    }
  }, []);

  // Price updates - slower on mobile for better performance
  useEffect(() => {
    if (tokens.length === 0) return;

    // Detect mobile and use slower update interval
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const updateInterval = isMobile ? 2000 : 1000; // 2s on mobile, 1s on desktop

    const interval = setInterval(() => {
      setTokens((prev) => {
        if (prev.length === 0) return prev;
        
        const updated = [...prev];
        // Fewer updates on mobile
        const maxUpdates = isMobile ? 2 : 5;
        const updateCount = Math.min(Math.floor(Math.random() * 3) + 1, maxUpdates, updated.length);
        
        for (let i = 0; i < updateCount; i++) {
          const idx = Math.floor(Math.random() * updated.length);
          const priceChange = (Math.random() - 0.5) * 0.01;
          const mcChange = (Math.random() - 0.5) * 0.01;
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

      // Clear flash states after animation
      setTimeout(() => {
        setTokens((prev) =>
          prev.map((t) => ({ ...t, flashState: null }))
        );
      }, 1000);
    }, updateInterval);

    return () => clearInterval(interval);
  }, [tokens.length > 0]); // Re-run when tokens become available

  // Add new token every 10 seconds - only run after initialization
  useEffect(() => {
    if (tokens.length === 0) return;

    const interval = setInterval(() => {
      setTokens((prev) => {
        // Generate fresh new pair with current timestamp (shows "0s")
        const newToken = generateFreshNewPair();
        // Prepend to list so it appears at top
        return [newToken, ...prev];
      });
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [tokens.length > 0]);

  // Remove old new-pairs tokens (older than 5 minutes) every 30 seconds
  useEffect(() => {
    if (tokens.length === 0) return;

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
  }, [tokens.length > 0]);

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
