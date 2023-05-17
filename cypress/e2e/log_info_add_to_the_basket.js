/// <reference types = "cypress" />

describe("Iterate over elements", ()=> {

    it ("Log information of Fragrances", () => {

        cy.visit ("https://automationteststore.com/");

        cy.get ("a[href*='product/category&path=']").contains ("Fragrance").click()
        cy.get (".fixed_wrapper .prdocutname").each (($el, index, $list) => {
            cy.log ("Index: " + index + " : " + $el.text ())
        })
    });
    it ("Select a product from the list", () => {

        cy.visit ("https://automationteststore.com/");

        cy.get ("a[href*='product/category&path=']").contains ("Hair Care").click()
        cy.get (".fixed_wrapper .prdocutname").each (($el, index, $list) => {
            if ($el.text().includes ("Curls to straight Shampoo")) {
                cy.wrap ($el).click()
            }
        })
    });

});
