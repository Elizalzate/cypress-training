import {AdressStepPage} from "../page/index";
import {LoginPage} from "../page/index";
import {MenuContentPage} from "../page/index";

const adressStepPage = new AdressStepPage();
const loginPage = new LoginPage();
const menuContentPage = new MenuContentPage();

describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    cy.get("#center_column a.button.ajax_add_to_cart_button.btn.btn-default").click();
    cy.get("[style*='display: block;'] .button-container > a").click();
    cy.get(".cart_navigation span").click();

    loginPage.signIn("aperdomobo@gmail.com", "WorkshopProtractor");
    adressStepPage.proceedToCheckout();
    /*
    cy.get("#uniform-cgv").click();
    cy.get("[name='processCarrier']").click();

    cy.get(".bankwire").click();

    cy.get("#cart_navigation > button > span").contains("I confirm my order").click();

    cy.get("#center_column > div > p > strong")
        .should("have.text", "Your order on My Store is complete.");*/
  });
});
