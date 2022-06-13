class MenuContentPage {
    private tShirtMenu: string;
    private DressMenu: string;
    private menuContentPageURL: string

    constructor() {
        this.DressMenu = "#block_top_menu > ul > li > a[title='Dresses']"
        this.tShirtMenu = "#block_top_menu > ul > li > a[title='T-shirts']";
        this.menuContentPageURL = "http://automationpractice.com/"
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

    public goToTShirtMenu(): void {
        cy.get(this.tShirtMenu).click()
    }

    public goToDressesMenu(): void {
        cy.get(this.DressMenu).click()
    }

}

export { MenuContentPage }
