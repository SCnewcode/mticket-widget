// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress-xpath" />

/// <reference types="cypress-mailslurp" />



const { MailSlurp } = require("mailslurp-client");


const apiKey = "a4b806078287db33a34474113799045ffd3640d39112a87e1a579057ac05f6a0";// or Cypress.env("API_KEY")
const mailslurp = new MailSlurp({ apiKey });

Cypress.Commands.add("createInbox", () => {
    return mailslurp.inboxController.createInboxWithOptions({
          createInboxDto: {
              useShortAddress: true,
            },
    });
  });
  


  Cypress.Commands.add('waitForLatestEmail', (inboxId) => {

      return mailslurp.waitForLatestEmail(inboxId );
 
  });


  Cypress.Commands.add("deleteInbox", (inboxId) => {
    return mailslurp.deleteInbox(inboxId);
  });


  Cypress.Commands.add('clickRandomClickableLinkInList', { prevSubject: 'element' }, (subject) => {
    cy.wrap(subject).find('a').then($links => {
      // Filter out only the clickable links
      const clickableLinks = $links.filter((index, link) => {
        return Cypress.$(link).is(':visible') && !link.disabled && Cypress.$(link).css('pointer-events') !== 'none';
      });
  
      // Check if there are any clickable links
      if (clickableLinks.length > 0) {
        // Generate a random index within the range of clickable links
        const randomIndex = Cypress._.random(0, clickableLinks.length - 1);
        // Click the randomly selected clickable link
        cy.wrap(clickableLinks[randomIndex]).click();
    
      } else {
        cy.log('No clickable links found in the list.');
      }
    });
  });


  Cypress.Commands.add('clickRandomClickableLinkInListProd', { prevSubject: 'element' }, (subject) => {
    cy.wrap(subject).find('a').then($links => {
      // Filter out only the clickable links
      const clickableLinks = $links.filter((index, link) => {
        return Cypress.$(link).is(':visible') && !link.disabled && Cypress.$(link).css('pointer-events') !== 'none';
      });
  
      // Check if there are any clickable links
      if (clickableLinks.length > 0) {
        // Generate a random index within the range of clickable links
        const randomIndex = Cypress._.random(0, clickableLinks.length - 1);
        // Click the randomly selected clickable link
        cy.wrap(clickableLinks[randomIndex]).click();
    
      } else {
        cy.log('No clickable links found in the list.');
      }
    });
  });



Cypress.Commands.add('loginWithUITest', (username, otp) => {


        cy.session([username, otp],  () => {

          cy.visit(Cypress.env('development').baseUrl + '/widget4site1/user/login');
        // cy.visit('widget4site1/user/login')

        cy.get('[inputmode="email"]').type(username); //test
        cy.get("[class='p-checkbox p-component base-checkbox']").click()
        cy.get("[class='btn btn-regular']").click()
        cy.wait(2000)
        cy.get('[inputmode="numeric"]').type(otp);
        cy.get(".login-form__actions > button").click();
        cy.wait(2000),

        {
          cachesAcrossSpecs: true
        }

     })
 })



//  Cypress.Commands.add('loginWithUIProd', (mailBoxFormat) => {
//   cy.session([mailBoxFormat], () => { 

//  Cypress.Commands.add('loginWithUIProd', (user) => {
//     cy.session([user], () => { 
//     const apiEndpoint = 'https://www.developermail.com/api/v1/mailbox';

//     let mailboxName = `testmailbox_${Date.now()}`;
//     const requestBody = { name: mailboxName };

//     cy.request({
//       method: 'PUT',
//       url: apiEndpoint,
//       body: requestBody,
//       headers: { 'Content-Type': 'application/json' }
//     }).then((response) => {
//       expect(response.status).to.eq(200);

//       let mailBoxId = response.body.result.name;
//       let mailBoxFormat = `${mailBoxId}@developermail.com`;
//       let mailServiceToken = response.body.result.token;

//       cy.wrap( mailBoxFormat).as('mailBoxData');

//       // cy.log(@mailBoxData);

//       cy.visit("https://widget.mticket.com.ua/en/widget97site77/user/login");
//       cy.get('[inputmode="email"]').type(mailBoxFormat);
//       cy.get("[class='p-checkbox p-component base-checkbox']").click();
//       cy.get("[class='btn btn-regular']").click();
//       cy.wait(15000);

//       cy.request({
//         method: 'GET',
//         url: `https://www.developermail.com/api/v1/mailbox/${mailBoxId}`,
//         headers: { "Content-Type": "application/json", "X-MailboxToken": mailServiceToken }
//       }).then((response) => {
//         expect(response.status).to.eq(200);

//         let resultId = response.body.result;

//         cy.request({
//           method: 'GET',
//           url: `https://www.developermail.com/api/v1/mailbox/${mailBoxId}/messages/${resultId}`,
//           headers: { "Content-Type": "application/json", "X-MailboxToken": mailServiceToken }
//         }).then((response) => {
//           expect(response.status).to.eq(200);

//           let emailBody = response.body.result;
//           const parser = new DOMParser();
//           const doc = parser.parseFromString(emailBody, "text/html");
//           let otp = doc.querySelector("p > span").textContent;

//           cy.get('[inputmode="numeric"]').type(otp);
//           cy.get(".login-form__actions > button").click();
//           cy.wait(2000);

//           // cy.session([mailBoxFormat, otp],  () => {  

//           // });

          


//         })

//       });



  

//     });



 


// },

//  {
   

//     cacheAcrossSpecs: true // Enable session caching across different spec files
//   }


// );

// });


  let mailBoxFormat;
  let mailServiceToken;
  let mailBoxId;
  let otp;

Cypress.Commands.add('loginWithUIProd', (user) => {
  const apiEndpoint = 'https://www.developermail.com/api/v1/mailbox';


  // Function to create mailbox and get mailbox details
  const createMailbox = () => {
    const mailboxName = `testmailbox_${Date.now()}`;
    const requestBody = { name: mailboxName };

    return cy.request({
      method: 'PUT',
      url: apiEndpoint,
      body: requestBody,
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      expect(response.status).to.eq(200);
      mailBoxId = response.body.result.name;
      mailBoxFormat = `${mailBoxId}@developermail.com`;
      mailServiceToken = response.body.result.token;


      cy.visit("https://widget.mticket.com.ua/en/widget97site77/user/login");
      cy.get('[inputmode="email"]').type(mailBoxFormat);
      cy.get("[class='p-checkbox p-component base-checkbox']").click();
      cy.get("[class='btn btn-regular']").click();

      cy.wrap({ mailBoxFormat }).as('userData');

    });
  };

  // Function to fetch OTP email
  const fetchOTP = () => {
    cy.wait(15000); // Wait for email to be sent

    return cy.request({
      method: 'GET',
      url: `https://www.developermail.com/api/v1/mailbox/${mailBoxId}`,
      headers: { "Content-Type": "application/json", "X-MailboxToken": mailServiceToken }
    }).then((response) => {
      expect(response.status).to.eq(200);

      const resultId = response.body.result;

      
      cy.log(resultId);
      cy.wait(2000);
      return cy.request({
        method: 'GET',
        url: `https://www.developermail.com/api/v1/mailbox/${mailBoxId}/messages/${resultId}`,
        headers: { "Content-Type": "application/json", "X-MailboxToken": mailServiceToken }
      }).then((response) => {
        expect(response.status).to.eq(200);
        const emailBody = response.body.result;
        const parser = new DOMParser();
        const doc = parser.parseFromString(emailBody, "text/html");
        return doc.querySelector("p > span").textContent;

      });





    });



  };




  // Function to complete the login process
  const completeLogin = (otp) => {
    // cy.visit("https://widget.mticket.com.ua/en/widget97site77/user/login");
    // cy.get('[inputmode="email"]').type(mailBoxFormat);
    // cy.get("[class='p-checkbox p-component base-checkbox']").click();
    // cy.get("[class='btn btn-regular']").click();
    cy.get('[inputmode="numeric"]').type(otp);
    cy.get(".login-form__actions > button").click();
    cy.wait(2000);
  };


  // const deleteMailMessage = (result) => {

  //   // /api/mailbox/{name}/messages/{id}
  //   return cy.request({
  //     method: 'DELETE',
  //     url: `https://www.developermail.com/api/v1/mailbox/${mailBoxId}/messages/${resultId}`,
  //     headers: { "Content-Type": "application/json", "X-MailboxToken": mailServiceToken }
  //   }).then((response) => {
  //     expect(response.status).to.eq(200);
  //     const emailBody = response.body.result;
  //     cy.wait(2000);
  //     // const parser = new DOMParser();
  //     // const doc = parser.parseFromString(emailBody, "text/html");
  //     // return doc.querySelector("p > span").textContent;

  //   });

  // }


  cy.session([user], () => {
    createMailbox()
      .then(fetchOTP)
      .then((otp) => {
        completeLogin(otp);

        cy.wrap( {mailBoxFormat, otp} ).as('userDataNew');
      });
  }, {
    
    cacheAcrossSpecs: true // Enable session caching across different spec files
  });

  //  deleteMailMessage(resultId);




});



Cypress.Commands.add('deleteMessageMail', () => {

  return cy.request({
    method: 'GET',
    url: `https://www.developermail.com/api/v1/mailbox/${mailBoxId}`,
    headers: { "Content-Type": "application/json", "X-MailboxToken": mailServiceToken }
  }).then((response) => {
    expect(response.status).to.eq(200);

    const resultId = response.body.result;

    
    cy.log(resultId);
    cy.wait(2000);
    return cy.request({
      method: 'DELETE',
      url: `https://www.developermail.com/api/v1/mailbox/${mailBoxId}/messages/${resultId}`,
      headers: { "Content-Type": "application/json", "X-MailboxToken": mailServiceToken }
    }).then((response) => {
      expect(response.status).to.eq(200);
      const emptyMessage = response.body.result;

      cy.log(emptyMessage);
      

    });





  });
  




});




// let bookNumber;

// let bookNail;

// let bookNailtest;


Cypress.Commands.add('GetBookMail', (bookNumber) => {


    cy.wait(10000); // Wait for email to be sent

    return cy.request({
      method: 'GET',
      url: `https://www.developermail.com/api/v1/mailbox/${mailBoxId}`,
      headers: { "Content-Type": "application/json", "X-MailboxToken": mailServiceToken }
    }).then((response) => {
      expect(response.status).to.eq(200);

      const resultIdBookMail = response.body.result[0];

      cy.log(resultIdBookMail);
      cy.wait(2000);
      return cy.request({
        method: 'GET',
        url: `https://www.developermail.com/api/v1/mailbox/${mailBoxId}/messages/${resultIdBookMail}`,
        headers: { "Content-Type": "application/json", "X-MailboxToken": mailServiceToken }
      }).then((response) => {
        expect(response.status).to.eq(200);

      const emailBodyBook = response.body.result;
      cy.log(emailBodyBook);

      const parser = new DOMParser();
      const doc = parser.parseFromString(emailBodyBook, 'text/html');

      const textContent = doc.body.textContent;

      cy.log(textContent);

      // Assert that the event and book number is present in the email body
      const eventNameText = 'Event: newrelise3'; // replace with the actual text you're looking for
      const eventFridayNameText = 'Event: The acacia strain';
      const bookNumberText = bookNumber;
      expect(textContent).to.include(eventNameText);

      expect(textContent).to.include(eventFridayNameText);

      expect(textContent).to.include(bookNumberText);
        
      });
    });


})






let fridayMailBoxFormat;
let fridayMailServiceToken;
let fridayMailBoxId;
// let otp;

Cypress.Commands.add('FridayLoginWithUITest', (user) => {
const apiEndpoint = 'https://www.developermail.com/api/v1/mailbox';


// Function to create mailbox and get mailbox details
const createMailbox = () => {
  const mailboxName = `testmailbox_${Date.now()}`;
  const requestBody = { name: mailboxName };

  return cy.request({
    method: 'PUT',
    url: apiEndpoint,
    body: requestBody,
    headers: { 'Content-Type': 'application/json' }
  }).then((response) => {
    expect(response.status).to.eq(200);
    fridayMailBoxId = response.body.result.name;
    fridayMailBoxFormat = `${fridayMailBoxId}@developermail.com`;
    fridayMailServiceToken = response.body.result.token;


    cy.log(fridayMailBoxId);

    cy.visit("https://showcase.test.mticket.com.ua/widget/4/1/user/login");
    cy.get('[inputmode="email"]').type(fridayMailBoxFormat);
    cy.get('.login-form-agreement-block').eq(2).find('[class="checkbox-field"]').click()
    // cy.get("[class='p-checkbox p-component base-checkbox']")find( ).click();
    cy.get("[class='p-button p-component regular-btn btn-submit']").click();

    // cy.wrap({ mailBoxFormat }).as('userData');

  });
};






// Function to complete the login process
const completeLogin = () => {
  // cy.visit("https://widget.mticket.com.ua/en/widget97site77/user/login");
  // cy.get('[inputmode="email"]').type(mailBoxFormat);
  // cy.get("[class='p-checkbox p-component base-checkbox']").click();
  // cy.get("[class='btn btn-regular']").click();
  cy.get(".cc-btn.cc-btn-accept.cc-btn-accept-all").click();
  cy.wait(1000);
  cy.get('[inputmode="numeric"]').type("111");
  cy.wait(1000);
  cy.get("[class='p-button p-component regular-btn btn-submit']").click();
  cy.wait(2000);
};




cy.session([user], () => {
  createMailbox()
    .then(() => {
      completeLogin();

      // cy.wrap( {mailBoxFormat, otp} ).as('userDataNew');
    });
}, {
  
  cacheAcrossSpecs: true // Enable session caching across different spec files
});




});


Cypress.Commands.add('GetBookMailFriday', (bookNumberFriday) => {


  cy.wait(10000); // Wait for email to be sent

  return cy.request({
    method: 'GET',
    url: `https://www.developermail.com/api/v1/mailbox/${fridayMailBoxId}`,
    headers: { "Content-Type": "application/json", "X-MailboxToken": fridayMailServiceToken }
  }).then((response) => {
    expect(response.status).to.eq(200);

    const resultIdBookMail = response.body.result[0];

    cy.log(resultIdBookMail);
    cy.wait(2000);
    return cy.request({
      method: 'GET',
      url: `https://www.developermail.com/api/v1/mailbox/${fridayMailBoxId}/messages/${resultIdBookMail}`,
      headers: { "Content-Type": "application/json", "X-MailboxToken": fridayMailServiceToken }
    }).then((response) => {
      expect(response.status).to.eq(200);

    const emailBodyBook = response.body.result;
    cy.log(emailBodyBook);

    const parser = new DOMParser();
    const doc = parser.parseFromString(emailBodyBook, 'text/html');

    const textContent = doc.body.textContent;

    cy.log(textContent);

    // Assert that the event and book number is present in the email body
    const eventFridayNameText = 'Event: The acacia strain';
    const bookNumberText = bookNumberFriday;
    expect(textContent).to.include(bookNumberText);

    expect(textContent).to.include(eventFridayNameText);


      
    });
  });


})




