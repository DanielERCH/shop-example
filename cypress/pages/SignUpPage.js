class SignUpPage {
    constructor() {
        this.username = "#sign-username"
        this.password = "#sign-password"
        this.password = "#sign-password"
        this.signUpButton = "#signInModal > div > div > div.modal-footer > button.btn.btn-primary"
    }

    registerInputComplete() {
        cy.fixture('credentials').then(credentials => {
            cy.log(credentials)
            cy.get(this.username).type(credentials.username)
            cy.get(this.password).type(credentials.password)
        })
    }

    registerInputClean() {
        cy.get(this.username).clear()
        cy.get(this.password).clear()
    }


    alertConfirm(messageAlert) {
        cy.on('window:confirm', (str) => {
            expect(str).to.eq(messageAlert)
        })
        // cy.get('button').click()
    }

    checkRegister() {
        cy.get(this.signUpButton).click();
    }
    
}


module.exports = new SignUpPage()