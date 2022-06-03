class ShoppingCartPage {
    
    private btnConfirmSummary: string

    constructor() {        
        this.btnConfirmSummary = ".cart_navigation span";
    }

    public confirmSummary(): void {
        cy.get(this.btnConfirmSummary).click();
    }
}

export { ShoppingCartPage }
