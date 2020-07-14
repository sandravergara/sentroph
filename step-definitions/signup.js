const { Given, When, Then } = require('cucumber');
const { client } = require('nightwatch-api');
const  data  = require('../common/dataCredentials')

// Scenario: User is at the Sentro marketing page

Given('a user is at the Sentro marketing page', function () {
    const signupCommands = client.page.signupCommands();
    
    return signupCommands
    .navigate()
    .maximizeWindow()   
});

When('the user clicks the Signup button', function () {
    const signupCommands = client.page.signupCommands();
    
    return signupCommands
    .pause(1000)
    .click('@signupMP')
});

Then('the browser should redirect to Signup page', function () {
    const signupCommands = client.page.signupCommands();
    
    return signupCommands
    .assert.title('Sentro | Sign-up for an account')
});


// Scenario: User login with valid inputs
Given('that a user is at the Signup Page', function () {
    const signupCommands = client.page.signupCommands();
    
    return signupCommands
    .navigate()
    .maximizeWindow()   
  });

When('the user signs up with valid inputs', function () {
    const signupCommands = client.page.signupCommands();
    
    return signupCommands
    .pause(1000)
    .waitForElementVisible('@signupMP')
    .click('@signupMP')
    .validSignup(data.validSignup.signupfirstName,
                data.validSignup.signuplastName,
                data.validSignup.signupEmail,
                data.validSignup.signupMobileNumber,
                data.validSignup.signupPassword)
    .click('@checkBox')
    .pause(1000)
    .click('@signupButton')
});

Then('the browser should redirect to email verification page', function () {
    const signupCommands = client.page.signupCommands();
    
    return signupCommands
    .assert.urlContains('https://app.dev.sentro.ph/email_verification')
});
