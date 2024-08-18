import { Page, expect } from "@playwright/test";
import logger from "../utils/LoggerUtil";
//import logger from "../utils/LoggerUtil";
//import ContactPage from "./ContactPage";

export default class HomePage {
  private readonly productTitleLocator = "//div[@class='product_label']";
  private readonly contactsLinkLocator = "Contacts";

  constructor(private page: Page) {}

  async expectServiceTitleToBeVisible() {
    await expect(this.page.locator(this.productTitleLocator)).toBeVisible({
      timeout: 15000,
    }).catch((error) => {
      logger.error(`Error clicking login button: ${error}`);
      throw error; // rethrow the error if needed
    }).then(()=>logger.info("Product Title is visible"));
  }


//   async navigateToContactTab(){

//     await expect(this.page.getByRole('link', { name: this.contactsLinkLocator })).toBeVisible();
//     //logger.info("Contacts Tab is visible")
//     await this.page.getByRole('link', { name: this.contactsLinkLocator }).click();
//     //logger.info("Contacts Tab is clicked")
//     return new ContactPage(this.page);
    
//   }

//   async navigateToCaseTab(){

//     await expect(this.page.getByRole('link', { name: this.contactsLinkLocator })).toBeVisible();
//     //logger.info("Contacts Tab is visible")
//     await this.page.getByRole('link', { name: this.contactsLinkLocator }).click();
//     //logger.info("Contacts Tab is clicked")
//     return new ContactPage(this.page);
    
//   }
}