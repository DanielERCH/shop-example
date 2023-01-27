class LoginPage {
  constructor() {
    this.openLogIn = "#login2";
    this.username = "#loginusername";
    this.password = "#loginpassword";
    this.checkUser = "#nameofuser";
    this.logInButton =
      "#logInModal > div > div > div.modal-footer > button.btn.btn-primary";
    this.logout = "#logout2";
    this.nameofuser = "#nameofuser"
    this.userNav = null
  }

  loginInputComplete() {
    cy.fixture("credentials").then((credentials) => {
      this.userNav = credentials.username
      cy.get(this.username).type(credentials.username);
      cy.get(this.password).type(credentials.password);
    });
  }

  loginInputClean() {
    cy.get(this.username).clear();
    cy.get(this.password).clear();
  }

  checkUser(user) {
    cy.get(this.checkUser).should(($div) => {
      // access the native DOM element
      expect($div.get(0).innerText).to.eq(user);
    });
  }

  checkLogin() {
    cy.get(this.logInButton).click();
  }

  logout() {
    cy.get(this.logout).click();
  }

  checkLogout() {
    cy.get(this.checkUser).should(($div) => {
      // access the native DOM element
      expect($div.get(0).innerText).to.eq("Log in");
    });
  }

  validateLogout() {
    cy.get(this.logout).contains('Log in')
  }

  validateLogin() {
    cy.get(this.nameofuser).contains(`Welcome ${this.userNav}`)
  }
}

module.exports = new LoginPage();
