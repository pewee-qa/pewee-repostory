Feature: User is in the People page

Scenario: User views the People page

Given User is in the Dashboard
    When User clicks People button
    Then User should be redirected to the People page
    
    

Scenario: User can search a member

Given User is in the People Page
    When User types a member
    And clicks the member's profile
    Then User should be redirected to the member profile page


