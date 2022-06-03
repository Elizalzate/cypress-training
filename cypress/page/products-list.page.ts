class ProductsListPage {

    private btnAddToCart: string
    private btnProceedToCheckout: string

    constructor() {        
        this.btnAddToCart = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
        this.btnProceedToCheckout = "[style*='display: block;'] .button-container > a";
    }

    public addTShirt(): void {
        cy.get(this.btnAddToCart).click();
        cy.get(this.btnProceedToCheckout).click();
    }
    
}

export { ProductsListPage }
