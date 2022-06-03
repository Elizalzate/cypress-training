import {AddressStepPage} from "../page/index";
import {LoginPage} from "../page/index";
import {MenuContentPage} from "../page/index";
import {PaymentStepPage} from "../page/index";
import {ProductsListPage} from "../page/index";
import {ShippingStepPage} from "../page/index";
import {ShoppingCartPage} from "../page/index";

const adressStepPage = new AddressStepPage();
const loginPage = new LoginPage();
const menuContentPage = new MenuContentPage();
const paymentStepPage = new PaymentStepPage();
const productsListPage = new ProductsListPage();
const shippingStepPage = new ShippingStepPage();
const shoppingCartPage = new ShoppingCartPage();
const email = "aperdomobo@gmail.com";
const pass = "WorkshopProtractor";

describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    productsListPage.addTShirt();

    shoppingCartPage.confirmSummary();

    loginPage.signIn(email, pass);
    adressStepPage.proceedToCheckout();

    shippingStepPage.proceedToCheckout();

    paymentStepPage.payByBankWire();
    paymentStepPage.confirmOrder();

    paymentStepPage.verifyConfirmationMessage("Your order on My Store is complete.");
  });
});
