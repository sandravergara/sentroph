const { Given, When, Then } = require('cucumber');
const { client } = require('nightwatch-api');
const data = require('../common/dataCredentials');

//Scenario: Marketing page
Given('a user is at the Sentro Marketing page', function () {
    const loginCommands = client.page.loginCommands();
    return loginCommands
    .navigate()
    .maximizeWindow()   
});

When('the user clicks the Login button', function () {
    const loginCommands = client.page.loginCommands();
    
    return loginCommands
    .pause(1000)
    .click('@loginMP')

});

Then('the browser should redirect to Login page', function () {
    const loginCommands = client.page.loginCommands();
    
    return loginCommands
    .assert.title('Sentro | Log-in')
});

//Scenario: Invalid Credentials
Given('that a user is at the Login Page', function () {
    const loginCommands = client.page.loginCommands();
    return loginCommands
    .navigate()
    .maximizeWindow()   
});

When('the user enter an invalid credentials', function () {
    const loginCommands = client.page.loginCommands();
    
    return loginCommands
    .pause(1000)
    .click('@loginMP')
    .invalidLogin(data.invalidLogin.invalidEmail, data.invalidLogin.invalidPassword)
    .click('@loginButton')
});

Then('the browser should not redirect to Sentro dashboard', function () {
    const loginCommands = client.page.loginCommands();
    
    return loginCommands
    .assert.containsText('Error Message:', '@errorMessage', 'Unable to log in with provided credentials.')
});


// Scenario: User login with valid credentials
Given('a user is at the login Page', function () {
    const loginCommands = client.page.loginCommands();
    return loginCommands
    .navigate()
    .maximizeWindow()   
});

When('the user enter a valid credentials', function () {
    const loginCommands = client.page.loginCommands();
    
    return loginCommands
    .pause(1000)
    .click('@loginMP')
    .validLogin(data.validLogin.email, data.validLogin.password)
    .click('@loginButton')
});

Then('the browser should redirect to Sentro Dashboard', function () {
    const loginCommands = client.page.loginCommands();
    
    return loginCommands
    .assert.title('Sentro | Welcome to Sentro')
});

// Scenario: User login with account not verified
Given('a user at the Login page', function () {
    const loginCommands = client.page.loginCommands();
    
    return loginCommands
    .navigate()
    .maximizeWindow() 
});

When('the user login using an account that is not verified', function () {
    const loginCommands = client.page.loginCommands();
    
    return loginCommands
    .pause(1000)
    .click('@loginMP')
    .validLogin(data.notVerified.notVerifiedEm, data.notVerified.notVerifiedPw)
    .click('@loginButton')
});

Then('user should be redirected and should not be able to create a website', function () {
    const loginCommands = client.page.loginCommands();
    
    return loginCommands
    .assert.title('Sentro | Welcome to Sentro')

});

//Scenario: Verify that the creation of online shop is not available.
Given('a user is at the Dashboard page', function () {
    const loginCommands = client.page.loginCommands();
    
    return loginCommands
    .navigate()
    .maximizeWindow() 
  });

When('user clicks the Activate account button', function () {
    const loginCommands = client.page.loginCommands();
    
    return loginCommands
    .pause(1000)
    .click('@loginMP')
    .validLogin(data.notVerified.notVerifiedEm, data.notVerified.notVerifiedPw)
    .click('@loginButton')
    .waitForElementVisible('@accountVerificationButton')
    .click('@accountVerificationButton')
    
});

Then('a modal will prompt', function () {
    const loginCommands = client.page.loginCommands();
    
    return loginCommands
    .assert.containsText('@modalVerification', 'Activate your Sentro account to enjoy more features')
});
