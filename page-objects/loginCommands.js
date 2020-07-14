const elements = {
  loginMP: {
    selector: "button[label='Login'] > .MuiButton-label-52"
  },
  email: {
    selector: "input[name='username']",
  },
  password: {
    selector: "input[name='password']",
  },
  loginButton: {
    selector: "//button[@class='MuiButtonBase-root-736 MuiButton-root-708 MuiButton-contained-716 MuiButton-containedPrimary-717 MuiButton-fullWidth-730']",
    locateStrategy: 'xpath'
  },
  errorMessage: {
    selector: ".ant-alert.ant-alert-closable.ant-alert-error.ant-alert-no-icon > .ant-alert-message"
  },
  accountVerificationButton: {
    selector: "//button[@class='MuiButtonBase-root-2678 MuiButton-root-2650 MuiButton-contained-2658 MuiButton-containedPrimary-2659 MuiButton-fullWidth-2672']",
    locateStrategy: 'xpath'
  },
  modalVerification: {
    selector: "h2#simple-modal-title"
  }
};

const loginCommands = {
  invalidLogin: function(invalidEmail, invalidPassword) {
    return this
    .waitForElementVisible('@email')
    .setValue('@email', invalidEmail)
    .setValue('@password', invalidPassword)
    .click('@loginButton')
  },
  validLogin: function(email, password) {
    return this
    .waitForElementVisible('@email')
    .setValue('@email', email)
    .setValue('@password', password)
    .click('@loginButton')
  },
  notVerified: function(notVerifiedEm, notVerifiedPw) {
    return this
    .waitForElementVisible('@email')
    .setValue('@email', notVerifiedEm)
    .setValue('@password', notVerifiedPw )
    .click('@loginButton')
  }
};


module.exports = {
  url: function() {
      return this.api.launchUrl;
  },
  commands: [loginCommands],
  elements: elements,
};





