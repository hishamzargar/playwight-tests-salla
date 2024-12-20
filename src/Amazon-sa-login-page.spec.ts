import { test, expect } from '@playwright/test';

test('Access the login page', async ({ page }) => {
    // Navigate to Amazon.sa
    await page.goto('https://www.amazon.sa', { waitUntil: 'domcontentloaded' });

    // Click on the "Sign-In" button
    const signInButton = page.locator('#nav-link-accountList');
    await expect(signInButton).toBeVisible();
    await signInButton.click();

    // Wait for the navigation or the presence of an element unique to the login page
    await Promise.race([
        page.waitForURL(/\/ap\/signin/, { timeout: 15000 }), // Wait for the URL to change
        page.waitForSelector('#ap_email', { timeout: 15000 }) // Wait for email input to appear
    ]);

    // Validate the login page title
    await expect(page).toHaveTitle(/تسجيل الدخول/);

    // Validate Arabic text
    const arabicText = page.locator('text=البريد الإلكتروني أو رقم الهاتف المحمول');
    await expect(arabicText).toBeVisible();

    // Check for the email input field
    const emailField = page.locator('#ap_email');
    await expect(emailField).toBeVisible();

    // Screenshot the login page
    await page.screenshot({ path: 'login-page.png' });

});
