class AddressStepPage {

    private btnProcesstoCheckout: string;

    constructor() {
        this.btnProcesstoCheckout = "button[name='processAddress']";
    }

    public proceedToCheckout(): void {
        cy.get(this.btnProcesstoCheckout).click()
    }
}

export { AddressStepPage }
