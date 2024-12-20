import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './src', // Your test directory
    use: {
        browserName: 'chromium',
        headless: false, // Set to true for headless mode
        baseURL: 'https://amazon.sa', // Set a base URL
        trace: 'on'
    },
    reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-report' }],
      ],
});

