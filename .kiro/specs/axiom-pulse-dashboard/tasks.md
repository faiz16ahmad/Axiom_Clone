# Implementation Plan

- [x] 1. Project Setup and Configuration


  - [x] 1.1 Initialize Next.js 14 project with TypeScript


    - Run `npx create-next-app@14` with App Router and TypeScript strict mode
    - Configure tsconfig.json with strict: true
    - _Requirements: 1.1_

  - [x] 1.2 Install required dependencies


    - Install @tanstack/react-query, @reduxjs/toolkit, react-redux, lucide-react, clsx, tailwind-merge, @faker-js/faker
    - _Requirements: 1.2_

  - [x] 1.3 Configure Shadcn/UI


    - Initialize Shadcn with `npx shadcn@latest init`
    - Add Dialog and Tooltip components
    - _Requirements: 1.3_



  - [x] 1.4 Configure Tailwind CSS with custom colors





    - Add exact hex colors to tailwind.config.ts: #09090b, #22c55e, #ef4444, #3b82f6, #71717a
    - _Requirements: 1.4_



- [ ] 2. Core Types and Utilities
  - [x] 2.1 Create TypeScript type definitions


    - Create src/types/token.ts with Token, PresetType, SortMethod, PulseState interfaces




    - _Requirements: 2.1, 3.1_

  - [ ] 2.2 Create utility functions
    - Create src/lib/utils.ts with cn() helper using clsx and tailwind-merge


    - Create src/lib/formatters.ts with number formatting (K, M, B suffixes) and currency formatting
    - _Requirements: 8.4_



  - [x] 2.3 Create token generator





    - Create src/lib/tokenGenerator.ts using Faker.js to generate mock Token objects
    - Implement generateToken(category) function with appropriate defaults per category
    - _Requirements: 5.1_



- [ ] 3. State Management Setup
  - [ ] 3.1 Configure Redux store
    - Create src/store/index.ts with configureStore
    - Create src/store/slices/pulseSlice.ts with activePreset, sortingMethod, filters state


    - Implement setActivePreset, setSortingMethod, setFilters reducers
    - _Requirements: 7.1, 7.2, 7.3, 7.4_

  - [x] 3.2 Create Redux provider


    - Create src/store/provider.tsx wrapping children with Redux Provider




    - _Requirements: 7.1_

  - [ ] 3.3 Configure React Query provider
    - Create src/lib/queryClient.ts with QueryClient configuration


    - Create providers wrapper component combining Redux and React Query
    - _Requirements: 10.3_

- [ ] 4. Atom Components
  - [x] 4.1 Create TokenAvatar component


    - Create src/components/atoms/TokenAvatar.tsx
    - Implement 32x32 circular image with camera overlay on hover




    - Integrate Shadcn Dialog for modal on click

    - _Requirements: 2.2, 3.6, 3.7_

  - [ ] 4.2 Create StatusBadge component
    - Create src/components/atoms/StatusBadge.tsx
    - Implement pill-shaped badge with label and percentage

    - Add Shadcn Tooltip for bonding variant showing "Bonding: XX.XX%"

    - _Requirements: 2.2, 4.1, 4.2, 4.3, 4.4, 3.8_

  - [ ] 4.3 Create PriceCell component
    - Create src/components/atoms/PriceCell.tsx

    - Implement color coding: #22c55e for positive, #ef4444 for negative

    - Add flash animation (200ms background pulse) via flashState prop
    - _Requirements: 2.2, 3.2, 5.4_





  - [ ] 4.4 Create IconButton component
    - Create src/components/atoms/IconButton.tsx
    - Implement Lucide icon wrapper with hover state and optional tooltip
    - _Requirements: 2.2, 9.3_





- [ ] 5. Molecule Components
  - [x] 5.1 Create TokenHeader component

    - Create src/components/molecules/TokenHeader.tsx

    - Combine TokenAvatar + name/symbol + StatusBadges in horizontal layout
    - Use tight spacing (gap-1)
    - _Requirements: 2.3, 3.10_

  - [ ] 5.2 Create TokenMetricsGrid component
    - Create src/components/molecules/TokenMetricsGrid.tsx
    - Implement 2-column grid with Price, MC, Tx, Vol, Holders







    - Use muted color (#71717a) for labels, 11px/12px font sizes
    - Integrate PriceCell for price and marketCap with flash support


    - _Requirements: 2.3, 3.4, 8.1, 8.2, 8.3, 8.4_

  - [ ] 5.3 Create SocialActionBar component
    - Create src/components/molecules/SocialActionBar.tsx
    - Display relative time and IconButtons for User, Globe, Search
    - _Requirements: 2.3, 9.1, 9.2_

- [ ] 6. Organism Components
  - [ ] 6.1 Create TokenCard component
    - Create src/components/organisms/TokenCard.tsx
    - Combine TokenHeader + TokenMetricsGrid + SocialActionBar
    - Apply background #09090b, hover #18181b, border zinc-800
    - Use fixed height to prevent layout shift
    - Wrap with React.memo for performance
    - _Requirements: 2.4, 3.1, 3.5, 5.5, 5.6, 10.1, 10.4_

  - [ ] 6.2 Create ColumnSection component
    - Create src/components/organisms/ColumnSection.tsx
    - Implement column header with title and token count badge
    - Add scrollable token list with max-height and overflow-y-auto
    - Implement sorting: New Pairs by createdAt desc, Final Stretch by bondingCurve desc, Migrated by migratedAt desc
    - _Requirements: 2.4, 6.2, 6.3, 6.4_

  - [ ] 6.3 Create DashboardBoard component
    - Create src/components/organisms/DashboardBoard.tsx
    - Implement 3-column CSS Grid for desktop (>=768px)
    - Implement vertical stack for mobile (<768px)
    - Ensure responsive down to 320px without overflow
    - _Requirements: 2.4, 6.1, 6.5, 6.6, 6.7_

- [ ] 7. Real-Time Simulation Hook
  - [ ] 7.1 Create useTokenSocketMock hook
    - Create src/hooks/useTokenSocketMock.ts
    - Initialize with 30 tokens (10 per category) using generateToken
    - Implement 1000ms interval for price/marketCap updates (+/- 0.5%)
    - Implement 5000ms interval for adding new token to New Pairs
    - Set flashState on updates, clear after 200ms
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ] 8. App Integration
  - [ ] 8.1 Create app layout with providers
    - Update src/app/layout.tsx to wrap with combined providers (Redux + React Query)
    - Apply global styles and fonts
    - _Requirements: 1.1_

  - [ ] 8.2 Create main dashboard page
    - Update src/app/page.tsx to render DashboardBoard
    - Connect useTokenSocketMock hook
    - Pass tokens to DashboardBoard
    - _Requirements: 6.1_

  - [ ] 8.3 Add global styles
    - Update src/app/globals.css with base dark theme styles
    - Add flash animation keyframes for PriceCell
    - _Requirements: 3.1, 3.2_

- [ ] 9. Performance Optimization
  - [ ] 9.1 Implement memoization
    - Add React.memo to TokenCard with custom comparison
    - Add useMemo for filtered/sorted token lists in ColumnSection
    - Add useCallback for event handlers
    - _Requirements: 10.1, 10.4_

  - [ ] 9.2 Prevent layout shift
    - Ensure fixed heights on TokenCard rows
    - Maintain scroll position when new tokens added
    - _Requirements: 5.5, 10.2_

- [ ] 10. Testing
  - [ ] 10.1 Write unit tests for utilities
    - Test formatters.ts number abbreviation (K, M, B)
    - Test tokenGenerator.ts produces valid Token objects
    - _Requirements: 8.4, 5.1_

  - [ ] 10.2 Write component tests
    - Test TokenCard renders all required elements
    - Test PriceCell displays correct colors
    - Test StatusBadge tooltip appears on hover
    - Test ColumnSection sorting logic
    - _Requirements: 3.2, 3.8, 6.2, 6.3, 6.4_

  - [ ] 10.3 Write integration tests
    - Test useTokenSocketMock updates at correct intervals
    - Test flash states appear and clear correctly
    - Test responsive layout at 320px, 768px, 1024px
    - _Requirements: 5.2, 5.3, 5.4, 6.5, 6.6, 6.7_
