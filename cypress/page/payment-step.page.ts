class PaymentStepPage {

    private btnPayByBankWire: string;
    private btnConfirmMyOrder: string;
    private lblConfirmMyOrder: string;
    private lblFinishedOrder: string;

    constructor() {
        this.btnPayByBankWire = ".bankwire";
        this.btnConfirmMyOrder = "#cart_navigation > button > span";
        this.lblConfirmMyOrder = "I confirm my order";
        this.lblFinishedOrder = "#center_column > div > p > strong";
    }

    public payByBankWire(): void {
        cy.get(this.btnPayByBankWire).click()
    }

    public confirmOrder(): void {
        cy.get(this.btnConfirmMyOrder).contains(this.lblConfirmMyOrder).click();
    }

    public getConfirmation(): void {
        cy.get(this.lblFinishedOrder).should("have.text","Your order on My Store is complete.")
    }
}

export { PaymentStepPage }
