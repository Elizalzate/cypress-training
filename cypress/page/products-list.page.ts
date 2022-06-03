class ProductsListPage {

    private btnAddToCart: string
    private btnProceedToCheckout: string

    constructor() {        
        this.btnAddToCart = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
        this.btnProceedToCheckout = ".button-container > a[title='Proceed to checkout']";
    }

    public addTShirt(): void {
        cy.get(this.btnAddToCart).click();
        cy.get(this.btnProceedToCheckout).click();
    }
    
}

export { ProductsListPage }
