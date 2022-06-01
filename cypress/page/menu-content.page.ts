class MenuContentPage {
    private tShirtMenu: string;
    private menuContentPageURL: string
    private btnAddToCart: string
    private btnProceedToCheckout: string
    private btnConfirmSummary: string

    constructor() {
        this.btnAddToCart = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
        this.btnConfirmSummary = ".cart_navigation span";
        this.btnProceedToCheckout = "[style*='display: block;'] .button-container > a";
        this.tShirtMenu = "#block_top_menu > ul > li:nth-child(3) > a";
        this.menuContentPageURL = "http://automationpractice.com/"
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

    public goToTShirtMenu(): void {
        cy.get(this.tShirtMenu).click()
    }

    public addTShirt(): void {
        cy.get(this.btnAddToCart).click();
        cy.get(this.btnProceedToCheckout).click();
    }

    public confirmSummary(): void {
        cy.get(this.btnConfirmSummary).click();
    }
}

export { MenuContentPage }
