@login
Feature: Login using email credentials

    Scenario: User is at the Sentro marketing page
        Given a user is at the Sentro Marketing page
        When the user clicks the Login button
        Then the browser should redirect to Login page
    
    @invalidCredentials
    Scenario: User login with invalid credentials
        Given that a user is at the Login Page
        When the user enter an invalid credentials
        Then the browser should not redirect to Sentro dashboard

    @validLogin
    Scenario: User login with valid credentials
        Given a user is at the login Page
        When the user enter a valid credentials
        Then the browser should redirect to Sentro Dashboard
    
    @emailNotVerified
    Scenario: User login with account not verified
        Given a user at the Login page
        When the user login using an account that is not verified
        Then user should be redirected and should not be able to create a website

    @emailNotVerifiedDashboard
    Scenario: Verify that the creation of online shop is not available.
        Given a user is at the Dashboard page
        When user clicks the Activate account button
        Then a modal will prompt