import {AddressStepPage} from "../page/index";
import {LoginPage} from "../page/index";
import {MenuContentPage} from "../page/index";
import {PaymentStepPage} from "../page/index";
import {ProductsListPage} from "../page/index";
import {ShippingStepPage} from "../page/index";
import {ShoppingCartPage} from "../page/index";

let addressStepPage: AddressStepPage;
let loginPage: LoginPage;
let menuContentPage: MenuContentPage;
let paymentStepPage: PaymentStepPage;
let productsListPage: ProductsListPage;
let shippingStepPage: ShippingStepPage;
let shoppingCartPage: ShoppingCartPage;
let email: string;
let pass: string;

describe("Buy a t-shirt", () => {
  before(()=>{
    addressStepPage = new AddressStepPage();
    loginPage = new LoginPage();
    menuContentPage = new MenuContentPage();
    paymentStepPage = new PaymentStepPage();
    productsListPage = new ProductsListPage();
    shippingStepPage = new ShippingStepPage();
    shoppingCartPage = new ShoppingCartPage();
    email = "aperdomobo@gmail.com";
    pass = "WorkshopProtractor";
  });

  it("then should be bought a t-shirt", () => {
    // Arrange
    const expectedConfirmationMessage = "Your order on My Store is complete.";
    menuContentPage.visitMenuContentPage();

    // Act
    menuContentPage.goToTShirtMenu();

    productsListPage.addTShirt();

    shoppingCartPage.confirmSummary();

    loginPage.signIn(email, pass);
    addressStepPage.proceedToCheckout();

    shippingStepPage.proceedToCheckout();

    paymentStepPage.payByBankWire();
    paymentStepPage.confirmOrder();

    // Assert
    paymentStepPage.verifyConfirmationMessage(expectedConfirmationMessage);
  });
});
