/// <reference types="cypress" />
import { And, When, Then, Given } from "cypress-cucumber-preprocessor/steps";
beforeEach(() => {
  cy.clearCookies();
  cy.visit(`https://app.identifi.com/login`);
});
Given(`User is in login page`, () => {
  cy.get(`.chakra-heading.css-yhx5qg`).contains("Identifi beta");
});
When(`User inputs valid email address`, () => {
  cy.get(`input[data-test='email.input']`).type(
    "carmellajoy.ventanilla22@gmail.com"
  );
});
And(`clicks Sign In button`, () => {
  cy.get(`button[type='submit']`).click();
});
And(`inputs correct password`, () => {
  cy.get(`#password`).type("password");
});
And(`And clicks Sign In button`, () => {
  cy.get('data-test=["signin.button"]').click();
});
Then(`User successfully login to his account`, () => {
  cy.url().should("eq", `https://app.identifi.com/dashboard`);
});

// User logs in with invalid email
When(`User types invalid email ex."carmella.ventanilla@gmail.com"`, () => {
  cy.get(`input[data-test='email.input']`).type(
    "carmella.ventanilla@gmail.com"
  );
});
And(`User clicks Sign in button`, () => {
  cy.get('button[type="submit"]').click();
});
Then(`Message "Email address not found." appears`, () => {
  cy.get("#chakra-toast-manager-top").should("exist");
});

//User can't login using incorrect password
When(`User inputs valid email address`, () => {
  cy.get(`input[data-test='email.input']`)
    .clear()
    .type("carmellajoy.ventanilla22@gmail.com");
});
And(`clicks Sign In button`, () => {
  cy.get(`button[type="submit"]`).click();
});
And(`inputs incorrect password`, () => {
  cy.get(`#password`).type("password123");
});
And(`And clicks Sign In button`, () => {
  cy.get('data-test=["signin.button"]').click();
});
Then('Message "Invalid email or password." appears', () => {
  cy.get('li[class="chakra-toast"] p[class="chakra-text css-s6fle"]').should(
    "exist"
  );
});

//  user cannot login without entering an email address
Given(`User did not input an email`, () => {
  cy.get(`input[data-test="email.input"]`).focus().clear();
});
When('User clicks "Sign In" button', () => {
  cy.get('[data-test="signin.button"]').click();
});
Then(`Error message "Email is required." appears`, () => {
  cy.get("#email-feedback").should("exist");
});

// User can log out from the Identifi app
Given(`User is in the Dashboard`, () => {
  cy.get(`.chakra-heading.css-yhx5qg`).contains("Identifi beta");
  cy.get(`input[data-test='email.input']`).type(
    "carmellajoy.ventanilla22@gmail.com"
  );
  cy.get(`button[type='submit']`).click();
  cy.get(`#password`).type("password");
  cy.get(`button[type='submit']`).click();
  cy.url().should("eq", `https://app.identifi.com/dashboard`);
});
When(`User clicks the profile button`, () => {
  cy.get(`#menu-button-user-menu`).click();
});
And(`clicks Logout button`, () => {
  cy.contains(`p.chakra-text`, "Logout").should(`exist`).click();
});
Then("user successfully logsout  from account", () => {
  cy.url().should("eq", `https://app.identifi.com/login`);
});
