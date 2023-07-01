import { test, expect } from '@playwright/experimental-ct-react';
import NoImages from '../../src/components/NoImages';

test('No images error is shown', async ({ mount }) => {
    const noImagesComponent = await mount(<NoImages />);

    const noImagesTitle = noImagesComponent.getByText('No Images Found');
    const tryLater = noImagesComponent.getByText('Please try a different search term');
    await expect(noImagesTitle).toBeVisible();
    await expect(tryLater).toBeVisible();
});