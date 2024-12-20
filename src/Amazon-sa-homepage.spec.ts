import { test, expect, chromium } from '@playwright/test';

test('Amazon saudi homepage test', async () => {
    // Launch the browser in headful mode for debugging
    const browser = await chromium.launch({ headless: false });

    // Create a new browser context with necessary settings
    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        viewport: { width: 1280, height: 720 },
        locale: 'ar-SA', // Set locale for the context
    });

    // Open a new page in the context
    const page = await context.newPage();

    // Navigate to Amazon's homepage
    await page.goto('https://www.amazon.sa', { waitUntil: 'domcontentloaded' });

    // Add a delay to mimic human-like behavior
    await page.waitForTimeout(2000);

    // Validate the title of the Amazon homepage
    await expect(page).toHaveTitle(/أمازون/); // Amazon in Arabic

    // Close the browser context
    await context.close();
});
