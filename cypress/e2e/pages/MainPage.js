class MainPage {
  // Locators
  getMenuItems() {
    return cy.get("#ctl00_menu > li");
  }
  getCheckAllButton() {
    return cy.get("#ctl00_MainContent_btnCheckAll");
  }
  getUncheckAllButton() {
    return cy.get("#ctl00_MainContent_btnUncheckAll");
  }
  getAllCheckBoxRadioButtons() {
    return cy.get('[type="checkbox"]');
  }
  getDeleteSelectedButton() {
    return cy.get("#ctl00_MainContent_btnDelete");
  }
  getNoOrdersMessage() {
    return cy.get("#ctl00_MainContent_orderMessage");
  }
  getOrderButton() {
    return cy.get("#ctl00_menu > li ").eq(2);
  }
  selectProduct() {
    return cy.get("#ctl00_MainContent_fmwOrder_ddlProduct");
  }
  getAddressInfo() {
    return cy.get("ol > li > input");
  }
  getAllRadioButtons(whatType) {
    return cy.get('[type="radio"]').eq(whatType);
  }
  getProcessButton() {
    return cy.get("#ctl00_MainContent_fmwOrder_InsertButton");
  }
  getViewAllOrders() {
    return cy.get("#ctl00_menu > li").eq(0);
  }
  // Methods

  enterQuantity(quantity) {
    this.getAddressInfo().eq(0).type(quantity);
  }
  enterDiscount(discountPercentage) {
    this.getAddressInfo().eq(2).type(discountPercentage);
  }
  enterCustomerName(name) {
    this.getAddressInfo().eq(5).type(name);
  }
  enterStreetAddress(street) {
    this.getAddressInfo().eq(6).type(street);
  }
  enterCity(city) {
    this.getAddressInfo().eq(7).type(city);
  }
  enterState(state) {
    this.getAddressInfo().eq(8).type(state);
  }
  enterZipCode(zip) {
    this.getAddressInfo().eq(9).type(zip);
  }
  enterCardNumber(cardNumber) {
    this.getAddressInfo().eq(10).type(cardNumber);
  }
  enterExpireDate(expireDate) {
    this.getAddressInfo().eq(11).type(expireDate);
  }
}

export default MainPage;
