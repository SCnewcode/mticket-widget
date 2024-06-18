/// <reference types="cypress" />

import "cypress-mailosaur";

import { faker } from "@faker-js/faker";

import { WidgetFridayElements } from "../../pages/FridayWidgetPageElements";

let globalOrderNumber;

const WidgetFridayElementsObj = new WidgetFridayElements();


describe("it should be check widget contact page and index localization prod", () => {


const randomSessionNumber = faker.datatype.number()

const randomFullNameProd = faker.person.fullName();

const randomFullName = faker.person.fullName();

const randomPhoneNumber = faker.phone.number("380########")


let getNewMail;

beforeEach(() => {

  cy.FridayLoginWithUITest(randomSessionNumber);
  // cy.visit(Cypress.env("developmentFriday").baseUrl + "/widget/4/1");
//  cy.visit("https://showcase.test.mticket.com.ua/widget/4/1");
});



// it("it should be check go to friday widget contact page", () => {

   
//     WidgetFridayElementsObj.fridayFirstHeaderActionClick().click();
  
//     cy.wait(1000);

//     WidgetFridayElementsObj.beVisibleFridayElementList().should('be.visible');

//     WidgetFridayElementsObj.clickOnFridayMenuInList().eq(4).click();

//     cy.wait(2000);

//     WidgetFridayElementsObj.checkBeVisibleFridayContactPage().should('be.visible');

//     // WidgetFridayElementsObj.checkCookieConsentBoxVisible();  checkBeVisibleFridayContactPage
//     // WidgetFridayElementsObj.cookieConsentClick();



//   });


  it("it should be check cookie consent", () => {


    WidgetFridayElementsObj.checkGetCookieVisible();
  });


  it("it should be check to add a widget contact info", () => {
    cy.visit(Cypress.env("developmentFriday").baseUrl + "/widget/4/1/user/index");

    WidgetFridayElementsObj.firstInputTypeTestNegative().first().type("te");

    cy.wait(2000);
     
    WidgetFridayElementsObj.firstInputTypeTestNegative().eq(0).type(randomPhoneNumber)


    WidgetFridayElementsObj.btnFridayRegularClick();

    cy.wait(1000);

    WidgetFridayElementsObj.checkErrorNotificationOnContactPage().should("be.visible").and("contain", "The name must be at least 3 characters.")

    WidgetFridayElementsObj.firstInputFilledTypeTest().eq(2).clear();

    


    WidgetFridayElementsObj.firstInputTypeTestNegative().eq(0).type("380986");

    WidgetFridayElementsObj.btnFridayRegularClick();

    cy.wait(1000);

    WidgetFridayElementsObj.checkErroBoxTextVisibleFriday().should("be.visible").and("contain", "Phone format is invalid.");

    WidgetFridayElementsObj.firstInputFilledTypeTest().first().clear();

    WidgetFridayElementsObj.firstInputTypeTestNegative().first().type(randomFullName);

    WidgetFridayElementsObj.firstInputFilledTypeTest().eq(2).clear();

    WidgetFridayElementsObj.firstInputTypeTestNegative().eq(0).type(randomPhoneNumber);

    
    cy.wait(1000);

    WidgetFridayElementsObj.btnFridayRegularClick();


  });


  // it("it should be check widget document block", () => {
 


  //   cy.visit(Cypress.env("developmentFriday").baseUrl + "/widget/4/1/user/index");


  //   WidgetFridayElementsObj.visibleFridayDocumentBlock();

  //   WidgetFridayElementsObj.documentBlockFridayButtonClick().eq(0).click();
  //   cy.wait(1000);

  //   WidgetFridayElementsObj.checkFridayDocumentDialogModal();

  //   WidgetFridayElementsObj.clickFridayDialogModalClose();

  //   WidgetFridayElementsObj.documentBlockFridayButtonClick().eq(1).click();
  //   cy.wait(1000);

  //   WidgetFridayElementsObj.checkFridayDocumentDialogModal();

  //   WidgetFridayElementsObj.clickFridayDialogModalClose();
  // });

  // it("it should be check localization on widget contact page", () => {

  //   cy.visit(Cypress.env("developmentFriday").baseUrl + "/widget/4/1/user/index");

  //   WidgetFridayElementsObj.localizationFridayMenuClick();

  //   WidgetFridayElementsObj.localizationFridayChoiceClick().eq(6).click();

  //   cy.get("[class='p-button p-component regular-btn']").contains("Ratować").should("be.visible");

  //   if (cy.get("[class='p-button p-component regular-btn']").should("have.text", "Ratować")) {
  //     cy.log("POL localization works");
  //   }

  //   WidgetFridayElementsObj.localizationFridayMenuClick();

  //   WidgetFridayElementsObj.localizationFridayChoiceClick().eq(11).click();

  //   cy.get("[class='p-button p-component regular-btn']").contains("Speichern").should("be.visible");

  //   if (cy.get("[class='p-button p-component regular-btn']").should("have.text", "Speichern")) {
  //     cy.log("DE localization works");
  //   }

  //   WidgetFridayElementsObj.localizationFridayMenuClick();

  //   WidgetFridayElementsObj.localizationFridayChoiceClick().eq(3).click();

  //   cy.get("[class='p-button p-component regular-btn']").contains("Save").should("be.visible");

  //   if (cy.get("[class='p-button p-component regular-btn']").should("have.text", "Save")) {
  //     cy.log("EN localization works");
  //   }

  // });


  
  // it("it should be check localization on widget index page", () => {
  //   cy.visit(Cypress.env("developmentFriday").baseUrl + "/widget/4/1");



   
  //   WidgetFridayElementsObj.localizationFridayMenuClick();

  //   WidgetFridayElementsObj.localizationFridayChoiceClick().eq(3).click();

  //   cy.get("[class='p-button p-component regular-btn event-item__action_active']").first().contains("Kup bilety").should("be.visible");

  //   if (cy.get("[class='p-button p-component regular-btn event-item__action_active']").first().should("have.text", "Kup bilety")) {
  //     cy.log("POL localization works");
  //   }


  //   WidgetFridayElementsObj.localizationFridayMenuClick();

  //   WidgetFridayElementsObj.localizationFridayChoiceClick().eq(8).click();

  //   cy.get("[class='p-button p-component regular-btn event-item__action_active']").first().contains("Tickets kaufen").should("be.visible");

  //   if (cy.get("[class='p-button p-component regular-btn event-item__action_active']").first().should("have.text", "Tickets kaufen")) {
  //     cy.log("DE localization works");
  //   }

  //   WidgetFridayElementsObj.localizationFridayMenuClick();

  //   WidgetFridayElementsObj.localizationFridayChoiceClick().eq(0).click();

  //   cy.get("[class='p-button p-component regular-btn event-item__action_active']").first().contains("Buy tickets").should("be.visible");

  //   if (cy.get("[class='p-button p-component regular-btn event-item__action_active']").first().should("have.text", "Buy tickets")) {
  //     cy.log("EN localization works");
  //   }
  // });


  // it("it should be choose random active event on index page", () => {
  //   cy.get(".event-list__list").clickRandomClickableLinkInList();
  // });


  // it("it should be lock ticket in active event", () => {
  //   cy.visit(
  //     Cypress.env("developmentFriday").baseUrl + "/widget/4/1/286"
  //   );
  //   cy.wait(1000);

   

  //   // Check if element with specific class exists
  //   cy.get(".schema").then(($element) => {
  //     if ($element.hasClass("sectors-list")) {
  //       cy.get(".svg-pan-zoom_viewport")
  //         .find(".sector.enabled.has-info")
  //         .not(".disabled")
  //         .then(($elements) => {
  //           const randomIndex = Math.floor(Math.random() * $elements.length);
  //           const randomElement = $elements[randomIndex];
  //           cy.wrap(randomElement, { force: true }).click();
  //         });

  //       cy.get(".svg-pan-zoom_viewport")
  //         .find(".place")
  //         .not(".disabled")

  //         .then(($elements) => {
  //           const randomIndex = Math.floor(Math.random() * $elements.length);
  //           const randomElement = $elements[randomIndex];
  //           cy.wrap(randomElement).click();
  //         });
  //     } else {
  //       cy.get("body").then((body) => {
  //         if (!body.find('div[data-pc-name="dialog"]')) {
  //           cy.get(".service-message-actions")
  //             .find('button[type="button"]')
  //             .click();

  //           cy.get(".svg-pan-zoom_viewport")
  //             .find(".place")
  //             .not(".disabled")
  //             .then(($elements) => {
  //               // Randomly click one of the elements
  //               const randomIndex = Math.floor(
  //                 Math.random() * $elements.length
  //               );
  //               const randomElement = $elements[randomIndex];
  //               cy.wrap(randomElement).click();
  //             });
  //         } else {
  //           cy.get(".svg-pan-zoom_viewport")
  //             .find(".place")
  //             .not(".disabled")
  //             .then(($elements) => {
  //               const randomIndices = Array.from({ length: 3 }, () =>
  //                 Math.floor(Math.random() * $elements.length)
  //               );
  //               randomIndices.forEach((index) => {
  //                 cy.wrap($elements[index]).click({ force: true }); // Force click if needed
  //               });
  //             });
  //         }
  //       });
  //     }
  //   });

  //   cy.wait(2000);
  // });



  // it("it should be check basket order sum amount", () => {
  //   cy.visit(
  //     Cypress.env("developmentFriday").baseUrl + "/widget/4/1/286"
  //   );


  //   cy.get(".order-tickets__tickets").each(($element) => {
  //     const text = $element.text().trim();
  //     expect(text).to.include("3 tickets");
  //   });

  //   WidgetFridayElementsObj.basketTicketsFridayButtonClick()
  //     .eq(1)
  //     .find('[class="p-button p-component regular-btn ticket__remove-button"]')
  //     .click();

  //   cy.wait(2000);

  //   cy.get(".order-tickets__tickets").each(($element) => {
  //     const text = $element.text().trim();
  //     expect(text).to.include("2 tickets");
  //   });
  // });

  // it("it should be check all event price and event info on page", () => {

  //   cy.visit(
  //     Cypress.env("developmentFriday").baseUrl + "/widget/4/1/286"
  //   );


  //   cy.get("[class='place-price']").should("be.visible");

  //   cy.get(".place-price__title").click();
  //   cy.wait(1000);
  //   cy.get("[class='place-price__list']").should("be.visible");

  //   cy.get(".place-price__min-max").should("not.be.empty")


  //   // cy.get('.header__action > button'),

  //   cy.get(".event-info__title").find('a').should("not.be.empty")

  //   cy.get('.show-date').find('span').should("not.be.empty")



  //   WidgetFridayElementsObj.promoCodeFidayButtonClick()

  //   WidgetFridayElementsObj.promoCodeDialogModalFriday().should("be.visible")

  //   cy.wait(1000);
  
  //   WidgetFridayElementsObj.promoCodeInputFriday().type("procent2-test");
  
  //   cy.wait(1000);

  //   WidgetFridayElementsObj.promoCodeFridayBtnClick()
  
  //   // WidgetElementsObj.promoCodeBlockBtnClick().click();

  //   cy.wait(1000);
  
  //   WidgetFridayElementsObj.toastNificationFridaySuccess().should("be.visible")


  //   WidgetFridayElementsObj.btnFridayRegularOrderClick();



  //   WidgetFridayElementsObj.firstInputFilledTypeTest().first().clear();

  //   cy.wait(2000);
    
  //   WidgetFridayElementsObj.firstInputTypeTestNegative().first().type(randomFullName);

    
  //   WidgetFridayElementsObj.firstInputFilledTypeTest().eq(2).clear();

  //   cy.wait(1000);


     
  //   WidgetFridayElementsObj.firstInputTypeTestNegative().eq(0).type(randomPhoneNumber)

  //   cy.wait(1000);


  //   WidgetFridayElementsObj.btnFridayRegularOrderClick();

   
  //   cy.wait(1000);


  //  WidgetFridayElementsObj.methodItemBookFriday().eq(1).click();

  //  WidgetFridayElementsObj.methodItemBookTextFriday().should("be.visible");

  //  cy.wait(1000);



  // });



  it("it should be check payment systems redirect", () => {

    cy.visit(
      Cypress.env("developmentFriday").baseUrl + "/widget/4/1/286"
    );

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
      cy.go('back')
    });

  
    cy.wait(2000);
     

  //   WidgetFridayElementsObj.methodItemBookFriday().eq(0).click();

  //  cy.wait(1000);

  //  WidgetFridayElementsObj.findFridayPaymentSystem()
  //     .find('label[for="liqpay-p24"]')
  //     .click();


  //     WidgetFridayElementsObj.btnFridayRegularOrderClick();


  //     cy.wait(3000);

  //     cy.origin("https://www.liqpay.ua", () => {
  //     cy.wait(1000);
  //     cy.get(".pay__button__content").should("be.visible");
  //     cy.go('back')
  //   });

  //   cy.wait(1000);


  //   WidgetFridayElementsObj.methodItemBookFriday().eq(0).click();

  //   cy.wait(1000);
 
  //   WidgetFridayElementsObj.findFridayPaymentSystem()
  //      .find('label[for="wfp"]')
  //      .click();
 
 
  //      WidgetFridayElementsObj.btnFridayRegularOrderClick();
 
 
  //      cy.wait(3000);
 
  //      cy.origin("https://secure.wayforpay.com", () => {
  //      cy.wait(1000);
  //      cy.get(".pay-form-info").should("be.visible");
  //      cy.go('back')
  //    });
 
  //    cy.wait(1000);

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
      Cypress.env("developmentFriday").baseUrl + "/widget/4/1/286/user/orders"
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

    cy.visit(
      Cypress.env("developmentFriday").baseUrl + "/widget/4/1/454"
    );



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

  //   WidgetElementsObj.findPersonalInfoFields().first().type("латинские");

  //   WidgetElementsObj.clickBtnRegularPersonalInfo();

  //   cy.wait(1000);

  //   WidgetElementsObj.checkErroBoxOnPersonalInfo()
  //     .should("be.visible")
  //     .and(
  //       "contain",
  //       "Filed Full name must contains only latin characters or spaces."
  //     );

  //   cy.wait(1000);

  //   WidgetElementsObj.findPersonalInfoFields().first().clear();

  //   WidgetElementsObj.findPersonalInfoFields().first().type("Test Name");

  //   WidgetElementsObj.findPersonalInfoFields().eq(1).type("КЕ343434344");

  //   cy.wait(1000);

  //   WidgetElementsObj.checkErroBoxOnPersonalInfo().eq(0).should("be.visible");

  //   WidgetElementsObj.checkErroBoxOnPersonalInfo()
  //     .should("be.visible")
  //     .and("contain", "Filed Phone is required!");

  //   cy.wait(1000);

  //   WidgetElementsObj.findPersonalInfoFields().eq(1).clear();

  //   WidgetElementsObj.findPersonalInfoFields().eq(1).type("BR454455666");

  //   WidgetElementsObj.findPersonalInfoFields().eq(2).type("38094555");

  //   WidgetElementsObj.checkErroBoxOnPersonalInfo()
  //     .should("be.visible")
  //     .and("contain", "Phone format is invalid.");

  //   WidgetElementsObj.findPersonalInfoFields().eq(2).clear();

  //   WidgetElementsObj.findPersonalInfoFields().eq(2).type("380945559898");

  //   WidgetElementsObj.findPersonalInfoFields().eq(3).type("123456789");

  //   WidgetElementsObj.clickBtnRegularPersonalInfo();

  //   WidgetElementsObj.checkErroBoxOnPersonalInfo()
  //     .should("be.visible")
  //     .and("contain", "INN must be 10 digits");

  //   WidgetElementsObj.findPersonalInfoFields().eq(3).clear();

  //   WidgetElementsObj.findPersonalInfoFields().eq(3).type("1234567891");

  //   WidgetElementsObj.findPersonalInfoFields().eq(4).type("@testmail.com");

  //   WidgetElementsObj.checkErroBoxOnPersonalInfo()
  //     .should("be.visible")
  //     .and("contain", "Email format is invalid.");

  //   WidgetElementsObj.findPersonalInfoFields().eq(4).clear();

  //   WidgetElementsObj.findPersonalInfoFields().eq(4).type("newuser@test.com");

  //   WidgetElementsObj.findPersonalInfoFields().eq(5).type("Uni");

  //   WidgetElementsObj.checkErroBoxOnPersonalInfo()
  //     .should("be.visible")
  //     .and("contain", "Filed Place of living must be at least 4 characters.");

  //   WidgetElementsObj.findPersonalInfoFields().eq(5).clear();

  //   WidgetElementsObj.findPersonalInfoFields().eq(5).type("United States");

  //   WidgetElementsObj.findPersonalInfoFields().eq(6).type("Den");

  //   WidgetElementsObj.checkErroBoxOnPersonalInfo().should("be.visible");

  //   WidgetElementsObj.findPersonalInfoFields().eq(6).clear();

  //   WidgetElementsObj.findPersonalInfoFields().eq(6).type("Denver");

  //   WidgetElementsObj.findPersonalInfoFields().eq(7).type("Tes");

  //   WidgetElementsObj.checkErroBoxOnPersonalInfo()
  //     .should("be.visible")
  //     .and("contain", "Filed Company must be at least 4 characters.");

  //   WidgetElementsObj.findPersonalInfoFields().eq(7).clear();

  //   WidgetElementsObj.findPersonalInfoFields().eq(7).type("Test Company");

  //   WidgetElementsObj.findPersonalInfoFields().eq(8).type("dev");

  //   WidgetElementsObj.checkErroBoxOnPersonalInfo()
  //     .should("be.visible")
  //     .and("contain", "Filed Position must be at least 4 characters.");

  //   WidgetElementsObj.findPersonalInfoFields().eq(8).clear();

  //   WidgetElementsObj.findPersonalInfoFields().eq(8).type("developer");

  //   WidgetElementsObj.clickBtnRegularPersonalInfo();

  //   cy.get(".basket-order-sum__amount").each(($element) => {
  //     const text = $element.text().trim();
  //     expect(text).to.include("1 ticket");
  //   });

  //   WidgetElementsObj.clickBasketTicketPersonalInfo();

  //   WidgetElementsObj.personalInfoDialogModalVisible().should("be.visible");

  //   WidgetElementsObj.findPersonalInfoFields().first().clear();

  //   WidgetElementsObj.findPersonalInfoFields().first().type("Test Edit Name");

  //   cy.wait(1000);

  //   WidgetElementsObj.findPersonalInfoFields().eq(2).clear();

  //   WidgetElementsObj.findPersonalInfoFields().eq(2).type("09999999999");

  //   WidgetElementsObj.findPersonalInfoFields()
  //     .eq(2)
  //     .invoke("val")
  //     .as("numberText");

  //   cy.get("@numberText").then((text) => {
  //     globalTelephoneNumber = text;
  //     cy.log("Saved telephone number:", globalTelephoneNumber);
  //   });

  //   WidgetElementsObj.clickBtnRegularPersonalInfo();

  //   cy.wait(2000);

  //   WidgetElementsObj.basketActionButtonClick().click();
   });

  it("it should test if the ticket personal info matches and visible in orders list", () => {
  //   cy.visit(
  //     Cypress.env("development").baseUrl +
  //       "/widget4site1/widget/event/454/checkout"
  //   );
  //   WidgetElementsObj.cookieConsentClick();
  //   cy.wait(1000);

  //   WidgetElementsObj.methodItemNameBookFind()
  //     .contains("Book a ticket")
  //     .click();

  //   WidgetElementsObj.basketActionButtonRegularClick().click();

  //   cy.wait(2000);

  //   cy.get(".thanks-page").should("be.visible");

  //   WidgetElementsObj.orderCongratulationBookingClick().click();

  //   cy.wait(2000);

  //   cy.get(".order-page").should("be.visible");

  //   WidgetElementsObj.clickOnTicketsInOrdersPage();

  //   cy.wait(2000);

  //   WidgetElementsObj.clickBtnEditPersonalInfo();

  //   cy.wait(1000);

  //   WidgetElementsObj.findPersonalInfoFields()
  //     .eq(2)
  //     .invoke("val")
  //     .then((text) => {
  //       const telephoneNumberEdit = text;

  //       cy.wrap(telephoneNumberEdit).should("eq", globalTelephoneNumber);
  //       cy.log("Saved number in orders list:", telephoneNumberEdit);
  //     });
  });




  //   it("it should be Book a ticket test", () => {

  //     cy.visit(
  //       Cypress.env("developmentFriday").baseUrl + "/widget/4/1/286"
  //     );
  
  //     cy.wait(1000);


  //     WidgetFridayElementsObj.methodItemBookFriday().eq(1).click();

  //   // WidgetElementsObj.basketActionButtonRegularClick().click();

  //   // cy.wait(2000);

  //   // cy.get(".thanks-page").should("be.visible");

  //   // cy.get(".order-congratulation__order > span")
  //   //   .eq(1)
  //   //   .invoke("text")
  //   //   .as("someText");

  //   // cy.get("@someText").then((text) => {
  //   //   const number = parseFloat(text.match(/\d+/)[0]);
  //   //   globalNumber = number;
  //   //   cy.log("Saved number:", globalNumber);
  //   // });

  //   // WidgetElementsObj.orderCongratulationBookingClick().click();

  //   // cy.wait(2000);

  //   // cy.get(".order-page").should("be.visible");
  // });




  // it("it should be Book a ticket test", () => {
  //   cy.visit(
  //     Cypress.env("development").baseUrl +
  //       "/widget4site1/widget/event/286/checkout"
  //   );



  //   WidgetElementsObj.methodItemNameBookFind()
  //     .contains("Book a ticket")
  //     .click();

  //   WidgetElementsObj.basketActionButtonRegularClick().click();

  //   cy.wait(2000);

  //   cy.get(".thanks-page").should("be.visible");

  //   cy.get(".order-congratulation__order > span")
  //     .eq(1)
  //     .invoke("text")
  //     .as("someText");

  //   cy.get("@someText").then((text) => {
  //     const number = parseFloat(text.match(/\d+/)[0]);
  //     globalNumber = number;
  //     cy.log("Saved number:", globalNumber);
  //   });

  //   WidgetElementsObj.orderCongratulationBookingClick().click();

  //   cy.wait(2000);

  //   cy.get(".order-page").should("be.visible");
  // });


  // it("it should be check promo code apply", () => {
  //   // cy.visit(
  //   //   Cypress.env("developmentFriday").baseUrl + "/widget/4/1/286"
  //   // );
  

  //   cy.wait(1000);


  //   WidgetFridayElementsObj.promoCodeFidayButtonClick()

  //   WidgetFridayElementsObj.promoCodeDialogModalFriday().should("be.visible")

  //   cy.wait(1000);
  
  //   WidgetFridayElementsObj.promoCodeInputFriday().type("procent2-test");
  
  //   cy.wait(1000);

  //   WidgetFridayElementsObj.promoCodeFridayBtnClick()
  
  //   // WidgetElementsObj.promoCodeBlockBtnClick().click();

  //   cy.wait(1000);
  
  //   WidgetFridayElementsObj.toastNificationFridaySuccess().should("be.visible")

  
  //   // cy.wait(1000);
  
  //   // cy.deleteMessageMail();
  
  // });


  // it("it should be go to checkout page and check contact field input validation", () => {
  //   // cy.visit(
  //   //   Cypress.env("developmentFriday").baseUrl + "/widget/4/1/286"
  //   // );



  //   WidgetFridayElementsObj.firstInputFilledTypeTest().first().clear();

  //   cy.wait(2000);
    
  //   WidgetFridayElementsObj.firstInputTypeTestNegative().first().type(randomFullName);

    
  //   WidgetFridayElementsObj.firstInputFilledTypeTest().eq(2).clear();

  //   cy.wait(1000);


     
  //   WidgetFridayElementsObj.firstInputTypeTestNegative().eq(0).type(randomPhoneNumber)

  //   cy.wait(1000);


  //   WidgetFridayElementsObj.btnFridayRegularOrderClick();

   
  //   cy.wait(1000);

  // //   cy.wait(1000);

  // //   WidgetElementsObj.basketActionButtonClick().click();
  // //   cy.wait(1000);

  // //   WidgetElementsObj.checkoutOrderInfoClick()
  // //     .eq(0)
  // //     .find('[class="checkout-section__button"]')
  // //     .click();

  // //   WidgetElementsObj.userContactsFieldInputFind()
  // //     .first()
  // //     .clear()
  // //     .type(randomFullName);

  // //   WidgetElementsObj.contactFormCheckoutBtnClick().click();

  // //   WidgetElementsObj.toastNificationSuccessFind()
  // //     .should("be.visible")
  // //     .and("contain", "Your contact info saved");
  //  });



});
