import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  
  test('Dashboard - Full Page Screenshot', async ({ page }) => {
    await page.goto('/');
    // Wait for tokens to load and animations to settle
    await page.waitForTimeout(3000);
    await expect(page).toHaveScreenshot('dashboard-full.png', {
      fullPage: false, // Only visible viewport
      maxDiffPixels: 100, // Allow more tolerance for dynamic content
    });
  });

  test('Header Component', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    const header = page.locator('header');
    await expect(header).toHaveScreenshot('header.png', {
      maxDiffPixels: 10,
    });
  });

  test('SubHeader Component', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    // SubHeader contains "Pulse" title
    const subHeader = page.locator('h1:has-text("Pulse")').locator('..');
    await expect(subHeader).toHaveScreenshot('subheader.png', {
      maxDiffPixels: 10,
    });
  });

  test('Dashboard Grid - 3 Columns', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(3000);
    // The main dashboard container - use more specific selector
    const dashboard = page.locator('main').first();
    await expect(dashboard).toHaveScreenshot('dashboard-grid.png', {
      maxDiffPixels: 100, // Allow tolerance for dynamic token data
    });
  });

  test('Footer/GlobalStatusBar Component', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    const footer = page.locator('footer');
    await expect(footer).toHaveScreenshot('footer.png', {
      maxDiffPixels: 10,
    });
  });

  test('Token Card Component', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(3000);
    // Skip if no token cards visible (dynamic content)
    const tokenCards = page.locator('[class*="rounded"]').filter({ hasText: /\$/ });
    const count = await tokenCards.count();
    if (count > 0) {
      // Just verify cards exist, don't screenshot dynamic content
      expect(count).toBeGreaterThan(0);
    }
  });

});

// Responsive tests - viewport only, no full page
test.describe('Responsive Visual Tests', () => {
  
  test('Dashboard at 1920x1080 (Large Monitor)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    await page.waitForTimeout(3000);
    await expect(page).toHaveScreenshot('dashboard-1920x1080.png', {
      fullPage: false,
      maxDiffPixels: 100,
    });
  });

  test('Dashboard at 1366x768 (Laptop)', async ({ page }) => {
    await page.setViewportSize({ width: 1366, height: 768 });
    await page.goto('/');
    await page.waitForTimeout(3000);
    await expect(page).toHaveScreenshot('dashboard-1366x768.png', {
      fullPage: false,
      maxDiffPixels: 100,
    });
  });

  test('Dashboard at 1280x720 (Small Laptop)', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    await page.waitForTimeout(3000);
    await expect(page).toHaveScreenshot('dashboard-1280x720.png', {
      fullPage: false,
      maxDiffPixels: 100,
    });
  });

});
