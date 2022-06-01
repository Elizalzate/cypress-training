class ShippingStepPage {

    private btnAgreeTerms: string;
    private btnProcessCarrier: string;

    constructor() {
        this.btnAgreeTerms = "#uniform-cgv";        
        this.btnProcessCarrier = "[name='processCarrier']";
    }

    public proceedToCheckout(): void {
        cy.get(this.btnAgreeTerms).click()
        cy.get(this.btnProcessCarrier).click();
    }
}

export { ShippingStepPage }
