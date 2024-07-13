import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test('login test', async ({ page }) => {
 // await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);

  const loginPage= new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.fillUsername("larry@company.sandbox");
  await loginPage.fillPassword("P@55w0rd");
  const homePage = await loginPage.clickLoginButton();
  await homePage.expectServiceTitleToBeVisible();
  
});

