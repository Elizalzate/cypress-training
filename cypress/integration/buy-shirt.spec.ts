import {AddressStepPage} from "../page/index";
import {LoginPage} from "../page/index";
import {MenuContentPage} from "../page/index";
import { PaymentStepPage } from "../page/index";
import {ShippingStepPage} from "../page/index";

const adressStepPage = new AddressStepPage();
const loginPage = new LoginPage();
const menuContentPage = new MenuContentPage();
const paymentStepPage = new PaymentStepPage();
const shippingStepPage = new ShippingStepPage();
const email = "aperdomobo@gmail.com";
const pass = "WorkshopProtractor";

describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {

    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    menuContentPage.addTShirt();
    menuContentPage.confirmSummary();

    loginPage.signIn(email, pass);
    adressStepPage.proceedToCheckout();

    shippingStepPage.proceedToCheckout();

    paymentStepPage.payByBankWire();
    paymentStepPage.confirmOrder();
    paymentStepPage.getConfirmation();
  });
});
