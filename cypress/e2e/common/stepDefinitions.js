// let DATA = require('../../fixtures/data');
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import buy from "../../pages/BuyPage";
import login from "../../pages/LoginPage";
import signup from "../../pages/SignUpPage";
import page from "../../pages/Page";
// let pageObject = undefined;

Given("Ingresar a la página de la tienda", (value) => {
  page.visit();
});

Then("Dar click en {string}", (elementName) => {
  page.click(elementName);
});

Then("Completar los campos de registro", () => {
  signup.registerInputComplete();
});

Then("Limpiar los campos de registro", () => {
  signup.registerInputClean();
});

Then("Limpiar los campos de login", () => {
  login.loginInputClean();
});

Then("Dar click para completar el registro", (elementName) => {
  signup.checkRegister();
});

When("Validar que se halla registrado el usuario", () => {
  signup.alertConfirm("Sign up successful.");
});

Then("Seleccionar un producto", () => {
  buy.product();
});

Then("Completar los campos de login", () => {
  login.loginInputComplete();
});

Then("Dar click en login para completar", () => {
  login.checkLogin();
});

Then("Seleccionar la categoría {string}", (type) => {
  buy.category(type);
});

Then("Esperar {int} segundos", (seconds) => {
  page.waitSeconds(seconds);
});

Then("Agregar un producto al carrito", () => {
  buy.addProduct();
});

When("Validar que se halla agregado el producto", () => {
  buy.alertConfirmBuy();
});

When("Validar que se halla cerrado la cuenta", () => {
  login.validateLogout();
});

When("Validar que el usuario se encuentre en la cuenta personal", () => {
	login.validateLogin()
});
