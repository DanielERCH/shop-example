class Page {
  constructor() {
    this.openLogIn = "#login2";
    this.openSignIn = "#signin2";
    this.logout = "#logout2";
    this.element = null;
  }

  visit() {
    cy.visit("https://demoblaze.com/index.html");
  }

  click(elementName) {
    switch (elementName) {
      case "Sign up":
        this.element = this.openSignIn;
        break;
      case "Log in":
        this.element = this.openLogIn;
        break;
      case "Log out":
        this.element = this.logout;
        break;
    }
    cy.get(this.element).click();
  }

  waitSeconds(time) {
    cy.wait(time * 1000);
  }

  
}

module.exports = new Page();
