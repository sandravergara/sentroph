@builder
Feature: Create online shop

    As a user 
    I want to login via email credentials
    so that I can create an online shop

    @login
    Scenario: user logs in with valid credentials
        Given user is at the sentro login page
        When user fill in the email and password fields
        Then the browser should redirect to sentro dashboard

    @sentroDashboardPage
    Scenario: User will create an online shop with five steps
        Given a user is at the dashboard page
        When the user clicks the Create my online shop button
        Then the browser should redirect to store builder

    @basicInfo
    Scenario: User will fill in all the required data in the store builder
        Given a user is at the basic info page
        When a user fill in the required fields in Basic Info
        Then browser will be redirected to contact details page

    @contactDetails
    Scenario: User fill in the required fields in Contact Details
        Given a user is at the Contact Details page
        When a user fill in the required field in Contact Details
        Then browser will be redirected to branding page

    @brandingPage
    Scenario: User uploads an image in Branding page
        Given a user is at the branding page
        When a user uploads an image in Branding page
        Then browser will be redirected to product details page

    @paymentsPage
    Scenario: User uploads a product in Products page
        Given a user is at product page
        When a user uploads a product in Product page