
import { test, expect } from '@playwright/test';

test('Can navigate to mountain pictures', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('tab.mountain').getByRole('link').click();

    expect(page.getByTestId('mountainHeader')).toBeVisible();
});