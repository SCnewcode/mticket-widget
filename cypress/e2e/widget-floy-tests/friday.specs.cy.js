/// <reference types="cypress" />

import "cypress-mailosaur";

import { faker } from "@faker-js/faker";

import { WidgetFridayElements } from "../../pages/FridayWidgetPageElements";

let globalOrderNumber;

let globalTelephoneNumber;

let globalTelephoneNumberEdit;

const WidgetFridayElementsObj = new WidgetFridayElements();

describe("it should be check widget contact page and index localization", () => {
  const randomSessionNumber = faker.datatype.number();

  const randomFullNameProd = faker.person.fullName();

  const randomFullName = faker.person.fullName();

  const randomPhoneNumber = faker.phone.number("380########");

  let getNewMail;

  beforeEach(() => {
    cy.FridayLoginWithUITest(randomSessionNumber);
    // cy.visit(Cypress.env("developmentFriday").baseUrl + "/widget/4/1");
  });

  it("it should be check go to friday widget contact page", () => {
    cy.visit(Cypress.env("developmentFriday").baseUrl + "/widget/4/1");

    WidgetFridayElementsObj.fridayFirstHeaderActionClick().click();

    cy.wait(1000);

    WidgetFridayElementsObj.beVisibleFridayElementList().should("be.visible");

    WidgetFridayElementsObj.clickOnFridayMenuInList().eq(4).click();

    cy.wait(2000);

    WidgetFridayElementsObj.checkBeVisibleFridayContactPage().should(
      "be.visible"
    );
  });

  it("it should be check cookie consent", () => {
    WidgetFridayElementsObj.checkGetCookieVisible();
  });

  it("it should be check to add a widget contact info", () => {
    cy.visit(
      Cypress.env("developmentFriday").baseUrl + "/widget/4/1/user/index"
    );

    WidgetFridayElementsObj.firstInputTypeTestNegative().first().type("te");

    cy.wait(2000);

    WidgetFridayElementsObj.firstInputTypeTestNegative()
      .eq(0)
      .type(randomPhoneNumber);

    WidgetFridayElementsObj.btnFridayRegularClick();

    cy.wait(1000);

    WidgetFridayElementsObj.checkErrorNotificationOnContactPage()
      .should("be.visible")
      .and("contain", "The name must be at least 3 characters.");

    WidgetFridayElementsObj.firstInputFilledTypeTest().eq(2).clear();

    WidgetFridayElementsObj.firstInputTypeTestNegative().eq(0).type("380986");

    WidgetFridayElementsObj.btnFridayRegularClick();

    cy.wait(1000);

    WidgetFridayElementsObj.checkErroBoxTextVisibleFriday()
      .should("be.visible")
      .and("contain", "Phone format is invalid.");

    WidgetFridayElementsObj.firstInputFilledTypeTest().first().clear();

    WidgetFridayElementsObj.firstInputTypeTestNegative()
      .first()
      .type(randomFullName);

    WidgetFridayElementsObj.firstInputFilledTypeTest().eq(2).clear();

    WidgetFridayElementsObj.firstInputTypeTestNegative()
      .eq(0)
      .type(randomPhoneNumber);

    cy.wait(1000);

    WidgetFridayElementsObj.btnFridayRegularClick();
  });

  it("it should be check widget document block", () => {
    cy.visit(
      Cypress.env("developmentFriday").baseUrl + "/widget/4/1/user/index"
    );

    cy.wait(1000);

    WidgetFridayElementsObj.visibleFridayDocumentBlock();

    WidgetFridayElementsObj.documentBlockFridayButtonClick().eq(0).click();

    cy.wait(1000);

    WidgetFridayElementsObj.checkFridayDocumentDialogModal();

    WidgetFridayElementsObj.clickFridayDialogModalClose();

    WidgetFridayElementsObj.documentBlockFridayButtonClick().eq(1).click();

    cy.wait(1000);

    WidgetFridayElementsObj.checkFridayDocumentDialogModal();

    WidgetFridayElementsObj.clickFridayDialogModalClose();
  });

  it("it should be check localization on widget contact page", () => {
    cy.visit(
      Cypress.env("developmentFriday").baseUrl + "/widget/4/1/user/index"
    );

    WidgetFridayElementsObj.localizationFridayMenuClick();

    WidgetFridayElementsObj.localizationFridayChoiceClick().eq(6).click();

    cy.get("[class='p-button p-component regular-btn']")
      .contains("Ratować")
      .should("be.visible");

    if (
      cy
        .get("[class='p-button p-component regular-btn']")
        .should("have.text", "Ratować")
    ) {
      cy.log("POL localization works");
    }

    WidgetFridayElementsObj.localizationFridayMenuClick();

    WidgetFridayElementsObj.localizationFridayChoiceClick().eq(11).click();

    cy.get("[class='p-button p-component regular-btn']")
      .contains("Speichern")
      .should("be.visible");

    if (
      cy
        .get("[class='p-button p-component regular-btn']")
        .should("have.text", "Speichern")
    ) {
      cy.log("DE localization works");
    }

    WidgetFridayElementsObj.localizationFridayMenuClick();

    WidgetFridayElementsObj.localizationFridayChoiceClick().eq(3).click();

    cy.get("[class='p-button p-component regular-btn']")
      .contains("Save")
      .should("be.visible");

    if (
      cy
        .get("[class='p-button p-component regular-btn']")
        .should("have.text", "Save")
    ) {
      cy.log("EN localization works");
    }
  });

  it("it should be check localization on widget index page", () => {
    cy.visit(Cypress.env("developmentFriday").baseUrl + "/widget/4/1");

    WidgetFridayElementsObj.localizationFridayMenuClick();

    WidgetFridayElementsObj.localizationFridayChoiceClick().eq(3).click();

    cy.get(
      "[class='p-button p-component regular-btn event-item__action_active']"
    )
      .first()
      .contains("Kup bilety")
      .should("be.visible");

    if (
      cy
        .get(
          "[class='p-button p-component regular-btn event-item__action_active']"
        )
        .first()
        .should("have.text", "Kup bilety")
    ) {
      cy.log("POL localization works");
    }

    WidgetFridayElementsObj.localizationFridayMenuClick();

    WidgetFridayElementsObj.localizationFridayChoiceClick().eq(8).click();

    cy.get(
      "[class='p-button p-component regular-btn event-item__action_active']"
    )
      .first()
      .contains("Tickets kaufen")
      .should("be.visible");

    if (
      cy
        .get(
          "[class='p-button p-component regular-btn event-item__action_active']"
        )
        .first()
        .should("have.text", "Tickets kaufen")
    ) {
      cy.log("DE localization works");
    }

    WidgetFridayElementsObj.localizationFridayMenuClick();

    WidgetFridayElementsObj.localizationFridayChoiceClick().eq(0).click();

    cy.get(
      "[class='p-button p-component regular-btn event-item__action_active']"
    )
      .first()
      .contains("Buy tickets")
      .should("be.visible");

    if (
      cy
        .get(
          "[class='p-button p-component regular-btn event-item__action_active']"
        )
        .first()
        .should("have.text", "Buy tickets")
    ) {
      cy.log("EN localization works");
    }
  });

  it("it should be choose random active event on index page", () => {
    cy.visit(Cypress.env("developmentFriday").baseUrl + "/widget/4/1");
    cy.get(".event-list__list").clickRandomClickableLinkInList();
  });

  it("it should be lock ticket in active event", () => {
    cy.visit(Cypress.env("developmentFriday").baseUrl + "/widget/4/1/472");
    cy.wait(1000);

    // Check if element with specific class exists
    cy.get(".schema").then(($element) => {
      if ($element.hasClass("sectors-list")) {
        cy.get(".svg-pan-zoom_viewport")
          .find(".sector.enabled.has-info")
          .not(".disabled")
          .then(($elements) => {
            const randomIndex = Math.floor(Math.random() * $elements.length);
            const randomElement = $elements[randomIndex];
            cy.wrap(randomElement, { force: true }).click();
          });

        cy.get(".svg-pan-zoom_viewport")
          .find(".place")
          .not(".disabled")

          .then(($elements) => {
            const randomIndex = Math.floor(Math.random() * $elements.length);
            const randomElement = $elements[randomIndex];
            cy.wrap(randomElement).click();
          });
      } else {
        cy.get("body").then((body) => {
          if (!body.find('div[data-pc-name="dialog"]')) {
            cy.get(".service-message-actions")
              .find('button[type="button"]')
              .click();

            cy.get(".svg-pan-zoom_viewport")
              .find(".place")
              .not(".disabled")
              .then(($elements) => {
                // Randomly click one of the elements
                const randomIndex = Math.floor(
                  Math.random() * $elements.length
                );
                const randomElement = $elements[randomIndex];
                cy.wrap(randomElement).click();
              });
          } else {
            cy.get(".svg-pan-zoom_viewport")
              .find(".place")
              .not(".disabled")
              .then(($elements) => {
                const randomIndices = Array.from({ length: 3 }, () =>
                  Math.floor(Math.random() * $elements.length)
                );
                randomIndices.forEach((index) => {
                  cy.wrap($elements[index]).click({ force: true }); // Force click if needed
                });
              });
          }
        });
      }
    });

    cy.wait(2000);
  });

  it("it should be check basket order sum amount", () => {
    cy.visit(Cypress.env("developmentFriday").baseUrl + "/widget/4/1/472");

    cy.get(".order-tickets__tickets").each(($element) => {
      const text = $element.text().trim();
      expect(text).to.include("3 tickets");
    });

    WidgetFridayElementsObj.basketTicketsFridayButtonClick()
      .eq(1)
      .find('[class="p-button p-component regular-btn ticket__remove-button"]')
      .click();

    cy.wait(2000);

    cy.get(".order-tickets__tickets").each(($element) => {
      const text = $element.text().trim();
      expect(text).to.include("2 tickets");
    });
  });

  it("it should be check all event price and event info on page", () => {
    cy.visit(Cypress.env("developmentFriday").baseUrl + "/widget/4/1/472");

    cy.get("[class='place-price']").should("be.visible");

    cy.get(".place-price__title").click();
    cy.wait(1000);
    cy.get("[class='place-price__list']").should("be.visible");

    cy.get(".place-price__min-max").should("not.be.empty");

    // cy.get('.header__action > button'),

    cy.get(".event-info__title").find("a").should("not.be.empty");

    cy.get(".show-date").find("span").should("not.be.empty");

    WidgetFridayElementsObj.promoCodeFidayButtonClick();

    WidgetFridayElementsObj.promoCodeDialogModalFriday().should("be.visible");

    cy.wait(1000);

    WidgetFridayElementsObj.promoCodeInputFriday().type("procent2-test");

    cy.wait(1000);

    WidgetFridayElementsObj.promoCodeFridayBtnClick();

    // WidgetElementsObj.promoCodeBlockBtnClick().click();

    cy.wait(1000);

    WidgetFridayElementsObj.toastNificationFridaySuccess().should("be.visible");

    WidgetFridayElementsObj.btnFridayRegularOrderClick();

    WidgetFridayElementsObj.firstInputFilledTypeTest().first().clear();

    cy.wait(2000);

    WidgetFridayElementsObj.firstInputTypeTestNegative()
      .first()
      .type(randomFullName);

    WidgetFridayElementsObj.firstInputFilledTypeTest().eq(2).clear();

    cy.wait(1000);

    WidgetFridayElementsObj.firstInputTypeTestNegative()
      .eq(0)
      .type(randomPhoneNumber);

    cy.wait(1000);

    WidgetFridayElementsObj.btnFridayRegularOrderClick();

    cy.wait(1000);

    WidgetFridayElementsObj.methodItemBookFriday().eq(1).click();

    WidgetFridayElementsObj.methodItemBookTextFriday().should("be.visible");

    cy.wait(1000);
  });

  it("it should be check payment systems redirect", () => {
    cy.visit(Cypress.env("developmentFriday").baseUrl + "/widget/4/1/472");

    cy.wait(1000);

    // Check if element with specific class exists
    cy.get(".schema").then(($element) => {
      if ($element.hasClass("sectors-list")) {
        cy.get(".svg-pan-zoom_viewport")
          .find(".sector.enabled.has-info")
          .not(".disabled")

          .then(($elements) => {
            // Randomly click one of the elements
            const randomIndex = Math.floor(Math.random() * $elements.length);
            const randomElement = $elements[randomIndex];
            cy.wrap(randomElement, { force: true }).click();
          });

        cy.get(".svg-pan-zoom_viewport")
          .find(".place")
          .not(".disabled")

          .then(($elements) => {
            // Randomly click one of the elements
            const randomIndex = Math.floor(Math.random() * $elements.length);
            const randomElement = $elements[randomIndex];
            cy.wrap(randomElement).click();
          });
      } else {
        cy.get("body").then((body) => {
          if (!body.find('div[data-pc-name="dialog"]')) {
            cy.get(".service-message-actions")
              .find('button[type="button"]')
              .click();

            cy.get(".svg-pan-zoom_viewport")
              .find(".place")
              .not(".disabled")

              .then(($elements) => {
                // Randomly click one of the elements
                const randomIndex = Math.floor(
                  Math.random() * $elements.length
                );
                const randomElement = $elements[randomIndex];
                cy.wrap(randomElement).click();
              });
          } else {
            cy.get(".svg-pan-zoom_viewport") // Replace 'your-selector' with the appropriate CSS selector for your enabled elements
              .find(".place")
              .not(".disabled")

              .then(($elements) => {
                const randomIndices = Array.from({ length: 5 }, () =>
                  Math.floor(Math.random() * $elements.length)
                );

                // Perform clicks on the randomly selected elements
                randomIndices.forEach((index) => {
                  cy.wrap($elements[index]).click({ force: true }); // Force click if needed
                });
              });
          }
        });
      }
    });

    WidgetFridayElementsObj.btnFridayRegularOrderClick();
    cy.wait(1000);
    WidgetFridayElementsObj.btnFridayRegularOrderClick();

    WidgetFridayElementsObj.methodItemBookFriday().eq(0).click();

    cy.wait(1000);

    WidgetFridayElementsObj.findFridayPaymentSystem()
      .find('label[for="egwmd"]')
      .click();

    WidgetFridayElementsObj.btnFridayRegularOrderClick();

    cy.wait(3000);

    cy.origin("https://vb059.vb.md", () => {
      cy.wait(1000);
      cy.get(".container-inside-card").should("be.visible");
      cy.go("back");
    });

    cy.wait(2000);

    WidgetFridayElementsObj.methodItemBookFriday().eq(0).click();

    cy.wait(1000);

    WidgetFridayElementsObj.findFridayPaymentSystem()
      .find('label[for="liqpay-p24"]')
      .click();

    WidgetFridayElementsObj.btnFridayRegularOrderClick();

    cy.wait(3000);

    cy.origin("https://www.liqpay.ua", () => {
      cy.wait(1000);
      cy.get(".pay__button__content").should("be.visible");
      cy.go("back");
    });

    cy.wait(1000);

    WidgetFridayElementsObj.methodItemBookFriday().eq(0).click();

    cy.wait(1000);

    WidgetFridayElementsObj.findFridayPaymentSystem()
      .find('label[for="wfp"]')
      .click();

    WidgetFridayElementsObj.btnFridayRegularOrderClick();

    cy.wait(3000);

    cy.origin("https://secure.wayforpay.com", () => {
      cy.wait(1000);
      cy.get(".pay-form-info").should("be.visible");
      cy.go("back");
    });

    cy.wait(1000);

    WidgetFridayElementsObj.methodItemBookFriday().should("be.visible");

    WidgetFridayElementsObj.methodItemBookFriday().eq(1).click();

    WidgetFridayElementsObj.methodItemBookTextFriday().should("not.be.empty");

    WidgetFridayElementsObj.btnFridayRegularOrderClick();

    cy.wait(3000);

    cy.get(".thanks-eticket-info").should("be.visible");

    cy.get(".thanks-eticket-info__order-value")
      .first()
      .invoke("text")
      .as("orderNumber");

    cy.get("@orderNumber").then((text) => {
      const number = parseFloat(text.match(/\d+/)[0]);
      globalOrderNumber = number;
      cy.log("Saved number:", globalOrderNumber);
    });

    WidgetFridayElementsObj.btnFridayRegularClick();

    cy.wait(2000);

    cy.get(".order-list").should("be.visible");
  });

  it("it should be check if the order number matches", () => {
    cy.visit(
      Cypress.env("developmentFriday").baseUrl + "/widget/4/1/472/user/orders"
    );

    cy.wait(2000);

    cy.get(".order-list").should("be.visible");

    cy.get(".order-list__list > .order-item")
      .eq(0)
      .find(".order-row__value")
      .first()
      // .eq(1)
      .invoke("text")
      .then((text) => {
        // Parse the text to extract the numerical value
        const orderNumber = parseFloat(text.match(/\d+/)[0]);
        // Log the saved number
        cy.wrap(orderNumber).should("eq", globalOrderNumber);
        cy.log("Saved number in orders list:", orderNumber);
      });

    cy.GetBookMailFriday(globalOrderNumber);
  });

  it("it should test fill ticket personal info", () => {
    cy.visit(Cypress.env("developmentFriday").baseUrl + "/widget/4/1/454");

    cy.get(".svg-pan-zoom_viewport")
      .find(".place")
      .not(".disabled")

      .then(($elements) => {
        // Randomly click one of the elements
        const randomIndex = Math.floor(Math.random() * $elements.length);
        const randomElement = $elements[randomIndex];
        cy.wrap(randomElement).click();
      });

    cy.wait(3000);

    WidgetFridayElementsObj.firstInputTicketDetails().first().type("латинские");

    // WidgetFridayElementsObj.firstInputTypeTestNegative().eq(0).type(randomPhoneNumber)

    WidgetFridayElementsObj.btnFridayRegularClick();

    cy.wait(1000);

    WidgetFridayElementsObj.checkErroBoxTextVisibleFriday()
      .should("be.visible")
      .and(
        "contain",
        "Filed Full name must contains only latin characters or spaces."
      );

    WidgetFridayElementsObj.firstInputFilledTicketDetails().first().clear();

    WidgetFridayElementsObj.firstInputTicketDetails().first().type("Test Name");

    WidgetFridayElementsObj.firstInputTicketDetails().eq(0).type("КЕ343434344");

    cy.wait(1000);

    WidgetFridayElementsObj.checkErroBoxTextVisibleFriday()
      .eq(0)
      .should("be.visible");

    WidgetFridayElementsObj.checkErroBoxTextVisibleFriday()
      .should("be.visible")
      .and("contain", "Filed Phone is required!");

    WidgetFridayElementsObj.firstInputFilledTicketDetails().eq(1).clear();

    WidgetFridayElementsObj.firstInputTicketDetails().eq(0).type("BR454455666");
    cy.wait(1000);

    WidgetFridayElementsObj.firstInputTicketDetails().eq(0).type("38094555");
    cy.wait(1000);

    WidgetFridayElementsObj.checkErroBoxTextVisibleFriday()
      .should("be.visible")
      .and("contain", "Phone format is invalid.");

    cy.wait(3000);

    WidgetFridayElementsObj.firstInputFilledTicketDetails().eq(2).clear();

    WidgetFridayElementsObj.firstInputTicketDetails()
      .eq(0)
      .type("380945559898");

    WidgetFridayElementsObj.firstInputTicketDetails().eq(0).type("123456789");
    cy.wait(3000);

    WidgetFridayElementsObj.btnFridayRegularClick();

    WidgetFridayElementsObj.checkErroBoxTextVisibleFriday()
      .should("be.visible")
      .and("contain", "INN must be 10 digits");

    cy.wait(3000);

    WidgetFridayElementsObj.firstInputFilledTicketDetails().eq(3).clear();

    WidgetFridayElementsObj.firstInputTicketDetails().eq(0).type("1234567891");
    cy.wait(3000);

    WidgetFridayElementsObj.firstInputTicketDetails().eq(0).type("Uni");

    WidgetFridayElementsObj.checkErroBoxTextVisibleFriday()
      .should("be.visible")
      .and("contain", "Filed Address must be at least 4 characters.");

    WidgetFridayElementsObj.firstInputFilledTicketDetails().eq(4).clear();

    WidgetFridayElementsObj.firstInputTicketDetails()
      .eq(0)
      .type("test street 345");

    WidgetFridayElementsObj.firstInputTicketDetails().eq(0).type("Den");

    WidgetFridayElementsObj.checkErroBoxTextVisibleFriday().should(
      "be.visible"
    );

    WidgetFridayElementsObj.firstInputFilledTicketDetails().eq(5).clear();

    WidgetFridayElementsObj.firstInputTicketDetails().eq(0).type("Denver");

    WidgetFridayElementsObj.firstInputTicketDetails().eq(0).type("Tes");

    WidgetFridayElementsObj.checkErroBoxTextVisibleFriday().should(
      "be.visible"
    );

    WidgetFridayElementsObj.firstInputFilledTicketDetails().eq(6).clear();

    WidgetFridayElementsObj.firstInputTicketDetails()
      .eq(0)
      .type("test company");

    WidgetFridayElementsObj.firstInputTicketDetails()
      .eq(0)
      .type("@testmail.com");

    WidgetFridayElementsObj.btnFridayRegularClick();

    WidgetFridayElementsObj.checkErroBoxTextVisibleFriday()
      .should("be.visible")
      .and("contain", "Email format is invalid.");

    cy.wait(3000);

    WidgetFridayElementsObj.firstInputFilledTicketDetails().eq(7).clear();

    WidgetFridayElementsObj.firstInputTicketDetails()
      .eq(0)
      .type("newuser@test.com");

    cy.wait(3000);

    WidgetFridayElementsObj.firstInputTicketDetails().eq(0).type("tes");

    WidgetFridayElementsObj.checkErroBoxTextVisibleFriday().should(
      "be.visible"
    );

    WidgetFridayElementsObj.firstInputFilledTicketDetails().eq(8).clear();

    WidgetFridayElementsObj.firstInputTicketDetails().eq(0).type("developer");

    cy.wait(3000);

    WidgetFridayElementsObj.firstInputFilledTicketDetails()
      .eq(2)
      .invoke("val")
      .as("numberText");

    cy.get("@numberText").then((text) => {
      globalTelephoneNumber = text;
      cy.log("Saved telephone number:", globalTelephoneNumber);
    });

    WidgetFridayElementsObj.btnFridayRegularClick();

    cy.wait(1000);

    WidgetFridayElementsObj.btnFridayRegularOrderClick();
    cy.wait(1000);
    WidgetFridayElementsObj.btnFridayRegularOrderClick();

    WidgetFridayElementsObj.methodItemBookFriday().eq(1).click();

    cy.wait(1000);

    WidgetFridayElementsObj.methodItemBookTextFriday().should("not.be.empty");

    WidgetFridayElementsObj.btnFridayRegularOrderClick();

    cy.wait(3000);

    cy.get(".thanks-eticket-info").should("be.visible");

    WidgetFridayElementsObj.btnFridayRegularClick();

    cy.wait(2000);

    cy.get(".order-list").should("be.visible");
  });

  it("it should test if the ticket personal info matches and visible in orders list", () => {
    cy.visit(
      Cypress.env("developmentFriday").baseUrl + "/widget/4/1/454/user/orders"
    );

    cy.get(".order-list").should("be.visible");

    WidgetFridayElementsObj.ticketDetailsFridayOrdersClick().first().click();

    cy.wait(2000);

    WidgetFridayElementsObj.ticketDetailsOrderEditButtonClick().click();

    cy.wait(2000);

    WidgetFridayElementsObj.firstInputFilledTicketDetails()
      .eq(2)
      .invoke("val")
      .then((text) => {
        const telephoneNumberEdit = text;

        cy.wrap(telephoneNumberEdit).should("eq", globalTelephoneNumber);
        cy.log("Saved number in orders list:", telephoneNumberEdit);
      });

    cy.wait(1000);

    WidgetFridayElementsObj.firstInputFilledTicketDetails().eq(2).clear();

    WidgetFridayElementsObj.firstInputTicketDetails()
      .eq(0)
      .type("380999321454");

    WidgetFridayElementsObj.firstInputFilledTicketDetails()
      .eq(2)
      .invoke("val")
      .as("numberEditText");

    cy.get("@numberEditText").then((text) => {
      globalTelephoneNumberEdit = text;
      cy.log("Saved telephone number:", globalTelephoneNumberEdit);
    });

    WidgetFridayElementsObj.btnFridayRegularClick();

    cy.wait(2000);

    WidgetFridayElementsObj.ticketDetailsOrderEditButtonClick().click();

    cy.wait(2000);

    WidgetFridayElementsObj.firstInputFilledTicketDetails()
      .eq(2)
      .invoke("val")
      .then((text) => {
        const telephoneNumberEditNew = text;

        cy.wrap(telephoneNumberEditNew).should("eq", globalTelephoneNumberEdit);
        cy.log("Saved number in orders list:", telephoneNumberEditNew);
      });
  });

  it("it should be sing out test", () => {
    cy.visit(Cypress.env("developmentFriday").baseUrl + "/widget/4/1");

    cy.wait(1000);

    WidgetFridayElementsObj.fridayFirstHeaderActionClick().click();

    WidgetFridayElementsObj.beVisibleFridayElementList().should("be.visible");

    WidgetFridayElementsObj.clickOnFridayMenuInList().eq(6).click();

    cy.wait(1000);

    WidgetFridayElementsObj.fridayFirstHeaderActionClick().click();

    WidgetFridayElementsObj.clickOnFridayMenuInList().eq(6).click();

    cy.get(".login-form-wrapper").should("be.visible");
  });
});
