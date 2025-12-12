# Requirements Document

## Introduction

The Axiom Pulse Token Discovery Table is a high-performance, pixel-perfect dashboard for a high-frequency trading firm. It displays real-time token data across three categorized columns (New Pairs, Final Stretch, Migrated) with simulated WebSocket-style updates. The application follows atomic design principles, uses Next.js 14 with App Router, and implements a sophisticated state management strategy combining React Query and Redux Toolkit.

## Requirements

### Requirement 1: Project Foundation & Tech Stack

**User Story:** As a developer, I want a properly scaffolded Next.js 14 project with all required dependencies, so that I can build the dashboard with the specified tech stack.

#### Acceptance Criteria

1. WHEN the project is initialized THEN the system SHALL use Next.js 14 with App Router and TypeScript in strict mode.
2. WHEN dependencies are installed THEN the system SHALL include @tanstack/react-query, @reduxjs/toolkit, react-redux, lucide-react, clsx, tailwind-merge, and @faker-js/faker.
3. WHEN Shadcn/UI is configured THEN the system SHALL have Dialog and Tooltip components available.
4. WHEN Tailwind CSS is configured THEN the system SHALL support the exact hex colors: #09090b (zinc-950), #22c55e (green-500), #ef4444 (red-500), #3b82f6 (blue-500).

### Requirement 2: Atomic Component Architecture

**User Story:** As a developer, I want components organized by atomic design principles, so that the codebase is maintainable and components are reusable.

#### Acceptance Criteria

1. WHEN the components folder is structured THEN the system SHALL have three subdirectories: atoms, molecules, and organisms.
2. WHEN atoms are created THEN the system SHALL include TokenAvatar, StatusBadge, PriceCell, and IconButton components.
3. WHEN molecules are created THEN the system SHALL include TokenHeader, TokenMetricsGrid, and SocialActionBar components.
4. WHEN organisms are created THEN the system SHALL include TokenCard, ColumnSection, and DashboardBoard components.

### Requirement 3: Token Card Visual Design

**User Story:** As a trader, I want token cards that display all relevant token information in a dense, scannable format, so that I can quickly assess token status.

#### Acceptance Criteria

1. WHEN a TokenCard is rendered THEN the system SHALL display a dark background with hex #09090b and a subtle border.
2. WHEN price values are displayed THEN the system SHALL use #22c55e for positive values and #ef4444 for negative values.
3. WHEN link text is displayed THEN the system SHALL use #3b82f6 for the color.
4. WHEN metrics are displayed THEN the system SHALL use font sizes of 11px/12px for dense tabular layout.
5. WHEN a user hovers over a TokenCard THEN the system SHALL brighten the background to zinc-900.
6. WHEN a user hovers over the token avatar THEN the system SHALL display a camera/snapshot icon overlay.
7. WHEN a user clicks the token avatar THEN the system SHALL open a Dialog modal with the full-size image.
8. WHEN a user hovers over the "Bonding" badge THEN the system SHALL display a red Tooltip showing "Bonding: XX.XX%".
9. WHEN implementing visual design THEN the system SHALL treat attached screenshots as the absolute source of truth for padding, font weights, and spacing.
10. WHEN implementing data rows THEN the system SHALL use tight spacing (gap-1 or gap-0.5) to match the visual density of the reference screenshots exactly.

### Requirement 4: Status Badges

**User Story:** As a trader, I want to see pill-shaped status badges showing key percentages, so that I can quickly identify token characteristics.

#### Acceptance Criteria

1. WHEN a StatusBadge is rendered THEN the system SHALL display as a pill-shaped element.
2. WHEN badge data includes "User" percentage THEN the system SHALL display "User XX%".
3. WHEN badge data includes "Chef" percentage THEN the system SHALL display "Chef XX%".
4. WHEN badge data includes "Bonding" percentage THEN the system SHALL display the bonding curve progress.

### Requirement 5: Real-Time Data Simulation

**User Story:** As a trader, I want to see real-time price and market cap updates, so that I can monitor token performance as it changes.

#### Acceptance Criteria

1. WHEN the useTokenSocketMock hook initializes THEN the system SHALL generate 30 fake tokens using Faker.js (10 per column).
2. WHEN 1000ms elapses THEN the system SHALL update price and marketCap by +/- 0.5% for random tokens.
3. WHEN 5000ms elapses THEN the system SHALL add a new token to the top of "New Pairs" column.
4. WHEN price updates occur THEN the PriceCell component SHALL flash green for increases and red for decreases.
5. WHEN updates occur THEN the system SHALL NOT cause layout shift (CLS).
6. WHEN TokenCard receives unchanged props THEN the system SHALL NOT re-render (using React.memo).

### Requirement 6: Three-Column Dashboard Layout

**User Story:** As a trader, I want tokens organized into three distinct columns by category, so that I can focus on tokens at different lifecycle stages.

#### Acceptance Criteria

1. WHEN the dashboard renders THEN the system SHALL display three columns: "New Pairs", "Final Stretch", and "Migrated".
2. WHEN "New Pairs" column renders THEN the system SHALL sort tokens by createdAt in descending order.
3. WHEN "Final Stretch" column renders THEN the system SHALL sort tokens by bondingCurve in descending order (99% -> 80%).
4. WHEN "Migrated" column renders THEN the system SHALL sort tokens by migratedAt in descending order.
5. WHEN the viewport width is >= 768px THEN the system SHALL display all three columns side-by-side in a grid layout.
6. WHEN the viewport width is < 768px THEN the system SHALL stack the three columns vertically (one on top of another).
7. WHEN the viewport width is as narrow as 320px THEN the system SHALL maintain a fully responsive layout without horizontal overflow or layout breakage.

### Requirement 7: Redux State Management

**User Story:** As a user, I want to switch between presets and sorting methods, so that I can customize my view of the token data.

#### Acceptance Criteria

1. WHEN Redux store is configured THEN the system SHALL have a pulseSlice managing UI state.
2. WHEN activePreset state changes THEN the system SHALL support values 'P1', 'P2', and 'P3'.
3. WHEN sortingMethod state changes THEN the system SHALL update the token display order accordingly.
4. WHEN filter state changes THEN the system SHALL filter the displayed tokens.

### Requirement 8: Token Metrics Display

**User Story:** As a trader, I want to see key metrics (Tx, Vol, Holders) in a grid format, so that I can evaluate token activity at a glance.

#### Acceptance Criteria

1. WHEN TokenMetricsGrid renders THEN the system SHALL display transaction count (Tx).
2. WHEN TokenMetricsGrid renders THEN the system SHALL display volume (Vol).
3. WHEN TokenMetricsGrid renders THEN the system SHALL display holder count (Holders).
4. WHEN metrics are formatted THEN the system SHALL use appropriate abbreviations (K, M, B) for large numbers.

### Requirement 9: Social Action Bar

**User Story:** As a trader, I want quick access to social and utility actions for each token, so that I can research tokens efficiently.

#### Acceptance Criteria

1. WHEN SocialActionBar renders THEN the system SHALL display the token age/time.
2. WHEN SocialActionBar renders THEN the system SHALL include icon buttons for user, globe, and search actions.
3. WHEN an IconButton is clicked THEN the system SHALL trigger the appropriate action handler.

### Requirement 10: Performance Optimization

**User Story:** As a trader, I want the dashboard to perform smoothly with frequent updates, so that I don't experience lag or visual glitches.

#### Acceptance Criteria

1. WHEN multiple tokens update simultaneously THEN the system SHALL only re-render affected TokenCard components.
2. WHEN new tokens are added THEN the system SHALL maintain scroll position and avoid layout shift.
3. WHEN the dashboard loads THEN the system SHALL use React Query for initial data fetching with proper caching.
4. WHEN components render THEN the system SHALL use proper memoization strategies (memo, useMemo, useCallback).
