/// <reference types = "cypress" />

describe("Inspect Automation Test Store Items", ()=> {

    it ("Check click functionality", () => {

        cy.visit ("https://automationteststore.com/");

        cy.get (".prdocutname").contains ("Skinsheen Bronzer Stick").click()

     
    });

    it ("Click on the second item", () => {
        cy.visit ("https://automationteststore.com/");
        cy.get (".fixed_wrapper"). find (".prdocutname").eq (1).click();
        cy.wait (6000)

    });

});
