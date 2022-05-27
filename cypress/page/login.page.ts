class LoginPage {
    
    private emailField: string;
    private passwordField: string;
    private btnSignIn: string;

    constructor() {
        this.emailField  = "#email";
        this.passwordField = "#passwd";
        this.btnSignIn  = "#SubmitLogin";
    }

    public signIn(email:string, password:string): void {
        cy.get(this.emailField).type(email);
        cy.get(this.passwordField).type(password);
        cy.get(this.btnSignIn).click();
    }
}

export { LoginPage }
