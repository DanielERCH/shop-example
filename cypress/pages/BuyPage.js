class BuyPage {
  constructor() {
    this.selectCategory = "#contcont > div > div.col-lg-3 > div > a:nth-child(3)";
    // this.selectCategory = "a#itemc:nth-child(3)";
    this.selectionProduct = "#tbodyid > div:nth-child(1) > div > div > h4 > a";
    this.addToCart = "#tbodyid > div.row > div > a";
    this.select = null
  }

  category(type) {
    switch (type) {
      case 'laptop':
        this.select = this.selectCategory 
        break;
    }
    cy.get(this.select).click();
  }

  product() {
    cy.get(this.selectionProduct).click();
  }

  addProduct() {
    cy.get(this.addToCart).click();
  }

  alertConfirmBuy(messageAlert) {
    cy.on("window:confirm", (str) => {
      expect(str).to.eq(messageAlert);
    });
    cy.get("button").click();
  }

}

module.exports = new BuyPage();
