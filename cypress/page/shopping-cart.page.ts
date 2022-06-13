class ShoppingCartPage {
    
    private btnConfirmSummary: string

    constructor() {        
        this.btnConfirmSummary = ".cart_navigation a[title='Proceed to checkout']";
    }

    public confirmSummary(): void {
        cy.get(this.btnConfirmSummary).click();
    }
}

export { ShoppingCartPage }
