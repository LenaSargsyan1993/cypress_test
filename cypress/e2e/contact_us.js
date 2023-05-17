/// <reference types = "cypress" />

describe("Contact Us Tests", ()=> {

    it ("Check Submit functionality when all data is input", () => {

        cy.visit ("https://webdriveruniversity.com/Contact-Us/contactus.html");

        cy.get ("[name = 'first_name']").type ("Lena");
        cy.get ("[name = 'last_name']").type ("Sargsyan");
        cy.get ("[name = 'email']").type ("sargsyanlena@mail.ru");
        cy.get ("[name = 'message']").type ("It`s so late but I`m still learning");
        cy.get ("[type = 'submit']").click()

        cy.get ("h1").should("have.text", "Thank You for your Message!")
    });

    it ("Check Submit functionality when not all the data aren`t input", () => {

        cy.visit ("https://webdriveruniversity.com/Contact-Us/contactus.html");

        cy.get ("[name = 'first_name']").type ("Mary");
        cy.get ("[name = 'last_name']").type ("Sarg");
        cy.get ("[name = 'message']").type ("It`s so late but I`m still learning");
        cy.get ("[type = 'submit']").click()

        cy.get('body').should("contain.text", "Error: all fields are required")
    });

});





