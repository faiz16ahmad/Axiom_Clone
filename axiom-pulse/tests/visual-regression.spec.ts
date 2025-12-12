import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  
  test('Dashboard - Full Page Screenshot', async ({ page }) => {
    await page.goto('/');
    // Wait for tokens to load and animations to settle
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot('dashboard-full.png', {
      fullPage: true,
      maxDiffPixels: 2,
    });
  });

  test('Header Component', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1000);
    const header = page.locator('header');
    await expect(header).toHaveScreenshot('header.png', {
      maxDiffPixels: 2,
    });
  });

  test('SubHeader Component', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1000);
    // SubHeader contains "Pulse" title
    const subHeader = page.locator('h1:has-text("Pulse")').locator('..');
    await expect(subHeader).toHaveScreenshot('subheader.png', {
      maxDiffPixels: 2,
    });
  });

  test('Dashboard Grid - 3 Columns', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(2000);
    // The main dashboard container
    const dashboard = page.locator('.bg-\\[\\#101114\\]').first();
    await expect(dashboard).toHaveScreenshot('dashboard-grid.png', {
      maxDiffPixels: 2,
    });
  });

  test('Footer/GlobalStatusBar Component', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1000);
    const footer = page.locator('footer');
    await expect(footer).toHaveScreenshot('footer.png', {
      maxDiffPixels: 2,
    });
  });

  test('Token Card Component', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(2000);
    // Get first token card
    const tokenCard = page.locator('[class*="token"]').first();
    if (await tokenCard.isVisible()) {
      await expect(tokenCard).toHaveScreenshot('token-card.png', {
        maxDiffPixels: 2,
      });
    }
  });

});

// Responsive tests
test.describe('Responsive Visual Tests', () => {
  
  test('Dashboard at 1920x1080 (Large Monitor)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot('dashboard-1920x1080.png', {
      maxDiffPixels: 2,
    });
  });

  test('Dashboard at 1366x768 (Laptop)', async ({ page }) => {
    await page.setViewportSize({ width: 1366, height: 768 });
    await page.goto('/');
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot('dashboard-1366x768.png', {
      maxDiffPixels: 2,
    });
  });

  test('Dashboard at 1280x720 (Small Laptop)', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot('dashboard-1280x720.png', {
      maxDiffPixels: 2,
    });
  });

});
