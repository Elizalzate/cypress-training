class AddressStepPage {

    private btnProcesstoCheckout: string;

    constructor() {
        this.btnProcesstoCheckout = "[name='processAddress']";
    }

    public proceedToCheckout(): void {
        cy.get(this.btnProcesstoCheckout).click()
    }
}

export { AddressStepPage }
