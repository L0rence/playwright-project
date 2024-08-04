import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import { decrypt, encrypt } from '../utils/CryptojsUtil';
import { encryptEnvFile } from '../utils/EncryptEnvFile';

test('login test', async ({ page }) => {


  const loginPage= new LoginPage(page);
  await loginPage.navigateToLoginPage();
  try {
     await loginPage.fillUsername(process.env.userID!);
     await loginPage.fillPassword(process.env.pass!);
   // await loginPage.fillUsername(decrypt(process.env.userID!));
   // await loginPage.fillPassword(decrypt(process.env.pass!));
    // Additional login actions
  } catch (error) {
    console.error('Error filling username or password:', error);
  }
  
  const homePage = await loginPage.clickLoginButton();
  await homePage.expectServiceTitleToBeVisible();
  
});

test('login loff', async ({ page }) => {
 // console.log(process.env.NODE_ENV);
 // console.log(process.env.userID);
 // console.log(process.env.pass);
  // const plaintext = "larry@company.sandbox";
  // const encryptedText = encrypt(plaintext);
  // console.log('SALT:', process.env.SALT);
  // console.log('Encrypted:',encryptedText);
  // const decryptedText = decrypt(encryptedText);
  // console.log('Decrypted:', decryptedText);
  // encryptEnvFile();
  // console.log(decrypt('xxx'))
   
 });


