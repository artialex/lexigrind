import { expect, test } from '@playwright/test';

test('should add new sources', async ({ page }) => {
  await page.goto('http://localhost:5173/lexigrind/#/sources');

  await expect(page).toHaveTitle(/Lexigrind/);

  const root = page.locator('#root');

  await expect(root).toHaveText(/No sources added/);

  await root.getByText('Add new source').click();

  await root.getByLabel('Source Title').fill('Some title');
  await root.getByLabel('Author').fill('Me');
  await root.getByLabel('Fragment Title').fill('Fragment Title');
  await root.getByLabel('Fragment Content').fill('Fragment Content');

  await root.getByRole('button', { name: 'Save' }).click();

  await expect(root.getByTestId('source')).toBeVisible();
});
