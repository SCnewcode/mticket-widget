import { faker } from "@faker-js/faker";

export class WidgetFridayElements {
  randomFullName = faker.person.fullName();

  randomPhoneNumber = faker.phone.number("380########");

  elements = {
    fridayFirstHeaderAction: () => cy.get(".header__other-item > button"),

    fridayListContainerDisabled: () =>
      cy.get(
        "[class='p-overlaypanel p-component p-ripple-disabled list-container']"
      ),

    goToFridayContactMenu: () => cy.xpath('//ul[@class="menu-list"]//li'),

    fridayContactPageSelector: () => cy.get(".user-profile"),

    userContactsFridayFieldInput: () =>
      cy.get(".user-contacts").find('input[class="p-inputtext p-component"]'),

    userContactsFridayFilledInput: () =>
      cy
        .get(".user-contacts")
        .find('input[class="p-inputtext p-component p-filled"]'),

    toastNificationSuccess: () =>
      cy.get(
        ".Vue-Toastification__toast.Vue-Toastification__toast--success.top-right"
      ),

    toastNificationErrorFriday: () =>
      cy.get(
        ".Vue-Toastification__toast.Vue-Toastification__toast--error.top-right"
      ),

    fridayBtnRegularClass: () =>
      cy.get("[class='p-button p-component regular-btn']"),

    errorBox: () => cy.get(".error-box"),

    cookieConsentBox: () => cy.get("[class='cc-box']"),

    cookieConsentApplyButton: () =>
      cy.get(".cc-btn.cc-btn-accept.cc-btn-accept-all"),

    checkGetCookie: () => cy.getCookie("cookie_consent"),

    checkDocumentBlockClass: () => cy.get("[class='document-block']"),

    documentBlockButton: () =>
      cy.get(".document-block").find('button[type="button"]'),

    documentDialogModal: () =>
      cy.get("[class='p-dialog p-component p-ripple-disabled pdf-viewer']"),

    documentDialogModalClose: () =>
      cy.get(
        "button[class='p-dialog-header-icon p-dialog-header-close p-link']"
      ),

    localizationMenu: () =>
      cy
        .get(".header__other")
        .find('[class="p-button p-component header-btn menu-point"]'),

    localizationChoice: () => cy.xpath('//ul[@class="menu-list"]//li'),

    basketTicketsButton: () =>
      cy.get(".scrollable-element").find('[class="ticket"]'),

    promoCodeFidayButton: () =>
      cy.get(
        "[class='p-button p-component transparent-btn btn-promo-suggest']"
      ),

    promoCodeDialogModal: () =>
      cy.get(
        "[class='p-dialog p-component p-ripple-disabled promocode-modal']"
      ),

    promoCodeInputFind: () =>
      cy
        .get(".promocode-modal__content")
        .find('[class="p-inputtext p-component"]'),

    promoCodeBlockBtn: () =>
      cy
        .get(".promocode-modal__footer")
        .find('[class="p-button p-component regular-btn"]'),

    fridayBtnRegularOrderClass: () =>
      cy.get("[class='p-button p-component regular-btn btn-order-continue']"),

    methodItemNameFind: () =>
      cy.get(".checkout-methods").find('[class="radio-drawer"]'),

    methodItemBookText: () =>
      cy.get(".book-tickets").find('[class="book-tickets__title"]'),

    paymentSystemFind: () => cy.get(".payment-item"),

    ticketDetailsFridayFieldInput: () =>
      cy
        .get(".order-required-info")
        .find('input[class="p-inputtext p-component"]'),

    ticketDetailsFridayFilledInput: () =>
      cy
        .get(".order-required-info")
        .find('input[class="p-inputtext p-component p-filled"]'),

    ticketDetailsFridayOrders: () =>
      cy
        .get(".order-item-tickets__switcher")
        .find('button[class="p-button p-component transparent-btn"]'),

    ticketDetailsOrderEditButton: () =>
      cy
        .get(".order-ticket-personal-info__actions")
        .find(
          'button[class="p-button p-component icon-transparent-btn btn-ticket-info-edit"]'
        ),
  };

  ticketDetailsOrderEditButtonClick() {
    return this.elements.ticketDetailsOrderEditButton();
  }

  ticketDetailsFridayOrdersClick() {
    return this.elements.ticketDetailsFridayOrders();
  }

  firstInputTicketDetails() {
    return this.elements.ticketDetailsFridayFieldInput();
  }

  firstInputFilledTicketDetails() {
    return this.elements.ticketDetailsFridayFilledInput();
  }

  findFridayPaymentSystem() {
    return this.elements.paymentSystemFind();
  }

  methodItemBookTextFriday() {
    return this.elements.methodItemBookText();
  }

  methodItemBookFriday() {
    return this.elements.methodItemNameFind();
  }

  btnFridayRegularOrderClick() {
    this.elements.fridayBtnRegularOrderClass().click();
  }

  toastNificationFridaySuccess() {
    return this.elements.toastNificationSuccess();
  }

  promoCodeFridayBtnClick() {
    return this.elements.promoCodeBlockBtn().click();
  }

  promoCodeInputFriday() {
    return this.elements.promoCodeInputFind();
  }

  promoCodeFidayButtonClick() {
    this.elements.promoCodeFidayButton().click();
  }

  promoCodeDialogModalFriday() {
    return this.elements.promoCodeDialogModal();
  }

  basketTicketsFridayButtonClick() {
    return this.elements.basketTicketsButton();
  }

  localizationFridayMenuClick() {
    this.elements.localizationMenu().eq(1).click();
  }

  localizationFridayChoiceClick() {
    return this.elements.localizationChoice();
  }

  checkFridayDocumentDialogModal() {
    this.elements.documentDialogModal().should("be.visible");
  }

  clickFridayDialogModalClose() {
    this.elements.documentDialogModalClose().click();
  }

  visibleFridayDocumentBlock() {
    this.elements.checkDocumentBlockClass().should("be.visible");
  }

  documentBlockFridayButtonClick() {
    return this.elements.documentBlockButton();
  }

  checkCookieConsentBoxVisible() {
    this.elements.cookieConsentBox().should("be.visible");
  }

  cookieConsentClick() {
    this.elements.cookieConsentApplyButton().click();
  }

  checkCookieConsentBoxNotVisible() {
    this.elements.cookieConsentBox().should("not.be.visible");
  }

  checkGetCookieVisible() {
    this.elements
      .checkGetCookie()
      .should(
        "have.property",
        "value",
        '{"status":"accepted","acceptedCategories":["adConsentGranted","analyticsConsentGranted","functionalityConsentGranted","personalizationConsentGranted","securityConsentGranted","adUserDataGranted","adPersonalizationGranted"]}'
      );
  }

  checkErroBoxTextVisibleFriday() {
    return this.elements.errorBox();
  }

  btnFridayRegularClick() {
    this.elements.fridayBtnRegularClass().click();
  }

  checkErrorNotificationOnContactPage() {
    return this.elements.toastNificationErrorFriday();
  }

  fridayFirstHeaderActionClick() {
    return this.elements.fridayFirstHeaderAction();
  }

  clickOnFridayMenuInList() {
    return this.elements.goToFridayContactMenu();
  }

  beVisibleFridayElementList() {
    return this.elements.fridayListContainerDisabled();
  }

  checkBeVisibleFridayContactPage() {
    return this.elements.fridayContactPageSelector();
  }

  firstInputTypeTestNegative() {
    return this.elements.userContactsFridayFieldInput();
  }

  firstInputFilledTypeTest() {
    return this.elements.userContactsFridayFilledInput();
  }
}
