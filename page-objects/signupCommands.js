const elements = {
  signupMP: {
    selector: "button[label='Sign up']"
  },
  firstName: {
    selector: "input[name='firstName']"
  },
  lastName: {
    selector: "input[name='lastName']"
  },
  email: {
    selector: "input[name='email']",
  },
  mobileNumber: {
    selector: "input[name='phoneNumber']"
  },
  password: {
    selector: "input[name='password']",
  },
  checkBox: {
    selector: "[type='checkbox']"
  },
  signupButton: {
    selector: ".MuiBox-root.jss580 > button[label='Sign up']"
    // locateStrategy: 'xpath'
  },
  accountVerificationLabel: {
    selector: '.jss33',
  }
};
  
const loginCommands = {
  invalidSignup: function(invalidEmail, invalidPassword) {
    return this
    .waitForElementVisible('@email')
    .setValue('@email', invalidEmail)
    .setValue('@password', invalidPassword)
    .click('@loginButton')
  },
  validSignup: function(signupfirstName, signuplastName, signupEmail, signupMobileNumber, signupPassword) {
    return this
    .waitForElementVisible('@firstName')
    .setValue('@firstName', signupfirstName)
    .setValue('@lastName', signuplastName)
    .setValue('@email', signupEmail)
    .setValue('@mobileNumber', signupMobileNumber)
    .setValue('@password', signupPassword)
    .click('@checkBox')
    .click('@signupButton')
  }
};
  
module.exports = {
  url: function() {
      return this.api.launchUrl;
  },
  commands: [loginCommands],
  elements: elements,
};
  
  
  
  
  
  