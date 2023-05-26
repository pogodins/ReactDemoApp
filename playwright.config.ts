import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'spec',

  // Run all tests in parallel.
  fullyParallel: true,
  // Reporter to use
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    // Collect trace when retrying the failed test.
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
  ],
  // Run your local dev server before starting the tests.
  webServer: {
    command: 'yarn start',
    port: 3000,
    timeout: 10_000,
    reuseExistingServer: !process.env.CI,
  },
});