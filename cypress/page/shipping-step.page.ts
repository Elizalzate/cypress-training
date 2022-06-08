class ShippingStepPage {

    private btnAgreeTerms: string;
    private btnProcessCarrier: string;

    constructor() {
        this.btnAgreeTerms = "#cgv";        
        this.btnProcessCarrier = "button[name='processCarrier']";
    }

    public proceedToCheckout(): void {
        cy.get(this.btnAgreeTerms).click()
        cy.get(this.btnProcessCarrier).click();
    }
}

export { ShippingStepPage }
