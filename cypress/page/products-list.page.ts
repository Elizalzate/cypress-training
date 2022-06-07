class ProductsListPage {

    private btnAddToCart: string
    private btnProceedToCheckout: string

    constructor() {        
        this.btnAddToCart = "#center_column a[title='Add to cart']";
        this.btnProceedToCheckout = ".button-container > a[title='Proceed to checkout']";
    }

    public addTShirt(): void {
        cy.get(this.btnAddToCart).click();
        cy.get(this.btnProceedToCheckout).click();
    }
    
}

export { ProductsListPage }
