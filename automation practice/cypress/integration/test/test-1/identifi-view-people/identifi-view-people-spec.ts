// <reference types="cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given(`User is in the Dashboard`, () => {
  cy.clearCookies();
  cy.visit(`https://app.identifi.com/login`);
  cy.get(`.chakra-heading.css-yhx5qg`).contains("Identifi beta");
  cy.get(`input[data-test='email.input']`).type(
    "carmellajoy.ventanilla22@gmail.com"
  );
  cy.get(`button[type='submit']`).click();
  cy.get(`#password`).type("password");
  cy.get(`button[type='submit']`).click();
  cy.url().should("eq", `https://app.identifi.com/dashboard`);
});

When(`User clicks People button`, () => {
  cy.get(`[data-test="people-menu"]`).click();
});

Then("User should be redirected to the People page", () => {
  cy.get(`[data-test="layout.content"]`).should("be.visible");
});

//User can search a member

Given(`User is in the People Page`, () => {
  cy.get('div[class="css-rf1a33"] p[class="chakra-text css-1732bhx"]').click();
  cy.get(`[data-test="layout.content"]`).should("be.visible");
});

When(`User types a member`, () => {
  cy.get(`.chakra-input`).type(`Alaiza`);
  cy.contains(`Alaiza`).should(`be.visible`, { timeout: 3000 });
});

And(`clicks the member's profile`, () => {
  cy.get(`div[class="css60gxg7"]`).click();
});

Then("User should be redirected to the member profile page", () => {
  cy.url().should(
    "eq",
    `https://app.identifi.com/profile/00a9b584b5188d612df109cdf5fc6b5e`
  );
});
