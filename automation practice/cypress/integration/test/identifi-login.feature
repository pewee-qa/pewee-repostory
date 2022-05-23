Feature: User login in Identifi

Scenario: User logs in with valid email address and valid password

Given User is in login page
    When User inputs valid email address
        And clicks Sign In button
        And inputs correct password
        And clicks Sign In button
    Then User successfully login to his account



Scenario: User logs in with invalid email
    When User types invalid email ex."carmella.ventanilla@gmail.com"
        And User clicks Sign in button
    Then Message "Email address not found." appears



Scenario: User can't login using incorrect password
    When User inputs valid email address
        And clicks Sign In button
        And inputs incorrect password
        And clicks Sign In button
    Then Message "Invalid email or password." appears



Scenario: user cannot login without entering an email address
Given User did not input an email
    When User clicks "Sign In" button
    Then Error message "Email is required." appears


Scenario: User can log out from the Identifi app
Given User is in the Dashboard
    When User clicks the profile button
        And clicks Logout button
    Then user successfully logsout  from account


