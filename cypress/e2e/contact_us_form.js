/// <reference types = "cypress" />

describe("Contact Us Tests", ()=> {

    it ("Check Submit functionality when all the data are input", () => {

        cy.visit ("https://automationteststore.com/index.php?rt=content/contact");

        cy.get ("#ContactUsFrm_first_name").type ("Mary");
        cy.get ("#ContactUsFrm_email").type ("sargsyanlena@mail.ru");
        cy.get("#ContactUsFrm_enquiry").type ("When is the upcoming discount for fragrances?");
        cy.get("button[title='Submit']").click ()
        cy.get('.mb40 > :nth-child(3)').should ("have.text", "Your enquiry has been successfully sent to the store owner!")
    });

    it ("Check Submit functionality when all the data aren`t input", () => {

        cy.visit ("https://automationteststore.com/index.php?rt=content/contact");

        cy.get ("#ContactUsFrm_first_name").type ("Mary");
        cy.get("#ContactUsFrm_enquiry").type ("When is the upcoming discount for fragrances?");
        cy.get("button[title='Submit']").click ()
       
        cy.get('.element_error').should ("have.text", "Email: is required field! E-Mail Address does not appear to be valid!")
    })

});
