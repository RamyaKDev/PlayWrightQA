import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.locator('#small-searchterms').click();
  await page.getByRole('heading', { name: 'Welcome to our store' }).click();
  await page.getByRole('link', { name: 'Books' }).first().click();
});