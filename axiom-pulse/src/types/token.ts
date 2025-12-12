export interface Token {
  id: string;
  name: string;
  symbol: string;
  avatarUrl: string;
  price: number;
  priceChange: number;
  marketCap: number;
  marketCapChange: number;
  bondingCurve: number;
  userPercentage: number;
  chefPercentage: number;
  transactions: number;
  volume: number;
  holders: number;
  createdAt: Date;
  migratedAt?: Date;
  category: TokenCategory;
  flashState?: FlashState;
}

export type TokenCategory = 'new-pairs' | 'final-stretch' | 'migrated';
export type FlashState = 'green' | 'red' | null;
export type PresetType = 'P1' | 'P2' | 'P3';
export type SortMethod = 'time' | 'marketCap' | 'volume' | 'holders';

export interface PulseState {
  activePreset: PresetType;
  sortingMethod: SortMethod;
  filters: TokenFilters;
}

export interface TokenFilters {
  minMarketCap?: number;
  maxMarketCap?: number;
  minHolders?: number;
}
