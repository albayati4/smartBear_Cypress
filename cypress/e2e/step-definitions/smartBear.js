import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

const loginPage = new LoginPage();
const mainPage = new MainPage();

Given(/^user is on "([^"]*)"$/, (url) => {
  loginPage.goToWebsite(url);
});

When(/^user enters username as "([^"]*)"$/, (username) => {
  loginPage.getUserNameInputBox().type(username);
});

When(/^user enters password as "([^"]*)"$/, (password) => {
  loginPage.getPasswordInputBox().type(password);
});

When(/^user clicks on "Login" button$/, () => {
  loginPage.clickOnLoginButton();
});

Then(/^user should see "([^"]*)" message$/, (error) => {
  loginPage.getErrorMessage(error);
});

Then(/^user should be routed to "([^"]*)"$/, (url) => {
  cy.log(url);
  loginPage.getRedirectedLink().should("eq", url);
});

Then(/^validate below menu items are displayed$/, (dataTable) => {
  const menuItems = dataTable.rawTable.flat();
  mainPage.getMenuItems().each(($el, index) => {
    cy.wrap($el).should("have.text", menuItems[index]);
  });
});

When(/^user clicks on "Check All" button$/, () => {
  mainPage.getCheckAllButton().click();
});

Then(/^all rows should be checked$/, () => {
  mainPage.getAllCheckBoxRadioButtons().each(($el) => {
    cy.wrap($el).should("be.checked");
  });
});

When(/^user clicks on "Uncheck All" button$/, () => {
  mainPage.getUncheckAllButton().click();
});

Then(/^all rows should be unchecked$/, () => {
  mainPage.getAllCheckBoxRadioButtons().each(($el) => {
    cy.wrap($el).should("not.be.checked");
  });
});

Then(/^user clicks on "Delete Selected" button$/, () => {
  mainPage.getDeleteSelectedButton().click();
});

Then(/^validate all orders are deleted from the List of All Orders$/, () => {
  mainPage.getAllCheckBoxRadioButtons().should("have.length", 0);
});

Then(/^validate user sees "([^"]*)" message$/, (message) => {
  mainPage.getNoOrdersMessage().should("contain", message);
});

When(/^user clicks on "Order" menu item$/, () => {
  mainPage.getOrderButton().click();
});

Then(/^user enters all product information$/, () => {
  mainPage.selectProduct().select("FamilyAlbum");
  mainPage.enterQuantity("5");
});

Then(/^user enters all address information$/, () => {
  mainPage.enterCustomerName("Abe");
  mainPage.enterState("120 S Main St");
  mainPage.enterCity("Chicago");
  mainPage.enterState("Il");
  mainPage.enterZipCode("60188");
});

Then(/^user enters all payment information$/, () => {
  mainPage.getAllRadioButtons(0);
  mainPage.enterCardNumber("123454328194831");
  mainPage.enterExpireDate("05/28");
});

Then(/^user clicks on "Process" button$/, () => {
  mainPage.getProcessButton().click();
});

Then(/^user clicks on "View all orders" menu item$/, () => {
  mainPage.getViewAllOrders().click();
});

Then(/^validate all information entered displayed correct with the order$/, () => {
  mainPage.getAllCheckBoxRadioButtons().should("have.length", 8);
});
