const { Given, When, Then } = require('cucumber');
const { client } = require('nightwatch-api');
const data = require('../common/dataCredentials.js');
const imageData = require('../common/dataBranding/branding')


// Scenario: User will create an online shop with five steps
Given('a user is at the dashboard page', function () {
    const builderCommands = client.page.builderCommands();
    
    return builderCommands
    .navigate()
    .maximizeWindow()   
});

When('the user clicks the Create my online shop button', function () {
    const builderCommands = client.page.builderCommands();
    
    return builderCommands
    .pause(1000)
    .click('@loginMP')
    .validLogin(data.validLogin.email, data.validLogin.password)
    .click('@loginButton')
    .pause(1000)
    .click('@createShopButton')
});

Then('the browser should redirect to store builder', function () {
    const builderCommands = client.page.builderCommands();
    
    return builderCommands
    .assert.title('Sentro | Online shop builder')
});

//  Scenario: User fill in the required fields in Basic Info
Given('a user is at the basic info page', function () {
    const builderCommands = client.page.builderCommands();
    
    return builderCommands
    .navigate()
    .maximizeWindow()   
});


When('a user fill in the required fields in Basic Info', function () {
    const builderCommands = client.page.builderCommands();
    
    return builderCommands
    .pause(1000)
    .click('@loginMP')
    .validLogin(data.validLogin.email, data.validLogin.password)
    .click('@loginButton')
    .pause(1000)
    .click('@createShopButton')
    .basicInfo(data.basicInfo.storeName,
            data.basicInfo.storeShop,
            data.basicInfo.tagline,
            data.basicInfo.about)
    .pause(1000)
    .click('@nextButton')

});

Then('browser will be redirected to contact details page', function () {
    const builderCommands = client.page.builderCommands();
    
    return builderCommands
    .assert.containsText('@contactDetailsLabel', 'Do you have other social media accounts? Provide your links here')
});


// Scenario: User fill in the required fields in Contact Details
Given('a user is at the Contact Details page', function () {
  const builderCommands = client.page.builderCommands();
    
  return builderCommands
  .navigate()
  .maximizeWindow()   
});


When('a user fill in the required field in Contact Details', function () {
  const builderCommands = client.page.builderCommands();
    
    return builderCommands
    .pause(1000)
    .click('@loginMP')
    .validLogin(data.validLogin.email, 
                data.validLogin.password)
    .click('@loginButton')
    .pause(1000)
    .click('@editButton')
    .click('@nextButton')
    .contactDetails(data.contactDetails.address,
                    data.contactDetails.contact,
                    data.contactDetails.landline,
                    data.contactDetails.sellersEmail,
                    data.contactDetails.facebook,
                    data.contactDetails.instagram,
                    data.contactDetails.shopee)
    .waitForElementVisible('@nextButton')
    .click('@nextButton')
});

Then('browser will be redirected to branding page', function () {
  const builderCommands = client.page.builderCommands();
    return builderCommands
    .assert.containsText('@brandingPageLabel', 'Cover Photo')
});

// Scenario: User uploads an image in Branding page
Given('a user is at the branding page', function () {
    const builderCommands = client.page.builderCommands();
    
    return builderCommands
    .navigate()
    .maximizeWindow()  
});

When('a user uploads an image in Branding page', function () {
    const builderCommands = client.page.builderCommands();
    
    return builderCommands
    .pause(1000)
    .click('@loginMP')
    .validLogin(data.validLogin.email, data.validLogin.password)
    .click('@loginButton')
    .pause(1000)
    .click('@editButton')
    .click('@nextButton') //step 1 basic details
    .pause(1000)
    .waitForElementVisible('@nextButton')
    .click('@nextButton') //step 2 contact details
    .waitForElementVisible('@contemporary')
    .click('@contemporary')
    .click('@twotoneColor')
    .setValue('@storeLogo', imageData.branding) 
    .setValue('@coverPhoto', imageData.branding) 
    .setValue('@aboutYourBusiness', imageData.branding) 
    .setValue('@contactUs', imageData.branding)
    .waitForElementVisible('@nextButton') 
    .click('@nextButton')
});

Then('browser will be redirected to product details page', function () {
  const builderCommands = client.page.builderCommands();

  return builderCommands
  .assert.containsText('@productsPageLabel', 'What products are you selling?')
});

// // Scenario: User uploads a product in Products page
// Given('a user is at product page', function () {
//     const builderCommands = client.page.builderCommands();
    
//     return builderCommands
//     .navigate()
//     .maximizeWindow()   
// });


// When('a user uploads a product in Product page', function () {
//     const builderCommands = client.page.builderCommands();
    
//     return builderCommands
//     .pause(1000)
//     .click('@loginMP')
//     .validLogin(data.validLogin.email, data.validLogin.password)
//     .click('@loginButton')
//     .pause(1000)
//     .click('@createShopButton')
//     .click('@nextButton')
//     .click('@nextButton')
//     .click('@nextButton')
//     .product1(data.products.productName1, 
//             data.products.productPrice1, 
//             data.products.productCategory1, 
//             data.products.productDescription1)
//     .click('@saveAddNewProduct')
//     .product2(data.products.productName2, 
//             data.products.productPrice2, 
//             data.products.productCategory2, 
//             data.products.productDescription2)
//     .click('@saveAddNewProduct')
//     .product3(data.products.productName3, 
//             data.products.productPrice3, 
//             data.products.productCategory3, 
//             data.products.productDescription3)
//     .click('@saveAddNewProduct')
//     .product4(data.products.productName4, 
//             data.products.productPrice4, 
//             data.products.productCategory4, 
//             data.products.productDescription4)
//     .click('@saveProduct')
//     .pause(1000)
//     .click('@nextButton')
// });

// Then('browser will be redirected to payments page', function () {
//   const builderCommands = client.page.builderCommands();

//   return this
//   .assert.containsText('Payment Details:', '@paymentsPageLabel', 'Where can your customers pay you?')
// });

