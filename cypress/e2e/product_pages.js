/// <reference types = "cypress" />

describe("Navigating to Product Pages", ()=> {

    it ("Check if product pages open", () => {

        cy.visit ("https://automationteststore.com/");

        cy.get ("a[href*='product/category&path=']").contains ("Apparel & accessories").click()
        cy.get ("a[href*='product/category&path=']").contains ("Makeup").click()
        cy.get ("a[href*='product/category&path=']").contains ("Skincare").click()
    });

});
