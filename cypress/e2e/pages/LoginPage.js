class LoginPage {
  // Locators
  goToWebsite(url) {
    return cy.visit(url);
  }
  getUserNameInputBox() {
    return cy.get("#ctl00_MainContent_username");
  }
  getPasswordInputBox() {
    return cy.get("#ctl00_MainContent_password");
  }
  getErrorMessage() {
    return cy.get("#ctl00_MainContent_status");
  }
  getRedirectedLink() {
    return cy.url();
  }

  // Methods
  clickOnLoginButton() {
    return cy.get("#ctl00_MainContent_login_button").click();
  }
}

export default LoginPage;
