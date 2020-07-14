@signup
Feature: Signup using email credentials

    Scenario: User is at the Sentro marketing page
        Given a user is at the Sentro marketing page
        When the user clicks the Signup button
        Then the browser should redirect to Signup page
    
    @validSignup
    Scenario: User signup with valid inputs
        Given that a user is at the Signup Page
        When the user signs up with valid inputs
        Then the browser should redirect to email verification page