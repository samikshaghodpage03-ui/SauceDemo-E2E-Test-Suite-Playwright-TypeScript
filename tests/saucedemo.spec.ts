import { test, expect } from '@playwright/test';

test.describe('SauceDemo Login & Checkout', () => {

  test('Login with valid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.waitForURL('**/inventory.html');
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('Login with empty username (negative)', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page.locator('[data-test="error"]'))
      .toContainText('Username is required');
  });

  test('Complete checkout flow', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.waitForURL('**/inventory.html');

    // Add item to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('.shopping_cart_link').click();

    await page.waitForURL('**/cart.html');

    // Checkout
    await page.locator('[data-test="checkout"]').click();
    await page.waitForURL('**/checkout-step-one.html');

    await page.fill('[data-test="firstName"]', 'Test');
    await page.fill('[data-test="lastName"]', 'User');
    await page.fill('[data-test="postalCode"]', '411001');
    await page.locator('[data-test="continue"]').click();

    await page.waitForURL('**/checkout-step-two.html');

    await page.locator('[data-test="finish"]').click();

    // Final assertion (flexible & stable)
    await expect(page.locator('.complete-header'))
      .toHaveText(/thank you for your order/i);
  });

});

//npx playwright test --headed