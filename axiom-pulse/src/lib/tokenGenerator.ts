import { faker } from '@faker-js/faker';
import { Token, TokenCategory } from '@/types/token';

/**
 * Generate a random date within the last N seconds
 */
function getRecentDate(maxSecondsAgo: number): Date {
  const secondsAgo = Math.floor(Math.random() * maxSecondsAgo);
  return new Date(Date.now() - secondsAgo * 1000);
}

/**
 * Generate a mock token with realistic data
 * @param category - Token category
 * @param isNew - If true, sets createdAt to now (for real-time new pairs)
 */
export function generateToken(category: TokenCategory, isNew: boolean = false): Token {
  const isFinalStretch = category === 'final-stretch';
  const isMigrated = category === 'migrated';
  const isNewPair = category === 'new-pairs';

  // Determine createdAt based on category and isNew flag
  let createdAt: Date;
  if (isNewPair && isNew) {
    // Real-time new pair - current timestamp (shows "0s")
    createdAt = new Date();
  } else if (isNewPair) {
    // Initial new pairs - within last 60 seconds (shows "0s" to "59s")
    createdAt = getRecentDate(60);
  } else {
    // Other categories - random recent date
    createdAt = faker.date.recent({ days: 7 });
  }

  const tokenName = faker.finance.currencyName();
  const symbol = faker.finance.currencyCode().slice(0, 4).toUpperCase();
  
  return {
    id: faker.string.uuid(),
    name: tokenName,
    symbol,
    avatarUrl: faker.image.avatar(),
    price: faker.number.float({ min: 0.0001, max: 100, fractionDigits: 6 }),
    priceChange: faker.number.float({ min: -10, max: 10, fractionDigits: 2 }),
    marketCap: faker.number.int({ min: 10000, max: 10000000 }),
    marketCapChange: faker.number.float({ min: -5, max: 5, fractionDigits: 2 }),
    bondingCurve: isFinalStretch
      ? faker.number.int({ min: 80, max: 99 })
      : faker.number.int({ min: 0, max: 79 }),
    userPercentage: faker.number.int({ min: 0, max: 100 }),
    chefPercentage: faker.number.int({ min: 0, max: 100 }),
    transactions: faker.number.int({ min: 10, max: 50000 }),
    volume: faker.number.int({ min: 1000, max: 5000000 }),
    holders: faker.number.int({ min: 10, max: 10000 }),
    createdAt,
    migratedAt: isMigrated ? faker.date.recent({ days: 1 }) : undefined,
    category,
    flashState: null,
    // Twitter/Social data
    twitterHandle: `${symbol.toLowerCase()}${faker.number.int({ min: 1, max: 999 })}`,
    twitterBio: faker.lorem.sentence({ min: 5, max: 12 }),
    twitterFollowers: faker.number.int({ min: 100, max: 500000 }),
    twitterFollowing: faker.number.int({ min: 10, max: 1000 }),
    twitterJoinedDate: faker.date.past({ years: 3 }).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    bannerUrl: `https://picsum.photos/seed/${faker.string.alphanumeric(8)}/400/150`,
  };
}

/**
 * Generate a fresh new pair token with current timestamp
 */
export function generateFreshNewPair(): Token {
  return generateToken('new-pairs', true);
}

/**
 * Generate initial set of tokens (fewer on mobile for faster LCP)
 */
export function generateInitialTokens(): Token[] {
  // Detect mobile - start with fewer tokens for faster initial paint
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const count = isMobile ? 5 : 8; // 5 per category on mobile, 8 on desktop
  
  const newPairs = Array.from({ length: count }, () => generateToken('new-pairs'));
  const finalStretch = Array.from({ length: count }, () => generateToken('final-stretch'));
  const migrated = Array.from({ length: count }, () => generateToken('migrated'));

  return [...newPairs, ...finalStretch, ...migrated];
}
