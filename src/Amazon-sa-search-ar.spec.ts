import { test, expect } from '@playwright/test';

test('Search for a product on Amazon.sa', async ({ page }) => {
    // Navigate to Amazon.sa
    await page.goto('https://www.amazon.sa');

    // Search for a product
    const searchBox = page.locator('#twotabsearchtextbox');
    await searchBox.fill('كمبيوتر محمول');
    await searchBox.press('Enter');

    // Wait for search results to load
    const results = page.locator('.s-search-results');
    await expect(results).toBeVisible();
});


