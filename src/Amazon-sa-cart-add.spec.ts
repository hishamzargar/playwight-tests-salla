import { test, expect } from '@playwright/test';

test('Add an item to the cart', async ({ page }) => {
    // Navigate to Amazon.sa
    await page.goto('https://www.amazon.sa');

    // Search for a product
    const searchBox = page.locator('#twotabsearchtextbox');
    await searchBox.fill('headphones');
    await searchBox.press('Enter');

    // Click the first product in the search results
    const firstProduct = page.locator('.s-search-results .s-title-instructions-style').first();
    await firstProduct.click();

    // Click the "Add to Cart" button
    const addToCartButton = page.locator('#add-to-cart-button');
    await expect(addToCartButton).toBeVisible();
    await addToCartButton.click();

    // Validate the cart confirmation message
    const cartConfirmation = page.locator('.a-size-medium-plus');
    await expect(cartConfirmation).toContainText(/تمت الإضافة إلى عربة التسوق/); // Arabic text for "Added to Cart"
});
