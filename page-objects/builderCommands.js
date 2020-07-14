const elements = {
    loginMP: {
      selector: '#login_button'
    },
    email: {
      selector: '#username'
    },
    password: {
      selector: '#password'
    },
    loginButton: {
      selector: "//button[@id='submit_button']",
      locateStrategy: 'xpath'
    },
    createShopButton: {
        selector: '#createShop_button'
    },
    storeName: {
        selector: '#store_name'
    },
    storeShop: {
        selector: '#store_site'
    },
    tagline: {
        selector: '#store_slogan'
    },
    about: {
        selector: '#store_description'
    },
    address: {
        selector: '#address'
    },
    contact: {
        selector: '#mobile_number'
    },
    landline: {
        selector: '#landline'
    },
    sellersEmail: {
        selector: '#email'
    },
    facebook: {
        selector: '#facebook'
    },
    instagram: {
        selector: '#instagram' 
    },
    shopee: {
        selector: '#shopee'
    },
    productName: {
        selector: '#shopee',
    },
    productPrice: {
        selector: "[role='dialog'] > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-of-type(1) .MuiInputBase-input.MuiOutlinedInput-input"
    },
    productCategory: {
        selector: "[role] div:nth-of-type(2) > div:nth-of-type(2) .MuiOutlinedInput-input"
    },
    productDescription: {
        selector: '.MuiOutlinedInput-inputMultiline'
    },
    accountName: {
        selector: '[role] div:nth-of-type(2) div:nth-of-type(2) > div:nth-of-type(2) .MuiOutlinedInput-input'
    },
    accountNumber: {
        selector: "[role='dialog'] div:nth-of-type(3) .MuiOutlinedInput-input"
    },
    gcashNumber: {
        selector: '.MuiOutlinedInput-inputAdornedStart'
    },
    paymayaNumber: {
        selector: '.MuiOutlinedInput-inputAdornedStart'
    },
    paypalLink: {
        selector: '.MuiOutlinedInput-colorSecondary .MuiOutlinedInput-input'
    },
    contactDetailsLabel: {
        selector: "//div[contains(text(),'Do you have other social media accounts? Provide y')]",
        locateStrategy: 'xpath'
    },
    brandingPageLabel: {
        selector: "//div[contains(text(),'Cover Photo')]",
        locateStrategy: 'xpath'
    },
    productsPageLabel: {
        selector: "//div[contains(text(),'What products are you selling?')]",
        locateStrategy: 'xpath'
    },
    twotoneColor: {
        selector: "//body//div[@class='MuiFormControl-root']//div//div[2]//div[8]//button[1]",
        locateStrategy: 'xpath'
    },
    classic: {
        selector: "//div[@class='MuiBox-root jss7870']//button[1]",
        locateStrategy: 'xpath'
    },
    contemporary: {
        selector: "//div[@class='MuiBox-root jss7869']//button[2]",
        locateStrategy: 'xpath'
    },
    minimalist: {
        selector: "//body//button[3]",
        locateStrategy: 'xpath'
    },
    storeLogo: {
        selector: "//div[@class='MuiBox-root jss8230']//div//span[@class='ant-upload ant-upload-btn']",
        locateStrategy: 'xpath'
    },
    coverPhoto: {
        selector: "//div[@class='MuiBox-root jss9787']//div[@class='MuiFormControl-root']//div//span[@class='ant-upload ant-upload-btn']",
        locateStrategy: 'xpath'
    },
    aboutYourBusiness: {
        selector: "//div[@class='MuiBox-root jss9790']//div[@class='MuiFormControl-root']//div//span[@class='ant-upload ant-upload-btn']",
        locateStrategy: 'xpath' 
    },
    contactUs: {
        selector: "//div[@class='MuiBox-root jss9793']//div[@class='MuiFormControl-root']//div//span[@class='ant-upload ant-upload-btn']",
        locateStrategy: 'xpath'
    },
    paymentExpand: {
        selector: "div:nth-of-type(5) > .MuiCard-root.MuiPaper-elevation1.MuiPaper-root.MuiPaper-rounded > .MuiCardActions-root"
    },
    addPaymentMethodButton: {
        selector: ".MuiBox-root.jss18606 > button[label='Add Payment Method']",
    },
    selectPaymentMethod: {
        selector: "div:nth-of-type(1) > div:nth-of-type(1) > .MuiInputBase-fullWidth.MuiInputBase-root.MuiOutlinedInput-root > div[role='button']"
    },
    gcashMethod: {
        selector: 'ul > li:nth-of-type(2)'
    },
    paymayaMethod: {
        selector: 'ul > li:nth-of-type(3)'
    },
    paypalMethod: {
        selector: 'ul > li:nth-of-type(4)'
    },
    savePayment: {
        selector: "button[label='Save']"
    },
    saveAddNewProduct: {
        selector: "button[label='Save and add new product']"
    },
    saveProduct: {
        selector: "button[label='Save']"
    },
    nextButton: {
        selector: '#next_button'
    },
    editButton: {
        selector: '#edit_button'
    },
    deleteButton: {
        selector: '#delete_button'
    },
    deleteConfirmation: {
        selector: '#confirmDelete_button'
    },
    closeDeleteModal: {
        selector: '#close_button'
    }
};

const builderCommands = {
    
    validLogin: function(email, password) {
        return this
        .setValue('@email', email)
        .setValue('@password', password)
        .click('@loginButton') 
    },
    basicInfo: function(storeName, storeShop, tagline, about) {
        return this
        .setValue('@storeName', storeName)
        .setValue('@storeShop', storeShop)
        .setValue('@tagline', tagline)
        .setValue('@about', about)
        .click('@nextButton')
    },
    contactDetails: function(address, contact, landline, sellersEmail, facebook, instagram, shopee ) {
        return this
        .setValue('@address', address)
        .setValue('@contact', contact)
        .setValue('@landline', landline)
        .setValue('@sellersEmail', sellersEmail)
        .setValue('@facebook', facebook)
        .setValue('@instagram', instagram)
        .setValue('@shopee', shopee)
        .click('@nextButton')
    },
    branding: function() {
        return this
        .click('@twotoneColor')
        .click('@minimalist')
        .click('@deleteButton')
        .click('@deleteConfirmation')
        .click('@closeDeleteModal')
        

    },
    product1: function(productName1, productPrice1, productCategory1, productDescription1) {
        return this
        .waitForElementVisible('@productName')
        .setValue('@productName', productName1)
        .setValue('@productPrice', productPrice1)
        .setValue('@productCategory', productCategory1)
        .setValue('@productDescription', productDescription1)
        .click('@saveAddNewProduct')
    },
    product2: function(productName2, productPrice2, productCategory2, productDescription2) {
        return this
        .waitForElementVisible('@productName')
        .setValue('@productName', productName2)
        .setValue('@productPrice', productPrice2)
        .setValue('@productCategory', productCategory2)
        .setValue('@productDescription', productDescription2)
        .click('@saveAddNewProduct')
    },
    product3: function(productName3, productPrice3, productCategory3, productDescription3) {
        return this
        .waitForElementVisible('@productName')
        .setValue('@productName', productName3)
        .setValue('@productPrice', productPrice3)
        .setValue('@productCategory', productCategory3)
        .setValue('@productDescription', productDescription3)
        .click('@saveAddNewProduct')
    },
    product4: function(productName4, productPrice4, productCategory4, productDescription4) {
        return this
        .waitForElementVisible('@productName')
        .setValue('@productName', productName4)
        .setValue('@productPrice', productPrice4)
        .setValue('@productCategory', productCategory4)
        .setValue('@productDescription', productDescription4)
        .click('@saveProduct')
        .click('@nextButton')
    },
    payment: function(accountName, accountNumber, gcashNumber, paymayaNumber, paypalLink) {
        return this
        .waitForElementVisible('@accountName')
        .setValue('@accountName', accountName)
        .setValue('@accountNumber', accountNumber)
        .setValue('@gcashNumber', gcashNumber)
        .setValue('@paymayaNumber', paymayaNumber)
        .setValue('@paypalLink', paypalLink)
    }
}

module.exports = {
    url: function () {
        return this.api.launchUrl;
    },
    commands: [builderCommands],
    elements: elements
}